
// ===== Course 1 「宇宙へ」: internal course index 0, global stage indices 22..28 =====
// internal course order: 0 宇宙へ / 1 銀河航路 / 2 氷晶星雲 / 3 紅蓮星域 / 4 EX
function CK(c){return c==0?4:c-1}                       // save-key id (old ids kept, new course = 4)
function CKI(k){return k==4?0:k>=0&&k<=3?k+1:0}
function TT(c){return c==0?0:TB(c)}                         // title-screen background (宇宙へ keeps the space one)
function TB(c){return c==0?22:c>3?21:(c-1)*7}           // first global stage index of a course
function LT(T){return T==21||(T>21?T==28:T%7==6)}       // final boss of a course
function THC(i){return i>=22?0:i==21?4:(i/7|0)+1}       // course of a theme / stage index
function ZID(T,b){return T<21?(b?21+T:T):T==21?(b?43:42):(b?51:44)+T-22}
function cuLoad(){let n=0;try{const v=localStorage.getItem('hoshikuzu-cu2');if(v!=null){n=+v;return n>=0&&n<=4?n:0}
    const o=localStorage.getItem('hoshikuzu-cu');if(o!=null){const k=+o;n=k>=0&&k<=3?k+1:1}
    else for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i)||'';if(/^hs2-|^hoshikuzu-(zk|ach|dif|ship|co)$/.test(k)){n=1;break}}
    localStorage.setItem('hoshikuzu-cu2',n)}catch(e){}return n}
CN.unshift('宇宙へ');CF.unshift({hp:1,es:1,sp:1});CTR.unshift([0,1,2,3,8,9,4]);CBB.unshift(5);CBF.unshift(6);
HDX.unshift([{N:1,U:1},{P:.6},{O:.5,U:.5}]);

// ---------- ground layer ----------
var GY=0,gYl=0,GD=0,GDEC=[],MOR=[];
function GSP(){const i=thB>=22?thB-22:0;return[1,.9,.8,.6,.5,.4,.3][i]}
function gReset0(){GY=0;gYl=0;GD=0;GDEC=[];MOR=[]}
function gTick(dt){GD=GY-gYl;gYl=GY;if(!(GD>=0&&GD<40))GD=0;
  for(const d of GDEC)d.y+=GD;GDEC=GDEC.filter(d=>d.y<H+60);
  if(MOR.length&&!fo.some(f=>f.k=='b'&&!(f.dy>0)))MOR=[];
  for(const m of MOR){m.y+=GD;m.w-=dt;if(m.w<=0&&!m.d){m.d=1;explode(m.x,m.y,10,'#ffb347');shake=Math.max(shake,6);sfx('hit');
      for(let i=0;i<m.n;i++)fireS(13,m.x,m.y,i/m.n*TAU+m.o,1.55);for(let i=0;i<8;i++)pt.push({x:m.x,y:m.y,vx:(R()-.5)*3,vy:(R()-.5)*3,l:22,m:22,k:'s',c:'#ffd27a',sz:3})}}
  MOR=MOR.filter(m=>!m.d)}
function gDec(x,y,r,k){GDEC.push({x,y,r,k:k||'c',s:R()*9});if(GDEC.length>60)GDEC.splice(0,GDEC.length-60)}
function gTurn(a,b,s){let d=b-a;while(d>Math.PI)d-=TAU;while(d<-Math.PI)d+=TAU;return a+cl(d,-s,s)}
function gAimOk(a,b){let d=b-a;while(d>Math.PI)d-=TAU;while(d<-Math.PI)d+=TAU;return Math.abs(d)<.14}
function gOn(f){return f.y>14&&f.y<H*.74&&Math.hypot(ship.x-f.x,ship.y-f.y)>64}
function mortar(x,y,w,n){MOR.push({x:cl(x,20,W-20),y:cl(y,60,H-30),w:w||74,m:w||74,n:n||8,o:R()*TAU});sfx('warn2')}
const gC=(w,c)=>w?'#fff':c;
function gOut(lw=2){cx.lineWidth=lw;cx.strokeStyle='#101218';cx.stroke()}

