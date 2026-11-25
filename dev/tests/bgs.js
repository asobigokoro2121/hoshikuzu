// background-only shots for each stage of 宇宙へ (no enemies), at 2x
const path=require('path');
(async()=>{const {chromium}=require('playwright');const b=await chromium.launch();const p=await b.newPage({viewport:{width:420,height:760},deviceScaleFactor:2});await p.route(/^https?:/,r=>r.abort());p.on('pageerror',e=>console.log('ERR',e.message));
 await p.addInitScript(()=>localStorage.setItem('hoshikuzu-cu','3'));await p.goto('file://'+path.resolve(process.argv[2]));await p.waitForTimeout(700);const out=process.argv[3];
 await p.evaluate(()=>{setCo(0);window.ovLock=0;act();for(let i=0;i<30;i++){inv=1e9;upd(1)}st='zk';$('ov').hidden=true;fo=[];eb=[];pt=[];msg='';mt=0});
 for(let s=0;s<7;s++){await p.evaluate(s=>{thA=thB=22+s;tk=1;GY=s==0?60:1200+s*900;gYl=GY;fo=[];eb=[];stT=1600},s);await p.waitForTimeout(400);
  const cv=await p.$('canvas');const bb=await cv.boundingBox();await p.screenshot({path:`${out}_${s}.png`,clip:{x:bb.x,y:bb.y,width:bb.width,height:bb.height}})}
 const t0=Date.now();await p.evaluate(()=>{GCC.clear();thA=thB=24;for(let i=0;i<8;i++)gChunk(24,100+i)});console.log('8 chunk gen ms',Date.now()-t0);
 await b.close()})();
