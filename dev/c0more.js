
// ===== 「宇宙へ」 stages 2-7: enemies, mid-bosses, bosses, stage data =====
function gWy(y){return GY+H-y}
// F 対空機関砲 (fixed)  V 河川砲艇 (moving)  G 駆逐艦 (moving)  L 沿岸砲台 (fixed)  R 屋上ミサイル (fixed)  S 装甲列車 (moving)
// T 山頂砲台 (fixed)  Y 飛行船 (air)  W 軌道砲台 (fixed)  X 昇降ポッド (moving)  Z 衛星砲台 (fixed)
function landX(x){return thB==24?cl(x,18,gCoastX(gWy(-20))-26):x}
function seaX(x){return thB==24?cl(x,gCoastX(gWy(-30))+40,W-26):x}
function railCars(n){let o;for(let i=0;i<n;i++)o=add({k:'S',x:RAILX,y:-26-i*30,r:12,mh:8,pts:120,gd:1,nc:1,car:i==0?0:i==1?1:2,nx:90+i*30});return o}
Object.assign(EMK,{
 F:(x,y)=>add({k:'F',x:landX(cl(x,24,W-24)),y:Math.min(y,-16),r:12,mh:7,pts:120,gd:1,nc:1,ba:Math.PI/2,nx:70+R()*50,bs:0,bt2:0}),
 V:(x,y)=>add({k:'V',x:seaX(x),y:Math.min(y,-20),r:11,mh:6,pts:110,gd:1,nc:1,v:.35+R()*.3,off:(R()-.5)*100,hd:Math.PI/2,ta:Math.PI/2,nx:80+R()*60}),
 G:(x,y)=>add({k:'G',x:seaX(cl(x,40,W-40)),y:Math.min(y,-50),r:20,mh:22,pts:400,gd:1,nc:1,tA:Math.PI/2,tB:Math.PI/2,nx:90,n:0}),
 L:(x,y)=>add({k:'L',x:landX(cl(x,24,W-24)),y:Math.min(y,-22),r:16,mh:16,pts:260,gd:1,nc:1,ba:Math.PI/2,nx:110+R()*40}),
 R:(x,y)=>{const xx=cl(x,30,RAILX-30),c=AVX.find(a=>Math.abs(a-xx)<20);return add({k:'R',x:c!=null?c+(xx<c?-24:24):xx,y:Math.min(y,-18),r:13,mh:10,pts:180,gd:1,nc:1,ba:Math.PI/2,nx:110+R()*40})},
 S:(x,y)=>railCars(st=='zk'?1:3),
 T:(x,y)=>add({k:'T',x:cl(x,30,W-30),y:Math.min(y,-26),r:14,mh:10,pts:160,gd:1,nc:1,ba:Math.PI/2,nx:90+R()*50,sd:R()*9}),
 Y:(x,y)=>add({k:'Y',x:cl(x,40,W-40),y:Math.min(y,-44),r:20,mh:26,pts:450,vy:.4,nx:120,n:0}),
 W:(x,y)=>add({k:'W',x:cl(x,28,W-28),y:Math.min(y,-20),r:14,mh:12,pts:200,gd:1,nc:1,ba:Math.PI/2,nx:90+R()*40,n:0}),
 X:(x,y)=>add({k:'X',x:W/2+(R()<.5?-1:1)*0,y:Math.min(y,-24),r:13,mh:10,pts:170,gd:1,nc:1,v:.5,nx:100,sp2:R()*TAU}),
 Z:(x,y)=>add({k:'Z',x:cl(x,30,W-30),y:Math.min(y,-20),r:13,mh:9,pts:180,gd:1,nc:1,rt:R()*TAU,nx:100+R()*40})});
function mvF(f,dt){f.y+=GD;f.ba=gTurn(f.ba,aim(f.x,f.y),.05*dt);f.mf=(f.mf||0)-dt;
  if(gOn(f)&&f.bs<=0&&f.fc>=f.nx&&gAimOk(f.ba,aim(f.x,f.y))){f.fc=0;f.nx=170;f.bs=3;f.bt2=0}
  if(f.bs>0){f.bt2-=dt;if(f.bt2<=0){f.bs--;f.bt2=7;f.mf=4;fireA(f.x+Math.cos(f.ba)*14,f.y+Math.sin(f.ba)*14,f.ba,2.7)}}}
function mvV(f,dt){const oy=f.y,ox=f.x;f.y+=GD+f.v*dt;if(thB==23)f.x=gRiverX(gWy(f.y))+f.off;else f.x+=Math.sin(f.a/50)*.3*dt;
  f.hd=Math.atan2(f.v*dt,f.x-ox||1e-6);f.ta=gTurn(f.ta,aim(f.x,f.y),.05*dt);f.wk=(f.wk||0)+dt;
  if(gOn(f)&&f.fc>=f.nx&&gAimOk(f.ta,aim(f.x,f.y))){f.fc=0;f.nx=150;f.mf=6;fireA(f.x,f.y,f.ta,2.6)}f.mf=(f.mf||0)-dt}
function mvG(f,dt){f.y+=GD+.22*dt;const PA={x:f.x,y:f.y+24},PB={x:f.x,y:f.y-20};f.tA=gTurn(f.tA,aim(PA.x,PA.y),.04*dt);f.tB=gTurn(f.tB,aim(PB.x,PB.y),.04*dt);f.mf=(f.mf||0)-dt;
  if(gOn(f)&&f.fc>=f.nx){f.fc=0;f.n++;f.nx=f.n%3?70:120;f.mf=6;const P=f.n%2?PA:PB,a=f.n%2?f.tA:f.tB;if(f.n%3==0){for(const o of[-.35,.35])msl(f.x,f.y-34,aim(f.x,f.y-34)+o,1.8,o>0?1:0)}else for(const o of[-.1,.1])fireS(10,P.x+Math.cos(a)*14,P.y+Math.sin(a)*14,a+o,2.5)}}
function mvL(f,dt){f.y+=GD;f.ba=gTurn(f.ba,aim(f.x,f.y),.03*dt);f.mf=(f.mf||0)-dt;f.wn=gOn(f)&&f.fc>=f.nx-30;
  if(gOn(f)&&f.fc>=f.nx&&gAimOk(f.ba,aim(f.x,f.y))){f.fc=0;f.nx=200;f.mf=10;f.n=(f.n||0)+1;const X=f.x+Math.cos(f.ba)*22,Y=f.y+Math.sin(f.ba)*22;if(f.n%2==0)msl(X,Y,f.ba,1.35,2);else for(let i=-2;i<=2;i++)fireS(10,X,Y,f.ba+i*.17,2.1)}}
function mvR(f,dt){f.y+=GD;f.ba=gTurn(f.ba,aim(f.x,f.y),.03*dt);f.mf=(f.mf||0)-dt;f.wn=gOn(f)&&f.fc>=f.nx-34;
  if(gOn(f)&&f.fc>=f.nx){f.fc=0;f.nx=200;f.mf=12;f.n=(f.n||0)+1;const X=f.x+Math.cos(f.ba)*10,Y=f.y+Math.sin(f.ba)*10;if(f.n%3==0)msl(X,Y,f.ba,1.35,2);else for(const o of[-.16,.16])msl(X,Y,f.ba+o,1.9,f.n%3==2?1:0)}}
function mvS(f,dt){f.y+=GD+1.1*dt;f.x=RAILX;f.mf=(f.mf||0)-dt;f.ta=gTurn(f.ta??Math.PI/2,aim(f.x,f.y),.05*dt);
  if(f.car==1&&gOn(f)&&f.fc>=f.nx){f.fc=0;f.nx=110;f.mf=6;fireS(10,f.x,f.y,f.ta,2.6)}
  if(f.car==2&&gOn(f)&&f.fc>=f.nx){f.fc=0;f.nx=160;for(const o of[-.3,.3])msl(f.x,f.y,aim(f.x,f.y)+o,1.8,1)}}
function mvT(f,dt){f.y+=GD;f.ba=gTurn(f.ba,aim(f.x,f.y),.04*dt);f.mf=(f.mf||0)-dt;
  if(gOn(f)&&f.fc>=f.nx&&gAimOk(f.ba,aim(f.x,f.y))){f.fc=0;f.nx=195;f.mf=7;f.n=(f.n||0)+1;const X=f.x+Math.cos(f.ba)*15,Y=f.y+Math.sin(f.ba)*15;if(f.n%2==0)msl(X,Y,f.ba,1.8,1);else for(const o of[-.2,0,.2])fireS(10,X,Y,f.ba+o,2.4)}}
function mvY(f,dt){f.y+=f.vy*dt;f.x+=Math.sin(f.a/90)*.25*dt;f.pr=(f.pr||0)+dt;
  if(f.y>20&&f.y<H*.65&&f.fc>=f.nx){f.fc=0;f.n++;f.nx=200;const m=f.n%3;if(m==1)for(let i=0;i<10;i++)fireS(12,f.x,f.y+10,i/10*TAU+f.n*.3,1.9);else if(m==2)for(const o of[-.6,-.2,.2,.6])msl(f.x,f.y+20,aim(f.x,f.y+20)+o,1.8,Math.abs(o)<.3?1:0);else mkEn('U',f.x,f.y)}}
function mvW(f,dt){f.y+=GD;f.ba=gTurn(f.ba,aim(f.x,f.y),.05*dt);f.mf=(f.mf||0)-dt;f.rt=(f.rt||0)+dt;
  if(gOn(f)&&f.fc>=f.nx&&gAimOk(f.ba,aim(f.x,f.y))){f.fc=0;f.n++;f.nx=185;f.mf=6;const m=f.n%3;if(m==1)for(const o of[-.1,.1])fireS(10,f.x,f.y,f.ba+o,2.6);else if(m==2)for(const o of[-.3,.3])msl(f.x,f.y,f.ba+o,1.8,1);else for(let i=0;i<8;i++)fireS(12,f.x,f.y,i/8*TAU+f.rt*.02,1.9)}}