// ---------- ground / air enemies ----------
// N 砲台 (fixed)  O 対空陣地 (fixed)  P 戦車 (moving)  Q 補給トラック (moving)  U 攻撃ヘリ (air)
function cvy(sd,y0){const n=st=='zk'?1:3,y=y0??(40+R()*90);let o;for(let i=0;i<n;i++)o=add({k:'Q',x:sd>0?-24-i*34:W+24+i*34,y,r:10,mh:4,pts:70,gd:1,nc:1,sd,vx:1.15*sd,nx:60+i*40,hd:sd>0?0:Math.PI});return o}
Object.assign(EMK,{
 N:(x,y)=>add({k:'N',x:cl(x,24,W-24),y:Math.min(y,-16),r:13,mh:6,pts:100,gd:1,nc:1,ba:Math.PI/2,nx:60+R()*50}),
 O:(x,y)=>add({k:'O',x:cl(x,30,W-30),y:Math.min(y,-22),r:16,mh:14,pts:220,gd:1,nc:1,ba:Math.PI/2,nx:90+R()*40}),
 P:(x,y)=>{const hd=Math.PI/2+(R()-.5)*1.4;return add({k:'P',x:cl(x,24,W-24),y:Math.min(y,-18),r:12,mh:7,pts:130,gd:1,nc:1,hd,ta:Math.PI/2,sp:.45+R()*.2,nx:80+R()*50,tm:0})},
 Q:(x,y)=>cvy(R()<.5?1:-1),
 U:(x,y)=>add({k:'U',x:cl(x,30,W-30),y:Math.min(y,-24),r:13,mh:6,pts:120,ty:60+R()*90,ph:0,n:0,nx:50,x0:x,rt:0})});
function mvN(f,dt){f.y+=GD;f.ba=gTurn(f.ba,aim(f.x,f.y),.045*dt);f.mf=(f.mf||0)-dt;
  if(gOn(f)&&f.fc>=f.nx&&gAimOk(f.ba,aim(f.x,f.y))){f.fc=0;f.nx=170;f.mf=7;fireA(f.x+Math.cos(f.ba)*15,f.y+Math.sin(f.ba)*15,f.ba,2.5)}}
function mvO(f,dt){f.y+=GD;f.ba=gTurn(f.ba,aim(f.x,f.y),.03*dt);f.mf=(f.mf||0)-dt;f.wn=gOn(f)&&f.fc>=f.nx-34;
  if(gOn(f)&&f.fc>=f.nx){f.fc=0;f.nx=190;f.mf=9;for(const o of[-.26,0,.26])fireA(f.x+Math.cos(f.ba)*12,f.y+Math.sin(f.ba)*12,f.ba+o,2.2)}}
function mvP(f,dt){f.tm+=dt;if(f.x<22&&Math.cos(f.hd)<0||f.x>W-22&&Math.cos(f.hd)>0)f.hd=Math.PI-f.hd;if(f.tm>140&&R()<.01*dt){f.tm=0;f.hd=gTurn(f.hd,Math.PI/2+(R()-.5)*1.6,.9)}
  f.x+=Math.cos(f.hd)*f.sp*dt;f.y+=GD+Math.sin(f.hd)*f.sp*dt;f.ta=gTurn(f.ta,aim(f.x,f.y),.05*dt);f.mf=(f.mf||0)-dt;
  f.trk=(f.trk||0)+f.sp*dt;if(f.trk>9&&f.y>0){f.trk=0;gDec(f.x,f.y,f.hd,'t')}
  if(gOn(f)&&f.fc>=f.nx&&gAimOk(f.ta,aim(f.x,f.y))){f.fc=0;f.nx=160;f.mf=6;fireA(f.x+Math.cos(f.ta)*13,f.y+Math.sin(f.ta)*13,f.ta,2.6)}}
function mvQ(f,dt){f.x+=f.vx*dt;f.y+=GD;f.trk=(f.trk||0)+dt;if(f.trk>10){f.trk=0;gDec(f.x,f.y,f.hd,'t')}
  if(!f.sh&&f.fc>=f.nx&&f.x>30&&f.x<W-30&&gOn(f)){f.sh=1;fireA(f.x,f.y,aim(f.x,f.y),2.3)}}
