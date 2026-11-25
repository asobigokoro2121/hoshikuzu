
// ===== 「宇宙へ」 detailed backgrounds (v2) =====
// chunks can now carry small animated items (blinking lights, sparkles) drawn every frame
let GIT=null;
gChunk=function(th,ci){const k=Math.min(PXS,1.2),key=th+':'+ci,c=GCC.get(key);if(c&&c.k==k){GCC.delete(key);GCC.set(key,c);return c}
  const cv=document.createElement('canvas');cv.width=Math.ceil((W+24)*k);cv.height=Math.ceil(GCH*k);const g=cv.getContext('2d');g.setTransform(k,0,0,k,12*k,0);
  const m=cx;cx=g;GIT=[];try{(GGEN[th-22]||GGEN[0])(ci,gRng(ci*7919+th*104729+13))}finally{cx=m}
  const e={cv,k,it:GIT};GIT=null;GCC.set(key,e);while(GCC.size>16)GCC.delete(GCC.keys().next().value);return e};
gLayer=function(th,al){if(al<=0)return;if(th==28)return gSpaceD(al);const c0=Math.floor(GY/GCH)-1,c1=Math.floor((GY+H+24)/GCH);cx.save();cx.globalAlpha=al;
  for(let ci=c0;ci<=c1;ci++){const sy=H-((ci+1)*GCH-GY);if(sy>H+12||sy+GCH<-12)continue;const e=gChunk(th,ci);cx.drawImage(e.cv,-12,sy,W+24,GCH+.6);if(al>.3)for(const q of e.it)gItem(q,sy)}cx.restore()};
function gIt(o){if(GIT)GIT.push(o)}
function gItem(q,sy){const y=sy+q.y;if(y<-14||y>H+14)return;const ph=t+q.p;
  if(q.k=='l'){const on=Math.floor(ph/q.per)%2;if(on){cx.fillStyle=rgb(q.c);cx.beginPath();cx.arc(q.x,y,q.r||1.4,0,TAU);cx.fill();glow(q.x,y,(q.r||1.4)*4,q.c,.55)}}
  else if(q.k=='s'){const a=Math.max(0,Math.sin(ph/q.per));if(a>.2){cx.fillStyle=`rgba(255,255,255,${a*.7})`;cx.fillRect(q.x-a*2.2,y-.5,a*4.4,1);cx.fillRect(q.x-.5,y-a*1.6,1,a*3.2)}}
  else if(q.k=='w'){const o=Math.sin(ph/q.per)*3;cx.strokeStyle=`rgba(235,248,255,${.22+.12*Math.sin(ph/q.per*1.7)})`;cx.lineWidth=1.2;cx.beginPath();cx.moveTo(q.x-q.l/2+o,y);cx.quadraticCurveTo(q.x+o,y-2,q.x+q.l/2+o,y);cx.stroke()}
  else if(q.k=='m'){const k=(ph/q.per)%1;cx.fillStyle=`rgba(200,200,205,${.35*(1-k)})`;cx.beginPath();cx.arc(q.x+k*6,y-k*16,2+k*6,0,TAU);cx.fill()}}
function gShadowBox(x,y,w,h,d){cx.fillStyle='rgba(0,0,0,.32)';cx.beginPath();cx.moveTo(x+w,y);cx.lineTo(x+w+d,y+d);cx.lineTo(x+w+d,y+h+d);cx.lineTo(x+d,y+h+d);cx.lineTo(x,y+h);cx.lineTo(x+w,y+h);cx.closePath();cx.fill()}
function gRoof(x,y,w,h,c,r,ht){gShadowBox(x,y,w,h,ht||2.5);cx.fillStyle=c;cx.fillRect(x,y,w,h);cx.fillStyle='rgba(255,255,255,.14)';cx.fillRect(x,y,w,1.6);cx.fillRect(x,y,1.6,h);cx.fillStyle='rgba(0,0,0,.2)';cx.fillRect(x,y+h-1.6,w,1.6);cx.fillRect(x+w-1.6,y,1.6,h)}
function gPitched(x,y,w,h,c1,c2){gShadowBox(x,y,w,h,2.4);cx.fillStyle=c1;cx.fillRect(x,y,w,h/2);cx.fillStyle=c2;cx.fillRect(x,y+h/2,w,h/2);cx.strokeStyle='rgba(20,14,10,.55)';cx.lineWidth=.8;cx.strokeRect(x,y,w,h);cx.beginPath();cx.moveTo(x,y+h/2);cx.lineTo(x+w,y+h/2);cx.stroke()}
function gSoft(x,y,rr,c,a){const g=cx.createRadialGradient(x,y,0,x,y,rr);g.addColorStop(0,`rgba(${c},${a})`);g.addColorStop(1,`rgba(${c},0)`);cx.fillStyle=g;cx.fillRect(x-rr,y-rr,rr*2,rr*2)}
function gConifer(x,y,rr,c){cx.fillStyle='rgba(6,14,6,.4)';cx.beginPath();cx.arc(x+2,y+2.5,rr,0,TAU);cx.fill();cx.fillStyle=c;cx.beginPath();for(let i=0;i<10;i++){const a=i/10*TAU,q=i%2?rr*.55:rr;i?cx.lineTo(x+Math.cos(a)*q,y+Math.sin(a)*q):cx.moveTo(x+q,y)}cx.closePath();cx.fill();cx.fillStyle='rgba(150,200,120,.18)';cx.beginPath();cx.arc(x-rr*.25,y-rr*.25,rr*.35,0,TAU);cx.fill()}
function gHedge(x1,y1,x2,y2,r){const n=Math.max(2,Math.hypot(x2-x1,y2-y1)/5|0);for(let i=0;i<=n;i++){const x=x1+(x2-x1)*i/n,y=y1+(y2-y1)*i/n,rr=2+r()*1.6;cx.fillStyle='rgba(6,14,6,.35)';cx.beginPath();cx.arc(x+1.2,y+1.6,rr,0,TAU);cx.fill();cx.fillStyle=r()<.5?'#2a4a22':'#335a2a';cx.beginPath();cx.arc(x,y,rr,0,TAU);cx.fill()}}
function gCanalX(wy){return W*.16+26*Math.sin(wy/360+2)}