function mvX(f,dt){f.y+=GD+f.v*dt;f.x=W/2;f.sp2+=.05*dt;
  if(gOn(f)&&f.fc>=f.nx){f.fc=0;f.nx=185;for(let i=0;i<6;i++)fireS(12,f.x,f.y,i/6*TAU+f.sp2,2)}}
function mvZ(f,dt){f.y+=GD;f.rt+=.012*dt;
  if(gOn(f)&&f.fc>=f.nx){f.fc=0;f.nx=150;for(let i=0;i<4;i++)fireS(12,f.x,f.y,f.rt+i*Math.PI/2,2)}}
Object.assign(EMV,{F:mvF,V:mvV,G:mvG,L:mvL,R:mvR,S:mvS,T:mvT,Y:mvY,W:mvW,X:mvX,Z:mvZ});
function gBarrel(len,wd,ofs,w){const g=cx.createLinearGradient(0,-wd/2,0,wd/2);g.addColorStop(0,'#8a929c');g.addColorStop(1,'#22262c');cx.fillStyle=w?'#fff':g;cx.fillRect(ofs,-wd/2,len,wd);cx.lineWidth=1.2;cx.strokeStyle='#0a0c10';cx.strokeRect(ofs,-wd/2,len,wd)}
function gDome(r,c1,c2,w){const g=cx.createRadialGradient(-r*.3,-r*.35,1,0,0,r);g.addColorStop(0,c1);g.addColorStop(1,c2);cx.fillStyle=w?'#fff':g;cx.beginPath();cx.arc(0,0,r,0,TAU);cx.fill();gOut(1.8)}
function gEye(x,y,r){cx.fillStyle='#ff5d73';cx.beginPath();cx.arc(x,y,r,0,TAU);cx.fill();glow(x,y,r*3,[255,90,110],.5)}
function gMuz(len,f){if(f.mf>0){glow(len+3,0,10,[255,200,120],.9);cx.fillStyle='#fff3c4';poly([[len,-3],[len+8,0],[len,3]]);cx.fill()}}
function dF(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);
  for(let i=0;i<10;i++){const a=i/10*TAU;cx.fillStyle=gC(w,i%2?'#8a7a56':'#9a8a64');cx.beginPath();cx.ellipse(Math.cos(a)*13,Math.sin(a)*13,5,3.4,a+Math.PI/2,0,TAU);cx.fill();cx.lineWidth=.8;cx.strokeStyle='#3a3020';cx.stroke()}
  cx.rotate(f.ba);gMuz(19,f);for(const s2 of[-1,1]){cx.save();cx.translate(0,s2*3.6);gBarrel(14,3,4,w);cx.restore()}
  rrp(-7,-7,12,14,3);cx.fillStyle=gC(w,'#5a6270');cx.fill();gOut(1.6);gEye(-3,0,1.8);cx.restore()}
function dV(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);cx.save();cx.rotate(f.hd);
  cx.strokeStyle='rgba(235,245,255,.55)';cx.lineWidth=1.6;cx.beginPath();cx.moveTo(-10,-5);cx.lineTo(-24-Math.sin(f.wk/6)*2,-11);cx.moveTo(-10,5);cx.lineTo(-24-Math.sin(f.wk/6)*2,11);cx.stroke();
  poly([[14,0],[6,-6],[-12,-6],[-13,0],[-12,6],[6,6]]);cx.fillStyle=gC(w,'#4e5a52');cx.fill();gOut(1.8);cx.fillStyle=gC(w,'#7a8a80');cx.fillRect(-9,-3.6,10,7.2);cx.fillStyle=w?'#fff':'#9fd8ff';cx.fillRect(-2,-2.6,3,5.2);cx.restore();
  cx.rotate(f.ta);gMuz(13,f);gBarrel(11,3,2,w);gDome(4.5,'#c0c8d0','#3a414c',w);cx.restore()}
function dG(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);
  cx.fillStyle='rgba(235,245,255,.35)';poly([[-9,-44],[9,-44],[18,-70],[-18,-70]]);cx.fill();
  poly([[0,48],[12,26],[13,-30],[8,-44],[-8,-44],[-13,-30],[-12,26]]);const g=cx.createLinearGradient(-13,0,13,0);g.addColorStop(0,'#3a4450');g.addColorStop(.5,'#7c8896');g.addColorStop(1,'#3a4450');cx.fillStyle=w?'#fff':g;cx.fill();gOut(2.2);
  cx.strokeStyle='rgba(16,20,26,.5)';cx.lineWidth=1;cx.beginPath();cx.moveTo(0,40);cx.lineTo(0,-40);cx.stroke();
  rrp(-7,-8,14,18,3);cx.fillStyle=gC(w,'#9aa6b2');cx.fill();gOut(1.4);cx.fillStyle=w?'#fff':'#7fe0ff';cx.fillRect(-5,6,10,2.5);
  cx.fillStyle=gC(w,'#2a2e36');cx.fillRect(-3,-18,6,8);if(!w)flame(0,-20,2.5,6+Math.sin(t/3)*2,[110,110,110],-1);
  for(const[y,a]of[[24,f.tA],[-20,f.tB]]){cx.save();cx.translate(0,y);cx.rotate(a);gMuz(16,f);for(const s2 of[-1,1]){cx.save();cx.translate(0,s2*2.6);gBarrel(13,2.6,3,w);cx.restore()}gDome(6,'#c6ced8','#3e4550',w);cx.restore()}
  gEye(0,-2,1.8);cx.restore()}
function dL(f){const w=f.fl>0,bl=f.wn&&Math.floor(t/5)%2;cx.save();cx.translate(f.x,f.y);
  poly(hp(0,0,19,6,Math.PI/6));cx.fillStyle=gC(w,'#8a8676');cx.fill();gOut(2.2);cx.fillStyle='rgba(20,22,16,.25)';for(let i=0;i<6;i++){const a=i/6*TAU;cx.beginPath();cx.arc(Math.cos(a)*14,Math.sin(a)*14,1.8,0,TAU);cx.fill()}
  cx.rotate(f.ba);gMuz(32,f);gBarrel(26,6,6,w);cx.fillStyle=gC(w,'#1a1c20');cx.fillRect(28,-4,5,8);
  rrp(-11,-10,20,20,5);cx.fillStyle=gC(w,'#5a6250');cx.fill();gOut(2);cx.fillStyle=bl?'#fff':'#ff5d73';cx.beginPath();cx.arc(-5,0,2.4,0,TAU);cx.fill();if(f.wn)glow(-5,0,14,[255,90,110],bl?.9:.4);cx.restore()}
function dR(f){const w=f.fl>0,bl=f.wn&&Math.floor(t/5)%2;cx.save();cx.translate(f.x,f.y);
  cx.fillStyle='rgba(0,0,0,.35)';cx.fillRect(-14,-12,30,30);cx.fillStyle=gC(w,'#6a6e76');cx.fillRect(-16,-15,30,30);cx.strokeStyle='#2a2c30';cx.lineWidth=1.4;cx.strokeRect(-16,-15,30,30);
  cx.rotate(f.ba);rrp(-9,-8,18,16,3);cx.fillStyle=gC(w,'#4a525e');cx.fill();gOut(1.6);
  for(const s2 of[-1,1])for(const s3 of[-1,1]){const lit=f.mf<=0;cx.fillStyle=lit?(w?'#fff':'#f2f4f6'):'#1a1c20';cx.fillRect(-4,s2*3.2+s3*1.6-1.2,12,2.4);if(lit){cx.fillStyle='#e23a48';cx.fillRect(8,s2*3.2+s3*1.6-1.2,2.4,2.4)}}
  cx.fillStyle=bl?'#fff':'#ff5d73';cx.beginPath();cx.arc(-6,0,2,0,TAU);cx.fill();if(f.wn)glow(-6,0,12,[255,90,110],bl?.9:.4);cx.restore()}
function dS(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);
  rrp(-10,-14,20,28,3);const g=cx.createLinearGradient(-10,0,10,0);g.addColorStop(0,'#2e3238');g.addColorStop(.5,f.car==0?'#8a4a3a':'#5e6a52');g.addColorStop(1,'#2e3238');cx.fillStyle=w?'#fff':g;cx.fill();gOut(2);
  cx.strokeStyle='rgba(0,0,0,.4)';cx.lineWidth=1;cx.beginPath();cx.moveTo(-10,-6);cx.lineTo(10,-6);cx.moveTo(-10,6);cx.lineTo(10,6);cx.stroke();
  if(f.car==0){cx.fillStyle=w?'#fff':'#9fd8ff';cx.fillRect(-6,9,12,3);cx.fillStyle=gC(w,'#1a1c20');cx.fillRect(-3,-12,6,5);if(!w)flame(0,-14,3,7+Math.sin(t/3)*2,[120,120,120],-1)}
  else if(f.car==1){cx.rotate(f.ta);gMuz(15,f);gBarrel(12,3.4,3,w);gDome(6,'#c6ced8','#3e4550',w);gEye(-2,0,1.5)}
  else{for(const s2 of[-1,1]){cx.fillStyle=gC(w,'#3a414c');cx.beginPath();cx.arc(s2*4,0,3.4,0,TAU);cx.fill();gOut(1.2)}gEye(0,-8,1.4)}
  cx.restore()}
