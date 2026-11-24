const {open}=require('./lib');const OUT=process.argv[3];
(async()=>{const {b,p}=await open(process.argv[2],{'hoshikuzu-cu':'3','hoshikuzu-sec':'1'});
for(const s of [0,1,2,3]){
 const r=await p.evaluate(s=>{toTitle();setCo(0);setDi(1);setSi(s);window.ovLock=0;act();sci=1e9;sp=1e9;for(let i=0;i<80;i++){inv=1e9;sp=1e9;upd(1)}
   const mk=(x,y)=>{const r=add({k:'r',x,y,r:16,mh:999,vx:0,vy:0,rot:0,vr:0,sh:[1,1,1,1,1,1,1,1,1],cr:[],ck:[],pts:0});r.hp=999;return r};
   const A=mk(ship.x,H*.3),Bq=mk(ship.x+55,H*.3-20),Cq=mk(ship.x-120,H*.3);
   for(let i=0;i<30;i++){const a=i/30*TAU;eb.push({x:ship.x+Math.cos(a)*80,y:ship.y+Math.sin(a)*80,vx:0,vy:0,r:4,c:'#f6a'})}
   keys.shift=true;for(let i=0;i<CB().ch+2;i++){inv=1e9;sp=1e9;for(const q of[A,Bq,Cq]){q.y=q.y;q.vx=q.vy=0}upd(1)}const hp0=[A.hp,Bq.hp,Cq.hp];keys.shift=false;inv=1e9;upd(1);
   const eb0=eb.filter(q=>!q.d).length,n=bl.filter(q=>q.CB).length;window.__keep=[A,Bq,Cq,hp0];return {s:SP().n,cb:CB().n,ch:CB().ch,blasts:n,ebLeft:eb0}},s);
 await p.waitForTimeout(10);
 for(let i=1;i<=3;i++){await p.evaluate(()=>{for(let k=0;k<6;k++){inv=1e9;sp=1e9;upd(1)}draw()});await p.screenshot({path:OUT+'/k'+s+i+'.png',clip:{x:30,y:60,width:360,height:640}})}
 const d=await p.evaluate(()=>{for(let k=0;k<40;k++){inv=1e9;sp=1e9;upd(1)}const [A,Bq,Cq,h]=window.__keep;return 'dmg center '+Math.round(h[0]-A.hp)+' near '+Math.round(h[1]-Bq.hp)+' far '+Math.round(h[2]-Cq.hp)});
 console.log(JSON.stringify(r),d)}
console.log('errs',p.errs.length);await b.close()})();
