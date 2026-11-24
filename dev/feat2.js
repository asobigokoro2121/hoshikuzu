
// ===== v2 additions: boss rush / charge shot / stage ranks / boss finisher / enemy encyclopedia =====
var RUSH=0,RU=null,PRB=0,chg=0,chgN=0,SLO=0,RKS=[],RK0=null,RKP=[],RKID=0,RKG={},SPN=0,rkB=null,ZE=0,ZEK=null;
Object.assign(SX,{
  cfull:p=>{const C=muKey(),b=C.r+36;[0,1,2].forEach((j,i)=>{const f=sxF(b+C.t[j]);tone(f,f,.12,'sine',.05,i*.04,p);tone(f*2,f*2,.06,'triangle',.016,i*.04,p)})},
  cshot:p=>{tone(260,1300,.16,'sawtooth',.06,0,p,{lp:3200});tone(130,60,.3,'triangle',.12,0,p);noise(.25,.12,2400,0,p,'bandpass',1.2,600)},
  fin:p=>{muDuck(.2,1.1);tone(1800,200,.5,'sine',.08,0,p);noise(.5,.2,5000,0,p,'highpass');tone(55,30,1.2,'sine',.32,.05,0)},
  rank:p=>{const C=muKey(),b=C.r+24;[0,1,2,3].forEach(i=>{const f=sxF(b+(i<3?C.t[i]:12));tone(f,f,.22,'triangle',.06,i*.07,p);tone(f*2,f*2,.12,'sine',.02,i*.07+.02,p)})}});
Object.assign(SXT,{cfull:200,cshot:120,fin:300,rank:400});

// ---------- 7. boss finisher: slow motion + white flash on the killing blow ----------
function finStart(f){if(st!='play')return;const last=PRC?LT(PRC.T):(co>3||stg>=6);SLO=last?72:54;bfl=Math.max(bfl,last?30:22);shake=Math.max(shake,22);sfx('fin',f.x);
  pt.push({x:f.x,y:f.y,vx:0,vy:0,l:30,m:30,c:'#fff',ring:f.r*2.4,lw:5},{x:f.x,y:f.y,vx:0,vy:0,l:22,m:22,c:'#fff3b0',ring:f.r*1.4,lw:3});
  for(let i=0;i<18;i++){const a=R()*TAU,v=2+R()*5;pt.push({x:f.x,y:f.y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:34,m:34,k:'s',c:R()<.5?'#fff':'#fff3b0',sz:2.4,dg:.93})}
  if(RU)RU.lt.push(RU.t)}
function sloF(){return SLO>36?.22:.22+.78*(1-SLO/36)}

// ---------- 3. charge shot: keep focus mode on, then let go (each ship has its own kind) ----------
// n name, ch charge frames, k pellets/angles, m damage mult, r hit radius, v speed, s draw scale, colours
const CBS=[
 {n:'メガブラスト',tip:'離すと特大チャージ弾！',ch:90,an:[0],m:1.5,r:26,v:7,s:1.4,c1:'#ffe08a',c2:'#ff8a2a',ol:'#3a1600',g:[255,190,80],t:[255,150,50],ring:'#ffb340'},
 {n:'スプレッド',tip:'離すと3方向チャージ弾！',ch:55,an:[-.22,0,.22],m:.4,r:14,v:11,s:.75,c1:'#c8f8ff',c2:'#2aaeff',ol:'#04203c',g:[120,215,255],t:[60,170,255],ring:'#5ad2ff'},
 {n:'ガードバースト',tip:'離すと周りの敵弾も消える！',ch:90,an:[0],m:1,r:24,v:9,s:1,c1:'#dcffb8',c2:'#36d26a',ol:'#06280f',g:[140,255,150],t:[60,220,110],ring:'#6ee68a',clr:110},
 {n:'ノヴァ',tip:'離すと爆裂チャージ弾！',ch:75,an:[0],m:1.2,r:20,v:9,s:1.1,c1:'#f2dcff',c2:'#a055ff',ol:'#1c0636',g:[205,150,255],t:[160,90,255],ring:'#c08cff',nova:78}];
const CB=()=>CBS[si]||CBS[0];
function cbName(i){return['メガブラスト','スプレッド','ガードバースト','ノヴァ'][i]||''}
const cbRG=(c,a)=>'rgba('+c[0]+','+c[1]+','+c[2]+','+a+')';
function chgUpd(dt){cbHits();if(gO>0||st!='play'||PRC&&PRC.k){chg=0;return}const C=CB();
  if(fcs()){const was=chg<C.ch;chg=Math.min(C.ch,chg+dt);if(was&&chg>=C.ch){sfx('cfull',ship.x);pt.push({x:ship.x,y:ship.y,vx:0,vy:0,l:16,m:16,c:C.ring,ring:22});
      if(chgN<2){chgN++;pt.push({x:ship.x,y:ship.y-42,vx:0,vy:-.4,l:80,m:80,c:'#fff3b0',txt:C.tip,fs:12})}}}
  else{if(chg>=C.ch)chgFire();chg=0}}
