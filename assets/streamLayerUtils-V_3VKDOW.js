import{$ as m,j as c}from"./utils-igSRDzdQ.js";import{l as u,a as p,f as i,i as y}from"./portalItemUtils-BVIE9rnJ.js";import"./index-CsUFEoah.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./jsonContext-B8p4OeMS.js";import"./saveAPIKeyUtils-B9P569RU.js";import"./saveUtils-CWZYTF9B.js";const n="Stream Service",f="Feed",d="stream-layer-save",v="stream-layer-save-as";function s(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function o(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function x(r,e){const{parsedUrl:t,title:l,fullExtent:a}=r;e.url=t.path,e.title||(e.title=l),e.extent=null,a!=null&&(e.extent=await u(a)),p(e,i.METADATA),y(e,i.SINGLE_LAYER)}async function b(r,e){return m({layer:r,itemType:n,additionalItemType:f,validateLayer:s,createItemData:o,errorNamePrefix:d},e)}async function g(r,e,t){return c({layer:r,itemType:n,validateLayer:s,createItemData:o,errorNamePrefix:v,newItem:e,setItemProperties:x},t)}export{b as save,g as saveAs};