const {open}=require('./lib');const OUT=process.argv[3];
(async()=>{const {b,p}=await open(process.argv[2],{'hoshikuzu-cu':'3'});
await p.evaluate(()=>{setCo(0);setDi(1);window.ovLock=0;act();stT=3299;bsp=0;sci=1e9;window.__h=setInterval(()=>{if(st!='play')return;inv=1e9;const b=fo.find(f=>f.k=='b');if(b){ship.tx=b.x;ship.ty=H-110;if(b.rest===0&&b.a>40&&b.hp>3&&!b.dy)b.hp=3}},16)});
let shot=0;for(let i=0;i<400;i++){const s=await p.evaluate(()=>({slo:SLO,rk:!!rkB,st}));if(s.slo>20&&shot==0){await p.waitForTimeout(120);await p.screenshot({path:OUT+'/l1_fin.png'});shot=1}
  if(s.rk&&shot==1){await p.waitForTimeout(250);await p.screenshot({path:OUT+'/l2_rank.png'});shot=2;break}await p.waitForTimeout(60)}
// charge ring + blast
await p.evaluate(()=>{fo=fo.filter(f=>f.k!='b');keys.shift=true});await p.waitForTimeout(1700);await p.screenshot({path:OUT+'/l3_charge.png'});
await p.evaluate(()=>{keys.shift=false});await p.waitForTimeout(140);await p.screenshot({path:OUT+'/l4_blast.png'});
console.log('shots',shot,'errs',p.errs.length);await b.close()})();
