import{aW as i,aX as s}from"./index-ky5Fj-x1.js";import{c as e}from"./query-oqmyKfzJ.js";import{d as m}from"./FeatureSet-CpTIDh9n.js";async function y(a,r,o){const t=await p(a,r,o);return m.fromJSON(t)}async function p(a,r,o){const t=i(a),c={...o},n=s.from(r),{data:f}=await e(t,n,n.sourceSpatialReference,c);return f}export{p as a,y as s};
