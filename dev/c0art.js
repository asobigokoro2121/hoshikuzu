
// ===== 「宇宙へ」 detailed art (v2) for ground forces, mid-bosses and bosses =====
function landX2(x){if(thB==23){const rx=gRiverX(gWy(-20));if(Math.abs(x-rx)<92)x=rx+(x<rx?-1:1)*96;return cl(x,16,W-16)}return thB==24?cl(x,18,gCoastX(gWy(-20))-26):x}
landX=landX2;
const GC0={dk:'#101216',st1:'#c8d0da',st2:'#7a8492',st3:'#2e343c',red:'#d8424a',rd2:'#7a1a22',yel:'#ffd166'};
function mtl(x0,x1,a,b,c){const g=cx.createLinearGradient(x0,0,x1,0);g.addColorStop(0,a);g.addColorStop(.5,b);g.addColorStop(1,c||a);return g}
function mtlV(y0,y1,a,b,c){const g=cx.createLinearGradient(0,y0,0,y1);g.addColorStop(0,a);g.addColorStop(.5,b);g.addColorStop(1,c||a);return g}
function rivets(P,r=1){for(const[x,y]of P){cx.fillStyle='rgba(10,12,16,.55)';cx.beginPath();cx.arc(x,y,r,0,TAU);cx.fill();cx.fillStyle='rgba(255,255,255,.4)';cx.beginPath();cx.arc(x-.35,y-.35,r*.45,0,TAU);cx.fill()}}
function hzd(x,y,w,h){cx.save();cx.beginPath();cx.rect(x,y,w,h);cx.clip();cx.fillStyle=GC0.yel;cx.fillRect(x,y,w,h);cx.fillStyle='#1a1a1a';for(let i=-h-6;i<w+6;i+=6){cx.beginPath();cx.moveTo(x+i,y+h);cx.lineTo(x+i+3,y+h);cx.lineTo(x+i+3+h,y);cx.lineTo(x+i+h,y);cx.fill()}cx.restore();cx.lineWidth=1;cx.strokeStyle=GC0.dk;cx.strokeRect(x,y,w,h)}
function lamp(x,y,c,per=20,off=0,r=1.7){const on=Math.floor((t+off)/per)%2;cx.fillStyle=on?rgb(c):'rgba(50,20,24,.9)';cx.beginPath();cx.arc(x,y,r,0,TAU);cx.fill();if(on)glow(x,y,r*4,c,.65)}
function seams(lines,a=.4){cx.strokeStyle=`rgba(10,12,16,${a})`;cx.lineWidth=1;cx.beginPath();for(const[x1,y1,x2,y2]of lines){cx.moveTo(x1,y1);cx.lineTo(x2,y2)}cx.stroke()}
function hi(lines,a=.35){cx.strokeStyle=`rgba(255,255,255,${a})`;cx.lineWidth=1;cx.beginPath();for(const[x1,y1,x2,y2]of lines){cx.moveTo(x1,y1);cx.lineTo(x2,y2)}cx.stroke()}
function vent(x,y,w,h,n){cx.fillStyle='#14161a';cx.fillRect(x,y,w,h);cx.strokeStyle='rgba(140,150,160,.55)';cx.lineWidth=.8;cx.beginPath();for(let i=1;i<n;i++){const xx=x+i*w/n;cx.moveTo(xx,y+1);cx.lineTo(xx,y+h-1)}cx.stroke()}
function smk(x,y,s,k){if(R()<.25*k)pt.push({x:x+(R()-.5)*s,y,vx:(R()-.5)*.3,vy:-.4-R()*.4,l:30,m:30,k:'m',c:R()<.3?'#5a5a5a':'#3a3a3a',sz:2+R()*2,dg:.98})}
function dmgSmoke(f){if(f.hp<f.mh*.5&&st=='play')smk(f.x,f.y,f.r,1)}
function gunTwin(len,gap,wd,w){for(const s2 of[-1,1]){cx.save();cx.translate(0,s2*gap);cx.fillStyle=w?'#fff':mtlV(-wd/2,wd/2,'#9aa2ae','#4a525c','#1c2026');cx.fillRect(4,-wd/2,len,wd);cx.lineWidth=1.1;cx.strokeStyle=GC0.dk;cx.strokeRect(4,-wd/2,len,wd);cx.fillStyle='#1a1c20';cx.fillRect(4+len-3,-wd/2-.6,3.5,wd+1.2);cx.restore()}}
function turretHead(r,c1,c2,w){cx.beginPath();cx.moveTo(-r*.9,-r);cx.lineTo(r*.55,-r);cx.lineTo(r,-r*.4);cx.lineTo(r,r*.4);cx.lineTo(r*.55,r);cx.lineTo(-r*.9,r);cx.quadraticCurveTo(-r*1.25,0,-r*.9,-r);cx.closePath();
  const g=cx.createRadialGradient(-r*.3,-r*.5,1,0,0,r*1.3);g.addColorStop(0,c1);g.addColorStop(1,c2);cx.fillStyle=w?'#fff':g;cx.fill();gOut(1.8);
  if(!w){hi([[-r*.7,-r*.75,r*.45,-r*.75]],.45);seams([[-r*.35,-r,-r*.35,r]],.35);cx.fillStyle='#1a1c20';cx.beginPath();cx.arc(-r*.6,r*.35,r*.22,0,TAU);cx.fill()}}

