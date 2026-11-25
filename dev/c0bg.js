// ===== Course 1 「宇宙へ」: themes and the ground seen from the sky =====
TH.push({t:[40,64,34],b:[58,84,44],n:[[120,180,90],[200,220,140]],p:[230,255,210]},
 {t:[30,60,40],b:[44,80,52],n:[[90,170,110],[180,220,150]],p:[210,255,220]},
 {t:[30,60,80],b:[44,90,110],n:[[90,170,220],[200,230,255]],p:[210,240,255]},
 {t:[50,52,60],b:[70,72,80],n:[[150,150,170],[255,190,120]],p:[255,230,200]},
 {t:[90,120,170],b:[150,180,220],n:[[200,220,255],[255,255,255]],p:[255,255,255]},
 {t:[20,40,90],b:[60,100,170],n:[[90,140,255],[180,210,255]],p:[200,220,255]},
 {t:[6,10,30],b:[20,40,90],n:[[70,110,255],[150,200,255]],p:[190,220,255]});
ZKD.push('地上をのし歩く重戦車。陸上ルートの見張り役。二連装砲で扇状の弾と全方位弾を撃ち、戦車を呼び出す。迫撃砲の着弾マークが出たら、すぐその場を離れよう。',
  ...Array(6).fill('（制作中）'),
  '大地を揺らして進む巨大な陸上戦艦。主砲の扇弾と全方位弾に加え、左右の副砲で狙い撃つ。後部の迫撃砲は、着弾マークの場所に弾をばらまく。迫撃砲を先に壊すと楽になる。',
  ...Array(6).fill('（制作中）'));
if(window.C0ZK)C0ZK.forEach(([m,b],i)=>{ZKD[45+i]=m;ZKD[52+i]=b});
const GCH=256,GCC=new Map();
function gRng(a){return()=>{a=a+0x6D2B79F5|0;let q=Math.imul(a^a>>>15,1|a);q=q+Math.imul(q^q>>>7,61|q)^q;return((q^q>>>14)>>>0)/4294967296}}
function gRoadX(wy){return W/2+78*Math.sin(wy/430+.6)+26*Math.sin(wy/137)}
function gChunk(th,ci){const k=Math.min(PXS,1.2),key=th+':'+ci,c=GCC.get(key);if(c&&c.k==k){GCC.delete(key);GCC.set(key,c);return c.cv}
  const cv=document.createElement('canvas');cv.width=Math.ceil((W+24)*k);cv.height=Math.ceil(GCH*k);const g=cv.getContext('2d');g.setTransform(k,0,0,k,12*k,0);
  const m=cx;cx=g;try{(GGEN[th-22]||GGEN[0])(ci,gRng(ci*7919+th*104729+13))}finally{cx=m}
  GCC.set(key,{cv,k});while(GCC.size>16)GCC.delete(GCC.keys().next().value);return cv}
function gTrees(r,n,y0,y1,avoid){for(let i=0;i<n;i++){const x0=-6+r()*(W+12),y=y0+r()*(y1-y0);if(avoid&&Math.abs(x0-avoid(y))<24)continue;const m=3+(r()*6|0);
    for(let j=0;j<m;j++){const x=x0+(r()-.5)*26,yy=y+(r()-.5)*16,rr=3.5+r()*3.5;cx.fillStyle='rgba(10,20,8,.35)';cx.beginPath();cx.arc(x+2,yy+2.5,rr,0,TAU);cx.fill();
      cx.fillStyle='#29451f';cx.beginPath();cx.arc(x,yy,rr,0,TAU);cx.fill();cx.fillStyle='#3a5c2b';cx.beginPath();cx.arc(x-rr*.3,yy-rr*.3,rr*.55,0,TAU);cx.fill()}}}
