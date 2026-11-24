
// ===== 「宇宙へ」 missiles: 3 kinds, all can be shot down (bombs clear them too) =====
// 11 小型ミサイル (straight) / 14 誘導ミサイル (homes for a moment) / 15 大型ミサイル (tough, bursts into shrapnel when its fuse runs out)
function msl(x,y,a,v,kind){const ty=[11,14,15][kind||0],q=fireS(ty,x,y,a,v);if(!q)return;q.mhp=kind==2?3:1;q.hp2=q.mhp;
  if(kind==1){q.hm=46}else if(kind==2){q.fu=150+R()*30}return q}
function mslTick(dt){if(!eb.length)return;
  for(const q of eb){if(q.d||q.ty<11||(q.ty>11&&q.ty<14)||q.ty>15)continue;
    if(q.ty==15&&q.fu!=null){q.fu-=dt;if(q.fu<=0){q.d=1;explode(q.x,q.y,8,'#ffb347');sfx('hit');for(let i=0;i<6;i++)fireS(13,q.x,q.y,i/6*TAU+R(),1.7);continue}}
    for(const b of bl){if(b.d||(b.h&&b.h.has(q)))continue;const rr=7+(b.CB?(b.cr||18):b.L?6:3)+(q.ty==15?3:0);if(Math.abs(b.x-q.x)>rr||Math.abs(b.y-q.y)>rr+8)continue;
      if(Math.hypot(b.x-q.x,b.y-q.y)>rr)continue;if(b.pi||b.L||b.CB||q.ty!=15){(b.h||(b.h=new Set())).add(q)}else b.d=1;
      q.hp2=(q.hp2??1)-Math.max(1,(b.dm||1)*.8);if(q.hp2>0){q.fl2=4;pt.push({x:q.x,y:q.y,vx:0,vy:0,l:8,m:8,c:'#fff',ring:5});continue}
      q.d=1;const big=q.ty==15;score+=big?60:15;explode(q.x,q.y,big?8:4,big?'#ffb347':'#ffd27a');sfx(big?'kill':'tink');
      if(big)pt.push({x:q.x,y:q.y-12,vx:0,vy:-.5,l:40,m:40,c:'#ffd166',txt:'撃墜 +60',fs:11});break}}}
{const g0=gTick;gTick=function(dt){g0(dt);mslTick(dt)}}
function mslBody(L,R0,cBody,cNose,cFin,band){const fl=6+R()*6;glow(-L-2,0,11,[255,140,50],.8);
  cx.fillStyle='rgba(255,120,40,.9)';poly([[-L,-R0*.8],[-L-1-fl,0],[-L,R0*.8]]);cx.fill();cx.fillStyle='#fff0b8';poly([[-L,-R0*.45],[-L-1-fl*.55,0],[-L,R0*.45]]);cx.fill();
  cx.fillStyle='#2a2e34';cx.fillRect(-L-1,-R0*.7,2,R0*1.4);
  for(const s2 of[-1,1]){poly([[-L*.45,s2*R0*.85],[-L*.86,s2*R0*3.3],[-L*1.07,s2*R0*3.3],[-L*.98,s2*R0*.85]]);cx.fillStyle=cFin;cx.fill();cx.lineWidth=1.3;cx.strokeStyle='#120608';cx.stroke();
    poly([[L*.36,s2*R0*.85],[L*.26,s2*R0*1.8],[L*.14,s2*R0*1.8],[L*.16,s2*R0*.85]]);cx.fill();cx.stroke()}
  cx.beginPath();cx.moveTo(-L,-R0);cx.lineTo(L*.5,-R0);cx.quadraticCurveTo(L*.86,-R0*.85,L*1.04,0);cx.quadraticCurveTo(L*.86,R0*.85,L*.5,R0);cx.lineTo(-L,R0);cx.closePath();
  cx.lineWidth=2.6;cx.strokeStyle='#0e1014';cx.stroke();const g=cx.createLinearGradient(0,-R0,0,R0);g.addColorStop(0,cBody[0]);g.addColorStop(.55,cBody[1]);g.addColorStop(1,cBody[2]);cx.fillStyle=g;cx.fill();
  cx.save();cx.clip();cx.fillStyle=cNose;cx.fillRect(L*.5,-R0-1,L*.6,R0*2+2);cx.fillStyle=band;cx.fillRect(L*.3,-R0-1,R0*.7,R0*2+2);cx.fillStyle='rgba(255,255,255,.55)';cx.fillRect(-L,-R0*.75,L*1.5,R0*.35);cx.restore();
  cx.strokeStyle=cFin;cx.lineWidth=1.5;cx.beginPath();cx.moveTo(-L*.47,0);cx.lineTo(-L*1.04,0);cx.stroke()}
{const x0=ebX;ebX=function(q,bp){if(q.ty!=14&&q.ty!=15)return x0(q,bp);const a=Math.atan2(q.vy,q.vx);
  const tr=ebTrail(q,q.ty==15?11:9,3),n=tr.length;cx.save();cx.translate(-Math.cos(a)*14,-Math.sin(a)*14);
  for(let k=n-1;k>=1;k--){const u=k/n,r=(q.ty==15?3:2.4)+k*.75;cx.fillStyle=q.ty==14?`rgba(255,${200-k*6},${150-k*8},${.5*(1-u)})`:`rgba(210,214,222,${.6*(1-u)})`;cx.beginPath();cx.arc(tr[k][0]+Math.sin(k*1.9+q.x)*.3*k,tr[k][1],r,0,TAU);cx.fill()}cx.restore();
  cx.save();cx.translate(q.x,q.y);cx.rotate(a);cx.lineJoin='round';
  if(q.ty==14){cx.scale(1.25,1.25);const hm=q.hm>0;glow(0,0,9*bp,[255,120,60],hm?.55:.3);
    mslBody(11,2.3,['#5a606a','#2e3238','#16181c'],'#ff8a2e','#ffb347','#ff5d73');
    const bl=Math.floor(t/3)%2;glow(11,0,6,[255,120,60],bl?1:.4);cx.fillStyle=bl?'#fff':'#ff8a2e';cx.beginPath();cx.arc(10.5,0,1.3,0,TAU);cx.fill();
    if(hm){cx.strokeStyle=`rgba(255,160,80,${.5+.3*Math.sin(t/3)})`;cx.lineWidth=1;cx.beginPath();cx.arc(0,0,10,-.6,.6);cx.stroke()}}
  else{cx.scale(1.5,1.5);const warn=q.fu<45&&Math.floor(t/4)%2;glow(0,0,12*bp,warn?[255,80,60]:[255,180,90],warn?.9:.4);
    mslBody(12,3.1,q.fl2>0?['#fff','#fff','#fff']:['#e8ecd8','#9aa47e','#4a5238'],'#3a3e30','#5a6248','#ffd166');
    cx.fillStyle='#d8424a';cx.font='bold 4px sans-serif';cx.fillRect(-6,-1,5,2);
    if(q.hp2<q.mhp){cx.fillStyle='rgba(60,60,60,.6)';cx.beginPath();cx.arc(-3,-1,2,0,TAU);cx.fill()}
    if(warn){cx.fillStyle='#fff';cx.beginPath();cx.arc(12,0,1.6,0,TAU);cx.fill()}}
  cx.restore()}}
// small missile keeps its look but flashes when hit
