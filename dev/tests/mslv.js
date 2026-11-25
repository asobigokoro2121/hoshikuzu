const {open}=require('./lib');
(async()=>{const {b,p}=await open(process.argv[2]);console.log(await p.evaluate(()=>{setCo(0);setDi(1);window.ovLock=0;act();fo=[];sp=1e9;sci=1e9;const r=[];ship.x=W/2;ship.y=H-60;
 for(const k of[0,1,2]){eb=[];const q=msl(60,60,Math.PI/2,1.9,k),v=[];for(let i=0;i<=120;i++){inv=1e9;if(i%30==0)v.push(Math.hypot(q.vx,q.vy).toFixed(2));mslTick(1);if(q.hm>0){q.hm-=1;const a=Math.atan2(ship.y-q.y,ship.x-q.x),s=Math.hypot(q.vx,q.vy),c=Math.atan2(q.vy,q.vx);let d=a-c;while(d>Math.PI)d-=TAU;while(d<-Math.PI)d+=TAU;const n=c+Math.max(-.035,Math.min(.035,d));q.vx=Math.cos(n)*s;q.vy=Math.sin(n)*s}q.x+=q.vx;q.y+=q.vy}
  r.push(['小型','誘導','大型'][k]+' 速さ(0,30,60,90,120f): '+v.join(' → '))}
 eb=[];FS=10;fireA(60,60,Math.PI/2,2.6);FS=0;r.push('参考 鉄甲弾 '+Math.hypot(eb[0].vx,eb[0].vy).toFixed(2));return r.join('\n')}));await b.close()})();
