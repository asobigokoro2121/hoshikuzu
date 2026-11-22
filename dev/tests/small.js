const {open}=require('./lib');const OUT=process.argv[3];
(async()=>{for(const [w,h] of [[360,600],[375,667],[420,760]]){const {b,p}=await open(process.argv[2],{'hoshikuzu-cu':'2'},{width:w,height:h});
  await p.click('#rsh');await p.waitForTimeout(300);
  const r=await p.evaluate(()=>{const o=$('ov');const rb=$('rsh').getBoundingClientRect(),ob=$('ovb').getBoundingClientRect(),cv=$('cv').getBoundingClientRect();return 'ov scroll '+o.scrollHeight+'/'+o.clientHeight+' rsh '+Math.round(rb.top)+'-'+Math.round(rb.bottom)+' visible='+(rb.height>0)+' ovb bottom '+Math.round(ob.bottom)+' canvas bottom '+Math.round(cv.bottom)+' cls '+o.className});
  console.log(w,h,r);await p.screenshot({path:OUT+'/s_'+w+'.png'});
  await p.evaluate(()=>{zkOpen();document.querySelector('#zkcos button[data-c="4"]').click()});await p.waitForTimeout(200);await p.screenshot({path:OUT+'/sz_'+w+'.png'});await b.close()}})();
