import{$ as m,j as c}from"./utils-DMAmLOKz.js";import{ei as u,ej as y,el as s,en as p}from"./index-C4o9E24G.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveAPIKeyUtils-Dkv8zYBA.js";import"./saveUtils-V0sfchju.js";const i="Stream Service",f="Feed",d="stream-layer-save",v="stream-layer-save-as";function n(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function l(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function x(r,e){const{parsedUrl:a,title:o,fullExtent:t}=r;e.url=a.path,e.title||(e.title=o),e.extent=null,t!=null&&(e.extent=await u(t)),y(e,s.METADATA),p(e,s.SINGLE_LAYER)}async function N(r,e){return m({layer:r,itemType:i,additionalItemType:f,validateLayer:n,createItemData:l,errorNamePrefix:d},e)}async function P(r,e,a){return c({layer:r,itemType:i,validateLayer:n,createItemData:l,errorNamePrefix:v,newItem:e,setItemProperties:x},a)}export{N as save,P as saveAs};