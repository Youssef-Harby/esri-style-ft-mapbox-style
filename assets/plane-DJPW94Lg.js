import{cJ as V,f8 as $,cl as f,g5 as g,cF as A,ck as T,ch as X}from"./index-CsUFEoah.js";import"./vec42-C3rPPDSS.js";import{e as b}from"./mat3f64-q3fE-ZOt.js";import{e as x}from"./mat4f64-CSKppSlJ.js";import{e as C}from"./quatf64-Bdb9ZJJK.js";import{n as L}from"./vec4f64-CCf6w8sj.js";class r{constructor(e){this._create=e,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&V(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const e=2*this._itemsPtr;this._items.length>e&&(this._items.length=e),this._itemsPtr=0}static createVec2f64(){return new r($)}static createVec3f64(){return new r(f)}static createVec4f64(){return new r(L)}static createMat3f64(){return new r(b)}static createMat4f64(){return new r(x)}static createQuatf64(){return new r(C)}get test(){return{length:this._items.length}}}r.createVec2f64();const d=r.createVec3f64();r.createVec4f64();r.createMat3f64();const j=r.createMat4f64(),B=r.createQuatf64();function k(t=q){return[t[0],t[1],t[2],t[3]]}function D(t){return t}function y(t,e,i,s=k()){const h=i[0]-e[0],I=i[1]-e[1],a=i[2]-e[2],c=t[0]-e[0],p=t[1]-e[1],w=t[2]-e[2],_=I*w-a*p,l=a*c-h*w,E=h*p-I*c,P=_*_+l*l+E*E,F=Math.abs(P-1)>1e-5&&P>1e-12?1/Math.sqrt(P):1;return s[0]=_*F,s[1]=l*F,s[2]=E*F,s[3]=-(s[0]*t[0]+s[1]*t[1]+s[2]*t[2]),s}function O(t,e,i,s=0,h=Math.floor(i*(1/3)),I=Math.floor(i*(2/3))){if(i<3)return!1;e(o,s);let a=h,c=!1;for(;a<i-1&&!c;)e(n,a),a++,c=!g(o,n);if(!c)return!1;for(a=Math.max(a,I),c=!1;a<i&&!c;)e(N,a),a++,A(M,o,n),T(M,M),A(u,n,N),T(u,u),c=!g(o,N)&&!g(n,N)&&Math.abs(X(M,u))<Q;return c?(y(o,n,N,t),!0):(s!==0||h!==1||I!==2)&&O(t,e,i,0,1,2)}const Q=.99619469809,o=f(),n=f(),N=f(),M=f(),u=f(),q=[0,0,1,0];var m;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(m||(m={}));m.INFINITE_MIN|m.INFINITE_MAX;m.INFINITE_MAX;export{k as E,D as F,O as X,d as c,j as f,B as o};