// ---------- ground forces ----------
EDR.N=function(f){const w=f.fl>0;dmgSmoke(f);cx.save();cx.translate(f.x,f.y);
  hx(0,0,16,8,Math.PI/8);cx.fillStyle=w?'#fff':'#8a8c80';cx.fill();gOut(2);
  if(!w){cx.save();hx(0,0,16,8,Math.PI/8);cx.clip();for(let i=0;i<8;i++){cx.fillStyle=i%2?'#ffd166':'#1a1a1a';cx.beginPath();cx.moveTo(0,0);cx.arc(0,0,16,i*TAU/8,(i+1)*TAU/8);cx.fill()}cx.fillStyle='#7a7c72';cx.beginPath();cx.arc(0,0,13,0,TAU);cx.fill();cx.restore();
    rivets([0,1,2,3,4,5,6,7].map(i=>[Math.cos(i*TAU/8+.4)*11,Math.sin(i*TAU/8+.4)*11]),.9)}
  cx.rotate(f.ba);if(f.mf>0){glow(22,0,12,[255,200,120],.9);cx.fillStyle='#fff3c4';poly([[19,-4],[29,0],[19,4]]);cx.fill()}
  cx.fillStyle=w?'#fff':mtlV(-3,3,'#a0a8b2','#4a525c','#1e2228');cx.fillRect(5,-2.8,13,5.6);cx.lineWidth=1.2;cx.strokeStyle=GC0.dk;cx.strokeRect(5,-2.8,13,5.6);cx.fillStyle='#14161a';cx.fillRect(16,-3.6,4,7.2);
  turretHead(8.5,'#c8d0da','#3a414c',w);if(!w){cx.fillStyle=GC0.red;cx.fillRect(-7,-2,3,4);glow(-5.5,0,6,[255,90,110],.6);vent(-3,3.5,6,2.6,3)}
  cx.restore()};
EDR.O=function(f){const w=f.fl>0,bl=f.wn&&Math.floor(t/5)%2;dmgSmoke(f);cx.save();cx.translate(f.x,f.y);
  rrp(-18,-18,36,36,6);cx.fillStyle=w?'#fff':'#8a8774';cx.fill();gOut(2.2);if(!w){cx.strokeStyle='rgba(30,30,20,.35)';cx.lineWidth=1;rrp(-14,-14,28,28,4);cx.stroke();hzd(-18,13,36,4);rivets([[-14,-14],[14,-14],[-14,9],[14,9]])}
  cx.save();cx.translate(12,-11);cx.rotate(t/30);cx.fillStyle=w?'#fff':'#c8d0da';cx.beginPath();cx.ellipse(0,0,6,2.4,0,0,TAU);cx.fill();gOut(1);cx.fillStyle='#1a1c20';cx.beginPath();cx.arc(0,0,1.4,0,TAU);cx.fill();cx.restore();
  cx.rotate(f.ba);rrp(-11,-11,22,22,4);cx.fillStyle=w?'#fff':mtl(-11,11,'#3a414c','#7a8492');cx.fill();gOut(1.6);
  for(const sy of[-6.5,-2.2,2.2,6.5]){const loaded=f.mf<=0;cx.fillStyle='#14161a';cx.fillRect(-8,sy-1.9,18,3.8);if(loaded){cx.fillStyle=w?'#fff':'#eef1f4';cx.fillRect(-6,sy-1.4,13,2.8);cx.fillStyle=GC0.red;poly([[7,sy-1.4],[11,sy],[7,sy+1.4]]);cx.fill();cx.fillStyle='#8a929c';cx.fillRect(-7,sy-1.9,2,3.8)}}
  cx.fillStyle=bl?'#fff':'#ff5d73';cx.beginPath();cx.arc(-9,-9,1.8,0,TAU);cx.fill();if(f.wn)glow(-9,-9,12,[255,90,110],bl?.9:.4);cx.restore()};
EDR.P=function(f){const w=f.fl>0,sp=(f.trk||0)*1.4;dmgSmoke(f);cx.save();cx.translate(f.x,f.y);cx.save();cx.rotate(f.hd);
  for(const s2 of[-1,1]){rrp(-13,s2*7.5-3.4,26,6.8,2.6);cx.fillStyle=w?'#fff':'#1b1e22';cx.fill();cx.strokeStyle='rgba(130,134,118,.7)';cx.lineWidth=1;cx.beginPath();for(let x=-12+((sp%3)+3)%3;x<12;x+=3){cx.moveTo(x,s2*7.5-3.2);cx.lineTo(x,s2*7.5+3.2)}cx.stroke();
    cx.fillStyle='#3a3e44';for(const x of[-9,-3,3,9]){cx.beginPath();cx.arc(x,s2*7.5,1.6,0,TAU);cx.fill()}}
  poly([[13,-5.5],[10,-7],[-11,-7],[-13,-4],[-13,4],[-11,7],[10,7],[13,5.5]]);cx.fillStyle=w?'#fff':mtlV(-7,7,'#8a9a72','#56664a','#2e3828');cx.fill();gOut(1.8);
  if(!w){seams([[-6,-7,-6,7],[6,-7,6,7]],.35);vent(-12,-3,4,6,3);cx.fillStyle='#2a2e26';cx.fillRect(10,-2,2.5,4);hi([[-10,-5.8,10,-5.8]],.3);if(st=='play')smk(f.x-Math.cos(f.hd)*14,f.y-Math.sin(f.hd)*14,2,.4)}
  cx.restore();cx.rotate(f.ta);if(f.mf>0){glow(19,0,10,[255,200,120],.9);cx.fillStyle='#fff3c4';poly([[16,-3],[24,0],[16,3]]);cx.fill()}
  cx.fillStyle=w?'#fff':mtlV(-2,2,'#9aa2ae','#4a525c','#1e2228');cx.fillRect(3,-1.9,13,3.8);cx.lineWidth=1;cx.strokeStyle=GC0.dk;cx.strokeRect(3,-1.9,13,3.8);cx.fillStyle='#1a1c20';cx.fillRect(12,-2.6,3,5.2);
  turretHead(6.2,'#a8b890','#3e4a34',w);if(!w){cx.fillStyle='#1a1c20';cx.beginPath();cx.arc(-2,-2.6,1.6,0,TAU);cx.fill();cx.strokeStyle='#14161a';cx.lineWidth=.8;cx.beginPath();cx.moveTo(-4,3);cx.lineTo(-11,8);cx.stroke();cx.fillStyle=GC0.red;cx.beginPath();cx.arc(-1.5,1.8,1.2,0,TAU);cx.fill()}
  cx.restore()};