function gRoad(top,x,w1,w2,c1,c2){cx.beginPath();for(let ly=-12;ly<=GCH+12;ly+=6){const X=x(top-ly);ly>-12?cx.lineTo(X,ly):cx.moveTo(X,ly)}cx.lineCap='round';cx.lineJoin='round';cx.lineWidth=w1;cx.strokeStyle=c1;cx.stroke();cx.lineWidth=w2;cx.strokeStyle=c2;cx.stroke()}
function gHouse(x,y,w,h,c){cx.fillStyle='rgba(10,16,8,.35)';cx.fillRect(x-w/2+2,y-h/2+2,w,h);cx.fillStyle=c[0];cx.fillRect(x-w/2,y-h/2,w/2,h);cx.fillStyle=c[1];cx.fillRect(x,y-h/2,w/2,h);cx.strokeStyle='rgba(20,14,10,.6)';cx.lineWidth=1;cx.strokeRect(x-w/2,y-h/2,w,h)}
// our own launch base (only near the start of stage 1)
function gBase(ci,r){const top=(ci+1)*GCH,ly=wy=>top-wy;
  cx.save();cx.beginPath();cx.rect(-12,ly(400),W+24,GCH+400);cx.clip();
  cx.fillStyle='#4c5a40';cx.fillRect(-12,ly(400),W+24,GCH+400);
  cx.fillStyle='#62665c';cx.fillRect(-12,ly(330),W+24,330+GCH);
  const rx=W/2;cx.fillStyle='#3c3e3a';cx.fillRect(rx-26,ly(380),52,380+GCH);
  cx.fillStyle='rgba(240,240,230,.85)';cx.fillRect(rx-24,ly(380),2,380+GCH);cx.fillRect(rx+22,ly(380),2,380+GCH);
  for(let wy=-300;wy<360;wy+=34)cx.fillRect(rx-1.5,ly(wy+16),3,16);
  for(let i=0;i<6;i++){cx.fillRect(rx-21+i*7.6-(i>2?-3:0),ly(372),4,22)}
  cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText('22',rx,ly(330));
  cx.fillStyle='#55584f';cx.fillRect(rx+52,ly(360),14,360+GCH);for(const wy of[40,200,330]){cx.fillRect(rx+26,ly(wy+8),30,16)}
  cx.strokeStyle='rgba(255,209,102,.7)';cx.lineWidth=1;cx.beginPath();cx.moveTo(rx+59,ly(360));cx.lineTo(rx+59,top+20);cx.stroke();
  for(const[wy,x]of[[60,40],[150,40],[240,40]]){cx.fillStyle='rgba(10,12,8,.4)';rrp(x-30+3,ly(wy+30)+3,64,52,10);cx.fill();
    rrp(x-30,ly(wy+30),64,52,10);const g=cx.createLinearGradient(x-30,0,x+34,0);g.addColorStop(0,'#5a6060');g.addColorStop(.5,'#a2a89c');g.addColorStop(1,'#5a6060');cx.fillStyle=g;cx.fill();cx.strokeStyle='#2a2e2a';cx.lineWidth=1.5;cx.stroke();
    cx.strokeStyle='rgba(40,44,40,.45)';cx.lineWidth=1;cx.beginPath();for(let k=1;k<6;k++){cx.moveTo(x-30+k*64/6,ly(wy+30));cx.lineTo(x-30+k*64/6,ly(wy-22))}cx.stroke()}
  cx.fillStyle='#6b7064';for(const[wy,x]of[[90,W-34],[180,W-34],[270,W-40]]){rrp(x-16,ly(wy+12),32,24,3);cx.fill();cx.strokeStyle='#2a2e2a';cx.lineWidth=1;cx.stroke()}
  cx.strokeStyle='rgba(30,34,26,.7)';cx.setLineDash([4,3]);cx.lineWidth=1.2;cx.strokeRect(-4,ly(392),W+8,392+GCH+40);cx.setLineDash([]);
  cx.restore()}
function gFarm(ci,r){const top=(ci+1)*GCH;
  cx.fillStyle='#33522a';cx.fillRect(-12,0,W+24,GCH);
  const FC=['#43703a','#4d793c','#5b7e3d','#6a8240','#3e6634','#788348','#55723a','#617a44'];
  let y=0;const rows=[];while(y<GCH){const h=Math.min(GCH-y,42+(r()*60|0));rows.push(y);let x=-12-r()*30;
    while(x<W+12){const w=34+r()*84;cx.fillStyle=FC[r()*FC.length|0];cx.fillRect(x+1.5,y+1.5,w-3,h-3);
      if(r()<.7){cx.strokeStyle=r()<.5?'rgba(20,36,14,.18)':'rgba(220,230,160,.08)';cx.lineWidth=1.3;cx.beginPath();if(r()<.5)for(let xx=x+5;xx<x+w-3;xx+=5){cx.moveTo(xx,y+3);cx.lineTo(xx,y+h-3)}else for(let yy=y+5;yy<y+h-3;yy+=5){cx.moveTo(x+3,yy);cx.lineTo(x+w-3,yy)}cx.stroke()}
      x+=w}y+=h}
  if(r()<.55&&rows.length>1){const yb=rows[1+(r()*(rows.length-1)|0)],s=r()<.5?-1:1,X=gRoadX(top-yb);cx.lineWidth=9;cx.strokeStyle='#5a4e38';cx.beginPath();cx.moveTo(X,yb);cx.lineTo(s<0?-14:W+14,yb);cx.stroke();cx.lineWidth=6;cx.strokeStyle='#9c8a62';cx.stroke()}
  gTrees(r,7,14,GCH-14,wy=>gRoadX(top-wy));
  gRoad(top,gRoadX,16,11,'#5a4e38','#a08c64');
  cx.strokeStyle='rgba(70,58,36,.5)';cx.lineWidth=1;for(const o of[-2.5,2.5])gRoadPath(top,wy=>gRoadX(wy)+o);
  for(let i=0;i<3;i++)if(r()<.6){const ly=16+r()*(GCH-32),s=r()<.5?-1:1,X=gRoadX(top-ly)+s*(20+r()*16);gHouse(X,ly,13,10,r()<.5?['#8a5a46','#a8705a']:['#6e7480','#8c93a0'])}
  if(ci<=1)gBase(ci,r)}
