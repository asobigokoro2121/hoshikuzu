# コース「宇宙へ」を新コース1として追加し、既存コースを2〜4、EXを5番目へ繰り上げるパッチ
# build.py から exec される（rep と s を共有）
import os
D2=os.path.dirname(os.path.abspath(__file__))
def RS(a,b,n=1): rep(a,b,n)
# --- save data / boot
RS("try{cu=+(localStorage.getItem('hoshikuzu-cu')||0);if(!(cu>=0&&cu<=3))cu=0;co=+(localStorage.getItem('hoshikuzu-co')||0);if(!(co>=0&&co<=cu))co=0;",
   "try{cu=cuLoad();co=CKI(+(localStorage.getItem('hoshikuzu-co')||0));if(!(co>=0&&co<=cu))co=0;")
RS("co=n;try{localStorage.setItem('hoshikuzu-co',n)}","co=n;try{localStorage.setItem('hoshikuzu-co',CK(n))}")
RS("'hoshikuzu-cu','hoshikuzu-co'","'hoshikuzu-cu','hoshikuzu-cu2','hoshikuzu-co'")
RS("for(const c of[1,2]){localStorage.removeItem('hs2-best-c'","for(const c of[1,2,3,4]){localStorage.removeItem('hs2-best-c'")
RS("const BK=()=>co?'hs2-best-c'+co+'-'+di:'hs2-best-'+di,RK=()=>co?'hs2-reach-c'+co+'-'+di:'hs2-reach-'+di;",
   "const BK=()=>CK(co)?'hs2-best-c'+CK(co)+'-'+di:'hs2-best-'+di,RK=()=>CK(co)?'hs2-reach-c'+CK(co)+'-'+di:'hs2-reach-'+di;")
# --- course select
RS("b.title=c>cu?(c>2?'全コースをクリアで解放':'コース'+c+'をクリアで解放'):'';b.innerHTML='<small>'+(c>2?'EXTRA':'COURSE '+(c+1))+'</small>'+(c>cu?'🔒 '+(c>2?'？？？':CN[c]):CN[c])});$('stp').hidden=co>2",
   "b.title=c>cu?(c>3?'全コースをクリアで解放':'コース'+c+'をクリアで解放'):'';b.innerHTML='<small>'+(c>3?'EXTRA':'COURSE '+(c+1))+'</small>'+(c>cu?'🔒 '+(c>3?'？？？':CN[c]):CN[c])});$('stp').hidden=co>3")
RS("if(st=='title'){stg=0;thA=thB=co*7;","if(st=='title'){stg=0;thA=thB=TT(co);")
RS("stg=0;thA=thB=co*7;tk=1;hud();show(","stg=0;thA=thB=TT(co);tk=1;hud();show(")
RS("fr0=ss;thA=thB=co*7;","fr0=ss;thA=thB=TB(co);")
RS("secUI();coUI();thA=thB=co*7;","secUI();coUI();thA=thB=TT(co);")
RS('<button type="button" role="radio" data-c="3"></button></div>','<button type="button" role="radio" data-c="3"></button><button type="button" role="radio" data-c="4"></button></div>')
RS('#cos{display:grid;grid-template-columns:repeat(4,1fr);gap:5px;width:min(100%,340px)}#cos button[data-c="3"]{border-color:#7a5ab8}#cos button[data-c="3"][aria-checked="true"]',
   '#cos{display:grid;grid-template-columns:repeat(5,1fr);gap:4px;width:min(100%,350px)}#cos button[data-c="4"]{border-color:#7a5ab8}#cos button[data-c="4"][aria-checked="true"]')
# --- in-game
RS("$('hst').textContent=(co>2?'EX　':","$('hst').textContent=(co>3?'EX　':")
RS("CN[co]+(co>2?' EX':","CN[co]+(co>3?' EX':")
RS("msg='第1面　'+STG[co*7].f;","msg='第1面　'+STG[TB(co)].f;")
RS("if(co>2){ss=0;fr0=0;pl=Math.max(pl,3);","if(co>3){ss=0;fr0=0;pl=Math.max(pl,3);")
RS("co<3&&cu<co+1){cu=co+1;try{localStorage.setItem('hoshikuzu-cu',cu)}catch(e){}nu+='\\n'+(cu>2?'EXステージ'",
   "co<4&&cu<co+1){cu=co+1;try{localStorage.setItem('hoshikuzu-cu2',cu)}catch(e){}nu+='\\n'+(cu>3?'EXステージ'")
