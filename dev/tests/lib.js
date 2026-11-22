// shared Playwright helper: open the game file with optional saved data
const {chromium}=require('playwright');const path=require('path');
async function open(file,ls={},vp={width:420,height:760}){const b=await chromium.launch({args:['--autoplay-policy=no-user-gesture-required']});const p=await b.newPage({viewport:vp});
  p.errs=[];p.on('pageerror',e=>{p.errs.push(e.message);console.log('PAGEERR',e.message)});await p.route(/^https?:/,r=>r.abort());
  await p.addInitScript(ls=>{for(const k in ls)localStorage.setItem(k,ls[k])},ls);
  await p.goto('file://'+path.resolve(file),{waitUntil:'domcontentloaded'});await p.waitForTimeout(600);return {b,p}}
module.exports={open};
