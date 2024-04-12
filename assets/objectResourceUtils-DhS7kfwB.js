function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/basis_transcoder--Em2hltC.js","assets/index-ky5Fj-x1.js","assets/index-BxbvTm0n.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a as Fa}from"./devEnvironmentUtils-Blrp8lZ5.js";import{ch as mo,cg as Ba,iz as za,gA as fo,fg as q,cX as fe,cW as pe,m_ as Ga,cy as G,e2 as we,m$ as Va,n0 as Ua,eM as Vr,_ as xt,gZ as ja,ir as Ee,v as Pe,L as Je,s as _r,N as Gt,D as Ge,ca as Ha,dI as Ur,jc as Wa,fp as st,kf as lt,at as jr,n1 as ka,ia as qa,jj as Ya,fV as It,jl as Xa,bm as Qe,hq as Ne,eu as Ja,kT as Za,bF as Ka,n2 as Qa,n3 as ei,cv as ti,cx as br,I as po,n4 as ri,cz as He,gL as Se,gM as je,gK as Lt,n5 as vo,n6 as go,g3 as oi,bL as ai,hf as Ae,iS as le,gQ as ii,gB as Vt,cU as We,kc as lr,d as m,ht as cr,cl as ne,bj as Er,gS as Sr,y as W,f as xo,a7 as To,n7 as _o,gT as ni,fU as yr,fj as Ze,g as si,fJ as li,B as ci,iC as di,g2 as ui,hy as dr,cT as hi,cu as mi,fh as fi,E as pi,n8 as vi,as as bo,M as gi,ay as Eo,n9 as So,hU as $t,hA as xi,kU as Hr,gY as Ti}from"./index-ky5Fj-x1.js";import{t as Zt,e as Tt,o as et}from"./mat3f64-q3fE-ZOt.js";import{o as Nt,r as _i,e as Ut}from"./mat4f64-CSKppSlJ.js";import{x as jt,c as ur,y as bi,u as Ei,q as Si,i as Pt,L as yi,O as Ci,E as wi}from"./BufferView-BdHRU1A8.js";import{r as Ai,n as Mi,u as Wr}from"./vec3-Dsb-1Cdd.js";import{l as Oi,n as Ri,i as Ve,o as Ii,j as Li,k as $i,u as kr,t as Ni,m as Pi}from"./DefaultMaterial_COLOR_GAMMA-Bgw2SudF.js";import{r as Kt}from"./resourceUtils-DinVT8D5.js";import{t as Di}from"./NestedMap-DgiGbX8E.js";import{r as yo}from"./Version-zXSAYtou.js";import{t as Fi,l as Co}from"./Indices-DCamj6Wb.js";import{t as wo}from"./requestImageUtils-u9QbKLy9.js";import{O as Bi,L as zi,t as Ue}from"./orientedBoundingBox-kM426JrC.js";import{t as Gi,u as dt,a as hr,i as Vi,N as Me,s as Z,e as Oe,n as _t}from"./basicInterfaces-GbxEOYtk.js";import{d as Ui,e as Fe,o as ji}from"./triangle-COe8S3va.js";import{s as Y}from"./Util-DdI51zn1.js";import{e as f}from"./VertexAttribute-BlT9lbVY.js";import{m as ke,a as Hi,e as Ao,c as Wi}from"./Texture-C_Fd6TEP.js";import{H as ki}from"./InterleavedLayout-DlqkuCF0.js";import{o as s,n as bt,S as Cr,_ as wr,a as Ke,c as qi,A as Yi,h as Xi,l as Ji,b as Zi,d as Ki,e as Qi}from"./OrderIndependentTransparency-s4JGv66-.js";import{w as Mo,Z as ye}from"./sphere-B6kubaxh.js";import{a as F}from"./BindType-BmZEZMMh.js";import{n as _e}from"./symbolColorUtils-Cmn5-waN.js";import{o as en,r as tn}from"./doublePrecisionUtils-B0owpBza.js";import"./RenderState-DaVlEYWY.js";import"./quat-CcMVFx7k.js";import"./quatf64-Bdb9ZJJK.js";import"./computeTranslationToOriginAndRotation-oE3l8CzT.js";import"./plane-D0uCzcXo.js";import"./ObjectStack-Xcz-e2zK.js";import"./lineSegment-DiC94Vll.js";import"./types-D0PSWh4d.js";function Et(t,e=!1){return t<=mo?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function rn(t){if(t.length<mo)return Array.from(t);if(Ba(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return za(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}let Ar=class{constructor(){this.id=fo()}};function on(t,e){if(!t)return!1;const{size:r,data:o,indices:i}=t;q(e,0,0,0),q(se,0,0,0);let a=0,n=0;for(let l=0;l<i.length-2;l+=3){const c=i[l]*r,u=i[l+1]*r,d=i[l+2]*r;q(J,o[c],o[c+1],o[c+2]),q(be,o[u],o[u+1],o[u+2]),q(St,o[d],o[d+1],o[d+2]);const h=Ui(J,be,St);h?(fe(J,J,be),fe(J,J,St),pe(J,J,1/3*h),fe(e,e,J),a+=h):(fe(se,se,J),fe(se,se,be),fe(se,se,St),n+=3)}return(n!==0||a!==0)&&(a!==0?(pe(e,e,1/a),!0):n!==0&&(pe(e,se,1/n),!0))}function an(t,e){if(!t)return!1;const{size:r,data:o,indices:i}=t;q(e,0,0,0);let a=-1,n=0;for(let l=0;l<i.length;l++){const c=i[l]*r;a!==c&&(e[0]+=o[c],e[1]+=o[c+1],e[2]+=o[c+2],n++),a=c}return n>1&&pe(e,e,1/n),n>0}function nn(t,e,r){if(!t)return!1;q(r,0,0,0),q(se,0,0,0);let o=0,i=0;const{size:a,data:n,indices:l}=t,c=l.length-1,u=c+(e?2:0);for(let d=0;d<u;d+=2){const h=d<c?d+1:0,p=l[d<c?d:c]*a,x=l[h]*a;J[0]=n[p],J[1]=n[p+1],J[2]=n[p+2],be[0]=n[x],be[1]=n[x+1],be[2]=n[x+2],pe(J,fe(J,J,be),.5);const v=Ga(J,be);v>0?(fe(r,r,pe(J,J,v)),o+=v):o===0&&(fe(se,se,J),i++)}return o!==0?(pe(r,r,1/o),!0):i!==0&&(pe(r,se,1/i),!0)}const J=G(),be=G(),St=G(),se=G();let sn=class{constructor(e){this.channel=e,this.id=fo()}};function ln(t,e){return t==null&&(t=[]),t.push(e),t}function cn(t,e){if(t==null)return null;const r=t.filter(o=>o!==e);return r.length===0?null:r}let Oo=class Ro extends Ar{constructor(e,r,o=null,i=Fe.Mesh,a=null,n=-1){super(),this.material=e,this.mapPositions=o,this.type=i,this.objectAndLayerIdColor=a,this.edgeIndicesLength=n,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[l,c]of r)this._attributes.set(l,{...c,indices:Fi(c.indices)}),l===f.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(l).indices.length:this.edgeIndicesLength)}instantiate(e={}){const r=new Ro(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((o,i)=>{o.exclusive=!1,r._attributes.set(i,o)}),r._boundingInfo=this._boundingInfo,r.transformation=e.transformation||this.transformation,r}get attributes(){return this._attributes}getMutableAttribute(e){let r=this._attributes.get(e);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:rn(r.data)},this._attributes.set(e,r)),r}setAttributeData(e,r){const o=this._attributes.get(e);o&&this._attributes.set(e,{...o,exclusive:!0,data:r})}get indexCount(){const e=this._attributes.values().next().value.indices;return(e==null?void 0:e.length)??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===Fe.Mesh?this._computeAttachmentOriginTriangles(e):this.type===Fe.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&we(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const r=this.attributes.get(f.POSITION);return on(r,e)}_computeAttachmentOriginLines(e){const r=this.attributes.get(f.POSITION);return nn(r,dn(this.material.parameters,r),e)}_computeAttachmentOriginPoints(e){const r=this.attributes.get(f.POSITION);return an(r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(f.POSITION);if(!e||e.indices.length===0)return null;const r=this.type===Fe.Mesh?3:1;Y(e.indices.length%r==0,"Indexing error: "+e.indices.length+" not divisible by "+r);const o=Co(e.indices.length/r);return new ji(o,r,e)}get transformation(){return this._transformation??Nt}set transformation(e){this._transformation=e&&e!==Nt?_i(e):null}addHighlight(){const e=new sn(Gi.Highlight);return this.highlights=ln(this.highlights,e),e}removeHighlight(e){this.highlights=cn(this.highlights,e)}};function dn(t,e){return!(!("isClosed"in t)||!t.isClosed)&&e.indices.length>2}function it(t){if(t==null)return null;const e=t.offset!=null?t.offset:Va,r=t.rotation!=null?t.rotation:0,o=t.scale!=null?t.scale:Ua,i=Zt(1,0,0,0,1,0,e[0],e[1],1),a=Zt(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),n=Zt(o[0],0,0,0,o[1],0,0,0,1),l=Tt();return Vr(l,a,n),Vr(l,i,l),l}let un=class{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}},hn=class{constructor(e,r,o){this.name=e,this.lodThreshold=r,this.pivotOffset=o,this.stageResources=new un,this.numberOfVertices=0}};function mn(){if(Qt==null){const t=e=>ja(`esri/libs/basisu/${e}`);Qt=xt(()=>import("./basis_transcoder--Em2hltC.js"),__vite__mapDeps([0,1,2])).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return Qt}let Qt;var De;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(De||(De={}));let de=null,yt=null;async function Io(){return yt==null&&(yt=mn(),de=await yt),yt}function fn(t,e){if(de==null)return t.byteLength;const r=new de.BasisFile(new Uint8Array(t)),o=$o(r)?Lo(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),o}function pn(t,e){if(de==null)return t.byteLength;const r=new de.KTX2File(new Uint8Array(t)),o=No(r)?Lo(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),o}function Lo(t,e,r,o,i){const a=Hi(e?Ee.COMPRESSED_RGBA8_ETC2_EAC:Ee.COMPRESSED_RGB8_ETC2),n=i&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*o*a*n)}function $o(t){return t.getNumImages()>=1&&!t.isUASTC()}function No(t){return t.getFaces()>=1&&t.isETC1S()}async function vn(t,e,r){de==null&&(de=await Io());const o=new de.BasisFile(new Uint8Array(r));if(!$o(o))return null;o.startTranscoding();const i=Po(t,e,o.getNumLevels(0),o.getHasAlpha(),o.getImageWidth(0,0),o.getImageHeight(0,0),(a,n)=>o.getImageTranscodedSizeInBytes(0,a,n),(a,n,l)=>o.transcodeImage(l,0,a,n,0,0));return o.close(),o.delete(),i}async function gn(t,e,r){de==null&&(de=await Io());const o=new de.KTX2File(new Uint8Array(r));if(!No(o))return null;o.startTranscoding();const i=Po(t,e,o.getLevels(),o.getHasAlpha(),o.getWidth(),o.getHeight(),(a,n)=>o.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,l)=>o.transcodeImage(l,a,0,0,n,0,-1,-1));return o.close(),o.delete(),i}function Po(t,e,r,o,i,a,n,l){const{compressedTextureETC:c,compressedTextureS3TC:u}=t.capabilities,[d,h]=c?o?[De.ETC2_RGBA,Ee.COMPRESSED_RGBA8_ETC2_EAC]:[De.ETC1_RGB,Ee.COMPRESSED_RGB8_ETC2]:u?o?[De.BC3_RGBA,Ee.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[De.BC1_RGB,Ee.COMPRESSED_RGB_S3TC_DXT1_EXT]:[De.RGBA32,Pe.RGBA],p=e.hasMipmap?r:Math.min(1,r),x=[];for(let v=0;v<p;v++)x.push(new Uint8Array(n(v,d))),l(v,d,x[v]);return e.internalFormat=h,e.hasMipmap=x.length>1,e.samplingMode=e.hasMipmap?Je.LINEAR_MIPMAP_LINEAR:Je.LINEAR,e.width=i,e.height=a,new ke(t,e,{type:"compressed",levels:x})}const Ct=()=>_r.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),xn=542327876,Tn=131072,_n=4;function Mr(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function bn(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const En=Mr("DXT1"),Sn=Mr("DXT3"),yn=Mr("DXT5"),Cn=31,wn=0,An=1,Mn=2,On=3,Rn=4,In=7,Ln=20,$n=21;function Nn(t,e,r){const o=Pn(r,e.hasMipmap??!1);if(o==null)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:a,width:n,height:l}=o;return e.samplingMode=i.levels.length>1?Je.LINEAR_MIPMAP_LINEAR:Je.LINEAR,e.hasMipmap=i.levels.length>1,e.internalFormat=a,e.width=n,e.height=l,new ke(t,e,i)}function Pn(t,e){const r=new Int32Array(t,0,Cn);if(r[wn]!==xn)return Ct().error("Invalid magic number in DDS header"),null;if(!(r[Ln]&_n))return Ct().error("Unsupported format, must contain a FourCC code"),null;const o=r[$n];let i,a;switch(o){case En:i=8,a=Ee.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Sn:i=16,a=Ee.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case yn:i=16,a=Ee.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Ct().error("Unsupported FourCC code:",bn(o)),null}let n=1,l=r[Rn],c=r[On];!(3&l)&&!(3&c)||(Ct().warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,c=c+3&-4);const u=l,d=c;let h,p;r[Mn]&Tn&&e!==!1&&(n=Math.max(1,r[In]));let x=r[An]+4;const v=[];for(let y=0;y<n;++y)p=(l+3>>2)*(c+3>>2)*i,h=new Uint8Array(t,x,p),v.push(h),x+=p,l=Math.max(1,l>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:v},internalFormat:a,width:u,height:d}}function Dn(t,e){let a=t.width*t.height;if(a<4096)return t instanceof ImageData?Do(t):t;let n=t.width,l=t.height;do n=Math.ceil(n/2),l=Math.ceil(l/2),a=n*l;while(a>1048576||e!=null&&(n>e||l>e));return Or(t,n,l)}function Fn(t,e){const r=Math.max(t.width,t.height);if(r<=e)return t;const o=e/r;return Or(t,Math.round(t.width*o),Math.round(t.height*o))}function Or(t,e,r){if(t instanceof ImageData)return Or(Do(t),e,r);const o=document.createElement("canvas");return o.width=e,o.height=r,o.getContext("2d").drawImage(t,0,0,o.width,o.height),o}function Do(t){const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");if(r==null)throw new Gt("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(t,0,0),e}let Fo=class extends Ar{get parameters(){return this._parameters}constructor(e,r){super(),this._data=e,this.type=Fe.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new Ha,this._parameters={...zn,...r},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){e!=null&&(e instanceof HTMLVideoElement?(this.frameUpdate=r=>this._frameUpdate(e,r),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(Ur(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const o=()=>{e.removeEventListener("canplay",o),e.play()};e.addEventListener("canplay",o)}}}_startPreloadImageElement(e){Wa(e.src)||Ur(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const r=new Ao;return r.wrapMode=this._parameters.wrap??Ge.REPEAT,r.flipped=!this._parameters.noUnpackFlip,r.samplingMode=this._parameters.mipmap?Je.LINEAR_MIPMAP_LINEAR:Je.LINEAR,r.hasMipmap=!!this._parameters.mipmap,r.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,r.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var e;return((e=this._glTexture)==null?void 0:e.usedMemory)||Bn(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new ke(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof r=="string"?this._loadFromURL(e,r):r instanceof Image?this._loadFromImageElement(e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r):(st(r)||lt(r))&&this._parameters.encoding===dt.DDS_ENCODING?this._loadFromDDSData(e,r):(st(r)||lt(r))&&this._parameters.encoding===dt.KTX2_ENCODING?this._loadFromKTX2(e,r):(st(r)||lt(r))&&this._parameters.encoding===dt.BASIS_ENCODING?this._loadFromBasis(e,r):lt(r)?this._loadFromPixelData(e,r):st(r)?this._loadFromPixelData(e,new Uint8Array(r)):null)}_frameUpdate(e,r){return this._glTexture==null||e.readyState<ut.HAVE_CURRENT_DATA||r===e.currentTime?r:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,r){return this._glTexture=Nn(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>gn(e,this._createDescriptor(e),r).then(o=>(this._glTexture=o,o)))}_loadFromBasis(e,r){return this._loadAsync(()=>vn(e,this._createDescriptor(e),r).then(o=>(this._glTexture=o,o)))}_loadFromPixelData(e,r){Y(this._parameters.width>0&&this._parameters.height>0);const o=this._createDescriptor(e);return o.pixelFormat=this._parameters.components===1?Pe.LUMINANCE:this._parameters.components===3?Pe.RGB:Pe.RGBA,o.width=this._parameters.width??0,o.height=this._parameters.height??0,this._glTexture=new ke(e,o,r),this._glTexture}_loadFromURL(e,r){return this._loadAsync(async o=>{const i=await wo(r,{signal:o});return jr(o),this._loadFromImage(e,i)})}_loadFromImageElement(e,r){return r.complete?this._loadFromImage(e,r):this._loadAsync(async o=>{const i=await ka(r,r.src,!1,o);return jr(o),this._loadFromImage(e,i)})}_loadFromVideoElement(e,r){return r.readyState>=ut.HAVE_CURRENT_DATA?this._loadFromImage(e,r):this._loadFromVideoElementAsync(e,r)}_loadFromVideoElementAsync(e,r){return this._loadAsync(o=>new Promise((i,a)=>{const n=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),Xa(u)},l=()=>{r.readyState>=ut.HAVE_CURRENT_DATA&&(n(),i(this._loadFromImage(e,r)))},c=d=>{n(),a(d||new Gt("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const u=qa(o,()=>c(Ya()))}))}_loadFromImage(e,r){let o=r;if(!(o instanceof HTMLVideoElement)){const{maxTextureSize:n}=e.parameters;o=this._parameters.downsampleUncompressed?Dn(o,n):Fn(o,n)}const i=Bo(o);this._parameters.width=i.width,this._parameters.height=i.height;const a=this._createDescriptor(e);return a.pixelFormat=this._parameters.components===3?Pe.RGB:Pe.RGBA,a.width=i.width,a.height=i.height,this._glTexture=new ke(e,a,o),this._glTexture}_loadAsync(e){const r=new AbortController;this._loadingController=r;const o=e(r.signal);this._loadingPromise=o;const i=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===o&&(this._loadingPromise=null)};return o.then(i,i),o}unload(){if(this._glTexture=It(this._glTexture),this._loadingController!=null){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};function Bn(t,e){if(t==null)return 0;if(st(t)||lt(t))return e.encoding===dt.KTX2_ENCODING?pn(t,!!e.mipmap):e.encoding===dt.BASIS_ENCODING?fn(t,!!e.mipmap):t.byteLength;const{width:r,height:o}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?Bo(t):e;return(e.mipmap?4/3:1)*r*o*(e.components||4)||0}function Bo(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}var ut;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(ut||(ut={}));const zn={wrap:{s:Ge.REPEAT,t:Ge.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var T;function er(t){return t===T.Shadow||t===T.ShadowHighlight||t===T.ShadowExcludeHighlight}function tr(t){return jn(t)||t===T.Normal}function Gn(t){return t===T.Highlight||t===T.ObjectAndLayerIdColor}function Vn(t){return t===T.Color||t===T.Alpha}function Un(t){return Vn(t)||Gn(t)}function jn(t){return Un(t)||t===T.LinearDepth}(function(t){t[t.Color=0]="Color",t[t.LinearDepth=1]="LinearDepth",t[t.Depth=2]="Depth",t[t.Normal=3]="Normal",t[t.Shadow=4]="Shadow",t[t.ShadowHighlight=5]="ShadowHighlight",t[t.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",t[t.Highlight=7]="Highlight",t[t.Alpha=8]="Alpha",t[t.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",t[t.CompositeColor=10]="CompositeColor",t[t.COUNT=11]="COUNT"})(T||(T={}));function Ht(t,e){switch(e.normalType){case j.Compressed:t.attributes.add(f.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(s`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case j.Attribute:t.attributes.add(f.NORMAL,"vec3"),t.vertex.code.add(s`vec3 normalModel() {
return normal;
}`);break;case j.ScreenDerivative:t.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:Qe(e.normalType);case j.COUNT:case j.Ground:}}var j;(function(t){t[t.Attribute=0]="Attribute",t[t.Compressed=1]="Compressed",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(j||(j={}));function Hn(t,e){const r=t.fragment;switch(r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case oe.None:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case oe.View:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case oe.WindingOrder:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Qe(e.doubleSidedMode);case oe.COUNT:}}var oe;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(oe||(oe={}));var X;function qe(t,e){switch(e.textureCoordinateType){case X.Default:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case X.Compressed:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case X.Atlas:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(f.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:Qe(e.textureCoordinateType);case X.None:return void t.vertex.code.add(s`void forwardTextureCoordinates() {}`);case X.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(X||(X={}));function Wn(t){t.fragment.code.add(s`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function zo(t,e){switch(t.include(qe,e),e.textureCoordinateType){case X.Default:case X.Compressed:return void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case X.Atlas:return t.include(Wn),void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:Qe(e.textureCoordinateType);case X.None:case X.COUNT:return}}let ee=class{constructor(e,r,o,i,a=null){if(this.name=e,this.type=r,this.arraySize=a,this.bind={[F.Pass]:null,[F.Draw]:null},i)switch(o){case F.Pass:this.bind[F.Pass]=i;break;case F.Draw:this.bind[F.Draw]=i}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},ue=class extends ee{constructor(e,r){super(e,"vec3",F.Draw,(o,i,a,n)=>o.setUniform3fv(e,r(i,a,n)))}},K=class extends ee{constructor(e,r){super(e,"vec3",F.Pass,(o,i,a)=>o.setUniform3fv(e,r(i,a)))}},ht=class extends ee{constructor(e,r){super(e,"sampler2D",F.Draw,(o,i,a)=>o.bindTexture(e,r(i,a)))}},Q=class extends ee{constructor(e,r){super(e,"sampler2D",F.Pass,(o,i,a)=>o.bindTexture(e,r(i,a)))}},kn=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,r){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(e){return hr.LOADED}},qn=class extends kn{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRepository,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=Ne(this._texture),this._textureNormal=Ne(this._textureNormal),this._textureEmissive=Ne(this._textureEmissive),this._textureOcclusion=Ne(this._textureOcclusion),this._textureMetallicRoughness=Ne(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?hr.LOADED:hr.LOADING}get textureBindParameters(){return new Yn(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=Ne(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(e==null)return void r(null);const o=this._textureRepository.acquire(e);if(Ja(o))return++this._numLoading,void o.then(i=>{if(this._disposed)return Ne(i),void r(null);r(i)}).finally(()=>--this._numLoading);r(o)}},Yn=class extends bt{constructor(e=null,r=null,o=null,i=null,a=null,n,l){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=o,this.textureOcclusion=i,this.textureMetallicRoughness=a,this.scale=n,this.normalTextureTransformMatrix=l}};var N;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Simplified=5]="Simplified",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(N||(N={}));function Go(t,e){const r=t.fragment,o=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===N.Normal&&o&&t.include(zo,e),e.pbrMode!==N.Schematic)if(e.pbrMode!==N.Disabled){if(e.pbrMode===N.Normal){r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const i=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(i===F.Pass?new Q("texMetallicRoughness",a=>a.textureMetallicRoughness):new ht("texMetallicRoughness",a=>a.textureMetallicRoughness)),r.code.add(s`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(i===F.Pass?new Q("texEmission",a=>a.textureEmissive):new ht("texEmission",a=>a.textureEmissive)),r.code.add(s`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(i===F.Pass?new Q("texOcclusion",a=>a.textureOcclusion):new ht("texOcclusion",a=>a.textureOcclusion)),r.code.add(s`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),i===F.Pass?r.uniforms.add(new K("emissionFactor",a=>a.emissiveFactor),new K("mrrFactors",a=>a.mrrFactors)):r.uniforms.add(new ue("emissionFactor",a=>a.emissiveFactor),new ue("mrrFactors",a=>a.mrrFactors)),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${e.hasMetallicRoughnessTexture?s`applyMetallnessAndRoughness(${e.hasMetallicRoughnessTextureTransform?s`metallicRoughnessUV`:"vuv0"});`:""}

      ${e.hasEmissionTexture?s`applyEmission(${e.hasEmissiveTextureTransform?s`emissiveUV`:"vuv0"});`:""}

      ${e.hasOcclusionTexture?s`applyOcclusion(${e.hasOcclusionTextureTransform?s`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}const Wt=new Map([[f.POSITION,0],[f.NORMAL,1],[f.NORMALCOMPRESSED,1],[f.UV0,2],[f.COLOR,3],[f.COLORFEATUREATTRIBUTE,3],[f.SIZE,4],[f.TANGENT,4],[f.CENTEROFFSETANDDISTANCE,5],[f.SYMBOLCOLOR,5],[f.FEATUREATTRIBUTE,6],[f.INSTANCEFEATUREATTRIBUTE,6],[f.INSTANCECOLOR,7],[f.OBJECTANDLAYERIDCOLOR,7],[f.INSTANCEOBJECTANDLAYERIDCOLOR,7],[f.INSTANCEMODEL,8],[f.INSTANCEMODELNORMAL,12],[f.INSTANCEMODELORIGINHI,11],[f.INSTANCEMODELORIGINLO,15]]);function Xn(t){return Math.abs(t*t*t)}function Jn(t,e,r){const o=r.parameters;return rr.scale=Math.min(o.divisor/(e-o.offset),1),rr.factor=Xn(t),rr}function Zn(t,e){return Za(t*Math.max(e.scale,e.minScaleFactor),t,e.factor)}function Kn(t,e,r,o){return Zn(t,Jn(e,r,o))}const rr={scale:0,factor:0,minScaleFactor:0},wt=Ka();function Qn(t,e,r,o,i,a){if(t.visible)if(t.boundingInfo){Y(t.type===Fe.Mesh);const n=e.tolerance;Vo(t.boundingInfo,r,o,n,i,a)}else{const n=t.attributes.get(f.POSITION),l=n.indices;jo(r,o,0,l.length/3,l,n,void 0,i,a)}}const es=G();function Vo(t,e,r,o,i,a){if(t==null)return;const n=rs(e,r,es);if(Qa(wt,t.bbMin),ei(wt,t.bbMax),i!=null&&i.applyToAabb(wt),os(wt,e,n,o)){const{primitiveIndices:l,position:c}=t,u=l?l.length:c.indices.length/3;if(u>cs){const d=t.getChildren();if(d!==void 0){for(const h of d)Vo(h,e,r,o,i,a);return}}jo(e,r,0,u,c.indices,c,l,i,a)}}const Uo=G();function jo(t,e,r,o,i,a,n,l,c){if(n)return ts(t,e,r,o,i,a,n,l,c);const{data:u,stride:d}=a,h=t[0],p=t[1],x=t[2],v=e[0]-h,y=e[1]-p,L=e[2]-x;for(let M=r,B=3*r;M<o;++M){let I=d*i[B++],$=u[I++],P=u[I++],z=u[I];I=d*i[B++];let O=u[I++],S=u[I++],C=u[I];I=d*i[B++];let A=u[I++],E=u[I++],_=u[I];l!=null&&([$,P,z]=l.applyToVertex($,P,z,M),[O,S,C]=l.applyToVertex(O,S,C,M),[A,E,_]=l.applyToVertex(A,E,_,M));const w=O-$,V=S-P,R=C-z,D=A-$,U=E-P,ae=_-z,he=y*ae-U*L,tt=L*D-ae*v,rt=v*U-D*y,ce=w*he+V*tt+R*rt;if(Math.abs(ce)<=Number.EPSILON)continue;const ie=h-$,Re=p-P,Ie=x-z,me=ie*he+Re*tt+Ie*rt;if(ce>0){if(me<0||me>ce)continue}else if(me>0||me<ce)continue;const ge=Re*R-V*Ie,ot=Ie*w-R*ie,at=ie*V-w*Re,Le=v*ge+y*ot+L*at;if(ce>0){if(Le<0||me+Le>ce)continue}else if(Le>0||me+Le<ce)continue;const $e=(D*ge+U*ot+ae*at)/ce;$e>=0&&c($e,Ho(w,V,R,D,U,ae,Uo),M,!1)}}function ts(t,e,r,o,i,a,n,l,c){const{data:u,stride:d}=a,h=t[0],p=t[1],x=t[2],v=e[0]-h,y=e[1]-p,L=e[2]-x;for(let M=r;M<o;++M){const B=n[M];let I=3*B,$=d*i[I++],P=u[$++],z=u[$++],O=u[$];$=d*i[I++];let S=u[$++],C=u[$++],A=u[$];$=d*i[I];let E=u[$++],_=u[$++],w=u[$];l!=null&&([P,z,O]=l.applyToVertex(P,z,O,M),[S,C,A]=l.applyToVertex(S,C,A,M),[E,_,w]=l.applyToVertex(E,_,w,M));const V=S-P,R=C-z,D=A-O,U=E-P,ae=_-z,he=w-O,tt=y*he-ae*L,rt=L*U-he*v,ce=v*ae-U*y,ie=V*tt+R*rt+D*ce;if(Math.abs(ie)<=Number.EPSILON)continue;const Re=h-P,Ie=p-z,me=x-O,ge=Re*tt+Ie*rt+me*ce;if(ie>0){if(ge<0||ge>ie)continue}else if(ge>0||ge<ie)continue;const ot=Ie*D-R*me,at=me*V-D*Re,Le=Re*R-V*Ie,$e=v*ot+y*at+L*Le;if(ie>0){if($e<0||ge+$e>ie)continue}else if($e>0||ge+$e<ie)continue;const Gr=(U*ot+ae*at+he*Le)/ie;Gr>=0&&c(Gr,Ho(V,R,D,U,ae,he,Uo),B,!1)}}const qr=G(),Yr=G();function Ho(t,e,r,o,i,a,n){return q(qr,t,e,r),q(Yr,o,i,a),ti(n,qr,Yr),br(n,n),n}function rs(t,e,r){return q(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function os(t,e,r,o){return as(t,e,r,o,1/0)}function as(t,e,r,o,i){const a=(t[0]-o-e[0])*r[0],n=(t[3]+o-e[0])*r[0];let l=Math.min(a,n),c=Math.max(a,n);const u=(t[1]-o-e[1])*r[1],d=(t[4]+o-e[1])*r[1];if(c=Math.min(c,Math.max(u,d)),c<0||(l=Math.max(l,Math.min(u,d)),l>c))return!1;const h=(t[2]-o-e[2])*r[2],p=(t[5]+o-e[2])*r[2];return c=Math.min(c,Math.max(h,p)),!(c<0)&&(l=Math.max(l,Math.min(h,p)),!(l>c)&&l<i)}function is(t,e,r,o,i){let a=(r.screenLength||0)*t.pixelRatio;i!=null&&(a=Kn(a,o,e,i));const n=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return po(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function Wo(t,e){const r=e?Wo(e):{};for(const o in t){let i=t[o];i!=null&&i.forEach&&(i=ss(i)),i==null&&o in r||(r[o]=i)}return r}function ns(t,e){let r=!1;for(const o in e){const i=e[o];i!==void 0&&(Array.isArray(i)?t[o]===null?(t[o]=i.slice(),r=!0):ri(t[o],i)&&(r=!0):t[o]!==i&&(r=!0,t[o]=i))}return r}function ss(t){const e=[];return t.forEach(r=>e.push(r)),e}const ls={multiply:1,ignore:2,replace:3,tint:4},cs=1e3;let ds=class extends Ar{constructor(e,r){super(),this.type=Fe.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=Wt,this._pp0=He(0,0,1),this._pp1=He(0,0,0),this._parameters=Wo(e,r),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){ns(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===Vi.ON)&&(this.parameters.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){var e;(e=this.repository)==null||e.materialChanged(this)}queryRenderOccludedState(e){return this.isVisible()&&this.parameters.renderOccluded===e}intersectDraped(e,r,o,i,a,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,r,o,this._pp0,this._pp1,a)}};var mr;(function(t){t[t.None=0]="None",t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(mr||(mr={}));var Ye;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",t[t.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",t[t.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",t[t.ANTIALIASING=12]="ANTIALIASING",t[t.COMPOSITE=13]="COMPOSITE",t[t.BLIT=14]="BLIT",t[t.SSAO=15]="SSAO",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.SHADOW_HIGHLIGHT=17]="SHADOW_HIGHLIGHT",t[t.ENVIRONMENT_OPAQUE=18]="ENVIRONMENT_OPAQUE",t[t.ENVIRONMENT_TRANSPARENT=19]="ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=20]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=21]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=22]="HUD_MATERIAL",t[t.LABEL_MATERIAL=23]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=24]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=25]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=26]="DRAPED_MATERIAL",t[t.DRAPED_WATER=27]="DRAPED_WATER",t[t.VOXEL=28]="VOXEL",t[t.MAX_SLOTS=29]="MAX_SLOTS"})(Ye||(Ye={}));let us=class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=G(),this._tmpMbs=Mo(),this._tmpObb=new Bi,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Se(e)}applyToVertex(e,r,o){const i=q(ko,e,r,o),a=q(fs,e,r,o+this.componentLocalOriginLength),n=this._totalOffset/Se(a);return je(this._tmpVertex,i,a,n),this._tmpVertex}applyToAabb(e){const r=this.componentLocalOriginLength,o=e[0],i=e[1],a=e[2]+r,n=e[3],l=e[4],c=e[5]+r,u=Math.abs(o),d=Math.abs(i),h=Math.abs(a),p=Math.abs(n),x=Math.abs(l),v=Math.abs(c),y=.5*(1+Math.sign(o*n))*Math.min(u,p),L=.5*(1+Math.sign(i*l))*Math.min(d,x),M=.5*(1+Math.sign(a*c))*Math.min(h,v),B=Math.max(u,p),I=Math.max(d,x),$=Math.max(h,v),P=Math.sqrt(y*y+L*L+M*M),z=Math.sign(u+o),O=Math.sign(d+i),S=Math.sign(h+a),C=Math.sign(p+n),A=Math.sign(x+l),E=Math.sign(v+c),_=this._totalOffset;if(P<_)return e[0]-=(1-z)*_,e[1]-=(1-O)*_,e[2]-=(1-S)*_,e[3]+=C*_,e[4]+=A*_,e[5]+=E*_,e;const w=_/Math.sqrt(B*B+I*I+$*$),V=_/P,R=V-w,D=-R;return e[0]+=o*(z*D+V),e[1]+=i*(O*D+V),e[2]+=a*(S*D+V),e[3]+=n*(C*R+w),e[4]+=l*(A*R+w),e[5]+=c*(E*R+w),e}applyToMbs(e){const r=Se(ye(e)),o=this._totalOffset/r;return je(ye(this._tmpMbs),ye(e),ye(e),o),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/r,this._tmpMbs}applyToObb(e){return zi(e,this._totalOffset,this._totalOffset,Lt.Global,this._tmpObb),this._tmpObb}},hs=class{constructor(e=0){this.offset=e,this.sphere=Mo(),this.tmpVertex=G()}applyToVertex(e,r,o){const i=this.objectTransform.transform,a=q(ko,e,r,o),n=we(a,a,i),l=this.offset/Se(n);je(n,n,n,l);const c=this.objectTransform.inverse;return we(this.tmpVertex,n,c),this.tmpVertex}applyToMinMax(e,r){const o=this.offset/Se(e);je(e,e,e,o);const i=this.offset/Se(r);je(r,r,r,i)}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const o=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*o,e[4]+=e[4]*o,e[5]+=e[5]*o,e}applyToBoundingSphere(e){const r=Se(ye(e)),o=this.offset/r;return je(ye(this.sphere),ye(e),ye(e),o),this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}};const Xr=new hs;function ms(t){return t!=null?(Xr.offset=t,Xr):null}new us;const ko=G(),fs=G();function Jr(t,e,r){const{data:o,indices:i}=t,a=e.typedBuffer,n=e.typedBufferStride,l=i.length;r*=n;for(let c=0;c<l;++c){const u=2*i[c];a[r]=o[u],a[r+1]=o[u+1],r+=n}}function qo(t,e,r,o){const{data:i,indices:a}=t,n=e.typedBuffer,l=e.typedBufferStride,c=a.length;if(r*=l,o==null||o===1)for(let u=0;u<c;++u){const d=3*a[u];n[r]=i[d],n[r+1]=i[d+1],n[r+2]=i[d+2],r+=l}else for(let u=0;u<c;++u){const d=3*a[u];for(let h=0;h<o;++h)n[r]=i[d],n[r+1]=i[d+1],n[r+2]=i[d+2],r+=l}}function Yo(t,e,r,o=1){const{data:i,indices:a}=t,n=e.typedBuffer,l=e.typedBufferStride,c=a.length;if(r*=l,o===1)for(let u=0;u<c;++u){const d=4*a[u];n[r]=i[d],n[r+1]=i[d+1],n[r+2]=i[d+2],n[r+3]=i[d+3],r+=l}else for(let u=0;u<c;++u){const d=4*a[u];for(let h=0;h<o;++h)n[r]=i[d],n[r+1]=i[d+1],n[r+2]=i[d+2],n[r+3]=i[d+3],r+=l}}function ps(t,e,r,o,i=1){if(!e)return void qo(t,r,o,i);const{data:a,indices:n}=t,l=r.typedBuffer,c=r.typedBufferStride,u=n.length,d=e[0],h=e[1],p=e[2],x=e[4],v=e[5],y=e[6],L=e[8],M=e[9],B=e[10],I=e[12],$=e[13],P=e[14];o*=c;let z=0,O=0,S=0;const C=vo(e)?A=>{z=a[A]+I,O=a[A+1]+$,S=a[A+2]+P}:A=>{const E=a[A],_=a[A+1],w=a[A+2];z=d*E+x*_+L*w+I,O=h*E+v*_+M*w+$,S=p*E+y*_+B*w+P};if(i===1)for(let A=0;A<u;++A)C(3*n[A]),l[o]=z,l[o+1]=O,l[o+2]=S,o+=c;else for(let A=0;A<u;++A){C(3*n[A]);for(let E=0;E<i;++E)l[o]=z,l[o+1]=O,l[o+2]=S,o+=c}}function vs(t,e,r,o,i=1){if(!e)return void qo(t,r,o,i);const{data:a,indices:n}=t,l=e,c=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=l[0],p=l[1],x=l[2],v=l[4],y=l[5],L=l[6],M=l[8],B=l[9],I=l[10],$=!go(l),P=1e-6,z=1-P;o*=u;let O=0,S=0,C=0;const A=vo(l)?E=>{O=a[E],S=a[E+1],C=a[E+2]}:E=>{const _=a[E],w=a[E+1],V=a[E+2];O=h*_+v*w+M*V,S=p*_+y*w+B*V,C=x*_+L*w+I*V};if(i===1)if($)for(let E=0;E<d;++E){A(3*n[E]);const _=O*O+S*S+C*C;if(_<z&&_>P){const w=1/Math.sqrt(_);c[o]=O*w,c[o+1]=S*w,c[o+2]=C*w}else c[o]=O,c[o+1]=S,c[o+2]=C;o+=u}else for(let E=0;E<d;++E)A(3*n[E]),c[o]=O,c[o+1]=S,c[o+2]=C,o+=u;else for(let E=0;E<d;++E){if(A(3*n[E]),$){const _=O*O+S*S+C*C;if(_<z&&_>P){const w=1/Math.sqrt(_);O*=w,S*=w,C*=w}}for(let _=0;_<i;++_)c[o]=O,c[o+1]=S,c[o+2]=C,o+=u}}function gs(t,e,r,o,i=1){if(!e)return void Yo(t,r,o,i);const{data:a,indices:n}=t,l=e,c=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=l[0],p=l[1],x=l[2],v=l[4],y=l[5],L=l[6],M=l[8],B=l[9],I=l[10],$=!go(l),P=1e-6,z=1-P;if(o*=u,i===1)for(let O=0;O<d;++O){const S=4*n[O],C=a[S],A=a[S+1],E=a[S+2],_=a[S+3];let w=h*C+v*A+M*E,V=p*C+y*A+B*E,R=x*C+L*A+I*E;if($){const D=w*w+V*V+R*R;if(D<z&&D>P){const U=1/Math.sqrt(D);w*=U,V*=U,R*=U}}c[o]=w,c[o+1]=V,c[o+2]=R,c[o+3]=_,o+=u}else for(let O=0;O<d;++O){const S=4*n[O],C=a[S],A=a[S+1],E=a[S+2],_=a[S+3];let w=h*C+v*A+M*E,V=p*C+y*A+B*E,R=x*C+L*A+I*E;if($){const D=w*w+V*V+R*R;if(D<z&&D>P){const U=1/Math.sqrt(D);w*=U,V*=U,R*=U}}for(let D=0;D<i;++D)c[o]=w,c[o+1]=V,c[o+2]=R,c[o+3]=_,o+=u}}function xs(t,e,r,o,i=1){const{data:a,indices:n}=t,l=r.typedBuffer,c=r.typedBufferStride,u=n.length;if(o*=c,e!==a.length||e!==4)if(i!==1)if(e!==4)for(let d=0;d<u;++d){const h=3*n[d];for(let p=0;p<i;++p)l[o]=a[h],l[o+1]=a[h+1],l[o+2]=a[h+2],l[o+3]=255,o+=c}else for(let d=0;d<u;++d){const h=4*n[d];for(let p=0;p<i;++p)l[o]=a[h],l[o+1]=a[h+1],l[o+2]=a[h+2],l[o+3]=a[h+3],o+=c}else{if(e===4){for(let d=0;d<u;++d){const h=4*n[d];l[o]=a[h],l[o+1]=a[h+1],l[o+2]=a[h+2],l[o+3]=a[h+3],o+=c}return}for(let d=0;d<u;++d){const h=3*n[d];l[o]=a[h],l[o+1]=a[h+1],l[o+2]=a[h+2],l[o+3]=255,o+=c}}else{l[o]=a[0],l[o+1]=a[1],l[o+2]=a[2],l[o+3]=a[3];const d=new Uint32Array(r.typedBuffer.buffer,r.start),h=c/4,p=d[o/=4];o+=h;const x=u*i;for(let v=1;v<x;++v)d[o]=p,o+=h}}function Ts(t,e,r){const{data:o,indices:i}=t,a=e.typedBuffer,n=e.typedBufferStride,l=i.length,c=o[0];r*=n;for(let u=0;u<l;++u)a[r]=c,r+=n}function _s(t,e,r,o,i=1){const a=e.typedBuffer,n=e.typedBufferStride;if(o*=n,i===1)for(let l=0;l<r;++l)a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3],o+=n;else for(let l=0;l<r;++l)for(let c=0;c<i;++c)a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3],o+=n}function bs(t,e,r,o,i,a){var n;for(const l of e.fields.keys()){const c=t.attributes.get(l),u=c==null?void 0:c.indices;if(c&&u)Es(l,c,r,o,i,a);else if(l===f.OBJECTANDLAYERIDCOLOR&&t.objectAndLayerIdColor!=null){const d=(n=t.attributes.get(f.POSITION))==null?void 0:n.indices;if(d){const h=d.length,p=i.getField(l,jt);_s(t.objectAndLayerIdColor,p,h,a)}}}}function Es(t,e,r,o,i,a){switch(t){case f.POSITION:{Y(e.size===3);const n=i.getField(t,Pt);Y(!!n,`No buffer view for ${t}`),n&&ps(e,r,n,a);break}case f.NORMAL:{Y(e.size===3);const n=i.getField(t,Pt);Y(!!n,`No buffer view for ${t}`),n&&vs(e,o,n,a);break}case f.NORMALCOMPRESSED:{Y(e.size===2);const n=i.getField(t,Si);Y(!!n,`No buffer view for ${t}`),n&&Jr(e,n,a);break}case f.UV0:{Y(e.size===2);const n=i.getField(t,Ei);Y(!!n,`No buffer view for ${t}`),n&&Jr(e,n,a);break}case f.COLOR:case f.SYMBOLCOLOR:{const n=i.getField(t,jt);Y(!!n,`No buffer view for ${t}`),Y(e.size===3||e.size===4),!n||e.size!==3&&e.size!==4||xs(e,e.size,n,a);break}case f.COLORFEATUREATTRIBUTE:{const n=i.getField(t,bi);Y(!!n,`No buffer view for ${t}`),Y(e.size===1),n&&e.size===1&&Ts(e,n,a);break}case f.TANGENT:{Y(e.size===4);const n=i.getField(t,ur);Y(!!n,`No buffer view for ${t}`),n&&gs(e,o,n,a);break}case f.PROFILERIGHT:case f.PROFILEUP:case f.PROFILEVERTEXANDNORMAL:case f.FEATUREVALUE:{Y(e.size===4);const n=i.getField(t,ur);Y(!!n,`No buffer view for ${t}`),n&&Yo(e,n,a)}}}let Ss=class{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(f.POSITION).indices.length}write(e,r,o,i,a){bs(o,this.vertexBufferLayout,e,r,i,a)}};function Rr(t){t.attributes.add(f.POSITION,"vec3"),t.vertex.code.add(s`vec3 positionModel() { return position; }`)}function Xo({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let Jo=class extends ee{constructor(e,r){super(e,"mat3",F.Draw,(o,i,a)=>o.setUniformMatrix3fv(e,r(i,a)))}},ve=class extends ee{constructor(e,r){super(e,"mat3",F.Pass,(o,i,a)=>o.setUniformMatrix3fv(e,r(i,a)))}},Xe=class extends ee{constructor(e,r){super(e,"mat4",F.Pass,(o,i,a)=>o.setUniformMatrix4fv(e,r(i,a)))}};function Zo(t,e){t.include(Rr);const r=t.vertex;r.include(Xo,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add(new K("transformWorldFromViewTH",o=>o.transformWorldFromViewTH),new K("transformWorldFromViewTL",o=>o.transformWorldFromViewTL),new ve("transformViewFromCameraRelativeRS",o=>o.transformViewFromCameraRelativeRS),new Xe("transformProjFromView",o=>o.transformProjFromView),new Jo("transformWorldFromModelRS",o=>o.transformWorldFromModelRS),new ue("transformWorldFromModelTH",o=>o.transformWorldFromModelTH),new ue("transformWorldFromModelTL",o=>o.transformWorldFromModelTL)),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new K("transformWorldFromViewTL",o=>o.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class ys extends bt{constructor(){super(...arguments),this.transformWorldFromViewTH=G(),this.transformWorldFromViewTL=G(),this.transformViewFromCameraRelativeRS=Tt(),this.transformProjFromView=Ut()}}function Ko(t,e){switch(e.normalType){case j.Attribute:case j.Compressed:t.include(Ht,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new Jo("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new ve("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),t.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case j.Ground:t.include(Zo,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case j.ScreenDerivative:t.vertex.code.add(s`void forwardNormal() {}`);break;default:Qe(e.normalType);case j.COUNT:}}let Cs=class extends ys{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Tt()}};const ws=.1,Ir=.001;let kt=class{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Lr=class{constructor(e,r,o){this.release=o,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=It(this._program),this._pipeline=this._configuration=null}reload(e){It(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return oi.TRIANGLES}getPipeline(e,r,o){return this._pipeline}initializeConfiguration(e,r){}},$r=class{constructor(e,r,o){this._context=e,this._locations=o,this._textures=new Map,this._freeTextureUnits=new ai({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=Wi()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if((r==null?void 0:r.glName)==null){const i=this._textures.get(e);return i&&(this._context.bindTexture(null,i.unit),this._freeTextureUnit(i),this._textures.delete(e)),null}let o=this._textures.get(e);return o==null?(o=this._allocTextureUnit(r),this._textures.set(e,o)):o.texture=r,this._context.useProgram(this),this.setUniform1i(e,o.unit),this._context.bindTexture(r,o.unit),o.unit}rebindTextures(){var e;this._context.useProgram(this),this._textures.forEach((r,o)=>{this._context.bindTexture(r.texture,r.unit),this.setUniform1i(o,r.unit)}),(e=this._fragmentUniforms)==null||e.forEach(r=>{r.type!=="sampler2D"&&r.type!=="samplerCube"||this._textures.has(r.name)||console.error(`Texture sampler ${r.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};Ae.LESS;Ae.ALWAYS;const As={mask:255},Ms={function:{func:Ae.ALWAYS,ref:Me.OutlineVisualElementMask,mask:Me.OutlineVisualElementMask},operation:{fail:le.KEEP,zFail:le.KEEP,zPass:le.ZERO}},Os={function:{func:Ae.ALWAYS,ref:Me.OutlineVisualElementMask,mask:Me.OutlineVisualElementMask},operation:{fail:le.KEEP,zFail:le.KEEP,zPass:le.REPLACE}};Ae.EQUAL,Me.OutlineVisualElementMask,Me.OutlineVisualElementMask,le.KEEP,le.KEEP,le.KEEP;Ae.NOTEQUAL,Me.OutlineVisualElementMask,Me.OutlineVisualElementMask,le.KEEP,le.KEEP,le.KEEP;function Rs({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:r,roughnessFactor:o,emissiveTexture:i,emissiveFactor:a,occlusionTexture:n}){return t==null&&e==null&&i==null&&(a==null||ii(a,Vt))&&n==null&&(o==null||o===1)&&(r==null||r===1)}const Qo=[1,1,.5],Is=[0,.6,.2],Ls=[0,1,.2];let Ce=class extends ee{constructor(e,r){super(e,"vec2",F.Pass,(o,i,a)=>o.setUniform2fv(e,r(i,a)))}};function Zr(t){t.varyings.add("linearDepth","float")}function ea(t){t.vertex.uniforms.add(new Ce("nearFar",(e,r)=>r.camera.nearFar))}function ta(t){t.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function ra(t,e){const{vertex:r}=t;switch(e.output){case T.Color:if(e.receiveShadows)return Zr(t),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case T.LinearDepth:case T.Shadow:case T.ShadowHighlight:case T.ShadowExcludeHighlight:return t.include(Zo,e),Zr(t),ea(t),ta(t),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}function oa(t){t.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Be(t,e){$s(t,e,new ue("slicePlaneOrigin",(r,o)=>Ns(e,r,o)),new ue("slicePlaneBasis1",(r,o)=>{var i;return Kr(e,r,o,(i=o.slicePlane)==null?void 0:i.basis1)}),new ue("slicePlaneBasis2",(r,o)=>{var i;return Kr(e,r,o,(i=o.slicePlane)==null?void 0:i.basis2)}))}function $s(t,e,...r){if(!e.hasSlicePlane){const n=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}e.hasSliceInVertexProgram&&t.vertex.uniforms.add(...r),t.fragment.uniforms.add(...r);const o=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=e.hasSliceHighlight?s`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(o),t.fragment.code.add(o),t.fragment.code.add(a)}function aa(t,e,r){return t.instancedDoublePrecision?q(Ps,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function ia(t,e){return t!=null?We(Dt,e.origin,t):e.origin}function na(t,e,r){return t.hasSliceTranslatedView?e!=null?lr(Ds,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function Ns(t,e,r){if(r.slicePlane==null)return Vt;const o=aa(t,e,r),i=ia(o,r.slicePlane),a=na(t,o,r);return a!=null?we(Dt,i,a):i}function Kr(t,e,r,o){if(o==null||r.slicePlane==null)return Vt;const i=aa(t,e,r),a=ia(i,r.slicePlane),n=na(t,i,r);return n!=null?(fe(nt,o,a),we(Dt,a,n),we(nt,nt,n),We(nt,nt,Dt)):o}const Ps=G(),Dt=G(),nt=G(),Ds=Ut();function mt(t){ta(t),t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let te=class extends ee{constructor(e,r){super(e,"float",F.Pass,(o,i,a)=>o.setUniform1f(e,r(i,a)))}},Fs=class extends ee{constructor(e,r){super(e,"mat4",F.Draw,(o,i,a)=>o.setUniformMatrix4fv(e,r(i,a)))}};function gt(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Vt):t.uniforms.add(new ue("cameraPosition",(r,o)=>q(sa,o.camera.viewInverseTransposeMatrix[3]-r.origin[0],o.camera.viewInverseTransposeMatrix[7]-r.origin[1],o.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function ft(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add(new Xe("proj",(o,i)=>i.camera.projectionMatrix),new Fs("view",(o,i)=>lr(Qr,i.camera.viewMatrix,o.origin)),new ue("localOrigin",o=>o.origin));const r=o=>q(sa,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]);t.uniforms.add(new Xe("proj",(o,i)=>i.camera.projectionMatrix),new Xe("view",(o,i)=>lr(Qr,i.camera.viewMatrix,r(i))),new K("localOrigin",(o,i)=>r(i)))}const Qr=Ut(),sa=G();function Bs(t){t.uniforms.add(new Xe("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}let zs=class extends bt{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const o of e)r[o]=this[o];return r}};function g(t={}){return(e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const o=e._parameterNames.length-1,i=t.count||2,a=Math.ceil(Math.log2(i)),n=e._parameterBits??[0];let l=0;for(;n[l]+a>16;)l++,l>=n.length&&n.push(0);e._parameterBits=n;const c=n[l],u=(1<<a)-1<<c;n[l]+=a,Object.defineProperty(e,r,{get(){return this[o]},set(d){if(this[o]!==d&&(this[o]=d,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~u|+d<<c&u,typeof d!="number"&&typeof d!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof d)}})}}}let fr=class extends zs{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};m([g()],fr.prototype,"instancedDoublePrecision",void 0),m([g()],fr.prototype,"hasModelTransformation",void 0);const eo=Tt();function la(t,e){const r=e.hasModelTransformation,o=e.instancedDoublePrecision;r&&(t.vertex.uniforms.add(new Xe("model",a=>a.modelTransformation??Nt)),t.vertex.uniforms.add(new ve("normalLocalOriginFromModel",a=>(cr(eo,a.modelTransformation??Nt),eo)))),e.instanced&&o&&(t.attributes.add(f.INSTANCEMODELORIGINHI,"vec3"),t.attributes.add(f.INSTANCEMODELORIGINLO,"vec3"),t.attributes.add(f.INSTANCEMODEL,"mat3"),t.attributes.add(f.INSTANCEMODELNORMAL,"mat3"));const i=t.vertex;o&&(i.include(Xo,e),i.uniforms.add(new ue("viewOriginHi",(a,n)=>en(q(At,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),At)),new ue("viewOriginLo",(a,n)=>tn(q(At,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),At)))),i.code.add(s`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?s`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),e.output===T.Normal&&(Bs(i),i.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),e.hasVertexTangents&&i.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const At=G();function Gs(t){t.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(_e.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(_e.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(_e.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(_e.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let ca=class extends ee{constructor(e,r){super(e,"int",F.Pass,(o,i,a)=>o.setUniform1i(e,r(i,a)))}};function da(t,e){e.hasSymbolColors?(t.include(Gs),t.attributes.add(f.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new ca("colorMixMode",r=>ls[r.colorMixMode])),t.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function ua(t,e){e.hasVertexColors?(t.attributes.add(f.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Vs(t){t.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(s`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),t.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Us(t){t.uniforms.add(new K("screenSizePerspectiveAlignment",e=>js(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function js(t){return q(Hs,t.parameters.divisor,t.parameters.offset,t.minScaleFactor)}const Hs=G();let re=class extends ee{constructor(e,r){super(e,"vec4",F.Pass,(o,i,a)=>o.setUniform4fv(e,r(i,a)))}};function ha(t,e){const r=t.vertex;e.hasVerticalOffset?(ks(r),e.hasScreenSizePerspective&&(t.include(Vs),Us(r),gt(t.vertex,e)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Ws=Er();function ks(t){t.uniforms.add(new re("verticalOffset",(e,r)=>{const{minWorldLength:o,maxWorldLength:i,screenLength:a}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),l=r.camera.pixelRatio||1;return ne(Ws,a*l,n,o,i)}))}function qs(t,e){const r=e.output===T.ObjectAndLayerIdColor,o=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),o?t.attributes.add(f.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):t.attributes.add(f.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r?o?s`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:s``} }`),t.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r?s`fragColor = objectAndLayerIdColorVarying;`:s``} }`)}function ma(t){t.code.add(s`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function fa(t){t.code.add(s`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Ys(t,e){switch(e.output){case T.Shadow:case T.ShadowHighlight:case T.ShadowExcludeHighlight:t.fragment.include(ma),t.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case T.LinearDepth:t.fragment.include(fa),t.fragment.code.add(s`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}const Xs=Sr(1,1,0,1),Js=Sr(1,0,1,1);function Zs(t){t.fragment.uniforms.add(new Q("depthTexture",(e,r)=>r.mainDepth)),t.fragment.constants.add("occludedHighlightFlag","vec4",Xs).add("unoccludedHighlightFlag","vec4",Js),t.fragment.code.add(s`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}let Ks=class extends ee{constructor(e,r,o){super(e,"vec4",F.Pass,(i,a,n)=>i.setUniform4fv(e,r(a,n)),o)}},Qs=class extends ee{constructor(e,r,o){super(e,"float",F.Pass,(i,a,n)=>i.setUniform1fv(e,r(a,n)),o)}},H=class extends To{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};m([W()],H.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),m([W()],H.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),m([W()],H.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),m([W()],H.prototype,"DECONFLICTOR_SHOW_GRID",void 0),m([W()],H.prototype,"LABELS_SHOW_BORDER",void 0),m([W()],H.prototype,"TEXT_SHOW_BASELINE",void 0),m([W()],H.prototype,"TEXT_SHOW_BORDER",void 0),m([W()],H.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),m([W()],H.prototype,"OVERLAY_SHOW_CENTER",void 0),m([W()],H.prototype,"SHOW_POI",void 0),m([W()],H.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),m([W()],H.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),m([W()],H.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),m([W()],H.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),m([W()],H.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),m([W()],H.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),m([W()],H.prototype,"I3S_TREE_SHOW_TILES",void 0),m([W()],H.prototype,"I3S_SHOW_MODIFICATIONS",void 0),m([W()],H.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),m([W()],H.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),m([W()],H.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),m([W()],H.prototype,"LINE_WIREFRAMES",void 0),H=m([xo("esri.views.3d.support.DebugFlags")],H);new H;var to,ro;(function(t){t[t.Undefined=0]="Undefined",t[t.DefinedSize=1]="DefinedSize",t[t.DefinedScale=2]="DefinedScale"})(to||(to={})),function(t){t[t.Undefined=0]="Undefined",t[t.DefinedAngle=1]="DefinedAngle"}(ro||(ro={}));const or=8;function pt(t,e){const{vertex:r,attributes:o}=t;e.hasVvInstancing&&(e.vvSize||e.vvColor)&&o.add(f.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(r.uniforms.add(new K("vvSizeMinSize",i=>i.vvSize.minSize)),r.uniforms.add(new K("vvSizeMaxSize",i=>i.vvSize.maxSize)),r.uniforms.add(new K("vvSizeOffset",i=>i.vvSize.offset)),r.uniforms.add(new K("vvSizeFactor",i=>i.vvSize.factor)),r.uniforms.add(new ve("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new K("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",or),r.uniforms.add(new Qs("vvColorValues",i=>i.vvColor.values,or),new Ks("vvColorColors",i=>i.vvColor.colors,or)),r.code.add(s`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVvInstancing?s`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function el(t){t.fragment.code.add(s`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(Ir)}) { discard; } }
  `)}function ze(t,e){tl(t,e,new te("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function tl(t,e,r){const o=t.fragment;switch(e.alphaDiscardMode!==Z.Mask&&e.alphaDiscardMode!==Z.MaskBlend||o.uniforms.add(r),e.alphaDiscardMode){case Z.Blend:return t.include(el);case Z.Opaque:o.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case Z.Mask:o.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case Z.MaskBlend:t.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function pa(t,e){const{vertex:r,fragment:o}=t,i=e.hasColorTexture&&e.alphaDiscardMode!==Z.Opaque;switch(e.output){case T.LinearDepth:case T.Shadow:case T.ShadowHighlight:case T.ShadowExcludeHighlight:case T.ObjectAndLayerIdColor:ft(r,e),t.include(mt,e),t.include(qe,e),t.include(pt,e),t.include(Ys,e),t.include(Be,e),t.include(qs,e),ea(t),t.varyings.add("depth","float"),i&&o.uniforms.add(new Q("tex",a=>a.texture)),r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),t.include(ze,e),o.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${i?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===T.ObjectAndLayerIdColor?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}
          }
        `);break;case T.Normal:{ft(r,e),t.include(mt,e),t.include(Ht,e),t.include(Ko,e),t.include(qe,e),t.include(pt,e),i&&o.uniforms.add(new Q("tex",n=>n.texture)),e.normalType===j.ScreenDerivative&&t.varyings.add("vPositionView","vec3");const a=e.normalType===j.Attribute||e.normalType===j.Compressed;r.code.add(s`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${a?s`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:s`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),t.include(Be,e),t.include(ze,e),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${i?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===j.ScreenDerivative?s`vec3 normal = screenDerivativeNormal(vPositionView);`:s`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case T.Highlight:ft(r,e),t.include(mt,e),t.include(qe,e),t.include(pt,e),i&&o.uniforms.add(new Q("tex",a=>a.texture)),r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),t.include(Be,e),t.include(ze,e),t.include(Zs,e),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${i?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function rl(t,e){const r=t.fragment;e.hasVertexTangents?(t.attributes.add(f.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===oe.WindingOrder?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),e.textureCoordinateType!==X.None&&(t.include(zo,e),r.uniforms.add(e.pbrTextureBindType===F.Pass?new Q("normalTexture",o=>o.textureNormal):new ht("normalTexture",o=>o.textureNormal)),e.hasNormalTextureTransform&&(r.uniforms.add(new Ce("scale",o=>o.scale??_o)),r.uniforms.add(new ve("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??et))),r.code.add(s`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),e.hasNormalTextureTransform&&r.code.add(s`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(s`return tangentSpace * rawNormal;
}`))}var vt,oo;(function(t){t[t.RED=0]="RED",t[t.RG=1]="RG",t[t.RGBA4=2]="RGBA4",t[t.RGBA=3]="RGBA",t[t.RGBA_MIPMAP=4]="RGBA_MIPMAP",t[t.R16F=5]="R16F",t[t.RGBA16F=6]="RGBA16F"})(vt||(vt={})),function(t){t[t.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",t[t.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(oo||(oo={}));const ol=3e5,ar=5e5,va={required:[]};T.LinearDepth;T.CompositeColor;T.Highlight;const al={required:[T.Depth,T.Normal]};let il=class extends To{consumes(){return va}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}get materialReference(){return null}modify(e){}get numGeometries(){return 0}get hasOccludees(){return!1}queryRenderOccludedState(e){return!1}},nl=class extends il{};function ga(t,e=!0){t.attributes.add(f.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?s`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function sl(t){t.include(fa),t.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return linearDepthFromRGBA(texelFetch(depthTexture, iuv, 0), nearFar);
}`)}function xa(t){t.code.add(s`float linearizeDepth(float depth, vec2 nearFar) {
float depthNdc = depth * 2.0 - 1.0;
return (2.0 * nearFar[0] * nearFar[1]) / (depthNdc * (nearFar[1] - nearFar[0]) - (nearFar[1] + nearFar[0]));
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return linearizeDepth(depth, nearFar);
}`)}let ll=class extends ee{constructor(e,r){super(e,"vec2",F.Draw,(o,i,a,n)=>o.setUniform2fv(e,r(i,a,n)))}};const Ta=()=>_r.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let _a=class{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const o=this._includedModules.get(e);if(o!==r){Ta().error("Shader module included multiple times with different configuration.");const i=new Set;for(const a of Object.keys(o))o[a]!==e[a]&&i.add(a);for(const a of Object.keys(e))o[a]!==e[a]&&i.add(a);i.forEach(a=>console.error(`  ${a}: current ${o[a]} new ${e[a]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}},qt=class extends _a{constructor(){super(...arguments),this.vertex=new ao,this.fragment=new ao,this.attributes=new ul,this.varyings=new hl,this.extensions=new pr,this.constants=new k,this.outputs=new gr}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),o=this.attributes.generateSource(e),i=this.varyings.generateSource(e),a=e==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),l=a.code.generateSource(),c=e==="vertex"?fl:ml,u=this.constants.generateSource().concat(a.constants.generateSource()),d=this.outputs.generateSource(e);return`#version 300 es
${r.join(`
`)}

${c}

${u.join(`
`)}

${n.join(`
`)}

${o.join(`
`)}

${i.join(`
`)}

${d.join(`
`)}

${l.join(`
`)}`}generateBindPass(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const n=a.bind[F.Pass];n&&r.set(a.name,n)}),this.fragment.uniforms.entries.forEach(a=>{const n=a.bind[F.Pass];n&&r.set(a.name,n)});const o=Array.from(r.values()),i=o.length;return(a,n)=>{for(let l=0;l<i;++l)o[l](e,a,n)}}generateBindDraw(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const n=a.bind[F.Draw];n&&r.set(a.name,n)}),this.fragment.uniforms.entries.forEach(a=>{const n=a.bind[F.Draw];n&&r.set(a.name,n)});const o=Array.from(r.values()),i=o.length;return(a,n,l)=>{for(let c=0;c<i;++c)o[c](e,a,n,l)}}},cl=class{constructor(){this._entries=new Map}add(...e){for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new Gt(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else Ta().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},dl=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},ao=class extends _a{constructor(){super(...arguments),this.uniforms=new cl,this.code=new dl,this.constants=new k}get builder(){return this}},ul=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},hl=class{constructor(){this._entries=new Map}add(e,r){this._entries.has(e)&&Y(this._entries.get(e)===r),this._entries.set(e,r)}generateSource(e){const r=new Array;return this._entries.forEach((o,i)=>r.push(e==="vertex"?`out ${o} ${i};`:`in ${o} ${i};`)),r}},pr=class vr{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?vr.ALLOWLIST_VERTEX:vr.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(o=>r.includes(o)).map(o=>`#extension ${o} : enable`)}};pr.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],pr.ALLOWLIST_VERTEX=[];let gr=class xr{constructor(){this._entries=new Map}add(e,r,o=0){const i=this._entries.get(o);i?Y(i.name===e&&i.type===r,`Fragment shader output location ${o} occupied`):this._entries.set(o,{name:e,type:r})}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:xr.DEFAULT_NAME,type:xr.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((o,i)=>r.push(`layout(location = ${i}) out ${o.type} ${o.name};`)),r}};gr.DEFAULT_TYPE="vec4",gr.DEFAULT_NAME="fragColor";class k{constructor(){this._entries=new Set}add(e,r,o){let i="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":i=k._numberToFloatStr(o);break;case"int":i=k._numberToIntStr(o);break;case"bool":i=o.toString();break;case"vec2":i=`vec2(${k._numberToFloatStr(o[0])},                            ${k._numberToFloatStr(o[1])})`;break;case"vec3":i=`vec3(${k._numberToFloatStr(o[0])},                            ${k._numberToFloatStr(o[1])},                            ${k._numberToFloatStr(o[2])})`;break;case"vec4":i=`vec4(${k._numberToFloatStr(o[0])},                            ${k._numberToFloatStr(o[1])},                            ${k._numberToFloatStr(o[2])},                            ${k._numberToFloatStr(o[3])})`;break;case"ivec2":i=`ivec2(${k._numberToIntStr(o[0])},                             ${k._numberToIntStr(o[1])})`;break;case"ivec3":i=`ivec3(${k._numberToIntStr(o[0])},                             ${k._numberToIntStr(o[1])},                             ${k._numberToIntStr(o[2])})`;break;case"ivec4":i=`ivec4(${k._numberToIntStr(o[0])},                             ${k._numberToIntStr(o[1])},                             ${k._numberToIntStr(o[2])},                             ${k._numberToIntStr(o[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${r}(${Array.prototype.map.call(o,a=>k._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const ml=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,fl=`precision highp float;
precision highp sampler2D;`,ir=4;function ba(){const t=new qt,e=t.fragment;t.include(ga);const r=(ir+1)/2,o=1/(2*r*r);return e.include(xa),e.uniforms.add(new Q("depthMap",i=>i.depthTexture),new ht("tex",i=>i.colorTexture),new ll("blurSize",i=>i.blurSize),new te("projScale",(i,a)=>{const n=ni(a.camera.eye,a.camera.center);return n>5e4?Math.max(0,i.projScale-(n-5e4)):i.projScale}),new Ce("nearFar",(i,a)=>a.camera.nearFar)),e.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.code.add(s`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${s.int(ir)}; r <= ${s.int(ir)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),t}const pl=Object.freeze(Object.defineProperty({__proto__:null,build:ba},Symbol.toStringTag,{value:"Module"}));let Ea=class Sa extends Lr{initializeProgram(e){return new $r(e.rctx,Sa.shader.get().build(),Wt)}initializePipeline(){return Cr({colorWrite:wr})}};Ea.shader=new kt(pl,()=>xt(()=>Promise.resolve().then(()=>uc),void 0));const vl="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let gl=class extends bt{constructor(){super(...arguments),this.projScale=1}},xl=class extends gl{constructor(){super(...arguments),this.intensity=1}},Tl=class extends bt{},_l=class extends Tl{constructor(){super(...arguments),this.blurSize=yr()}};function bl(t){t.fragment.uniforms.add(new re("projInfo",(e,r)=>El(r.camera))),t.fragment.uniforms.add(new Ce("zScale",(e,r)=>Sl(r.camera))),t.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function El(t){const e=t.projectionMatrix;return e[11]===0?ne(io,2/(t.fullWidth*e[0]),2/(t.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):ne(io,-2/(t.fullWidth*e[0]),-2/(t.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const io=Er();function Sl(t){return t.projectionMatrix[11]===0?Ze(no,0,1):Ze(no,1,0)}const no=yr(),so=16;function ya(){const t=new qt,e=t.fragment;return t.include(ga),t.include(bl),e.include(xa),e.uniforms.add(new te("radius",(r,o)=>Yt(o.camera))),e.code.add(s`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new Ce("nearFar",(r,o)=>o.camera.nearFar),new Q("normalMap",r=>r.normalTexture),new Q("depthMap",r=>r.depthTexture),new te("projScale",r=>r.projScale),new Q("rnm",r=>r.noiseTexture),new Ce("rnmScale",(r,o)=>Ze(lo,o.camera.fullWidth/r.noiseTexture.descriptor.width,o.camera.fullHeight/r.noiseTexture.descriptor.height)),new te("intensity",r=>r.intensity),new Ce("screenSize",(r,o)=>Ze(lo,o.camera.fullWidth,o.camera.fullHeight))),t.outputs.add("fragOcclusion","float"),e.code.add(s`
    void main(void) {
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(so)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${s.int(so)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),t}function Yt(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const lo=yr(),yl=Object.freeze(Object.defineProperty({__proto__:null,build:ya,getRadius:Yt},Symbol.toStringTag,{value:"Module"}));let Ca=class wa extends Lr{initializeProgram(e){return new $r(e.rctx,wa.shader.get().build(),Wt)}initializePipeline(){return Cr({colorWrite:wr})}};Ca.shader=new kt(yl,()=>xt(()=>Promise.resolve().then(()=>hc),void 0));var Tr;(function(t){t[t.Antialiasing=0]="Antialiasing",t[t.HighQualityTransparency=1]="HighQualityTransparency",t[t.HighResolutionVoxel=2]="HighResolutionVoxel",t[t.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",t[t.SSAO=4]="SSAO",t[t.WaterReflection=5]="WaterReflection",t[t.HighResolutionShadows=6]="HighResolutionShadows",t[t.PhysicalPixelRendering=7]="PhysicalPixelRendering"})(Tr||(Tr={}));const ct=2;let Mt=class extends nl{constructor(t){super(t),this._context=null,this._passParameters=new xl,this._drawParameters=new _l,this.produces=new Map([[Ye.SSAO,()=>this._produces()]])}_getCameraElevation(){var t;return((t=this._context)==null?void 0:t.renderContext.bindParameters.camera.relativeElevation)??1/0}_produces(){return this._enableTime!=null&&this._context!=null&&this._getCameraElevation()<ar}consumes(){return this._produces()?al:va}initializeRenderContext(t){this._context=t,this.addHandles([si(()=>{var e;return this.view.qualitySettings.ambientOcclusion||((e=this._context)==null?void 0:e.isFeatureEnabled(Tr.SSAO))},e=>e?this._enable():this._disable(),li)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=It(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){var r;if(this._enableTime!=null||!this._context)return;const t=Uint8Array.from(atob(vl),o=>o.charCodeAt(0)),e=new Ao;e.wrapMode=Ge.CLAMP_TO_EDGE,e.pixelFormat=Pe.RGB,e.wrapMode=Ge.REPEAT,e.hasMipmap=!0,e.width=32,e.height=32,this._passParameters.noiseTexture=new ke(this._context.renderContext.rctx,e,t),this._ssaoTechnique==null&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(Ca)),this._blurTechnique==null&&(this._blurTechnique=this._context.techniqueRepository.acquire(Ea)),this._enableTime=ci(0),(r=this._context)==null||r.requestRender()}renderNode(t,e,r){const o=t.bindParameters,i=r==null?void 0:r.get("normals"),a=i==null?void 0:i.getTexture(),n=i==null?void 0:i.getTexture(di);if(this._enableTime==null||this._context==null||!a||!n)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=t.time,void this._context.requestRender();this._enableTime===0&&(this._enableTime=t.time);const l=t.rctx,c=o.camera,u=this.view.qualitySettings.fadeDuration,d=c.relativeElevation,h=po((ar-d)/(ar-ol),0,1),p=u>0?Math.min(u,t.time-this._enableTime)/u:1,x=p*h;this._passParameters.normalTexture=a,this._passParameters.depthTexture=n,this._passParameters.projScale=1/c.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Cl/Yt(c)**6*x;const v=c.fullViewport[2],y=c.fullViewport[3],L=Math.round(v/ct),M=Math.round(y/ct),B=this._context.fbos,I=B.acquire(v,y,"ssao input",vt.RG);l.unbindTexture(I.fbo.colorTexture),l.bindFramebuffer(I.fbo),l.setViewport(0,0,v,y),l.bindTechnique(this._ssaoTechnique,o,this._passParameters,this._drawParameters),l.screen.draw();const $=B.acquire(L,M,"ssao blur",vt.RED);l.unbindTexture($.fbo.colorTexture),l.bindFramebuffer($.fbo),this._drawParameters.colorTexture=I.getTexture(),Ze(this._drawParameters.blurSize,0,ct/y),l.bindTechnique(this._blurTechnique,o,this._passParameters,this._drawParameters),l.setViewport(0,0,L,M),l.screen.draw(),I.release();const P=B.acquire(L,M,"ssao",vt.RED);return l.unbindTexture(P.fbo.colorTexture),l.bindFramebuffer(P.fbo),l.setViewport(0,0,v,y),l.setClearColor(1,1,1,0),l.clear(ui.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=$.getTexture(),Ze(this._drawParameters.blurSize,ct/v,0),l.bindTechnique(this._blurTechnique,o,this._passParameters,this._drawParameters),l.setViewport(0,0,L,M),l.screen.draw(),l.setViewport4fv(c.fullViewport),$.release(),p<1&&this._context.requestRender(),P}};m([W({constructOnly:!0})],Mt.prototype,"view",void 0),m([W()],Mt.prototype,"_context",void 0),Mt=m([xo("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Mt);const Cl=.5;function Nr(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add(new Q("ssaoTex",(o,i)=>{var a;return(a=i.ssao)==null?void 0:a.getTexture()})),r.constants.add("blurSizePixelsInverse","float",1/ct),r.code.add(s`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function wl(t,e){const r=t.fragment,o=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;o===0?(r.uniforms.add(new K("lightingAmbientSH0",(i,a)=>q(co,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(r.uniforms.add(new re("lightingAmbientSH_R",(i,a)=>ne(xe,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new re("lightingAmbientSH_G",(i,a)=>ne(xe,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new re("lightingAmbientSH_B",(i,a)=>ne(xe,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===2&&(r.uniforms.add(new K("lightingAmbientSH0",(i,a)=>q(co,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new re("lightingAmbientSH_R1",(i,a)=>ne(xe,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new re("lightingAmbientSH_G1",(i,a)=>ne(xe,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new re("lightingAmbientSH_B1",(i,a)=>ne(xe,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new re("lightingAmbientSH_R2",(i,a)=>ne(xe,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new re("lightingAmbientSH_G2",(i,a)=>ne(xe,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new re("lightingAmbientSH_B2",(i,a)=>ne(xe,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==N.Normal&&e.pbrMode!==N.Schematic||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const co=G(),xe=Er();function Pr(t){t.uniforms.add(new K("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function Xt(t){t.uniforms.add(new K("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function uo(t){Pr(t.fragment),Xt(t.fragment),t.fragment.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Al(t){const e=t.fragment.code;e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Aa(t){t.vertex.code.add(s`const float PI = 3.141592653589793;`),t.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Dr(t,e){const r=t.fragment.code;t.include(Aa),e.pbrMode!==N.Normal&&e.pbrMode!==N.Schematic&&e.pbrMode!==N.Simplified&&e.pbrMode!==N.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==N.Normal&&e.pbrMode!==N.Schematic||(t.include(Al),r.add(s`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}let Ml=class extends ee{constructor(e,r){super(e,"bool",F.Pass,(o,i,a)=>o.setUniform1b(e,r(i,a)))}};const Ol=.4;function Fr(t){t.constants.add("ambientBoostFactor","float",Ol)}function Br(t){t.uniforms.add(new te("lightingGlobalFactor",(e,r)=>r.lighting.globalFactor))}function Ma(t,e){const r=t.fragment;switch(t.include(Nr,e),e.pbrMode!==N.Disabled&&t.include(Dr,e),t.include(wl,e),t.include(Aa),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===N.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Fr(r),Br(r),Pr(r),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Xt(r),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case N.Disabled:case N.WaterOnIntegratedMesh:case N.Water:t.include(uo),r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case N.Normal:case N.Schematic:r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new Ml("hasFillLights",(o,i)=>i.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new te("lightingSpecularStrength",(o,i)=>i.lighting.mainLight.specularStrength),new te("lightingEnvironmentStrength",(o,i)=>i.lighting.mainLight.environmentStrength)),r.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode!==N.Schematic||e.hasColorTexture?s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case N.Simplified:case N.TerrainWithWater:t.include(uo),r.code.add(s`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:Qe(e.pbrMode);case N.COUNT:}}function Ft(t,e){if(!e.multipassEnabled)return;t.fragment.include(sl),t.fragment.uniforms.add(new Q("terrainDepthTexture",(o,i)=>{var a;return(a=i.multipassTerrain.linearDepth)==null?void 0:a.getTexture()}),new Ce("nearFar",(o,i)=>i.camera.nearFar));const r=e.occlusionPass;t.fragment.code.add(s`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${r?s`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:s`
          if(fragmentDepth ${e.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}class Rl extends ee{constructor(e,r,o){super(e,"mat4",F.Draw,(i,a,n,l)=>i.setUniformMatrix4fv(e,r(a,n,l)),o)}}let Il=class extends ee{constructor(e,r,o){super(e,"mat4",F.Pass,(i,a,n)=>i.setUniformMatrix4fv(e,r(a,n)),o)}};function Oa(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Il("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),Ia(t))}function Ra(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Rl("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),Ia(t))}function Ia(t){const e=t.fragment;e.include(ma),e.uniforms.add(new Q("shadowMap",(r,o)=>o.shadowMap.depthTexture),new ca("numCascades",(r,o)=>o.shadowMap.numCascades),new re("cascadeDistances",(r,o)=>o.shadowMap.cascadeDistances)),e.code.add(s`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function Ll(t,e){e.hasColorTextureTransform?(t.vertex.uniforms.add(new ve("colorTextureTransformMatrix",r=>r.colorTextureTransformMatrix??et)),t.varyings.add("colorUV","vec2"),t.vertex.code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(s`void forwardColorUV(){}`)}function $l(t,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==X.None?(t.vertex.uniforms.add(new ve("normalTextureTransformMatrix",r=>r.normalTextureTransformMatrix??et)),t.varyings.add("normalUV","vec2"),t.vertex.code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(s`void forwardNormalUV(){}`)}function Nl(t,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==X.None?(t.vertex.uniforms.add(new ve("emissiveTextureTransformMatrix",r=>r.emissiveTextureTransformMatrix??et)),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(s`void forwardEmissiveUV(){}`)}function Pl(t,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==X.None?(t.vertex.uniforms.add(new ve("occlusionTextureTransformMatrix",r=>r.occlusionTextureTransformMatrix??et)),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(s`void forwardOcclusionUV(){}`)}function Dl(t,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==X.None?(t.vertex.uniforms.add(new ve("metallicRoughnessTextureTransformMatrix",r=>r.metallicRoughnessTextureTransformMatrix??et)),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(s`void forwardMetallicRoughnessUV(){}`)}function Fl(t){t.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function Bt(t){t.include(Fl),t.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(_e.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(_e.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(_e.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.int(_e.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(_e.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function La(t){const e=new qt,{vertex:r,fragment:o,varyings:i}=e;if(ft(r,t),e.include(Rr),i.add("vpos","vec3"),e.include(pt,t),e.include(la,t),e.include(ha,t),e.include(Ll,t),t.output===T.Color||t.output===T.Alpha){e.include($l,t),e.include(Nl,t),e.include(Pl,t),e.include(Dl,t),gt(r,t),e.include(Ht,t),e.include(mt,t);const a=t.normalType===j.Attribute||t.normalType===j.Compressed;a&&t.offsetBackfaces&&e.include(oa),e.include(rl,t),e.include(Ko,t),t.instancedColor&&e.attributes.add(f.INSTANCECOLOR,"vec4"),i.add("vPositionLocal","vec3"),e.include(qe,t),e.include(ra,t),e.include(da,t),e.include(ua,t),r.uniforms.add(new re("externalColor",n=>n.externalColor)),i.add("vcolorExt","vec4"),t.multipassEnabled&&i.add("depth","float"),r.code.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(Ir)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${a?s`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${a&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `)}switch(t.output){case T.Alpha:e.include(Be,t),e.include(ze,t),e.include(Ft,t),o.uniforms.add(new te("opacity",a=>a.opacity),new te("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new Q("tex",a=>a.texture)),o.include(Bt),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?"terrainDepthTest(depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case T.Color:e.include(Be,t),e.include(Ma,t),e.include(Nr,t),e.include(ze,t),e.include(t.instancedDoublePrecision?Oa:Ra,t),e.include(Ft,t),gt(o,t),o.uniforms.add(r.uniforms.get("localOrigin"),new K("ambient",a=>a.ambient),new K("diffuse",a=>a.diffuse),new te("opacity",a=>a.opacity),new te("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new Q("tex",a=>a.texture)),e.include(Go,t),e.include(Dr,t),o.include(Bt),e.include(Hn,t),Fr(o),Br(o),Xt(o),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?"terrainDepthTest(depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===j.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:s`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===N.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows?"readShadowMap(vpos, linearDepth)":t.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?s`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${t.hasNormalTextureTransform?s`normalUV`:"vuv0"});`:s`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?s`normalize(posWorld);`:s`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?s`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===N.Normal||t.pbrMode===N.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===Ke.Color?s`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return e.include(pa,t),e}const Bl=Object.freeze(Object.defineProperty({__proto__:null,build:La},Symbol.toStringTag,{value:"Module"}));let zl=class extends Cs{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=dr(Qo),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Oe.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=He(0,0,0),this.instancedDoublePrecision=!1,this.normalType=j.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=He(.2,.2,.2),this.diffuse=He(.8,.8,.8),this.externalColor=Sr(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=G(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=_t.Less,this.textureAlphaMode=Z.Blend,this.textureAlphaCutoff=ws,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=mr.Occlude,this.isDecoration=!1}},zr=class $a extends Lr{initializeConfiguration(e,r){r.spherical=e.viewingMode===Lt.Global,r.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,r.textureCoordinateType=r.hasColorTexture||r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture?X.Default:X.None,r.objectAndLayerIdColorInstanced=r.instanced}initializeProgram(e){return this._initializeProgram(e,$a.shader)}_initializeProgram(e,r){return new $r(e.rctx,r.get().build(this.configuration),Wt)}_convertDepthTestFunction(e){return e===_t.Lequal?Ae.LEQUAL:Ae.LESS}_makePipeline(e,r){const o=this.configuration,i=e===Ke.NONE,a=e===Ke.FrontFace;return Cr({blending:o.output!==T.Color&&o.output!==T.Alpha||!o.transparent?null:i?qi:Yi(e),culling:Gl(o)?Xi(o.cullFace):null,depthTest:{func:Ji(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:(i||a)&&o.writeDepth?Zi:null,colorWrite:wr,stencilWrite:o.hasOccludees?As:null,stencilTest:o.hasOccludees?r?Os:Ms:null,polygonOffset:i||a?null:Ki(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function Gl(t){return t.cullFace!==Oe.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}zr.shader=new kt(Bl,()=>xt(()=>Promise.resolve().then(()=>mc),void 0));let Rt=class extends fr{};m([g({constValue:!0})],Rt.prototype,"hasSliceHighlight",void 0),m([g({constValue:!1})],Rt.prototype,"hasSliceInVertexProgram",void 0),m([g({constValue:F.Pass})],Rt.prototype,"pbrTextureBindType",void 0);class b extends Rt{constructor(){super(...arguments),this.output=T.Color,this.alphaDiscardMode=Z.Opaque,this.doubleSidedMode=oe.None,this.pbrMode=N.Disabled,this.cullFace=Oe.None,this.transparencyPassType=Ke.NONE,this.normalType=j.Attribute,this.textureCoordinateType=X.None,this.customDepthTest=_t.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}m([g({count:T.COUNT})],b.prototype,"output",void 0),m([g({count:Z.COUNT})],b.prototype,"alphaDiscardMode",void 0),m([g({count:oe.COUNT})],b.prototype,"doubleSidedMode",void 0),m([g({count:N.COUNT})],b.prototype,"pbrMode",void 0),m([g({count:Oe.COUNT})],b.prototype,"cullFace",void 0),m([g({count:Ke.COUNT})],b.prototype,"transparencyPassType",void 0),m([g({count:j.COUNT})],b.prototype,"normalType",void 0),m([g({count:X.COUNT})],b.prototype,"textureCoordinateType",void 0),m([g({count:_t.COUNT})],b.prototype,"customDepthTest",void 0),m([g()],b.prototype,"spherical",void 0),m([g()],b.prototype,"hasVertexColors",void 0),m([g()],b.prototype,"hasSymbolColors",void 0),m([g()],b.prototype,"hasVerticalOffset",void 0),m([g()],b.prototype,"hasSlicePlane",void 0),m([g()],b.prototype,"hasSliceHighlight",void 0),m([g()],b.prototype,"hasColorTexture",void 0),m([g()],b.prototype,"hasMetallicRoughnessTexture",void 0),m([g()],b.prototype,"hasEmissionTexture",void 0),m([g()],b.prototype,"hasOcclusionTexture",void 0),m([g()],b.prototype,"hasNormalTexture",void 0),m([g()],b.prototype,"hasScreenSizePerspective",void 0),m([g()],b.prototype,"hasVertexTangents",void 0),m([g()],b.prototype,"hasOccludees",void 0),m([g()],b.prototype,"multipassEnabled",void 0),m([g()],b.prototype,"hasModelTransformation",void 0),m([g()],b.prototype,"offsetBackfaces",void 0),m([g()],b.prototype,"vvSize",void 0),m([g()],b.prototype,"vvColor",void 0),m([g()],b.prototype,"receiveShadows",void 0),m([g()],b.prototype,"receiveAmbientOcclusion",void 0),m([g()],b.prototype,"textureAlphaPremultiplied",void 0),m([g()],b.prototype,"instanced",void 0),m([g()],b.prototype,"instancedColor",void 0),m([g()],b.prototype,"objectAndLayerIdColorInstanced",void 0),m([g()],b.prototype,"instancedDoublePrecision",void 0),m([g()],b.prototype,"doublePrecisionRequiresObfuscation",void 0),m([g()],b.prototype,"writeDepth",void 0),m([g()],b.prototype,"transparent",void 0),m([g()],b.prototype,"enableOffset",void 0),m([g()],b.prototype,"cullAboveGround",void 0),m([g()],b.prototype,"snowCover",void 0),m([g()],b.prototype,"hasColorTextureTransform",void 0),m([g()],b.prototype,"hasEmissionTextureTransform",void 0),m([g()],b.prototype,"hasNormalTextureTransform",void 0),m([g()],b.prototype,"hasOcclusionTextureTransform",void 0),m([g()],b.prototype,"hasMetallicRoughnessTextureTransform",void 0),m([g({constValue:!1})],b.prototype,"occlusionPass",void 0),m([g({constValue:!0})],b.prototype,"hasVvInstancing",void 0),m([g({constValue:!1})],b.prototype,"useCustomDTRExponentForWater",void 0),m([g({constValue:!1})],b.prototype,"supportsTextureAtlas",void 0),m([g({constValue:!0})],b.prototype,"useFillLights",void 0);function Na(t){const e=new qt,{vertex:r,fragment:o,varyings:i}=e;return ft(r,t),e.include(Rr),i.add("vpos","vec3"),e.include(pt,t),e.include(la,t),e.include(ha,t),t.output!==T.Color&&t.output!==T.Alpha||(gt(e.vertex,t),e.include(Ht,t),e.include(mt,t),t.offsetBackfaces&&e.include(oa),t.instancedColor&&e.attributes.add(f.INSTANCECOLOR,"vec4"),i.add("vNormalWorld","vec3"),i.add("localvpos","vec3"),t.multipassEnabled&&i.add("depth","float"),e.include(qe,t),e.include(ra,t),e.include(da,t),e.include(ua,t),r.uniforms.add(new re("externalColor",a=>a.externalColor)),i.add("vcolorExt","vec4"),r.code.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(Ir)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.multipassEnabled?s`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===T.Alpha&&(e.include(Be,t),e.include(ze,t),e.include(Ft,t),o.uniforms.add(new te("opacity",a=>a.opacity),new te("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new Q("tex",a=>a.texture)),o.include(Bt),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?s`terrainDepthTest(depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),t.output===T.Color&&(e.include(Be,t),e.include(Ma,t),e.include(Nr,t),e.include(ze,t),e.include(t.instancedDoublePrecision?Oa:Ra,t),e.include(Ft,t),gt(e.fragment,t),Pr(o),Fr(o),Br(o),o.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new K("ambient",a=>a.ambient),new K("diffuse",a=>a.diffuse),new te("opacity",a=>a.opacity),new te("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new Q("tex",a=>a.texture)),e.include(Go,t),e.include(Dr,t),o.include(Bt),Xt(o),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?s`terrainDepthTest(depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===N.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?s`albedo = mix(albedo, vec3(1), 0.9);`:s``}
        ${s`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode===N.Normal||t.pbrMode===N.Schematic?t.spherical?s`vec3 normalGround = normalize(vpos + localOrigin);`:s`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:s``}
        ${t.pbrMode===N.Normal||t.pbrMode===N.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===Ke.Color?s`fragColor = premultiplyAlpha(fragColor);`:s``}
      }
    `)),e.include(pa,t),e}const Vl=Object.freeze(Object.defineProperty({__proto__:null,build:Na},Symbol.toStringTag,{value:"Module"}));class Jt extends zr{initializeConfiguration(e,r){super.initializeConfiguration(e,r),r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasModelTransformation=!1,r.normalType=j.Attribute,r.doubleSidedMode=oe.WindingOrder,r.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Jt.shader)}}Jt.shader=new kt(Vl,()=>xt(()=>Promise.resolve().then(()=>fc),void 0));let zt=class extends ds{constructor(e){super(e,Hl),this.supportsEdges=!0,this.produces=new Map([[Ye.OPAQUE_MATERIAL,r=>(tr(r)||er(r))&&!this.parameters.transparent],[Ye.TRANSPARENT_MATERIAL,r=>(tr(r)||er(r))&&this.parameters.transparent&&this.parameters.writeDepth],[Ye.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,r=>(tr(r)||er(r))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new b,this._vertexBufferLayout=Wl(this.parameters)}isVisibleForOutput(e){return e!==T.Shadow&&e!==T.ShadowExcludeHighlight&&e!==T.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{hasInstancedColor:r,hasVertexColors:o,hasSymbolColors:i,vvColor:a}=e,n=e.colorMixMode==="replace",l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0,u=r||a||i;return o&&u?n||l:o?n?c:l:u?n||l:n?c:l}getConfiguration(e,r){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=this.parameters.verticalOffset!=null,this._configuration.hasScreenSizePerspective=this.parameters.screenSizePerspective!=null,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this.parameters.customDepthTest!=null&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Oe.None:this.parameters.cullFace,this._configuration.multipassEnabled=r.multipassEnabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=this.parameters.modelTransformation!=null,e!==T.Color&&e!==T.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=oe.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?oe.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?oe.WindingOrder:oe.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&r.ssao!=null,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?N.Schematic:N.Normal:N.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<Qi,this._configuration.snowCover=this.hasSnowCover(r),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return e.weather!=null&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,r,o,i,a,n){if(this.parameters.verticalOffset!=null){const l=o.camera;q(sr,r[12],r[13],r[14]);let c=null;switch(o.viewingMode){case Lt.Global:c=br(ho,sr);break;case Lt.Local:c=hi(ho,Yl)}let u=0;const d=We(Xl,sr,l.eye),h=Se(d),p=pe(d,d,1/h);let x=null;this.parameters.screenSizePerspective&&(x=mi(c,p)),u+=is(l,h,this.parameters.verticalOffset,x??0,this.parameters.screenSizePerspective),pe(c,c,u),fi(nr,c,o.transform.inverseRotation),i=We(kl,i,nr),a=We(ql,a,nr)}Qn(e,o,i,a,ms(o.verticalOffset),n)}createGLMaterial(e){return new Ul(e)}createBufferWriter(){return new Ss(this._vertexBufferLayout)}},Ul=class extends qn{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==T.Color&&this._output!==T.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const r=this._material.parameters;this.updateTexture(r.textureId);const o=e.camera.viewInverseTransposeMatrix;return q(r.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?Jt:zr,e)}};class jl extends zl{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const Hl=new jl;function Wl(t){const e=ki().vec3f(f.POSITION);return t.normalType===j.Compressed?e.vec2i16(f.NORMALCOMPRESSED,{glNormalized:!0}):e.vec3f(f.NORMAL),t.hasVertexTangents&&e.vec4f(f.TANGENT),(t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId)&&e.vec2f(f.UV0),t.hasVertexColors&&e.vec4u8(f.COLOR),t.hasSymbolColors&&e.vec4u8(f.SYMBOLCOLOR),pi("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(f.OBJECTANDLAYERIDCOLOR),e}const kl=G(),ql=G(),Yl=He(0,0,1),ho=G(),nr=G(),sr=G(),Xl=G(),Te=()=>_r.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Jl(t,e){const r=await Zl(t,e),o=await rc(r.textureDefinitions??{},e);let i=0;for(const a in o)if(o.hasOwnProperty(a)){const n=o[a];i+=n!=null&&n.image?n.image.width*n.image.height*4:0}return{resource:r,textures:o,size:i+vi(r)}}async function Zl(t,e){const r=e==null?void 0:e.streamDataRequester;if(r)return Kl(t,r,e);const o=await bo(gi(t,e));if(o.ok===!0)return o.value.data;Eo(o.error),Pa(o.error)}async function Kl(t,e,r){const o=await bo(e.request(t,"json",r));if(o.ok===!0)return o.value;Eo(o.error),Pa(o.error.details.url)}function Pa(t){throw new Gt("",`Request for object resource failed: ${t}`)}function Ql(t){const e=t.params,r=e.topology;let o=!0;switch(e.vertexAttributes||(Te().warn("Geometry must specify vertex attributes"),o=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const a=e.faces;if(a){if(e.vertexAttributes)for(const n in e.vertexAttributes){const l=a[n];l!=null&&l.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(Te().warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),o=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(Te().warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),o=!1)):(Te().warn(`Indexed geometry does not specify face indices for '${n}' attribute`),o=!1)}}else Te().warn("Indexed geometries must specify faces"),o=!1;break}default:Te().warn(`Unsupported topology '${r}'`),o=!1}t.params.material||(Te().warn("Geometry requires material"),o=!1);const i=t.params.vertexAttributes;for(const a in i)i[a].values||(Te().warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function ec(t,e){var v,y;const r=new Array,o=new Array,i=new Array,a=new Di,n=t.resource,l=yo.parse(n.version||"1.0","wosr");ac.validate(l);const c=n.model.name,u=n.model.geometries,d=n.materialDefinitions??{},h=t.textures;let p=0;const x=new Map;for(let L=0;L<u.length;L++){const M=u[L];if(!Ql(M))continue;const B=oc(M),I=M.params.vertexAttributes,$=[],P=R=>{if(M.params.topology==="PerAttributeArray")return null;const D=M.params.faces;for(const U in D)if(U===R)return D[U].values;return null},z=I[f.POSITION],O=z.values.length/z.valuesPerElement;for(const R in I){const D=I[R],U=D.values,ae=P(R)??Co(O);$.push([R,new Ue(U,ae,D.valuesPerElement,!0)])}const S=B.texture,C=h&&h[S];if(C&&!x.has(S)){const{image:R,parameters:D}=C,U=new Fo(R,D);o.push(U),x.set(S,U)}const A=x.get(S),E=A?A.id:void 0,_=B.material;let w=a.get(_,S);if(w==null){const R=d[_.substring(_.lastIndexOf("/")+1)].params;R.transparency===1&&(R.transparency=0);const D=C&&C.alphaChannelUsage,U=R.transparency>0||D==="transparency"||D==="maskAndTransparency",ae=C?Da(C.alphaChannelUsage):void 0,he={ambient:dr(R.diffuse),diffuse:dr(R.diffuse),opacity:1-(R.transparency||0),transparent:U,textureAlphaMode:ae,textureAlphaCutoff:.33,textureId:E,initTextureTransparent:!0,doubleSided:!0,cullFace:Oe.None,colorMixMode:R.externalColorMixMode||"tint",textureAlphaPremultiplied:(C==null?void 0:C.parameters.preMultiplyAlpha)??!1};e!=null&&e.materialParameters&&Object.assign(he,e.materialParameters),w=new zt(he),a.set(_,S,w)}i.push(w);const V=new Oo(w,$);p+=((y=(v=$.find(R=>R[0]===f.POSITION))==null?void 0:v[1])==null?void 0:y.indices.length)??0,r.push(V)}return{engineResources:[{name:c,stageResources:{textures:o,materials:i,geometries:r},pivotOffset:n.model.pivotOffset,numberOfVertices:p,lodThreshold:null}],referenceBoundingBox:tc(r)}}function tc(t){const e=So();return t.forEach(r=>{const o=r.boundingInfo;o!=null&&($t(e,o.bbMin),$t(e,o.bbMax))}),e}async function rc(t,e){const r=new Array;for(const a in t){const n=t[a],l=n.images[0].data;if(!l){Te().warn("Externally referenced texture data is not yet supported");continue}const c=n.encoding+";base64,"+l,u="/textureDefinitions/"+a,d=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",h={noUnpackFlip:!0,wrap:{s:Ge.REPEAT,t:Ge.REPEAT},preMultiplyAlpha:Da(d)!==Z.Opaque},p=e!=null&&e.disableTextures?Promise.resolve(null):wo(c,e);r.push(p.then(x=>({refId:u,image:x,parameters:h,alphaChannelUsage:d})))}const o=await Promise.all(r),i={};for(const a of o)i[a.refId]=a;return i}function Da(t){switch(t){case"mask":return Z.Mask;case"maskAndTransparency":return Z.MaskBlend;case"none":return Z.Opaque;default:return Z.Blend}}function oc(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const ac=new yo(1,2,"wosr");async function qd(t,e){var h;const r=ic(Fa(t));if(r.fileType==="wosr"){const p=await(e.cache?e.cache.loadWOSR(r.url,e):Jl(r.url,e)),{engineResources:x,referenceBoundingBox:v}=ec(p,e);return{lods:x,referenceBoundingBox:v,isEsriSymbolResource:!1,isWosr:!0}}const o=await(e.cache?e.cache.loadGLTF(r.url,e,!!e.usePBR):Oi(new Ri(e.streamDataRequester),r.url,e,e.usePBR)),i=(h=o.model.meta)==null?void 0:h.ESRI_proxyEllipsoid,a=o.meta.isEsriSymbolResource&&i!=null&&o.meta.ESRI_webstyle==="EsriRealisticTreesStyle";a&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,dc(o,i));const n=!!e.usePBR,l=o.meta.isEsriSymbolResource?{usePBR:n,isSchematic:!1,treeRendering:a,mrrFactors:[...Ls]}:{usePBR:n,isSchematic:!1,treeRendering:!1,mrrFactors:[...Qo]},c={...e.materialParameters,treeRendering:a},{engineResources:u,referenceBoundingBox:d}=nc(o,l,c,e.skipHighLods&&r.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:u,referenceBoundingBox:d,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function ic(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function nc(t,e,r,o){const i=t.model,a=new Array,n=new Map,l=new Map,c=i.lods.length,u=So();return i.lods.forEach((d,h)=>{const p=o.skipHighLods===!0&&(c>1&&h===0||c>3&&h===1)||o.skipHighLods===!1&&o.singleLodIndex!=null&&h!==o.singleLodIndex;if(p&&h!==0)return;const x=new hn(d.name,d.lodThreshold,[0,0,0]);d.parts.forEach(v=>{const y=p?new zt({}):sc(i,v,x,e,r,n,l),{geometry:L,vertexCount:M}=lc(v,y??new zt({})),B=L.boundingInfo;B!=null&&h===0&&($t(u,B.bbMin),$t(u,B.bbMax)),y!=null&&(x.stageResources.geometries.push(L),x.numberOfVertices+=M)}),p||a.push(x)}),{engineResources:a,referenceBoundingBox:u}}function sc(t,e,r,o,i,a,n){var x,v;const l=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),c=t.materials.get(e.material),u=e.attributes.texCoord0!=null,d=e.attributes.normal!=null;if(c==null)return null;const h=cc(c.alphaMode);if(!a.has(l)){if(u){const S=(C,A=!1)=>{if(C!=null&&!n.has(C)){const E=t.textures.get(C);if(E!=null){const _=E.data;n.set(C,new Fo(Kt(_)?_.data:_,{...E.parameters,preMultiplyAlpha:!Kt(_)&&A,encoding:Kt(_)&&_.encoding!=null?_.encoding:void 0}))}}};S(c.textureColor,h!==Z.Opaque),S(c.textureNormal),S(c.textureOcclusion),S(c.textureEmissive),S(c.textureMetallicRoughness)}const y=c.color[0]**(1/Ve),L=c.color[1]**(1/Ve),M=c.color[2]**(1/Ve),B=c.emissiveFactor[0]**(1/Ve),I=c.emissiveFactor[1]**(1/Ve),$=c.emissiveFactor[2]**(1/Ve),P=c.textureColor!=null&&u?n.get(c.textureColor):null,z=Rs({normalTexture:c.textureNormal,metallicRoughnessTexture:c.textureMetallicRoughness,metallicFactor:c.metallicFactor,roughnessFactor:c.roughnessFactor,emissiveTexture:c.textureEmissive,emissiveFactor:c.emissiveFactor,occlusionTexture:c.textureOcclusion}),O=((x=c.normalTextureTransform)==null?void 0:x.scale)!=null?(v=c.normalTextureTransform)==null?void 0:v.scale:_o;a.set(l,new zt({...o,transparent:h===Z.Blend,customDepthTest:_t.Lequal,textureAlphaMode:h,textureAlphaCutoff:c.alphaCutoff,diffuse:[y,L,M],ambient:[y,L,M],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?Oe.None:Oe.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:d?j.Attribute:j.ScreenDerivative,castShadows:!0,receiveShadows:c.receiveShadows,receiveAmbientOcclusion:c.receiveAmbientOcclustion,textureId:P!=null?P.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:c.textureNormal!=null&&u?n.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:P!=null&&!!P.parameters.preMultiplyAlpha,occlusionTextureId:c.textureOcclusion!=null&&u?n.get(c.textureOcclusion).id:void 0,emissiveTextureId:c.textureEmissive!=null&&u?n.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:c.textureMetallicRoughness!=null&&u?n.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[B,I,$],mrrFactors:z?[...Is]:[c.metallicFactor,c.roughnessFactor,o.mrrFactors[2]],isSchematic:z,colorTextureTransformMatrix:it(c.colorTextureTransform),normalTextureTransformMatrix:it(c.normalTextureTransform),scale:[O[0],O[1]],occlusionTextureTransformMatrix:it(c.occlusionTextureTransform),emissiveTextureTransformMatrix:it(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:it(c.metallicRoughnessTextureTransform),...i}))}const p=a.get(l);if(r.stageResources.materials.push(p),u){const y=L=>{L!=null&&r.stageResources.textures.push(n.get(L))};y(c.textureColor),y(c.textureNormal),y(c.textureOcclusion),y(c.textureEmissive),y(c.textureMetallicRoughness)}return p}function lc(t,e){const r=t.attributes.position.count,o=Ii(t.indices||r,t.primitiveType),i=Et(3*r),{typedBuffer:a,typedBufferStride:n}=t.attributes.position;Ai(i,a,t.transform,3,n);const l=[[f.POSITION,new Ue(i,o,3,!0)]];if(t.attributes.normal!=null){const c=Et(3*r),{typedBuffer:u,typedBufferStride:d}=t.attributes.normal;cr(Ot,t.transform),Mi(c,u,Ot,3,d),l.push([f.NORMAL,new Ue(c,o,3,!0)])}if(t.attributes.tangent!=null){const c=Et(4*r),{typedBuffer:u,typedBufferStride:d}=t.attributes.tangent;cr(Ot,t.transform),Li(c,u,Ot,4,d),l.push([f.TANGENT,new Ue(c,o,4,!0)])}if(t.attributes.texCoord0!=null){const c=Et(2*r),{typedBuffer:u,typedBufferStride:d}=t.attributes.texCoord0;$i(c,u,2,d),l.push([f.UV0,new Ue(c,o,2,!0)])}if(t.attributes.color!=null){const c=new Uint8Array(4*r);t.attributes.color.elementCount===4?t.attributes.color instanceof ur?kr(c,t.attributes.color,255):t.attributes.color instanceof jt?Ni(c,t.attributes.color):t.attributes.color instanceof yi&&kr(c,t.attributes.color,1/256):(c.fill(255),t.attributes.color instanceof Pt?Wr(c,t.attributes.color,255,4):t.attributes.color instanceof Ci?Pi(c,t.attributes.color.typedBuffer,4,t.attributes.color.typedBufferStride):t.attributes.color instanceof wi&&Wr(c,t.attributes.color,1/256,4)),l.push([f.COLOR,new Ue(c,o,4,!0)])}return{geometry:new Oo(e,l),vertexCount:r}}const Ot=Tt();function cc(t){switch(t){case"BLEND":return Z.Blend;case"MASK":return Z.Mask;case"OPAQUE":case null:case void 0:return Z.Opaque}}function dc(t,e){for(let r=0;r<t.model.lods.length;++r){const o=t.model.lods[r];for(const i of o.parts){const a=i.attributes.normal;if(a==null)return;const n=i.attributes.position,l=n.count,c=G(),u=G(),d=G(),h=new Uint8Array(4*l),p=new Float64Array(3*l),x=xi(Ut(),i.transform);let v=0,y=0;for(let L=0;L<l;L++){n.getVec(L,u),a.getVec(L,c),we(u,u,i.transform),We(d,u,e.center),Hr(d,d,e.radius);const M=d[2],B=Se(d),I=Math.min(.45+.55*B*B,1);Hr(d,d,e.radius),x!==null&&we(d,d,x),br(d,d),r+1!==t.model.lods.length&&t.model.lods.length>1&&Ti(d,d,c,M>-1?.2:Math.min(-4*M-3.8,1)),p[v]=d[0],p[v+1]=d[1],p[v+2]=d[2],v+=3,h[y]=255*I,h[y+1]=255*I,h[y+2]=255*I,h[y+3]=255,y+=4}i.attributes.normal=new Pt(p),i.attributes.color=new jt(h)}}}const uc=Object.freeze(Object.defineProperty({__proto__:null,build:ba},Symbol.toStringTag,{value:"Module"})),hc=Object.freeze(Object.defineProperty({__proto__:null,build:ya,getRadius:Yt},Symbol.toStringTag,{value:"Module"})),mc=Object.freeze(Object.defineProperty({__proto__:null,build:La},Symbol.toStringTag,{value:"Module"})),fc=Object.freeze(Object.defineProperty({__proto__:null,build:Na},Symbol.toStringTag,{value:"Module"}));export{qd as fetch,nc as gltfToEngineResources,ic as parseUrl};