function dT(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);
  const P=[[0,-24],[14,-10],[24,10],[12,20],[-10,22],[-24,8],[-14,-12]];cx.fillStyle='rgba(60,70,90,.3)';cx.beginPath();cx.ellipse(10,16,26,12,0,0,TAU);cx.fill();
  poly(P);cx.fillStyle=gC(w,'#7a7e88');cx.fill();gOut(2);cx.save();poly(P);cx.clip();cx.fillStyle=w?'#fff':'#545862';poly([[0,-24],[24,10],[12,20],[2,0]]);cx.fill();cx.fillStyle=w?'#fff':'#f2f6fa';poly([[0,-24],[8,-14],[3,-11],[-2,-15],[-8,-12]]);cx.fill();cx.restore();
  for(let k=0;k<4;k++){const g=cx.createRadialGradient((k-1.5)*14,20,1,(k-1.5)*14,20,14);g.addColorStop(0,'rgba(255,255,255,.85)');g.addColorStop(1,'rgba(255,255,255,0)');cx.fillStyle=g;cx.fillRect((k-1.5)*14-14,6,28,28)}
  cx.translate(0,2);hx(0,0,10,8,Math.PI/8);cx.fillStyle=gC(w,'#5a6270');cx.fill();gOut(1.6);
  cx.rotate(f.ba);gMuz(19,f);for(const s2 of[-1,1]){cx.save();cx.translate(0,s2*3.4);gBarrel(14,3,4,w);cx.restore()}gDome(6.5,'#c6ced8','#3e4550',w);gEye(-2.5,0,1.6);cx.restore()}
function dY(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);
  for(const s2 of[-1,1]){poly([[s2*6,-38],[s2*18,-50],[s2*16,-34],[s2*8,-28]]);cx.fillStyle=gC(w,'#a83a3a');cx.fill();gOut(1.4)}
  cx.beginPath();cx.ellipse(0,0,17,42,0,0,TAU);const g=cx.createLinearGradient(-17,0,17,0);g.addColorStop(0,'#5a5e68');g.addColorStop(.45,'#c8ccd4');g.addColorStop(1,'#4a4e58');cx.fillStyle=w?'#fff':g;cx.fill();gOut(2.2);
  cx.strokeStyle='rgba(30,34,40,.45)';cx.lineWidth=1;cx.beginPath();for(const y of[-24,-8,8,24]){cx.moveTo(-15,y);cx.quadraticCurveTo(0,y+4,15,y)}cx.stroke();
  cx.fillStyle=gC(w,'#d8424a');cx.fillRect(-17,-3,34,6);
  rrp(-6,8,12,16,3);cx.fillStyle=gC(w,'#3a414c');cx.fill();gOut(1.4);cx.fillStyle=w?'#fff':'#7fe0ff';cx.fillRect(-4,18,8,3);
  for(const s2 of[-1,1]){cx.save();cx.translate(s2*20,4);cx.fillStyle=gC(w,'#3a414c');cx.fillRect(-3,-5,6,10);cx.rotate(f.pr*.8);cx.strokeStyle='rgba(20,20,24,.75)';cx.lineWidth=1.6;cx.beginPath();cx.moveTo(-7,0);cx.lineTo(7,0);cx.stroke();cx.restore()}
  gEye(0,34,2.2);cx.restore()}
function dW(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);
  cx.strokeStyle='#3a404a';cx.lineWidth=3;cx.beginPath();for(const a of[0,2,4])cx.moveTo(0,0),cx.lineTo(Math.cos(a+f.rt*.01)*20,Math.sin(a+f.rt*.01)*20);cx.stroke();
  hx(0,0,15,6,0);cx.fillStyle=gC(w,'#6a7280');cx.fill();gOut(2);cx.strokeStyle='rgba(160,230,255,.6)';cx.lineWidth=1;hx(0,0,11,6,0);cx.stroke();
  cx.rotate(f.ba);gMuz(18,f);for(const s2 of[-1,1]){cx.save();cx.translate(0,s2*3.2);gBarrel(13,3,4,w);cx.restore()}gDome(7,'#d0d8e2','#3e4654',w);gEye(-3,0,1.8);cx.restore()}
function dX(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);
  for(const s2 of[-1,1]){cx.fillStyle=gC(w,'#3a404a');cx.fillRect(s2*10-(s2<0?6:0),-8,6,16);gOut(1.2);if(!w)glow(s2*13,-10,6,[160,230,255],.6)}
  rrp(-10,-15,20,30,7);const g=cx.createLinearGradient(-10,0,10,0);g.addColorStop(0,'#3a404a');g.addColorStop(.5,'#b8c2ce');g.addColorStop(1,'#3a404a');cx.fillStyle=w?'#fff':g;cx.fill();gOut(2);
  cx.save();cx.rotate(f.sp2);for(let i=0;i<6;i++){cx.rotate(TAU/6);cx.fillStyle='#ff8a5c';cx.fillRect(5,-1,3,2)}cx.restore();gEye(0,0,3);cx.restore()}
function dZ(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);cx.rotate(f.rt);
  for(const s2 of[-1,1]){cx.fillStyle=gC(w,'#3a404a');cx.fillRect(s2*8-(s2<0?6:0),-1.5,6,3);rrp(s2*14-(s2<0?14:0),-7,14,14,1);const g=cx.createLinearGradient(0,-7,0,7);g.addColorStop(0,'#3a6ab8');g.addColorStop(1,'#1a2e5a');cx.fillStyle=w?'#fff':g;cx.fill();gOut(1.4);
    cx.strokeStyle='rgba(160,200,255,.5)';cx.lineWidth=.8;cx.beginPath();for(let k=1;k<4;k++){const x=s2*14-(s2<0?14:0)+k*3.5;cx.moveTo(x,-7);cx.lineTo(x,7)}cx.moveTo(s2*14-(s2<0?14:0),0);cx.lineTo(s2*14+(s2<0?0:14),0);cx.stroke()}
  hx(0,0,8,8,0);cx.fillStyle=gC(w,'#c0c8d2');cx.fill();gOut(1.8);gEye(0,0,2.4);cx.restore()}
Object.assign(EDR,{F:dF,V:dV,G:dG,L:dL,R:dR,S:dS,T:dT,Y:dY,W:dW,X:dX,Z:dZ});
Object.assign(EKL,{F:f=>gDec(f.x,f.y,14),L:f=>gDec(f.x,f.y,20),R:f=>gDec(f.x,f.y,16),S:f=>gDec(f.x,f.y,14)});
Object.assign(EBG,{F:3,V:3,G:6,L:5,R:4,S:3,T:4,Y:6,W:4,X:4,Z:3});Object.assign(EDB,{G:.5,Y:.5,S:.25});
Object.assign(ECAP,{F:4,V:4,G:2,L:2,R:4,S:6,T:4,Y:2,W:4,X:3,Z:4});
Object.assign(KC,{F:'#ffb070',V:'#9fd8ff',G:'#c8d0ff',L:'#ff8a5c',R:'#ff8a5c',S:'#ffd166',T:'#dfe8ff',Y:'#ffb3b3',W:'#bfe8ff',X:'#ff9f7a',Z:'#8fb8ff'});
Object.assign(FSM,{F:12,V:10,G:10,L:10,R:11,S:10,T:10,Y:12,W:10,X:12,Z:12});
Object.assign(WV,{fk:xs=>xs.forEach(x=>mkEn('F',x)),bt:n=>{for(let i=0;i<n;i++){const o=mkEn('V',W/2);o.y=-24-i*44}},dd:xs=>xs.forEach(x=>mkEn('G',x)),cb:xs=>xs.forEach(x=>mkEn('L',x)),
  rm:xs=>xs.forEach(x=>mkEn('R',x)),rt:()=>railCars(3),pk:xs=>xs.forEach(x=>mkEn('T',x)),as:xs=>xs.forEach(x=>mkEn('Y',x)),ow:xs=>xs.forEach(x=>mkEn('W',x)),cl:n=>{for(let i=0;i<n;i++){const o=mkEn('X',W/2);o.y=-24-i*60}},st:xs=>xs.forEach(x=>mkEn('Z',x))});

// ---------- mid-bosses 23..28 ----------
function mHover(f,c1,c2,w,pc,pu,aimT,M){cx.beginPath();cx.ellipse(0,0,34,44,0,0,TAU);cx.fillStyle=w?'#fff':'#16181c';cx.fill();gOut(2);
  cx.strokeStyle='rgba(90,96,104,.8)';cx.lineWidth=1.2;for(let i=0;i<16;i++){const a=i/16*TAU;cx.beginPath();cx.moveTo(Math.cos(a)*28,Math.sin(a)*37);cx.lineTo(Math.cos(a)*34,Math.sin(a)*44);cx.stroke()}
  rrp(-24,-34,48,64,12);const g=cx.createLinearGradient(-24,0,24,0);g.addColorStop(0,c2);g.addColorStop(.5,c1);g.addColorStop(1,c2);cx.fillStyle=w?'#fff':g;cx.fill();gOut(2.2);
  M(()=>{cx.save();cx.translate(13,-30);cx.beginPath();cx.arc(0,0,10,0,TAU);cx.fillStyle=w?'#fff':'#2a2e36';cx.fill();gOut(1.6);cx.rotate(f.a*.5);cx.strokeStyle='#8a929c';cx.lineWidth=2.4;cx.beginPath();for(let i=0;i<3;i++){const a=i/3*TAU;cx.moveTo(0,0);cx.lineTo(Math.cos(a)*9,Math.sin(a)*9)}cx.stroke();cx.restore()});
  cx.fillStyle=w?'#fff':'#7fe0ff';cx.fillRect(-12,18,24,4);
  const a=aimT(0,4);cx.save();cx.translate(0,4);cx.rotate(a);if(f.fc<10)glow(34,0,14,[255,200,120],.8);for(const s2 of[-1,1]){cx.save();cx.translate(0,s2*6);gBarrel(24,5,8,w);cx.restore()}gDome(14,'#cfd6dc',c2,w);coreD(-4,0,3.4,pc,pu);cx.restore()}