function gRoadPath(top,x){cx.beginPath();for(let ly=-12;ly<=GCH+12;ly+=6){const X=x(top-ly);ly>-12?cx.lineTo(X,ly):cx.moveTo(X,ly)}cx.stroke()}
function gRiverX(wy){return W*.5+46*Math.sin(wy/620+1.3)+14*Math.sin(wy/230)}
function gCoastX(wy){return 125+40*Math.sin(wy/500)+16*Math.sin(wy/170)}
const RAILX=W-58,AVX=[54,168,262];
function gPathPts(top,fx){const P=[];for(let ly=-14;ly<=GCH+14;ly+=6)P.push([fx(top-ly),ly]);return P}
function gStroke(P,w,c){cx.beginPath();P.forEach(([x,y],i)=>i?cx.lineTo(x,y):cx.moveTo(x,y));cx.lineCap='round';cx.lineJoin='round';cx.lineWidth=w;cx.strokeStyle=c;cx.stroke()}
function gTree(x,y,rr,c){cx.fillStyle='rgba(6,14,6,.4)';cx.beginPath();cx.arc(x+2,y+2.5,rr,0,TAU);cx.fill();cx.fillStyle=c;cx.beginPath();cx.arc(x,y,rr,0,TAU);cx.fill();cx.fillStyle='rgba(120,170,90,.22)';cx.beginPath();cx.arc(x-rr*.3,y-rr*.35,rr*.5,0,TAU);cx.fill()}
// stage 2: 森と河
function gForest(ci,r){const top=(ci+1)*GCH,rv=wy=>gRiverX(wy);
  cx.fillStyle='#1d3619';cx.fillRect(-12,0,W+24,GCH);
  for(let i=0;i<3;i++){const x=r()*W,y=20+r()*(GCH-40);cx.fillStyle='#3e5e30';cx.beginPath();cx.ellipse(x,y,26+r()*30,14+r()*14,r()*3,0,TAU);cx.fill()}
  const P=gPathPts(top,rv);gStroke(P,176,'#4a5a34');gStroke(P,164,'#c8b888');gStroke(P,152,'#22506e');gStroke(P,110,'#285a7a');gStroke(P,56,'#2f6485');
  cx.strokeStyle='rgba(170,210,235,.16)';cx.lineWidth=1.2;for(let i=0;i<26;i++){const ly=r()*GCH,X=rv(top-ly)+(r()-.5)*130;cx.beginPath();cx.moveTo(X-8,ly);cx.lineTo(X+8,ly);cx.stroke()}
  const TC=['#264820','#2e5427','#22421d','#35602d','#2a4e24'];
  for(let i=0;i<300;i++){const x=-10+r()*(W+20),y=6+r()*(GCH-12);if(Math.abs(x-rv(top-y))<90)continue;gTree(x,y,4.5+r()*5,TC[r()*TC.length|0])}
  if(r()<.45){const y=30+r()*(GCH-60),X=rv(top-y);cx.fillStyle='#6a5a3e';cx.fillRect(-12,y-4.5,W+24,9);cx.fillStyle='#8a7a58';cx.fillRect(-12,y-3,W+24,6);
    cx.fillStyle='rgba(0,10,20,.35)';cx.fillRect(X-84,y-3,168,14);cx.fillStyle='#8a8c86';cx.fillRect(X-86,y-6,172,12);cx.strokeStyle='#3a3c38';cx.lineWidth=1.2;cx.strokeRect(X-86,y-6,172,12);cx.fillStyle='#5a5c58';for(let k=-80;k<=80;k+=10)cx.fillRect(X+k-1,y-6,2,12);cx.fillStyle='#4a4c48';for(let k=-60;k<=60;k+=40)cx.fillRect(X+k-3,y+6,6,5)}}