function chgFire(){const C=CB(),dm=12*(1+GL()*.15)*C.m;
  for(const a of C.an)bl.push({x:ship.x+Math.sin(a)*10,y:ship.y-26,vx:Math.sin(a)*C.v,vy:Math.cos(a)*C.v,dm,pi:1,h:new Set(),CB:1,cr:C.r,cs:si});
  sfx('cshot',ship.x);shake=Math.max(shake,5);ship.mf=8;pt.push({x:ship.x,y:ship.y-12,vx:0,vy:0,l:18,m:18,c:C.ring,ring:36,lw:5});
  for(let i=0;i<12;i++)pt.push({x:ship.x+(R()-.5)*16,y:ship.y-22,vx:(R()-.5)*1.8,vy:-1-R()*2.4,l:20,m:20,k:'s',c:R()<.5?'#fff':C.c1,sz:2.2,dg:.93});
  if(C.clr){let n=0;for(const q of eb)if(!q.d&&Math.hypot(q.x-ship.x,q.y-ship.y)<C.clr){q.d=1;n++;if(n<40)pt.push({x:q.x,y:q.y,vx:0,vy:-.6,l:16,m:16,k:'s',c:'#dcffb8',sz:2.4,dg:.9})}
    pt.push({x:ship.x,y:ship.y,vx:0,vy:0,l:24,m:24,c:'#6ee68a',ring:C.clr,lw:5},{x:ship.x,y:ship.y,vx:0,vy:0,l:16,m:16,c:'#ffffff',ring:C.clr*.6,lw:3})}}
// hit effects (and the nova blast) are handled in the update, not in drawing
function cbHits(){for(const b of bl){if(!b.CB||b.d)continue;if(b.hn===b.h.size)continue;const was=b.hn||0;b.hn=b.h.size;if(b.hn<=was)continue;
  const C=CBS[b.cs]||CBS[0];for(let i=0;i<12;i++){const a=R()*TAU,v=1.5+R()*3.2;pt.push({x:b.x,y:b.y-10,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:22,m:22,k:'s',c:R()<.5?C.c1:'#fff',sz:2.6,dg:.9})}
  pt.push({x:b.x,y:b.y-10,vx:0,vy:0,l:16,m:16,c:C.ring,ring:30*C.s,lw:4});
  if(C.nova){pt.push({x:b.x,y:b.y-8,vx:0,vy:0,l:22,m:22,c:'#c08cff',ring:C.nova,lw:6},{x:b.x,y:b.y-8,vx:0,vy:0,l:14,m:14,c:'#ffffff',ring:C.nova*.55,lw:3});sfx('zap',b.x);
    for(const f of fo){if(f.dead||f.dy||f.y<0||f.gh||b.h.has(f))continue;if(Math.hypot(f.x-b.x,f.y-b.y)>C.nova+f.r)continue;b.h.add(f);f.hp-=b.dm*SP().dm*.6*shieldF(f);if(f.fl<-5)f.fl=3;if(f.hp<=0)kill(f)}b.hn=b.h.size}}}
