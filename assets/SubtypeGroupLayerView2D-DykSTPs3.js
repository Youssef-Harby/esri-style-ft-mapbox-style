import{d as a,f as n,g as d,P as u,E as l}from"./index-BjUNJPVf.js";import{X as g}from"./FeatureLayerView2D-B6lIa9Lt.js";import"./diffUtils-uUoMDFQS.js";import"./Container-_n5wCgez.js";import"./highlightReasons-BOU4mnPE.js";import"./Texture-S4dD-WHn.js";import"./FeatureEffect-DBbkrS6j.js";import"./FeatureSet-opEn8ou8.js";import"./LayerView-Bux7vAEn.js";import"./scaleUtils-DWXMiS7R.js";import"./TechniqueInstance-XtnK2qy2.js";import"./UpdateTracking2D-Ds_Gdrxd.js";import"./TurboLine-DNQdPIXo.js";import"./earcut-CWKXDqDj.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./utils-CuXO_Zzq.js";import"./Rect-CUzevAry.js";import"./LabelMetric-BcUxDImF.js";import"./Program-DBsYtQ00.js";import"./labelUtils-3p0-m-Ee.js";import"./defaultsJSON-CHAaurhX.js";import"./BindType-BmZEZMMh.js";import"./Util-CS5u4Lec.js";import"./constants-D5zmR9t2.js";import"./TileContainer-Bs-vXdD_.js";import"./WGLContainer-DgZNq7b0.js";import"./ProgramTemplate-Ck2I0bIi.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-BHhm7bvm.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./tileUtils-B7X19rIS.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./OrderByInfo-DKyk5GLW.js";import"./labelingInfo-DqAUis6e.js";import"./LabelClass-CeatfK8u.js";import"./jsonUtils-Ox5U0P0F.js";import"./heatmapUtils-BSteZBTj.js";import"./SDFHelper-kKuXhauo.js";import"./floatRGBA-Cs54GdjG.js";import"./FeatureCommandQueue-DI81F3gA.js";import"./HighlightCounter-qEuAaY1V.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-Do2GfZME.js";import"./RefreshableLayerView-L9NGpXXI.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._worker,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const pi=i;export{pi as default};
