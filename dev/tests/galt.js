const {open}=require('./lib');
(async()=>{const {b,p}=await open(process.argv[2]);console.log(await p.evaluate(()=>{const r=[];setCo(0);window.ovLock=0;act();for(const k of 'N,O,P,Q,U,j,F,V,G,L,R,S,T,Y,W,X,Z'.split(',')){fo=[];mkEn(k,100,0);const f=fo[0];f.y=200;try{EDR[k](f)}catch(e){r.push(k+':'+e.message+' '+(e.stack||'').split('\n')[1])}}return r.join('\n')||'all ok'}));await b.close()})();
