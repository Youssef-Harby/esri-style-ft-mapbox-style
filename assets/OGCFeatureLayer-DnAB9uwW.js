import{d as r,y as i,f as $,eT as B,ay as C,f3 as L,F as x,eX as F,aX as I,ba as N,a_ as z,aF as H,cP as O,i as J,bR as U}from"./index-CsUFEoah.js";import"./UniqueValueRenderer-D3akSGAy.js";import{a as Z,u as V}from"./jsonUtils-CBHMk4lK.js";import{m as k}from"./MultiOriginJSONSupport-CkxbXwFC.js";import{R as W,x as T,C as D,P as K,O as X,N as Y,q as ee,v as te,k as re}from"./ogcFeatureUtils-Ca_IISQ6.js";import{d as oe}from"./FeatureSet-D3YMrh1Z.js";import{i as ie}from"./APIKeyMixin-DKL8sUBS.js";import{n as se}from"./BlendLayer-KXQ-pEuy.js";import{e as pe}from"./CustomParametersMixin-CzlfVaK2.js";import{p as ne}from"./FeatureEffectLayer-cLIDWQXV.js";import{c as ae}from"./FeatureReductionLayer-EJcVCyry.js";import{u as le}from"./OperationalLayer-CniiZqNN.js";import{c as ue}from"./OrderedLayer-QmkAwqLL.js";import{j as de}from"./PortalLayer-Cn-viXRJ.js";import{f as ce}from"./RefreshableLayer-Bw9tY0Rx.js";import{t as me}from"./ScaleRangeLayer-BwrTF8B6.js";import{f as ye}from"./TemporalLayer-DXPxNx43.js";import{f as fe,m as he,c as ge,y as ve,p as Se,d as Ce}from"./commonProperties-C-6_1J3u.js";import{n as Re}from"./FeatureType-CCuQW0ka.js";import{s as be}from"./fieldProperties-CK_KEq-s.js";import{C as we}from"./LabelClass-GX6nV07j.js";import{i as xe}from"./labelingInfo-BlCJ1E0M.js";import{p as Fe}from"./popupUtils-DHYN_7mG.js";import"./ColorStop-CD5pVs4K.js";import"./diffUtils-DTfem5XL.js";import"./colorRamps-CRAqbw4j.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-CKI3fhtr.js";import"./lengthUtils-D_y24jhC.js";import"./jsonUtils-IOVjZB4I.js";import"./styleUtils-DjlYT8lG.js";import"./LRUCache-DDApZfXW.js";import"./Version-DzHgqm-8.js";import"./FieldsIndex-i0ME_Zch.js";import"./UnknownTimeZone-CGLiEgWN.js";import"./OverrideHelper-DeJTtjvS.js";import"./colorUtils-ORtp61kZ.js";import"./vec42-C3rPPDSS.js";import"./vec4f64-CCf6w8sj.js";import"./utils-DeNwuiN2.js";import"./quantizationUtils-BpZdSdEI.js";import"./heatmapUtils-Ca5may50.js";import"./featureConversionUtils-BjpcOb89.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./geojson-DE2d6_u5.js";import"./date-M6n_RqpC.js";import"./clientSideDefaults-CiO5NAfe.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./defaultsJSON-CHAaurhX.js";import"./sourceUtils-DZDFRW5u.js";import"./jsonUtils-D2YmUXMm.js";import"./parser-D7tIHZo0.js";import"./FeatureEffect-CSOxBIaq.js";import"./FeatureReductionSelection-D2ImKRF5.js";import"./featureLayerUtils-B03ggaxT.js";import"./AttachmentQuery-CLTfBN0-.js";import"./RelationshipQuery-BYvDYUjL.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-D08Vu_-r.js";import"./portalItemUtils-BVIE9rnJ.js";import"./TimeInfo-CCb8GXrz.js";import"./ElevationInfo-DoYTEsSv.js";import"./FeatureTemplate-BU6NOqvn.js";import"./labelUtils-897NphYI.js";let d=class extends B{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:p},layer:{apiKey:n,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:n,customParameters:l},spatialReference:s,supportedCrs:p}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(s=>oe.fromJSON(s))}queryFeaturesJSON(e,t={}){const s=this.getSource();return this.load(t).then(()=>W(s,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const s=new RegExp(`^${t}$`,"i");return e.conformsTo.some(p=>s.test(p))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){var s,p,n,l,a;const t=(s=e==null?void 0:e.components)==null?void 0:s.parameters;return((n=(p=t==null?void 0:t.limit)==null?void 0:p.schema)==null?void 0:n.maximum)??((a=(l=t==null?void 0:t.limitFeatures)==null?void 0:l.schema)==null?void 0:a.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??T,s=D(t);return s==null?C.WGS84:new C({wkid:s})}_getSupportedSpatialReferences(e,t){const s="#/crs",p=e.crs??[T],n=p.includes(s)?p.filter(a=>a!==s).concat(t.crs??[]):p,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter(a=>!l.test(a))}async _loadOGCServices(e,t){const s=t!=null?t.signal:null,{apiKey:p,collectionId:n,customParameters:l,fields:a,geometryType:y,hasZ:f,objectIdField:j,timeInfo:h,url:P}=e,_={fields:a==null?void 0:a.map(u=>u.toJSON()),geometryType:L.toJSON(y),hasZ:f??!1,objectIdField:j,timeInfo:h==null?void 0:h.toJSON()},c={apiKey:p,customParameters:l,signal:s},g=await K(P,c),[R,b]=await Promise.all([X(g,c),Y(g,c)]);if(!this._conformsToType(R,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new x("ogc-feature-layer:no-geojson-support","Server does not support geojson");const m=b.collections.find(({id:u})=>u===n);if(!m)throw new x("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const E=this._conformsToType(R,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await ee(g,c):null,w=await te(m,_,c),q=this._getMaxRecordCount(E),A=this._getCapabilities(w.hasZ,q),G=this._getStorageSpatialReference(m).toJSON(),M=this._getSupportedSpatialReferences(m,b),Q=new RegExp(`^${re}`,"i"),v={};for(const u of M){const S=D(u);S!=null&&(v[S]||(v[S]=u.replace(Q,"")))}this.featureDefinition={capabilities:A,collection:m,layerDefinition:w,spatialReference:G,supportedCrs:v}}};r([i()],d.prototype,"featureDefinition",void 0),r([i({constructOnly:!0})],d.prototype,"layer",void 0),r([i()],d.prototype,"type",void 0),d=r([$("esri.layers.graphics.sources.OGCFeatureSource")],d);const Ie=be();let o=class extends ie(pe(ae(ne(se(ue(ye(me(le(de(ce(k(U)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){F(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Fe(this,e)}createQuery(){return new I}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let s,p=!1;const n=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return l!=null&&this.types&&(p=this.types.some(y=>{var f;return y.id==l&&(s=(f=y.domains)==null?void 0:f[e],(s==null?void 0:s.type)==="inherited"&&(s=this._getLayerDomain(e)),!0)})),p||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(I.from(e)||this.createQuery(),t)).then(s=>{var p;return(p=s==null?void 0:s.features)==null||p.forEach(n=>{n.layer=n.sourceLayer=this}),s})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),F(this.renderer,this.fieldsIndex),N(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([i({readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"capabilities",void 0),r([i({type:String,json:{write:!0}})],o.prototype,"collectionId",void 0),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],o.prototype,"description",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Number})],o.prototype,"effectiveMaxRecordCount",null),r([i(fe)],o.prototype,"elevationInfo",void 0),r([i({type:[z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],o.prototype,"fields",void 0),r([i(Ie.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({readOnly:!0,type:H,json:{origins:{service:{name:"layerDefinition.extent"}}}})],o.prototype,"fullExtent",void 0),r([i({type:O.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:O.read}}}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],o.prototype,"hasZ",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i({type:[we],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:xe},write:!0}}}})],o.prototype,"labelingInfo",void 0),r([i(he)],o.prototype,"labelsVisible",void 0),r([i(ge)],o.prototype,"legendEnabled",void 0),r([i({type:Number})],o.prototype,"maxRecordCount",void 0),r([i({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i({type:["OGCFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(ve)],o.prototype,"popupEnabled",void 0),r([i({type:J,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:Z,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:V,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],o.prototype,"renderer",null),r([i(Se)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({readOnly:!0,type:C,json:{origins:{service:{read:!0}}}})],o.prototype,"spatialReference",void 0),r([i({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],o.prototype,"title",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),r([i({type:[Re]})],o.prototype,"types",void 0),r([i(Ce)],o.prototype,"url",void 0),o=r([$("esri.layers.OGCFeatureLayer")],o);const Mt=o;export{Mt as default};