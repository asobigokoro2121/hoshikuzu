const path=require('path');
(async()=>{const {chromium}=require('playwright');const b=await chromium.launch();const p=await b.newPage({viewport:{width:420,height:760},deviceScaleFactor:3});await p.route(/^https?:/,r=>r.abort());
 await p.addInitScript(()=>localStorage.setItem('hoshikuzu-cu','3'));await p.goto('file://'+path.resolve(process.argv[2]));await p.waitForTimeout(700);
 const out=process.argv[3];await p.screenshot({path:out+'_title.png',scale:'css'});
 await p.evaluate(()=>{setCo(0);window.ovLock=0;act();for(let i=0;i<1300;i++){inv=1e9;ship.tx=W/2;ship.ty=H-60;upd(1);dist+=1;GY+=GSP()}fo=[];eb=[];sp=1e9;
  [10,11,12,13].forEach((ty,j)=>{for(let i=0;i<3;i++){FS=ty;fireA(70+j*75,260+i*30,Math.PI/2+(i-1)*.5,1e-3)}});FS=0;
  for(let i=0;i<20;i++){for(const q of eb){q.x+=q.vx*800;q.y+=q.vy*800;}}});
 for(let k=0;k<12;k++){await p.evaluate(()=>{for(const q of eb){q.y+=.0}});await p.waitForTimeout(30)}
 const cv=await p.$('canvas');const bb=await cv.boundingBox();await p.screenshot({path:out+'_z.png',clip:{x:bb.x+30,y:bb.y+bb.height*.42,width:330,height:120}});
 await b.close()})();
