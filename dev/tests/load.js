const {open}=require('./lib');
(async()=>{for(const f of process.argv.slice(2)){const {b,p}=await open(f);await p.click('#ovb');await p.waitForTimeout(2500);
  const r=await p.evaluate(()=>{zeLoad();return 'st '+st+' DBG '+(!!window.DBG)+' cu '+cu+' zke '+ZEL.filter(e=>ZEK[e[0]]).length+'/31 rushBtn '+(!$('rsh').disabled)+' title '+document.title});
  console.log(f.split('/').pop(),r,'errs',p.errs.length);await b.close()}})();
