const {open}=require('./lib');
(async()=>{const f=process.argv[2],out=process.argv[3];const {b,p}=await open(f,{'hoshikuzu-cu':'3'},{width:420,height:760});
 await p.evaluate(()=>{setCo(0);window.ovLock=0;act();for(let i=0;i<1300;i++){inv=1e9;ship.tx=W/2+Math.sin(i/70)*110;ship.ty=H-100;upd(1);dist+=1;GY+=GSP()}
  [10,11,12,13].forEach((ty,j)=>{for(let i=0;i<4;i++){FS=ty;fireA(60+j*80,300+i*14,Math.PI/2+(i-1.5)*.4,2)}});FS=0});
 await p.waitForTimeout(200);const cv=await p.$('canvas');const bb=await cv.boundingBox();await p.screenshot({path:out+'.png',clip:{x:bb.x,y:bb.y,width:bb.width,height:bb.height}});
 await p.screenshot({path:out+'_zoom.png',clip:{x:bb.x+20,y:bb.y+bb.height*.45,width:bb.width*.9,height:bb.height*.22},scale:'device'});
 console.log('errs',p.errs.length);await b.close()})();
