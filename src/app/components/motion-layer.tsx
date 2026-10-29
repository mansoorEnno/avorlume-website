"use client";
import {useEffect} from 'react';

/** Progressive enhancement: the server-rendered page is always visible. */
export function MotionLayer(){
 useEffect(()=>{
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(preference.matches||!('IntersectionObserver' in window)||!Element.prototype.animate)return;
  const running=new Set<Animation>();
  const seen=new WeakSet<Element>();
  const ease=getComputedStyle(document.documentElement).getPropertyValue('--ease-out').trim();
  const stop=()=>{running.forEach(a=>a.cancel());running.clear()};
  const play=(element:Element,index=0,picture=false)=>{
   if(preference.matches||document.documentElement.dataset.input==='keyboard'||seen.has(element))return;
   seen.add(element);
   const rect=element.getBoundingClientRect();
   if(rect.bottom<0)return;
   const animation=element.animate([
    {opacity:picture?.85:.35,transform:picture?'translateY(10px) scale(.985)':'translateY(14px)'},
    {opacity:1,transform:'none'}
   ],{duration:picture?640:520,delay:index*45,easing:ease,fill:'backwards'});
   running.add(animation);
   animation.onfinish=()=>running.delete(animation);
  };
  const hero=document.querySelector('.hero-copy,.about-hero>div:first-child,.page-intro');
  if(!window.location.hash&&hero&&hero.getBoundingClientRect().top<innerHeight){
   Array.from(hero.children).forEach((element,i)=>play(element,Math.min(i,4)));
   const visual=document.querySelector('.system-map,.identity-art');
   if(visual)play(visual,2,true);
  }
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    const element=entry.target;
    const group=element.parentElement;
    const siblings=group?Array.from(group.children).filter(e=>e.matches('[data-motion-part]')):[];
    play(element,Math.max(0,Math.min(siblings.indexOf(element),3)),element.matches('.work-preview,.founder-panel,.credential-groups>article'));
    observer.unobserve(element);
   });
  },{threshold:.08,rootMargin:'0px 0px -36px 0px'});
  const targets=document.querySelectorAll('.section-heading>*,.work-preview,.founder-panel,.founder-section>div:last-child,.approach-band h2,.approach-list>div,.about-story>div,.values-grid>article,.credential-groups>article,.service-detail-title,.engagement-grid>article,.footer-contact-band>div');
  targets.forEach(element=>{element.setAttribute('data-motion-part','');observer.observe(element)});
  const keyboard=(event:KeyboardEvent)=>{if(event.key==='Tab'||event.key.startsWith('Arrow'))stop()};
  const focus=()=>stop();
  document.addEventListener('keydown',keyboard);
  document.addEventListener('focusin',focus);
  preference.addEventListener('change',stop);
  return()=>{observer.disconnect();stop();targets.forEach(e=>e.removeAttribute('data-motion-part'));document.removeEventListener('keydown',keyboard);document.removeEventListener('focusin',focus);preference.removeEventListener('change',stop)};
 },[]);
 return null;
}
