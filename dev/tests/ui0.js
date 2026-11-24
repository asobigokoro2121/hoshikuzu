const {open}=require('./lib');
(async()=>{const f=process.argv[2],out=process.argv[3];
 for(const [w,h] of [[420,760],[360,600]]){const {b,p}=await open(f,{},{width:w,height:h});
  await p.screenshot({path:out+'_title'+w+'.png'});
  await p.evaluate(()=>{zkOpen()});await p.waitForTimeout(400);await p.screenshot({path:out+'_zk'+w+'.png'});
  await p.evaluate(()=>{ZE=1;zkGo(2)});await p.waitForTimeout(400);await p.screenshot({path:out+'_ze'+w+'.png'});
  await p.evaluate(()=>{ZE=0;zkGo(1)});await p.waitForTimeout(400);await p.screenshot({path:out+'_zkb'+w+'.png'});
  console.log(w,'errs',p.errs.length);await b.close()}})();
