
// ===== stage 1 boss / mid-boss: detailed redesign =====
function camo(P,cols,seed){cx.save();poly(P);cx.clip();const r=gRng(seed);for(let i=0;i<14;i++){cx.fillStyle=cols[i%cols.length];cx.beginPath();const x=-60+r()*120,y=-90+r()*180;cx.ellipse(x,y,8+r()*16,5+r()*10,r()*3,0,TAU);cx.fill()}cx.restore()}
function trackUnit(x,y,w,h,sp,w0){rrp(x-w/2,y-h/2,w,h,4);cx.fillStyle=w0?'#fff':'#17191c';cx.fill();gOut(2);
  if(w0)return;cx.save();rrp(x-w/2,y-h/2,w,h,4);cx.clip();
  for(let yy=y-h/2+((sp%5)+5)%5-5;yy<y+h/2+5;yy+=5){cx.fillStyle='#2c3034';cx.fillRect(x-w/2,yy,w,2.6);cx.fillStyle='rgba(160,166,150,.55)';cx.fillRect(x-w/2+1,yy,w-2,.8)}
  cx.fillStyle='rgba(0,0,0,.45)';cx.fillRect(x-1,y-h/2,2,h);cx.restore();
  for(const yy of[y-h/2+3,y+h/2-3]){cx.save();cx.translate(x,yy);cx.rotate(sp/6);cx.fillStyle='#3a3e44';hx(0,0,w*.32,8,0);cx.fill();cx.strokeStyle='#0e1014';cx.lineWidth=1;cx.stroke();cx.fillStyle='#1a1c20';cx.beginPath();cx.arc(0,0,w*.12,0,TAU);cx.fill();cx.restore()}}
function fender(x,y,w,h,side){const P=[[x-w/2,y-h/2],[x+w/2,y-h/2+3],[x+w/2,y+h/2-3],[x-w/2,y+h/2]].map(([a,b])=>[side<0?2*x-a:a,b]);poly(P);cx.fillStyle=mtl(x-w/2,x+w/2,'#3e4836','#6e7c5c','#3e4836');cx.fill();gOut(1.6);
  rivets([[x,y-h/2+4],[x,y],[x,y+h/2-4]],.9);hi([[x-w/2+1,y-h/2+2,x-w/2+1,y+h/2-2]],.25)}
function brakeBarrel(len,wd,w){cx.fillStyle=w?'#fff':mtlV(-wd/2,wd/2,'#aab2bc','#4a525c','#1a1e24');cx.fillRect(0,-wd/2,len,wd);cx.lineWidth=1.2;cx.strokeStyle=GC0.dk;cx.strokeRect(0,-wd/2,len,wd);
  if(w)return;rrp(len*.42,-wd/2-1.3,len*.16,wd+2.6,2);cx.fillStyle=mtlV(-wd,wd,'#8a929c','#3a4048');cx.fill();cx.lineWidth=1;cx.stroke();
  cx.fillStyle='#14161a';cx.fillRect(len-1,-wd/2-2,6,wd+4);cx.strokeRect(len-1,-wd/2-2,6,wd+4);cx.fillStyle='#4a5058';cx.fillRect(len+.8,-wd/2-2,1.2,wd+4);cx.fillRect(len+2.8,-wd/2-2,1.2,wd+4);hi([[2,-wd/2+.8,len-2,-wd/2+.8]],.35)}
