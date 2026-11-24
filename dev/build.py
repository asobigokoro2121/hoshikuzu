# ほしくず防衛隊 開発用ビルド
# base.html（v108 時点の完成版）に追加要素のパッチと feat2.js を当てて出力する。
# 使い方: python3 build.py 出力先.html
import sys,os
D=os.path.dirname(os.path.abspath(__file__))
s=open(os.path.join(D,'base.html')).read()
def rep(a,b,n=1):
    global s
    c=s.count(a)
    assert c==n,('patch target count',c,'expected',n,a[:90])
    s=s.replace(a,b)

# ---- 7. finisher
rep("if(!f.dy){f.dy=110;f.hp=0;clearEB(1);shake=16;sfx('big')}return}","if(!f.dy){f.dy=110;f.hp=0;clearEB(1);shake=16;sfx('big');finStart(f)}return}")
rep("if(hs>0){hs-=dt;ud=dt*.15}upd(ud)}","if(hs>0){hs-=dt;ud=dt*.15}else if(SLO>0){ud=dt*sloF();SLO-=dt}upd(ud)}")
# ---- 3. charge shot
rep("if(dr>0)drFire()}","if(dr>0)drFire()}chgUpd(dt);")
rep("(b.L?6:3)","(b.CB?b.cr||18:b.L?6:3)",2)
rep("for(const b of bl){if(b.L||b.M)continue;","for(const b of bl){if(b.L||b.M||b.CB)continue;")
rep("for(const b of bl){\n    if(b.L){","for(const b of bl){\n    if(b.CB){cbD(b);continue}\n    if(b.L){")
rep("if(mt>0)banner();if(cutI)cutIn();","chgD();rkD();if(mt>0)banner();if(cutI)cutIn();")
rep("もう1本の指を置くと集中モード（Shift）。","もう1本の指で集中モード（Shift）、離すとチャージ弾。")
# ---- start / tick hooks (rush + ranks)
rep("reachUp();$('bb').classList.remove('urge');","rushStart();rkReset();reachUp();$('bb').classList.remove('urge');")
rep("function reachUp(){if(PRC)return;","function reachUp(){if(PRC||RU)return;")
rep("t+=dt;prTick(dt);","t+=dt;prTick(dt);rushTick(dt);rkTick(dt);")
# ---- 1. boss rush
rep("sp-=dt;if(sp<=0&&stg<7&&!(PRC&&PRC.k)","sp-=dt;if(sp<=0&&stg<7&&!(RU&&!bo)&&!(PRC&&PRC.k)")
rep("gq=stg<7&&!bo&&!fo.some(f=>f.k=='z');","gq=stg<7&&!bo&&!RU&&!fo.some(f=>f.k=='z');")
rep("stT=0;bsp=0;sci=PRC?1e9:0;","stT=RU?3090:0;bsp=0;sci=PRC||RU?1e9:0;")
rep("msg='第'+(stg+1)+'面　'+sg().f;mt=110;","msg=(RU?'ボス '+(stg+1)+' / 7　':'第'+(stg+1)+'面　')+sg().f;mt=110;")
rep("$('hst').textContent=(co>2?'EX　':'第'+(Math.min(stg,6)+1)+'面　')","$('hst').textContent=(co>2?'EX　':RU?'ボス '+(Math.min(stg,6)+1)+'/7　':'第'+(Math.min(stg,6)+1)+'面　')")
rep("if(v&&!PRC&&fr0!=99&&co<3&&cu<co+1){","if(v&&!PRC&&!RU&&fr0!=99&&co<3&&cu<co+1){")
rep("if(v&&!PRC&&fr0!=99&&di>=2&&!unl){","if(v&&!PRC&&!RU&&fr0!=99&&di>=2&&!unl){")
rep("function showResult(v,nb,nu){if(PRC){prResult(v,nu);return}","function showResult(v,nb,nu){if(PRC){prResult(v,nu);return}if(RU){ruResult(v,nu);return}")
rep("function achPlay(){if(PRC)return;","function achPlay(){if(PRC||RU)return;")
rep("setSs(s0)}EN=null;","setSs(s0)}EN=null;RU=null;")
rep("hud();show('ほしくず防衛隊',TTL,'ゲーム開始',1)}","hud();show('ほしくず防衛隊',TTL,'ゲーム開始',1);rushUI()}")
rep("return CTR[co][Math.min(stg,6)]}","return RU?-1:CTR[co][Math.min(stg,6)]}")
rep("PRC=null;ss=0;start();","PRC=null;ss=0;PRB=1;start();PRB=0;")
rep("$('stp').hidden=co>2}","$('stp').hidden=co>2;rushUI()}")
rep("r?'到達した面から練習できます':''}","r?'到達した面から練習できます':'';rushUI()}")
# ---- 4. ranks
rep("if(B){shake=30;clearEB(1);","if(B){rkFreeze(f);shake=30;clearEB(1);")
rep("msg='ボス撃破！';mt=150}gClear()}","msg=RU?'撃破！':'ボス撃破！';mt=150}gClear();rkBegin()}")
rep("function over(v){\n  st='over';","function over(v){rkFlush(v);\n  st='over';")
rep("+'<p class=\"rs-m\">'+(fr0?'第'","+rkHTML()+'<p class=\"rs-m\">'+(fr0?'第'")
rep("orbs.push({k:'g',","if(RKG[RKID])RKG[RKID].n++;orbs.push({k:'g',rs:RKID,")
rep("stat.gm=(stat.gm||0)+1;","stat.gm=(stat.gm||0)+1;if(RKG[o.rs])RKG[o.rs].g++;")
rep("for(const f of fo){\n    FS=","for(const f of fo){if(!f._n){f._n=1;if(f.k!='b'&&f.k!='y')SPN++}\n    FS=")
# ---- 8. enemy encyclopedia
rep("f.dead=1;const B=f.k=='b';let pv=f.pts||0;zkKill(f);","f.dead=1;const B=f.k=='b';let pv=f.pts||0;zkKill(f);zeMark(f.k);")
rep("function zkGo(i){zkI=(i+44)%44;","function zkGoB(i){$('zkh').querySelector('b').textContent='ボス図鑑';zkI=(i+44)%44;")
rep("const c=+b.dataset.c;zkGo(c>2?42:c*14)}))","const c=+b.dataset.c;ZE=c>3?1:0;zkGo(c>3?0:c>2?42:c*14)}))")
rep("zkGo(co>2?42:co*14);navUI();","ZE=0;zkGo(co>2?42:co*14);navUI();")
rep("const z=f.k=='z'?1.4:1;","const z=f.zs||(f.k=='z'?1.4:1);")
rep("function zkTick(dt){t+=dt;for(const f of fo){f.a+=dt;","function zkTick(dt){t+=dt;for(const f of fo){f.a+=dt;if(ZE&&f.rot!=null)f.rot+=.02*dt;")
# ---- normal and above: regular enemies a touch easier (bosses / mid-bosses unchanged)
rep("f.fc+=dt*D().fr*GF()*(f.k=='z'||f.k=='b'?1:.88);","f.fc+=dt*D().fr*GF()*(f.k=='z'||f.k=='b'?1:di?.83:.88);")
rep("&&R()<(di?.24:.12))continue;WV[op]","&&R()<(di?.27:.12))continue;WV[op]")
rep("(bo||mid?3.6:di?3.05:2.7)","(bo||mid?3.6:di?3.2:2.7)")
rep("$('sfd').textContent=SP().ds}","$('sfd').textContent=SP().ds+'｜'+cbName(si)}")
# ---- boss / mid-boss HP +7%
rep("*(ABF[T]??1))*1.32*(co>2?1.25:1)*(1+GL()*.1));","*(ABF[T]??1))*1.32*1.07*(co>2?1.25:1)*(1+GL()*.1));")
rep("mh:MHP[T]*1.21*(co>2?1.25:1),","mh:MHP[T]*1.21*1.07*(co>2?1.25:1),")
# ---- HTML
rep('<p id="stn"></p>','<button id="rsh" type="button" aria-pressed="false">ボスラッシュ</button><p id="stn"></p>')
rep('<button type="button" role="tab" data-c="3">EX</button></div>','<button type="button" role="tab" data-c="3">EX</button><button type="button" role="tab" data-c="4">雑魚敵</button></div>')
CSS='''#rsh{font:inherit;font-size:13px;padding:4px 16px;border:2px solid #7a5ab8;border-radius:999px;background:linear-gradient(rgba(60,40,110,.9),rgba(28,20,60,.9));color:#d8c8ff;cursor:pointer;touch-action:manipulation;display:inline-flex;align-items:center;gap:6px}
#rsh small{font-size:10px;padding:1px 6px;border-radius:999px;background:#2a1600;color:#ffd166}
#rsh[aria-pressed="true"]{border-color:#ffd166;color:#2a1600;background:linear-gradient(#ffe9a3,#ffc04d)}
#rsh:disabled{opacity:.45;cursor:not-allowed;border-style:dashed}#rsh[hidden]{display:none}#rsh:focus-visible{outline:2px solid #fff;outline-offset:2px}
#stp.off button{opacity:.35}#ov.cmp #rsh{padding:2px 12px;font-size:12px}#ov.xs #rsh{padding:0 10px;font-size:11px;line-height:1.5;margin:-3px 0 -4px}
.rs-rk{display:flex;align-items:flex-end;justify-content:center;gap:5px;font-size:11px}
.rs-rk i{font-style:normal;color:#8f9ad0;margin-right:4px;align-self:center;min-width:5.6em;text-align:right}
.rs-rk span{display:flex;flex-direction:column;align-items:center;line-height:1.1;min-width:16px}
.rs-rk small{font-size:9px;color:#6f7ab0}.rs-rk b{font-weight:400;font-size:17px;color:#aab4e8}
.rs-rk .rkS{color:#ffd166;text-shadow:0 0 8px rgba(255,200,90,.6)}.rs-rk .rkA{color:#7df9ff}.rs-rk .rkB{color:#9be15d}.rs-rk .rkC{color:#aab4e8}.rs-rk .rk-{color:#4a5288}
.rs-sp{display:flex;flex-direction:column;gap:1px;font-size:12px;text-align:left}
.rs-sp div{display:flex;justify-content:space-between;gap:8px;border-bottom:1px solid rgba(143,154,208,.18);padding:1px 0}
.rs-sp i{font-style:normal;color:#c8d0ff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rs-sp b{font-weight:400;color:#fff}
#zkcos{grid-template-columns:repeat(3,1fr) .7fr 1fr;width:min(100%,350px)}#zkcos button{font-size:12px}#zkd{white-space:pre-line}
'''
rep('</style>',CSS+'</style>')
feat=open(os.path.join(D,'feat2.js')).read()
i=s.rfind('</script>');s=s[:i]+feat+'\n'+s[i:]
out=sys.argv[1] if len(sys.argv)>1 else os.path.join(D,'..','index.html')
open(out,'w').write(s);print('built',out,len(s))