// ---------- stage 1: farmland with canals, hedgerows, villages; our base at the start ----------
function gField(x,y,w,h,r){const kind=r();
  if(kind<.12){cx.fillStyle='#6a5638';cx.fillRect(x,y,w,h);cx.strokeStyle='rgba(40,30,18,.35)';cx.lineWidth=1.4;cx.beginPath();for(let yy=y+3;yy<y+h;yy+=4){cx.moveTo(x+1,yy);cx.lineTo(x+w-1,yy)}cx.stroke()}
  else if(kind<.2){cx.fillStyle='#4a6a3a';cx.fillRect(x,y,w,h);for(let xx=x+5;xx<x+w-3;xx+=8)for(let yy=y+5;yy<y+h-3;yy+=8){cx.fillStyle='rgba(6,14,6,.4)';cx.beginPath();cx.arc(xx+1,yy+1.4,2.6,0,TAU);cx.fill();cx.fillStyle='#2e5226';cx.beginPath();cx.arc(xx,yy,2.6,0,TAU);cx.fill()}}
  else if(kind<.28){cx.fillStyle='#5e8a4c';cx.fillRect(x,y,w,h);cx.fillStyle='rgba(120,180,220,.16)';cx.fillRect(x,y,w,h);cx.strokeStyle='rgba(200,230,180,.35)';cx.lineWidth=1;cx.strokeRect(x+2,y+2,w-4,h-4);if(w>30){cx.beginPath();cx.moveTo(x+w/2,y+2);cx.lineTo(x+w/2,y+h-2);cx.stroke()}}
  else if(kind<.33&&w>26&&h>18){cx.fillStyle='#4e7640';cx.fillRect(x,y,w,h);const n=Math.max(1,(w-6)/12|0);for(let i=0;i<n;i++){const gx=x+4+i*((w-8)/n);cx.fillStyle='rgba(0,0,0,.25)';cx.fillRect(gx+1.5,y+5.5,(w-8)/n-3,h-9);cx.fillStyle='rgba(228,238,240,.78)';cx.fillRect(gx,y+4,(w-8)/n-3,h-9);cx.strokeStyle='rgba(150,170,175,.8)';cx.lineWidth=.7;cx.beginPath();cx.moveTo(gx+((w-8)/n-3)/2,y+4);cx.lineTo(gx+((w-8)/n-3)/2,y+h-5);cx.stroke()}}
  else{const c=['#43703a','#4d793c','#5b7e3d','#6a8240','#3e6634','#788348','#55723a','#617a44','#8a8a4a'][r()*9|0];cx.fillStyle=c;cx.fillRect(x,y,w,h);
    if(r()<.75){cx.strokeStyle=r()<.5?'rgba(20,36,14,.2)':'rgba(220,230,160,.09)';cx.lineWidth=1.3;cx.beginPath();if(r()<.5)for(let xx=x+4;xx<x+w-2;xx+=4.5){cx.moveTo(xx,y+2);cx.lineTo(xx,y+h-2)}else for(let yy=y+4;yy<y+h-2;yy+=4.5){cx.moveTo(x+2,yy);cx.lineTo(x+w-2,yy)}cx.stroke()}
    if(r()<.3){cx.strokeStyle='rgba(30,24,14,.18)';cx.lineWidth=2.4;cx.beginPath();cx.moveTo(x+4,y+h-3);cx.quadraticCurveTo(x+w/2,y+h*.3,x+w-4,y+4);cx.stroke()}}}
function gFarm2(ci,r){const top=(ci+1)*GCH;
  cx.fillStyle='#30502a';cx.fillRect(-12,0,W+24,GCH);
  let y=0;const rows=[];while(y<GCH){const h=Math.min(GCH-y,42+(r()*56|0));rows.push(y);let x=-12-r()*30;
    while(x<W+12){const w=30+r()*80;gField(x+1.5,y+1.5,w-3,h-3,r);if(r()<.35)gHedge(x+w,y+2,x+w,y+h-2,r);x+=w}if(r()<.4)gHedge(-12,y+h,W+12,y+h,r);y+=h}
  // irrigation canal
  const CP=gPathPts(top,gCanalX);gStroke(CP,9,'#5a6a3a');gStroke(CP,6,'#3a6a86');gStroke(CP,2,'rgba(170,215,235,.35)');
  for(let i=0;i<4;i++){const ly=r()*GCH,X=gCanalX(top-ly);gIt({k:'s',x:X+(r()-.5)*3,y:ly,p:r()*99,per:20+r()*20})}
  // pond
  if(r()<.35){const x=W*.62+r()*W*.3,yy=30+r()*(GCH-60),rx=14+r()*12,ry=9+r()*7;cx.fillStyle='#4a5a34';cx.beginPath();cx.ellipse(x,yy,rx+3,ry+3,.3,0,TAU);cx.fill();cx.fillStyle='#2e5e7a';cx.beginPath();cx.ellipse(x,yy,rx,ry,.3,0,TAU);cx.fill();cx.fillStyle='rgba(180,220,240,.25)';cx.beginPath();cx.ellipse(x-rx*.3,yy-ry*.3,rx*.5,ry*.35,.3,0,TAU);cx.fill();
    for(let k=0;k<6;k++){const a=r()*TAU;cx.strokeStyle='#4a7a3a';cx.lineWidth=1;cx.beginPath();cx.moveTo(x+Math.cos(a)*rx,yy+Math.sin(a)*ry);cx.lineTo(x+Math.cos(a)*(rx+4),yy+Math.sin(a)*(ry+4)-2);cx.stroke()}gIt({k:'s',x,y:yy,p:r()*99,per:25})}
  // side road
  if(r()<.55&&rows.length>1){const yb=rows[1+(r()*(rows.length-1)|0)],s2=r()<.5?-1:1,X=gRoadX(top-yb);cx.lineWidth=9;cx.strokeStyle='#5a4e38';cx.beginPath();cx.moveTo(X,yb);cx.lineTo(s2<0?-14:W+14,yb);cx.stroke();cx.lineWidth=6;cx.strokeStyle='#9c8a62';cx.stroke();
    cx.fillStyle='#6a6a62';const bx=gCanalX(top-yb);if((s2<0&&bx<X)||(s2>0&&bx>X)){cx.fillRect(bx-7,yb-5,14,10);cx.strokeStyle='#3a3a34';cx.lineWidth=.8;cx.strokeRect(bx-7,yb-5,14,10)}}
  gTrees(r,6,14,GCH-14,wy=>gRoadX(top-wy));
  gRoad(top,gRoadX,17,12,'#55492f','#a08c64');cx.strokeStyle='rgba(70,58,36,.5)';cx.lineWidth=1;for(const o of[-2.6,2.6])gRoadPath(top,wy=>gRoadX(wy)+o);
  // roadside trees and utility poles with wires
  for(let ly=10+r()*20;ly<GCH;ly+=34+r()*30){const X=gRoadX(top-ly)+(r()<.5?-14:14);gTree(X,ly,3.6+r()*2,'#2e5228')}
  const PO=[];for(let wy=Math.ceil((top-GCH)/44)*44;wy<=top;wy+=44)PO.push([gRoadX(wy)+18,top-wy]);
  cx.strokeStyle='rgba(20,20,18,.45)';cx.lineWidth=.7;cx.beginPath();for(let i=0;i<PO.length-1;i++){cx.moveTo(PO[i][0],PO[i][1]);cx.lineTo(PO[i+1][0],PO[i+1][1])}cx.stroke();
  for(const[x,yy]of PO){cx.fillStyle='rgba(0,0,0,.3)';cx.fillRect(x+1,yy+1,6,1.6);cx.fillStyle='#4a3a28';cx.fillRect(x-1.2,yy-1.2,2.4,2.4)}
  // farmhouse clusters
  for(let i=0;i<2;i++)if(r()<.6){const ly=22+r()*(GCH-44),s2=r()<.5?-1:1,X=gRoadX(top-ly)+s2*(26+r()*18);
    cx.fillStyle='#7a6a48';cx.fillRect(X-14,ly-11,28,22);gPitched(X-10,ly-8,12,10,'#8a5a46','#a8705a');gPitched(X+3,ly-6,10,12,'#7a2e26','#9a3e30');
    cx.fillStyle='#5a4a32';cx.fillRect(X-12,ly+5,8,4);gTree(X+s2*16,ly-10,4,'#2a4a22');gTree(X+s2*18,ly+6,3.4,'#335a2a')}
  if(ci<=1)gBase2(ci,r)}
