// enemy bullets per second on the road and in boss/mid-boss fights (normal, courses 1-3, 2 runs)
const {open}=require('./lib');
(async()=>{const {chromium}=require('playwright');const path=require('path');const b=await chromium.launch();const p=await b.newPage({viewport:{width:420,height:760}});await p.route(/^https?:/,r=>r.abort());const seed=+process.argv[3];await p.addInitScript(sd=>{localStorage.setItem('hoshikuzu-cu','3');let a=sd>>>0;Math.random=function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}},seed);await p.goto('file://'+path.resolve(process.argv[2]),{waitUntil:'domcontentloaded'});await p.waitForTimeout(600);
console.log(process.argv[2].split('/').pop(),'seed',seed,await p.evaluate(()=>{let road=0,boss=0,rf=0,bf=0;for(let rep=0;rep<2;rep++)for(const c of[0,1,2]){setCo(c);setDi(1);window.ovLock=0;act();const seen=new WeakSet();
  for(let fr=0;fr<90000&&st=='play'&&stg<7;fr++){inv=1e9;const bo=fo.find(f=>f.k=='b');if(bo){ship.tx=bo.x;ship.ty=H-90}else{ship.tx=W/2+Math.sin(fr/90)*120;ship.ty=H-90}upd(1);
    const fight=fo.some(f=>f.k=='b'||f.k=='z');if(fight)bf++;else rf++;for(const q of eb)if(!seen.has(q)){seen.add(q);if(fight)boss++;else road++}}toTitle()}
  return '道中 '+(road/rf*60).toFixed(2)+'発/秒  ボス・中ボス戦 '+(boss/bf*60).toFixed(2)+'発/秒'}));await b.close()})();