function mShark(f,c1,c2,w,pc,pu,aimT,M){cx.fillStyle='rgba(235,245,255,.35)';poly([[-16,-40],[16,-40],[30,-74],[-30,-74]]);cx.fill();
  const P=[[0,52],[20,24],[22,-38],[12,-46],[-12,-46],[-22,-38],[-20,24]];poly(P);const g=cx.createLinearGradient(-22,0,22,0);g.addColorStop(0,c2);g.addColorStop(.5,c1);g.addColorStop(1,c2);cx.fillStyle=w?'#fff':g;cx.fill();gOut(2.4);
  cx.strokeStyle='rgba(16,20,26,.4)';cx.lineWidth=1;cx.beginPath();cx.moveTo(0,46);cx.lineTo(0,-44);cx.stroke();
  M(()=>{for(let i=0;i<3;i++){rrp(6,-30+i*12,10,8,2);cx.fillStyle=w?'#fff':'#2a2e36';cx.fill();gOut(1.2);cx.fillStyle=f.fc>f.nx-30&&Math.floor(t/4)%2?'#ffd166':'#e23a48';cx.beginPath();cx.arc(11,-26+i*12,2,0,TAU);cx.fill()}});
  rrp(-9,0,18,16,4);cx.fillStyle=w?'#fff':'#a8b2bc';cx.fill();gOut(1.6);cx.fillStyle=w?'#fff':'#7fe0ff';cx.fillRect(-7,12,14,3);
  const a=aimT(0,30);cx.save();cx.translate(0,30);cx.rotate(a);gBarrel(20,5,6,w);gDome(9,'#cfd6dc',c2,w);cx.restore();coreD(0,-38,4,pc,pu)}
function mHammer(f,c1,c2,w,pc,pu,aimT,M){const sp=f.a*1.2;
  for(const s2 of[-1,1]){rrp(s2*30-(s2<0?12:0),-40,12,80,4);cx.fillStyle=w?'#fff':'#1d2024';cx.fill();gOut(2);cx.strokeStyle='rgba(130,134,118,.75)';cx.lineWidth=1.4;cx.beginPath();for(let y=-40+(sp%6+6)%6;y<40;y+=6){cx.moveTo(s2*30-(s2<0?12:0),y);cx.lineTo(s2*30+(s2<0?0:12),y)}cx.stroke()}
  rrp(-26,-38,52,76,8);const g=cx.createLinearGradient(-26,0,26,0);g.addColorStop(0,c2);g.addColorStop(.5,c1);g.addColorStop(1,c2);cx.fillStyle=w?'#fff':g;cx.fill();gOut(2.4);
  for(let i=0;i<4;i++){cx.fillStyle=w?'#fff':'#c8a050';cx.fillRect(-20+i*11,-34,7,10);gOut(1)}
  const a=aimT(0,-4);cx.save();cx.translate(0,-4);cx.rotate(a);if(f.fc<10)glow(66,0,18,[255,200,120],.9);gBarrel(52,9,10,w);cx.fillStyle=w?'#fff':'#1a1c20';cx.fillRect(58,-7,10,14);gOut(1.4);
  rrp(-16,-15,32,30,6);cx.fillStyle=w?'#fff':'#8a9478';cx.fill();gOut(2);cx.restore();coreD(0,24,4,pc,pu)}
function mWhale(f,c1,c2,w,pc,pu,aimT,M){M(()=>{poly([[8,-46],[26,-66],[24,-44],[12,-36]]);cx.fillStyle=w?'#fff':'#a83a3a';cx.fill();gOut(1.6);
    cx.save();cx.translate(34,0);cx.fillStyle=w?'#fff':'#3a414c';cx.fillRect(-5,-8,10,16);gOut(1.2);cx.rotate(f.a*.7);cx.strokeStyle='rgba(20,20,24,.8)';cx.lineWidth=2.4;cx.beginPath();cx.moveTo(-11,0);cx.lineTo(11,0);cx.stroke();cx.restore()});
  cx.beginPath();cx.ellipse(0,0,28,54,0,0,TAU);const g=cx.createLinearGradient(-28,0,28,0);g.addColorStop(0,c2);g.addColorStop(.45,c1);g.addColorStop(1,c2);cx.fillStyle=w?'#fff':g;cx.fill();gOut(2.4);
  cx.strokeStyle='rgba(30,34,40,.4)';cx.lineWidth=1;cx.beginPath();for(const y of[-36,-18,0,18,36]){cx.moveTo(-26,y);cx.quadraticCurveTo(0,y+5,26,y)}cx.stroke();
  cx.fillStyle=w?'#fff':'#d8424a';cx.fillRect(-28,-4,56,8);
  rrp(-10,14,20,30,5);cx.fillStyle=w?'#fff':'#3a414c';cx.fill();gOut(1.6);cx.fillStyle=w?'#fff':'#7fe0ff';cx.fillRect(-8,36,16,4);
  for(let i=0;i<3;i++){cx.fillStyle=f.fc>f.nx-30&&Math.floor(t/4)%2?'#ffd166':'#1a1c20';cx.fillRect(-7+i*5,20,3,10)}coreD(0,-26,5,pc,pu)}
function mCargo(f,c1,c2,w,pc,pu,aimT,M){M(()=>{for(const y of[-30,30]){cx.fillStyle=w?'#fff':'#2a2e36';cx.fillRect(26,y-6,10,12);gOut(1.2);if(!w)glow(36,y,10,[160,230,255],.7)}});
  rrp(-30,-38,60,76,6);const g=cx.createLinearGradient(-30,0,30,0);g.addColorStop(0,c2);g.addColorStop(.5,c1);g.addColorStop(1,c2);cx.fillStyle=w?'#fff':g;cx.fill();gOut(2.4);
  cx.strokeStyle='rgba(14,18,24,.5)';cx.lineWidth=1.2;cx.beginPath();for(const y of[-20,0,20]){cx.moveTo(-30,y);cx.lineTo(30,y)}cx.stroke();
  cx.fillStyle=w?'#fff':'#ffd166';for(let i=0;i<5;i++)cx.fillRect(-28+i*12,-38,6,3);
  cx.save();cx.rotate(f.a/40);for(let i=0;i<4;i++){cx.rotate(TAU/4);cx.fillStyle=w?'#fff':'#4a525e';cx.fillRect(10,-3,10,6)}cx.restore();
  gDome(12,'#d8e0ea','#3e4654',w);coreD(0,0,5,pc,pu)}
function mSat(f,c1,c2,w,pc,pu,aimT,M){cx.save();cx.rotate(Math.sin(f.a/80)*.2);
  M(()=>{cx.fillStyle=w?'#fff':'#3a404a';cx.fillRect(16,-2,10,4);rrp(26,-16,46,32,2);const g=cx.createLinearGradient(0,-16,0,16);g.addColorStop(0,'#3a6ab8');g.addColorStop(1,'#14244a');cx.fillStyle=w?'#fff':g;cx.fill();gOut(1.8);
    cx.strokeStyle='rgba(160,200,255,.5)';cx.lineWidth=.8;cx.beginPath();for(let k=1;k<6;k++){cx.moveTo(26+k*7.6,-16);cx.lineTo(26+k*7.6,16)}cx.moveTo(26,0);cx.lineTo(72,0);cx.stroke()});
  hx(0,0,22,8,Math.PI/8);const g=cx.createLinearGradient(-22,0,22,0);g.addColorStop(0,c2);g.addColorStop(.5,c1);g.addColorStop(1,c2);cx.fillStyle=w?'#fff':g;cx.fill();gOut(2.4);
  cx.beginPath();cx.ellipse(0,-30,14,6,0,0,TAU);cx.fillStyle=w?'#fff':'#c8d0da';cx.fill();gOut(1.4);cx.strokeStyle='#3a404a';cx.lineWidth=2;cx.beginPath();cx.moveTo(0,-30);cx.lineTo(0,-18);cx.stroke();
  cx.restore();coreD(0,6,7,pc,pu)}

// ---------- bosses 23..28 ----------
function bTur(f,q){return{x:f.x+q.ox,y:f.y+q.oy}}
function pdGms2(f,q,P){const bl=q.t<30&&Math.floor(t/4)%2;rrp(-q.r,-q.r*.8,q.r*2,q.r*1.6,3);cx.fillStyle=q.fl>0?'#fff':'#4a525e';cx.fill();gOut(2);
  for(let i=0;i<4;i++){cx.fillStyle=bl?'#ffd166':'#f2f4f6';cx.fillRect(-q.r+3+i*(q.r*2-6)/4,-q.r*.5,3,q.r);cx.fillStyle='#e23a48';cx.fillRect(-q.r+3+i*(q.r*2-6)/4,q.r*.4,3,2.4)}if(bl)glow(0,0,q.r*1.6,[255,160,80],.7)}
Object.assign(PDRAW,{gms2:pdGms2});
Object.assign(PFIRE,{gms2:(f,q,P,a)=>{q.n2=(q.n2||0)+1;if(q.n2%3==0)msl(P.x,P.y,a,1.35,2);else for(const o of[-.3,.3])msl(P.x,P.y,a+o,1.9,o>0?1:0)}});
function legs(f,n,L,sp,w){for(const s2 of[-1,1])for(let i=0;i<n;i++){const ph=f.a/sp+i*2.1+(s2>0?Math.PI:0),y0=-30+i*30,kx=s2*(L*.6),ky=y0+Math.sin(ph)*6,fx=s2*L,fy=y0+Math.sin(ph)*14-8;
  cx.lineCap='round';cx.strokeStyle='#0e1014';cx.lineWidth=9;cx.beginPath();cx.moveTo(s2*16,y0*.6);cx.lineTo(kx,ky-10);cx.lineTo(fx,fy);cx.stroke();cx.strokeStyle=w?'#fff':'#5a6270';cx.lineWidth=5.5;cx.stroke();
  cx.fillStyle='#2a2e36';cx.beginPath();cx.arc(kx,ky-10,4.5,0,TAU);cx.fill();cx.fillStyle='#ff5d73';cx.beginPath();cx.arc(fx,fy,2.4,0,TAU);cx.fill()}}