function cbD(b){const C=CBS[b.cs]||CBS[0],x=b.x,y=b.y,th=Math.atan2(b.vx,b.vy),age=b.age=(b.age||0)+1,L=Math.min(110,age*12);
  const P=pts=>{cx.beginPath();pts.forEach((q,i)=>i?cx.lineTo(q[0],q[1]):cx.moveTo(q[0],q[1]));cx.closePath()};
  const tail=(w0,w1,len)=>P([[-w0,0],[w0,0],[w1,len],[-w1,len]]);
  const grad=(y0,y1,st)=>{const g=cx.createLinearGradient(0,y0,0,y1);st.forEach(([o,c])=>g.addColorStop(o,c));return g};
  cx.save();cx.translate(x,y);cx.rotate(th);cx.globalCompositeOperation='source-over';cx.lineJoin='round';cx.lineCap='round';
  if(b.cs==1){ // ---- スプレッド: slim needle with swept fins and twin contrails
    cx.fillStyle='rgba(8,16,30,.45)';tail(5,1,L*.9+4);cx.fill();
    cx.strokeStyle=cbRG(C.t,.55);cx.lineWidth=1.6;for(const s of[-1,1]){cx.beginPath();cx.moveTo(s*6,8);cx.lineTo(s*3,L*.75);cx.stroke()}
    cx.fillStyle=grad(0,L*.9,[[0,cbRG(C.g,.9)],[1,cbRG(C.t,0)]]);tail(3,.4,L*.9);cx.fill();
    const N=[[0,-24],[3,-9],[3.2,2],[9,10],[3,7],[0,12],[-3,7],[-9,10],[-3.2,2],[-3,-9]];
    P(N);cx.fillStyle=grad(-24,12,[[0,'#ffffff'],[.4,C.c1],[1,C.c2]]);cx.fill();cx.lineWidth=2;cx.strokeStyle=C.ol;cx.stroke();
    cx.fillStyle='#ffffff';P([[0,-20],[1.4,-8],[0,0],[-1.4,-8]]);cx.fill();
    cx.restore();glow(x,y-6,22,C.g,.85)}
  else if(b.cs==2){ // ---- ガードバースト: crescent shock wave with after-images
    for(let j=2;j>=0;j--){const off=j*11,al=j?.3/j:1;cx.save();cx.translate(0,off);cx.globalAlpha=al;
      cx.beginPath();cx.arc(0,20,30,-Math.PI*.86,-Math.PI*.14);cx.arc(0,26,20,-Math.PI*.2,-Math.PI*.8,true);cx.closePath();
      if(!j){cx.save();cx.lineWidth=7;cx.strokeStyle='rgba(4,20,10,.45)';cx.stroke();cx.restore()}
      cx.fillStyle=grad(-12,10,[[0,'#ffffff'],[.35,C.c1],[1,C.c2]]);cx.fill();if(!j){cx.lineWidth=2;cx.strokeStyle=C.ol;cx.stroke()}cx.restore()}
    for(let i=-2;i<=2;i++){const a=-Math.PI/2+i*.36,r=25;const hx2=Math.cos(a)*r,hy=20+Math.sin(a)*r;cx.save();cx.translate(hx2,hy);cx.rotate(a+Math.PI/2);
      cx.fillStyle='rgba(255,255,255,.85)';P([[0,-3],[2.6,-1.5],[2.6,1.5],[0,3],[-2.6,1.5],[-2.6,-1.5]]);cx.fill();cx.restore()}
    cx.restore();glow(x,y-6,34,C.g,.8)}
  else if(b.cs==3){ // ---- ノヴァ: spinning four-point star with an orbiting ring
    const sp=t*.12;cx.fillStyle='rgba(16,6,30,.4)';cx.beginPath();cx.arc(0,0,17,0,TAU);cx.fill();
    cx.save();cx.rotate(sp);const star=(R1,R2,n)=>{const q=[];for(let i=0;i<n*2;i++){const a=i*Math.PI/n,r=i%2?R2:R1;q.push([Math.sin(a)*r,-Math.cos(a)*r])}P(q)};
    star(24,6,4);cx.fillStyle=grad(-24,24,[[0,'#ffffff'],[.5,C.c1],[1,C.c2]]);cx.fill();cx.lineWidth=2;cx.strokeStyle=C.ol;cx.stroke();
    cx.rotate(Math.PI/4);star(12,4,4);cx.fillStyle='#ffffff';cx.fill();cx.restore();
    cx.save();cx.rotate(-th);cx.scale(1,.38);cx.rotate(-sp*.6);cx.strokeStyle=cbRG(C.g,.85);cx.lineWidth=2.2;cx.beginPath();cx.arc(0,0,22,0,TAU);cx.stroke();
    for(let i=0;i<2;i++){const a=sp*2.2+i*Math.PI;cx.fillStyle='#ffffff';cx.beginPath();cx.arc(Math.cos(a)*22,Math.sin(a)*22,3.2,0,TAU);cx.fill()}cx.restore();
    cx.restore();glow(x,y,36,C.g,.9);
    if(R()<.8)pt.push({x:x+(R()-.5)*10,y:y+8,vx:(R()-.5)*.8,vy:.8+R(),l:24,m:24,k:'s',c:R()<.5?'#ffffff':C.c1,sz:2.4,dg:.95})}
  else{ // ---- メガブラスト: big fireball with a flaming tail and rotating flame petals
    cx.fillStyle='rgba(30,8,0,.42)';tail(20,5,L+8);cx.fill();cx.beginPath();cx.arc(0,0,21,0,TAU);cx.fill();
    cx.fillStyle=grad(0,L,[[0,cbRG(C.g,.95)],[.5,cbRG(C.t,.6)],[1,cbRG(C.t,0)]]);tail(16,2.5,L);cx.fill();
    for(let i=-1;i<=1;i++){cx.strokeStyle=i?'rgba(255,120,40,.7)':'rgba(255,230,150,.8)';cx.lineWidth=i?3:2.5;cx.beginPath();cx.moveTo(i*8,6);
      for(let s=1;s<=6;s++){const yy=s*L/7;cx.lineTo(i*8*(1-s/7)+Math.sin(t*.5+s+i*2)*4,yy)}cx.stroke()}
    cx.save();cx.rotate(t*.08);for(let i=0;i<8;i++){cx.rotate(TAU/8);cx.fillStyle=i%2?C.c2:'#ffcf5a';P([[-4.5,-14],[0,-24-(i%2?0:3)],[4.5,-14]]);cx.fill()}cx.restore();
    {const g=cx.createRadialGradient(-3,-4,1,0,0,17);g.addColorStop(0,'#ffffff');g.addColorStop(.35,'#fff0a8');g.addColorStop(.7,C.c1);g.addColorStop(1,C.c2);cx.fillStyle=g}
    cx.beginPath();cx.arc(0,0,17,0,TAU);cx.fill();cx.lineWidth=2.4;cx.strokeStyle=C.ol;cx.stroke();
    cx.restore();glow(x,y,48,C.g,.95);
    if(R()<.7)pt.push({x:x+(R()-.5)*20,y:y+10,vx:(R()-.5)*1.4,vy:1+R()*1.6,l:16,m:16,k:'s',c:R()<.5?'#ffd166':'#ff7a2a',sz:2.4,dg:.92})}}