// stage 3: 海峡
function gCoast(ci,r){const top=(ci+1)*GCH,cs=wy=>gCoastX(wy);
  const sg=cx.createLinearGradient(0,0,W,0);sg.addColorStop(0,'#2a6a8a');sg.addColorStop(.5,'#1c4c72');sg.addColorStop(1,'#163e62');cx.fillStyle=sg;cx.fillRect(-12,0,W+24,GCH);
  cx.strokeStyle='rgba(220,240,255,.14)';cx.lineWidth=1.3;for(let i=0;i<40;i++){const x=r()*W,y=r()*GCH;cx.beginPath();cx.arc(x,y,6+r()*6,Math.PI*1.15,Math.PI*1.85);cx.stroke()}
  const P=gPathPts(top,cs);gStroke(P,30,'rgba(230,245,250,.25)');gStroke(P,18,'#d2bc84');
  cx.beginPath();cx.moveTo(-12,-14);P.forEach(([x,y])=>cx.lineTo(x-6,y));cx.lineTo(-12,GCH+14);cx.closePath();cx.fillStyle='#3e6234';cx.fill();
  cx.save();cx.clip();for(let i=0;i<9;i++){cx.fillStyle=['#4a7038','#56783e','#46683a','#5e7a44'][r()*4|0];cx.fillRect(-12+r()*110,r()*GCH,30+r()*40,20+r()*30)}
  for(let i=0;i<40;i++)gTree(-10+r()*150,r()*GCH,3.5+r()*3.5,'#2a4a22');
  cx.restore();
  if(r()<.5){const y=30+r()*(GCH-60),X=cs(top-y);cx.fillStyle='#7a7c78';cx.fillRect(X-4,y-5,46,10);cx.strokeStyle='#3a3c38';cx.lineWidth=1;cx.strokeRect(X-4,y-5,46,10);for(let k=0;k<4;k++){cx.fillStyle='#5a5c58';cx.fillRect(X+4+k*10,y+5,2,6)}}
  if(r()<.4){const x=230+r()*110,y=30+r()*(GCH-60);cx.fillStyle='rgba(230,240,250,.25)';cx.beginPath();cx.ellipse(x,y,16,9,0,0,TAU);cx.fill();cx.fillStyle='#4e5a48';cx.beginPath();cx.ellipse(x,y,11,6,.3,0,TAU);cx.fill();cx.fillStyle='#3a5a30';cx.beginPath();cx.arc(x-2,y-1,4,0,TAU);cx.fill()}}
// stage 4: 鋼鉄の街
function gCity(ci,r){const top=(ci+1)*GCH;
  cx.fillStyle='#34373c';cx.fillRect(-12,0,W+24,GCH);
  const rows=[];let y=0;while(y<GCH){const h=Math.min(GCH-y,58+(r()*40|0));rows.push([y,h]);y+=h}
  const cols=[[-12,AVX[0]-8],[AVX[0]+8,AVX[1]-8],[AVX[1]+8,AVX[2]-8],[AVX[2]+8,RAILX-14],[RAILX+14,W+12]];
  const RC=['#5a5e66','#666a72','#4e5258','#72706a','#5e5a54','#6e747c'];
  for(const[y0,h]of rows)for(const[x0,x1]of cols){if(x1-x0<10)continue;cx.fillStyle='#4a4d52';cx.fillRect(x0,y0+5,x1-x0,h-10);
    if(r()<.12){cx.fillStyle='#3e5e34';cx.fillRect(x0+3,y0+8,x1-x0-6,h-16);for(let k=0;k<6;k++)gTree(x0+6+r()*(x1-x0-12),y0+12+r()*(h-24),4+r()*3,'#2e5028');continue}
    let x=x0+3;while(x<x1-6){const w=Math.min(x1-3-x,18+r()*30);if(w<8)break;const hh=h-16,c=RC[r()*RC.length|0];cx.fillStyle='rgba(0,0,0,.35)';cx.fillRect(x+3,y0+11,w,hh);cx.fillStyle=c;cx.fillRect(x,y0+8,w-2,hh);
      cx.fillStyle='rgba(255,255,255,.12)';cx.fillRect(x,y0+8,w-2,2);cx.fillStyle='rgba(0,0,0,.18)';cx.fillRect(x,y0+8+hh-2,w-2,2);
      if(r()<.6){cx.fillStyle='#8a8e96';cx.fillRect(x+3+r()*(w-12),y0+12+r()*(hh-12),5,4)}
      if(r()<.15){cx.fillStyle='#2a2c30';cx.beginPath();cx.arc(x+w/2,y0+8+hh/2,4,0,TAU);cx.fill();cx.strokeStyle='#8a8e96';cx.lineWidth=1;cx.stroke()}
      x+=w}}
  for(const[y0]of rows.slice(1)){cx.fillStyle='#2a2c30';cx.fillRect(-12,y0-5,RAILX-14+12,10)}
  for(const ax of AVX){cx.fillStyle='#2a2c30';cx.fillRect(ax-8,0,16,GCH);cx.fillStyle='rgba(240,230,180,.55)';for(let yy=(top%24);yy<GCH;yy+=24)cx.fillRect(ax-.8,yy,1.6,11)}
  cx.fillStyle='#4e4a42';cx.fillRect(RAILX-14,0,28,GCH);cx.fillStyle='#2e2a26';for(let yy=((top%7)+7)%7;yy<GCH;yy+=7)cx.fillRect(RAILX-10,yy,20,2.4);
  cx.fillStyle='#a8aeb6';cx.fillRect(RAILX-6,0,1.6,GCH);cx.fillRect(RAILX+4.4,0,1.6,GCH)}
