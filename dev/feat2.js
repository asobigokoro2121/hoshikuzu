
// ===== v2 additions: boss rush / charge shot / stage ranks / boss finisher / enemy encyclopedia =====
var RUSH=0,RU=null,PRB=0,chg=0,chgN=0,SLO=0,RKS=[],RK0=null,RKP=[],RKID=0,RKG={},SPN=0,rkB=null,ZE=0,ZEK=null;
Object.assign(SX,{
  cfull:p=>{const C=muKey(),b=C.r+36;[0,1,2].forEach((j,i)=>{const f=sxF(b+C.t[j]);tone(f,f,.12,'sine',.05,i*.04,p);tone(f*2,f*2,.06,'triangle',.016,i*.04,p)})},
  cshot:p=>{tone(260,1300,.16,'sawtooth',.06,0,p,{lp:3200});tone(130,60,.3,'triangle',.12,0,p);noise(.25,.12,2400,0,p,'bandpass',1.2,600)},
  fin:p=>{muDuck(.2,1.1);tone(1800,200,.5,'sine',.08,0,p);noise(.5,.2,5000,0,p,'highpass');tone(55,30,1.2,'sine',.32,.05,0)},
  rank:p=>{const C=muKey(),b=C.r+24;[0,1,2,3].forEach(i=>{const f=sxF(b+(i<3?C.t[i]:12));tone(f,f,.22,'triangle',.06,i*.07,p);tone(f*2,f*2,.12,'sine',.02,i*.07+.02,p)})}});
Object.assign(SXT,{cfull:200,cshot:120,fin:300,rank:400});

// ---------- 7. boss finisher: slow motion + white flash on the killing blow ----------
function finStart(f){if(st!='play')return;const last=PRC?(PRC.T%7==6||PRC.T==21):(co>2||stg>=6);SLO=last?72:54;bfl=Math.max(bfl,last?30:22);shake=Math.max(shake,22);sfx('fin',f.x);
  pt.push({x:f.x,y:f.y,vx:0,vy:0,l:30,m:30,c:'#fff',ring:f.r*2.4,lw:5},{x:f.x,y:f.y,vx:0,vy:0,l:22,m:22,c:'#fff3b0',ring:f.r*1.4,lw:3});
  for(let i=0;i<18;i++){const a=R()*TAU,v=2+R()*5;pt.push({x:f.x,y:f.y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:34,m:34,k:'s',c:R()<.5?'#fff':'#fff3b0',sz:2.4,dg:.93})}
  if(RU)RU.lt.push(RU.t)}
function sloF(){return SLO>36?.22:.22+.78*(1-SLO/36)}

// ---------- 3. charge shot: keep focus mode on, then let go ----------
const CHF=90;
function chgUpd(dt){if(gO>0||st!='play'||PRC&&PRC.k){chg=0;return}
  if(fcs()){const was=chg<CHF;chg=Math.min(CHF,chg+dt);if(was&&chg>=CHF){sfx('cfull',ship.x);pt.push({x:ship.x,y:ship.y,vx:0,vy:0,l:16,m:16,c:'#fff3b0',ring:22});
      if(chgN<2){chgN++;pt.push({x:ship.x,y:ship.y-42,vx:0,vy:-.4,l:80,m:80,c:'#fff3b0',txt:'離すとチャージ弾！',fs:12})}}}
  else{if(chg>=CHF)chgFire();chg=0}}
function chgFire(){bl.push({x:ship.x,y:ship.y-26,vx:0,vy:12,dm:12*(1+GL()*.15),pi:1,h:new Set(),CB:1});sfx('cshot',ship.x);shake=Math.max(shake,4);ship.mf=8;
  for(let i=0;i<12;i++)pt.push({x:ship.x+(R()-.5)*16,y:ship.y-22,vx:(R()-.5)*1.8,vy:-1-R()*2.4,l:20,m:20,k:'s',c:R()<.5?'#fff3b0':'#ffd166',sz:2.2,dg:.93})}