function chgD(){if(st!='play'||chg<12||gO>0)return;const C=CB(),k=chg/C.ch,full=k>=1;cx.save();cx.translate(ship.x,ship.y);cx.lineCap='round';
  cx.lineWidth=7;cx.strokeStyle='rgba(10,6,24,.55)';cx.beginPath();cx.arc(0,0,25,0,TAU);cx.stroke();
  cx.lineWidth=3.5;cx.strokeStyle='rgba(255,255,255,.2)';cx.beginPath();cx.arc(0,0,25,0,TAU);cx.stroke();
  cx.strokeStyle=full?(Math.floor(t/4)%2?'#ffffff':C.ring):C.ring;cx.beginPath();cx.arc(0,0,25,-Math.PI/2,-Math.PI/2+TAU*k);cx.stroke();
  if(full){glow(0,-4,34,C.g,.5+.25*Math.sin(t/3));for(let i=0;i<4;i++){const a=t/10+i*Math.PI/2;cx.fillStyle=C.c1;cx.beginPath();cx.arc(Math.cos(a)*25,Math.sin(a)*25,2.6,0,TAU);cx.fill()}}
  cx.restore()}

// ---------- 4. stage ranks (S / A / B / C) ----------
function rkReset(){RKS=[];RKP=[];RKG={};SPN=0;RKID=0;rkB=null;SLO=0;chg=0;rkBegin()}
function rkBegin(){RK0={ms:stat.ms||0,bu:stat.bu||0,k:stat.k||0,n:SPN};RKID++;RKG[RKID]={n:0,g:0}}
function rkFreeze(f){if(PRC||RU||!RK0)return;RKP.push({id:RKID,s:co>3?-1:stg,h:(stat.ms||0)-RK0.ms,b:(stat.bu||0)-RK0.bu,k:(stat.k||0)-RK0.k,n:SPN-RK0.n,t:0})}
function rkCalc(p){const g=RKG[p.id]||{n:0,g:0},kr=p.n>0?Math.min(1,p.k/p.n):1,gr=g.n>0?Math.min(1,g.g/g.n):1;
  const s=(p.h<=0?40:p.h==1?22:p.h==2?10:0)+(p.b<=0?15:p.b==1?8:0)+25*Math.min(1,kr/.85)+20*gr;return s>=88?'S':s>=65?'A':s>=45?'B':'C'}
const RKO='SABC';
function rkKey(){return 'hoshikuzu-rank-c'+CK(co)+'-d'+di}
function rkBest(){let s='';try{s=localStorage.getItem(rkKey())||''}catch(e){}const n=co>3?1:7;return(s+'-------').slice(0,n)}
function rkDone(p,show){const r=rkCalc(p),i=p.s<0?0:p.s;RKS.push({s:p.s,r});
  try{const b=rkBest().split('');if(b[i]=='-'||RKO.indexOf(r)<RKO.indexOf(b[i])){b[i]=r;localStorage.setItem(rkKey(),b.join(''))}}catch(e){}
  if(r=='S')achGet('rs');if(show){rkB={r,s:p.s,l:180};sfx('rank')}}
function rkTick(dt){if(!RKP.length)return;for(const p of RKP){p.t+=dt;if(p.t>=60&&(p.t>=420||!orbs.some(o=>o.k=='g'&&o.rs==p.id))){p.ok=1;rkDone(p,true)}}RKP=RKP.filter(p=>!p.ok)}
function rkFlush(v){for(const p of RKP)rkDone(p,false);RKP=[];
  if(v&&RU)achGet('ru');
  if(v&&!PRC&&!RU&&!fr0&&co<4&&RKS.length>=7&&RKS.every(x=>x.r=='S'))achGet('ra')}