function mvU(f,dt){f.rt+=dt;
  if(f.ph==0){f.y+=Math.max(.6,(f.ty-f.y)*.04+.6)*dt;f.fc=0;if(f.y>=f.ty){f.ph=1;f.fc=20}}
  else if(f.ph==1){f.x=cl(f.x+Math.sin(f.a/40)*.5*dt,20,W-20);if(f.fc>=f.nx){f.fc=0;f.nx=110;f.n++;const a=aim(f.x,f.y);for(const o of[-.22,0,.22])fireA(f.x,f.y+8,a+o,2.5);if(f.n>=2)f.ph=2}}
  else{f.y-=1.3*dt;f.x+=(f.x<W/2?-1:1)*.6*dt;if(f.y<-60)f.dead=1}}
Object.assign(EMV,{N:mvN,O:mvO,P:mvP,Q:mvQ,U:mvU});

function dN(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);
  hx(0,0,15,8,Math.PI/8);cx.fillStyle=gC(w,'#7a7d72');cx.fill();gOut(2);
  cx.strokeStyle='rgba(20,22,16,.35)';cx.lineWidth=1;for(let i=0;i<4;i++){const a=i*Math.PI/2+Math.PI/4;cx.beginPath();cx.moveTo(Math.cos(a)*7,Math.sin(a)*7);cx.lineTo(Math.cos(a)*13,Math.sin(a)*13);cx.stroke()}
  cx.rotate(f.ba);
  if(f.mf>0){glow(19,0,12,[255,200,120],.9);cx.fillStyle='#fff3c4';poly([[16,-4],[26,0],[16,4]]);cx.fill()}
  cx.fillStyle=gC(w,'#2a2e36');cx.fillRect(4,-2.6,13,5.2);cx.lineWidth=1.5;cx.strokeStyle='#0a0c10';cx.strokeRect(4,-2.6,13,5.2);
  const g=cx.createRadialGradient(-2,-3,1,0,0,9);g.addColorStop(0,'#b8c0cc');g.addColorStop(1,'#3a414c');cx.fillStyle=w?'#fff':g;cx.beginPath();cx.arc(0,0,8.5,0,TAU);cx.fill();gOut(2);
  cx.fillStyle=w?'#fff':'#d8424a';cx.fillRect(-6,-1.6,4,3.2);glow(-4,0,6,[255,90,110],.6);
  cx.restore()}
function dO(f){const w=f.fl>0,bl=f.wn&&Math.floor(t/5)%2;cx.save();cx.translate(f.x,f.y);
  rrp(-17,-17,34,34,7);cx.fillStyle=gC(w,'#8a8774');cx.fill();gOut(2.2);
  cx.fillStyle='rgba(20,22,16,.25)';for(const[x,y]of[[-12,-12],[12,-12],[-12,12],[12,12]]){cx.beginPath();cx.arc(x,y,2.2,0,TAU);cx.fill()}
  cx.rotate(f.ba);
  for(const s of[-1,1]){cx.save();cx.translate(0,s*6);rrp(-8,-3.5,24,7,2);cx.fillStyle=gC(w,'#3a414c');cx.fill();gOut(1.4);
    if(f.mf<=0){cx.fillStyle=w?'#fff':'#f2f2ea';cx.fillRect(-4,-2,16,4);cx.fillStyle=w?'#fff':'#d8424a';poly([[12,-2],[17,0],[12,2]]);cx.fill()}
    cx.restore()}
  const g=cx.createRadialGradient(-2,-3,1,0,0,8);g.addColorStop(0,'#c0c6cf');g.addColorStop(1,'#444b56');cx.fillStyle=w?'#fff':g;cx.beginPath();cx.arc(-4,0,6.5,0,TAU);cx.fill();gOut(1.6);
  cx.fillStyle=bl?'#fff':'#ff5d73';cx.beginPath();cx.arc(-4,0,2.2,0,TAU);cx.fill();if(f.wn)glow(-4,0,14,[255,90,110],bl?.9:.4);
  cx.restore()}