// ---------- mid-boss: 重戦車ガントレット ----------
function mGaunt2(f,c1,c2,w,pc,pu,aimT,M){const sp=f.a*1.3;
  for(const s2 of[-1,1]){trackUnit(s2*32,0,15,84,sp,w);if(!w){fender(s2*36,-22,8,30,s2);fender(s2*36,22,8,30,s2)}}
  const P=[[-24,-40],[24,-40],[27,-30],[27,28],[18,42],[-18,42],[-27,28],[-27,-30]];poly(P);cx.fillStyle=w?'#fff':mtl(-27,27,'#2e3828','#7c8a68','#2e3828');cx.fill();gOut(2.4);
  if(!w){camo(P,['rgba(58,70,44,.55)','rgba(110,96,62,.45)','rgba(34,42,28,.5)'],7);
    poly([[-18,30],[18,30],[18,42],[-18,42]]);cx.fillStyle='rgba(255,255,255,.08)';cx.fill();seams([[-27,28,27,28],[-24,-26,24,-26],[-27,-10,-22,-10],[27,-10,22,-10]],.45);
    vent(-18,-38,36,9,9);const hk=.5+.5*Math.sin(t/8);cx.fillStyle=`rgba(255,120,40,${.25+.25*hk})`;cx.fillRect(-17,-37,34,7);
    for(const s2 of[-1,1]){rrp(s2*13-3,-46,6,8,2);cx.fillStyle='#1a1c20';cx.fill();gOut(1);if(st=='play')smk(f.x+s2*13,f.y-48,2,.5);
      cx.fillStyle='#fff6c0';cx.beginPath();cx.arc(s2*15,40,2,0,TAU);cx.fill();glow(s2*15,44,10,[255,240,180],.4);
      cx.fillStyle='#2a2e26';cx.fillRect(s2*23-2,-22,4,10);cx.fillStyle='#4a5a3a';cx.fillRect(s2*22-3,8,6,8);gOut(1);
      cx.strokeStyle='#14161a';cx.lineWidth=1.6;cx.beginPath();cx.arc(s2*8,43,2.4,0,Math.PI);cx.stroke()}
    hzd(-18,33,36,3);rivets([[-22,-34],[22,-34],[-24,22],[24,22],[-20,36],[20,36]],.9)}
  const a=aimT(0,4);cx.save();cx.translate(0,4);cx.rotate(a);
  if(f.fc<10&&st=='play'){glow(46,0,18,[255,200,120],.9);cx.fillStyle='#fff3c4';for(const s2 of[-1,1])poly([[44,s2*6-4],[56,s2*6],[44,s2*6+4]]);cx.fill()}
  for(const s2 of[-1,1]){cx.save();cx.translate(10,s2*6);brakeBarrel(32,4.6,w);cx.restore()}
  const TP=[[-16,-14],[8,-16],[19,-9],[19,9],[8,16],[-16,14],[-21,6],[-21,-6]];poly(TP);const tg=cx.createRadialGradient(-6,-8,2,0,0,24);tg.addColorStop(0,'#d0d8c0');tg.addColorStop(1,c2);cx.fillStyle=w?'#fff':tg;cx.fill();gOut(2.4);
  if(!w){camo(TP,['rgba(58,70,44,.45)','rgba(110,96,62,.4)'],3);for(let i=0;i<3;i++)for(const s2 of[-1,1]){cx.fillStyle='#5a6648';cx.fillRect(10+i*3,s2*12-2,2.6,4);cx.strokeStyle='#1a1e14';cx.lineWidth=.6;cx.strokeRect(10+i*3,s2*12-2,2.6,4)}
    for(const s2 of[-1,1])for(let i=0;i<3;i++){cx.fillStyle='#22262a';cx.beginPath();cx.arc(-4+i*4,s2*15.5,1.4,0,TAU);cx.fill()}
    cx.save();cx.translate(-8,6);cx.beginPath();cx.arc(0,0,5,0,TAU);cx.fillStyle=mtl(-5,5,'#3a4434','#8a9878');cx.fill();gOut(1.2);for(let i=0;i<6;i++){const q=i/6*TAU;cx.fillStyle='#7fe0ff';cx.fillRect(Math.cos(q)*4-.6,Math.sin(q)*4-.6,1.2,1.2)}cx.restore();
    cx.fillStyle='#1a1c20';cx.fillRect(4,-10,8,3);cx.strokeStyle='#14161a';cx.lineWidth=.8;cx.beginPath();cx.moveTo(-14,-10);cx.lineTo(-26,-22);cx.moveTo(-15,-6);cx.lineTo(-30,-12);cx.stroke();
    seams([[-2,-15,-2,15]],.35);hi([[-14,-12,6,-14]],.4);vent(-19,-4,5,8,3)}
  coreD(-13,-6,3.6,pc,pu);cx.restore()}
