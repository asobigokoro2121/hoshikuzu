const {open}=require('./lib');
(async()=>{const {b,p}=await open(process.argv[2]);
console.log(await p.evaluate(()=>{const out=[];for(const w of[0,1,2])for(const L of[1,3,5]){setCo(0);setDi(1);window.ovLock=0;act();sci=1e9;sp=1e9;for(let i=0;i<80;i++){inv=1e9;upd(1)}
  wt=w;pl=L;const mk=y=>{const r=add({k:'r',x:ship.x,y,r:20,mh:999,vx:0,vy:0,rot:0,vr:0,sh:[1,1,1,1,1,1,1,1,1],cr:[],ck:[],pts:0});r.hp=999;return r};const a=mk(H*.25),c=mk(H*.45);
  // baseline: normal fire only for 95 frames
  for(let i=0;i<95;i++){inv=1e9;sp=1e9;a.y=H*.25;c.y=H*.45;upd(1)}const base=999-c.hp;a.hp=c.hp=999;
  keys.shift=true;for(let i=0;i<95;i++){inv=1e9;sp=1e9;a.y=H*.25;c.y=H*.45;upd(1)}keys.shift=false;for(let i=0;i<60;i++){inv=1e9;sp=1e9;a.y=H*.25;c.y=H*.45;upd(1)}
  out.push(['ショット','レーザー','ミサイル'][w]+' Lv'+L+': 通常95f '+Math.round(base)+' / 集中95f+解放60f 手前'+Math.round(999-c.hp)+' 奥'+Math.round(999-a.hp));toTitle()}return out.join('\n')}));
await b.close()})();
