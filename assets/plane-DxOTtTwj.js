import{cY as V,fU as $,cy as f,bj as X,gQ as F,cU as T,cx as p,cu as b}from"./index-BjUNJPVf.js";import{e as x}from"./mat3f64-q3fE-ZOt.js";import{e as y}from"./mat4f64-CSKppSlJ.js";import{e as C}from"./quatf64-Bdb9ZJJK.js";class r{constructor(e){this._create=e,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&V(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const e=2*this._itemsPtr;this._items.length>e&&(this._items.length=e),this._itemsPtr=0}static createVec2f64(){return new r($)}static createVec3f64(){return new r(f)}static createVec4f64(){return new r(X)}static createMat3f64(){return new r(x)}static createMat4f64(){return new r(y)}static createQuatf64(){return new r(C)}get test(){return{length:this._items.length}}}r.createVec2f64();const z=r.createVec3f64();r.createVec4f64();r.createMat3f64();const G=r.createMat4f64(),Z=r.createQuatf64();function L(t=Y){return[t[0],t[1],t[2],t[3]]}function d(t){return t}function Q(t,e,c,s=L()){const h=c[0]-e[0],I=c[1]-e[1],a=c[2]-e[2],i=t[0]-e[0],w=t[1]-e[1],A=t[2]-e[2],_=I*A-a*w,E=a*i-h*A,P=h*w-I*i,l=_*_+E*E+P*P,g=Math.abs(l-1)>1e-5&&l>1e-12?1/Math.sqrt(l):1;return s[0]=_*g,s[1]=E*g,s[2]=P*g,s[3]=-(s[0]*t[0]+s[1]*t[1]+s[2]*t[2]),s}function O(t,e,c,s=0,h=Math.floor(c*(1/3)),I=Math.floor(c*(2/3))){if(c<3)return!1;e(o,s);let a=h,i=!1;for(;a<c-1&&!i;)e(n,a),a++,i=!F(o,n);if(!i)return!1;for(a=Math.max(a,I),i=!1;a<c&&!i;)e(N,a),a++,T(M,o,n),p(M,M),T(m,n,N),p(m,m),i=!F(o,N)&&!F(n,N)&&Math.abs(b(M,m))<U;return i?(Q(o,n,N,t),!0):(s!==0||h!==1||I!==2)&&O(t,e,c,0,1,2)}const U=.99619469809,o=f(),n=f(),N=f(),M=f(),m=f(),Y=[0,0,1,0];var u;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(u||(u={}));u.INFINITE_MIN|u.INFINITE_MAX;u.INFINITE_MAX;export{L as E,d as F,O as X,z as c,G as f,Z as o};