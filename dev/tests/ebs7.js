// per-stage bullets/sec (road / mid / boss) and fight length, new course (0) vs 銀河航路 (1), normal
const path=require('path');
(async()=>{const {chromium}=require('playwright');const b=await chromium.launch();const p=await b.newPage({viewport:{width:420,height:760}});await p.route(/^https?:/,r=>r.abort());const seed=+process.argv[3];
await p.addInitScript(sd=>{localStorage.setItem('hoshikuzu-cu','3');let a=sd>>>0;Math.random=function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}},seed);
await p.goto('file://'+path.resolve(process.argv[2]),{waitUntil:'domcontentloaded'});await p.waitForTimeout(600);
for(const c of[0,1])console.log('course',c,await p.evaluate(c=>{setCo(c);setDi(1);window.ovLock=0;act();const R=[];let cur=null,s0=-1;const seen=new WeakSet();
  for(let fr=0;fr<70000&&st=='play'&&stg<7;fr++){if(stg!=s0){s0=stg;cur={r:0,m:0,b:0,rf:0,mf:0,bf:0};R.push(cur)}inv=1e9;const bo=fo.find(f=>f.k=='b'||f.k=='z');if(bo){ship.tx=bo.x;ship.ty=H-90}else{ship.tx=W/2+Math.sin(fr/90)*120;ship.ty=H-90}upd(1);
    const B=fo.some(f=>f.k=='b'),M=fo.some(f=>f.k=='z');if(B)cur.bf++;else if(M)cur.mf++;else cur.rf++;for(const q of eb)if(!seen.has(q)){seen.add(q);if(B)cur.b++;else if(M)cur.m++;else cur.r++}}toTitle();
  return '\n'+R.map((x,i)=>(i+1)+'面 道中'+(x.r/x.rf*60).toFixed(1)+' 中ボス'+(x.m/Math.max(1,x.mf)*60).toFixed(1)+'('+(x.mf/60|0)+'s) ボス'+(x.b/Math.max(1,x.bf)*60).toFixed(1)+'('+(x.bf/60|0)+'s)').join('\n')},c));
await b.close()})();
