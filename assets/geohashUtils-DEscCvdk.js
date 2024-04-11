import{aB as A,aE as B,aS as g,cN as j,cO as w}from"./index-BjUNJPVf.js";import{K as R}from"./featureConversionUtils-BHhm7bvm.js";import{e as v}from"./OptimizedGeometry-CQuTPb9g.js";import{j as b}from"./timeSupport-DXkhlToK.js";const E=new Float64Array(2),F=new Float64Array(2),T="0123456789bcdefghjkmnpqrstuvwxyz",Y=64;function O(n,e,r,a){const t=[n.xmin,n.ymin,n.xmax,n.ymax],s=A.fromExtent(B.fromBounds(t,a)),c=b(s,a,g.WGS84,{densificationStep:e*Y});if(!c)return null;const o=R(new v,c,!1,!1),u=o.coords.filter((W,h)=>!(h%2)),i=o.coords.filter((W,h)=>h%2),d=Math.min(...u),M=Math.min(...i),l=Math.max(...u),m=Math.max(...i),f=G(d,M,r,g.WGS84),y=G(l,m,r,g.WGS84);return f&&y?{bounds:t,geohashBounds:{xLL:f[0],yLL:f[1],xTR:y[0],yTR:y[1]},level:r}:null}function G(n,e,r,a){if(a.isWebMercator){const c=j(n/w.radius),o=c-360*Math.floor((c+180)/360),u=[0,0];return $(u,0,j(Math.PI/2-2*Math.atan(Math.exp(-e/w.radius))),o,r),u}const t=b({x:n,y:e},a,g.WGS84);if(!t)return null;const s=[0,0];return $(s,0,t.y,t.x,r),s}function k(n){return T[n]}function z(n){return(n[0]+n[1])/2}function L(n,e,r){return n[0]=e,n[1]=r,n}function q(n,e){const r=z(n),a=e,t=!e;n[0]=t*n[0]+a*r,n[1]=t*r+a*n[1]}function x(n,e){const r=e>z(n);return q(n,r),r}function P(n,e){let r=-90,a=90,t=-180,s=180;for(let c=0;c<e;c++){const o=Math.ceil((c+1)/2),u=Math.floor((c+1)/2),i=1-c%2,d=30-(3*o+2*u),M=30-(2*o+3*u),l=3*i+2*(1-i),m=2*i+3*(1-i),f=3*i+7*(1-i)<<M,y=(7*i+3*(1-i)<<d&n.geohashX)>>d,W=(f&n.geohashY)>>M;for(let h=l-1;h>=0;h--){const S=(t+s)/2,p=y&1<<h?1:0;t=(1-p)*t+p*S,s=(1-p)*S+p*s}for(let h=m-1;h>=0;h--){const S=(r+a)/2,p=W&1<<h?1:0;r=(1-p)*r+p*S,a=(1-p)*S+p*a}}return[t,r,s,a]}function $(n,e,r,a,t){t%2&&(t+=1);let s=0,c=0,o=-90,u=90,i=-180,d=180;for(let M=0;M<t/2;M++){for(let l=0;l<5;l++){const m=(i+d)/2,f=a>m?1:0;s|=f<<29-(l+5*M),i=(1-f)*i+f*m,d=(1-f)*m+f*d}for(let l=0;l<5;l++){const m=(o+u)/2,f=r>m?1:0;c|=f<<29-(l+5*M),o=(1-f)*o+f*m,u=(1-f)*m+f*u}}n[2*e]=s,n[2*e+1]=c}function X(n,e,r){let a="";const t=L(E,-90,90),s=L(F,-180,180);for(let c=0;c<r;c++){let o=0;c%2?(o|=x(t,n)<<4,o|=x(s,e)<<3,o|=x(t,n)<<2,o|=x(s,e)<<1,o|=x(t,n)<<0):(o|=x(s,e)<<4,o|=x(t,n)<<3,o|=x(s,e)<<2,o|=x(t,n)<<1,o|=x(s,e)<<0),a+=k(o)}return a}export{G as A,P as R,O as S,X as z};