EDR.Q=function(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);cx.rotate(f.hd);
  cx.fillStyle='rgba(0,0,0,.3)';cx.fillRect(-12,-5,26,12);
  cx.fillStyle=w?'#fff':'#16181c';for(const x of[-8,-2,8])for(const s2 of[-1,1])rrp(x-2.4,s2*6-1.8,4.8,3.6,1),cx.fill();
  rrp(-13,-5.8,18,11.6,1.5);cx.fillStyle=w?'#fff':'#c7a95c';cx.fill();cx.lineWidth=1.2;cx.strokeStyle='#3a2e10';cx.stroke();
  if(!w){cx.strokeStyle='rgba(74,58,20,.55)';cx.lineWidth=.9;cx.beginPath();for(const x of[-9,-5,-1,3]){cx.moveTo(x,-5.8);cx.quadraticCurveTo(x+1,0,x,5.8)}cx.stroke();hi([[-12,-4.6,4,-4.6]],.35);cx.fillStyle='#8a6a2a';cx.fillRect(-12,-1,16,2)}
  rrp(5,-5,8,10,2);cx.fillStyle=w?'#fff':mtlV(-5,5,'#7a8466','#4a5040','#2a2e24');cx.fill();gOut(1.3);cx.fillStyle=w?'#fff':'#9fd8ff';cx.fillRect(9.5,-3.6,2.4,7.2);
  if(!w){cx.fillStyle='#fff6c0';for(const s2 of[-1,1]){cx.beginPath();cx.arc(13,s2*3.4,1,0,TAU);cx.fill()}glow(16,0,6,[255,240,180],.35)}cx.restore()};
EDR.U=function(f){const w=f.fl>0;dmgSmoke(f);cx.save();cx.translate(f.x,f.y);
  cx.fillStyle=w?'#fff':'#3d4a44';poly([[-1.8,-6],[1.8,-6],[1.2,-25],[-1.2,-25]]);cx.fill();gOut(1.2);poly([[0,-22],[5,-28],[5,-24],[1,-20]]);cx.fillStyle=w?'#fff':GC0.red;cx.fill();gOut(1);
  cx.save();cx.translate(-1.5,-24);cx.rotate(f.rt*.9);cx.strokeStyle='rgba(20,20,20,.75)';cx.lineWidth=1.4;cx.beginPath();cx.moveTo(-5,0);cx.lineTo(5,0);cx.stroke();cx.restore();
  for(const s2 of[-1,1]){poly([[s2*5,-3],[s2*14,-1],[s2*14,3],[s2*5,4]]);cx.fillStyle=w?'#fff':'#4a5a52';cx.fill();gOut(1.2);
    rrp(s2*12-2.6,-5,5.2,10,2.4);cx.fillStyle=w?'#fff':'#2a2e36';cx.fill();gOut(1);cx.fillStyle=w?'#fff':'#f2f4f6';cx.fillRect(s2*12-1.4,4.4,2.8,2.4);cx.fillStyle=GC0.red;cx.fillRect(s2*12-1.4,6.6,2.8,1.2)}
  cx.beginPath();cx.moveTo(0,15);cx.bezierCurveTo(8,13,9,-4,6,-9);cx.lineTo(-6,-9);cx.bezierCurveTo(-9,-4,-8,13,0,15);cx.closePath();cx.fillStyle=w?'#fff':mtl(-9,9,'#2e3a34','#7a8c80');cx.fill();gOut(1.8);
  if(!w){seams([[-7,0,7,0],[-6,-6,6,-6]],.3);vent(-3,-8,6,3,3);hi([[-3,-4,-3,9]],.25)}
  cx.beginPath();cx.ellipse(0,9,4,4.6,0,0,TAU);cx.fillStyle=w?'#fff':'#7fe0ff';cx.fill();cx.lineWidth=1;cx.strokeStyle='#0a2430';cx.stroke();cx.beginPath();cx.ellipse(0,3.5,3.4,3,0,0,TAU);cx.fill();cx.stroke();
  if(!w){cx.fillStyle='rgba(255,255,255,.7)';cx.fillRect(-2,6.5,1.4,3)}
  lamp(0,-10,[255,90,110],14,f.x,1.3);
  cx.save();cx.rotate(f.rt*.55);cx.globalAlpha=.14;cx.fillStyle='#e8eef0';cx.beginPath();cx.arc(0,0,22,0,TAU);cx.fill();cx.globalAlpha=1;
  for(let i=0;i<4;i++){cx.rotate(Math.PI/2);cx.strokeStyle='rgba(16,18,20,.85)';cx.lineWidth=2.6;cx.beginPath();cx.moveTo(0,0);cx.lineTo(22,0);cx.stroke();cx.strokeStyle='rgba(255,209,102,.8)';cx.lineWidth=1;cx.beginPath();cx.moveTo(19,0);cx.lineTo(22,0);cx.stroke()}cx.restore();
  cx.beginPath();cx.arc(0,0,2.6,0,TAU);cx.fillStyle='#1a1c20';cx.fill();cx.restore()};
EDR.F=function(f){const w=f.fl>0;dmgSmoke(f);cx.save();cx.translate(f.x,f.y);
  for(let i=0;i<12;i++){const a=i/12*TAU;cx.fillStyle=w?'#fff':i%2?'#8a7a56':'#a08e66';cx.beginPath();cx.ellipse(Math.cos(a)*14,Math.sin(a)*14,4.6,3.2,a+Math.PI/2,0,TAU);cx.fill();cx.lineWidth=.8;cx.strokeStyle='#3a3020';cx.stroke()}
  if(!w){for(const[x,y]of[[-8,8],[-4,10]]){cx.fillStyle='#5a6248';cx.fillRect(x,y,4,3);cx.strokeStyle='#22261a';cx.lineWidth=.6;cx.strokeRect(x,y,4,3)}}
  cx.rotate(f.ba);if(f.mf>0){for(const s2 of[-1,1]){glow(22,s2*3.6,8,[255,210,120],.9);cx.fillStyle='#fff3c4';poly([[19,s2*3.6-2],[25,s2*3.6],[19,s2*3.6+2]]);cx.fill()}}
  gunTwin(15,3.6,2.6,w);rrp(-8,-7.5,13,15,3);cx.fillStyle=w?'#fff':mtl(-8,5,'#3a414c','#7a8492');cx.fill();gOut(1.6);
  if(!w){cx.fillStyle='#ffd166';cx.fillRect(-7,-6.5,3,13);cx.fillStyle='#1a1a1a';for(let y=-6;y<6;y+=2.6)cx.fillRect(-7,y,3,1.2);lamp(1,0,[255,90,110],18,f.x,1.5)}
  cx.restore()};
