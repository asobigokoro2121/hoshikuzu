// screenshots of the new course stage 1
const {open}=require('./lib');
(async()=>{const f=process.argv[2],out=process.argv[3];const {b,p}=await open(f,{'hoshikuzu-cu':'3'},{width:420,height:760});
 await p.screenshot({path:out+'_title.png'});
 await p.evaluate(()=>{setCo(0);setDi(1);window.ovLock=0;act()});
 for(const [n,fr] of [['a',90],['b',700],['c',900],['d',1500]]){await p.evaluate(fr=>{for(let i=0;i<fr;i++){inv=1e9;ship.tx=W/2+Math.sin(t/80)*100;ship.ty=H-100;upd(1);dist+=1;GY+=GSP()}},fr);await p.waitForTimeout(150);await p.screenshot({path:out+'_'+n+'.png'})}
 await p.evaluate(()=>{for(let i=0;i<6000&&!fo.some(f=>f.k=='b'&&f.y>=118);i++){inv=1e9;ship.tx=W/2;ship.ty=H-100;upd(1);dist+=1;GY+=GSP()}for(let i=0;i<400;i++){inv=1e9;upd(1);dist+=1;GY+=GSP()}});
 await p.waitForTimeout(150);await p.screenshot({path:out+'_boss.png'});
 console.log('errs',p.errs.length);await b.close()})();
