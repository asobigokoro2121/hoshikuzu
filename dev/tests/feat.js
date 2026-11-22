// feature checks for boss rush / charge shot / finisher / ranks / enemy encyclopedia
const {open}=require('./lib');const OUT=process.argv[3]||'.';
(async()=>{const f=process.argv[2];let {b,p}=await open(f,{'hoshikuzu-cu':'1'});
// --- title: rush button state per course
console.log('title', await p.evaluate(()=>{const r=[];setCo(0);r.push('c0 '+$('rsh').disabled+' '+$('rsh').textContent);setCo(1);r.push('c1 '+$('rsh').disabled+' '+$('rsh').textContent);setCo(0);return r.join(' | ')}));
await p.click('#rsh');await p.waitForTimeout(200);
console.log('rush on', await p.evaluate(()=>RUSH+' btn='+$('ovb').textContent+' stn='+$('stn').textContent+' stpOff='+$('stp').classList.contains('off')));
await p.screenshot({path:OUT+'/r1_title_rush.png'});
// --- boss rush run: weaken each boss after its arrival rest
const rr=await p.evaluate(()=>{window.ovLock=0;act();const log=[];let fr=0,lastStg=-1;
  for(;fr<40000&&st=='play';fr++){inv=1e9;const b=fo.find(f=>f.k=='b');if(b){ship.tx=b.x;ship.ty=H-90;if(b.rest===0&&b.a>40&&b.hp>3&&!b.dy)b.hp=3}
    if(stg!=lastStg){log.push('stg'+stg+'@'+fr+(fo.some(q=>q.k!='b'&&q.k!='r')?'(enemies!)':''));lastStg=stg}
    if(!b&&fo.some(q=>q.k!='r'&&q.k!='b'&&q.k!='y'&&q.k!='o'&&!q.dead))log.push('nonrock '+fo.filter(q=>q.k!='r').map(q=>q.k).join(''));upd(1)}
  return {log:log.slice(0,12).join(' '),st,ttl:$('ovh').textContent,res:$('ovr').innerText.replace(/\n/g,' / ').slice(0,400),cu,reach:localStorage.getItem('hs2-reach-0'),best:localStorage.getItem('hoshikuzu-rush-c0-d'+di),ach:localStorage.getItem('hoshikuzu-ach'),fr}});
console.log('rush',JSON.stringify(rr,null,1));
await p.waitForTimeout(400);await p.screenshot({path:OUT+'/r2_rush_result.png'});
// --- charge shot + finisher on a normal run
const cr=await p.evaluate(()=>{toTitle();RUSH=0;setSs(0);window.ovLock=0;act();sci=1e9;sp=1e9;for(let i=0;i<80;i++){inv=1e9;upd(1)}
  const g=mkEn('g',W/2,H*.3);g.y=H*.3;g.ty=H*.3;g.hp=g.mh=200;keys.shift=true;let mx=0;for(let i=0;i<95;i++){inv=1e9;sp=1e9;upd(1);mx=chg}keys.shift=false;inv=1e9;upd(1);
  const cb=bl.filter(q=>q.CB).length;let h0=g.hp;for(let i=0;i<40;i++){inv=1e9;sp=1e9;upd(1)}
  return 'charge max '+Math.round(mx)+' blasts '+cb+' enemy hp 200 -> '+Math.round(g.hp)+' (normal shots also hit)'});
console.log(cr);
const fn=await p.evaluate(()=>{fo=[];stT=3299;bsp=0;sci=1e9;let b=null;for(let i=0;i<500;i++){inv=1e9;upd(1);b=fo.find(f=>f.k=='b');if(b&&b.rest===0)break}
  b.hp=1;kill(b);return 'finisher SLO '+SLO+' bfl '+Math.round(bfl)+' dy '+b.dy});console.log(fn);
await p.evaluate(()=>{for(let i=0;i<8;i++)upd(1)});await p.screenshot({path:OUT+'/r3_finisher.png'});
const rk=await p.evaluate(()=>{let n=0;for(;n<900&&!rkB;n++){inv=1e9;upd(1)}return 'rank banner after '+n+' frames: '+(rkB&&rkB.r)+' RKS '+JSON.stringify(RKS)});console.log(rk);
await p.evaluate(()=>{for(let i=0;i<30;i++)upd(1)});await p.screenshot({path:OUT+'/r4_rank.png'});
// --- enemy encyclopedia
const zr=await p.evaluate(()=>{toTitle();zkOpen();document.querySelector('#zkcos button[data-c="4"]').click();const r=[$('zkh').querySelector('b').textContent,$('zkc').textContent,$('zki').textContent,$('zkn').textContent];
  const errs=[];for(let i=0;i<31;i++){zkGo(i);try{draw()}catch(e){errs.push(ZEL[i][0]+':'+e.message)}}zkGo(0);return r.join(' | ')+' drawErrs '+JSON.stringify(errs)});console.log('zukan',zr);
await p.screenshot({path:OUT+'/r5_zk_enemy.png'});
await p.evaluate(()=>{document.querySelector('#zkcos button[data-c="0"]').click()});console.log('back to boss',await p.evaluate(()=>$('zkh').querySelector('b').textContent+' '+$('zki').textContent+' practice hidden='+$('zkpr').hidden));
console.log('errs',p.errs.length);await b.close()})();
