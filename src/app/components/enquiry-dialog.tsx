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
 return <dialog ref={dialog} className="enquiry-dialog" aria-labelledby="enquiry-dialog-title" onClose={()=>{document.documentElement.classList.remove('enquiry-is-open');opener.current?.focus()}}><div className="enquiry-dialog-bar"><div className="enquiry-dialog-bar-inner"><div className="enquiry-dialog-identity"><span className="enquiry-dialog-wordmark" aria-label="Avorlume"><span className="brand-symbol" aria-hidden="true"><i/><b/></span><span aria-hidden="true">avorlume<span className="brand-dot">.</span></span></span><h2 id="enquiry-dialog-title" tabIndex={-1}>Project enquiry</h2></div><button type="button" onClick={close} aria-label="Close project enquiry"><span>Close</span><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></button></div></div>{mounted&&<Contact initialService={service}/>}</dialog>
}
