import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {canonicalFor} from './site-policy.mjs';

const paths=['/','/about','/services','/projects','/work','/privacy','/contact','/insights','/insights/claude-salesforce-integration'];
for(const path of paths){
 const html=await fs.readFile('dist'+(path==='/'?'':path)+'/index.html','utf8');
 const json=html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
 assert(json,'Missing structured data: '+path);
 const graph=JSON.parse(json)['@graph'];
 assert(graph.some(node=>node['@type']==='Organization'&&node.name==='Avorlume'));
 assert(graph.some(node=>node['@type']==='Person'&&node.name==='Mansoor Ijaz'));
 assert(html.includes('<link rel="canonical" href="'+canonicalFor(path)+'">'));
 assert(html.includes('sha256-'+createHash('sha256').update(json).digest('base64')),'CSP hash mismatch: '+path);
 assert(html.indexOf('Content-Security-Policy')<html.indexOf('<script'),'Policy must precede scripts');
 for(const directive of ['object-src &#39;none&#39;','base-uri &#39;none&#39;','frame-src &#39;none&#39;','form-action &#39;self&#39; https://formspree.io','connect-src &#39;self&#39; https://formspree.io'])assert(html.includes(directive));
 assert(!html.includes("script-src &#39;self&#39; &#39;unsafe-inline&#39;"));
 for(const match of html.matchAll(/<script\b([^>]*)>(.*?)<\/script>/gs)){
  const[,attributes,content]=match;
  if(!attributes.includes('src='))assert(attributes.includes('application/ld+json')&&content===json,'Unexpected inline script');
 }
 assert(html.includes('name="google-site-verification"'));
 assert(html.includes('name="twitter:card"'));
}
for(const path of ['thanks.html','404.html','enquire.html'])assert((await fs.readFile('dist/'+path,'utf8')).includes('noindex,follow'));
const sitemap=await fs.readFile('dist/sitemap.xml','utf8');
for(const path of paths)assert(sitemap.includes('<loc>'+canonicalFor(path)+'</loc>'));
assert((await fs.readFile('dist/robots.txt','utf8')).includes('Sitemap: https://avorlume.com/sitemap.xml'));
assert((await fs.readFile('dist/.well-known/security.txt','utf8')).includes('Canonical: https://avorlume.com/.well-known/security.txt'));
const config=JSON.parse(await fs.readFile('scripts/indexnow-config.json','utf8'));
assert.equal((await fs.readFile('dist/'+config.key+'.txt','utf8')).trim(),config.key);
assert.equal(Object.keys(JSON.parse(await fs.readFile('dist/indexnow-manifest.json','utf8'))).length,paths.length);
console.log('Passed security policy, script hashes, identity schema, canonical, sitemap, verification and noindex checks for 9 public pages.');

const home=await fs.readFile('dist/index.html','utf8');
assert(home.includes('action="https://formspree.io/f/xyeepqrg"'),'Missing configured enquiry endpoint');
assert(!home.includes('formsubmit.co'),'Retired submission provider still present');
assert(home.includes('name="service"')&&home.includes('name="email"')&&home.includes('name="consent"'),'Missing enquiry fields');