function gBase2(ci,r){const top=(ci+1)*GCH,ly=wy=>top-wy,rx=W/2;
  cx.save();cx.beginPath();cx.rect(-12,ly(410),W+24,GCH+410);cx.clip();
  cx.fillStyle='#4c5a40';cx.fillRect(-12,ly(410),W+24,GCH+410);
  for(let i=0;i<30;i++){cx.fillStyle=i%2?'rgba(90,110,70,.4)':'rgba(60,80,50,.35)';cx.fillRect(-12+r()*(W+24),ly(400)+r()*(400+GCH),20+r()*40,8+r()*14)}
  cx.fillStyle='#62665c';cx.fillRect(-12,ly(340),W+24,340+GCH);
  cx.strokeStyle='rgba(40,42,38,.35)';cx.lineWidth=.6;cx.beginPath();for(let x=-12;x<W+12;x+=20){cx.moveTo(x,ly(340));cx.lineTo(x,top+20)}for(let wy=-300;wy<340;wy+=20){cx.moveTo(-12,ly(wy));cx.lineTo(W+12,ly(wy))}cx.stroke();
  // runway
  cx.fillStyle='#3a3c38';cx.fillRect(rx-27,ly(390),54,390+GCH);cx.fillStyle='rgba(0,0,0,.12)';for(let wy=-300;wy<390;wy+=9)cx.fillRect(rx-27,ly(wy),54,1);
  cx.fillStyle='rgba(30,30,28,.6)';for(let i=0;i<14;i++)cx.fillRect(rx-14+r()*28,ly(-200+r()*560),3+r()*6,14+r()*20);
  cx.fillStyle='rgba(240,240,230,.85)';cx.fillRect(rx-25,ly(390),2,390+GCH);cx.fillRect(rx+23,ly(390),2,390+GCH);
  for(let wy=-300;wy<360;wy+=34)cx.fillRect(rx-1.5,ly(wy+16),3,16);
  for(let i=0;i<8;i++)cx.fillRect(rx-22+i*5.6+(i>3?2.4:0),ly(384),3.4,22);
  for(const wy of[290,250])for(const s2 of[-1,1])cx.fillRect(rx+s2*13-3,ly(wy),6,14);
  cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText('22',rx,ly(334));
  for(let wy=-290;wy<390;wy+=30){gIt({k:'l',x:rx-26,y:ly(wy),c:[255,240,190],per:30,p:wy*.3,r:1.1});gIt({k:'l',x:rx+26,y:ly(wy),c:[255,240,190],per:30,p:wy*.3,r:1.1})}
  // taxiway
  cx.fillStyle='#55584f';cx.fillRect(rx+52,ly(370),16,370+GCH);for(const wy of[30,190,330]){cx.fillRect(rx+26,ly(wy+8),30,16)}
  cx.strokeStyle='rgba(255,209,102,.8)';cx.lineWidth=1.2;cx.beginPath();cx.moveTo(rx+60,ly(370));cx.lineTo(rx+60,top+20);for(const wy of[30,190,330]){cx.moveTo(rx+60,ly(wy));cx.lineTo(rx+30,ly(wy))}cx.stroke();
  for(let wy=-290;wy<370;wy+=40)gIt({k:'l',x:rx+52,y:ly(wy),c:[120,200,255],per:40,p:wy,r:1})
  // hangars with numbers and apron markings
  for(const[wy,n]of[[70,'1'],[160,'2'],[250,'3']]){const x=40;cx.strokeStyle='rgba(255,209,102,.55)';cx.lineWidth=1;cx.strokeRect(x-34,ly(wy+40),72,66);
    cx.fillStyle='rgba(10,12,8,.4)';rrp(x-30+4,ly(wy+30)+4,64,52,10);cx.fill();rrp(x-30,ly(wy+30),64,52,10);cx.fillStyle=mtl(x-30,x+34,'#5a6060','#aab0a4');cx.fill();cx.strokeStyle='#2a2e2a';cx.lineWidth=1.5;cx.stroke();
    cx.strokeStyle='rgba(40,44,40,.45)';cx.lineWidth=1;cx.beginPath();for(let k=1;k<8;k++){cx.moveTo(x-30+k*8,ly(wy+30));cx.lineTo(x-30+k*8,ly(wy-22))}cx.stroke();
    cx.fillStyle='#3a3e3a';cx.fillRect(x+30,ly(wy+22),6,36);cx.fillStyle='rgba(240,240,230,.8)';cx.font='bold 11px sans-serif';cx.fillText(n,x+2,ly(wy)+4);gIt({k:'l',x:x+33,y:ly(wy+24),c:[255,90,110],per:22,p:wy,r:1.2})}
  // control tower, operations buildings, helipad, windsock
  {const x=W-40,y=ly(300);gRoof(x-14,y-14,28,28,'#7a7e74',r,5);cx.fillStyle='#7fe0ff';cx.fillRect(x-10,y-10,20,20);cx.fillStyle='rgba(255,255,255,.35)';cx.fillRect(x-10,y-10,20,4);cx.strokeStyle='#2a3a40';cx.lineWidth=1;cx.strokeRect(x-10,y-10,20,20);gIt({k:'l',x,y:y-16,c:[255,90,110],per:18,p:0,r:1.6})}
  for(const[wy,x]of[[90,W-34],[180,W-38]])gRoof(x-16,ly(wy+12),32,24,'#6b7064',r,3);
  {const x=W-40,y=ly(240);cx.strokeStyle='rgba(240,240,230,.8)';cx.lineWidth=1.6;cx.beginPath();cx.arc(x,y,11,0,TAU);cx.stroke();cx.fillStyle='rgba(240,240,230,.85)';cx.font='bold 12px sans-serif';cx.fillText('H',x,y+4)}
  {const x=W-14,y=ly(360);cx.fillStyle='#3a3a34';cx.fillRect(x-.8,y-6,1.6,6);cx.fillStyle='#ff8a3c';poly([[x,y-6],[x+9,y-4],[x,y-2]]);cx.fill();cx.fillStyle='#fff';cx.fillRect(x+3,y-5.4,2,2.8)}
  cx.strokeStyle='rgba(30,34,26,.75)';cx.setLineDash([4,3]);cx.lineWidth=1.2;cx.strokeRect(-4,ly(402),W+8,402+GCH+40);cx.setLineDash([]);
  cx.restore()}