function cbD(b){const y=b.y,x=b.x;
  {const g=cx.createLinearGradient(0,y,0,y+46);g.addColorStop(0,'rgba(255,214,110,.75)');g.addColorStop(1,'rgba(255,150,60,0)');cx.fillStyle=g;cx.beginPath();cx.moveTo(x-11,y);cx.lineTo(x+11,y);cx.lineTo(x+3,y+46);cx.lineTo(x-3,y+46);cx.closePath();cx.fill()}
  glow(x,y,30,[255,210,110],.85);
  {const g=cx.createRadialGradient(x,y-2,1,x,y,15);g.addColorStop(0,'#ffffff');g.addColorStop(.45,'#fff3b0');g.addColorStop(1,'rgba(255,190,80,0)');cx.fillStyle=g;cx.beginPath();cx.arc(x,y,15,0,TAU);cx.fill()}
  cx.fillStyle='#fff';cx.beginPath();cx.moveTo(x,y-17);cx.lineTo(x+6,y-2);cx.lineTo(x,y+6);cx.lineTo(x-6,y-2);cx.closePath();cx.fill()}
function chgD(){if(st!='play'||chg<12||gO>0)return;const k=chg/CHF,full=k>=1;cx.save();cx.translate(ship.x,ship.y);cx.lineCap='round';
  cx.lineWidth=3;cx.strokeStyle='rgba(255,243,176,.22)';cx.beginPath();cx.arc(0,0,23,0,TAU);cx.stroke();
  cx.strokeStyle=full?(Math.floor(t/4)%2?'#ffffff':'#ffd166'):'#ffd166';cx.beginPath();cx.arc(0,0,23,-Math.PI/2,-Math.PI/2+TAU*k);cx.stroke();
  if(full)glow(0,-6,30,[255,220,120],.45+.25*Math.sin(t/3));cx.restore()}

// ---------- 4. stage ranks (S / A / B / C) ----------
function rkReset(){RKS=[];RKP=[];RKG={};SPN=0;RKID=0;rkB=null;SLO=0;chg=0;rkBegin()}
function rkBegin(){RK0={ms:stat.ms||0,bu:stat.bu||0,k:stat.k||0,n:SPN};RKID++;RKG[RKID]={n:0,g:0}}
function rkFreeze(f){if(PRC||RU||!RK0)return;RKP.push({id:RKID,s:co>2?-1:stg,h:(stat.ms||0)-RK0.ms,b:(stat.bu||0)-RK0.bu,k:(stat.k||0)-RK0.k,n:SPN-RK0.n,t:0})}
function rkCalc(p){const g=RKG[p.id]||{n:0,g:0},kr=p.n>0?Math.min(1,p.k/p.n):1,gr=g.n>0?Math.min(1,g.g/g.n):1;
  const s=(p.h<=0?40:p.h==1?22:p.h==2?10:0)+(p.b<=0?15:p.b==1?8:0)+25*Math.min(1,kr/.85)+20*gr;return s>=88?'S':s>=65?'A':s>=45?'B':'C'}
const RKO='SABC';
function rkKey(){return 'hoshikuzu-rank-c'+co+'-d'+di}
function rkBest(){let s='';try{s=localStorage.getItem(rkKey())||''}catch(e){}const n=co>2?1:7;return(s+'-------').slice(0,n)}
function rkDone(p,show){const r=rkCalc(p),i=p.s<0?0:p.s;RKS.push({s:p.s,r});
  try{const b=rkBest().split('');if(b[i]=='-'||RKO.indexOf(r)<RKO.indexOf(b[i])){b[i]=r;localStorage.setItem(rkKey(),b.join(''))}}catch(e){}
  if(r=='S')achGet('rs');if(show){rkB={r,s:p.s,l:180};sfx('rank')}}
