
// ===== stage 2 boss: 航空母艦アルバトロス (replaces 多脚戦車アラクネ) + 艦載機 j =====
EMK.j=(x,y)=>add({k:'j',x:cl(x,24,W-24),y:Math.min(y,-20),r:11,mh:3,pts:90,vx:0,vy:3,nx:0,sh:0,hd:Math.PI/2,tw:R()<.5?-1:1});
function mvj(f,dt){if(f.a<40){f.vx+=cl((ship.x-f.x)*.002,-.06,.06)*dt;f.vx=cl(f.vx,-1.6,1.6)}f.vy=Math.min(3.4,f.vy+.03*dt);f.x+=f.vx*dt;f.y+=f.vy*dt;f.hd=Math.atan2(f.vy,f.vx);
  if(!f.sh&&f.y>60&&f.y<H*.5){f.sh=1;const a=aim(f.x,f.y);for(const s2 of[-1,1])msl(f.x+s2*6,f.y+6,a+s2*.08,2.1,0)}if(f.y>H+40)f.dead=1}
function dj(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);cx.rotate(f.hd-Math.PI/2);
  glow(0,-16,9,[255,150,80],.7);cx.fillStyle='rgba(255,170,90,.9)';for(const s2 of[-1,1])poly([[s2*3-1.6,-13],[s2*3,-19-R()*4],[s2*3+1.6,-13]]);cx.fill();
  poly([[0,15],[3,7],[14,-4],[14,-8],[4,-6],[5,-12],[2,-14],[-2,-14],[-5,-12],[-4,-6],[-14,-8],[-14,-4],[-3,7]]);
  const g=cx.createLinearGradient(-14,0,14,0);g.addColorStop(0,'#2a2e36');g.addColorStop(.5,'#8a929e');g.addColorStop(1,'#2a2e36');cx.fillStyle=w?'#fff':g;cx.fill();gOut(1.6);
  cx.fillStyle=w?'#fff':'#d8424a';for(const s2 of[-1,1])poly([[s2*10,-4],[s2*14,-4],[s2*14,-7]]);cx.fill();
  for(const s2 of[-1,1]){cx.fillStyle=w?'#fff':'#3a404a';poly([[s2*3,-9],[s2*7,-15],[s2*5,-15],[s2*2,-11]]);cx.fill();gOut(1)}
  cx.beginPath();cx.ellipse(0,5,2.2,4.6,0,0,TAU);cx.fillStyle=w?'#fff':'#7fe0ff';cx.fill();cx.lineWidth=1;cx.strokeStyle='#0a2430';cx.stroke();
  cx.fillStyle='rgba(255,255,255,.35)';cx.fillRect(-.6,-10,1.2,8);
  for(const s2 of[-1,1]){cx.fillStyle='#f2f4f6';cx.fillRect(s2*9-.8,-3,1.6,5);cx.fillStyle='#e23a48';cx.fillRect(s2*9-.8,2,1.6,1.4)}
  cx.restore()}