function arachne(f,p,pc,c,pu,M){legs(f,3,72,26,0);
  cx.beginPath();cx.ellipse(0,-44,26,30,0,0,TAU);const ga=cx.createLinearGradient(-26,0,26,0);ga.addColorStop(0,'#2a2e34');ga.addColorStop(.5,'#6a7480');ga.addColorStop(1,'#2a2e34');cx.fillStyle=ga;cx.fill();gOut(2.6);
  cx.strokeStyle='rgba(255,93,115,.6)';cx.lineWidth=2;cx.beginPath();cx.moveTo(-12,-60);cx.lineTo(0,-44);cx.lineTo(12,-60);cx.moveTo(0,-44);cx.lineTo(0,-22);cx.stroke();
  cx.beginPath();cx.ellipse(0,6,34,38,0,0,TAU);const g=cx.createRadialGradient(-10,-6,4,0,6,40);g.addColorStop(0,'#9aa4b0');g.addColorStop(1,'#2e333a');cx.fillStyle=g;cx.fill();gOut(3);
  cx.strokeStyle='rgba(14,16,20,.45)';cx.lineWidth=1.2;cx.beginPath();cx.ellipse(0,6,22,26,0,0,TAU);cx.stroke();
  cx.beginPath();cx.ellipse(0,44,18,14,0,0,TAU);cx.fillStyle='#4a525e';cx.fill();gOut(2.4);
  for(const[x,y,r]of[[-9,44,3.4],[9,44,3.4],[-4,50,2.4],[4,50,2.4],[-14,38,2],[14,38,2]]){cx.fillStyle='#ff3a50';cx.beginPath();cx.arc(x,y,r,0,TAU);cx.fill();glow(x,y,r*3,[255,60,80],.5)}
  M(()=>{cx.fillStyle='#1a1c20';poly([[6,54],[10,66],[3,58]]);cx.fill()});coreD(0,6,7,pc,pu)}
function arcAI(b,dt){b.nc=1;b.gd=1;if(bEnter(b,dt,124,.85))return;b.x=W/2+Math.sin(b.a/120)*70;b.t-=dt;
  for(const q of live(b,'gtr')){const P=partPos(b,q);q.ba=gTurn(q.ba??Math.PI/2,aim(P.x,P.y),.05*dt)}
  if(b.t>0)return;b.n++;const p=b.hp/b.mh,x=b.x,y=b.y+50,a=aim(x,y);
  if(p>.66){b.t=90;if(b.n%2)for(let i=-2;i<=2;i++)fireS(10,x,y,a+i*.2,2.8);else for(const s2 of[-1,1])for(let i=0;i<6;i++)fireS(13,b.x+s2*70,b.y-8,i/6*TAU+b.n*.3,1.8)}
  else if(p>.33){b.t=76;const m=b.n%3;if(m==0)for(let i=-3;i<=3;i++)fireS(10,x,y,a+i*.15,2.9);else if(m==1){for(const s2 of[-1,1])for(let i=0;i<6;i++)fireS(13,b.x+s2*70,b.y+20,i/6*TAU+b.n*.2,1.9)}else{for(let i=0;i<9;i++)fireS(12,cl(b.x-96+i*24,10,W-10),b.y+30,Math.PI/2,1.7,{ws:1,wf:.06,wt:i*9})}}
  else{b.t=21;fireS(10,x,y,a+Math.sin(b.n*.4)*.6,3);if(b.n%8==0)for(const s2 of[-1,1])for(let i=0;i<7;i++)fireS(13,b.x+s2*70,b.y,i/7*TAU,2)}}
function poseidon(f,p,pc,c,pu,M){cx.fillStyle='rgba(235,245,255,.3)';poly([[-24,-90],[24,-90],[46,-140],[-46,-140]]);cx.fill();
  const P=[[0,96],[30,58],[36,-60],[26,-92],[-26,-92],[-36,-60],[-30,58]];poly(P);const g=cx.createLinearGradient(-36,0,36,0);g.addColorStop(0,'#323c48');g.addColorStop(.5,'#7a8896');g.addColorStop(1,'#323c48');cx.fillStyle=g;cx.fill();gOut(3);
  cx.save();poly(P);cx.clip();cx.strokeStyle='rgba(14,18,24,.4)';cx.lineWidth=1.2;cx.beginPath();for(const y of[-70,-40,40,70]){cx.moveTo(-36,y);cx.lineTo(36,y)}cx.moveTo(0,-92);cx.lineTo(0,96);cx.stroke();cx.fillStyle='rgba(255,255,255,.07)';cx.fillRect(-36,-92,72,8);cx.restore();
  rrp(-16,-30,32,44,6);const gb=cx.createLinearGradient(0,-30,0,14);gb.addColorStop(0,'#b8c4d0');gb.addColorStop(1,'#4a5664');cx.fillStyle=gb;cx.fill();gOut(2.2);cx.fillStyle='#7fe0ff';cx.fillRect(-12,8,24,3);
  for(const s2 of[-1,1]){cx.fillStyle='#2a2e36';rrp(s2*8-4,-44,8,12,2);cx.fill();gOut(1.2);flame(s2*8,-46,3,8+Math.sin(t/3+s2)*3,[110,110,110],-1)}
  const a=f.ta??Math.PI/2;cx.save();cx.translate(0,50);cx.rotate(a);if(f.mf>0)glow(48,0,20,[255,200,120],.9);for(const s2 of[-1,1,0]){cx.save();cx.translate(0,s2*7);gBarrel(36,5.5,12,0);cx.restore()}gDome(18,'#d0d8e0','#3a4450',0);cx.restore();
  coreD(0,-8,7,pc,pu)}
function posAI(b,dt){b.nc=1;b.gd=1;if(bEnter(b,dt,110,.8))return;b.x=W/2+Math.sin(b.a/170)*40;b.ta=gTurn(b.ta??Math.PI/2,aim(b.x,b.y+50),.035*dt);b.mf=(b.mf||0)-dt;
  for(const q of live(b,'gtr')){const P=partPos(b,q);q.ba=gTurn(q.ba??Math.PI/2,aim(P.x,P.y),.05*dt)}
  b.t-=dt;if(b.t>0)return;b.n++;const p=b.hp/b.mh,x=b.x+Math.cos(b.ta)*48,y=b.y+50+Math.sin(b.ta)*48,a=b.ta;b.mf=8;
  if(p>.66){b.t=80;const m=b.n%3;if(m==1)for(let i=-3;i<=3;i++)fireS(10,x,y,a+i*.16,2.7);else if(m==2)for(let i=0;i<14;i++)fireS(10,b.x,b.y,i/14*TAU+b.n*.2,2);else for(const s2 of[-1,1])for(let k=0;k<2;k++)msl(b.x+s2*30,b.y-20+k*30,Math.PI/2+s2*(.8-k*.3),1.8,k)}
  else if(p>.33){b.t=66;const m=b.n%3;if(m==0)for(let i=-3;i<=3;i++)fireS(10,x,y,a+i*.15,2.9);else if(m==1){for(const s2 of[-1,1])for(let i=0;i<5;i++)fireS(10,b.x+s2*36,b.y+i*24-40,Math.PI/2+s2*(.9-i*.12),2.2)}else{mortar(ship.x,ship.y,80,7);msl(b.x,b.y+60,a,1.35,2);b.t=50}}
  else{b.t=18;fireS(10,x,y,a+Math.sin(b.n*.5)*.5,3);if(b.n%7==0)for(let i=0;i<12;i++)fireS(10,b.x,b.y,i/12*TAU+b.n*.1,2.1);if(b.n%11==0)mortar(ship.x,ship.y,80,8)}}
function gigantes(f,p,pc,c,pu,M){const ph=Math.sin(f.a/22);
  for(const s2 of[-1,1]){const fy=s2*ph*14;rrp(s2*26-12,-6+fy,24,40,6);cx.fillStyle='#3a414c';cx.fill();gOut(2.4);rrp(s2*26-14,28+fy,28,16,5);cx.fillStyle='#22262c';cx.fill();gOut(2)}
  const sw=Math.sin(f.a/40)*.25;for(const s2 of[-1,1]){cx.save();cx.translate(s2*56,-16);cx.rotate(s2*sw);rrp(-11,-6,22,56,8);const ga=cx.createLinearGradient(-11,0,11,0);ga.addColorStop(0,'#3a4450');ga.addColorStop(.5,'#8a96a4');ga.addColorStop(1,'#3a4450');cx.fillStyle=ga;cx.fill();gOut(2.4);
    rrp(-13,40,26,20,6);cx.fillStyle='#2a2e36';cx.fill();gOut(2);for(let i=-1;i<=1;i++){cx.fillStyle='#14161a';cx.beginPath();cx.arc(i*7,54,3,0,TAU);cx.fill()}cx.restore()}
  const P=[[-44,-40],[44,-40],[50,-14],[36,26],[-36,26],[-50,-14]];poly(P);const g=cx.createLinearGradient(-50,0,50,0);g.addColorStop(0,'#3a4450');g.addColorStop(.5,'#9aa6b4');g.addColorStop(1,'#3a4450');cx.fillStyle=g;cx.fill();gOut(3);
  cx.fillStyle='#d8424a';poly([[-30,-36],[30,-36],[24,-28],[-24,-28]]);cx.fill();cx.fillStyle='rgba(14,18,24,.4)';cx.fillRect(-2,-36,4,60);
  for(const s2 of[-1,1]){cx.fillStyle='#2a2e36';rrp(s2*20-6,-58,12,18,3);cx.fill();gOut(1.4);if(Math.floor(t/5)%2)glow(s2*20,-56,8,[255,160,80],.6)}
  rrp(-13,-4,26,24,6);const gh=cx.createLinearGradient(0,-4,0,20);gh.addColorStop(0,'#c8d0da');gh.addColorStop(1,'#4a5462');cx.fillStyle=gh;cx.fill();gOut(2.2);
  cx.fillStyle='#ff3a50';cx.fillRect(-9,10,18,4);glow(0,12,14,[255,60,80],.6);coreD(0,-16,7,pc,pu)}