function rkTick(dt){if(!RKP.length)return;for(const p of RKP){p.t+=dt;if(p.t>=60&&(p.t>=420||!orbs.some(o=>o.k=='g'&&o.rs==p.id))){p.ok=1;rkDone(p,true)}}RKP=RKP.filter(p=>!p.ok)}
function rkFlush(v){for(const p of RKP)rkDone(p,false);RKP=[];
  if(v&&RU)achGet('ru');
  if(v&&!PRC&&!RU&&!fr0&&co<3&&RKS.length>=7&&RKS.every(x=>x.r=='S'))achGet('ra')}
const RKC={S:'#ffd166',A:'#7df9ff',B:'#9be15d',C:'#aab4e8'};
function rkD(){if(!rkB)return;if(st!='play'){if(st!='pause')rkB=null;return}const q=rkB;q.l-=1;const el=180-q.l,a=Math.max(0,Math.min(1,el/12,q.l/24)),y=150-(1-Math.min(1,el/14))*16;
  cx.save();cx.globalAlpha=a;const w=168,x=W/2-w/2;cx.fillStyle='rgba(10,8,30,.88)';rrp(x,y-22,w,44,14);cx.fill();cx.lineWidth=1.5;cx.strokeStyle=RKC[q.r];cx.stroke();
  cx.textBaseline='middle';cx.textAlign='left';cx.font='13px DotGothic16,sans-serif';cx.fillStyle='#dde3ff';cx.fillText((q.s<0?'EX':'第'+(q.s+1)+'面')+'　評価',x+16,y+1);
  cx.textAlign='center';cx.font='30px DotGothic16,sans-serif';cx.shadowColor=RKC[q.r];cx.shadowBlur=(q.r=='S'?16:8)*PXS;cx.fillStyle=RKC[q.r];const sc=1+Math.max(0,1-el/10)*.6;cx.translate(x+w-34,y+1);cx.scale(sc,sc);cx.fillText(q.r,0,0);cx.restore();
  if(q.l<=0)rkB=null}
function rkHTML(){if(PRC||RU||!RKS.length)return '';const L=co>2?['EX']:['1','2','3','4','5','6','7'],now={};for(const x of RKS)now[x.s<0?0:x.s]=x.r;const bs=rkBest();
  const row=(lab,f)=>'<div class="rs-rk"><i>'+lab+'</i>'+L.map((n,i)=>{const r=f(i);return '<span><small>'+n+'</small><b class="rk'+(r||'-')+'">'+(r||'－')+'</b></span>'}).join('')+'</div>';
  return row('面ごとの評価',i=>now[i])+row('ベスト',i=>bs[i]!='-'?bs[i]:'')}

// ---------- 1. boss rush ----------
function rushOk(){return co<3&&cu>co}
function rushBest(){try{return +localStorage.getItem('hoshikuzu-rush-c'+co+'-d'+di)||0}catch(e){return 0}}
function rushUI(){const b=$('rsh');if(!b)return;const ok=rushOk();if(!ok&&RUSH)RUSH=0;b.hidden=co>2;b.disabled=!ok;b.setAttribute('aria-pressed',!!RUSH);
  b.innerHTML=ok?'ボスラッシュ'+(RUSH?'<small>ON</small>':''):'🔒 ボスラッシュ';b.title=ok?'':'このコースをクリアすると解放';
  $('stp').classList.toggle('off',!!RUSH);
  if(RUSH){const bt=rushBest();$('stn').textContent='道中なしでボス7体と連戦！　'+(bt?'ベスト '+prFmt(bt):'クリアタイムを記録')}
  if(st=='title')$('ovb').textContent=RUSH?'ボスラッシュ開始':'ゲーム開始'}
