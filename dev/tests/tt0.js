const {open}=require('./lib');
(async()=>{const {b,p}=await open(process.argv[2],{},{width:420,height:760});
 console.log(await p.evaluate(()=>{const r=['boot co='+co+' th='+thA+'/'+thB];setCo(0);r.push('setCo0 th='+thB);window.ovLock=0;act();for(let i=0;i<200;i++)upd(1);r.push('play th='+thB);toTitle();r.push('title th='+thB);zkOpen();zkClose();r.push('zk->title th='+thB);return r.join(' | ')}));
 for(let i=0;i<5;i++){await p.evaluate(()=>{FS=11;fireA(W/2,100,Math.PI/2,2);FS=0;st='play'});await p.waitForTimeout(200)}
 console.log('errs',p.errs.length);await b.close()})();
