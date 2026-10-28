import {build} from 'vite';
import fs from 'node:fs/promises';
await build();
await build({build:{ssr:'src/render.tsx',outDir:'.ssr',emptyOutDir:true}});
const {render,routes}=await import('../.ssr/render.js');
const template=await fs.readFile('dist/index.html','utf8');
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
for(const[path,meta]of Object.entries(routes)){
 const canonical='https://avorlume.com'+(path==='/'?'/':path+'/');
 const head=`<link rel="canonical" href="${canonical}"><meta property="og:type" content="website"><meta property="og:title" content="${esc(meta.title)}"><meta property="og:description" content="${esc(meta.description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="https://avorlume.com/social.png">`;
 const html=template.replace('<!--app-html-->',render(path)).replace('<title>Avorlume</title>',`<title>${esc(meta.title)}</title>`).replace('content="Avorlume portfolio"',`content="${esc(meta.description)}"`).replace('</head>',head+'</head>');
 const dir='dist'+(path==='/'?'':path);await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/index.html',html);
 if(path!=='/')await fs.writeFile('dist'+path+'.html',html);
}
for(const [file,title,copy]of [['thanks.html','Thank you for your enquiry','If you completed FormSubmit’s spam check, your submission has been passed to its delivery service. You can also email hello@avorlume.com directly.'],['404.html','This page has moved','Explore Avorlume’s services, work and professional credentials from the home page.']]){const html=template.replace(/<script[^>]*type="module"[^>]*><\/script>/g,'').replace('<!--app-html-->',`<main class="legal-page wrap"><a href="/" class="brand">avorlume.</a><h1 style="margin-top:50px">${title}</h1><p>${copy}</p><p><a class="text-link" href="/">Return to Avorlume</a></p></main>`).replace('<title>Avorlume</title>',`<title>${title} | Avorlume</title>`);await fs.writeFile('dist/'+file,html);}
for(const [old,target]of Object.entries({'salesforce':'architecture','integrations':'ai','automation':'ai','websites':'development','software':'development','ecommerce':'development'})){await fs.mkdir('dist/services',{recursive:true});await fs.writeFile('dist/services/'+old+'.html',`<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/services/#${target}"><a href="/services/#${target}">Explore this service</a>`);}
await fs.writeFile('dist/enquire.html','<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/#start"><a href="/#start">Discuss your project</a>');
await fs.writeFile('dist/robots.txt','User-agent: *\nAllow: /\nSitemap: https://avorlume.com/sitemap.xml\n');
await fs.writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+Object.keys(routes).map(p=>`<url><loc>https://avorlume.com${p==='/'?'/':p+'/'}</loc></url>`).join('')+'</urlset>');
console.log('Rendered '+Object.keys(routes).length+' public pages.');
