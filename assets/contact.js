(()=>{
 const target=document.querySelector('#contact');
 target.querySelector('.contact-intro').insertAdjacentHTML('beforeend','<div class="contact-channel"><span>Sales contact · Sayeed Hasan, Head of Sales</span><a href="tel:+8801314485525">01314485525 ↗</a></div>');
 document.querySelector('#footer .footer-grid > div').insertAdjacentHTML('beforeend','<p><a href="tel:+8801314485525">Sales: 01314485525</a></p>');
 const form=document.querySelector('#contact-inquiry');
 form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=`Axle Enterprise — ${d.get('type')}`;const body=`Name: ${d.get('name')}\nBusiness email: ${d.get('email')}\nCompany: ${d.get('company')}\nInquiry type: ${d.get('type')}\n\n${d.get('message')}`;location.href=`mailto:info@axleenterprise.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`});
 // Keep product-specific modal inquiries; the general CTA leads to the dedicated contact section.
 document.querySelectorAll('.hero [data-contact], #menu [data-contact]').forEach(b=>{b.removeAttribute('data-contact');b.onclick=e=>{e.preventDefault();if(b.closest('#menu'))document.querySelector('#menu [data-close]').click();target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}});
})();
