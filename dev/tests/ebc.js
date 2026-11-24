// enemy bullets per second on the road and in boss/mid-boss fights (normal, courses 1-3, 2 runs)
const {open}=require('./lib');
(async()=>{const {b,p}=await open(process.argv[2],{'hoshikuzu-cu':'3'});
console.log(process.argv[2].split('/').pop(),await p.evaluate(()=>{let road=0,boss=0,rf=0,bf=0;for(let rep=0;rep<2;rep++)for(const c of[0,1,2]){setCo(c);setDi(1);window.ovLock=0;act();const seen=new WeakSet();
  for(let fr=0;fr<90000&&st=='play'&&stg<7;fr++){inv=1e9;const bo=fo.find(f=>f.k=='b');if(bo){ship.tx=bo.x;ship.ty=H-90}else{ship.tx=W/2+Math.sin(fr/90)*120;ship.ty=H-90}upd(1);
    const fight=fo.some(f=>f.k=='b'||f.k=='z');if(fight)bf++;else rf++;for(const q of eb)if(!seen.has(q)){seen.add(q);if(fight)boss++;else road++}}toTitle()}
  return '道中 '+(road/rf*60).toFixed(2)+'発/秒  ボス・中ボス戦 '+(boss/bf*60).toFixed(2)+'発/秒'}));await b.close()})();