const RKC={S:'#ffd166',A:'#7df9ff',B:'#9be15d',C:'#aab4e8'};
function rkD(){if(!rkB)return;if(st!='play'){if(st!='pause')rkB=null;return}const q=rkB;q.l-=1;const el=180-q.l,a=Math.max(0,Math.min(1,el/12,q.l/24)),y=150-(1-Math.min(1,el/14))*16;
  cx.save();cx.globalAlpha=a;const w=168,x=W/2-w/2;cx.fillStyle='rgba(10,8,30,.88)';rrp(x,y-22,w,44,14);cx.fill();cx.lineWidth=1.5;cx.strokeStyle=RKC[q.r];cx.stroke();
  cx.textBaseline='middle';cx.textAlign='left';cx.font='13px DotGothic16,sans-serif';cx.fillStyle='#dde3ff';cx.fillText((q.s<0?'EX':'第'+(q.s+1)+'面')+'　評価',x+16,y+1);
  cx.textAlign='center';cx.font='30px DotGothic16,sans-serif';cx.shadowColor=RKC[q.r];cx.shadowBlur=(q.r=='S'?16:8)*PXS;cx.fillStyle=RKC[q.r];const sc=1+Math.max(0,1-el/10)*.6;cx.translate(x+w-34,y+1);cx.scale(sc,sc);cx.fillText(q.r,0,0);cx.restore();
  if(q.l<=0)rkB=null}
function rkHTML(){if(PRC||RU||!RKS.length)return '';const L=co>3?['EX']:['1','2','3','4','5','6','7'],now={};for(const x of RKS)now[x.s<0?0:x.s]=x.r;const bs=rkBest();
  const row=(lab,f)=>'<div class="rs-rk"><i>'+lab+'</i>'+L.map((n,i)=>{const r=f(i);return '<span><small>'+n+'</small><b class="rk'+(r||'-')+'">'+(r||'－')+'</b></span>'}).join('')+'</div>';
  return row('面ごとの評価',i=>now[i])+row('ベスト',i=>bs[i]!='-'?bs[i]:'')}

// ---------- 1. boss rush ----------
function rushOk(){return co<4&&cu>co}
function rushBest(){try{return +localStorage.getItem('hoshikuzu-rush-c'+CK(co)+'-d'+di)||0}catch(e){return 0}}
function rushUI(){const b=$('rsh');if(!b)return;const ok=rushOk();if(!ok&&RUSH)RUSH=0;b.hidden=co>3;b.disabled=!ok;b.setAttribute('aria-pressed',!!RUSH);
  b.innerHTML=ok?'ボスラッシュ'+(RUSH?'<small>ON</small>':''):'🔒 ボスラッシュ';b.title=ok?'':'このコースをクリアすると解放';
  $('stp').classList.toggle('off',!!RUSH);
  if(RUSH){const bt=rushBest();$('stn').textContent='道中なしでボス7体と連戦！　'+(bt?'ベスト '+prFmt(bt):'クリアタイムを記録')}
  if(st=='title')$('ovb').textContent=RUSH?'ボスラッシュ開始':'ゲーム開始'}
function rushStart(){RU=null;if(!RUSH||PRB||!rushOk())return;RU={t:0,lt:[],c:co};stg=0;fr0=98;thA=thB=gi();stT=3300-150;sci=1e9;pl=Math.max(pl,3);stat.mx=pl;bm=Math.min(5,bm+1);msg='ボスラッシュ　'+CN[co];mt=140}
function rushTick(dt){if(RU&&st=='play')RU.t+=dt}
function ruResult(v,nu){window.ovLock=performance.now()+500;const k=RU.lt.length;let bt=rushBest(),nb=false;
  if(v&&(!bt||RU.t<bt)){nb=true;bt=RU.t;try{localStorage.setItem('hoshikuzu-rush-c'+CK(co)+'-d'+di,Math.round(RU.t))}catch(e){}}
  show(v?'ボスラッシュ制覇！':'ボスラッシュ終了','','もう一度',0,nb?'ベスト更新！':'',1);ov.classList.add('res');
  const R=$('ovr');R.hidden=false;const sp=RU.lt.map((x,i)=>[BN[TB(co)+i],x-(i?RU.lt[i-1]:0)]);
  R.innerHTML='<div class="rs-sc"><small>BOSS RUSH</small><b>'+(v?prFmt(RU.t):k+' / 7体')+'</b><span>'+(v?(nb?'自己ベストを更新！':'ベスト '+prFmt(bt)):(bt?'ベスト '+prFmt(bt):'撃破数'))+'</span></div>'
   +'<p class="rs-w">'+CN[co]+'　'+(v?'ボス7体をすべて撃破！':'第'+(k+1)+'戦で力尽きた')+'</p>'
   +(sp.length?'<div class="rs-sp">'+sp.map(([n,x],i)=>'<div><i>'+(i+1)+'. '+n+'</i><b>'+prFmt(x)+'</b></div>').join('')+'</div>':'')
   +'<div class="rs-g">'+[['被弾',(stat.ms||0)+'回'],['ボム使用',(stat.bu||0)+'回']].map(([a,b])=>'<div><i>'+a+'</i><b>'+b+'</b></div>').join('')+'</div>'
   +'<p class="rs-m">ボスラッシュ　'+D().n+'　'+SP().n+'</p>'+(nu?'<p class="rs-u">'+nu.split('\n').filter(Boolean).join('<br>')+'</p>':'');
  $('ovb').focus({preventScroll:true});requestAnimationFrame(()=>{try{$('ovb').scrollIntoView({block:'nearest'})}catch(e){}})}
