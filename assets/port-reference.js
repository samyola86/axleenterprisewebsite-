(()=>{
 const hero=document.querySelector('.hero');if(!hero)return;
 hero.classList.add('reference-port');
 document.addEventListener('DOMContentLoaded',()=>{hero.querySelector('#heroCard').innerHTML='<img src="assets/food-hero.webp" alt="Food sourcing"><div><strong>Global sourcing</strong><small>Supplier relationships across key markets.</small><a href="#sourcing" aria-label="Explore global sourcing">Explore →</a></div>'},{once:true});
 const bg=hero.querySelector('.plate');bg.src='assets/reference-port.webp';bg.alt='Container cranes and a cargo vessel at a Bangladesh-inspired port at dusk';
 const canvas=document.createElement('canvas');canvas.className='reference-water';canvas.setAttribute('aria-hidden','true');hero.prepend(canvas);
 const truck=document.createElement('div');truck.className='reference-truck';truck.innerHTML='<img src="assets/reference-truck.webp" alt="Axle Enterprise truck carrying packaged food products">';hero.append(truck);
 for(const [x,y,w,h] of [[650,674,66,94],[1000,657,54,82],[1554,634,48,72],[1644,627,48,73],[1733,621,44,70]]){const tire=document.createElement('span');tire.className='reference-wheel';tire.style.cssText=`left:${x/1994*100}%;top:${y/789*100}%;width:${w/1994*100}%;height:${h/789*100}%;--wheel-bg:${(x-w/2)/(1994-w)*100}% ${(y-h/2)/(789-h)*100}%;--wheel-size:${1994/w*100}% ${789/h*100}%`;tire.innerHTML='<i></i>';truck.append(tire)}
 const leaf=new Image();leaf.className='reference-leaf';leaf.src='assets/port-leaves.webp';leaf.alt='';hero.append(leaf);
 const map=document.createElement('div');map.className='reference-map';map.setAttribute('aria-hidden','true');map.innerHTML=`<svg viewBox="0 0 800 350" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
 <defs><pattern id="port-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".7" fill="#a1d9c9" opacity=".5"/></pattern></defs>
 <g fill="#438a85" opacity=".20" stroke="#72bbae" stroke-width=".7"><path d="M20 57L43 39 83 30 103 45 132 34 153 58 185 73 178 101 153 120 133 154 102 151 90 130 73 121 51 91 32 88Z M126 156L164 160 195 187 183 217 172 249 143 287 132 253 137 216 120 190Z M224 68L237 42 269 33 286 47 277 79 255 91Z M272 110L290 82 318 80 324 58 370 48 403 33 472 34 503 22 577 30 616 43 677 35 729 59 766 81 740 100 726 125 706 135 681 128 657 161 634 179 605 157 588 188 561 201 542 174 518 156 491 186 471 160 441 145 420 130 397 138 379 119 356 124 338 113 319 137 291 129Z M313 137L352 129 394 140 409 170 392 200 375 232 351 259 331 228 329 194 310 174Z M630 232L676 215 714 226 745 250 740 278 705 290 674 273 643 276Z"/></g>
 <g fill="url(#port-dots)" opacity=".35"><path d="M272 110L290 82 318 80 324 58 370 48 403 33 472 34 503 22 577 30 616 43 677 35 729 59 766 81 740 100 726 125 706 135 681 128 657 161 634 179 605 157 588 188 561 201 542 174 518 156 491 186 471 160 441 145 420 130 397 138 379 119 356 124 338 113 319 137 291 129Z M313 137L352 129 394 140 409 170 392 200 375 232 351 259 331 228 329 194 310 174Z"/></g>
 <g><path class="route" d="M305 85Q464 12 531 192"/><path class="route" d="M400 148Q470 103 531 192"/><path class="route" d="M380 235Q450 155 531 192"/><path class="route" d="M700 98Q590 110 531 192"/><path class="route" d="M703 270Q625 180 531 192"/></g>
 <path d="M522 174l7 5 5-4 8 6-3 10 5 4-4 10-2 13-7-5-4-13-8-1 4-7-5-8z" stroke="#6fed9a" stroke-width="1.5" fill="#49d48033"/>
 <g><circle class="node" cx="305" cy="85" r="3.5"/><circle class="node" cx="400" cy="148" r="3.5"/><circle class="node" cx="380" cy="235" r="3.5"/><circle class="node" cx="700" cy="98" r="3.5"/><circle class="node" cx="703" cy="270" r="3.5"/><circle class="node" cx="531" cy="192" r="4.5"/></g>
 <text x="314" y="75">EUROPE</text><text x="323" y="137">MIDDLE EAST</text><text x="323" y="225">AFRICA</text><text x="701" y="87">ASIA</text><text x="709" y="260">OCEANIA</text><text x="551" y="194">BANGLADESH</text></svg>`;hero.append(map);
 // Warp only the original photographic water, excluding the concrete edge and road.
 const ctx=canvas.getContext('2d'),reduce=matchMedia('(prefers-reduced-motion: reduce)');let active=true,last=0;
 function resize(){canvas.width=Math.min(1100,hero.clientWidth);canvas.height=Math.round(canvas.width*hero.clientHeight/hero.clientWidth)}
 resize();addEventListener('resize',resize);new IntersectionObserver(([entry])=>active=entry.isIntersecting).observe(hero);
 function draw(ms){requestAnimationFrame(draw);if(!active||document.hidden||reduce.matches||!ctx||!bg.complete||!bg.naturalWidth||ms-last<38)return;last=ms;
 const W=canvas.width,H=canvas.height,IW=bg.naturalWidth,IH=bg.naturalHeight,mobile=innerWidth<=760;let dw=W,dh=H,ox=0,oy=0;if(mobile){const k=Math.max(W/IW,H/IH);dw=IW*k;dh=IH*k;ox=(W-dw)*.57;oy=(H-dh)*.5;}
 const top=oy+dh*.638,edgeL=oy+dh*.735,edgeR=oy+dh*.680;
 ctx.clearRect(0,0,W,H);ctx.save();ctx.beginPath();ctx.moveTo(0,top);ctx.lineTo(W,top);ctx.lineTo(W,edgeL+(edgeR-edgeL)*(W-ox)/dw);ctx.lineTo(0,edgeL+(edgeR-edgeL)*(-ox)/dw);ctx.closePath();ctx.clip();
 const t=ms*.001;for(let y=Math.max(0,Math.floor(top));y<Math.min(H,edgeL+5);y+=2){const sy=(y-oy)/dh*IH;const f=Math.min(1,Math.max(0,(y-top)/12));const shift=(Math.sin(y*.29-t*2.5)+.6*Math.sin(y*.11+t*3.4))*2.3*f;ctx.drawImage(bg,0,sy,IW,Math.max(1,2.4*IH/dh),ox+shift,y,dw,2.4)}ctx.restore();}
 requestAnimationFrame(draw);
})();