// stage 5: 雲海
function gCloud(ci,r){const top=(ci+1)*GCH;
  cx.fillStyle='#5a7484';cx.fillRect(-12,0,W+24,GCH);
  for(let i=0;i<14;i++){cx.fillStyle=['#647e78','#6a8070','#56707e'][r()*3|0];cx.fillRect(r()*W,r()*GCH,10+r()*22,8+r()*16)}
  for(let i=0;i<70;i++){const rr=16+r()*30,x=-20+r()*(W+40),y=rr*.6+r()*(GCH-rr*1.2),g=cx.createRadialGradient(x,y-rr*.2,rr*.1,x,y,rr);g.addColorStop(0,'rgba(226,233,245,.92)');g.addColorStop(.6,'rgba(208,218,236,.82)');g.addColorStop(1,'rgba(190,204,228,0)');cx.fillStyle=g;cx.fillRect(x-rr,y-rr,rr*2,rr*2)}
  if(r()<.7){const x=30+r()*(W-60),y=60+r()*(GCH-120),s2=24+r()*16;cx.fillStyle='rgba(60,70,90,.3)';cx.beginPath();cx.ellipse(x+12,y+14,s2*1.1,s2*.6,0,0,TAU);cx.fill();
    const pk=[[0,-s2],[s2*.5,-s2*.2],[s2,s2*.5],[s2*.2,s2*.7],[-s2*.6,s2*.6],[-s2,s2*.2],[-s2*.4,-s2*.3]].map(([a,b])=>[x+a,y+b]);
    poly(pk);cx.fillStyle='#6e727c';cx.fill();cx.save();poly(pk);cx.clip();cx.fillStyle='#4a4e58';poly([[x,y-s2],[x+s2,y+s2*.5],[x+s2*.2,y+s2*.7],[x,y]]);cx.fill();
    cx.fillStyle='#f2f6fa';poly([[x,y-s2],[x+s2*.32,y-s2*.4],[x+s2*.1,y-s2*.3],[x-s2*.08,y-s2*.45],[x-s2*.3,y-s2*.35]]);cx.fill();cx.restore();
    for(let k=0;k<6;k++){const rr=14+r()*14,xx=x+(r()-.5)*s2*2.4,yy=y+s2*.5+r()*10,g=cx.createRadialGradient(xx,yy,1,xx,yy,rr);g.addColorStop(0,'rgba(255,255,255,.9)');g.addColorStop(1,'rgba(255,255,255,0)');cx.fillStyle=g;cx.fillRect(xx-rr,yy-rr,rr*2,rr*2)}}}
// stage 6: 成層圏 (the planet far below)
function gStrato(ci,r){cx.fillStyle='#163454';cx.fillRect(-12,0,W+24,GCH);
  for(let i=0;i<5;i++){const x=r()*W,y=20+r()*(GCH-40),rr=30+r()*50,g=cx.createRadialGradient(x,y,1,x,y,rr);g.addColorStop(0,'rgba(70,100,70,.8)');g.addColorStop(1,'rgba(70,100,70,0)');cx.fillStyle=g;cx.fillRect(x-rr,y-rr,rr*2,rr*2)}
  for(let i=0;i<26;i++){const x=r()*W,y=10+r()*(GCH-20),rr=8+r()*16,g=cx.createRadialGradient(x,y,1,x,y,rr);g.addColorStop(0,'rgba(240,246,255,.55)');g.addColorStop(1,'rgba(240,246,255,0)');cx.fillStyle=g;cx.fillRect(x-rr,y-rr,rr*2,rr*2)}}
const GGEN=[gFarm,gForest,gCoast,gCity,gCloud,gStrato,gStrato];
function gProg(){return st=='play'&&!sgPend?Math.min(1,stT/3300):.35}
// stage 7: 大気圏の果て — space above, the planet's rim below
function gSpaceD(al){cx.save();cx.globalAlpha=al;const g=cx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#01020a');g.addColorStop(1,'#0a1a3c');cx.fillStyle=g;cx.fillRect(-12,-12,W+24,H+24);
  const pr=thB==28?gProg():.3;
  for(const q of stars){const tw=.6+.4*Math.sin(t*.06+q.ph);cx.fillStyle=rgb(q.c,(q.ly==2?1:q.ly?.75:.5)*tw*(.5+pr*.5));cx.fillRect(q.x,q.y,q.r,q.r)}
  const R0=900,cy=H+R0-150+pr*110,eg=cx.createRadialGradient(W*.4,cy-R0*.6,R0*.2,W/2,cy,R0);eg.addColorStop(0,'#3a7ac0');eg.addColorStop(.85,'#1c4a8a');eg.addColorStop(1,'#0c2a5a');
  cx.fillStyle=eg;cx.beginPath();cx.arc(W/2,cy,R0,0,TAU);cx.fill();
  cx.save();cx.beginPath();cx.arc(W/2,cy,R0,0,TAU);cx.clip();cx.fillStyle='rgba(245,250,255,.35)';for(let i=0;i<9;i++){const x=(i*61+GY*.05)%(W+80)-40;cx.beginPath();cx.ellipse(x,cy-R0+20+(i%3)*14,30,5,0,0,TAU);cx.fill()}cx.restore();
  for(const[w,a]of[[26,.12],[12,.3],[4,.7]]){cx.strokeStyle=`rgba(120,190,255,${a})`;cx.lineWidth=w;cx.beginPath();cx.arc(W/2,cy,R0+w*.3,Math.PI*1.1,Math.PI*1.9);cx.stroke()}
  cx.restore()}
