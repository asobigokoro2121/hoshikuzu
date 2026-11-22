const {open}=require('./lib');const OUT=process.argv[3];
(async()=>{const {b,p}=await open(process.argv[2],{'hoshikuzu-cu':'3'});
await p.evaluate(()=>{zkOpen();document.querySelector('#zkcos button[data-c="4"]').click()});
for(let i=0;i<31;i++){await p.evaluate(i=>zkGo(i),i);await p.waitForTimeout(140);await p.screenshot({path:OUT+'/z'+String(i).padStart(2,'0')+'.png',clip:{x:60,y:150,width:300,height:250}})}
console.log('errs',p.errs.length);await b.close()})();
