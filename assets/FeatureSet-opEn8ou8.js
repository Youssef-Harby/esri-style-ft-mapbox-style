import{aY as j,d as h,y as d,j as N,aZ as S,a_ as F,aR as T,a$ as P,aS as w,f as q,aU as J,b0 as O,aV as M,ab as v}from"./index-BjUNJPVf.js";var G;const z=new j({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let c=G=class extends J{constructor(r){super(r),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(r,a){var s;const o=w.fromJSON(a.spatialReference),e=[];for(let t=0;t<r.length;t++){const l=r[t],f=N.fromJSON(l),u=(s=l.geometry)==null?void 0:s.spatialReference;f.geometry==null||u||(f.geometry.spatialReference=o);const n=l.aggregateGeometries,y=f.aggregateGeometries;if(n&&y!=null)for(const i in y){const m=y[i],g=n[i],p=g==null?void 0:g.spatialReference;m==null||p||(m.spatialReference=o)}e.push(f)}return e}writeGeometryType(r,a,o,e){if(r)return void z.write(r,a,o,e);const{features:s}=this;if(s){for(const t of s)if((t==null?void 0:t.geometry)!=null)return void z.write(t.geometry.type,a,o,e)}}readQueryGeometry(r,a){if(!r)return null;const o=!!r.spatialReference,e=O(r);return e&&!o&&a.spatialReference&&(e.spatialReference=w.fromJSON(a.spatialReference)),e}writeSpatialReference(r,a){if(r)return void(a.spatialReference=r.toJSON());const{features:o}=this;if(o){for(const e of o)if(e&&e.geometry!=null&&e.geometry.spatialReference)return void(a.spatialReference=e.geometry.spatialReference.toJSON())}}clone(){return new G(this.cloneProperties())}cloneProperties(){return M({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(r){const a=this.write();if(a.features&&Array.isArray(r)&&r.length>0)for(let o=0;o<a.features.length;o++){const e=a.features[o];if(e.geometry){const s=r==null?void 0:r[o];e.geometry=(s==null?void 0:s.toJSON())||e.geometry}}return a}quantize(r){const{scale:[a,o],translate:[e,s]}=r,t=n=>Math.round((n-e)/a),l=n=>Math.round((s-n)/o),f=this.features,u=this._getQuantizationFunction(this.geometryType,t,l);for(let n=0,y=f.length;n<y;n++)u!=null&&u(f[n].geometry)||(f.splice(n,1),n--,y--);return this.transform=r,this}unquantize(){var m,g;const{geometryType:r,features:a,transform:o}=this;if(!o)return this;const{translate:[e,s],scale:[t,l]}=o,f=p=>p*t+e,u=p=>s-p*l;let n=null,y=null;if(this.hasZ&&((m=o==null?void 0:o.scale)==null?void 0:m[2])!=null){const{translate:[,,p],scale:[,,R]}=o;n=x=>x*R+p}if(this.hasM&&((g=o==null?void 0:o.scale)==null?void 0:g[3])!=null){const{translate:[,,,p],scale:[,,,R]}=o;y=x=>x==null?x:x*R+p}const i=this._getHydrationFunction(r,f,u,n,y);for(const{geometry:p}of a)p!=null&&i&&i(p);return this.transform=null,this}_quantizePoints(r,a,o){let e,s;const t=[];for(let l=0,f=r.length;l<f;l++){const u=r[l];if(l>0){const n=a(u[0]),y=o(u[1]);n===e&&y===s||(t.push([n-e,y-s]),e=n,s=y)}else e=a(u[0]),s=o(u[1]),t.push([e,s])}return t.length>0?t:null}_getQuantizationFunction(r,a,o){return r==="point"?e=>(e.x=a(e.x),e.y=o(e.y),e):r==="polyline"||r==="polygon"?e=>{const s=v(e)?e.rings:e.paths,t=[];for(let l=0,f=s.length;l<f;l++){const u=s[l],n=this._quantizePoints(u,a,o);n&&t.push(n)}return t.length>0?(v(e)?e.rings=t:e.paths=t,e):null}:r==="multipoint"?e=>{const s=this._quantizePoints(e.points,a,o);return s&&s.length>0?(e.points=s,e):null}:r==="extent"?e=>e:null}_getHydrationFunction(r,a,o,e,s){return r==="point"?t=>{t.x=a(t.x),t.y=o(t.y),e&&(t.z=e(t.z))}:r==="polyline"||r==="polygon"?t=>{const l=v(t)?t.rings:t.paths;let f,u;for(let n=0,y=l.length;n<y;n++){const i=l[n];for(let m=0,g=i.length;m<g;m++){const p=i[m];m>0?(f+=p[0],u+=p[1]):(f=p[0],u=p[1]),p[0]=a(f),p[1]=o(u)}}if(e&&s)for(let n=0,y=l.length;n<y;n++){const i=l[n];for(let m=0,g=i.length;m<g;m++){const p=i[m];p[2]=e(p[2]),p[3]=s(p[3])}}else if(e)for(let n=0,y=l.length;n<y;n++){const i=l[n];for(let m=0,g=i.length;m<g;m++){const p=i[m];p[2]=e(p[2])}}else if(s)for(let n=0,y=l.length;n<y;n++){const i=l[n];for(let m=0,g=i.length;m<g;m++){const p=i[m];p[2]=s(p[2])}}}:r==="extent"?t=>{t.xmin=a(t.xmin),t.ymin=o(t.ymin),t.xmax=a(t.xmax),t.ymax=o(t.ymax),e&&t.zmax!=null&&t.zmin!=null&&(t.zmax=e(t.zmax),t.zmin=e(t.zmin)),s&&t.mmax!=null&&t.mmin!=null&&(t.mmax=s(t.mmax),t.mmin=s(t.mmin))}:r==="multipoint"?t=>{const l=t.points;let f,u;for(let n=0,y=l.length;n<y;n++){const i=l[n];n>0?(f+=i[0],u+=i[1]):(f=i[0],u=i[1]),i[0]=a(f),i[1]=o(u)}if(e&&s)for(let n=0,y=l.length;n<y;n++){const i=l[n];i[2]=e(i[2]),i[3]=s(i[3])}else if(e)for(let n=0,y=l.length;n<y;n++){const i=l[n];i[2]=e(i[2])}else if(s)for(let n=0,y=l.length;n<y;n++){const i=l[n];i[2]=s(i[2])}}:null}};h([d({type:String,json:{write:!0}})],c.prototype,"displayFieldName",void 0),h([d({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],c.prototype,"exceededTransferLimit",void 0),h([d({type:[N],json:{write:!0}})],c.prototype,"features",void 0),h([S("features")],c.prototype,"readFeatures",null),h([d({type:[F],json:{write:!0}})],c.prototype,"fields",void 0),h([d({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:z.read}}})],c.prototype,"geometryType",void 0),h([T("geometryType")],c.prototype,"writeGeometryType",null),h([d({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],c.prototype,"hasM",void 0),h([d({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],c.prototype,"hasZ",void 0),h([d({types:P,json:{write:!0}})],c.prototype,"queryGeometry",void 0),h([S("queryGeometry")],c.prototype,"readQueryGeometry",null),h([d({type:w,json:{write:!0}})],c.prototype,"spatialReference",void 0),h([T("spatialReference")],c.prototype,"writeSpatialReference",null),h([d({json:{write:!0}})],c.prototype,"transform",void 0),c=G=h([q("esri.rest.support.FeatureSet")],c),c.prototype.toJSON.isDefaultToJSON=!0;const $=c;export{$ as d};