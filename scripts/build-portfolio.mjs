import {searchHead,securityMeta} from './site-policy.mjs';
import {build} from 'vite';
import {createHash} from 'node:crypto';
import fs from 'node:fs/promises';
await build();
await build({build:{ssr:'src/render.tsx',outDir:'.ssr',emptyOutDir:true}});
const {render,routes,offerings}=await import('../.ssr/render.js');
const template=await fs.readFile('dist/index.html','utf8');
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const manifest={};
for(const[path,meta]of Object.entries(routes)){
 const head=searchHead(path,meta,offerings);
 const body=render(path);
 manifest['https://avorlume.com'+(path==='/'?'/':path+'/')]=createHash('sha256').update(body+JSON.stringify(meta)+head).digest('hex');
 const html=template.replace('<!--app-html-->',body).replace('<title>Avorlume</title>',`<title>${esc(meta.title)}</title>`).replace('content="Avorlume portfolio"',`content="${esc(meta.description)}"`).replace('<meta charset="UTF-8">','<meta charset="UTF-8">'+head);
 const dir='dist'+(path==='/'?'':path);await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/index.html',html);
 if(path!=='/')await fs.writeFile('dist'+path+'.html',html);
}
for(const [file,title,copy]of [['thanks.html','Thank you for your enquiry','The project form shows confirmation after our enquiry service accepts your brief. Visiting this page alone does not submit a project. You can also email hello@avorlume.com directly.'],['404.html','This page has moved','Explore Avorlume’s services, work and professional credentials from the home page.']]){const html=template.replace(/<script[^>]*type="module"[^>]*><\/script>/g,'').replace('<!--app-html-->',`<main class="legal-page wrap"><a href="/" class="brand">avorlume.</a><h1 style="margin-top:50px">${title}</h1><p>${copy}</p><p><a class="text-link" href="/">Return to Avorlume</a></p></main>`).replace('<title>Avorlume</title>',`<title>${title} | Avorlume</title>`).replace('<meta charset="UTF-8">','<meta charset="UTF-8">'+securityMeta()+'<meta name="robots" content="noindex,follow">');await fs.writeFile('dist/'+file,html);}
for(const [old,target]of Object.entries({'salesforce':'architecture','integrations':'integration','automation':'ai','websites':'development','software':'development','ecommerce':'development'})){await fs.mkdir('dist/services',{recursive:true});await fs.writeFile('dist/services/'+old+'.html',`<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex,follow"><meta http-equiv="refresh" content="0;url=/services/#${target}"><a href="/services/#${target}">Explore this service</a>`);}
await fs.writeFile('dist/enquire.html','<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex,follow"><meta http-equiv="refresh" content="0;url=/#start"><a href="/#start">Discuss your project</a>');
await fs.writeFile('dist/robots.txt','User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /studio\nSitemap: https://avorlume.com/sitemap.xml\n');
await fs.writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+Object.keys(routes).map(p=>`<url><loc>https://avorlume.com${p==='/'?'/':p+'/'}</loc></url>`).join('')+'</urlset>');
await fs.writeFile('dist/indexnow-manifest.json',JSON.stringify(manifest));
console.log('Rendered '+Object.keys(routes).length+' public pages.');
