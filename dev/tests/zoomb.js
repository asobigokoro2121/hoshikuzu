const path=require('path');
(async()=>{const {chromium}=require('playwright');const b=await chromium.launch();const p=await b.newPage({viewport:{width:420,height:760},deviceScaleFactor:2});await p.route(/^https?:/,r=>r.abort());p.on('pageerror',e=>console.log('ERR',e.message));
 await p.addInitScript(()=>localStorage.setItem('hoshikuzu-cu','3'));await p.goto('file://'+path.resolve(process.argv[2]));await p.waitForTimeout(700);const out=process.argv[3];
 await p.evaluate(()=>{setCo(0);window.ovLock=0;act();for(let i=0;i<500;i++){inv=1e9;upd(1)}fo=[];eb=[];sp=1e9;sci=1e9;msg='';mt=0;cutI=null;GY=1400;gYl=1400;
  const T=22,h=900;fo.push({k:'b',bt:T,x:W/2,y:200,r:BR[T],hp:h,mh:h,pts:0,a:300,t:999,n:0,lt:999,lc:0,lx:[],fl:0,parts:mkParts(T,h),ta:1.3,mo:20,gd:1,nc:1});
  add({k:'z',st:22,x:W/2,y:470,r:40,mh:100,ty:470,nx:999,n:0,pts:0,gd:1,nc:1});ship.x=W/2+70;ship.y=H-30;window.FRZ=1});
 for(let i=0;i<10;i++){await p.evaluate(()=>{for(const f of fo){f.y=f.k=='b'?200:470;f.fc=99}inv=1e9});await p.waitForTimeout(60)}
 const cv=await p.$('canvas');const bb=await cv.boundingBox();
 await p.screenshot({path:out+'_b.png',clip:{x:bb.x+70,y:bb.y+70,width:280,height:270}});
 await p.screenshot({path:out+'_m.png',clip:{x:bb.x+110,y:bb.y+390,width:200,height:170}});
 await p.evaluate(()=>{const b=fo.find(f=>f.k=='b');b.hp=b.mh*.3});await p.waitForTimeout(200);
 await p.screenshot({path:out+'_b2.png',clip:{x:bb.x+70,y:bb.y+70,width:280,height:270}});await b.close()})();