EDR.V=function(f){const w=f.fl>0;cx.save();cx.translate(f.x,f.y);cx.save();cx.rotate(f.hd);
  cx.strokeStyle='rgba(235,245,255,.55)';cx.lineWidth=1.8;cx.beginPath();cx.moveTo(-10,-5);cx.lineTo(-26-Math.sin(f.wk/6)*2,-12);cx.moveTo(-10,5);cx.lineTo(-26-Math.sin(f.wk/6)*2,12);cx.stroke();cx.fillStyle='rgba(235,245,255,.35)';cx.beginPath();cx.ellipse(-14,0,6,4,0,0,TAU);cx.fill();
  poly([[16,0],[8,-6.5],[-12,-6.5],[-14,-3],[-14,3],[-12,6.5],[8,6.5]]);cx.fillStyle=w?'#fff':mtlV(-6.5,6.5,'#8a9890','#4e5a52','#2a322e');cx.fill();gOut(1.8);
  if(!w){hi([[-11,-5.4,8,-5.4]],.35);seams([[0,-6.5,0,6.5]],.3);cx.fillStyle='#2a2e2a';cx.fillRect(-13,-2,3,4)}
  rrp(-9,-4,10,8,2);cx.fillStyle=w?'#fff':'#a8b4ac';cx.fill();gOut(1.2);cx.fillStyle=w?'#fff':'#9fd8ff';cx.fillRect(-2.5,-3,2.4,6);
  cx.strokeStyle='#1a1c20';cx.lineWidth=1;cx.beginPath();cx.moveTo(-5,0);cx.lineTo(-5,-9);cx.stroke();lamp(-5,-9,[255,90,110],16,f.y,1.1);cx.restore();
  cx.translate(Math.cos(f.hd)*7,Math.sin(f.hd)*7);cx.rotate(f.ta);if(f.mf>0){glow(14,0,8,[255,200,120],.9)}cx.fillStyle=w?'#fff':'#2a2e36';cx.fillRect(2,-1.5,10,3);gOut(1);turretHead(4.6,'#c0c8d0','#3a414c',w);cx.restore()};
EDR.G=function(f){const w=f.fl>0;dmgSmoke(f);cx.save();cx.translate(f.x,f.y);
  cx.fillStyle='rgba(235,245,255,.35)';poly([[-9,-46],[9,-46],[20,-74],[-20,-74]]);cx.fill();cx.strokeStyle='rgba(235,245,255,.55)';cx.lineWidth=1.6;for(const s2 of[-1,1]){cx.beginPath();cx.moveTo(s2*3,46);cx.quadraticCurveTo(s2*14,30,s2*15,6);cx.stroke()}
  const P=[[0,50],[10,34],[13,8],[13,-34],[9,-46],[-9,-46],[-13,-34],[-13,8],[-10,34]];poly(P);cx.fillStyle=w?'#fff':mtl(-13,13,'#2e3844','#7c8896');cx.fill();gOut(2.2);
  if(!w){cx.save();poly(P);cx.clip();cx.fillStyle='#5a6672';cx.fillRect(-10,-42,20,84);seams([[0,44,0,-44],[-10,14,10,14],[-10,-30,10,-30]],.35);cx.fillStyle='#ffffff';cx.font='bold 7px sans-serif';cx.textAlign='center';cx.save();cx.translate(0,40);cx.rotate(Math.PI);cx.fillText('31',0,0);cx.restore();cx.restore();
    for(let i=0;i<4;i++)for(const s2 of[-1,1]){cx.fillStyle='#22262c';cx.fillRect(s2*5-1.6,4+i*4,3.2,3);cx.fillStyle=Math.floor(t/8+i)%5==0?'#ff8a5c':'#3a3e44';cx.fillRect(s2*5-1,4.5+i*4,2,2)}}
  rrp(-7,-12,14,20,3);cx.fillStyle=w?'#fff':mtlV(-12,8,'#c4ccd6','#6a7480');cx.fill();gOut(1.4);cx.fillStyle=w?'#fff':'#7fe0ff';cx.fillRect(-5,4,10,2.2);
  cx.save();cx.translate(0,-2);cx.rotate(t/16);cx.fillStyle='#d0d8e2';cx.fillRect(-6,-1,12,2);cx.restore();
  rrp(-3.5,-24,7,9,2);cx.fillStyle=w?'#fff':'#2a2e36';cx.fill();gOut(1.2);if(!w)flame(0,-25,2.5,6+Math.sin(t/3)*2,[110,110,110],-1);
  for(const[y,a]of[[26,f.tA],[-34,f.tB]]){cx.save();cx.translate(0,y);cx.rotate(a);if(f.mf>0)glow(18,0,10,[255,200,120],.9);gunTwin(12,2.4,2.4,w);turretHead(6,'#c6ced8','#3e4550',w);cx.restore()}
  lamp(0,-14,[255,90,110],20,0,1.4);cx.restore()};