RS("if(v&&co>2&&!PRC&&!fr0){endGo","if(v&&co>3&&!PRC&&!fr0){endGo")
RS("const gi=()=>co>2?21:co*7+Math.min(stg,6)","const gi=()=>co>3?21:TB(co)+Math.min(stg,6)")
RS("mh:MHP[T]*1.21*1.07*(co>2?1.25:1),","mh:MHP[T]*1.21*1.07*(co>3?1.25:1),")
RS("if(f.a>(co>2?2700:2180))","if(f.a>(co>3?2700:2180))")
RS("gemBurst(f.x,f.y,3,co>2?2500:","gemBurst(f.x,f.y,3,co>3?2500:")
RS("gemBurst(f.x,f.y,co>2||stg>=6?30:12,co>2?5000:1000+500*Math.min(stg,6),PRC?25:co>2||stg>=6?330:0);if(!PRC){stg++;if(co>2)stg=7}",
   "gemBurst(f.x,f.y,co>3||stg>=6?30:12,co>3?5000:1000+500*Math.min(stg,6),PRC?25:co>3||stg>=6?330:0);if(!PRC){stg++;if(co>3)stg=7}")
RS("const fin=PRC?PRC.T%7==6||PRC.T==21:stg>=7;muJing(fin?(co>2&&!PRC?'ex'","const fin=PRC?LT(PRC.T):stg>=7;muJing(fin?(co>3&&!PRC?'ex'")
RS("fin=T%7==6||T==21,","fin=LT(T),")
RS("lv=(co>2?6:1+Math.min(stg,6)*.6+co*.5)","lv=(co>3?6:1+Math.min(stg,6)*.6+Math.max(0,co-1)*.5)")
RS("stT>=(co>2?3600:3300)){bsp=1","stT>=(co>3?3600:3300)){bsp=1")
RS("*1.32*1.07*1.05*.95*(co>2?1.25:1)","*1.32*1.07*1.05*.95*(co>3?1.25:1)")
RS("let k='r';if(!bo){","let k=co==0?'Q':'r';if(!bo){")
RS("NJ.sort((a,b)=>((a.i/7|0)!=co)-((b.i/7|0)!=co)||a.i-b.i)","NJ.sort((a,b)=>(THC(a.i)!=co)-(THC(b.i)!=co)||a.i-b.i)")
RS("{const j=nebJob(co*7);nebRows(j,TWY)}for(let i=0;i<TH.length;i++)if(i!=co*7)","{const j=nebJob(TT(co));nebRows(j,TWY)}for(let i=0;i<TH.length;i++)if(i!=TT(co))")
RS("cx.fillStyle=['#c8d0ff','#bff3ff','#ffc29a'][co];","cx.fillStyle=['#d4f5b8','#c8d0ff','#bff3ff','#ffc29a','#e0c8ff'][co];")
RS("if(st=='zk')zkDraw(F);else for(const f of fo)F[f.k](f);","if(st=='zk')zkDraw(F);else{for(const f of fo)if(f.gd)F[f.k](f);for(const f of fo)if(!f.gd)F[f.k](f)}")
RS("dist+=dt*(st=='play'?1:.4)*(1+wp*3);","{const _d=dt*(st=='play'?1:.4)*(1+wp*3);dist+=_d;GY+=_d*GSP()}")
RS("rushStart();rkReset();reachUp();","rushStart();rkReset();gReset0();reachUp();")
RS("t+=dt;prTick(dt);rushTick(dt);rkTick(dt);","t+=dt;prTick(dt);rushTick(dt);rkTick(dt);gTick(dt);")
# --- results / ending
RS("const title=v?(co>2?'真・全制覇！':co==2?'全コース制覇！':'コースクリア！')","const title=v?(co>3?'真・全制覇！':co==3?'全コース制覇！':'コースクリア！')")
RS("const where=co>2?(v?'創世の星神","const where=co>3?(v?'創世の星神")
RS("for(let c=0;c<3;c++){add({k:'sub',s:'COURSE '+(c+1)+'　'+CN[c],th:c*7+3},96);for(let s=0;s<7;s++)add({k:'boss',T:c*7+s,s},112)}\n  add({k:'sub',s:'EXTRA　'+CN[3],th:21},104);",
   "for(let c=0;c<4;c++){add({k:'sub',s:'COURSE '+(c+1)+'　'+CN[c],th:TB(c)+3},96);for(let s=0;s<7;s++)add({k:'boss',T:TB(c)+s,s},112)}\n  add({k:'sub',s:'EXTRA　'+CN[4],th:21},104);")
RS("for(let c=0;c<3;c++){const n=STG.slice(c*7,c*7+7)","for(let c=0;c<4;c++){const n=STG.slice(TB(c),TB(c)+7)")
RS("add({k:'sub',s:CN[3]},24);add({k:'txt',s:EXS","add({k:'sub',s:CN[4]},24);add({k:'txt',s:EXS")
# --- achievements
RS(" ['c1','星の守り手','コース1「'+CN[0]+'」をクリア'],\n ['c2','氷原の踏破者','コース2「'+CN[1]+'」をクリア'],\n ['c3','紅蓮の覇者','コース3「'+CN[2]+'」をクリア'],",
   " ['c0','大空の開拓者','コース1「宇宙へ」をクリア'],\n ['c1','星の守り手','コース2「銀河航路」をクリア'],\n ['c2','氷原の踏破者','コース3「氷晶星雲」をクリア'],\n ['c3','紅蓮の覇者','コース4「紅蓮星域」をクリア'],")