$('rsh').addEventListener('click',()=>{if(!rushOk())return;au();sfx('sel');RUSH=RUSH?0:1;setSs(ss)});
document.querySelectorAll('#stp button').forEach(b=>b.addEventListener('click',()=>{if(RUSH){RUSH=0;setSs(ss)}}));

// ---------- 8. enemy encyclopedia ----------
const ZEL=[
 ['N','砲台','地上に据えつけられた砲台。砲身をこちらへ向けてから、1発ずつ撃ってくる。','ヒント：砲身の向きを見て、撃たれる前に横へずれよう。',0],
 ['O','対空陣地','ミサイルを積んだ地上陣地。赤いランプが点滅したあと、3方向に弾を撃つ。','ヒント：点滅が見えたら、真正面から外れよう。',0],
 ['P','戦車','地上を走り回る戦車。砲塔をこちらへ回して撃ってくる。','ヒント：体当たりはしてこない。上を飛び越えて撃とう。',0],
 ['Q','補給トラック','3台で横切っていく補給部隊。アイテムを落としやすい。','ヒント：画面を出ていく前に、まとめて撃とう。',0],
 ['U','攻撃ヘリ','降りてきて空中で止まり、3方向に弾を2回撃って帰っていく。','ヒント：止まった瞬間がねらい目。弾の間は広い。',0],
 ['F','対空機関砲','土のうに囲まれた機関砲。こちらを向くと曳光弾を3連射する。','ヒント：連射は直線。撃たれたら横へ1歩ずれよう。',0,23],
 ['V','河川砲艇','川の流れに沿って進む小型の砲艇。砲塔で狙い撃つ。','ヒント：川の上を飛んで、先回りして撃とう。',0,23],
 ['G','駆逐艦','2つの砲塔を持つ軍艦。前と後ろの砲塔が交互に撃ってくる。','ヒント：体力が多い。正面に張りついて撃ちこもう。',0,24],
 ['L','沿岸砲台','海岸の大砲。ランプが点滅したあと、5方向に砲弾を撃つ。','ヒント：扇の外側へ回りこめば当たらない。',0,24],
 ['R','屋上ミサイル','ビルの屋上の発射台。点滅のあと、ミサイルを2発撃つ。','ヒント：ミサイルは遅い。煙の向きを見てよけよう。',0,25],
 ['S','装甲列車','右の線路を走る3両編成の列車。砲塔車と機銃車が撃ってくる。','ヒント：線路の上から離れて、横から撃とう。',0,25],
 ['T','山頂砲台','雲から突き出た山の上の砲台。3方向に砲弾を撃つ。','ヒント：砲身の向きをよく見て動こう。',0,26],
 ['Y','飛行船','ゆっくり降りてくる大きな飛行船。全方位弾を撃ち、攻撃ヘリを出す。','ヒント：体力が多い。早めに集中して撃とう。',0,26],
 ['W','軌道砲台','宇宙に浮かぶ砲台。狙い撃ちと全方位の曳光弾を撃ち分ける。','ヒント：全方位弾はすき間が広い。落ち着いてくぐろう。',0,27],
 ['X','昇降ポッド','軌道エレベーターを降りてくるポッド。回りながら6方向に撃つ。','ヒント：エレベーターの真下に立たないようにしよう。',0,27],
 ['Z','衛星砲台','回る太陽電池の翼を持つ衛星。十字に弾を撃つ。','ヒント：十字の間はすき間。回る向きに合わせて動こう。',0,28],
 ['d','ダート','自機めがけて斜めに突っ込んでくる小型機。5機の編隊で来ることもある。','ヒント：真正面に立たず、横へずれてかわそう。',1],
 ['w','スワロー','横から波打つように編隊で飛んでくる。真下を通るときに1発だけ撃つ。','ヒント：編隊の真下に入らなければ怖くない。',1],
 ['u','ユーフォー','左右にゆらゆら揺れながら降りてきて、自機をねらい撃つ。','ヒント：揺れの端で止まる一瞬がねらい目。',1],
 ['m','機雷','ゆっくり降りながら、自機のほうへ寄ってくる。','ヒント：近づかれる前に撃ち落とそう。',1],
 ['g','ガンシップ','画面の上のほうに陣取って左右に動き、3方向に弾を撃つ。しばらくすると去っていく。','ヒント：弾の間は広い。すき間に入って撃ち返そう。',1],
 ['s','スナイパー','照準を合わせてから、速い弾を撃つ。2発撃つと引き上げる。','ヒント：照準の線が見えたら横へ動こう。',1],
 ['t','スピナー','くるくる回りながら、2方向に弾をまき続ける。','ヒント：弾は渦を巻いて広がる。中心から離れて回りこもう。',1],
 ['x','クリスタル','回りながら4方向に弾を撃つ。倒すと破片が3つ飛び散る。','ヒント：遠くで倒せば、破片をよけやすい。',1],
 ['y','結晶の破片','クリスタルを倒すと飛び散る破片。自機のほうへ飛んでくる。','ヒント：撃てば壊せる。まとめて片づけよう。',1],
 ['k','チャージャー','狙いを定めると、自機めがけて一直線に突進してくる。','ヒント：光ってから突っ込むまでに横へ動こう。',1],
 ['h','シールド艦','回る盾で弾を防ぎながら、5方向に弾を撃つ。','ヒント：盾のすき間がこちらを向いたときに撃ちこもう。',1],
 ['q','サーペント','長い胴体をくねらせて降りてくる。3方向に弾を撃つ。','ヒント：胴体のどこに当ててもダメージが入る。',1],
 ['e','パルサー','止まって力をためたあと、全方位にリング状の弾を放つ。','ヒント：リングには切れ目がある。そこへ逃げこもう。',1],
 ['c','シーカー','左右に跳ね回りながら、追いかけてくる弾を撃つ。','ヒント：大きく動けば追尾弾は振り切れる。',1],
 ['v','ファントム','姿を消して別の場所に現れ、3方向に弾を撃つ。','ヒント：消えたら、次に現れる位置を見てから動こう。',1],
 ['f','ボマー','画面を横切りながら、時限爆弾を落としていく。','ヒント：落とした爆弾は撃って壊せる。',1],
 ['i','時限爆弾','ボマーが落とす爆弾。しばらくすると8方向に弾をまき散らす。','ヒント：爆発する前に撃ち落とそう。',1],
 ['n','キャリア','大型の母艦。左右に動きながら、子機を2機ずつ送り出す。','ヒント：硬い。子機を減らしつつ集中攻撃しよう。',1],
 ['o','子機','キャリアから発進し、自機めがけて飛んでくる。','ヒント：発進した直後に撃ち落とすのが安全。',1],
 ['l','ランサー','照準を合わせたあと、画面をつらぬく太いレーザーを撃つ。','ヒント：照準の線が見えたら、その線から外れよう。',1],
 ['r','隕石','大小さまざまな岩。大きいほど硬い。ボス戦の最中にも降ってくる。','ヒント：ボス戦中に壊すとアイテムが出やすい。',1],
 ['A','スノーフレーク','回りながら漂う雪の結晶。大きいものは6方向に弾を撃ち、倒すと小さな結晶に分かれる。','ヒント：分かれた小さな結晶は弾を撃たない。',2],
 ['B','フロストガード','5方向に弾を撃つ。弾はいったん止まってから急に加速する。','ヒント：弾が止まったら、加速する前に位置を変えよう。',2],
 ['C','ツインビット','2機一組で現れ、間に電撃のビームを張る。','ヒント：どちらか1機を倒せばビームは消える。',2],
 ['D','氷河砲台','氷の装甲をまとった砲台。装甲が砕けると速くなり、10方向に弾をまき散らす。','ヒント：装甲が砕けたら距離をとろう。',2],
 ['E','ウィスプ','円を描きながら漂う小さな光。ときどき自機をねらって撃つ。','ヒント：動きが読みにくい。横に広い攻撃で落とそう。',2],
 ['H','ファイアバード','3羽で波打ちながら横切り、火の粉を落としていく。','ヒント：真下を通るときにも1発撃ってくる。',3],
 ['I','マグマブロブ','ゆっくり降りながら、溶岩の弾を山なりに打ち上げる。','ヒント：落ちてくる場所を見てよけよう。',3],
 ['J','フレイムリザード','画面の端を這うように降りてきて、4連射を撃つ。','ヒント：撃つ前に光る。端に寄りすぎないこと。',3],
 ['K','火炎砲台','ゆっくり狙いを合わせて、炎を吹きつける。','ヒント：炎は遠くまで届かない。離れて撃とう。',3],
 ['M','不死鳥のヒナ','倒すと卵になり、時間内に壊さないと復活する。','ヒント：卵になったら、すぐ撃って完全撃破しよう。',3]];