function treads(L,Wd,sp,w){for(const s of[-1,1]){cx.fillStyle=w?'#fff':'#1d2024';cx.fillRect(-L/2,s*Wd-3,L,6);cx.strokeStyle='rgba(120,124,110,.7)';cx.lineWidth=1;cx.beginPath();for(let x=-L/2+((sp%4)+4)%4;x<L/2;x+=4){cx.moveTo(x,s*Wd-3);cx.lineTo(x,s*Wd+3)}cx.stroke()}}
function dP(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);cx.save();cx.rotate(f.hd);
  treads(24,7,(f.trk||0)*1.4,w);rrp(-11,-6,22,12,3);cx.fillStyle=gC(w,'#5f6a52');cx.fill();gOut(1.8);
  cx.fillStyle='rgba(255,255,255,.12)';cx.fillRect(-9,-5,18,3);cx.restore();
  cx.rotate(f.ta);if(f.mf>0){glow(17,0,10,[255,200,120],.9);cx.fillStyle='#fff3c4';poly([[14,-3],[22,0],[14,3]]);cx.fill()}
  cx.fillStyle=gC(w,'#2a2e36');cx.fillRect(2,-1.8,12,3.6);cx.lineWidth=1.2;cx.strokeStyle='#0a0c10';cx.strokeRect(2,-1.8,12,3.6);
  cx.beginPath();cx.arc(0,0,5.5,0,TAU);cx.fillStyle=gC(w,'#7c8a68');cx.fill();gOut(1.6);cx.fillStyle=w?'#fff':'#ff5d73';cx.beginPath();cx.arc(-1.5,0,1.6,0,TAU);cx.fill();
  cx.restore()}
function dQ(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);cx.rotate(f.hd);
  cx.fillStyle=w?'#fff':'#16181c';for(const x of[-8,-1,7])for(const s of[-1,1])cx.fillRect(x-2,s*6-1.5,4,3);
  rrp(-12,-5.5,24,11,2);cx.fillStyle=gC(w,'#4a5040');cx.fill();gOut(1.6);
  rrp(-11,-4.5,14,9,1.5);cx.fillStyle=gC(w,'#c7a95c');cx.fill();cx.lineWidth=1;cx.strokeStyle='#4a3a14';cx.stroke();
  cx.strokeStyle='rgba(74,58,20,.6)';cx.beginPath();cx.moveTo(-6.5,-4.5);cx.lineTo(-6.5,4.5);cx.moveTo(-2,-4.5);cx.lineTo(-2,4.5);cx.stroke();
  cx.fillStyle=w?'#fff':'#9fd8ff';cx.fillRect(7,-3.5,3,7);cx.restore()}
function dU(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);
  cx.fillStyle=gC(w,'#3d4a44');cx.fillRect(-1.6,-24,3.2,16);cx.save();cx.translate(0,-23);cx.rotate(f.rt*.9);cx.strokeStyle='rgba(30,30,30,.7)';cx.lineWidth=1.5;cx.beginPath();cx.moveTo(-5,0);cx.lineTo(5,0);cx.stroke();cx.restore();
  cx.beginPath();cx.ellipse(0,0,8,13,0,0,TAU);const g=cx.createLinearGradient(-8,0,8,0);g.addColorStop(0,'#2e3a34');g.addColorStop(.5,'#6a7c70');g.addColorStop(1,'#2e3a34');cx.fillStyle=w?'#fff':g;cx.fill();gOut(1.8);
  for(const s of[-1,1]){cx.fillStyle=gC(w,'#2a2e36');cx.fillRect(s*8-(s<0?4:0),-1,4,7);cx.fillStyle=w?'#fff':'#d8424a';cx.fillRect(s*8-(s<0?4:0),5,4,2)}
  cx.beginPath();cx.ellipse(0,6,4.5,5,0,0,TAU);cx.fillStyle=w?'#fff':'#7fe0ff';cx.fill();cx.lineWidth=1;cx.strokeStyle='#0a2430';cx.stroke();
  cx.save();cx.rotate(f.rt*.55);cx.globalAlpha=.16;cx.fillStyle='#e8eef0';cx.beginPath();cx.arc(0,0,21,0,TAU);cx.fill();cx.globalAlpha=1;cx.strokeStyle='rgba(16,18,20,.8)';cx.lineWidth=2.4;cx.beginPath();cx.moveTo(-21,0);cx.lineTo(21,0);cx.moveTo(0,-21);cx.lineTo(0,21);cx.stroke();cx.restore();
  cx.beginPath();cx.arc(0,0,2.5,0,TAU);cx.fillStyle='#1a1c20';cx.fill();cx.restore()}
