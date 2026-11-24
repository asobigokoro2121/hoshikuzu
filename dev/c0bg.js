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
const GGEN=[gFarm];
let GCL=null;function gClouds(){if(GCL)return GCL;GCL=[0,1,2].map(i=>{const k=document.createElement('canvas');k.width=200;k.height=110;const g=k.getContext('2d'),r=gRng(i*31+7);
  for(let j=0;j<14;j++){const x=40+r()*120,y=35+r()*40,rr=16+r()*22,gr=g.createRadialGradient(x,y,0,x,y,rr);gr.addColorStop(0,'rgba(255,255,255,.55)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(x-rr,y-rr,rr*2,rr*2)}return k});return GCL}
function gDecD(){for(const d of GDEC){cx.save();cx.translate(d.x,d.y);
  if(d.k=='t'){cx.rotate(d.r);cx.fillStyle='rgba(30,24,14,.28)';cx.fillRect(-2,-8,4,3);cx.fillRect(-2,5,4,3)}
  else{const g=cx.createRadialGradient(0,0,1,0,0,d.r);g.addColorStop(0,'rgba(18,12,8,.85)');g.addColorStop(.6,'rgba(40,30,20,.55)');g.addColorStop(1,'rgba(40,30,20,0)');cx.fillStyle=g;cx.beginPath();cx.arc(0,0,d.r,0,TAU);cx.fill();
    cx.strokeStyle='rgba(20,14,10,.5)';cx.lineWidth=1.4;cx.beginPath();for(let i=0;i<5;i++){const a=d.s+i*1.3;cx.moveTo(Math.cos(a)*d.r*.4,Math.sin(a)*d.r*.4);cx.lineTo(Math.cos(a)*d.r*1.1,Math.sin(a)*d.r*1.1)}cx.stroke()}
  cx.restore()}}
function gLayer(th,al){if(al<=0)return;const c0=Math.floor(GY/GCH)-1,c1=Math.floor((GY+H+24)/GCH);cx.save();cx.globalAlpha=al;
  for(let ci=c0;ci<=c1;ci++){const sy=H-((ci+1)*GCH-GY);if(sy>H+12||sy+GCH<-12)continue;cx.drawImage(gChunk(th,ci),-12,sy,W+24,GCH+.6)}cx.restore()}
function gDraw(k){gLayer(thA,1);if(thA!=thB)gLayer(thB,k);
  gDecD();
  const st2=thB-22,CL=gClouds();cx.save();cx.globalAlpha=.22+st2*.05;for(let i=0;i<3;i++){const y=((GY*1.8+i*260)%(H+360))-180,x=[-30,W*.45,W*.1][i];cx.drawImage(CL[i],x,y,240,132)}cx.restore();
  if(st=='play'){cx.fillStyle='rgba(8,14,6,.26)';cx.beginPath();cx.ellipse(ship.x+15,ship.y+26,11,7,0,0,TAU);cx.fill();
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
  if(q.ty==11){const tr=ebTrail(q,7,3);for(let i=tr.length-1;i>=0;i--){const k=1-i/7,r=2.5+i*1.1;cx.fillStyle=`rgba(${200+i*6},${200+i*6},${206+i*5},${.38*k})`;cx.beginPath();cx.arc(tr[i][0]+Math.sin(i*1.7+q.x)*1.2,tr[i][1],r,0,TAU);cx.fill()}}
  if(q.ty==13){const tr=ebTrail(q,4,2);cx.fillStyle='rgba(255,170,80,.5)';for(let i=0;i<tr.length;i++){cx.beginPath();cx.arc(tr[i][0],tr[i][1],1.6-i*.3,0,TAU);cx.fill()}}
  cx.save();cx.translate(q.x,q.y);cx.rotate(a);cx.lineJoin='round';
  if(q.ty==10){glow(0,0,14*bp,[255,120,50],.55);
    const tg=cx.createLinearGradient(-20,0,-4,0);tg.addColorStop(0,'rgba(255,110,40,0)');tg.addColorStop(1,'rgba(255,150,70,.75)');cx.fillStyle=tg;poly([[-4,-3.2],[-20,0],[-4,3.2]]);cx.fill();
    cx.beginPath();cx.moveTo(-6,-3.9);cx.lineTo(1,-3.9);cx.quadraticCurveTo(7,-3.6,9.5,0);cx.quadraticCurveTo(7,3.6,1,3.9);cx.lineTo(-6,3.9);cx.closePath();cx.lineWidth=3;cx.strokeStyle='#120a06';cx.stroke();
    const g=cx.createLinearGradient(0,-3.9,0,3.9);g.addColorStop(0,'#eef1f5');g.addColorStop(.45,'#8a929e');g.addColorStop(1,'#30343c');cx.fillStyle=g;cx.fill();
    cx.save();cx.clip();const ng=cx.createLinearGradient(4,0,9.5,0);ng.addColorStop(0,'rgba(255,110,40,0)');ng.addColorStop(.35,'#ff7a2e');ng.addColorStop(.75,'#ffc070');ng.addColorStop(1,'#fff6e0');cx.fillStyle=ng;cx.fillRect(3,-4,7,8);
    cx.fillStyle='#c8963c';cx.fillRect(-4.6,-4,1.5,8);cx.fillStyle='rgba(255,255,255,.55)';cx.fillRect(-6,-2.9,13,1.1);cx.restore();
    cx.fillStyle='#fff';cx.beginPath();cx.arc(6,-.6,1,0,TAU);cx.fill()}
  else if(q.ty==11){const fl=6+R()*5;glow(-10,0,13*bp,[255,150,60],.75);
    cx.fillStyle='#ff8a2e';poly([[-8,-2.6],[-8-fl,0],[-8,2.6]]);cx.fill();cx.fillStyle='#fff3c0';poly([[-8,-1.4],[-8-fl*.6,0],[-8,1.4]]);cx.fill();
    for(const s of[-1,1]){poly([[-8,s*2.3],[-11,s*6],[-5,s*2.3]]);cx.fillStyle='#7a828e';cx.fill();cx.lineWidth=1.2;cx.strokeStyle='#14161a';cx.stroke()}
    rrp(-8,-2.9,15,5.8,2.9);cx.lineWidth=3;cx.strokeStyle='#14161a';cx.stroke();const g=cx.createLinearGradient(0,-2.9,0,2.9);g.addColorStop(0,'#ffffff');g.addColorStop(.6,'#d6dae0');g.addColorStop(1,'#8a909a');cx.fillStyle=g;cx.fill();
    cx.fillStyle='#e8404e';cx.fillRect(-3.5,-2.9,2,5.8);poly([[6,-2.7],[11,0],[6,2.7]]);cx.fill();cx.lineWidth=1.3;cx.strokeStyle='#14161a';cx.stroke();
    if(Math.floor(t/5)%2){cx.fillStyle='#fff';cx.beginPath();cx.arc(8,0,1.2,0,TAU);cx.fill()}}
  else if(q.ty==12){glow(0,0,11*bp,[255,160,60],.7);const tg=cx.createLinearGradient(-22,0,4,0);tg.addColorStop(0,'rgba(255,120,40,0)');tg.addColorStop(1,'rgba(255,170,70,.85)');cx.strokeStyle=tg;cx.lineCap='round';cx.lineWidth=5.5;cx.beginPath();cx.moveTo(-22,0);cx.lineTo(3,0);cx.stroke();
    cx.strokeStyle='#1a0a04';cx.lineWidth=5;cx.beginPath();cx.moveTo(-5,0);cx.lineTo(6,0);cx.stroke();cx.strokeStyle='#ffd27a';cx.lineWidth=3.4;cx.stroke();cx.strokeStyle='#fffdf0';cx.lineWidth=1.6;cx.beginPath();cx.moveTo(-3,0);cx.lineTo(6,0);cx.stroke()}
  else{cx.rotate(t/5+q.x*.1);glow(0,0,12*bp,[255,130,50],.6);poly([[6,0],[2,3.8],[-3,4.6],[-2,1],[-5.5,-2.5],[0,-4.6],[3,-2]]);cx.lineWidth=3;cx.strokeStyle='#160a04';cx.stroke();
    const g=cx.createLinearGradient(-5,-4,5,4);g.addColorStop(0,'#ffe2a8');g.addColorStop(.5,'#e8783a');g.addColorStop(1,'#6a2c10');cx.fillStyle=g;cx.fill();cx.fillStyle='#fff8e0';cx.beginPath();cx.arc(.5,-.3,1.5,0,TAU);cx.fill()}
  cx.restore()}
{const e0=ebD;ebD=function(q,bp){if(q.ty>=10)return ebX(q,bp);return e0(q,bp)}}