EMV.j=mvj;EDR.j=dj;Object.assign(EBG,{j:2});Object.assign(ECAP,{j:4});Object.assign(KC,{j:'#ffb3a0'});FSM.j=11;WV.jt=xs=>xs.forEach(x=>mkEn('j',x));
// --- carrier art
function carDeckJet(x,y,a,sc){cx.save();cx.translate(x,y);cx.rotate(a);cx.scale(sc,sc);poly([[0,8],[2,3],[8,-2],[8,-4],[2,-3],[2,-7],[-2,-7],[-2,-3],[-8,-4],[-8,-2],[-2,3]]);cx.fillStyle='#6a727e';cx.fill();cx.lineWidth=1;cx.strokeStyle='#14161a';cx.stroke();cx.fillStyle='#7fe0ff';cx.fillRect(-.8,1,1.6,3);cx.restore()}
function albatross(f,p,pc,c,pu,M){const L=126,Wd=46;
  cx.fillStyle='rgba(235,245,255,.32)';poly([[-40,-L+4],[40,-L+4],[70,-L-60],[-70,-L-60]]);cx.fill();
  cx.strokeStyle='rgba(235,245,255,.5)';cx.lineWidth=2;for(const s2 of[-1,1]){cx.beginPath();cx.moveTo(s2*18,L-6);cx.quadraticCurveTo(s2*44,L-40,s2*52,-20);cx.stroke()}
  const H0=[[0,L],[Wd*.62,L-34],[Wd,L-90],[Wd,-L+20],[Wd*.8,-L],[-Wd*.8,-L],[-Wd,-L+20],[-Wd,L-90],[-Wd*.62,L-34]];
  cx.save();cx.translate(5,7);poly(H0);cx.fillStyle='rgba(0,10,20,.4)';cx.fill();cx.restore();
  poly(H0);const gh=cx.createLinearGradient(-Wd,0,Wd,0);gh.addColorStop(0,'#2a3038');gh.addColorStop(.12,'#4a525c');gh.addColorStop(.88,'#4a525c');gh.addColorStop(1,'#2a3038');cx.fillStyle=gh;cx.fill();gOut(3);
  const D=[[0,L-8],[Wd*.56,L-38],[Wd-6,L-92],[Wd-6,-L+22],[Wd*.76,-L+6],[-Wd*.76,-L+6],[-Wd-6+12,-L+22],[-Wd-6+12,L-92],[-Wd*.56,L-38]];
  poly(D);cx.fillStyle='#3a3e44';cx.fill();cx.save();poly(D);cx.clip();
  cx.fillStyle='rgba(255,255,255,.035)';for(let y=-L;y<L;y+=8)cx.fillRect(-Wd,y,Wd*2,4);
  cx.strokeStyle='rgba(240,240,230,.75)';cx.lineWidth=1.4;cx.beginPath();cx.moveTo(-Wd+10,-L+30);cx.lineTo(18,L-30);cx.moveTo(-Wd+26,-L+20);cx.lineTo(34,L-48);cx.stroke();
  cx.setLineDash([7,6]);cx.strokeStyle='#ffd166';cx.lineWidth=1.6;cx.beginPath();cx.moveTo(-Wd+18,-L+26);cx.lineTo(26,L-40);cx.stroke();cx.setLineDash([]);
  for(const s2 of[-1,1]){cx.strokeStyle='rgba(30,30,30,.8)';cx.lineWidth=2.4;cx.beginPath();cx.moveTo(s2*10-4,L-18);cx.lineTo(s2*14-4,L-84);cx.stroke();cx.strokeStyle='rgba(255,209,102,.7)';cx.lineWidth=.8;cx.stroke()}
  cx.fillStyle='rgba(240,240,230,.8)';cx.font='bold 13px sans-serif';cx.textAlign='center';cx.save();cx.translate(-12,-L+44);cx.rotate(Math.PI);cx.fillText('07',0,0);cx.restore();
  for(const[x,y]of[[-Wd+8,-24],[-Wd+8,34]]){cx.fillStyle='#2e3238';cx.fillRect(x,y,20,20);cx.strokeStyle='rgba(255,209,102,.6)';cx.lineWidth=1;cx.strokeRect(x+1,y+1,18,18)}
  const nj=f.jets??5;for(let i=0;i<nj;i++)carDeckJet(-20+(i%2)*14,-L+54+i*16,Math.PI/2+.5,1.15);
  cx.restore();
  // island superstructure
  rrp(Wd-26,-46,22,64,4);const gi=cx.createLinearGradient(Wd-26,0,Wd-4,0);gi.addColorStop(0,'#c4ccd6');gi.addColorStop(1,'#5a6270');cx.fillStyle=gi;cx.fill();gOut(2.2);
  cx.fillStyle='#7fe0ff';for(let i=0;i<4;i++)cx.fillRect(Wd-23,-38+i*12,16,3);
  cx.fillStyle='#2a2e36';rrp(Wd-21,-62,12,14,3);cx.fill();gOut(1.4);flame(Wd-15,-64,4,9+Math.sin(t/3)*3,[110,110,110],-1);
  cx.save();cx.translate(Wd-15,8);cx.rotate(t/18);cx.fillStyle='#d0d8e2';cx.fillRect(-9,-1.6,18,3.2);gOut(1);cx.restore();
  cx.strokeStyle='#1a1c20';cx.lineWidth=1.6;cx.beginPath();cx.moveTo(Wd-15,-46);cx.lineTo(Wd-15,-56);cx.stroke();
  const bl=Math.floor(t/12)%2;cx.fillStyle=bl?'#ff5d73':'#5a1a22';cx.beginPath();cx.arc(Wd-15,-30,2.2,0,TAU);cx.fill();if(bl)glow(Wd-15,-30,8,[255,90,110],.7);
  // catapult steam when launching
  if(f.lc2>0){for(const s2 of[-1,1]){const k=f.lc2/30;cx.fillStyle=`rgba(240,245,250,${.6*k})`;cx.beginPath();cx.ellipse(s2*12-4,L-30-(1-k)*50,6+(1-k)*6,10,0,0,TAU);cx.fill()}}
  coreD(-8,6,7,pc,pu)}