// ---------- boss: 陸上戦艦ベヒモス ----------
function behem2(f,p,pc,c,pu,M){const sp=f.a*1.1,dmg=p<.5;
  for(const s2 of[-1,1])for(const y of[-46,42]){trackUnit(s2*52,y,22,58,sp,0);fender(s2*58,y,10,48,s2)}
  // lower hull
  const LH=[[-34,-84],[34,-84],[46,-70],[46,66],[34,80],[-34,80],[-46,66],[-46,-70]];
  cx.save();cx.translate(5,7);poly(LH);cx.fillStyle='rgba(0,0,0,.3)';cx.fill();cx.restore();
  poly(LH);cx.fillStyle=mtl(-46,46,'#283024','#5e6c4e','#283024');cx.fill();gOut(3);
  // ram / dozer blade at the bow
  poly([[-36,78],[36,78],[30,92],[-30,92]]);cx.fillStyle=mtlV(78,92,'#9aa28a','#4a5240');cx.fill();gOut(2.4);
  for(let i=0;i<7;i++){const x=-27+i*9;poly([[x-3,92],[x+3,92],[x,99]]);cx.fillStyle='#c8ccc0';cx.fill();gOut(1.2)}hzd(-34,80,68,4);
  // upper deck
  const UD=[[-28,-72],[28,-72],[36,-58],[36,54],[26,68],[-26,68],[-36,54],[-36,-58]];poly(UD);cx.fillStyle=mtl(-36,36,'#3a4632','#8a987a','#3a4632');cx.fill();gOut(2.6);
  camo(UD,['rgba(58,70,44,.5)','rgba(120,104,66,.38)','rgba(30,38,24,.45)'],11);
  seams([[-36,-30,36,-30],[-36,30,36,30],[-14,-72,-14,68],[14,-72,14,68]],.4);hi([[-26,-70,26,-70],[-34,-56,-34,52]],.3);
  rivets([[-32,-50],[32,-50],[-32,-10],[32,-10],[-32,44],[32,44],[-20,62],[20,62],[-24,-66],[24,-66]],1);
  cx.fillStyle='rgba(240,240,230,.55)';cx.font='bold 11px sans-serif';cx.textAlign='center';cx.fillText('01',-24,58);cx.fillText('01',24,58);
  // engine deck + stacks
  vent(-24,-82,48,10,12);const hk=.5+.5*Math.sin(t/7);cx.fillStyle=`rgba(255,110,40,${.22+.28*hk})`;cx.fillRect(-23,-81,46,8);glow(0,-77,26,[255,120,50],.25+.2*hk);
  for(const s2 of[-1,1]){rrp(s2*30-6,-90,12,14,3);cx.fillStyle=mtl(s2*30-6,s2*30+6,'#2a2e34','#5a6068');cx.fill();gOut(1.8);cx.fillStyle='#0c0d10';cx.beginPath();cx.ellipse(s2*30,-88,4,2.4,0,0,TAU);cx.fill();
    flame(s2*30,-92,3,6+Math.sin(t/3+s2)*2,[90,90,90],-1);if(st=='play')smk(f.x+s2*30,f.y-94,3,.8)}
  // AA sponsons tracking the player
  for(const s2 of[-1,1]){const x=s2*40,y=6,a=Math.atan2(ship.y-(f.y+y),ship.x-(f.x+x));cx.beginPath();cx.arc(x,y,8,0,TAU);cx.fillStyle=mtl(x-8,x+8,'#3a4434','#8a9878');cx.fill();gOut(1.8);
    cx.save();cx.translate(x,y);cx.rotate(a);for(const s3 of[-1,1]){cx.fillStyle='#22262c';cx.fillRect(3,s3*2-1,11,2);cx.strokeStyle=GC0.dk;cx.lineWidth=.8;cx.strokeRect(3,s3*2-1,11,2)}cx.beginPath();cx.arc(0,0,4.6,0,TAU);cx.fillStyle='#5a6650';cx.fill();gOut(1.2);cx.restore()}
  // bridge superstructure
  rrp(-18,-66,36,28,5);cx.fillStyle=mtlV(-66,-38,'#b8c2ae','#4a5640');cx.fill();gOut(2.2);
  rrp(-12,-74,24,16,4);cx.fillStyle=mtlV(-74,-58,'#d0d8c8','#6a7660');cx.fill();gOut(1.8);
  cx.fillStyle='#7fe0ff';cx.fillRect(-14,-46,28,4);cx.fillRect(-9,-63,18,3);cx.strokeStyle='#0a2430';cx.lineWidth=.8;cx.strokeRect(-14,-46,28,4);for(let i=-10;i<=10;i+=5){cx.beginPath();cx.moveTo(i,-46);cx.lineTo(i,-42);cx.stroke()}
  cx.save();cx.translate(0,-66);cx.rotate(t/16);cx.fillStyle='#e0e6ee';cx.beginPath();cx.ellipse(0,0,10,3,0,0,TAU);cx.fill();gOut(1);cx.fillStyle='#3a404a';cx.fillRect(-1,-1,2,2);cx.restore();
  cx.strokeStyle='#1a1c20';cx.lineWidth=1.3;cx.beginPath();cx.moveTo(-14,-66);cx.lineTo(-20,-84);cx.moveTo(14,-66);cx.lineTo(20,-84);cx.stroke();lamp(-20,-84,[255,90,110],16,0,1.8);lamp(20,-84,[120,255,160],16,8,1.8);
  for(const s2 of[-1,1]){cx.save();cx.translate(s2*18,-40);cx.rotate(Math.PI/2+s2*.3+Math.sin(t/50)*.2);cx.fillStyle='rgba(255,250,210,.07)';poly([[0,0],[-10,60],[10,60]]);cx.fill();cx.restore();cx.fillStyle='#fff8d0';cx.beginPath();cx.arc(s2*18,-40,2.2,0,TAU);cx.fill()}
  // main triple turret (aims at the player)
  const a=f.ta??Math.PI/2;cx.save();cx.translate(0,16);cx.rotate(a);
  if(f.mf>0){glow(70,0,26,[255,200,120],.95);cx.fillStyle='#fff3c4';for(const s3 of[-1,0,1])poly([[66,s3*9-4],[80,s3*9],[66,s3*9+4]]);cx.fill()}
  for(const s3 of[-1,0,1]){cx.save();cx.translate(18,s3*9);brakeBarrel(44,6.2,0);cx.restore()}
  for(const s3 of[-1,1]){cx.save();cx.translate(-2,s3*27);cx.beginPath();cx.ellipse(0,0,9,4,0,0,TAU);cx.fillStyle=mtl(-9,9,'#3a4048','#a0a8b2');cx.fill();gOut(1.4);cx.fillStyle='#7fe0ff';cx.beginPath();cx.arc(8,0,1.6,0,TAU);cx.fill();cx.restore()}
  const TP=[[-24,-22],[10,-25],[26,-14],[26,14],[10,25],[-24,22],[-30,9],[-30,-9]];poly(TP);const tg=cx.createRadialGradient(-10,-12,3,0,0,34);tg.addColorStop(0,'#dde4d0');tg.addColorStop(.6,'#7a8868');tg.addColorStop(1,'#323c2a');cx.fillStyle=tg;cx.fill();gOut(3);
  camo(TP,['rgba(58,70,44,.42)','rgba(120,104,66,.34)'],5);
  for(let i=0;i<4;i++)for(const s3 of[-1,1]){cx.fillStyle='#5e6a4e';cx.fillRect(12+i*3.4,s3*17-2.5,3,5);cx.strokeStyle='#1a1e14';cx.lineWidth=.6;cx.strokeRect(12+i*3.4,s3*17-2.5,3,5)}
  seams([[-6,-24,-6,24],[-30,0,-14,0]],.35);hi([[-22,-19,8,-22]],.45);rivets([[-20,-16],[-20,16],[4,-20],[4,20],[18,-10],[18,10]],.9);
  cx.save();cx.translate(-16,-8);cx.beginPath();cx.arc(0,0,6,0,TAU);cx.fillStyle=mtl(-6,6,'#3a4434','#9aa888');cx.fill();gOut(1.4);for(let i=0;i<7;i++){const q=i/7*TAU;cx.fillStyle='#7fe0ff';cx.fillRect(Math.cos(q)*4.8-.6,Math.sin(q)*4.8-.6,1.2,1.2)}cx.restore();
  vent(-28,4,8,10,3);cx.strokeStyle='#14161a';cx.lineWidth=.9;cx.beginPath();cx.moveTo(-26,-14);cx.lineTo(-40,-30);cx.stroke();lamp(-40,-30,[255,90,110],12,0,1.3);
  cx.beginPath();cx.arc(4,0,8,0,TAU);cx.fillStyle='#1a1e24';cx.fill();cx.lineWidth=1.6;cx.strokeStyle='#5a6068';cx.stroke();cx.restore();
  coreD(Math.cos(a)*4,16+Math.sin(a)*4,6,pc,pu);
  if(dmg){for(const[x,y]of[[-24,-20],[22,38],[-10,50]]){const fl=Math.floor(t/3+x)%3;glow(x,y,10,[255,140,40],.6+.2*fl);cx.fillStyle=fl?'#ffb347':'#ff6a1a';cx.beginPath();cx.arc(x,y,2.6+fl,0,TAU);cx.fill();if(st=='play')smk(f.x+x,f.y+y,4,1)}}}
