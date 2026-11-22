const {open}=require('./lib');
(async()=>{for(const [w,h] of [[360,600],[375,667]]){const {b,p}=await open(process.argv[2],{'hoshikuzu-cu':'2'},{width:w,height:h});await p.waitForTimeout(300);
  console.log(w,h,await p.evaluate(()=>{const o=$('ov');return 'ov scroll '+o.scrollHeight+'/'+o.clientHeight+' cls '+o.className}));await b.close()}})();