function gigAI(b,dt){b.nc=1;b.gd=1;if(bEnter(b,dt,124,.8))return;b.x=W/2+Math.sin(b.a/110)*64;b.t-=dt;
  for(const q of live(b,'gtr')){const P=partPos(b,q);q.ba=gTurn(q.ba??Math.PI/2,aim(P.x,P.y),.05*dt)}
  if(b.t>0)return;b.n++;const p=b.hp/b.mh,a=aim(b.x,b.y+20);
  if(p>.66){b.t=76;if(b.n%2){for(const s2 of[-1,1])for(let i=0;i<4;i++)fireS(10,b.x+s2*56,b.y+42,Math.PI/2+s2*(i-1.5)*.18,2.6)}else for(const o of[-.4,-.13,.13,.4])msl(b.x,b.y-50,a+o,1.9,Math.abs(o)<.2?1:0)}
  else if(p>.33){b.t=60;const m=b.n%3;if(m==0)for(let i=0;i<16;i++)fireS(10,b.x,b.y,i/16*TAU+b.n*.2,2.1);else if(m==1){for(const o of[-.45,-.15,.15,.45])msl(b.x,b.y-50,a+o,1.9,1);msl(b.x,b.y-50,a,1.35,2)}else{mortar(ship.x,ship.y,76,7);mortar(cl(ship.x+(ship.x<W/2?100:-100),20,W-20),ship.y-30,90,7)}}
  else{b.t=14;const s2=b.n%2?1:-1;fireS(10,b.x+s2*56,b.y+42,a+Math.sin(b.n*.3)*.5,3);if(b.n%9==0)for(const o of[-.4,0,.4])msl(b.x,b.y-50,a+o,1.9,o?0:1)}}
function olympus(f,p,pc,c,pu,M){const P=[[-90,30],[-70,-30],[-40,-64],[0,-80],[44,-62],[80,-24],[92,30],[50,62],[-46,64]];
  cx.fillStyle='rgba(60,70,90,.35)';cx.beginPath();cx.ellipse(14,40,104,44,0,0,TAU);cx.fill();poly(P);cx.fillStyle='#6e727c';cx.fill();gOut(3);
  cx.save();poly(P);cx.clip();cx.fillStyle='#4e525c';poly([[0,-80],[92,30],[50,62],[10,0]]);cx.fill();cx.fillStyle='#f0f4f8';poly([[-40,-64],[0,-80],[44,-62],[20,-50],[0,-58],[-22,-48]]);cx.fill();cx.restore();
  for(let k=0;k<8;k++){const x=(k-3.5)*26,y=58+Math.sin(k*1.7)*6,gr=cx.createRadialGradient(x,y,1,x,y,26);gr.addColorStop(0,'rgba(255,255,255,.9)');gr.addColorStop(1,'rgba(255,255,255,0)');cx.fillStyle=gr;cx.fillRect(x-26,y-26,52,52)}
  poly(hp(0,0,46,8,Math.PI/8));const g=cx.createLinearGradient(-46,0,46,0);g.addColorStop(0,'#4a525e');g.addColorStop(.5,'#a2acb8');g.addColorStop(1,'#4a525e');cx.fillStyle=g;cx.fill();gOut(3);
  cx.strokeStyle='rgba(14,18,24,.45)';cx.lineWidth=1.2;poly(hp(0,0,34,8,Math.PI/8));cx.stroke();
  for(let i=0;i<8;i++){const a=i/8*TAU+Math.PI/8;cx.fillStyle='#2a2e36';cx.fillRect(Math.cos(a)*42-3,Math.sin(a)*42-3,6,6)}
  const a=f.ta??Math.PI/2;cx.save();cx.rotate(a);if(f.mf>0)glow(58,0,20,[255,200,120],.9);for(const s2 of[-1,1]){cx.save();cx.translate(0,s2*7);gBarrel(44,7,12,0);cx.restore()}gDome(22,'#d8e0ea','#3a4450',0);cx.restore();coreD(0,0,7,pc,pu)}
function olyAI(b,dt){b.nc=1;b.gd=1;if(bEnter(b,dt,130,.7))return;b.x+=(W/2-b.x)*.05*dt;b.ta=gTurn(b.ta??Math.PI/2,aim(b.x,b.y),.03*dt);b.mf=(b.mf||0)-dt;
  for(const q of live(b,'gtr')){const P=partPos(b,q);q.ba=gTurn(q.ba??Math.PI/2,aim(P.x,P.y),.05*dt)}
  b.t-=dt;if(b.t>0)return;b.n++;const p=b.hp/b.mh,x=b.x+Math.cos(b.ta)*56,y=b.y+Math.sin(b.ta)*56,a=b.ta;b.mf=8;
  if(p>.66){b.t=94;const m=b.n%3;if(m==0)for(let i=-3;i<=3;i++)fireS(10,x,y,a+i*.17,2.7);else if(m==1){for(const s2 of[-1,1])for(const o of[-.2,.2])msl(b.x+s2*40,b.y-40,Math.PI/2+s2*.7+o,1.8,o>0?1:0)}else{mortar(ship.x,ship.y,80,8);b.t=60}}
  else if(p>.33){b.t=80;const m=b.n%3;if(m==0)for(let i=-3;i<=3;i++)fireS(10,x,y,a+i*.16,2.8);else if(m==1){for(let i=0;i<15;i++)fireS(12,b.x,b.y,i/15*TAU+b.n*.13,2)}else{mortar(ship.x,ship.y,76,8);mortar(cl(ship.x+(ship.x<W/2?95:-95),20,W-20),ship.y,90,8)}}
  else{b.t=18;fireS(12,b.x,b.y,b.n*.37,2.2);fireS(12,b.x,b.y,b.n*.37+Math.PI,2.2);if(b.n%10==0)for(let i=-2;i<=2;i++)fireS(10,x,y,a+i*.2,2.9);if(b.n%16==0)mortar(ship.x,ship.y,80,8);if(b.n%13==6)for(const s2 of[-1,1])msl(b.x+s2*40,b.y-40,Math.PI/2+s2*.6,1.8,1)}}
function babel(f,p,pc,c,pu,M){const x=0;cx.fillStyle='#8a929c';cx.fillRect(-4,-140,8,280);
  for(const y of[-52,52]){rrp(-60,y-8,120,16,6);cx.fillStyle='#3a414c';cx.fill();gOut(2.4);for(let i=-2;i<=2;i++){cx.fillStyle=Math.floor(t/10+i)%2?'#ffd166':'#5a4a22';cx.fillRect(i*22-3,y-3,6,6)}}
  poly(hp(0,0,50,8,Math.PI/8));const g=cx.createLinearGradient(-50,0,50,0);g.addColorStop(0,'#3a4450');g.addColorStop(.5,'#b0bac8');g.addColorStop(1,'#3a4450');cx.fillStyle=g;cx.fill();gOut(3);
  cx.save();cx.rotate(f.a/60);cx.strokeStyle='rgba(160,230,255,.6)';cx.lineWidth=2;cx.setLineDash([8,6]);cx.beginPath();cx.arc(0,0,38,0,TAU);cx.stroke();cx.setLineDash([]);cx.restore();
  for(let i=0;i<8;i++){const a=i/8*TAU+Math.PI/8;cx.fillStyle='#2a2e36';cx.fillRect(Math.cos(a)*46-3,Math.sin(a)*46-3,6,6);if(!(i%2))glow(Math.cos(a)*46,Math.sin(a)*46,8,[160,230,255],.5)}
  gDome(24,'#e0e8f2','#3a4450',0);coreD(0,0,9,pc,pu)}
function babAI(b,dt){b.nc=1;b.gd=1;if(bEnter(b,dt,140,.8))return;b.x+=(W/2+Math.sin(b.a/150)*30-b.x)*.04*dt;b.t-=dt;
  const p=b.hp/b.mh;if(p<.66)bLaser(b,dt,p<.33?260:320,p<.33?2:1);
  if(b.t>0)return;b.n++;const a=aim(b.x,b.y);
  if(p>.66){b.t=84;const m=b.n%3;if(m==1)for(let i=0;i<14;i++)fireS(12,b.x,b.y,i/14*TAU+b.n*.15,1.9);else if(m==2)for(let i=-2;i<=2;i++)fireS(10,b.x,b.y+20,a+i*.18,2.7);else for(let i=0;i<4;i++)msl(b.x,b.y,i/4*TAU+Math.PI/4,1.8,i%2)}
  else if(p>.33){b.t=68;const m=b.n%3;if(m==0)for(let i=0;i<17;i++)fireS(12,b.x,b.y,i/17*TAU+b.n*.1,2);else if(m==1){msl(b.x,b.y+30,a,1.35,2);for(const s2 of[-1,1])msl(b.x+s2*40,b.y,a+s2*.6,1.8,1)}else for(let i=-2;i<=2;i++)fireS(10,b.x,b.y+20,a+i*.16,2.9)}
  else{b.t=13;for(const o of[0,TAU/3,TAU*2/3])fireS(12,b.x,b.y,b.n*.21+o,2.1);if(b.n%12==0)for(let i=-2;i<=2;i++)fireS(10,b.x,b.y+20,a+i*.2,3)}}
