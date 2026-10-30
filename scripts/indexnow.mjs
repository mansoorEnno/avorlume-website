import fs from 'node:fs/promises';

// This is a public ownership key, not an account credential.
const config=JSON.parse(await fs.readFile(new URL('./indexnow-config.json',import.meta.url),'utf8'));
const pending=new URL('../.indexnow-pending.json',import.meta.url);
const origin='https://'+config.host;
const current=JSON.parse(await fs.readFile(new URL('../dist/indexnow-manifest.json',import.meta.url),'utf8'));
const urlIsOurs=value=>{const url=new URL(value);return url.origin===origin&&!url.search&&!url.hash};
for(const url of Object.keys(current))if(!urlIsOurs(url))throw Error('Unexpected manifest URL');
const command=process.argv[2]||'prepare';
if(command==='prepare'){
 let previous={};
 const response=await fetch(origin+'/indexnow-manifest.json',{signal:AbortSignal.timeout(20000),cache:'no-store'});
 if(response.ok)previous=await response.json();
 else if(response.status!==404)throw Error('Previous manifest unavailable: '+response.status);
 const urlList=[...new Set([...Object.keys(current).filter(url=>current[url]!==previous[url]),...Object.keys(previous).filter(url=>!(url in current)&&urlIsOurs(url))])];
 await fs.writeFile(pending,JSON.stringify({host:config.host,key:config.key,keyLocation:origin+'/'+config.key+'.txt',urlList},null,2));
 console.log('Prepared '+urlList.length+' changed URLs for IndexNow.');
}else if(command==='publish'){
 const submission=JSON.parse(await fs.readFile(pending,'utf8'));
 if(submission.host!==config.host||submission.key!==config.key||submission.keyLocation!==origin+'/'+config.key+'.txt'||!Array.isArray(submission.urlList)||submission.urlList.length>10000||!submission.urlList.every(urlIsOurs))throw Error('Invalid submission');
 if(!submission.urlList.length){console.log('No content changes to notify.');process.exit(0)}
 let available=false;
 for(let attempt=0;attempt<5;attempt++){
  const response=await fetch(submission.keyLocation,{signal:AbortSignal.timeout(15000),cache:'no-store'});
  if(response.ok&&(await response.text()).trim()===config.key){available=true;break}
  if(attempt<4)await new Promise(resolve=>setTimeout(resolve,5000));
 }
 if(!available)throw Error('The public ownership key is not available yet.');
 const response=await fetch('https://api.indexnow.org/indexnow',{method:'POST',headers:{'Content-Type':'application/json; charset=utf-8'},body:JSON.stringify(submission),signal:AbortSignal.timeout(25000)});
 if(![200,202].includes(response.status))throw Error('IndexNow rejected submission: '+response.status+' '+(await response.text()).slice(0,500));
 console.log('IndexNow accepted '+submission.urlList.length+' URLs (HTTP '+response.status+'). This is a notification, not an indexing guarantee.');
}else throw Error('Use prepare or publish.');