Object.assign(EDR,{N:dN,O:dO,P:dP,Q:dQ,U:dU});
Object.assign(EKL,{N:f=>gDec(f.x,f.y,16),O:f=>gDec(f.x,f.y,22),P:f=>gDec(f.x,f.y,13),Q:f=>gDec(f.x,f.y,11)});
Object.assign(EBG,{N:3,O:5,P:3,Q:2,U:3});Object.assign(EDB,{O:.4,Q:.3});Object.assign(ECAP,{N:5,O:2,P:4,Q:6,U:3});
Object.assign(KC,{N:'#ffb070',O:'#ff8a5c',P:'#c8d060',Q:'#ffd166',U:'#9fe0ff'});
Object.assign(FSM,{N:10,O:11,P:10,Q:12,U:12});
Object.assign(WV,{tr:xs=>xs.forEach(x=>mkEn('N',x)),sm:xs=>xs.forEach(x=>mkEn('O',x)),tk:xs=>xs.forEach(x=>mkEn('P',x)),cv:sd=>cvy(sd),hc:xs=>xs.forEach(x=>mkEn('U',x))});

// ---------- mid-boss 22: 重戦車ガントレット ----------
function mGaunt(f,c1,c2,w,pc,pu,aimT,M){
  const sp=f.a*1.2;
  for(const s of[-1,1]){rrp(s*30-(s<0?12:0),-40,12,80,4);cx.fillStyle=w?'#fff':'#1d2024';cx.fill();gOut(2);
    cx.strokeStyle='rgba(130,134,118,.75)';cx.lineWidth=1.4;cx.beginPath();for(let y=-40+(sp%6+6)%6;y<40;y+=6){cx.moveTo(s*30-(s<0?12:0),y);cx.lineTo(s*30+(s<0?0:12),y)}cx.stroke()}
  rrp(-27,-36,54,74,9);const g=cx.createLinearGradient(-27,0,27,0);g.addColorStop(0,c2);g.addColorStop(.5,c1);g.addColorStop(1,c2);cx.fillStyle=w?'#fff':g;cx.fill();gOut(2.4);
  cx.strokeStyle='rgba(16,20,12,.45)';cx.lineWidth=1;cx.beginPath();cx.moveTo(-27,-14);cx.lineTo(27,-14);cx.moveTo(-27,22);cx.lineTo(27,22);cx.stroke();
  for(const s of[-1,1]){cx.fillStyle=w?'#fff':'#2a2e36';cx.fillRect(s*16-4,-34,8,6);if(!w)flame(s*16,-36,3,7+Math.sin(t/3)*2,[120,120,120],-1)}
  M(()=>{cx.fillStyle=w?'#fff':'#3a414c';cx.fillRect(18,24,8,10);gOut(1.4)});
  const a=aimT(0,4);cx.save();cx.translate(0,4);cx.rotate(a);
  if(f.fc<10){glow(40,0,16,[255,200,120],.8)}
  for(const s of[-1,1]){cx.fillStyle=gC(w,'#22262c');cx.fillRect(10,s*5-2.6,28,5.2);cx.lineWidth=1.4;cx.strokeStyle='#0a0c10';cx.strokeRect(10,s*5-2.6,28,5.2);cx.fillStyle=w?'#fff':'#5a606a';cx.fillRect(34,s*5-3,4,6)}
  cx.beginPath();cx.arc(0,0,17,0,TAU);const g2=cx.createRadialGradient(-5,-6,2,0,0,18);g2.addColorStop(0,'#cfd6c4');g2.addColorStop(1,c2);cx.fillStyle=w?'#fff':g2;cx.fill();gOut(2.4);
  cx.fillStyle=w?'#fff':'#2a2e36';cx.fillRect(-12,-4,7,8);coreD(-8,0,3.4,pc,pu);cx.restore()}