function gTether(al){if(al<=0)return;const x=W/2;cx.save();cx.globalAlpha=al;cx.fillStyle='rgba(0,0,0,.35)';cx.fillRect(x-2,-12,9,H+24);
  const g=cx.createLinearGradient(x-4,0,x+4,0);g.addColorStop(0,'#5a6270');g.addColorStop(.5,'#c8d0dc');g.addColorStop(1,'#3a404a');cx.fillStyle=g;cx.fillRect(x-4,-12,8,H+24);
  cx.fillStyle='rgba(160,230,255,.8)';for(let y=(GY*1.0)%46-46;y<H+12;y+=46)cx.fillRect(x-1,y,2,10);
  const N=420;for(let wy=Math.floor((GY-30)/N)*N;wy<GY+H+60;wy+=N){const y=H-(wy-GY);rrp(x-22,y-6,44,12,4);cx.fillStyle='#4a525e';cx.fill();cx.lineWidth=1.5;cx.strokeStyle='#14181e';cx.stroke();
    const bl=Math.floor(t/20)%2;for(const s2 of[-1,1]){cx.fillStyle=bl?'#ff5d73':'#5a1a22';cx.beginPath();cx.arc(x+s2*17,y,2,0,TAU);cx.fill()}}
  cx.restore()}

