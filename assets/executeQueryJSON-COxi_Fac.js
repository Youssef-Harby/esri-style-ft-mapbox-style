import{aW as i,aX as s}from"./index-BjUNJPVf.js";import{c as e}from"./query-Bk_ITqRK.js";import{d as m}from"./FeatureSet-opEn8ou8.js";async function y(a,r,o){const t=await p(a,r,o);return m.fromJSON(t)}async function p(a,r,o){const t=i(a),c={...o},n=s.from(r),{data:f}=await e(t,n,n.sourceSpatialReference,c);return f}export{p as a,y as s};