function rushStart(){RU=null;if(!RUSH||PRB||!rushOk())return;RU={t:0,lt:[],c:co};stg=0;fr0=98;thA=thB=gi();stT=3300-150;sci=1e9;pl=Math.max(pl,3);stat.mx=pl;bm=Math.min(5,bm+1);msg='ボスラッシュ　'+CN[co];mt=140}
function rushTick(dt){if(RU&&st=='play')RU.t+=dt}
function ruResult(v,nu){window.ovLock=performance.now()+500;const k=RU.lt.length;let bt=rushBest(),nb=false;
  if(v&&(!bt||RU.t<bt)){nb=true;bt=RU.t;try{localStorage.setItem('hoshikuzu-rush-c'+co+'-d'+di,Math.round(RU.t))}catch(e){}}
  show(v?'ボスラッシュ制覇！':'ボスラッシュ終了','','もう一度',0,nb?'ベスト更新！':'',1);ov.classList.add('res');
  const R=$('ovr');R.hidden=false;const sp=RU.lt.map((x,i)=>[BN[co*7+i],x-(i?RU.lt[i-1]:0)]);
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
 ['d','ダート','自機めがけて斜めに突っ込んでくる小型機。5機の編隊で来ることもある。','ヒント：真正面に立たず、横へずれてかわそう。',0],
 ['w','スワロー','横から波打つように編隊で飛んでくる。真下を通るときに1発だけ撃つ。','ヒント：編隊の真下に入らなければ怖くない。',0],
 ['u','ユーフォー','左右にゆらゆら揺れながら降りてきて、自機をねらい撃つ。','ヒント：揺れの端で止まる一瞬がねらい目。',0],
 ['m','機雷','ゆっくり降りながら、自機のほうへ寄ってくる。','ヒント：近づかれる前に撃ち落とそう。',0],
 ['g','ガンシップ','画面の上のほうに陣取って左右に動き、3方向に弾を撃つ。しばらくすると去っていく。','ヒント：弾の間は広い。すき間に入って撃ち返そう。',0],
 ['s','スナイパー','照準を合わせてから、速い弾を撃つ。2発撃つと引き上げる。','ヒント：照準の線が見えたら横へ動こう。',0],
 ['t','スピナー','くるくる回りながら、2方向に弾をまき続ける。','ヒント：弾は渦を巻いて広がる。中心から離れて回りこもう。',0],
 ['x','クリスタル','回りながら4方向に弾を撃つ。倒すと破片が3つ飛び散る。','ヒント：遠くで倒せば、破片をよけやすい。',0],
 ['y','結晶の破片','クリスタルを倒すと飛び散る破片。自機のほうへ飛んでくる。','ヒント：撃てば壊せる。まとめて片づけよう。',0],
 ['k','チャージャー','狙いを定めると、自機めがけて一直線に突進してくる。','ヒント：光ってから突っ込むまでに横へ動こう。',0],
 ['h','シールド艦','回る盾で弾を防ぎながら、5方向に弾を撃つ。','ヒント：盾のすき間がこちらを向いたときに撃ちこもう。',0],
 ['q','サーペント','長い胴体をくねらせて降りてくる。3方向に弾を撃つ。','ヒント：胴体のどこに当ててもダメージが入る。',0],
 ['e','パルサー','止まって力をためたあと、全方位にリング状の弾を放つ。','ヒント：リングには切れ目がある。そこへ逃げこもう。',0],
 ['c','シーカー','左右に跳ね回りながら、追いかけてくる弾を撃つ。','ヒント：大きく動けば追尾弾は振り切れる。',0],
 ['v','ファントム','姿を消して別の場所に現れ、3方向に弾を撃つ。','ヒント：消えたら、次に現れる位置を見てから動こう。',0],
 ['f','ボマー','画面を横切りながら、時限爆弾を落としていく。','ヒント：落とした爆弾は撃って壊せる。',0],
 ['i','時限爆弾','ボマーが落とす爆弾。しばらくすると8方向に弾をまき散らす。','ヒント：爆発する前に撃ち落とそう。',0],
 ['n','キャリア','大型の母艦。左右に動きながら、子機を2機ずつ送り出す。','ヒント：硬い。子機を減らしつつ集中攻撃しよう。',0],
 ['o','子機','キャリアから発進し、自機めがけて飛んでくる。','ヒント：発進した直後に撃ち落とすのが安全。',0],
 ['l','ランサー','照準を合わせたあと、画面をつらぬく太いレーザーを撃つ。','ヒント：照準の線が見えたら、その線から外れよう。',0],
 ['r','隕石','大小さまざまな岩。大きいほど硬い。ボス戦の最中にも降ってくる。','ヒント：ボス戦中に壊すとアイテムが出やすい。',0],
 ['A','スノーフレーク','回りながら漂う雪の結晶。大きいものは6方向に弾を撃ち、倒すと小さな結晶に分かれる。','ヒント：分かれた小さな結晶は弾を撃たない。',1],
 ['B','フロストガード','5方向に弾を撃つ。弾はいったん止まってから急に加速する。','ヒント：弾が止まったら、加速する前に位置を変えよう。',1],
 ['C','ツインビット','2機一組で現れ、間に電撃のビームを張る。','ヒント：どちらか1機を倒せばビームは消える。',1],
 ['D','氷河砲台','氷の装甲をまとった砲台。装甲が砕けると速くなり、10方向に弾をまき散らす。','ヒント：装甲が砕けたら距離をとろう。',1],
 ['E','ウィスプ','円を描きながら漂う小さな光。ときどき自機をねらって撃つ。','ヒント：動きが読みにくい。横に広い攻撃で落とそう。',1],
 ['H','ファイアバード','3羽で波打ちながら横切り、火の粉を落としていく。','ヒント：真下を通るときにも1発撃ってくる。',2],
 ['I','マグマブロブ','ゆっくり降りながら、溶岩の弾を山なりに打ち上げる。','ヒント：落ちてくる場所を見てよけよう。',2],
 ['J','フレイムリザード','画面の端を這うように降りてきて、4連射を撃つ。','ヒント：撃つ前に光る。端に寄りすぎないこと。',2],
 ['K','火炎砲台','ゆっくり狙いを合わせて、炎を吹きつける。','ヒント：炎は遠くまで届かない。離れて撃とう。',2],
 ['M','不死鳥のヒナ','倒すと卵になり、時間内に壊さないと復活する。','ヒント：卵になったら、すぐ撃って完全撃破しよう。',2]];
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
function zeGo(i){if(!ZEK)zeLoad();const n=ZEL.length;zkI=(i%n+n)%n;const e=ZEL[zkI],got=!!ZEK[e[0]];co=e[4];stg=0;thA=thB=e[4]*7;tk=1;if(typeof nebPrio=='function')nebPrio();zeMake(e[0]);
  $('zkh').querySelector('b').textContent='敵図鑑';$('zks').textContent='コース'+(e[4]+1)+'「'+CN[e[4]]+'」から登場';
  $('zkn').textContent=got?e[1]:'？？？';$('zkn').classList.toggle('lk',!got);$('zkd').textContent=got?e[2]+'\n'+e[3]:'まだ倒していない。倒すと解説が読める。';$('zkd').classList.toggle('lk',!got);
  $('zki').textContent=(zkI+1)+' / '+n;$('zkc').textContent='登録 '+ZEL.filter(x=>ZEK[x[0]]).length+' / '+n;
  document.querySelectorAll('#zkcos button').forEach(b=>b.setAttribute('aria-selected',b.dataset.c=='4'));zkLock=!got;$('zkpr').hidden=true}
function zkGo(i){if(ZE)return zeGo(i);zkGoB(i)}

ACH.push(['rs','最高評価','面の評価で「S」を取る'],['ra','完全なる航路','1回のプレイでコースの全7面を「S」評価でクリア'],['ru','ボスラッシュ制覇','ボスラッシュでボス7体をすべて倒す'],['ze','雑魚敵博士','敵図鑑の雑魚敵31種をすべて登録']);
rushUI();
