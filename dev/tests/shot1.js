const {open}=require('./lib');
(async()=>{const f=process.argv[2],out=process.argv[3];const {b,p}=await open(f,{'hoshikuzu-cu':'3'},{width:420,height:760});
 await p.evaluate(()=>{setCo(0);setDi(1);window.ovLock=0;act();PRB=0});
 await p.evaluate(()=>{for(let i=0;i<9000&&!fo.some(f=>f.k=='b'&&f.y>=118);i++){inv=1e9;ship.tx=W/2+Math.sin(i/60)*100;ship.ty=H-100;upd(1);dist+=1;GY+=GSP();for(const f of fo)if(f.k=='z')f.hp=0}for(let i=0;i<420;i++){inv=1e9;ship.tx=W/2+Math.sin(i/60)*120;upd(1);dist+=1;GY+=GSP()}});
 await p.waitForTimeout(150);await p.screenshot({path:out+'_boss1.png'});
 await p.evaluate(()=>{const b=fo.find(f=>f.k=='b');b.hp=b.mh*.4;for(let i=0;i<500;i++){inv=1e9;ship.tx=W/2+Math.sin(i/60)*120;upd(1);dist+=1;GY+=GSP()}});
 await p.waitForTimeout(150);await p.screenshot({path:out+'_boss2.png'});
 console.log(await p.evaluate(()=>'MOR '+MOR.length+' eb '+eb.length+' st '+st));
 console.log('errs',p.errs.length);await b.close()})();