function zeLoad(){ZEK={};try{for(const c of(localStorage.getItem('hoshikuzu-zke')||''))ZEK[c]=1}catch(e){}for(const e of ZEL)if(window.DBG||cu>e[4])ZEK[e[0]]=1}
function zeMark(k){if(!ZEK)zeLoad();if(ZEK[k]||!ZEL.some(e=>e[0]==k))return;ZEK[k]=1;try{localStorage.setItem('hoshikuzu-zke',Object.keys(ZEK).join(''))}catch(e){}if(ZEL.every(e=>ZEK[e[0]]))achGet('ze')}
function zeMake(k){fo=[];const y=H*.36;
  if(k=='w')add({k:'w',s:1,y0:y,tau:60,x:W/2,y,r:11,mh:2,pts:40,hd:0});
  else if(k=='i')add({k:'i',x:W/2,y,r:7,mh:1,vy:0,fu:1e9,pts:10});
  else if(k=='o')add({k:'o',x:W/2,y,r:8,mh:1,ang:Math.PI/2,pts:20});
  else if(k=='y')add({k:'y',x:W/2,y,r:7,mh:1,vx:0,vy:0,rot:0,pts:15});
  else mkEn(k,W/2,y);
  const n=fo.length;fo.forEach((f,i)=>{if(k!='C')f.x=W/2+(i-(n-1)/2)*(k=='H'?58:0);f.y=y;f.a=300;f.fl=-9;f.fc=0;if(f.la==null)f.la=Math.PI/2;f.zs=Math.max(1.5,Math.min(2.6,34/f.r));if(k=='H')f.hd=0;if(k=='o')f.ang=Math.PI/2;if(k=='f')f.vx=0;
    if(k=='q'){f.hist=[];for(let j=0;j<70;j++)f.hist.push([W/2+Math.sin(j/9)*18,y-j*1.1]);f.sg=[];for(let j=7;j<f.hist.length;j+=7)f.sg.push(f.hist[j])}})}
