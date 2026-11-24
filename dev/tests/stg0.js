const {open}=require('./lib');
(async()=>{const f=process.argv[2],out=process.argv[3],ss=(process.argv[4]||'1,2,3,4,5,6').split(',').map(Number);const {b,p}=await open(f,{},{width:420,height:760});
 for(const s of ss){
  await p.evaluate(s=>{toTitle();setCo(0);setDi(1);setSs(s);window.ovLock=0;act();const run=n=>{for(let i=0;i<n;i++){inv=1e9;ship.tx=W/2+Math.sin(t/80)*110;ship.ty=H-100;upd(1);{const d=1;dist+=d;GY+=d*GSP()}}};run(800);msg='';mt=0},s);
  await p.waitForTimeout(250);await p.screenshot({path:`${out}_${s}a.png`});
  await p.evaluate(()=>{const run=n=>{for(let i=0;i<n;i++){inv=1e9;ship.tx=W/2+Math.sin(t/80)*110;ship.ty=H-100;upd(1);dist+=1;GY+=GSP()}};stT=1340;run(260);msg='';mt=0;cutI=null});
  await p.waitForTimeout(250);await p.screenshot({path:`${out}_${s}m.png`});
  await p.evaluate(()=>{const run=n=>{for(let i=0;i<n;i++){inv=1e9;ship.tx=W/2+Math.sin(t/80)*110;ship.ty=H-100;upd(1);dist+=1;GY+=GSP()}};for(const f of fo)if(f.k=='z')f.dead=1;stT=3300;sci=1e9;run(420);msg='';mt=0;cutI=null});
  await p.waitForTimeout(250);await p.screenshot({path:`${out}_${s}b.png`});
  console.log('stage',s+1,await p.evaluate(()=>'th '+thB+' fo '+fo.map(f=>f.k).join('')+' boss '+(fo.find(f=>f.k=='b')||{}).bt));}
 console.log('errs',p.errs.length);await b.close()})();
