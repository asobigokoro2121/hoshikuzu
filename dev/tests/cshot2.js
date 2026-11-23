const {open}=require('./lib');const OUT=process.argv[3],tag=process.argv[4]||'a';
(async()=>{const {b,p}=await open(process.argv[2],{'hoshikuzu-cu':'3'});
await p.evaluate(c=>{setCo(c);setDi(1);window.ovLock=0;act();sci=1e9;setInterval(()=>{if(st=='play'){inv=1e9;sp=1e9}},16)},+process.env.CO);await p.waitForTimeout(1500);
await p.evaluate(()=>{keys.shift=true});await p.waitForTimeout(1700);await p.screenshot({path:OUT+'/'+tag+'0.png',clip:{x:30,y:60,width:360,height:640}});
await p.evaluate(()=>{keys.shift=false});for(let i=1;i<=4;i++){await p.waitForTimeout(70);await p.screenshot({path:OUT+'/'+tag+i+'.png',clip:{x:30,y:60,width:360,height:640}})}
console.log('errs',p.errs.length);await b.close()})();