function zeGo(i){if(!ZEK)zeLoad();const n=ZEL.length;zkI=(i%n+n)%n;const e=ZEL[zkI],got=!!ZEK[e[0]];co=e[4];stg=0;thA=thB=e[5]??TB(e[4]);tk=1;if(typeof nebPrio=='function')nebPrio();zeMake(e[0]);
  $('zkh').querySelector('b').textContent='敵図鑑';$('zks').textContent='コース'+(e[4]+1)+'「'+CN[e[4]]+'」から登場';
  $('zkn').textContent=got?e[1]:'？？？';$('zkn').classList.toggle('lk',!got);$('zkd').textContent=got?e[2]+'\n'+e[3]:'まだ倒していない。倒すと解説が読める。';$('zkd').classList.toggle('lk',!got);
  $('zki').textContent=(zkI+1)+' / '+n;$('zkc').textContent='登録 '+ZEL.filter(x=>ZEK[x[0]]).length+' / '+n;
  document.querySelectorAll('#zkcos button').forEach(b=>b.setAttribute('aria-selected',b.dataset.c=='5'));zkLock=!got;$('zkpr').hidden=true}
function zkGo(i){if(ZE)return zeGo(i);zkGoB(i)}

// ---------- fewer enemy bullets overall ----------
// regular enemies: every 10th bullet of each kind is skipped (telegraphed snipers / lancers excepted)
// bosses / mid-bosses: rings and fans of 6+ bullets lose about 1 in 10
var EBT=0,EBC={};
function ebThin(){const G={};for(const q of eb){if(q._s)continue;q._s=1;if(q.fx||q.d||q.hm)continue;const s=q._src;
    if(s&&s!='b'&&s!='z'){if(s=='s'||s=='l')continue;EBC[s]=(EBC[s]||0)+1;if(EBC[s]%10==0)q.d=1;continue}
    const k=Math.round(q.x/14)+','+Math.round(q.y/14);(G[k]||(G[k]=[])).push(q)}
  for(const k in G){const g=G[k];if(g.length<6)continue;const o=(EBT++)%10;for(let i=o;i<g.length;i+=10)g[i].d=1}}
ACH.push(['rs','最高評価','面の評価で「S」を取る'],['ra','完全なる航路','1回のプレイでコースの全7面を「S」評価でクリア'],['ru','ボスラッシュ制覇','ボスラッシュでボス7体をすべて倒す'],['ze','雑魚敵博士','敵図鑑の雑魚敵31種をすべて登録']);
rushUI();$('sfd').textContent=SP().ds+'｜'+cbName(si);