function mortarD(){for(const m of MOR){const k=1-m.w/m.m,bl=Math.floor(t/4)%2;cx.save();cx.translate(m.x,m.y);
  cx.fillStyle=`rgba(255,80,60,${.1+.18*k})`;cx.beginPath();cx.arc(0,0,26,0,TAU);cx.fill();
  cx.strokeStyle=bl?'#ffd166':'#ff5d73';cx.lineWidth=2.2;cx.setLineDash([5,4]);cx.beginPath();cx.arc(0,0,26,0,TAU);cx.stroke();cx.setLineDash([]);
  cx.lineWidth=3;cx.strokeStyle='#fff3c4';cx.beginPath();cx.arc(0,0,26,-Math.PI/2,-Math.PI/2+TAU*k);cx.stroke();
  cx.lineWidth=1.6;cx.strokeStyle='rgba(255,230,200,.9)';cx.beginPath();for(const a of[0,1,2,3]){const c=Math.cos(a*Math.PI/2),s=Math.sin(a*Math.PI/2);cx.moveTo(c*10,s*10);cx.lineTo(c*20,s*20)}cx.stroke();
  cx.restore()}}

// ---------- boss 22: 陸上戦艦ベヒモス ----------
function bhmTur(f,q){return{x:f.x+q.ox,y:f.y+q.oy}}
function behem(f,p,pc,c,pu,M){
  const sp=f.a*.9;
  for(const s of[-1,1]){rrp(s*50-(s<0?20:0),-66,20,132,6);cx.fillStyle='#1b1e22';cx.fill();gOut(2.4);
    cx.strokeStyle='rgba(140,144,126,.8)';cx.lineWidth=2;cx.beginPath();for(let y=-66+(sp%8+8)%8;y<66;y+=8){cx.moveTo(s*50-(s<0?20:0)+2,y);cx.lineTo(s*50+(s<0?0:20)-2,y)}cx.stroke();
    cx.fillStyle='#3a3e44';for(const y of[-56,-28,0,28,56]){cx.beginPath();cx.arc(s*40,y,4,0,TAU);cx.fill()}}
  const P=[[-34,-72],[34,-72],[46,-50],[46,48],[30,74],[-30,74],[-46,48],[-46,-50]];
  poly(P);const g=cx.createLinearGradient(-46,0,46,0);g.addColorStop(0,'#2e3528');g.addColorStop(.5,'#7d8a6c');g.addColorStop(1,'#2e3528');cx.fillStyle=g;cx.fill();gOut(3);
  cx.save();poly(P);cx.clip();cx.strokeStyle='rgba(14,18,10,.45)';cx.lineWidth=1.2;cx.beginPath();for(const y of[-48,-20,30,54]){cx.moveTo(-46,y);cx.lineTo(46,y)}cx.moveTo(-22,-72);cx.lineTo(-22,74);cx.moveTo(22,-72);cx.lineTo(22,74);cx.stroke();
  cx.fillStyle='rgba(255,255,255,.08)';cx.fillRect(-46,-72,92,10);cx.restore();
  // bow armour pointing at the player
  poly([[-30,74],[30,74],[18,86],[-18,86]]);cx.fillStyle='#4a5440';cx.fill();gOut(2.4);
  // bridge tower
  rrp(-16,-62,32,26,5);const gb=cx.createLinearGradient(0,-62,0,-36);gb.addColorStop(0,'#aab6a0');gb.addColorStop(1,'#3a4434');cx.fillStyle=gb;cx.fill();gOut(2.2);
  cx.fillStyle='#7fe0ff';cx.fillRect(-11,-44,22,4);cx.strokeStyle='#0a2430';cx.lineWidth=1;cx.strokeRect(-11,-44,22,4);
  const bl=Math.floor(t/12)%2;for(const s of[-1,1]){cx.fillStyle=bl?'#ff5d73':'#5a1a22';cx.beginPath();cx.arc(s*12,-58,2.4,0,TAU);cx.fill();if(bl)glow(s*12,-58,8,[255,90,110],.7)}
  cx.strokeStyle='#1a1c20';cx.lineWidth=1.6;cx.beginPath();cx.moveTo(0,-62);cx.lineTo(0,-74);cx.moveTo(-5,-70);cx.lineTo(5,-70);cx.stroke();
  for(const s of[-1,1]){cx.fillStyle='#2a2e36';rrp(s*30-5,-70,10,12,2);cx.fill();gOut(1.4);flame(s*30,-72,3.5,8+Math.sin(t/3+s)*3,[110,110,110],-1)}
  // main twin cannon turret (aims at the player)
  const a=f.ta??Math.PI/2;cx.save();cx.translate(0,16);cx.rotate(a);
  if(f.mf>0){glow(66,0,22,[255,200,120],.9);cx.fillStyle='#fff3c4';for(const s of[-1,1])poly([[64,s*7.5-4],[76,s*7.5],[64,s*7.5+4]]);cx.fill()}
  for(const s of[-1,1]){const g=cx.createLinearGradient(0,s*7-4.5,0,s*7+4.5);g.addColorStop(0,'#8a929c');g.addColorStop(1,'#2a2e36');cx.fillStyle=g;cx.fillRect(14,s*7.5-4.5,48,9);cx.lineWidth=2;cx.strokeStyle='#0a0c10';cx.strokeRect(14,s*7.5-4.5,48,9);cx.fillStyle='#1a1c20';cx.fillRect(56,s*7.5-5.5,8,11);cx.strokeRect(56,s*7.5-5.5,8,11)}
  cx.beginPath();cx.arc(0,0,25,0,TAU);const gt=cx.createRadialGradient(-8,-9,3,0,0,26);gt.addColorStop(0,'#d6dcc8');gt.addColorStop(1,'#46503c');cx.fillStyle=gt;cx.fill();gOut(3);
  cx.strokeStyle='rgba(14,18,10,.5)';cx.lineWidth=1.2;cx.beginPath();cx.arc(0,0,17,0,TAU);cx.stroke();
  cx.fillStyle='#2a2e36';cx.fillRect(-20,-6,10,12);cx.restore();
  coreD(0,16,7,pc,pu)}
