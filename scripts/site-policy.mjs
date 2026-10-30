import {createHash} from 'node:crypto';

export const origin='https://avorlume.com';
export const canonicalFor=path=>origin+(path==='/'?'/':path+'/');
const hash=value=>`'sha256-${createHash('sha256').update(value).digest('base64')}'`;
const escape=value=>value.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function structuredData(path,meta,offerings){
 const org=origin+'/#organization',person=origin+'/about/#mansoor',website=origin+'/#website',url=canonicalFor(path);
 const graph=[
  {'@type':'Organization','@id':org,name:'Avorlume',url:origin+'/',description:'An independent technology studio operated by Mansoor Ijaz, based in Pakistan.',email:'hello@avorlume.com',logo:origin+'/favicon.svg',founder:{'@id':person},contactPoint:{'@type':'ContactPoint',email:'hello@avorlume.com',contactType:'Project enquiries',availableLanguage:'English'}},
  {'@type':'Person','@id':person,name:'Mansoor Ijaz',url:origin+'/about/',image:origin+'/mansoor-portrait-v1.png',jobTitle:'Founder, architect and developer',worksFor:{'@id':org},sameAs:['https://www.fiverr.com/usamah171'],knowsAbout:['Salesforce architecture','Salesforce development','MuleSoft integration','Claude AI workflows','ArcGIS location services']},
  {'@type':'WebSite','@id':website,url:origin+'/',name:'Avorlume',publisher:{'@id':org},inLanguage:'en'},
  {'@type':path==='/about'?'ProfilePage':path==='/contact'?'ContactPage':['/services','/projects','/work'].includes(path)?'CollectionPage':'WebPage','@id':url+'#webpage',url,name:meta.title,description:meta.description,isPartOf:{'@id':website},publisher:{'@id':org},inLanguage:'en',...(path==='/about'?{mainEntity:{'@id':person}}:{about:{'@id':org}})}
 ];
 if(path==='/services')graph.push({'@type':'OfferCatalog','@id':url+'#catalog',name:'Avorlume services',itemListElement:offerings.map(o=>({'@type':'Offer',itemOffered:{'@type':'Service',name:o.title,description:o.copy,url:url+'#'+o.id,provider:{'@id':org}}}))});
 if(path==='/insights/claude-salesforce-integration')graph.push({'@type':'TechArticle','@id':url+'#article',headline:'Before connecting Claude to Salesforce.',description:meta.description,author:{'@id':person},publisher:{'@id':org},mainEntityOfPage:{'@id':url+'#webpage'},datePublished:'2026-10-30',inLanguage:'en',citation:['https://developer.salesforce.com/docs/platform/named-credentials/guide/get-started.html','https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview']});
 if(path!=='/'){
  const names={'/about':'About Mansoor','/services':'Services','/projects':'Project ideas','/work':'Work and samples','/privacy':'Privacy notice','/contact':'Contact','/insights':'Technical guides','/insights/claude-salesforce-integration':'Claude and Salesforce integration'};
  const crumbs=[{'@type':'ListItem',position:1,name:'Home',item:origin+'/'}];
  if(path.startsWith('/insights/'))crumbs.push({'@type':'ListItem',position:2,name:'Technical guides',item:origin+'/insights/'});
  crumbs.push({'@type':'ListItem',position:crumbs.length+1,name:names[path],item:url});
  graph.push({'@type':'BreadcrumbList',itemListElement:crumbs});
 }
 return JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c');
}

export function securityMeta(json=''){
 const policy=`default-src 'self'; script-src 'self'${json?' '+hash(json):''}; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-src 'none'; form-action 'self' https://formsubmit.co; upgrade-insecure-requests`;
 return `<meta http-equiv="Content-Security-Policy" content="${escape(policy)}"><meta name="referrer" content="strict-origin-when-cross-origin">`;
}

export function searchHead(path,meta,offerings){
 const url=canonicalFor(path),json=structuredData(path,meta,offerings),title=escape(meta.title),description=escape(meta.description);
 return `${securityMeta(json)}<link rel="canonical" href="${url}"><meta name="robots" content="index,follow,max-image-preview:large"><meta name="author" content="Mansoor Ijaz"><meta property="og:site_name" content="Avorlume"><meta property="og:locale" content="en_US"><meta property="og:type" content="website"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${url}"><meta property="og:image" content="${origin}/social.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Avorlume, an independent technology studio by Mansoor Ijaz"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="${description}"><meta name="twitter:image" content="${origin}/social.png"><script type="application/ld+json">${json}</script>`;
}
