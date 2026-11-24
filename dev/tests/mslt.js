const {open}=require('./lib');
(async()=>{const {b,p}=await open(process.argv[2]);console.log(await p.evaluate(()=>{setCo(0);window.ovLock=0;act();fo=[];eb=[];sp=1e9;const r=[];
 for(const k of[0,1,2]){eb=[];bl=[];const q=msl(180,200,Math.PI/2,0.01,k);const s0=score;let hits=0;for(let i=0;i<5&&!q.d;i++){bl.push({x:180,y:200,vx:0});mslTick(1);hits++;bl=bl.filter(b=>!b.d)}r.push(['small','homing','heavy'][k]+' ty'+q.ty+' destroyed '+!!q.d+' after '+hits+' hits score+'+(score-s0))}
 eb=[];const h=msl(180,200,Math.PI/2,.01,2);h.fu=1;mslTick(2);r.push('heavy fuse -> shrapnel '+eb.filter(q=>q.ty==13).length);
 eb=[];for(let i=0;i<5;i++)msl(100+i*30,200,Math.PI/2,1,i%3);useBomb&&(bm=3,bcd=0);useBomb();r.push('after bomb eb '+eb.length);return r.join('\n')}));await b.close()})();