function pdGtr(f,q,P){const a=q.ba??Math.PI/2;cx.save();cx.rotate(a);cx.fillStyle='#20242a';for(const s of[-1,1])cx.fillRect(4,s*3.4-1.8,15,3.6);
  cx.beginPath();cx.arc(0,0,q.r-1,0,TAU);const g=cx.createRadialGradient(-3,-4,1,0,0,q.r);g.addColorStop(0,'#c6ccd4');g.addColorStop(1,'#3e4550');cx.fillStyle=q.fl>0?'#fff':g;cx.fill();gOut(2);
  cx.fillStyle='#ff5d73';cx.beginPath();cx.arc(-4,0,2,0,TAU);cx.fill();cx.restore()}
function pdGmo(f,q,P){const k=f.mo!=null?Math.max(0,1-f.mo/40):0,bl=k>0&&Math.floor(t/4)%2;rrp(-q.r,-q.r*.8,q.r*2,q.r*1.6,3);cx.fillStyle=q.fl>0?'#fff':'#4a5440';cx.fill();gOut(2);
  for(let i=0;i<3;i++)for(let j=0;j<2;j++){cx.beginPath();cx.arc(-7+i*7,-3.5+j*7,2.4,0,TAU);cx.fillStyle=bl?'#ffd166':'#14161a';cx.fill()}
  if(bl)glow(0,0,q.r*1.6,[255,160,80],.7)}
function bhmAI(b,dt){b.nc=1;b.gd=1;if(bEnter(b,dt,118,.85))return;
  b.x=W/2+Math.sin(b.a/160)*56;b.ta=gTurn(b.ta??Math.PI/2,aim(b.x,b.y+16),.035*dt);b.mf=(b.mf||0)-dt;
  for(const q of live(b,'gtr')){const P=partPos(b,q);q.ba=gTurn(q.ba??Math.PI/2,aim(P.x,P.y),.05*dt)}
  const p=b.hp/b.mh;
  if(live(b,'gmo').length&&p<.85){b.mo=(b.mo??110)-dt;if(b.mo<=0){b.mo=p>.45?230:180;mortar(ship.x,ship.y,74,p>.45?6:8);if(p<.33)mortar(ship.x+(ship.x<W/2?90:-90),ship.y-40,92,8)}}
  b.t-=dt;if(b.t>0)return;b.n++;const x=b.x+Math.cos(b.ta)*62,y=b.y+16+Math.sin(b.ta)*62,a=b.ta;
  if(p>.66){b.t=82;b.mf=8;if(b.n%3)for(let i=-2;i<=2;i++)fireS(10,x,y,a+i*.2,2.8);else for(let i=0;i<12;i++)fireS(10,b.x,b.y+16,i/14*TAU+b.n*.2,2)}
  else if(p>.33){const m=b.n%3;b.mf=8;if(m==0){b.t=66;for(let i=-2;i<=2;i++)fireS(10,x,y,a+i*.18,2.9)}else if(m==1){b.t=66;for(let i=0;i<14;i++)fireS(10,b.x,b.y+16,i/14*TAU+b.n*.13,2.1)}else{b.t=24;for(const o of[-.1,.1])fireS(10,x,y,a+o,3.2);if(b.n%6==2)b.t=56}}
  else{b.t=17;b.mf=4;fireS(10,x,y,a+Math.sin(b.n*.45)*.55,3);if(b.n%7==0)for(let i=0;i<10;i++)fireS(10,b.x,b.y+16,i/10*TAU+b.n*.1,2.1)}}