function albTur(f,q){return{x:f.x+q.ox,y:f.y+q.oy}}
function albAI(b,dt){b.nc=1;b.gd=1;if(bEnter(b,dt,104,.75))return;b.x+=((thB==23?gRiverX(gWy(b.y)):W/2)-b.x)*.03*dt;b.jets=b.jets??5;
  for(const q of live(b,'gtr')){const P=partPos(b,q);q.ba=gTurn(q.ba??Math.PI/2,aim(P.x,P.y),.05*dt)}
  const p=b.hp/b.mh;b.lc2=(b.lc2||0)-dt;
  b.jt=(b.jt??90)-dt;if(b.jt<=0){b.jt=p>.5?230:180;const n=p>.5?1:2;for(let i=0;i<n&&cnt('j')<4;i++){const o=mkEn('j',b.x+(i?14:-14));o.y=b.y+110;o.vy=1.6;o.vx=(i?1:-1)*.6;if(b.jets>1)b.jets--}b.lc2=30;sfx('warn2')}
  b.t-=dt;if(b.t>0)return;b.n++;const a=aim(b.x+30,b.y-10);
  if(p>.66){b.t=88;const m=b.n%3;if(m==0)for(let i=-2;i<=2;i++)fireS(10,b.x+30,b.y-10,a+i*.18,2.6);else if(m==1)for(let i=0;i<4;i++)msl(b.x-30+i*14,b.y+20,Math.PI/2+(i-1.5)*.35,1.8,i==1||i==2?1:0);else for(let i=0;i<12;i++)fireS(12,b.x,b.y,i/12*TAU+b.n*.2,1.9)}
  else if(p>.33){b.t=72;const m=b.n%3;if(m==0){msl(b.x,b.y+60,aim(b.x,b.y+60),1.35,2);for(const s2 of[-1,1])msl(b.x+s2*40,b.y,Math.PI/2+s2*.7,1.8,1)}else if(m==1)for(let i=-3;i<=3;i++)fireS(10,b.x+30,b.y-10,a+i*.15,2.7);else for(let i=0;i<6;i++)msl(b.x-35+i*14,b.y-30,Math.PI/2+(i-2.5)*.3,1.7,i%2)}
  else{b.t=22;const s2=b.n%2?1:-1;fireS(12,b.x+s2*34,b.y+70,aim(b.x+s2*34,b.y+70)+Math.sin(b.n*.4)*.4,2.8);if(b.n%6==0)for(let i=0;i<4;i++)msl(b.x-21+i*14,b.y,Math.PI/2+(i-1.5)*.4,1.8,1);if(b.n%11==5)msl(b.x,b.y+60,aim(b.x,b.y+60),1.35,2)}}
{const T=23;BN[T]='航空母艦アルバトロス';BART[T]=albatross;BAI[T-7]=albAI;BR[T]=58;BCOL[T]=[150,200,255];HPS[T]=610;
  PSPEC[T]=[{ox:-34,oy:70,r:12,kd:'gtr',cd:120,nm:'CIWS',pp:albTur},{ox:34,oy:74,r:12,kd:'gtr',cd:120,nm:'CIWS',pp:albTur},{ox:-30,oy:-100,r:12,kd:'gms2',cd:210,nm:'ミサイル発射機',pp:albTur},{ox:30,oy:-100,r:12,kd:'gms2',cd:210,nm:'ミサイル発射機',pp:albTur}];
  if(window.C0ZK)C0ZK[0][1]='大河をさかのぼる巨大な航空母艦。甲板から艦載機を次々と発進させ、ミサイルを雨のように撃ちこんでくる。4つの砲台とミサイル発射機を先に壊すと楽になる。';
  STG[T].w.j=1;STG[T].f='大河と森';STG[T].hn='大河をさかのぼる艦隊に注意！'}
