const path=require('path');
(async()=>{const {chromium}=require('playwright');const b=await chromium.launch();const p=await b.newPage({viewport:{width:420,height:760},deviceScaleFactor:3});await p.route(/^https?:/,r=>r.abort());
 await p.addInitScript(()=>localStorage.setItem('hoshikuzu-cu','3'));await p.goto('file://'+path.resolve(process.argv[2]));await p.waitForTimeout(700);const out=process.argv[3];
 await p.evaluate(()=>{setCo(0);window.ovLock=0;act();for(let i=0;i<500;i++){inv=1e9;ship.tx=W/2;ship.ty=H-60;upd(1);dist+=1;GY+=GSP()}fo=[];eb=[];sp=1e9;msg='';mt=0;cutI=null;stT=0;sci=1e9;ship.x=W/2;ship.y=H-40;
  for(let i=0;i<3;i++){FS=11;fireA(110+i*70,180,Math.PI/2+(i-1)*.45,2.2)}FS=0;window.MV=1});
 for(let k=0;k<12;k++){await p.evaluate(()=>{inv=1e9});await p.waitForTimeout(20)}
 console.log(await p.evaluate(()=>JSON.stringify(eb.map(q=>[q.ty,q.tk,(q.tr||[]).length,Math.round(q.y)]))));const cv=await p.$('canvas');const bb=await cv.boundingBox();await p.screenshot({path:out+'_m.png',clip:{x:bb.x+60,y:bb.y+150,width:300,height:140}});
 await b.close()})();
