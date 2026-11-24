const {open}=require('./lib');
(async()=>{const {b,p}=await open(process.argv[2],{},{width:360,height:600});await p.screenshot({path:process.argv[3]});
console.log(await p.evaluate(()=>{const r=e=>{const q=$(e).getBoundingClientRect();return Math.round(q.top)+'-'+Math.round(q.bottom)};return 'rsh '+r('rsh')+' ovb '+r('ovb')+' ov '+r('ov')+' cls '+$('ov').className}));await b.close()})();
