document.documentElement.classList.add('js');
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const toggle=document.getElementById('menu-toggle'),links=document.getElementById('nav-links');
if(toggle&&links){
  function closeMenu(focus=false){links.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.innerHTML='Menu <span aria-hidden="true">+</span>';if(focus)toggle.focus();}
  toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.innerHTML=open?'Close <span aria-hidden="true">−</span>':'Menu <span aria-hidden="true">+</span>';});
  links.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>closeMenu()));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&links.classList.contains('open'))closeMenu(true);});
  document.addEventListener('click',event=>{if(!event.target.closest('header'))closeMenu();});
  matchMedia('(min-width: 851px)').addEventListener('change',()=>closeMenu());
}
const copy=document.getElementById('copy-email');
if(copy){copy.addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText('hello@avorlume.com');status.textContent='Email address copied.';}catch{status.textContent='Copy unavailable. Select hello@avorlume.com above or use the email link.';}});copy.hidden=false;}