RS("(function(){if(cu>=1)achGet('c1',1);if(cu>=2)achGet('c2',1);if(cu>=3)achGet('c3',1);","(function(){if(cu>=2)achGet('c1',1);if(cu>=3)achGet('c2',1);if(cu>=4)achGet('c3',1);")
RS("if(cu>=1)achGet('b1',1)})();","if(cu>=2)achGet('b1',1)})();")
RS("achGet(co<3?'c'+(co+1):'ex')","achGet(co<4?'c'+co:'ex')")
RS("if(di>=2&&co<3)achGet('h2');if(di==3)achGet(co<3?'h3':'hx');","if(di>=2&&co<4)achGet('h2');if(di==3)achGet(co<4?'h3':'hx');")
RS("if(co<3&&si<3){let m=0;","if(co<4&&si<3){let m=0;")
# --- boss / mid-boss encyclopedia (58 entries)
RS("const ZKO=i=>{if(i>41)return{c:3,s:0,b:i-42,T:21,id:i};const c=i/14|0,s=(i%14)>>1,b=i&1;return{c,s,b,T:c*7+s,id:b?21+c*7+s:c*7+s}};",
   "const ZKO=i=>{if(i>55)return{c:4,s:0,b:i-56,T:21,id:i-14};const c=i/14|0,s=(i%14)>>1,b=i&1,T=TB(c)+s;return{c,s,b,T,id:ZID(T,b)}};")
RS("function zkLoad(){ZK=Array(44).fill(0);try{const s=localStorage.getItem('hoshikuzu-zk')||'';for(let i=0;i<44;i++)","function zkLoad(){ZK=Array(58).fill(0);try{const s=localStorage.getItem('hoshikuzu-zk')||'';for(let i=0;i<58;i++)")
RS("zkMark(B?(f.bt>20?43:21+f.bt):(f.st>20?42:f.st))","zkMark(B?ZID(f.bt,1):ZID(f.st,0))")
RS("zkI=(i+44)%44;","zkI=(i+58)%58;")
RS("ZE=0;zkGo(co>2?42:co*14);","ZE=0;zkGo(co*14);")
RS("ZE=c>3?1:0;zkGo(c>3?0:c>2?42:c*14)","ZE=c>4?1:0;zkGo(c>4?0:c*14)")
RS("o.c>2?'EXTRA「'+CN[3]+'」　'","o.c>3?'EXTRA「'+CN[4]+'」　'",2)
RS("' / 44'","' / 58'",2)
RS('<button type="button" role="tab" data-c="0">コース1</button><button type="button" role="tab" data-c="1">コース2</button><button type="button" role="tab" data-c="2">コース3</button><button type="button" role="tab" data-c="3">EX</button><button type="button" role="tab" data-c="4">雑魚敵</button>',
   '<button type="button" role="tab" data-c="0">コース1</button><button type="button" role="tab" data-c="1">コース2</button><button type="button" role="tab" data-c="2">コース3</button><button type="button" role="tab" data-c="3">コース4</button><button type="button" role="tab" data-c="4">EX</button><button type="button" role="tab" data-c="5">雑魚敵</button>')
# --- practice
RS("fr0=99;pt=[];if(co<3)stg=o.s;sgPend=0;\n  pl=Math.max(pl,co>2?4:","fr0=99;pt=[];if(co<4)stg=o.s;sgPend=0;\n  pl=Math.max(pl,co>3?4:")
RS("if(o.b){if(co>2)th=exSecQ(3);stT=co>2?3600:3300;","if(o.b){if(co>3)th=exSecQ(3);stT=co>3?3600:3300;")
RS("if(co>2)for(let k=0;k<j;k++)if(SC[k][1]=='exs')","if(co>3)for(let k=0;k<j;k++)if(SC[k][1]=='exs')")
RS("const where=(co>2?'EXTRA':'コース'+(co+1)+'　第'+(P.s+1)+'面')+'　'+(P.b?(co>2?","const where=(co>3?'EXTRA':'コース'+(co+1)+'　第'+(P.s+1)+'面')+'　'+(P.b?(co>3?")
# --- inject course data
c0d=open(os.path.join(D2,'c0data.js')).read();c0b=open(os.path.join(D2,'c0bg.js')).read()
A="{const e0=EPK.b;EPK.b=f=>{if(f.bt==21&&(f.ph||0)<3){f.hp=1;return true}"
i=s.find(A);assert i>0 and s.count(A)==1;j=s.find('\n',i);s=s[:j+1]+c0d+'\n'+s[j+1:]
B="TH.push({t:[12,6,28],b:[44,22,74]"
i=s.find(B);assert i>0 and s.count(B)==1;j=s.find('\n',i);s=s[:j+1]+c0b+'\n'+s[j+1:]