Object.assign(PDRAW,{gtr:pdGtr,gmo:pdGmo});
Object.assign(PFIRE,{gtr:(f,q,P,a)=>{if(!gAimOk(q.ba??a,a))return;for(const o of[-.12,.12])fireS(12,P.x,P.y,a+o,2.6)}});
{const m0=midSpawn;midSpawn=function(){m0();const f=fo[fo.length-1];if(f&&f.k=='z'&&f.st>=22){f.nc=1;f.gd=1}}}

// ---------- stage data (22..28). stages 2-7 are placeholders until they are built ----------
{const S1={f:'発進基地',w:{N:3.2,O:.8,P:2.6,Q:.5,U:2,d:1.5},es:1,sp:1,hn:'地上の敵は体当たりしてこない！'},
   SC1=[[60,'tr',[90,270]],[180,'hc',[180]],[320,'tk',[120,240]],[460,'cv',1],[580,'tr',[60,180,300]],[720,'hc',[100,260]],[860,'sm',[180]],[980,'tk',[80,280]],[1100,'dl',1],[1220,'tr',[120,240]],[1350,'mb'],
     [1480,'cv',-1],[1600,'tk',[180]],[1720,'hc',[90,270]],[1860,'tr',[60,300]],[1980,'sm',[120,240]],[2120,'tk',[100,260]],[2260,'dv'],[2400,'cv',1],[2520,'tr',[90,180,270]],[2660,'hc',[180]],[2800,'tk',[120,240]],[2940,'sm',[90,270]],[3080,'tr',[150,210]]],
   HX1=[[300,'tk',[60,300]],[900,'hc',[60,300]],[1700,'sm',[180]],[2400,'tk',[90,270]]],VX1=[[500,'sm',[60,300]],[1900,'hc',[120,240]]];
  const mb=MPAT.length;
  MPAT.push((f,x,y,a)=>{for(let i=-2;i<=2;i++)fireS(10,x,y,a+i*.2,2.7);f.nx=70},
    (f,x,y)=>{for(let i=0;i<12;i++)fireS(10,x,y,i/12*TAU+f.n*.2,2);f.nx=90},
    f=>{mkEn('P',f.x-50,f.y);mkEn('P',f.x+50,f.y);f.nx=140},
    f=>{mortar(ship.x,ship.y,80,8);f.nx=110});
  const PS=()=>[{ox:-34,oy:-30,r:12,kd:'gtr',cd:120,nm:'副砲',pp:bhmTur},{ox:34,oy:-30,r:12,kd:'gtr',cd:120,nm:'副砲',pp:bhmTur},{ox:0,oy:-22,r:12,kd:'gmo',cd:0,nm:'迫撃砲',pp:bhmTur}];
  for(let i=0;i<7;i++){
    STG.push(i?{...S1,f:'（制作中）',w:{...S1.w}}:S1);SCR.push(SC1);HX.push(HX1);VX.push(VX1);
    HPS.push([440,610,780,990,1150,1240,1950][i]);BN.push(i?'（制作中）':'陸上戦艦ベヒモス');MBN.push(i?'（制作中）':'ガントレット');MHP.push([95,145,195,260,300,290,365][i]);
    MP.push(['#a8b39a','#2a3324']);MC.push([255,176,96]);MSEQ.push([mb,mb+1,mb,mb+2,mb,mb+3]);MR.push(40);MART.push(mGaunt);MFS[22+i]=10;
    BR.push(58);BART.push(behem);BAI.push(bhmAI);BCOL.push([255,176,96]);BFS[22+i]=10;PSPEC.push(PS());FEAT.push(null)}}
