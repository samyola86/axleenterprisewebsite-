(()=>{
 const hero=document.querySelector('.hero'),title=hero.querySelector('h1'),bg=hero.querySelector('.plate');
 hero.classList.add('drive-hero');
 bg.src='assets/port-hero-v2.webp';bg.alt='Chattogram-inspired logistics port, container cranes and riverside access road';
 const camera=document.createElement('div');camera.className='port-camera';const world=document.createElement('div');world.className='port-world';camera.append(world);hero.prepend(camera);world.append(bg);
 const water=document.createElement('canvas');water.className='water-live';water.setAttribute('aria-hidden','true');world.append(water);
 const ambient=document.createElement('div');ambient.className='port-ambient';ambient.setAttribute('aria-hidden','true');
 ambient.innerHTML='<div class="port-haze"></div><img class="port-ship" src="assets/port-ship.webp" alt=""><div class="port-birds"><i></i><i></i><i></i><i></i></div>';
 world.append(ambient);
 const lane=document.createElement('div');lane.className='drive-lane';
 const vehicle=document.createElement('div');vehicle.className='drive-truck';
 const truck=new Image();truck.className='drive-truck-body';truck.alt='Delivery truck carrying packaged infant formula, cereal and baby foods';truck.fetchPriority='high';
 vehicle.append(truck);for(const wheel of ['rear-one','rear-two','front']){const el=document.createElement('span');el.className='drive-wheel '+wheel;el.setAttribute('aria-hidden','true');vehicle.append(el)}
 title.classList.add('drive-title');lane.append(vehicle);world.append(lane);hero.append(title);
 const foreground=document.createElement('div');foreground.className='port-foreground';foreground.setAttribute('aria-hidden','true');foreground.innerHTML='<img class="leaf-near" src="assets/port-leaves.webp" alt=""><img class="leaf-far" src="assets/port-leaves.webp" alt="">';hero.append(foreground);
 function wheelDistance(){const radius=vehicle.clientWidth*.1013/2;if(radius)vehicle.style.setProperty('--wheel-start',`${-1.3*innerWidth/radius*180/Math.PI}deg`);const w=hero.clientWidth,h=hero.clientHeight;const renderedHeight=Math.max(h,w*941/1672);const asphaltY=(h-renderedHeight)*.7+renderedHeight*.865;hero.style.setProperty('--road-bottom',`${Math.max(h*.085,Math.min(h*.16,h-asphaltY))}px`)}
 function play(){wheelDistance();hero.classList.remove('drive-loaded');void lane.offsetWidth;hero.classList.add('drive-loaded')}
 addEventListener('resize',wheelDistance);truck.onload=play;truck.onerror=()=>{vehicle.hidden=true;play()};truck.src='assets/modern-food-truck.webp';if(truck.complete)play();
 // Animate the original river photograph itself: refracted horizontal bands
 // follow several overlapping wave frequencies, rather than drawing fake stripes.
 const ctx=water.getContext('2d'),reduced=matchMedia('(prefers-reduced-motion: reduce)');let visible=true,last=0,clock=0;
 function sizeWater(){const w=hero.clientWidth,h=hero.clientHeight;water.width=Math.min(w,1000);water.height=Math.max(1,Math.round(h*water.width/w))}
 sizeWater();addEventListener('resize',sizeWater);new IntersectionObserver(([e])=>{visible=e.isIntersecting}).observe(hero);
 function animateWater(now){requestAnimationFrame(animateWater);const dt=Math.min(80,now-last);if(dt<38)return;last=now;if(!ctx||!visible||document.hidden||reduced.matches||hero.classList.contains('ambient-paused')||!bg.complete||!bg.naturalWidth)return;clock+=dt/1000;const W=water.width,H=water.height,iw=bg.naturalWidth,ih=bg.naturalHeight,k=Math.max(W/iw,H/ih),ox=(W-iw*k)*.5,oy=(H-ih*k)*.7;const y0=Math.max(0,Math.ceil(oy+ih*k*.581)),y1=Math.min(H,Math.floor(oy+ih*k*.761));ctx.clearRect(0,0,W,H);const t=clock;for(let y=y0;y<y1;y+=2){const p=(y-y0)/Math.max(1,y1-y0),fade=Math.sin(Math.PI*p),wave=(Math.sin(y*.095-t*2.9)+.45*Math.sin(y*.24+t*1.7))*3.2*fade,sy=(y-oy)/k;ctx.drawImage(bg,0,sy,iw,Math.min(2.5/k,ih-sy),ox+wave,y,iw*k,2.5)}}
 requestAnimationFrame(animateWater);
})();