function gungnir(f,p,pc,c,pu,M){const ch=f.cg>0?1-f.cg/90:0;
  M(()=>{cx.fillStyle='#3a404a';cx.fillRect(40,-8,22,6);rrp(62,-30,56,40,2);const g=cx.createLinearGradient(0,-30,0,10);g.addColorStop(0,'#3a6ab8');g.addColorStop(1,'#14244a');cx.fillStyle=g;cx.fill();gOut(2);
    cx.strokeStyle='rgba(160,200,255,.5)';cx.lineWidth=.9;cx.beginPath();for(let k=1;k<7;k++){cx.moveTo(62+k*8,-30);cx.lineTo(62+k*8,10)}cx.moveTo(62,-10);cx.lineTo(118,-10);cx.stroke()});
  cx.save();cx.rotate(f.a/90);cx.strokeStyle='#4a525e';cx.lineWidth=7;cx.beginPath();cx.arc(0,-20,60,0,TAU);cx.stroke();cx.strokeStyle='rgba(160,230,255,.6)';cx.lineWidth=1.5;cx.setLineDash([10,8]);cx.stroke();cx.setLineDash([]);cx.restore();
  rrp(-14,10,28,86,6);const gb=cx.createLinearGradient(-14,0,14,0);gb.addColorStop(0,'#2a3038');gb.addColorStop(.5,'#9aa6b4');gb.addColorStop(1,'#2a3038');cx.fillStyle=gb;cx.fill();gOut(2.6);
  for(const y of[30,52,74]){cx.fillStyle='#22262c';cx.fillRect(-16,y,32,6);gOut(1.2)}
  rrp(-18,90,36,14,4);cx.fillStyle='#1a1c20';cx.fill();gOut(2);
  if(ch>0){glow(0,100,30+ch*40,[150,220,255],.4+ch*.5);cx.fillStyle=`rgba(220,245,255,${ch})`;cx.beginPath();cx.arc(0,100,4+ch*8,0,TAU);cx.fill()}
  poly(hp(0,-20,44,8,Math.PI/8));const g=cx.createLinearGradient(-44,0,44,0);g.addColorStop(0,'#3a4450');g.addColorStop(.5,'#c0cad6');g.addColorStop(1,'#3a4450');cx.fillStyle=g;cx.fill();gOut(3);
  cx.fillStyle='#d8424a';poly([[-24,-56],[24,-56],[16,-48],[-16,-48]]);cx.fill();
  gDome(20,'#eef4fa','#3a4450',0);coreD(0,-20,8,pc,pu)}
function gunAI(b,dt){b.nc=0;if(bEnter(b,dt,112,.7))return;b.x=W/2+Math.sin(b.a/140)*56;b.t-=dt;const p=b.hp/b.mh;
  for(const q of live(b,'gtr')){const P=partPos(b,q);q.ba=gTurn(q.ba??Math.PI/2,aim(P.x,P.y),.05*dt)}
  if(p<.66)bLaser(b,dt,p<.33?250:300,p<.33?2:1);
  if(b.cg>0){b.cg-=dt;if(b.cg<=0){shake=Math.max(shake,14);sfx('big');explode(b.x,b.y+100,14,'#bfe8ff');const a=aim(b.x,b.y+100);for(let i=0;i<24;i++)fireS(10,b.x,b.y+100,i/24*TAU,2.2);for(let i=-3;i<=3;i++)fireS(12,b.x,b.y+100,a+i*.1,3.2)}return}
  if(b.t>0)return;b.n++;const x=b.x,y=b.y+100,a=aim(x,y);
  if(p>.66){b.t=72;const m=b.n%3;if(m==0)for(let i=-3;i<=3;i++)fireS(10,x,y,a+i*.15,2.8);else if(m==1)for(let i=0;i<18;i++)fireS(12,b.x,b.y-20,i/18*TAU+b.n*.2,1.9);else{b.cg=90;sfx('warn2')}}
  else if(p>.33){b.t=58;const m=b.n%4;if(m==0)for(let i=-4;i<=4;i++)fireS(10,x,y,a+i*.13,2.9);else if(m==1){for(let i=0;i<20;i++)fireS(12,b.x,b.y-20,i/20*TAU+b.n*.13,2)}else if(m==2){for(const o of[-.5,-.17,.17,.5])msl(b.x,b.y-20,a+o,1.9,1);msl(b.x,b.y+60,a,1.35,2)}else{b.cg=80;sfx('warn2')}}
  else{b.t=10;for(const o of[0,Math.PI])fireS(12,b.x,b.y-20,b.n*.27+o,2.2);if(b.n%9==0)for(let i=-2;i<=2;i++)fireS(10,x,y,a+i*.2,3);if(b.n%30==15){b.cg=70;sfx('warn2')}if(b.n%14==7)for(const s2 of[-1,1])msl(b.x+s2*30,b.y-62,Math.PI/2+s2*.7,1.8,1)}}
LZB.add(27);LZB.add(28);

