"use client";
import {useEffect,useRef,useState} from 'react';
import {Contact} from './contact';
export function EnquiryDialog(){
 const dialog=useRef<HTMLDialogElement>(null);const opener=useRef<HTMLElement|null>(null);const [mounted,setMounted]=useState(false);const [service,setService]=useState<string|undefined>();
 useEffect(()=>{
  function open(event:MouseEvent){
   if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||location.pathname==='/' )return;
   const element=event.target as Element|null;const link=element?.closest('a');if(!link||link.hasAttribute('download')||link.target&&link.target!=='_self')return;
   const url=new URL(link.href,location.href);if(url.origin!==location.origin||url.pathname!=='/'||url.hash!=='#start')return;
   event.preventDefault();opener.current=link;setService(url.searchParams.get('service')||undefined);setMounted(true);if(dialog.current&&!dialog.current.open){dialog.current.showModal();document.documentElement.classList.add('enquiry-is-open')}
  }
  document.addEventListener('click',open);return()=>{document.removeEventListener('click',open);document.documentElement.classList.remove('enquiry-is-open')};
 },[]);
 function close(){dialog.current?.close()}
 return <dialog ref={dialog} className="enquiry-dialog" aria-labelledby="enquiry-dialog-title" onClose={()=>{document.documentElement.classList.remove('enquiry-is-open');opener.current?.focus()}}><div className="enquiry-dialog-bar"><div><span>Avorlume</span><h2 id="enquiry-dialog-title" tabIndex={-1}>Discuss your project</h2></div><button type="button" onClick={close} aria-label="Close project enquiry">Close <span aria-hidden="true">×</span></button></div>{mounted&&<Contact initialService={service}/>}</dialog>
}