EDR.L=function(f){const w=f.fl>0,bl=f.wn&&Math.floor(t/5)%2;dmgSmoke(f);cx.save();cx.translate(f.x,f.y);
  poly(hp(0,0,20,6,Math.PI/6));cx.fillStyle=w?'#fff':'#8a8676';cx.fill();gOut(2.2);
  if(!w){cx.save();poly(hp(0,0,20,6,Math.PI/6));cx.clip();for(let i=0;i<7;i++){cx.fillStyle=['#6e7458','#9a9476','#5a5e48'][i%3];cx.beginPath();cx.ellipse(-14+i*5,(i%2?-8:9),7,4,i,0,TAU);cx.fill()}cx.restore();rivets(hp(0,0,15,6,Math.PI/6))}
  cx.rotate(f.ba);if(f.mf>0){glow(36,0,16,[255,200,120],.9);cx.fillStyle='#fff3c4';poly([[33,-5],[44,0],[33,5]]);cx.fill()}
  cx.fillStyle=w?'#fff':mtlV(-3.6,3.6,'#a0a8b2','#4a525c','#1e2228');cx.fillRect(8,-3.6,24,7.2);cx.lineWidth=1.2;cx.strokeStyle=GC0.dk;cx.strokeRect(8,-3.6,24,7.2);
  cx.fillStyle='#16181c';cx.fillRect(28,-5,6,10);gOut(1);cx.fillStyle='#3a3e44';cx.fillRect(29.5,-5,1.2,10);cx.fillRect(31.8,-5,1.2,10);
  rrp(-13,-11,23,22,5);cx.fillStyle=w?'#fff':mtl(-13,10,'#4a5240','#8a9478','#3a4030');cx.fill();gOut(2);if(!w){seams([[-5,-11,-5,11]],.35);vent(-11,-8,5,16,4)}
  cx.fillStyle=bl?'#fff':'#ff5d73';cx.beginPath();cx.arc(3,-7,2.2,0,TAU);cx.fill();if(f.wn)glow(3,-7,14,[255,90,110],bl?.9:.4);cx.restore()};
EDR.R=function(f){const w=f.fl>0,bl=f.wn&&Math.floor(t/5)%2;dmgSmoke(f);cx.save();cx.translate(f.x,f.y);
  cx.fillStyle='rgba(0,0,0,.35)';cx.fillRect(-13,-12,30,30);cx.fillStyle=w?'#fff':'#6a6e76';cx.fillRect(-16,-15,30,30);cx.strokeStyle='#2a2c30';cx.lineWidth=1.4;cx.strokeRect(-16,-15,30,30);
  if(!w){cx.fillStyle='#55595f';cx.fillRect(-14,-13,26,26);hzd(-16,11,30,4);vent(6,-13,7,5,3);cx.strokeStyle='rgba(255,209,102,.5)';cx.lineWidth=1;cx.beginPath();cx.arc(-1,-1,10,0,TAU);cx.stroke()}
  cx.rotate(f.ba);rrp(-10,-9,20,18,3);cx.fillStyle=w?'#fff':mtl(-10,10,'#3a414c','#7a8492');cx.fill();gOut(1.6);
  for(const s2 of[-1,1])for(const s3 of[-1,1]){const lit=f.mf<=0,yy=s2*4.4+s3*1.9;cx.fillStyle='#14161a';cx.fillRect(-7,yy-1.6,16,3.2);if(lit){cx.fillStyle=w?'#fff':'#eef1f4';cx.fillRect(-5,yy-1.1,12,2.2);cx.fillStyle=GC0.red;poly([[7,yy-1.1],[10,yy],[7,yy+1.1]]);cx.fill()}}
  cx.fillStyle=bl?'#fff':'#ff5d73';cx.beginPath();cx.arc(-8,0,1.8,0,TAU);cx.fill();if(f.wn)glow(-8,0,12,[255,90,110],bl?.9:.4);cx.restore()};
EDR.S=function(f){const w=f.fl>0;dmgSmoke(f);cx.save();cx.translate(f.x,f.y);
  cx.fillStyle='#1a1c20';for(const y of[-10,10])for(const s2 of[-1,1])cx.fillRect(s2*9-2,y-3,4,6);
  rrp(-10,-15,20,30,3);const base=f.car==0?['#5a2a22','#a85a46']:f.car==1?['#3a4232','#6e7c5c']:['#3a3e46','#6e7480'];cx.fillStyle=w?'#fff':mtl(-10,10,base[0],base[1]);cx.fill();gOut(2);
  if(!w){seams([[-10,-7,10,-7],[-10,7,10,7]],.4);hi([[-8,-14,-8,14]],.25);rivets([[-7,-12],[7,-12],[-7,12],[7,12]],.8)}
  if(f.car==0){cx.fillStyle=w?'#fff':'#9fd8ff';cx.fillRect(-6,9,12,3);if(!w){hzd(-10,12.5,20,2.5);vent(-5,-12,10,5,4);flame(0,-15,3,7+Math.sin(t/3)*2,[120,120,120],-1)}cx.fillStyle='#fff6c0';for(const s2 of[-1,1]){cx.beginPath();cx.arc(s2*6,15,1.2,0,TAU);cx.fill()}}
  else if(f.car==1){cx.rotate(f.ta);if(f.mf>0)glow(17,0,9,[255,200,120],.9);cx.fillStyle=w?'#fff':mtlV(-2,2,'#9aa2ae','#2a2e36');cx.fillRect(3,-2,13,4);gOut(1);turretHead(6.5,'#c6ced8','#3e4550',w)}
  else{for(const s2 of[-1,1]){rrp(s2*4.5-3.5,-9,7,18,2);cx.fillStyle=w?'#fff':'#22262c';cx.fill();gOut(1);for(let i=0;i<3;i++){cx.fillStyle=w?'#fff':'#eef1f4';cx.fillRect(s2*4.5-1.2,-7+i*5.5,2.4,4);cx.fillStyle=GC0.red;cx.fillRect(s2*4.5-1.2,-3.6+i*5.5,2.4,.9)}}lamp(0,-12,[255,90,110],16,0,1.3)}
  cx.restore()};
