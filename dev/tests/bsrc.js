const path=require('path');
(async()=>{const {chromium}=require('playwright');const b=await chromium.launch();const p=await b.newPage({viewport:{width:420,height:760}});await p.route(/^https?:/,r=>r.abort());const seed=+process.argv[3];
await p.addInitScript(sd=>{localStorage.setItem('hoshikuzu-cu','3');let a=sd>>>0;Math.random=function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}},seed);
await p.goto('file://'+path.resolve(process.argv[2]),{waitUntil:'domcontentloaded'});await p.waitForTimeout(600);
for(const c of[0,1])console.log('course',c,await p.evaluate(c=>{setCo(c);setDi(1);window.ovLock=0;act();const seen=new WeakSet(),S={};let bf=0,hp0=0,ent=0;
  for(let fr=0;fr<20000&&st=='play'&&stg<1;fr++){inv=1e9;const bo=fo.find(f=>f.k=='b'||f.k=='z');if(bo){ship.tx=bo.x;ship.ty=H-90}else{ship.tx=W/2+Math.sin(fr/90)*120;ship.ty=H-90}upd(1);
    const B=fo.find(f=>f.k=='b');if(B){if(!hp0)hp0=B.mh;bf++;if(B.y<100)ent++;for(const q of eb)if(!seen.has(q)){seen.add(q);const k=q._src||'?';S[k]=(S[k]||0)+1}}}toTitle();
  return 'bossHP '+Math.round(hp0)+' frames '+bf+' entering '+ent+' src '+JSON.stringify(S)},c));
await b.close()})();
