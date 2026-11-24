const {open}=require('./lib');
(async()=>{const {b,p}=await open(process.argv[2],{},{width:420,height:760});const out=process.argv[3];
 await p.evaluate(()=>{zkOpen()});
 for(const i of [3,5,7,9,11,13]){await p.evaluate(i=>{ZE=0;zkGo(i)},i);await p.waitForTimeout(300);await p.screenshot({path:`${out}_zb${i}.png`})}
 for(const i of [5,7,9,11,13,15]){await p.evaluate(i=>{ZE=1;zkGo(i)},i);await p.waitForTimeout(300);await p.screenshot({path:`${out}_ze${i}.png`})}
 console.log(await p.evaluate(()=>ZEL.length),'errs',p.errs.length);await b.close()})();
