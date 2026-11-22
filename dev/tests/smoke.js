// full-course smoke run with an invincible bot: every course & difficulty must reach the result screen
const {open}=require('./lib');
(async()=>{const f=process.argv[2],cs=(process.argv[3]||'0,1,2').split(',').map(Number);const {b,p}=await open(f,{'hoshikuzu-cu':'3','hoshikuzu-unl':'1'});
for(const c of cs)for(const d of [0,3]){const r=await p.evaluate(([c,d])=>{setCo(c);setDi(d);window.ovLock=0;act();let fr=0;
  for(;fr<90000&&st=='play';fr++){inv=1e9;const b=fo.find(f=>f.k=='b');if(b){ship.tx=b.x;ship.ty=H-90}else{ship.tx=W/2+Math.sin(fr/90)*120;ship.ty=H-90}upd(1)}
  return 'course '+c+' d '+d+' end '+st+' clr '+clr+' cu '+cu+' stg '+stg+' frames '+fr+' score '+score+' ranks '+RKS.map(x=>x.r).join('')},[c,d]);console.log(r);
  await p.evaluate(()=>{if(st=='end')endDone();toTitle()})}
console.log('errs',p.errs.length);await b.close()})();