// ---------- stage 2: the great river and forest ----------
function gForest2(ci,r){const top=(ci+1)*GCH,rv=wy=>gRiverX(wy);
  cx.fillStyle='#1b3418';cx.fillRect(-12,0,W+24,GCH);
  for(let i=0;i<4;i++){const x=r()*W,y=20+r()*(GCH-40);cx.fillStyle='#3e5e30';cx.beginPath();cx.ellipse(x,y,22+r()*26,12+r()*12,r()*3,0,TAU);cx.fill();cx.fillStyle='rgba(120,150,70,.25)';cx.beginPath();cx.ellipse(x,y,14,8,0,0,TAU);cx.fill()}
  const P=gPathPts(top,rv);gStroke(P,182,'#3e4a2c');gStroke(P,172,'#6a5a3a');gStroke(P,164,'#c8b888');gStroke(P,154,'#1e4a66');gStroke(P,128,'#22506e');gStroke(P,92,'#285a7a');gStroke(P,40,'#2f6485');
  for(let i=0;i<3;i++)if(r()<.45){const ly=20+r()*(GCH-40),X=rv(top-ly)+(r()-.5)*90;cx.fillStyle='#c8b888';cx.beginPath();cx.ellipse(X,ly,8+r()*10,22+r()*20,(r()-.5)*.3,0,TAU);cx.fill();cx.fillStyle='rgba(60,90,60,.5)';cx.beginPath();cx.ellipse(X,ly,4,10,0,0,TAU);cx.fill()}
  for(let i=0;i<5;i++){const ly=r()*GCH,X=rv(top-ly)+(r()-.5)*120;cx.fillStyle='#4a4e48';cx.beginPath();cx.ellipse(X,ly,3+r()*3,2+r()*2,r()*3,0,TAU);cx.fill();cx.strokeStyle='rgba(230,245,250,.55)';cx.lineWidth=1;cx.beginPath();cx.arc(X,ly-1,6,Math.PI*1.1,Math.PI*1.9);cx.stroke()}
  cx.strokeStyle='rgba(170,210,235,.16)';cx.lineWidth=1.1;for(let i=0;i<34;i++){const ly=r()*GCH,X=rv(top-ly)+(r()-.5)*130;cx.beginPath();cx.moveTo(X,ly-8);cx.lineTo(X+(r()-.5)*2,ly+8);cx.stroke()}
  for(let i=0;i<10;i++){const ly=r()*GCH;gIt({k:'s',x:rv(top-ly)+(r()-.5)*130,y:ly,p:r()*99,per:14+r()*16})}
  for(let i=0;i<6;i++){const ly=r()*GCH;gIt({k:'w',x:rv(top-ly)+(r()-.5)*120,y:ly,l:10+r()*10,p:r()*99,per:30+r()*20})}
  // cliffs on one bank
  if(r()<.5){const s2=r()<.5?-1:1;cx.strokeStyle='#5a4a34';cx.lineWidth=6;cx.beginPath();P.forEach(([x,y],i)=>i?cx.lineTo(x+s2*86,y):cx.moveTo(x+s2*86,y));cx.stroke();cx.strokeStyle='rgba(30,22,14,.6)';cx.lineWidth=1.4;cx.stroke()}
  // tributary stream
  if(r()<.35){const y0=20+r()*(GCH-40),s2=r()<.5?-1:1,X=rv(top-y0)+s2*80;cx.strokeStyle='#2c5a78';cx.lineWidth=5;cx.beginPath();cx.moveTo(X,y0);cx.bezierCurveTo(X+s2*30,y0-30,X+s2*60,y0+20,s2<0?-14:W+14,y0-20);cx.stroke();cx.strokeStyle='rgba(170,210,235,.3)';cx.lineWidth=1.2;cx.stroke()}
  const TC=['#264820','#2e5427','#22421d','#35602d','#2a4e24','#3a5a26'],AC=['#6a6a2a','#7a5a26'];
  for(let i=0;i<340;i++){const x=-10+r()*(W+20),y=6+r()*(GCH-12);if(Math.abs(x-rv(top-y))<92)continue;const q=r();if(q<.3)gConifer(x,y,4.5+r()*4,'#1e3c1c');else gTree(x,y,4.5+r()*5,q>.96?AC[r()*2|0]:TC[r()*TC.length|0])}
  if(r()<.4){const s2=r()<.5?-1:1,y=30+r()*(GCH-60),X=cl(rv(top-y)+s2*(110+r()*30),20,W-20);cx.fillStyle='#4e6a34';cx.beginPath();cx.ellipse(X,y,20,14,0,0,TAU);cx.fill();gPitched(X-8,y-5,10,8,'#6a4a32','#8a5e3e');gPitched(X+3,y-2,8,7,'#6a4a32','#8a5e3e');gIt({k:'m',x:X-4,y:y-6,p:r()*99,per:50})}
  if(r()<.45){const y=30+r()*(GCH-60),X=rv(top-y);cx.fillStyle='#6a5a3e';cx.fillRect(-12,y-4.5,W+24,9);cx.fillStyle='#8a7a58';cx.fillRect(-12,y-3,W+24,6);
    cx.fillStyle='rgba(0,10,20,.35)';cx.fillRect(X-84,y-3,168,14);cx.fillStyle='#8a8c86';cx.fillRect(X-86,y-6,172,12);cx.strokeStyle='#3a3c38';cx.lineWidth=1.2;cx.strokeRect(X-86,y-6,172,12);
    cx.fillStyle='#5a5c58';for(let k=-80;k<=80;k+=10)cx.fillRect(X+k-1,y-6,2,12);cx.fillStyle='#4a4c48';for(let k=-60;k<=60;k+=40)cx.fillRect(X+k-3,y+6,6,5);
    cx.strokeStyle='rgba(255,209,102,.6)';cx.setLineDash([6,5]);cx.lineWidth=1;cx.beginPath();cx.moveTo(X-86,y);cx.lineTo(X+86,y);cx.stroke();cx.setLineDash([]);
    for(const s2 of[-1,1])gIt({k:'l',x:X+s2*86,y:y,c:[255,90,110],per:24,p:s2*10,r:1.4})}}