let GCL=null;function gClouds(){if(GCL)return GCL;GCL=[0,1,2].map(i=>{const k=document.createElement('canvas');k.width=200;k.height=110;const g=k.getContext('2d'),r=gRng(i*31+7);
  for(let j=0;j<14;j++){const x=40+r()*120,y=35+r()*40,rr=16+r()*22,gr=g.createRadialGradient(x,y,0,x,y,rr);gr.addColorStop(0,'rgba(255,255,255,.55)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(x-rr,y-rr,rr*2,rr*2)}return k});return GCL}
function gDecD(){for(const d of GDEC){cx.save();cx.translate(d.x,d.y);
  if(d.k=='t'){cx.rotate(d.r);cx.fillStyle='rgba(30,24,14,.28)';cx.fillRect(-2,-8,4,3);cx.fillRect(-2,5,4,3)}
  else{const g=cx.createRadialGradient(0,0,1,0,0,d.r);g.addColorStop(0,'rgba(18,12,8,.85)');g.addColorStop(.6,'rgba(40,30,20,.55)');g.addColorStop(1,'rgba(40,30,20,0)');cx.fillStyle=g;cx.beginPath();cx.arc(0,0,d.r,0,TAU);cx.fill();
    cx.strokeStyle='rgba(20,14,10,.5)';cx.lineWidth=1.4;cx.beginPath();for(let i=0;i<5;i++){const a=d.s+i*1.3;cx.moveTo(Math.cos(a)*d.r*.4,Math.sin(a)*d.r*.4);cx.lineTo(Math.cos(a)*d.r*1.1,Math.sin(a)*d.r*1.1)}cx.stroke()}
  cx.restore()}}
function gLayer(th,al){if(al<=0)return;if(th==28)return gSpaceD(al);const c0=Math.floor(GY/GCH)-1,c1=Math.floor((GY+H+24)/GCH);cx.save();cx.globalAlpha=al;
  for(let ci=c0;ci<=c1;ci++){const sy=H-((ci+1)*GCH-GY);if(sy>H+12||sy+GCH<-12)continue;cx.drawImage(gChunk(th,ci),-12,sy,W+24,GCH+.6)}cx.restore()}
function gDraw(k){gLayer(thA,1);if(thA!=thB)gLayer(thB,k);
  const pr=gProg();
  if(thB==27||thA==27){const a=(thB==27?k:1-k)*(thA==27&&thB==27?1:1);const sg=cx.createLinearGradient(0,0,0,H);sg.addColorStop(0,`rgba(2,6,26,${.45+.35*(thB==27?pr:1)})`);sg.addColorStop(1,'rgba(10,30,80,.15)');cx.save();cx.globalAlpha=thA==thB?1:a;cx.fillStyle=sg;cx.fillRect(-12,-12,W+24,H+24);
    for(const q of stars)if(q.ly==2){cx.fillStyle=rgb(q.c,.25+.4*pr);cx.fillRect(q.x,q.y,q.r,q.r)}cx.restore()}
  if(thB==26){cx.fillStyle=`rgba(16,26,60,${.14+.1*pr})`;cx.fillRect(-12,-12,W+24,H+24)}
  const tw=(thB>=27?(thA>=27?1:k):thA>=27?1-k:0);gTether(tw);
  if(thB<26)gDecD();
  const st2=thB-22,CL=gClouds(),ca=[.22,.26,.3,.2,.34,.1,0][st2]||0;if(ca){cx.save();cx.globalAlpha=ca;for(let i=0;i<3;i++){const y=((GY*1.8+i*260)%(H+360))-180,x=[-30,W*.45,W*.1][i];cx.drawImage(CL[i],x,y,240,132)}cx.restore()}
  if(st=='play'&&thB<26){cx.fillStyle='rgba(8,14,6,.26)';cx.beginPath();cx.ellipse(ship.x+15,ship.y+26,11,7,0,0,TAU);cx.fill();
    for(const f of fo)if(!f.gd&&f.k!='b'&&f.k!='z'&&f.y>-20){cx.fillStyle='rgba(8,14,6,.18)';cx.beginPath();cx.ellipse(f.x+13,f.y+22,f.r*.8,f.r*.55,0,0,TAU);cx.fill()}}
  mortarD();
  const lg=cx.createLinearGradient(0,0,W,H);lg.addColorStop(0,'rgba(255,240,200,.06)');lg.addColorStop(1,'rgba(0,6,20,.2)');cx.fillStyle=lg;cx.fillRect(-12,-12,W+24,H+24);
  const vg=cx.createRadialGradient(W/2,H/2,H*.3,W/2,H/2,H*.75);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,4,10,.5)');cx.fillStyle=vg;cx.fillRect(-12,-12,W+24,H+24);
  if(fo.some(f=>f.k=='b')){cx.fillStyle=`rgba(140,0,40,${.1+.04*Math.sin(t/10)})`;cx.fillRect(-12,-12,W+24,H+24)}}
{const bg0=bg;bg=function(){const A=thA>=22,B=thB>=22;if(!A&&!B)return bg0();const k=tk*tk*(3-2*tk);if(A&&B)return gDraw(k);
  const a=thA,b=thB,u=k<.5?a:b;thA=thB=u;try{u>=22?gDraw(1):bg0()}finally{thA=a;thB=b}}}
// ---------- bullets of the ground forces: 10 鉄甲弾 / 11 ミサイル / 12 機銃弾 / 13 砲弾の破片 ----------
function ebTrail(q,n,st){const tr=q.tr||(q.tr=[]);if((q.tk=(q.tk||0)+1)%st==0){tr.unshift([q.x,q.y]);if(tr.length>n)tr.length=n}return tr}
function ebX(q,bp){const a=Math.atan2(q.vy,q.vx);
  if(q.ty==11){const tr=ebTrail(q,9,3),n=tr.length;cx.save();cx.translate(-Math.cos(a)*12,-Math.sin(a)*12);for(let k=n-1;k>=1;k--){const u=k/9,r=2.4+k*.7,c=k<2?'255,210,160':'232,234,238';cx.fillStyle=`rgba(${c},${.55*(1-u)})`;cx.beginPath();cx.arc(tr[k][0]+Math.sin(k*1.9+q.x)*.9*k*.3,tr[k][1]+Math.cos(k*1.3+q.y)*.5,r,0,TAU);cx.fill()}cx.restore()}
  if(q.ty==13){const tr=ebTrail(q,4,2);cx.fillStyle='rgba(255,170,80,.5)';for(let i=0;i<tr.length;i++){cx.beginPath();cx.arc(tr[i][0],tr[i][1],1.6-i*.3,0,TAU);cx.fill()}}
  cx.save();cx.translate(q.x,q.y);cx.rotate(a);cx.lineJoin='round';
  if(q.ty==10){glow(0,0,14*bp,[255,120,50],.55);
    const tg=cx.createLinearGradient(-20,0,-4,0);tg.addColorStop(0,'rgba(255,110,40,0)');tg.addColorStop(1,'rgba(255,150,70,.75)');cx.fillStyle=tg;poly([[-4,-3.2],[-20,0],[-4,3.2]]);cx.fill();
    cx.beginPath();cx.moveTo(-6,-3.9);cx.lineTo(1,-3.9);cx.quadraticCurveTo(7,-3.6,9.5,0);cx.quadraticCurveTo(7,3.6,1,3.9);cx.lineTo(-6,3.9);cx.closePath();cx.lineWidth=3;cx.strokeStyle='#120a06';cx.stroke();
    const g=cx.createLinearGradient(0,-3.9,0,3.9);g.addColorStop(0,'#eef1f5');g.addColorStop(.45,'#8a929e');g.addColorStop(1,'#30343c');cx.fillStyle=g;cx.fill();
    cx.save();cx.clip();const ng=cx.createLinearGradient(4,0,9.5,0);ng.addColorStop(0,'rgba(255,110,40,0)');ng.addColorStop(.35,'#ff7a2e');ng.addColorStop(.75,'#ffc070');ng.addColorStop(1,'#fff6e0');cx.fillStyle=ng;cx.fillRect(3,-4,7,8);
    cx.fillStyle='#c8963c';cx.fillRect(-4.6,-4,1.5,8);cx.fillStyle='rgba(255,255,255,.55)';cx.fillRect(-6,-2.9,13,1.1);cx.restore();
    cx.fillStyle='#fff';cx.beginPath();cx.arc(6,-.6,1,0,TAU);cx.fill()}
  else if(q.ty==11){cx.scale(1.12,1.12);const fl=(7+R()*6)*(q.vm?.7+.6*Math.min(1,Math.hypot(q.vx,q.vy)/q.vm):1);glow(-16,0,11*bp,[255,140,50],.85);
    cx.fillStyle='rgba(255,120,40,.9)';poly([[-14,-2],[-15-fl,0],[-14,2]]);cx.fill();cx.fillStyle='#fff0b8';poly([[-14,-1.1],[-15-fl*.55,0],[-14,1.1]]);cx.fill();
    cx.fillStyle='#2a2e34';cx.fillRect(-15,-1.7,2,3.4);
    // tail fins (尾翼): big swept red fins at the rear
    for(const s2 of[-1,1]){poly([[-6,s2*2],[-12,s2*8.5],[-15,s2*8.5],[-13.5,s2*2]]);cx.fillStyle='#e23a48';cx.fill();cx.lineWidth=1.4;cx.strokeStyle='#120608';cx.stroke();
      cx.strokeStyle='rgba(255,255,255,.55)';cx.lineWidth=.8;cx.beginPath();cx.moveTo(-7,s2*2.4);cx.lineTo(-12,s2*7.6);cx.stroke();
      // small canards up front
      poly([[5,s2*2],[3.6,s2*4.6],[2,s2*4.6],[2.2,s2*2]]);cx.fillStyle='#e23a48';cx.fill();cx.lineWidth=1.1;cx.strokeStyle='#120608';cx.stroke()}
    // slender body
    cx.beginPath();cx.moveTo(-14,-2.4);cx.lineTo(7,-2.4);cx.quadraticCurveTo(12,-2.1,14.5,0);cx.quadraticCurveTo(12,2.1,7,2.4);cx.lineTo(-14,2.4);cx.closePath();
    cx.lineWidth=2.6;cx.strokeStyle='#0e1014';cx.stroke();const g=cx.createLinearGradient(0,-2.4,0,2.4);g.addColorStop(0,'#ffffff');g.addColorStop(.55,'#d2d6dc');g.addColorStop(1,'#6e747e');cx.fillStyle=g;cx.fill();
    cx.save();cx.clip();
    cx.fillStyle='#262a30';cx.fillRect(7,-3,8,6);const rg=cx.createLinearGradient(7,0,14.5,0);rg.addColorStop(0,'rgba(255,255,255,0)');rg.addColorStop(1,'rgba(255,255,255,.25)');cx.fillStyle=rg;cx.fillRect(7,-3,8,6);
    cx.fillStyle='#ffd166';cx.fillRect(4.6,-3,1.6,6);
    cx.fillStyle='#262a30';cx.fillRect(-8.5,-3,1.2,6);cx.fillRect(-11,-3,1.2,6);
    cx.fillStyle='rgba(255,255,255,.7)';cx.fillRect(-14,-1.9,21,.8);cx.restore();
    // center fin seen from above
    cx.strokeStyle='#e23a48';cx.lineWidth=1.6;cx.beginPath();cx.moveTo(-6.5,0);cx.lineTo(-14.5,0);cx.stroke();
    const bl=Math.floor(t/4)%2;glow(12.5,0,6,[255,80,90],bl?.95:.4);cx.fillStyle=bl?'#ff5d6c':'#7a1a22';cx.beginPath();cx.arc(12.3,0,1.2,0,TAU);cx.fill()}
  else if(q.ty==12){glow(0,0,11*bp,[255,160,60],.7);const tg=cx.createLinearGradient(-22,0,4,0);tg.addColorStop(0,'rgba(255,120,40,0)');tg.addColorStop(1,'rgba(255,170,70,.85)');cx.strokeStyle=tg;cx.lineCap='round';cx.lineWidth=5.5;cx.beginPath();cx.moveTo(-22,0);cx.lineTo(3,0);cx.stroke();
    cx.strokeStyle='#1a0a04';cx.lineWidth=5;cx.beginPath();cx.moveTo(-5,0);cx.lineTo(6,0);cx.stroke();cx.strokeStyle='#ffd27a';cx.lineWidth=3.4;cx.stroke();cx.strokeStyle='#fffdf0';cx.lineWidth=1.6;cx.beginPath();cx.moveTo(-3,0);cx.lineTo(6,0);cx.stroke()}
  else{cx.rotate(t/5+q.x*.1);glow(0,0,12*bp,[255,130,50],.6);poly([[6,0],[2,3.8],[-3,4.6],[-2,1],[-5.5,-2.5],[0,-4.6],[3,-2]]);cx.lineWidth=3;cx.strokeStyle='#160a04';cx.stroke();
    const g=cx.createLinearGradient(-5,-4,5,4);g.addColorStop(0,'#ffe2a8');g.addColorStop(.5,'#e8783a');g.addColorStop(1,'#6a2c10');cx.fillStyle=g;cx.fill();cx.fillStyle='#fff8e0';cx.beginPath();cx.arc(.5,-.3,1.5,0,TAU);cx.fill()}
  cx.restore()}
{const e0=ebD;ebD=function(q,bp){if(q.ty>=10)return ebX(q,bp);return e0(q,bp)}}