function pdGtr2(f,q,P){const a=q.ba??Math.PI/2,w=q.fl>0,spc=f.bt>=27;cx.beginPath();cx.arc(0,0,q.r+2,0,TAU);cx.fillStyle=w?'#fff':spc?'#4a525e':'#3a4434';cx.fill();gOut(1.6);
  cx.save();cx.rotate(a);for(const s2 of[-1,1]){cx.fillStyle=w?'#fff':mtlV(-2,2,'#aab2bc','#2a2e36');cx.fillRect(4,s2*3.6-1.8,15,3.6);cx.lineWidth=.9;cx.strokeStyle=GC0.dk;cx.strokeRect(4,s2*3.6-1.8,15,3.6);cx.fillStyle='#14161a';cx.fillRect(17,s2*3.6-2.3,3,4.6)}
  turretHead(q.r-1.5,spc?'#dde4ee':'#cfd6c4',spc?'#3e4654':'#3e4a34',w);if(!w){cx.fillStyle=GC0.red;cx.fillRect(-q.r*.75,-1.6,3,3.2);glow(-q.r*.6,0,6,[255,90,110],.6)}cx.restore()}
function pdGmo2(f,q,P){const k=f.mo!=null?Math.max(0,1-f.mo/40):0,bl=k>0&&Math.floor(t/4)%2,w=q.fl>0;
  rrp(-q.r-2,-q.r,q.r*2+4,q.r*2,4);cx.fillStyle=w?'#fff':mtl(-q.r,q.r,'#3a4434','#7a8868');cx.fill();gOut(2);if(w)return;
  hzd(-q.r-2,q.r-3,q.r*2+4,3);for(let i=0;i<3;i++)for(let j=0;j<2;j++){const x=-8+i*8,y=-5+j*8;cx.beginPath();cx.arc(x,y,3.2,0,TAU);cx.fillStyle='#22262c';cx.fill();cx.lineWidth=1;cx.strokeStyle='#5a6068';cx.stroke();cx.fillStyle=bl?'#ffd166':'#0c0d10';cx.beginPath();cx.arc(x,y,1.8,0,TAU);cx.fill()}
  if(bl)glow(0,0,q.r*1.8,[255,160,80],.75);lamp(q.r,-q.r+2,[255,90,110],10,0,1.3)}
BART[22]=behem2;MART[15]=mGaunt2;PDRAW.gtr=pdGtr2;PDRAW.gmo=pdGmo2;