// ---------- stage 3: coast, harbor town and the strait ----------
function gCoast2(ci,r){const top=(ci+1)*GCH,cs=wy=>gCoastX(wy);
  const sg=cx.createLinearGradient(0,0,W,0);sg.addColorStop(0,'#2a7a90');sg.addColorStop(.45,'#1c5276');sg.addColorStop(1,'#123a5e');cx.fillStyle=sg;cx.fillRect(-12,0,W+24,GCH);
  for(let i=0;i<5;i++){const x=200+r()*170,y=r()*GCH;gSoft(x,y,30+r()*40,'10,30,60',.35)}
  cx.strokeStyle='rgba(220,240,255,.13)';cx.lineWidth=1.2;for(let i=0;i<46;i++){const x=r()*W,y=r()*GCH;cx.beginPath();cx.arc(x,y,5+r()*6,Math.PI*1.15,Math.PI*1.85);cx.stroke()}
  for(let i=0;i<8;i++){const x=180+r()*190,y=r()*GCH;gIt({k:'w',x,y,l:8+r()*10,p:r()*99,per:24+r()*20})}
  for(let i=0;i<10;i++){const x=170+r()*200,y=r()*GCH;gIt({k:'s',x,y,p:r()*99,per:12+r()*18})}
  const P=gPathPts(top,cs);gStroke(P.map(([x,y])=>[x+22,y]),44,'rgba(70,170,180,.35)');gStroke(P.map(([x,y])=>[x+10,y]),26,'rgba(110,200,200,.35)');
  for(const o of[16,26,36]){cx.strokeStyle=`rgba(235,248,255,${.4-o/120})`;cx.lineWidth=1.2;cx.beginPath();P.forEach(([x,y],i)=>i?cx.lineTo(x+o+Math.sin(y/9+o)*1.5,y):cx.moveTo(x+o,y));cx.stroke()}
  gStroke(P,20,'#d8c48c');gStroke(P.map(([x,y])=>[x+5,y]),5,'#b8a470');
  cx.beginPath();cx.moveTo(-12,-14);P.forEach(([x,y])=>cx.lineTo(x-7,y));cx.lineTo(-12,GCH+14);cx.closePath();cx.fillStyle='#3e6234';cx.fill();
  cx.save();cx.clip();
  for(let i=0;i<8;i++){cx.fillStyle=['#4a7038','#56783e','#46683a','#5e7a44'][r()*4|0];cx.fillRect(-12+r()*110,r()*GCH,30+r()*40,20+r()*30)}
  // harbor town: streets + houses
  const tx0=-6,tx1=Math.min(...P.map(p=>p[0]))-18;cx.fillStyle='#5a5a52';for(let y=12;y<GCH;y+=40)cx.fillRect(-12,y,tx1+12,4);cx.fillRect(40,0,4,GCH);
  for(let y=18;y<GCH-8;y+=40)for(let x=tx0;x<tx1-10;x+=14+r()*6){if(Math.abs(x-40)<10)continue;const c=r()<.5?['#9a5a46','#b8705a']:r()<.5?['#6e7480','#8c93a0']:['#c8b8a0','#e0d0b8'];gPitched(x,y+3+r()*6,10,9,c[0],c[1])}
  for(let i=0;i<16;i++)gTree(-10+r()*(tx1+10),r()*GCH,2.6+r()*2.4,'#2a4a22');
  cx.restore();
  // pier with containers
  if(r()<.6){const y=30+r()*(GCH-70),X=cs(top-y);cx.fillStyle='rgba(0,10,20,.35)';cx.fillRect(X-2,y-3,60,16);cx.fillStyle='#8a8c86';cx.fillRect(X-6,y-6,62,14);cx.strokeStyle='#3a3c38';cx.lineWidth=1;cx.strokeRect(X-6,y-6,62,14);
    const CC=['#c84a3a','#3a6ab8','#e0a040','#3a8a5a','#8a8c96'];for(let k=0;k<5;k++){cx.fillStyle=CC[r()*5|0];cx.fillRect(X-2+k*10,y-4.5,8,4.4);cx.fillRect(X-2+k*10,y+.5,8,4.4);cx.fillStyle='rgba(0,0,0,.25)';cx.fillRect(X-2+k*10,y-.6,8,1)}
    for(let k=0;k<5;k++){cx.fillStyle='#5a5c58';cx.fillRect(X+2+k*11,y+8,2,5)}gIt({k:'l',x:X+56,y:y,c:[120,255,160],per:26,p:0,r:1.5})}
  // lighthouse on a point
  if(r()<.3){const y=40+r()*(GCH-80),X=cs(top-y)-14;cx.fillStyle='#6a6a62';cx.beginPath();cx.arc(X,y,7,0,TAU);cx.fill();cx.fillStyle='#f2f2ea';cx.fillRect(X-3,y-3,6,6);cx.fillStyle='#d8424a';cx.fillRect(X-3,y-1,6,2);gIt({k:'l',x:X,y,c:[255,250,200],per:34,p:0,r:2.4})}
  // buoys and rocks offshore
  for(let i=0;i<2;i++)if(r()<.5){const x=220+r()*130,y=20+r()*(GCH-40);cx.fillStyle='rgba(230,240,250,.3)';cx.beginPath();cx.ellipse(x,y,15,8,0,0,TAU);cx.fill();cx.fillStyle='#4e5a48';cx.beginPath();cx.ellipse(x,y,10,5.5,.3,0,TAU);cx.fill();cx.fillStyle='#6a7660';cx.beginPath();cx.ellipse(x-2,y-1,5,3,.3,0,TAU);cx.fill()}
  if(r()<.5){const x=cs(top-60)+60+r()*50,y=40+r()*(GCH-80);cx.fillStyle='#e8c040';cx.fillRect(x-1.6,y-1.6,3.2,3.2);gIt({k:'l',x,y:y-2,c:[255,209,102],per:20,p:r()*99,r:1.2})}}