// ---------- stage data overrides 23..28 ----------
{const mb=MPAT.length;
 MPAT.push(
  (f,x,y,a)=>{for(let i=-1;i<=1;i++)for(let k=0;k<2;k++)fireS(12,x,y,a+i*.22+k*.03,2.6+k*.3);f.nx=70},          // +0 tracer fan
  (f,x,y)=>{for(let i=0;i<14;i++)fireS(10,x,y,i/14*TAU+f.n*.2,2);f.nx=90},                                       // +1 shell ring
  f=>{const o=mkEn('V',f.x-40);o.y=f.y;const o2=mkEn('V',f.x+40);o2.y=f.y;f.nx=130},                            // +2 boats
  (f,x,y,a)=>{for(const o of[-.5,-.17,.17,.5])msl(x,y,a+o,1.9,Math.abs(o)<.3?1:0);f.nx=100},                                     // +3 missiles
  f=>{mortar(ship.x,ship.y,80,8);f.nx=110},                                                                       // +4 mortar
  (f,x,y,a)=>{for(let i=-3;i<=3;i++)fireS(10,x,y,a+i*.15,2.8);f.nx=74},                                          // +5 shell fan 7
  f=>{mkEn('U',f.x-50,f.y);mkEn('U',f.x+50,f.y);f.nx=140},                                                        // +6 helis
  (f,x,y)=>{for(let i=0;i<14;i++)fireS(12,x,y,i/14*TAU+f.n*.25,1.9);f.nx=95},                                     // +7 tracer ring
  (f,x,y)=>{for(let i=0;i<4;i++)fireS(12,x,y,f.n*.5+i*TAU/4,2.2);f.nx=22;if(f.n%8==0)f.nx=85},
  (f,x,y,a)=>{msl(x,y,a,1.35,2);for(const s2 of[-1,1])msl(x+s2*20,y,a+s2*.7,1.8,1);f.nx=120});                  // +8 spiral burst
 const SQ=[[mb,mb+3,mb+1,mb+2],[mb+3,mb+5,mb+9,mb+1],[mb+5,mb+4,mb+3,mb+9],[mb+7,mb+3,mb+6,mb+9],[mb+8,mb+3,mb+9,mb+7],[mb+8,mb+9,mb+7,mb+3,mb+5]];
 const D=[
  {S:{f:'森と河',w:{N:2,F:2,P:2,V:1.2,U:1.5,d:1},es:1.05,sp:1.05,hn:'川の砲艇は流れに沿って進む！'},
   SC:[[60,'fk',[100,260]],[200,'bt',2],[340,'tk',[80,280]],[480,'hc',[120,240]],[600,'tr',[60,300]],[740,'bt',3],[880,'fk',[180]],[1000,'tk',[120,240]],[1120,'dl',0],[1240,'fk',[60,300]],[1350,'mb'],
     [1480,'bt',2],[1600,'tr',[100,260]],[1720,'hc',[180]],[1860,'fk',[90,270]],[1980,'tk',[60,180,300]],[2120,'bt',3],[2260,'dv'],[2400,'fk',[120,240]],[2520,'tr',[90,270]],[2660,'hc',[100,260]],[2800,'bt',2],[2940,'fk',[60,180,300]],[3080,'tk',[150,210]]],
   HX:[[300,'fk',[60,300]],[900,'bt',2],[1700,'hc',[60,300]],[2400,'tk',[90,270]]],VX:[[500,'fk',[180]],[1900,'bt',3]],
   M:['ホバージャガー',145,mHover,['#a8b8a0','#2a3a2c'],[160,230,140]],
   B:['多脚戦車アラクネ',610,arachne,arcAI,56,[255,120,140],[{ox:-30,oy:-6,r:12,kd:'gtr',cd:110,nm:'脚部砲',pp:bTur},{ox:30,oy:-6,r:12,kd:'gtr',cd:110,nm:'脚部砲',pp:bTur}]],
   ZM:'川面をすべる大型ホバークラフト。二連装砲で曳光弾をばらまき、全方位に砲弾を撃つ。砲艇を呼ぶこともある。',
   ZB:'森を踏み分けて進む六本脚の多脚戦車。脚の先から砲弾の破片をまき散らし、頭の砲で狙い撃つ。体力が減ると、ゆれる弾の幕を張る。'},
  {S:{f:'海峡',w:{L:1.5,N:1.5,G:1,V:1.5,U:1.5,d:1.2},es:1.1,sp:1.1,hn:'駆逐艦は砲塔を2つ持つ！'},
   SC:[[60,'cb',[60]],[200,'bt',2],[340,'dd',[260]],[500,'hc',[180]],[620,'tr',[50,90]],[760,'bt',3],[900,'dd',[300]],[1040,'cb',[40,100]],[1160,'hc',[120,240]],[1350,'mb'],
     [1480,'dd',[240]],[1620,'bt',2],[1740,'cb',[70]],[1880,'hc',[180]],[2020,'dd',[300]],[2160,'tr',[40,100]],[2300,'bt',3],[2440,'dl',1],[2560,'dd',[220,320]],[2720,'cb',[50,110]],[2860,'hc',[100,260]],[3000,'bt',2],[3120,'dd',[280]]],
   HX:[[300,'dd',[320]],[900,'cb',[60]],[1700,'bt',3],[2400,'hc',[60,300]]],VX:[[500,'dd',[240]],[1900,'cb',[40,100]]],
   M:['シャーク',195,mShark,['#b8c4d0','#2a3a4c'],[150,210,255]],
   B:['超弩級戦艦ポセイドン',780,poseidon,posAI,56,[150,200,255],[{ox:-22,oy:-58,r:12,kd:'gtr',cd:110,nm:'副砲',pp:bTur},{ox:22,oy:-58,r:12,kd:'gtr',cd:110,nm:'副砲',pp:bTur},{ox:0,oy:-74,r:12,kd:'gms2',cd:200,nm:'ミサイル発射機',pp:bTur}]],
   ZM:'海峡を走るミサイル艇。4発のミサイルを扇状に撃ち、砲弾の扇と全方位弾を重ねてくる。',
   ZB:'海峡をふさぐ超弩級戦艦。三連装の主砲で扇弾を撃ち、左右の舷側からも砲弾を放つ。後ろのミサイル発射機と副砲を先に壊そう。'},
  {S:{f:'鋼鉄の街',w:{R:2,O:1,S:.8,P:2,U:1.5,d:1},es:1.15,sp:1.15,hn:'装甲列車は右の線路を走ってくる！'},
   SC:[[60,'rm',[120,220]],[200,'tk',[80,200]],[340,'rt'],[480,'hc',[160]],[600,'rm',[40,140,240]],[760,'sm',[110,210]],[900,'rt'],[1040,'tk',[60,240]],[1160,'rm',[100,200]],[1350,'mb'],
     [1480,'rt'],[1600,'rm',[60,240]],[1720,'hc',[100,220]],[1860,'sm',[160]],[1980,'tk',[80,200]],[2120,'rt'],[2260,'rm',[40,140,240]],[2400,'dv'],[2520,'tk',[120,240]],[2660,'rt'],[2800,'rm',[100,200]],[2940,'hc',[160]],[3080,'sm',[60,240]]],
   HX:[[300,'rt'],[900,'rm',[60,240]],[1700,'tk',[90,200]],[2400,'rt']],VX:[[500,'sm',[160]],[1900,'rm',[100,200]]],
   M:['ハンマー',260,mHammer,['#a8a28a','#3a3424'],[255,190,110]],
   B:['機動要塞ギガンテス',990,gigantes,gigAI,58,[255,140,110],[{ox:-56,oy:-16,r:12,kd:'gtr',cd:100,nm:'腕部砲',pp:bTur},{ox:56,oy:-16,r:12,kd:'gtr',cd:100,nm:'腕部砲',pp:bTur}]],
   ZM:'巨大な主砲を積んだ自走砲。迫撃砲の着弾マークで退路をふさぎ、7方向の砲弾と全方位弾を撃つ。',
   ZB:'街を踏み歩く二足歩行の機動要塞。両腕の砲で弾を降らせ、背中からミサイルを撃つ。迫撃砲は2か所同時に落ちるので、マークの外へ逃げよう。'},
  {S:{f:'雲海',w:{T:2.5,Y:.8,U:2,d:2},es:1.15,sp:1.1,hn:'雲から突き出た山の上に砲台がある！'},
   SC:[[60,'pk',[100,260]],[220,'as',[180]],[380,'hc',[90,270]],[520,'pk',[60,180,300]],[680,'dl',1],[800,'pk',[120,240]],[940,'as',[100]],[1080,'hc',[180]],[1200,'pk',[80,280]],[1350,'mb'],
     [1480,'pk',[120,240]],[1620,'as',[260]],[1760,'hc',[100,260]],[1900,'pk',[60,180,300]],[2040,'dv'],[2180,'pk',[90,270]],[2320,'as',[180]],[2460,'hc',[120,240]],[2600,'pk',[60,300]],[2740,'dl',0],[2880,'pk',[120,240]],[3040,'as',[100,260]]],
   HX:[[300,'pk',[180]],[900,'as',[260]],[1700,'hc',[60,300]],[2400,'pk',[60,300]]],VX:[[500,'as',[100]],[1900,'pk',[120,240]]],
   M:['クラウドホエール',300,mWhale,['#d0d4dc','#4a4e58'],[255,170,170]],
   B:['山岳要塞オリンポス',1150,olympus,olyAI,60,[220,235,255],[{ox:-58,oy:-30,r:12,kd:'gtr',cd:100,nm:'砲塔',pp:bTur},{ox:58,oy:-30,r:12,kd:'gtr',cd:100,nm:'砲塔',pp:bTur},{ox:-50,oy:34,r:12,kd:'gtr',cd:120,nm:'砲塔',pp:bTur},{ox:50,oy:34,r:12,kd:'gtr',cd:120,nm:'砲塔',pp:bTur}]],
   ZM:'雲の上をゆく巨大な空中空母。全方位に曳光弾を撃ち、攻撃ヘリを次々と送り出す。',
   ZB:'雲海に突き出た山頂の要塞。4つの砲塔と二連装の主砲で守り、対空砲の着弾マークで逃げ道をふさぐ。動かないので、砲塔から崩していこう。'},
  {S:{f:'成層圏',w:{W:2.5,X:1.5,d:2},es:1.2,sp:1.1,hn:'軌道エレベーターに沿って昇れ！'},
   SC:[[60,'ow',[80,280]],[200,'cl',2],[340,'ow',[60,180,300]],[480,'dl',1],[600,'ow',[100,260]],[740,'cl',3],[880,'ow',[60,300]],[1000,'dv'],[1120,'ow',[120,240]],[1240,'cl',2],[1350,'mb'],
     [1480,'ow',[80,280]],[1600,'cl',3],[1720,'ow',[60,180,300]],[1860,'dl',0],[1980,'ow',[100,260]],[2120,'cl',2],[2260,'ow',[60,300]],[2400,'dv'],[2520,'ow',[90,270]],[2660,'cl',3],[2800,'ow',[60,180,300]],[2940,'dl',1],[3080,'ow',[120,240]]],
   HX:[[300,'ow',[60,300]],[900,'cl',2],[1700,'ow',[90,270]],[2400,'cl',3]],VX:[[500,'ow',[180]],[1900,'cl',2]],
   M:['カーゴ',290,mCargo,['#c0c8d4','#3a4454'],[160,230,255]],
   B:['昇降要塞バベル',1240,babel,babAI,58,[160,230,255],[0,1,2,3].map(i=>({orb:i,on:4,or:82,ory:60,r:12,kd:'gtr',cd:120,nm:'衛星砲'}))],
   ZM:'軌道エレベーターを行き来する輸送船。うずを巻く弾を連射し、ミサイルも撃ってくる。',
   ZB:'軌道エレベーターをよじ登る巨大な昇降要塞。まわりを4つの衛星砲が回る。体力が減ると、予告線のあとに赤いレーザーを撃ち下ろす。'},
  {S:{f:'大気圏の果て',w:{Z:2,W:1.5,X:1.2,d:2},es:1.2,sp:1.2,hn:'星が見えてきた！宇宙まであと少し'},
   SC:[[60,'st',[100,260]],[200,'ow',[60,300]],[340,'cl',2],[480,'st',[60,180,300]],[620,'dv'],[740,'ow',[100,260]],[880,'st',[120,240]],[1000,'cl',3],[1120,'ow',[60,300]],[1240,'st',[80,280]],[1350,'mb'],
     [1480,'st',[100,260]],[1600,'ow',[60,180,300]],[1720,'cl',2],[1860,'st',[60,300]],[1980,'dl',1],[2120,'ow',[90,270]],[2260,'st',[120,240]],[2400,'cl',3],[2520,'ow',[60,300]],[2660,'st',[60,180,300]],[2800,'dv'],[2940,'ow',[100,260]],[3080,'st',[120,240]]],
   HX:[[300,'st',[60,300]],[900,'cl',2],[1700,'ow',[90,270]],[2400,'st',[60,180,300]]],VX:[[500,'ow',[180]],[1900,'cl',3]],
   M:['サテライト',365,mSat,['#d0d8e2','#3a4454'],[150,200,255]],
   B:['軌道砲グングニル',1950,gungnir,gunAI,60,[180,220,255],[{ox:-86,oy:-14,r:13,kd:'gtr',cd:100,nm:'翼砲',pp:bTur},{ox:86,oy:-14,r:13,kd:'gtr',cd:100,nm:'翼砲',pp:bTur},{ox:-30,oy:-62,r:12,kd:'gms2',cd:190,nm:'ミサイル庫',pp:bTur},{ox:30,oy:-62,r:12,kd:'gms2',cd:190,nm:'ミサイル庫',pp:bTur}]],
   ZM:'大気圏の果てを守る防衛衛星。太陽電池の翼を広げ、うず巻き弾と曳光弾のリングを撃つ。',
   ZB:'宇宙への門を守る巨大な軌道砲。砲身に光が集まったあと、全方位に砲弾を撃ち放つ。体力が減るとレーザーとミサイルも使う。光が集まりだしたら離れよう。'}];
 window.C0ZK=[];
 D.forEach((d,i)=>{const T=23+i;STG[T]=d.S;SCR[T]=d.SC;HX[T]=d.HX;VX[T]=d.VX;
   MBN[T]=d.M[0];MHP[T]=d.M[1];MART[T-7]=d.M[2];MP[T]=d.M[3];MC[T]=d.M[4];MSEQ[T]=SQ[i];MFS[T]=10;MR[T]=42;
   BN[T]=d.B[0];HPS[T]=d.B[1];BART[T]=d.B[2];BAI[T-7]=d.B[3];BR[T]=d.B[4];BCOL[T]=d.B[5];PSPEC[T]=d.B[6];BFS[T]=10;C0ZK.push([d.ZM,d.ZB])});
}
{const m0=midSpawn;midSpawn=function(){m0();const f=fo[fo.length-1];if(f&&f.k=='z'&&(f.st==26||f.st==28)){f.nc=0;f.gd=0}}}
{const n0=EMK.N,p0=EMK.P;EMK.N=(x,y)=>n0(landX(x),y);EMK.P=(x,y)=>p0(landX(x),y)}
