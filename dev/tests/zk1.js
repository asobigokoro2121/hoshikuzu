const path=require('path');
(async()=>{const {chromium}=require('playwright');const b=await chromium.launch();const p=await b.newPage({viewport:{width:420,height:760},deviceScaleFactor:2});await p.route(/^https?:/,r=>r.abort());p.on('pageerror',e=>console.log('ERR',e.message));
 await p.goto('file://'+path.resolve(process.argv[2]));await p.waitForTimeout(700);await p.evaluate(()=>zkOpen());
 for(const i of[0,1]){await p.evaluate(i=>{ZE=0;zkGo(i)},i);await p.waitForTimeout(500);const cv=await p.$('canvas');const bb=await cv.boundingBox();await p.screenshot({path:process.argv[3]+'_'+i+'.png',clip:{x:bb.x+40,y:bb.y+60,width:340,height:330}})}
 await b.close()})();