// ---------- stage 4: the steel city ----------
function gCity2(ci,r){const top=(ci+1)*GCH;
  cx.fillStyle='#303338';cx.fillRect(-12,0,W+24,GCH);
  const rows=[];let y=0;while(y<GCH){const h=Math.min(GCH-y,58+(r()*40|0));rows.push([y,h]);y+=h}
  const cols=[[-12,AVX[0]-9],[AVX[0]+9,AVX[1]-9],[AVX[1]+9,AVX[2]-9],[AVX[2]+9,RAILX-15],[RAILX+15,W+12]];
  const RC=['#5a5e66','#666a72','#4e5258','#72706a','#5e5a54','#6e747c','#7a7468','#585e68'];
  const industrial=r()<.25;
  for(const[y0,h]of rows)for(const[x0,x1]of cols){if(x1-x0<10)continue;cx.fillStyle='#4a4d52';cx.fillRect(x0,y0+5,x1-x0,h-10);cx.fillStyle='#5a5e64';cx.fillRect(x0,y0+5,x1-x0,2);cx.fillRect(x0,y0+h-7,x1-x0,2);
    if(r()<.1){cx.fillStyle='#3e5e34';cx.fillRect(x0+3,y0+8,x1-x0-6,h-16);cx.strokeStyle='#6a6a5a';cx.lineWidth=1;cx.beginPath();cx.moveTo(x0+5,y0+h/2);cx.lineTo(x1-5,y0+h/2);cx.stroke();for(let k=0;k<7;k++)gTree(x0+6+r()*(x1-x0-12),y0+12+r()*(h-24),3.6+r()*3,'#2e5028');continue}
    let x=x0+3;while(x<x1-6){const w=Math.min(x1-3-x,16+r()*30);if(w<8)break;const hh=h-16,c=RC[r()*RC.length|0],tall=r()<.25,sd=tall?6:2.6;
      if(industrial&&r()<.5){gRoof(x,y0+8,w-2,hh,'#6a6e72',r,3);cx.fillStyle='rgba(0,0,0,.25)';for(let yy=y0+10;yy<y0+8+hh-2;yy+=6)cx.fillRect(x+1,yy,w-4,2.4);cx.fillStyle='rgba(180,200,210,.35)';for(let yy=y0+12;yy<y0+8+hh-2;yy+=6)cx.fillRect(x+1,yy,w-4,1)}
      else{gRoof(x,y0+8,w-2,hh,c,r,sd);const q=r();
        if(q<.18&&w>18&&hh>18){cx.fillStyle='#2a3a5a';const nx=(w-8)/6|0,ny=(hh-8)/5|0;for(let i=0;i<nx;i++)for(let j=0;j<ny;j++){cx.fillStyle=(i+j)%2?'#2e4a78':'#28406a';cx.fillRect(x+3+i*6,y0+11+j*5,5,4)}}
        else if(q<.26&&w>20&&hh>20){const cxp=x+w/2-1,cyp=y0+8+hh/2;cx.strokeStyle='rgba(255,209,102,.85)';cx.lineWidth=1.3;cx.beginPath();cx.arc(cxp,cyp,Math.min(w,hh)/2-3,0,TAU);cx.stroke();cx.fillStyle='rgba(240,240,230,.85)';cx.font='bold 9px sans-serif';cx.textAlign='center';cx.fillText('H',cxp,cyp+3)}
        else if(q<.34){cx.fillStyle='#3e6a3a';cx.fillRect(x+3,y0+11,w-8,hh-6);for(let k=0;k<3;k++)gTree(x+5+r()*(w-12),y0+14+r()*(hh-12),2.6,'#2e5028')}
        else{for(let k=0;k<2+(r()*3|0);k++){const bx=x+3+r()*(w-10),by=y0+11+r()*(hh-10);cx.fillStyle='#8a8e96';cx.fillRect(bx,by,5,4);cx.fillStyle='#3a3e44';cx.fillRect(bx+1,by+1,3,.8)}if(r()<.4){cx.fillStyle='rgba(160,200,230,.45)';for(let k=0;k<3;k++)cx.fillRect(x+4+k*5,y0+12,3,hh-10)}}
        if(tall)gIt({k:'l',x:x+w-4,y:y0+11,c:[255,60,70],per:28,p:r()*99,r:1.3})}
      x+=w}}
  for(const[y0]of rows.slice(1)){cx.fillStyle='#26282c';cx.fillRect(-12,y0-5,RAILX-15+12,10);cx.strokeStyle='rgba(240,230,180,.45)';cx.setLineDash([5,5]);cx.lineWidth=1;cx.beginPath();cx.moveTo(-12,y0);cx.lineTo(RAILX-15,y0);cx.stroke();cx.setLineDash([])}
  for(const ax of AVX){cx.fillStyle='#26282c';cx.fillRect(ax-9,0,18,GCH);cx.fillStyle='rgba(240,230,180,.55)';for(let yy=(top%24);yy<GCH;yy+=24)cx.fillRect(ax-.8,yy,1.6,11);
    for(const[y0]of rows.slice(1)){cx.fillStyle='rgba(240,240,235,.7)';for(let k=-7;k<=7;k+=2.6)cx.fillRect(ax+k-.7,y0-9,1.4,4);for(let k=-7;k<=7;k+=2.6)cx.fillRect(ax+k-.7,y0+5,1.4,4)}
    for(let k=0;k<5;k++){const yy=r()*GCH,s2=r()<.5?-1:1,c=['#c84a3a','#3a6ab8','#e0e0e0','#2a2a2a','#e0a040'][r()*5|0];cx.fillStyle='rgba(0,0,0,.3)';cx.fillRect(ax+s2*4-1.4,yy+1,4,7);cx.fillStyle=c;cx.fillRect(ax+s2*4-2,yy,4,7);cx.fillStyle='rgba(160,210,240,.7)';cx.fillRect(ax+s2*4-1.6,yy+(s2>0?1:4.6),3.2,1.6)}
    for(let yy=8+r()*10;yy<GCH;yy+=30+r()*20){gTree(ax-12,yy,2.6,'#2e5028');gTree(ax+12,yy+10,2.6,'#2e5028')}}
  cx.fillStyle='#4e4a42';cx.fillRect(RAILX-15,0,30,GCH);cx.fillStyle='#2e2a26';for(let yy=((top%7)+7)%7;yy<GCH;yy+=7)cx.fillRect(RAILX-10,yy,20,2.4);
  cx.fillStyle='#a8aeb6';cx.fillRect(RAILX-6,0,1.6,GCH);cx.fillRect(RAILX+4.4,0,1.6,GCH);
  if(r()<.3){const y0=30+r()*(GCH-90);cx.fillStyle='#8a8c86';cx.fillRect(RAILX-24,y0,8,60);cx.fillStyle='rgba(255,209,102,.8)';cx.fillRect(RAILX-17,y0,1,60);cx.fillStyle='#5a6270';cx.fillRect(RAILX-26,y0+6,10,48);gIt({k:'l',x:RAILX-21,y:y0+2,c:[120,255,160],per:30,p:0,r:1.3})}}

