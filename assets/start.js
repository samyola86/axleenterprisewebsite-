(()=>{
  history.scrollRestoration='manual';
  const root=document.documentElement;
  root.classList.add('booting');
  if(location.hash) history.replaceState(history.state,'',location.pathname+location.search);
  const top=()=>window.scrollTo({top:0,left:0,behavior:'instant'});
  top();
  document.addEventListener('DOMContentLoaded',()=>{
    top();
    const observer=new MutationObserver(()=>{
      if(!document.body.classList.contains('ready'))return;
      observer.disconnect();
      top();
      requestAnimationFrame(()=>{top();root.classList.remove('booting')});
    });
    if(document.body.classList.contains('ready')){top();root.classList.remove('booting')}
    else observer.observe(document.body,{attributes:true,attributeFilter:['class']});
  },{once:true});
  addEventListener('pageshow',e=>{if(e.persisted||root.classList.contains('booting'))top()});
})();
