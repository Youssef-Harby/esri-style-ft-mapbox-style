import{N as $,aV as G,c8 as L,ax as P,j as I}from"./index-C4o9E24G.js";import{n as T,a as F,m as w}from"./TimeOnly-D7lhXrrF.js";import{t as J}from"./ImmutableArray-BlMso3qf.js";import M from"./FeatureLayer-CV3PAQdK.js";import{d as z}from"./FeatureSet-RJYiwUyB.js";import"./UnknownTimeZone-S21V1uz7.js";import"./UniqueValueRenderer-BoDWR4NB.js";import"./ColorStop-yyS1muLm.js";import"./diffUtils-DUOlX9Yx.js";import"./colorRamps-BSgdLlEi.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-D8zn8vxD.js";import"./jsonUtils-CG9TbLOP.js";import"./styleUtils-DaJF9NJT.js";import"./jsonUtils-D1-oxEaz.js";import"./Version-BkB_hB5o.js";import"./FieldsIndex-DgA0xIJQ.js";import"./OverrideHelper-DSvwq8ZL.js";import"./utils-FxrC-M-X.js";import"./quantizationUtils-DQ21mfhw.js";import"./heatmapUtils-BLPb12uF.js";import"./FormTemplate-Bhus7hVX.js";import"./editsZScale-D1VTqxEn.js";import"./queryZScale-Cy8-GaGV.js";import"./EditBusLayer-UTitItxX.js";import"./FeatureEffectLayer-BoYVZjJ8.js";import"./FeatureEffect-DPm3oE6P.js";import"./FeatureLayerBase-Bss_zYcC.js";import"./featureLayerUtils-ClSzyL-R.js";import"./AttachmentQuery-CEZv4wHx.js";import"./RelationshipQuery-BlOVyfmV.js";import"./LayerFloorInfo-Cx1eEVT5.js";import"./serviceCapabilitiesUtils-YMwgKks9.js";import"./FeatureReductionLayer-k6xSlMot.js";import"./FeatureReductionSelection-R8-4zc5x.js";import"./LabelClass-DIrB-jiZ.js";import"./labelUtils-BoVpV1QB.js";import"./defaultsJSON-CHAaurhX.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-0Oi0hMjt.js";import"./OrderByInfo-p0S-LxQC.js";import"./RefreshableLayer-Ntt5o5fF.js";import"./TemporalLayer-Cr2sYYYT.js";import"./TimeInfo-nUcrVRK_.js";import"./FeatureTemplate-BhDVECs5.js";import"./FeatureType-BzUbDngd.js";import"./fieldProperties-ByAF2sU_.js";import"./labelingInfo-Dz7XkiLU.js";import"./versionUtils-Dhw_Mchv.js";import"./styleUtils-Yspidhjx.js";import"./TopFeaturesQuery-Bm-Cpurs.js";import"./popupUtils-t35PoBD4.js";import"./interfaces-CL2NbQte.js";let b=null;function N(e,n,a,o={}){const t=n.elementType,i="value",c=t.type==="array"?[{name:i,type:t.type,elementType:t.elementType}]:t.type==="dictionary"?[{name:i,type:t.type,properties:t.properties}]:[{name:i,type:t.type}];return new J(e.map(s=>{const r={};return g(r,c,{[i]:s},a,o),r[i]}))}function E(e,n,a={}){const o=e instanceof z?new M({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return n.constructFeatureSet(o,a.spatialReference,null,!0,a.lruCache,a.interceptor)}function Q(e,n,a={}){const{spatialReference:o,interceptor:t,lruCache:i}=a;return typeof e=="string"?n.createFeatureSetCollectionFromService(e,o,i,t):n.createFeatureSetCollectionFromMap(e,o,i,t)}function V(e,n,a,o={}){const t={};return g(t,n.properties,e,a,o),new b.Dictionary(t)}function g(e,n,a,o,t={}){const i={};for(const c of Object.keys(a))i[c.toLowerCase()]=a[c];for(const c of n){const s=c.name.toLowerCase();if(t.variablesPreProcessed)e[s]=i[s];else switch(c.type){case"array":{const r=i[s];e[s]=r==null?null:N(r,c,o,t);break}case"feature":{const r=i[s];e[s]=r==null?null:b.Feature.createFromGraphic(r,t==null?void 0:t.timeZone);break}case"featureSet":{const r=i[s];e[s]=r==null?null:o?E(r,o,t):null;break}case"featureSetCollection":{const r=i[s];e[s]=r==null?null:o?Q(r,o,t):null;break}case"dictionary":{const r=i[s];e[s]=r==null?null:V(r,c,o,t);break}case"date":{const r=i[s];e[s]=r?r instanceof w?r:t!=null&&t.timeZone?w.dateJSAndZoneToArcadeDate(r,t==null?void 0:t.timeZone):w.dateJSToArcadeDate(r):null;break}case"dateOnly":{const r=i[s];e[s]=r?r instanceof F?r:F.fromReader(r):null;break}case"time":{const r=i[s];e[s]=r?r instanceof T?r:T.fromReader(r):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[s]=i[s]}}}function Z(e,n){for(const a of e)n.push(a),a.type==="dictionary"&&Z(a.properties,n);return n}function R(e,n,a,o,t){const{spatialReference:i,interceptor:c,lruCache:s,console:r,abortSignal:u,timeZone:l,services:S={portal:P.getDefault()}}=a,f={vars:{},spatialReference:i,interceptor:c,timeZone:l,lrucache:s,useAsync:t,services:S,console:r,abortSignal:u};return n&&g(f.vars,e.variables,n,o,a),f}function v(e,n){switch(n.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const a=(e.type,e),o="geometry"in a?a.geometry():null,t="readAttributes"in a?a.readAttributes():a.attributes;return new I({geometry:o,attributes:t})}case"dictionary":{const a=e,o=a.attributes,t={};for(const i of Object.keys(o))t[i]=v(a.field(i),n);return t}case"array":return("toArray"in e?e.toArray():e).map(a=>v(a,n))}return e}const D={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},O={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},U=new Map([["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",D],["popup-element",D],["feature-reduction-popup",O],["feature-reduction-popup-element",O],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function Ve(e){const n=U.get(e);if(!n){const a=Array.from(U.keys()).map(o=>`'${o}'`).join(", ");throw new $("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${a}`)}return G(n)}async function We(e,n,a={}){b||(b=await L());const{arcade:o,arcadeUtils:t}=b,{loadScriptDependencies:i,referencesMember:c,scriptIsAsync:s}=o,r=Z(n.variables,[]),u=r.filter(p=>p.type==="featureSet"||p.type==="featureSetCollection").map(p=>p.name.toLowerCase()),l=o.parseScript(e,u);if(!l)throw new $("arcade:invalid-script","Unable to create SyntaxTree");const S=t.extractFieldNames(l),f=o.scriptTouchesGeometry(l),h=r.map(p=>p.name.toLowerCase()).filter(p=>c(l,p)),m=s(l,u);await i(l,m,u);const C={vars:{},spatialReference:null,useAsync:m};for(const p of h)C.vars[p]="any";const{lruCache:A}=a,x=o.compileScript(l,C),k=o.featureSetUtils(),{services:j}=a;return{execute:(p,y={})=>{if(m)throw new $("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const d=x(R(n,p,{lruCache:A,...y},k,m));return y.rawOutput?d:v(d,t)},executeAsync:async(p,y={})=>{const d=await x(R(n,p,{lruCache:A,services:j,...y},k,m));return y.rawOutput?d:v(d,t)},isAsync:m,variablesUsed:h,fieldsUsed:S,geometryUsed:f,syntaxTree:l}}export{We as createArcadeExecutor,Ve as createArcadeProfile};