// ---------- stage 5: sea of clouds with peaks ----------
function gCloud2(ci,r){const top=(ci+1)*GCH;
  cx.fillStyle='#566e7e';cx.fillRect(-12,0,W+24,GCH);
  for(let i=0;i<40;i++){cx.fillStyle=['#607a74','#66806e','#52687a','#6a7e72'][r()*4|0];cx.fillRect(r()*W,r()*GCH,6+r()*16,5+r()*12)}
  cx.strokeStyle='rgba(60,80,110,.4)';cx.lineWidth=1;cx.beginPath();cx.moveTo(-12,r()*GCH);for(let x=0;x<W+12;x+=20)cx.lineTo(x,r()*GCH);cx.stroke();
  cx.fillStyle='rgba(120,150,190,.35)';cx.fillRect(-12,0,W+24,GCH);
  const puffs=[];for(const d of[1,0,-1]){const q=gRng((ci+d)*613+29);for(let i=0;i<40;i++){const rr=16+q()*30;puffs.push([-20+q()*(W+40),q()*GCH-d*GCH,rr])}}
  for(const[x,y,rr]of puffs)gSoft(x+4,y+rr*.35,rr,'110,128,160',.6);
  for(const[x,y,rr]of puffs){const g=cx.createRadialGradient(x-rr*.2,y-rr*.3,rr*.1,x,y,rr);g.addColorStop(0,'rgba(236,241,250,.95)');g.addColorStop(.55,'rgba(210,220,238,.86)');g.addColorStop(1,'rgba(190,204,228,0)');cx.fillStyle=g;cx.fillRect(x-rr,y-rr,rr*2,rr*2)}
  for(let i=0;i<20;i++){const[x,y,rr]=puffs[r()*puffs.length|0];gSoft(x-rr*.3,y-rr*.4,rr*.45,'255,255,255',.5)}
  const np=r()<.75?1+(r()<.35?1:0):0;for(let n=0;n<np;n++){const x=30+r()*(W-60),y=60+r()*(GCH-120),s2=22+r()*18;
    cx.fillStyle='rgba(50,60,90,.3)';cx.beginPath();cx.ellipse(x+12,y+14,s2*1.2,s2*.6,0,0,TAU);cx.fill();
    const pk=[[0,-s2],[s2*.22,-s2*.62],[s2*.48,-s2*.38],[s2*.62,-s2*.5],[s2,s2*.5],[s2*.2,s2*.7],[-s2*.6,s2*.6],[-s2,s2*.2],[-s2*.55,-s2*.2],[-s2*.32,-s2*.42]].map(([a,b])=>[x+a,y+b]);
    poly(pk);cx.fillStyle='#6e727c';cx.fill();cx.save();poly(pk);cx.clip();
    cx.fillStyle='#4a4e58';poly([[x,y-s2],[x+s2,y+s2*.5],[x+s2*.2,y+s2*.7],[x+s2*.05,y]]);cx.fill();cx.fillStyle='#868a94';poly([[x-s2,y+s2*.2],[x-s2*.32,y-s2*.42],[x-s2*.1,y+s2*.1]]);cx.fill();
    cx.strokeStyle='rgba(30,32,40,.4)';cx.lineWidth=1;cx.beginPath();for(let k=0;k<6;k++){const a=-1.2+k*.5;cx.moveTo(x,y-s2);cx.lineTo(x+Math.sin(a)*s2*1.1,y+Math.cos(a)*s2*.8)}cx.stroke();
    cx.fillStyle='#f2f6fa';poly([[x,y-s2],[x+s2*.22,y-s2*.62],[x+s2*.5,y-s2*.35],[x+s2*.3,y-s2*.28],[x+s2*.12,y-s2*.4],[x-s2*.05,y-s2*.3],[x-s2*.2,y-s2*.44],[x-s2*.32,y-s2*.42]]);cx.fill();
    cx.fillStyle='rgba(190,215,240,.55)';poly([[x+s2*.05,y-s2*.32],[x+s2*.2,y-s2*.1],[x+s2*.32,y+s2*.15],[x+s2*.12,y+s2*.05]]);cx.fill();cx.restore();
    for(let k=0;k<7;k++){const rr=12+r()*14,xx=x+(r()-.5)*s2*2.4,yy=y+s2*.5+r()*10;gSoft(xx,yy,rr,'232,238,248',.9)}
    gIt({k:'s',x:x-s2*.05,y:y-s2*.8,p:r()*99,per:30})}
  for(let i=0;i<4;i++)gIt({k:'s',x:r()*W,y:r()*GCH,p:r()*99,per:40+r()*30})}

// ---------- stage 6: the planet from the stratosphere ----------
function gStrato2(ci,r){cx.fillStyle='#143152';cx.fillRect(-12,0,W+24,GCH);
  for(const d of[1,0,-1]){const q=gRng((ci+d)*877+5),oy=-d*GCH;
    for(let i=0;i<5;i++)gSoft(q()*W,q()*GCH+oy,40+q()*50,'8,24,52',.5);
    for(let i=0;i<3;i++){const x=q()*W,y=q()*GCH+oy;for(let k=0;k<9;k++){const c=['70,104,62','98,104,66','52,78,50','140,124,84'][q()*4|0];gSoft(x+(q()-.5)*80,y+(q()-.5)*56,18+q()*24,c,.9)}gSoft(x,y,46,'120,180,200',.08)}
    for(let i=0;i<22;i++)gSoft(q()*W,q()*GCH+oy,8+q()*16,'240,246,255',.5)}
  for(let i=0;i<4;i++){const y=20+r()*(GCH-40);cx.strokeStyle='rgba(240,246,255,.18)';cx.lineWidth=3+r()*4;cx.lineCap='round';cx.beginPath();cx.moveTo(-12,y);cx.bezierCurveTo(W*.3,y-14+r()*28,W*.7,y-14+r()*28,W+12,y+(r()-.5)*20);cx.stroke()}
  if(r()<.3){const x=60+r()*(W-120),y=70+r()*(GCH-140);for(let k=0;k<3;k++){cx.strokeStyle=`rgba(240,246,255,${.45-k*.1})`;cx.lineWidth=5-k;cx.beginPath();for(let a=0;a<TAU*1.6;a+=.2){const rr=4+a*8;const px=x+Math.cos(a+k*2.1)*rr,py=y+Math.sin(a+k*2.1)*rr*.75;a?cx.lineTo(px,py):cx.moveTo(px,py)}cx.stroke()}gSoft(x,y,10,'255,255,255',.8)}}