EDR.T=function(f){const w=f.fl>0;dmgSmoke(f);cx.save();cx.translate(f.x,f.y);
  const P=[[0,-26],[9,-15],[16,-14],[25,9],[13,21],[-9,23],[-25,9],[-17,-8],[-9,-12]];cx.fillStyle='rgba(30,40,70,.3)';cx.beginPath();cx.ellipse(10,17,27,12,0,0,TAU);cx.fill();
  poly(P);cx.fillStyle=w?'#fff':'#7a7e88';cx.fill();gOut(2);
  if(!w){cx.save();poly(P);cx.clip();cx.fillStyle='#545862';poly([[0,-26],[25,9],[13,21],[3,0]]);cx.fill();cx.fillStyle='#8a8e98';poly([[-25,9],[-9,-12],[-4,4]]);cx.fill();cx.fillStyle='#f2f6fa';poly([[0,-26],[9,-15],[5,-12],[0,-16],[-5,-11],[-9,-12]]);cx.fill();cx.strokeStyle='rgba(20,22,30,.35)';cx.lineWidth=1;cx.beginPath();cx.moveTo(-12,14);cx.lineTo(-4,4);cx.lineTo(4,12);cx.stroke();cx.restore()}
  for(let k=0;k<5;k++){const x=(k-2)*13,g=cx.createRadialGradient(x,20,1,x,20,14);g.addColorStop(0,'rgba(226,233,245,.9)');g.addColorStop(1,'rgba(226,233,245,0)');cx.fillStyle=g;cx.fillRect(x-14,6,28,28)}
  cx.translate(0,1);rrp(-11,-9,22,18,4);cx.fillStyle=w?'#fff':'#5a6270';cx.fill();gOut(1.6);if(!w){hzd(-11,6,22,3);rivets([[-8,-6],[8,-6]],.8)}
  cx.rotate(f.ba);if(f.mf>0){glow(22,0,10,[255,200,120],.9)}gunTwin(14,3.2,2.8,w);turretHead(7,'#c6ced8','#3e4550',w);cx.restore()};
EDR.Y=function(f){const w=f.fl>0;dmgSmoke(f);cx.save();cx.translate(f.x,f.y);
  for(const s2 of[-1,1]){poly([[s2*5,-36],[s2*19,-52],[s2*19,-44],[s2*9,-28]]);cx.fillStyle=w?'#fff':GC0.red;cx.fill();gOut(1.4)}poly([[-2,-40],[2,-40],[1.6,-56],[-1.6,-56]]);cx.fillStyle=w?'#fff':GC0.red;cx.fill();gOut(1);
  cx.beginPath();cx.ellipse(0,0,18,44,0,0,TAU);cx.fillStyle=w?'#fff':mtl(-18,18,'#4a4e58','#d4d8e0');cx.fill();gOut(2.4);
  if(!w){cx.save();cx.beginPath();cx.ellipse(0,0,18,44,0,0,TAU);cx.clip();cx.strokeStyle='rgba(30,34,40,.4)';cx.lineWidth=1;cx.beginPath();for(let y=-40;y<=40;y+=10){cx.moveTo(-18,y);cx.quadraticCurveTo(0,y+4,18,y)}for(const x of[-9,0,9]){cx.moveTo(x,-44);cx.lineTo(x,44)}cx.stroke();
    cx.fillStyle=GC0.red;cx.fillRect(-18,-4,36,8);cx.fillStyle='rgba(255,255,255,.3)';cx.beginPath();cx.ellipse(-6,-8,5,30,0,0,TAU);cx.fill();cx.restore()}
  rrp(-7,6,14,22,4);cx.fillStyle=w?'#fff':'#3a414c';cx.fill();gOut(1.6);if(!w){cx.fillStyle='#7fe0ff';for(let i=0;i<4;i++)cx.fillRect(-5,9+i*4.5,10,2);}
  for(const s2 of[-1,1]){cx.save();cx.translate(s2*22,8);cx.fillStyle=w?'#fff':'#3a414c';rrp(-3.5,-7,7,14,3);cx.fill();gOut(1.2);cx.translate(0,-8);cx.rotate((f.pr||0)*.8);cx.strokeStyle='rgba(20,20,24,.75)';cx.lineWidth=1.8;cx.beginPath();cx.moveTo(-8,0);cx.lineTo(8,0);cx.stroke();cx.restore()}
  lamp(0,40,[255,90,110],14,0,2);lamp(-14,-20,[120,255,160],22,5,1.2);lamp(14,-20,[255,90,110],22,5,1.2);
  cx.restore()};
EDR.W=function(f){const w=f.fl>0;dmgSmoke(f);cx.save();cx.translate(f.x,f.y);
  cx.save();cx.rotate((f.rt||0)*.01);for(let i=0;i<3;i++){cx.rotate(TAU/3);cx.fillStyle=w?'#fff':'#3a404a';cx.fillRect(10,-2,12,4);gOut(1);rrp(20,-6,10,12,1);cx.fillStyle=w?'#fff':mtlV(-6,6,'#3a6ab8','#1a2e5a');cx.fill();gOut(1)}cx.restore();
  hx(0,0,15,6,0);cx.fillStyle=w?'#fff':mtl(-15,15,'#4a525e','#a0aab6');cx.fill();gOut(2);if(!w){cx.strokeStyle='rgba(160,230,255,.7)';cx.lineWidth=1;hx(0,0,11,6,0);cx.stroke();rivets(hp(0,0,13,6,Math.PI/6),.8)}
  for(let i=0;i<6;i++)lamp(Math.cos(i*TAU/6)*13.5,Math.sin(i*TAU/6)*13.5,[160,230,255],30,i*5,.9);
  cx.rotate(f.ba);if(f.mf>0)glow(20,0,10,[255,200,120],.9);gunTwin(13,3.2,2.8,w);turretHead(7,'#d0d8e2','#3e4654',w);cx.restore()};
EDR.X=function(f){const w=f.fl>0;dmgSmoke(f);cx.save();cx.translate(f.x,f.y);
  for(const s2 of[-1,1]){rrp(s2*11-4,-10,8,20,2);cx.fillStyle=w?'#fff':'#3a404a';cx.fill();gOut(1.2);cx.fillStyle='#1a1c20';for(const y of[-6,0,6]){cx.beginPath();cx.arc(s2*11,y,2,0,TAU);cx.fill()}if(!w)glow(s2*11,-12,7,[160,230,255],.6)}
  rrp(-10,-16,20,32,7);cx.fillStyle=w?'#fff':mtl(-10,10,'#3a404a','#c0cad6');cx.fill();gOut(2);
  if(!w){hzd(-10,-16,20,3);hzd(-10,13,20,3);seams([[-10,-6,10,-6],[-10,6,10,6]],.4)}
  cx.save();cx.rotate(f.sp2);for(let i=0;i<6;i++){cx.rotate(TAU/6);cx.fillStyle='#ff8a5c';cx.fillRect(5,-1,3,2)}cx.restore();
  coreD(0,0,3.4,[255,90,110],1);cx.restore()};
