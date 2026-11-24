// stage-1 comparison: new course (0) vs 銀河航路 (1); bullets/sec on the road and in fights, fight lengths
const path=require('path');
(async()=>{const {chromium}=require('playwright');const b=await chromium.launch();const p=await b.newPage({viewport:{width:420,height:760}});await p.route(/^https?:/,r=>r.abort());const seed=+process.argv[3];
await p.addInitScript(sd=>{localStorage.setItem('hoshikuzu-cu','3');let a=sd>>>0;Math.random=function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}},seed);
await p.goto('file://'+path.resolve(process.argv[2]),{waitUntil:'domcontentloaded'});await p.waitForTimeout(600);
for(const c of[0,1])console.log('course',c,'seed',seed,await p.evaluate(c=>{let road=0,mid=0,boss=0,rf=0,mf=0,bf=0,en=0;setCo(c);setDi(1);window.ovLock=0;act();const seen=new WeakSet(),es=new WeakSet();
  for(let fr=0;fr<20000&&st=='play'&&stg<1;fr++){inv=1e9;const bo=fo.find(f=>f.k=='b'||f.k=='z');if(bo){ship.tx=bo.x;ship.ty=H-90}else{ship.tx=W/2+Math.sin(fr/90)*120;ship.ty=H-90}upd(1);
    const B=fo.some(f=>f.k=='b'),M=fo.some(f=>f.k=='z');if(B)bf++;else if(M)mf++;else rf++;for(const f of fo)if(!es.has(f)){es.add(f);en++}
    for(const q of eb)if(!seen.has(q)){seen.add(q);if(B)boss++;else if(M)mid++;else road++}}const r=st;toTitle();
  return '道中 '+(road/rf*60).toFixed(2)+'/s 中ボス '+(mid/mf*60).toFixed(2)+'/s ('+(mf/60).toFixed(1)+'s) ボス '+(boss/bf*60).toFixed(2)+'/s ('+(bf/60).toFixed(1)+'s) 敵数 '+en+' '+r},c));
await b.close()})();
