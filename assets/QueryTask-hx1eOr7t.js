function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/meshFeatureSet-eC8XT73v.js","assets/index-C4o9E24G.js","assets/index-DhPzDPUY.css","assets/Mesh-BOF4TZso.js","assets/georeference-DZvPK0e2.js","assets/mat3f64-q3fE-ZOt.js","assets/mat4f64-CSKppSlJ.js","assets/computeTranslationToOriginAndRotation-BJwrcp0W.js","assets/DoubleArray-Ddpr4lKF.js","assets/quat-Dqj4Cd6C.js","assets/quatf64-Bdb9ZJJK.js","assets/meshVertexSpaceUtils-CmnTGc1n.js","assets/MeshLocalVertexSpace-OzNiQxyT.js","assets/vec3-CD8zsdcj.js","assets/BufferView-Bj5EACwf.js","assets/imageUtils-vOQmqdCP.js","assets/earcut-B47ZBR4f.js","assets/Indices-XPTIHP9r.js","assets/deduplicate-BlhD8ufU.js","assets/plane-i4HSpSD1.js","assets/triangle-BIvMbw4V.js","assets/Util-BB3CCvh9.js","assets/ObjectStack-CbwSzoKM.js","assets/lineSegment-BfWQ2dPM.js","assets/basicInterfaces-GbxEOYtk.js","assets/VertexAttribute-BlT9lbVY.js","assets/External-CukybAap.js","assets/infoFor3D-DsOdlPuA.js","assets/FeatureSet-RJYiwUyB.js","assets/RelationshipQuery-BlOVyfmV.js","assets/executeRelationshipQuery-Dk32JkPu.js","assets/query-CvdyxypY.js","assets/pbfQueryUtils--B7QiVG8.js","assets/pbf-kQPLzQOm.js","assets/OptimizedGeometry-CQuTPb9g.js","assets/OptimizedFeatureSet-Blu9Ckm7.js","assets/queryZScale-Cy8-GaGV.js","assets/queryAttachments-jbT80jl5.js","assets/AttachmentInfo-BkN64oUc.js","assets/executeTopFeaturesQuery-BWuIxtjC.js","assets/queryTopFeatures-CvXF6JwT.js","assets/TopFeaturesQuery-Bm-Cpurs.js","assets/executeForTopIds-DAK4GoKQ.js","assets/executeForTopExtents-DeudLIHk.js","assets/executeForTopCount-CY_YVDP0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{aW as h,aX as _,aE as T,d as a,y as l,aQ as S,f as A,a7 as N,bW as w,E as Q,fy as d,_ as n,N as P}from"./index-C4o9E24G.js";import{u as f,i as y}from"./infoFor3D-DsOdlPuA.js";import{n as j,s as q}from"./executeForIds-VT0o4hzg.js";import{x as L}from"./query-CvdyxypY.js";import{a as J}from"./executeQueryJSON-BtAYjNwu.js";import{n as z}from"./executeQueryPBF-4DS1Oooa.js";import{d as $}from"./FeatureSet-RJYiwUyB.js";async function C(e,t,r){const o=h(e),u=await L(o,_.from(t),{...r}),i=u.data.extent;return!i||isNaN(i.xmin)||isNaN(i.ymin)||isNaN(i.xmax)||isNaN(i.ymax)?{count:u.data.count,extent:null}:{count:u.data.count,extent:T.fromJSON(i)}}let s=class extends N{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return w(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var c;const r=this._normalizeQuery(e),o=((c=e.outStatistics)==null?void 0:c[0])!=null,u=Q("featurelayer-pbf-statistics"),i=!o||u;let p;if(this.pbfSupported&&i)try{p=await z(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&i||(p=await J(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return $.fromJSON(t);const{meshFeatureSetFromJSON:o}=await d(n(()=>import("./meshFeatureSet-eC8XT73v.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28])),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return j(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return C(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return q(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await d(Promise.all([n(()=>import("./RelationshipQuery-BlOVyfmV.js"),__vite__mapDeps([29,1,2])),n(()=>import("./executeRelationshipQuery-Dk32JkPu.js"),__vite__mapDeps([30,1,2,31,32,33,34,35,36,28,29]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await d(Promise.all([n(()=>import("./RelationshipQuery-BlOVyfmV.js"),__vite__mapDeps([29,1,2])),n(()=>import("./executeRelationshipQuery-Dk32JkPu.js"),__vite__mapDeps([30,1,2,31,32,33,34,35,36,28,29]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:u}=await d(n(()=>import("./queryAttachments-jbT80jl5.js"),__vite__mapDeps([37,1,2,31,32,33,34,35,36,38])),t),i=h(this.url);return u(i,await(this.queryAttachmentsSupported?r(i,e,t):o(i,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await d(n(()=>import("./executeTopFeaturesQuery-BWuIxtjC.js"),__vite__mapDeps([39,1,2,40,31,32,33,34,35,36,28,41])),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await d(n(()=>import("./executeForTopIds-DAK4GoKQ.js"),__vite__mapDeps([42,1,2,40,31,32,33,34,35,36,41])),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await d(n(()=>import("./executeForTopExtents-DeudLIHk.js"),__vite__mapDeps([43,1,2,40,31,32,33,34,35,36,41])),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await d(n(()=>import("./executeForTopCount-CY_YVDP0.js"),__vite__mapDeps([44,1,2,40,31,32,33,34,35,36,41])),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?S.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:u}=r,i=f("model/gltf-binary",o)??y("glb",o),p=f("model/gltf+json",o)??y("gltf",o);for(const c of u){if(c===i){t.formatOf3DObjects=c;break}c!==p||t.formatOf3DObjects||(t.formatOf3DObjects=c)}if(!t.formatOf3DObjects)throw new P("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:c,originY:m,originZ:D,translationX:x,translationY:b,translationZ:F,scaleX:O,scaleY:g,scaleZ:E,rotationX:V,rotationY:R,rotationZ:I,rotationDeg:v}=r.transformFieldRoles;t.outFields.push(c,m,D,x,b,F,O,g,E,V,R,I,v)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};a([l({type:S})],s.prototype,"dynamicDataSource",void 0),a([l()],s.prototype,"fieldsIndex",void 0),a([l()],s.prototype,"gdbVersion",void 0),a([l()],s.prototype,"infoFor3D",void 0),a([l({readOnly:!0})],s.prototype,"parsedUrl",null),a([l()],s.prototype,"pbfSupported",void 0),a([l()],s.prototype,"queryAttachmentsSupported",void 0),a([l()],s.prototype,"sourceSpatialReference",void 0),a([l({type:String})],s.prototype,"url",void 0),s=a([A("esri.tasks.QueryTask")],s);const K=s;export{K as x};