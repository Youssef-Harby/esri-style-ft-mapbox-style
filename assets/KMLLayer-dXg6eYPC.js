import{ca as O,dm as _,z as v,ez as u,g as y,fK as m,aE as d,aT as F,V as b,d as s,y as l,fL as j,aZ as h,f as g,fw as M,bP as $,bQ as C,dp as T,dq as I,dr as K,C as P,aS as S,bV as R,ay as N,aR as z,du as J,bT as V}from"./index-BjUNJPVf.js";import{f as A}from"./RefreshableLayer-_r2TPtol.js";import{j as W,S as w,g as x,d as E}from"./kmlUtils-C6tn6hG1.js";import"./jsonUtils-Dw332y6z.js";import"./UniqueValueRenderer-7V9Bhr-D.js";import"./ColorStop-DCGjAKLC.js";import"./diffUtils-uUoMDFQS.js";import"./colorRamps-CcakIWlU.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-BX9G5gNQ.js";import"./jsonUtils-Ox5U0P0F.js";import"./styleUtils-DOUOskVZ.js";import"./Version-Dqq_CHBG.js";import"./FieldsIndex-CK-0B5n9.js";import"./UnknownTimeZone-CK7VjgF3.js";import"./OverrideHelper-DxFZBnGL.js";import"./utils-CuXO_Zzq.js";import"./quantizationUtils-CfV316jZ.js";import"./heatmapUtils-BSteZBTj.js";import"./FeatureSet-opEn8ou8.js";var p;let a=p=class extends O.EventedMixin(_(M)){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([v(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},u),v(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},u),y(()=>this.sublayers,(t,r)=>{if(r)for(const i of r)i.layer=i.parent=null;if(t)for(const i of t)i.parent=this,i.layer=this.layer},u),y(()=>this.layer,t=>{if(this.sublayers)for(const r of this.sublayers)r.layer=t},u)])}initialize(){m(()=>this.networkLink).then(()=>m(()=>this.visible===!0)).then(()=>this.load())}load(e){var i;if(!this.networkLink||this.networkLink.viewFormat)return;const t=e!=null?e.signal:null,r=this._fetchService(((i=this._get("networkLink"))==null?void 0:i.href)??"",t).then(n=>{var c;const L=W(n.sublayers);this.fullExtent=d.fromJSON(L),this.sourceJSON=n;const f=F(b.ofType(p),w(p,n));this.sublayers?this.sublayers.addMany(f):this.sublayers=f,(c=this.layer)==null||c.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return x(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(r=>E(r.data))}};s([l()],a.prototype,"description",void 0),s([l({type:d})],a.prototype,"fullExtent",void 0),s([l()],a.prototype,"id",void 0),s([l({readOnly:!0,value:null})],a.prototype,"networkLink",void 0),s([l({json:{write:{allowNull:!0}}})],a.prototype,"parent",void 0),s([l({type:b.ofType(a),json:{write:{allowNull:!0}}})],a.prototype,"sublayers",void 0),s([l({value:null,json:{read:{source:"name",reader:e=>j(e)}}})],a.prototype,"title",void 0),s([l({value:!0})],a.prototype,"visible",null),s([h("visible",["visibility"])],a.prototype,"readVisible",null),s([l()],a.prototype,"sourceJSON",void 0),s([l()],a.prototype,"layer",void 0),a=p=s([g("esri.layers.support.KMLSublayer")],a);const k=a,H=["kml","xml"];let o=class extends $(A(C(T(I(K(V)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new P({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.outSpatialReference=S.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([y(()=>this.sublayers,(e,t)=>{t&&t.forEach(r=>{r.parent=null,r.layer=null}),e&&e.forEach(r=>{r.parent=this,r.layer=this})},u),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return w(k,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],i=e.toArray();for(;i.length;){const n=i[0];n.networkLink||(n.visible&&r.push(n.id),n.sublayers&&i.push(...n.sublayers.toArray())),i.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?R(this.url,H)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=i=>{i.visible&&(t.push(i),i.sublayers&&i.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(N).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:x(this.url??"",this.outSpatialReference,this.refreshInterval,e)),r=E(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent!=null&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const i of r.sublayers.items)t(i),i.visible&&i.fullExtent&&(e!=null?e.union(i.fullExtent):e=i.fullExtent.clone())};return t(this),e}};s([l({readOnly:!0})],o.prototype,"allSublayers",void 0),s([l({type:S})],o.prototype,"outSpatialReference",void 0),s([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),s([l({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),s([l({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),s([l({type:["KML"]})],o.prototype,"operationalLayerType",void 0),s([l({})],o.prototype,"resourceInfo",void 0),s([l({type:b.ofType(k),json:{write:{ignoreOrigin:!0}}})],o.prototype,"sublayers",void 0),s([h(["web-map","portal-item"],"sublayers",["visibleFolders"])],o.prototype,"readSublayersFromItemOrWebMap",null),s([h("service","sublayers",["sublayers"])],o.prototype,"readSublayers",null),s([z("sublayers")],o.prototype,"writeSublayers",null),s([l({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),s([l({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],o.prototype,"title",null),s([l(J)],o.prototype,"url",void 0),s([l({readOnly:!0})],o.prototype,"visibleSublayers",null),s([l({type:d})],o.prototype,"extent",void 0),s([l()],o.prototype,"fullExtent",null),o=s([g("esri.layers.KMLLayer")],o);const ye=o;export{ye as default};