EDR.Z=function(f){const w=f.fl>0;dmgSmoke(f);cx.save();cx.translate(f.x,f.y);cx.rotate(f.rt);
  for(const s2 of[-1,1]){cx.fillStyle=w?'#fff':'#8a929c';cx.fillRect(s2*8-(s2<0?6:0),-1.2,6,2.4);rrp(s2*14-(s2<0?16:0),-7,16,14,1);cx.fillStyle=w?'#fff':mtlV(-7,7,'#4a7ac8','#16284e');cx.fill();gOut(1.4);
    if(!w){cx.strokeStyle='rgba(170,210,255,.55)';cx.lineWidth=.7;cx.beginPath();for(let k=1;k<4;k++){const x=s2*14-(s2<0?16:0)+k*4;cx.moveTo(x,-7);cx.lineTo(x,7)}cx.moveTo(s2*14-(s2<0?16:0),0);cx.lineTo(s2*14+(s2<0?0:16),0);cx.stroke();cx.fillStyle='rgba(255,255,255,.25)';cx.fillRect(s2*14-(s2<0?16:0),-7,16,2)}}
  hx(0,0,8,8,0);cx.fillStyle=w?'#fff':mtl(-8,8,'#8a929c','#e0e6ee');cx.fill();gOut(1.8);
  cx.save();cx.translate(0,-9);cx.beginPath();cx.ellipse(0,0,5,2.2,0,0,TAU);cx.fillStyle=w?'#fff':'#d0d8e2';cx.fill();gOut(1);cx.restore();cx.strokeStyle='#3a404a';cx.lineWidth=1.2;cx.beginPath();cx.moveTo(0,-7);cx.lineTo(0,-11);cx.stroke();
  coreD(0,0,2.6,[255,90,110],1);cx.restore()};
// ---------- extra detail layered on the mid-bosses and bosses ----------
function wrapB(T,fn){const o=BART[T];BART[T]=(f,p,pc,c,pu,M)=>{o(f,p,pc,c,pu,M);fn(f,p,pc,c,pu,M)}}
function wrapM(T,fn){const o=MART[T-7];MART[T-7]=(f,c1,c2,w,pc,pu,aimT,M)=>{o(f,c1,c2,w,pc,pu,aimT,M);if(!w)fn(f,c1,c2,pc,pu,aimT,M)}}
// 22 陸上戦艦ベヒモス
wrapB(22,(f,p)=>{hzd(-30,74,60,4);rivets([[-40,-44],[40,-44],[-40,0],[40,0],[-40,44],[40,44],[-28,66],[28,66]]);
  vent(-40,30,14,10,4);vent(26,30,14,10,4);for(const s2 of[-1,1])lamp(s2*44,-60,[255,90,110],18,s2*9,1.8);
  cx.save();cx.translate(0,-74);cx.rotate(Math.sin(t/30)*.6);cx.strokeStyle='#1a1c20';cx.lineWidth=1.4;cx.beginPath();cx.moveTo(0,0);cx.lineTo(0,-8);cx.stroke();cx.fillStyle='#c8d0da';cx.beginPath();cx.ellipse(0,-9,6,2.4,0,0,TAU);cx.fill();gOut(1);cx.restore();
  cx.fillStyle='rgba(240,240,230,.5)';cx.font='bold 11px sans-serif';cx.textAlign='center';cx.fillText('01',-30,62);
  if(st=='play')for(const s2 of[-1,1])smk(f.x+s2*30,f.y-76,3,.6)});
// 23 航空母艦アルバトロス (already detailed): add deck crew lights
wrapB(23,f=>{for(let i=0;i<6;i++)lamp(-40+(i%2)*80,-100+i*36,[255,209,102],26,i*7,1.4);lamp(0,118,[255,90,110],14,0,2)});
// 24 超弩級戦艦ポセイドン
wrapB(24,f=>{cx.save();cx.fillStyle='#2a3038';for(let i=0;i<4;i++)for(let j=0;j<3;j++){cx.fillRect(-12+j*8,64+i*6,6,4.5);if(Math.floor(t/10+i+j)%7==0){cx.fillStyle='#ff8a5c';cx.fillRect(-11+j*8,65+i*6,4,2.5);cx.fillStyle='#2a3038'}}cx.restore();
  cx.strokeStyle='rgba(255,255,255,.55)';cx.lineWidth=1.4;cx.beginPath();cx.arc(0,-84,8,Math.PI*.1,Math.PI*.9);cx.stroke();
  rivets([[-30,-50],[30,-50],[-32,0],[32,0],[-28,40],[28,40]]);for(const s2 of[-1,1]){lamp(s2*34,-80,s2<0?[255,90,110]:[120,255,160],22,0,1.8);vent(s2*26-5,10,10,14,4)}
  cx.save();cx.translate(0,-26);cx.rotate(t/14);cx.fillStyle='#d0d8e2';cx.fillRect(-11,-1.5,22,3);gOut(1);cx.restore();
  cx.fillStyle='rgba(240,240,230,.6)';cx.font='bold 12px sans-serif';cx.textAlign='center';cx.save();cx.translate(0,88);cx.rotate(Math.PI);cx.fillText('99',0,0);cx.restore()});
// 25 機動要塞ギガンテス
wrapB(25,f=>{hzd(-44,-40,88,4);for(const s2 of[-1,1]){vent(s2*34-6,-24,12,10,4);rivets([[s2*44,-30],[s2*40,10],[s2*26,22]]);lamp(s2*8,-50,[255,90,110],16,s2*5,1.6)}
  cx.strokeStyle='rgba(255,93,115,.8)';cx.lineWidth=1.4;const k=(t/6)%1;cx.beginPath();cx.moveTo(-30,-10);cx.lineTo(-10,-10);cx.moveTo(30,-10);cx.lineTo(10,-10);cx.stroke();glow(-30+k*20,-10,4,[255,90,110],.8);glow(30-k*20,-10,4,[255,90,110],.8);
  if(st=='play')for(const s2 of[-1,1])smk(f.x+s2*20,f.y-60,3,.5)});
