/* Small local rigid-body solver. World units / seconds; fixed 120Hz step. */
(function(root){
function body(x,y,w,h,opt={}){const r=opt.r||0,m=opt.mass||1;return {x,y,w,h,r,a:opt.a||0,vx:0,vy:0,av:0,im:opt.static?0:1/m,ii:opt.static?0:1/(r?m*r*r/2:m*(w*w+h*h)/12),...opt};}
function vertices(b){const c=Math.cos(b.a),s=Math.sin(b.a);return [[-b.w/2,-b.h/2],[b.w/2,-b.h/2],[b.w/2,b.h/2],[-b.w/2,b.h/2]].map(([x,y])=>({x:b.x+x*c-y*s,y:b.y+x*s+y*c}));}
function hit(A,B){if(A.r&&B.r){const dx=B.x-A.x,dy=B.y-A.y,d=Math.hypot(dx,dy);return d<A.r+B.r?{nx:dx/(d||1),ny:dy/(d||1),depth:A.r+B.r-d,x:A.x+dx*.5,y:A.y+dy*.5}:null;}
const va=A.r?null:vertices(A),vb=B.r?null:vertices(B),axes=[];
for(const [b,v] of [[A,va],[B,vb]])if(v){axes.push({x:Math.cos(b.a),y:Math.sin(b.a)},{x:-Math.sin(b.a),y:Math.cos(b.a)});}
if(A.r||B.r){const C=A.r?A:B,V=A.r?vb:va;let q=V.reduce((p,v)=>Math.hypot(v.x-C.x,v.y-C.y)<Math.hypot(p.x-C.x,p.y-C.y)?v:p);let dx=q.x-C.x,dy=q.y-C.y,d=Math.hypot(dx,dy)||1;axes.push({x:dx/d,y:dy/d});}
let depth=Infinity,n;
for(const ax of axes){function interval(b,v){if(b.r){const p=b.x*ax.x+b.y*ax.y;return[p-b.r,p+b.r];}const p=v.map(p=>p.x*ax.x+p.y*ax.y);return[Math.min(...p),Math.max(...p)];}const a=interval(A,va),b=interval(B,vb),overlap=Math.min(a[1],b[1])-Math.max(a[0],b[0]);if(overlap<=0)return null;if(overlap<depth){depth=overlap;n=ax;}}
if((B.x-A.x)*n.x+(B.y-A.y)*n.y<0)n={x:-n.x,y:-n.y};let p;
if(A.r)p={x:A.x+n.x*A.r,y:A.y+n.y*A.r};else if(B.r)p={x:B.x-n.x*B.r,y:B.y-n.y*B.r};else {function support(v,n){let best=-Infinity,pts=[];for(const p of v){const d=p.x*n.x+p.y*n.y;if(d>best+.1){best=d;pts=[p];}else if(Math.abs(d-best)<.1)pts.push(p);}return{x:pts.reduce((s,p)=>s+p.x,0)/pts.length,y:pts.reduce((s,p)=>s+p.y,0)/pts.length};}const p1=support(va,n),p2=support(vb,{x:-n.x,y:-n.y});p={x:(p1.x+p2.x)/2,y:(p1.y+p2.y)/2};}
return{nx:n.x,ny:n.y,depth,x:p.x,y:p.y};}
function step(bodies,dt,onImpact){for(const b of bodies){if(b.im){b.vy+=900*dt;b.vx*=.999;b.vy=Math.min(b.vy,1000);b.x+=b.vx*dt;b.y+=b.vy*dt;}if(b.ii){b.a+=b.av*dt;b.av*=.995;if(b.pivot){b.a=Math.max(-.42,Math.min(.42,b.a));}}}
for(let iter=0;iter<5;iter++)for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++){const A=bodies[i],B=bodies[j];if(!(A.im||B.im||A.ii||B.ii))continue;const c=hit(A,B);if(!c)continue;const sum=A.im+B.im;if(sum){const k=Math.max(0,c.depth-.08)*.65/sum;A.x-=c.nx*k*A.im;A.y-=c.ny*k*A.im;B.x+=c.nx*k*B.im;B.y+=c.ny*k*B.im;}
const ax=c.x-A.x,ay=c.y-A.y,bx=c.x-B.x,by=c.y-B.y;const rvx=(B.vx-B.av*by)-(A.vx-A.av*ay),rvy=(B.vy+B.av*bx)-(A.vy+A.av*ax),speed=rvx*c.nx+rvy*c.ny;if(speed>=0)continue;const ra=ax*c.ny-ay*c.nx,rb=bx*c.ny-by*c.nx,den=sum+ra*ra*A.ii+rb*rb*B.ii;if(!den)continue;const e=Math.min(A.restitution??.25,B.restitution??.25),imp=-(1+e)*speed/den,ix=imp*c.nx,iy=imp*c.ny;A.vx-=ix*A.im;A.vy-=iy*A.im;A.av-=ra*imp*A.ii;B.vx+=ix*B.im;B.vy+=iy*B.im;B.av+=rb*imp*B.ii;A.vx*=.997;B.vx*=.997;if(iter===0&&speed< -10&&onImpact)onImpact(A,B,-speed,c);}
}
const api={body,hit,step,vertices};if(typeof module!=='undefined')module.exports=api;else root.TinyPhysics=api;
})(typeof window!=='undefined'?window:globalThis);
