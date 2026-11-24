const {open}=require('./lib');
(async()=>{for(const [w,h] of [[360,600],[375,667],[420,760]]){const {b,p}=await open(process.argv[2],{'hoshikuzu-cu':'2','hoshikuzu-sec':'1'},{width:w,height:h});
  const r=[];for(const s of [0,1,2,3]){r.push(await p.evaluate(s=>{setSi(s);const o=$('ov'),e=$('sfd');return SP().n+' h'+Math.round(e.getBoundingClientRect().height)+' ov '+o.scrollHeight+'/'+o.clientHeight},s))}
  console.log(w,h,r.join(' | '));await p.evaluate(()=>setSi(0));await p.screenshot({path:process.argv[3]+'/sfd_'+w+'.png'});await b.close()}})();
