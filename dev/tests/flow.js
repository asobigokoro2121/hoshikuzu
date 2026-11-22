const {open}=require('./lib');
(async()=>{const {b,p}=await open(process.argv[2],{'hoshikuzu-cu':'1'});
const r=await p.evaluate(()=>{const o=[];setCo(0);RUSH=1;rushUI();
  // practice while rush toggle is on -> must be a normal practice
  prStart(1,0,1,0);o.push('practice RU='+(RU?1:0)+' PRC='+(!!PRC)+' stg='+stg);
  let b=null;for(let i=0;i<900;i++){inv=1e9;upd(1);b=fo.find(f=>f.k=='b');if(b&&b.rest===0)break}b.hp=1;kill(b);
  for(let i=0;i<700&&st=='play';i++){inv=1e9;upd(1)}o.push('practice end st='+st+' title='+$('ovh').textContent+' RKS='+RKS.length+' rank bests='+localStorage.getItem('hoshikuzu-rank-c0-d1'));
  toTitle();o.push('title rush still on='+RUSH+' btn='+$('ovb').textContent+' co='+co);
  // rush: die on purpose, then retry and go home
  window.ovLock=0;act();o.push('rush started RU='+(!!RU)+' hst='+$('hst').textContent+' msg='+msg);
  for(let i=0;i<400;i++){upd(1)}lives=1;bar=0;bm=0;inv=0;hurt();for(let i=0;i<300&&st=='play';i++){upd(1)}
  o.push('rush death st='+st+' title='+$('ovh').textContent+' res='+$('ovr').innerText.replace(/\n/g,' ').slice(0,80)+' cu='+cu);
  window.ovLock=0;act();o.push('retry RU='+(!!RU)+' t='+Math.round(RU.t)+' stg='+stg);toTitle();o.push('home RU='+RU+' btn='+$('ovb').textContent);
  RUSH=0;setSs(0);o.push('rush off btn='+$('ovb').textContent+' stn='+$('stn').textContent);
  achOpen();o.push('ach '+$('achc').textContent+' last='+[...document.querySelectorAll('#achl li b')].slice(-4).map(x=>x.textContent).join(','));achClose();
  return o.join('\n')});console.log(r);console.log('errs',p.errs.length);await b.close()})();
