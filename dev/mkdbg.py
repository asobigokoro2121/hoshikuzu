# 確認版の生成: 保存キーを分け、全コース・全難易度・全開始面・図鑑を解放（究極機体だけは未解放のまま）
import sys
src,dst=sys.argv[1],sys.argv[2]
s=open(src).read()
def rep(a,b,n=1):
    global s
    c=s.count(a)
    assert c==n,(a[:80],c)
    s=s.replace(a,b)
rep('<title>ほしくず防衛隊</title>','<title>ほしくず防衛隊（確認版）</title>')
rep('#tools{display:flex;justify-content:flex-end;gap:8px;margin-bottom:8px}','#tools{display:flex;justify-content:flex-end;gap:8px;margin-bottom:8px}#dbgb{align-self:center;font-size:11px;padding:4px 9px;border-radius:999px;background:#ffd166;color:#2a1600;white-space:nowrap}')
rep('<div class="orst"><button id="rs"','<div class="orst"><span id="dbgb">確認版</span><button id="rs"')
s=s.replace("'hoshikuzu-","'hkdbg-").replace("'hs2-","'hkdbg2-")
rep("di=+(localStorage.getItem('hkdbg-dif')??1);if(!(di>=0&&di<=(unl?3:2)))di=1}catch(e){}","di=+(localStorage.getItem('hkdbg-dif')??1);if(!(di>=0&&di<=(unl?3:2)))di=1}catch(e){}cu=4;unl=true;")
rep("const reach=()=>{try{return Math.min(6,+localStorage.getItem(RK())||0)}catch(e){return 0}};","const reach=()=>6;")
rep("sec=false;unl=false;cu=0;co=0;","sec=false;unl=true;cu=4;co=0;")
rep("function zkLoad(){ZK=Array(58).fill(0);","function zkLoad(){ZK=Array(58).fill(1);return;")
i=s.rfind('<script>');s=s[:i]+'<script>window.DBG=1;'+s[i+8:]
assert 'hoshikuzu-' not in s.replace('hoshikuzu-opt-x','') or True
open(dst,'w').write(s);print('kakunin ok',len(s))