// 26 山岳要塞オリンポス
wrapB(26,f=>{for(let i=0;i<8;i++){const a=i/8*TAU+Math.PI/8;lamp(Math.cos(a)*42,Math.sin(a)*42,i%2?[255,90,110]:[255,209,102],24,i*5,1.6)}
  for(const[x,y]of[[-70,-12],[72,-6]]){cx.save();cx.translate(x,y);cx.rotate(t/20+x);cx.fillStyle='#d0d8e2';cx.beginPath();cx.ellipse(0,0,8,3,0,0,TAU);cx.fill();gOut(1);cx.restore();cx.strokeStyle='#2a2e36';cx.lineWidth=1.4;cx.beginPath();cx.moveTo(x,y);cx.lineTo(x,y+10);cx.stroke()}
  hzd(-20,40,40,4);cx.strokeStyle='rgba(160,230,255,.5)';cx.setLineDash([4,4]);cx.lineWidth=1;cx.beginPath();cx.arc(0,0,30,0,TAU);cx.stroke();cx.setLineDash([])});
// 27 昇降要塞バベル
wrapB(27,f=>{for(const y of[-52,52]){hzd(-60,y+6,120,3)}for(const s2 of[-1,1]){cx.save();cx.translate(s2*60,0);cx.fillStyle='#3a404a';cx.fillRect(-2,-30,4,60);for(let i=0;i<3;i++){rrp(-12,-28+i*20,24,14,1);cx.fillStyle=mtlV(-7,7,'#4a7ac8','#16284e');cx.fill();gOut(1.2)}cx.restore()}
  const k=(t/40)%1;cx.fillStyle='rgba(160,230,255,.9)';for(let i=0;i<3;i++){const y=-140+((k+i/3)%1)*280;cx.fillRect(-2,y,4,10)}});
// 28 軌道砲グングニル
wrapB(28,f=>{const k=(t/30)%1;for(const y of[20,42,64,86]){const on=Math.abs((y-10)/90-k)<.12;cx.fillStyle=on?'#bfe8ff':'#3a5a7a';cx.fillRect(-10,y,20,2);if(on)glow(0,y,14,[160,230,255],.7)}
  hzd(-44,-62,88,4);for(const s2 of[-1,1]){lamp(s2*40,-30,[255,90,110],18,s2*6,2);rivets([[s2*30,-44],[s2*36,0]])}
  cx.strokeStyle='rgba(160,230,255,.6)';cx.lineWidth=1.2;cx.beginPath();for(const s2 of[-1,1]){cx.moveTo(s2*44,-20);cx.lineTo(s2*62,-6)}cx.stroke()});
// mid-bosses
wrapM(22,(f)=>{hzd(-27,30,54,4);rivets([[-22,-30],[22,-30],[-22,20],[22,20]]);lamp(-20,-32,[255,90,110],16,0,1.6);lamp(20,-32,[255,90,110],16,8,1.6);if(st=='play')smk(f.x,f.y-40,6,.5)});
wrapM(23,(f)=>{hzd(-24,26,48,3);for(const s2 of[-1,1]){lamp(s2*30,-4,[255,209,102],14,s2*4,1.5);vent(s2*16-4,-18,8,8,3)}});
wrapM(24,(f)=>{for(const s2 of[-1,1])lamp(s2*18,-40,s2<0?[255,90,110]:[120,255,160],20,0,1.5);cx.save();cx.translate(0,8);cx.rotate(t/12);cx.fillStyle='#d0d8e2';cx.fillRect(-7,-1,14,2);cx.restore();cx.fillStyle='rgba(240,240,230,.6)';cx.font='bold 8px sans-serif';cx.textAlign='center';cx.fillText('S-7',0,-12)});
wrapM(25,(f)=>{hzd(-26,30,52,4);rivets([[-20,-20],[20,-20],[-20,16],[20,16]]);if(st=='play')smk(f.x+16,f.y-40,3,.5)});
wrapM(26,(f)=>{for(const s2 of[-1,1]){lamp(s2*20,-30,s2<0?[255,90,110]:[120,255,160],22,0,1.6)}lamp(0,50,[255,209,102],12,0,1.8);cx.fillStyle='rgba(255,255,255,.25)';cx.beginPath();cx.ellipse(-9,-14,6,34,0,0,TAU);cx.fill()});
wrapM(27,(f)=>{hzd(-30,32,60,4);for(const s2 of[-1,1])for(const y of[-30,30])lamp(s2*24,y,[160,230,255],18,y,1.4)});
wrapM(28,(f)=>{for(let i=0;i<8;i++){const a=i/8*TAU;lamp(Math.cos(a)*18,Math.sin(a)*18,[160,230,255],24,i*3,1.2)}cx.strokeStyle='rgba(160,230,255,.6)';cx.lineWidth=1;cx.setLineDash([3,3]);cx.beginPath();cx.arc(0,0,28,t/40,t/40+Math.PI);cx.stroke();cx.setLineDash([])});
// ---------- a little easier overall (course 宇宙へ only) ----------
CF[0]={hp:.9,es:.94,sp:.9};
for(let T=22;T<=28;T++){const ai=BAI[T-7];BAI[T-7]=(b,dt)=>ai(b,dt*.9);HPS[T]=Math.round(HPS[T]*.92);MHP[T]=Math.round(MHP[T]*.94)}
{const seen=new Set();for(let T=22;T<=28;T++)for(const i of MSEQ[T]){if(seen.has(i))continue;seen.add(i);const o=MPAT[i];MPAT[i]=(f,x,y,a)=>{o(f,x,y,a);f.nx*=1.12}}}
STG[26].sp=1;STG[27].sp=1;