// ---------- stage 7: the edge of space ----------
gSpaceD=function(al){cx.save();cx.globalAlpha=al;const g=cx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#01020a');g.addColorStop(.6,'#040a22');g.addColorStop(1,'#0c1c44');cx.fillStyle=g;cx.fillRect(-12,-12,W+24,H+24);
  const pr=thB==28?gProg():.3;
  gSoft(W*.78,H*.2,140,'90,60,160',.12+.1*pr);gSoft(W*.2,H*.12,110,'40,110,170',.1+.08*pr);
  for(const q of stars){const tw=.6+.4*Math.sin(t*.06+q.ph);cx.fillStyle=rgb(q.c,(q.ly==2?1:q.ly?.75:.5)*tw*(.5+pr*.5));cx.fillRect(q.x,q.y,q.r,q.r)}
  {const mx=W*.84,my=H*.13;gSoft(mx,my,22,'230,235,255',.35);cx.fillStyle='#d8dce6';cx.beginPath();cx.arc(mx,my,9,0,TAU);cx.fill();cx.fillStyle='rgba(120,124,140,.6)';for(const[a,b,c]of[[-3,-2,2],[2,3,1.6],[3,-3,1.2]]){cx.beginPath();cx.arc(mx+a,my+b,c,0,TAU);cx.fill()}cx.fillStyle='rgba(10,14,30,.55)';cx.beginPath();cx.arc(mx+4,my-1,9,0,TAU);cx.fill()}
  {const sx=-20,sy=H*.32;gSoft(sx,sy,120,'255,240,200',.25+.1*pr);gSoft(sx,sy,40,'255,250,230',.6);cx.strokeStyle='rgba(255,245,220,.18)';cx.lineWidth=1;cx.beginPath();cx.moveTo(sx-60,sy);cx.lineTo(sx+200,sy);cx.stroke()}
  const R0=900,cy=H+R0-150+pr*110,eg=cx.createRadialGradient(W*.35,cy-R0*.7,R0*.2,W/2,cy,R0);eg.addColorStop(0,'#3a7ac0');eg.addColorStop(.8,'#1c4a8a');eg.addColorStop(.97,'#0e2c5e');eg.addColorStop(1,'#08183a');
  cx.fillStyle=eg;cx.beginPath();cx.arc(W/2,cy,R0,0,TAU);cx.fill();
  cx.save();cx.beginPath();cx.arc(W/2,cy,R0,0,TAU);cx.clip();
  for(let i=0;i<5;i++){const x=((i*97+GY*.04)%(W+160))-80;cx.fillStyle='rgba(70,110,70,.55)';cx.beginPath();cx.ellipse(x,cy-R0+40+(i%2)*20,50,14,.1,0,TAU);cx.fill();cx.fillStyle='rgba(140,120,80,.4)';cx.beginPath();cx.ellipse(x+14,cy-R0+44+(i%2)*20,20,6,.1,0,TAU);cx.fill()}
  cx.fillStyle='rgba(245,250,255,.4)';for(let i=0;i<12;i++){const x=(i*61+GY*.05)%(W+80)-40;cx.beginPath();cx.ellipse(x,cy-R0+16+(i%3)*16,30,4.5,0,0,TAU);cx.fill()}
  {const x=((GY*.05+180)%(W+160))-80,y=cy-R0+34;cx.strokeStyle='rgba(245,250,255,.45)';cx.lineWidth=3;cx.beginPath();for(let a=0;a<TAU*1.4;a+=.25){const rr=2+a*4;const px=x+Math.cos(a)*rr,py=y+Math.sin(a)*rr*.35;a?cx.lineTo(px,py):cx.moveTo(px,py)}cx.stroke()}
  const tg=cx.createLinearGradient(W*.55,0,W,0);tg.addColorStop(0,'rgba(0,0,0,0)');tg.addColorStop(1,'rgba(0,4,16,.65)');cx.fillStyle=tg;cx.fillRect(W*.55,cy-R0,W*.5,200);
  cx.fillStyle='rgba(255,210,120,.8)';for(let i=0;i<14;i++){const x=W*.78+((i*37)%70),y=cy-R0+12+((i*23)%40);cx.fillRect(x,y,1.2,1.2)}
  cx.restore();
  for(const[w,a]of[[34,.08],[18,.16],[8,.35],[3,.8]]){cx.strokeStyle=`rgba(120,190,255,${a})`;cx.lineWidth=w;cx.beginPath();cx.arc(W/2,cy,R0+w*.3,Math.PI*1.1,Math.PI*1.9);cx.stroke()}
  cx.strokeStyle='rgba(255,170,120,.25)';cx.lineWidth=2;cx.beginPath();cx.arc(W/2,cy,R0+1,Math.PI*1.12,Math.PI*1.4);cx.stroke();
  cx.restore()};
GGEN[0]=gFarm2;GGEN[1]=gForest2;GGEN[2]=gCoast2;GGEN[3]=gCity2;GGEN[4]=gCloud2;GGEN[5]=gStrato2;GGEN[6]=gStrato2;
// moving high cloud shadows over the low stages, drifting wisps over the cloud sea
{const g0=gDraw;gDraw=function(k){g0(k);if(thB==22||thB==23){cx.save();for(let i=0;i<2;i++){const y=((GY*1.25+i*420+t*.2)%(H+400))-200,x=(i?W*.75:W*.2)+Math.sin(t/300+i)*30;gSoft(x,y,110,'0,10,0',.12)}cx.restore()}
  if(thB==26){const CL=gClouds();cx.save();cx.globalAlpha=.35;for(let i=0;i<3;i++){const y=((GY*2.6+i*300)%(H+360))-180,x=[W*.6,-40,W*.3][i];cx.drawImage(CL[i],x,y,260,140)}cx.restore()}}}
