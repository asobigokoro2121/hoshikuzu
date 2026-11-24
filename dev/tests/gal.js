// gallery of the new course's enemies, drawn large on their own stage backgrounds
const path=require('path');
(async()=>{const {chromium}=require('playwright');const b=await chromium.launch();const p=await b.newPage({viewport:{width:420,height:760},deviceScaleFactor:2});await p.route(/^https?:/,r=>r.abort());p.on('pageerror',e=>console.log('ERR',e.message));p.on('console',m=>{if(m.type()=='error')console.log('CERR',m.text())});
 await p.goto('file://'+path.resolve(process.argv[2]));await p.waitForTimeout(700);const out=process.argv[3],ks=(process.argv[4]||'N,O,P,Q,U,j,F,V,G,L,R,S,T,Y,W,X,Z').split(',');
 await p.evaluate(()=>{setCo(0);window.ovLock=0;act();for(let i=0;i<60;i++)upd(1);st='zk';$('ov').hidden=true});
 for(let i=0;i<ks.length;i+=6){const grp=ks.slice(i,i+6);
  await p.evaluate(grp=>{fo=[];eb=[];pt=[];const TH={F:23,V:23,j:23,G:24,L:24,R:25,S:25,T:26,Y:26,W:27,X:27,Z:28};thA=thB=TH[grp[0]]||22;tk=1;
    grp.forEach((k,j)=>{const n0=fo.length;mkEn(k,0,0);const add2=fo.slice(n0);fo.length=n0;const f=add2[0];f.x=70+(j%3)*110;f.y=170+(j/3|0)*220;f.a=300;f.fl=-9;f.zs=2;fo.push(f)});
    window.zkLock=0},grp);
  await p.evaluate(()=>{draw=draw});await p.waitForTimeout(300);
  await p.screenshot({path:`${out}_${i/6}.png`})}
 await b.close()})();
