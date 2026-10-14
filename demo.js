import {stages,actionLabels,createRequests,advanceRequest,visibleRequests} from './workflow-model.mjs';
let requests=createRequests(),selected='DEMO-001',filter='all';
const byId=id=>document.getElementById(id);
const list=byId('request-list'),detail=byId('request-detail'),advance=byId('demo-advance');
const filterButtons=[...document.querySelectorAll('[data-filter]')];
function paint(){
  const visible=visibleRequests(requests,filter);
  if(!visible.some(item=>item.id===selected)) selected=visible[0]?.id;
  byId('demo-count').textContent=`${visible.length} of ${requests.length}`;
  filterButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===filter)));
  list.replaceChildren();
  visible.forEach(item=>{
    const button=document.createElement('button');button.type='button';button.className='request-item';button.setAttribute('aria-pressed',String(item.id===selected));
    const id=document.createElement('span');id.className='item-id';id.textContent=item.id;
    const title=document.createElement('strong');title.textContent=item.title;
    const status=document.createElement('span');status.className='item-stage';status.textContent=stages[item.stage];
    button.append(id,title,status);button.addEventListener('click',()=>{selected=item.id;paint();byId('demo-status').textContent=`Selected ${item.title}. Current stage: ${stages[item.stage]}.`;list.querySelector('[aria-pressed="true"]')?.focus();});list.append(button);
  });
  detail.hidden=!visible.length;byId('demo-empty').hidden=!!visible.length;
  if(!visible.length)return;
  const item=requests.find(item=>item.id===selected);
  byId('request-id').textContent=item.id;byId('request-title').textContent=item.title;byId('request-description').textContent=item.description;byId('request-status').textContent=stages[item.stage];byId('request-owner').textContent=item.owner;byId('request-type').textContent=item.type;
  document.querySelectorAll('[data-stage]').forEach((node,index)=>{node.classList.toggle('reached',index<=item.stage);if(index===item.stage)node.setAttribute('aria-current','step');else node.removeAttribute('aria-current');});
  advance.textContent=actionLabels[item.stage];advance.disabled=item.stage===3;advance.setAttribute('aria-label',`${actionLabels[item.stage]}: ${item.title}`);
  byId('request-action-note').textContent=item.stage===3?'This sample request is complete. Try another request or reset.':'Only this demonstration changes. No email, CRM record or customer data is affected.';
  const history=byId('request-activity');history.replaceChildren();item.history.forEach(event=>{const li=document.createElement('li');li.textContent=event;history.append(li);});
}
filterButtons.forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;paint();byId('demo-status').textContent=`Showing ${filter} requests. ${visibleRequests(requests,filter).length} available.`;}));
advance.addEventListener('click',()=>{
  const item=requests.find(item=>item.id===selected),previous=selected;
  if(!advanceRequest(requests,selected)) return;
  let message=`${item.title}: ${stages[item.stage]}.`;
  paint();
  if(selected!==previous){
    const next=requests.find(item=>item.id===selected);
    message+=next?` Now showing ${next.title}.`:' No requests remain in this filter.';
  }
  byId('demo-status').textContent=message;
  if(detail.hidden||advance.disabled||selected!==previous){
    const target=list.querySelector('[aria-pressed="true"]')||filterButtons.find(button=>button.dataset.filter===filter);
    target?.focus();
  }
});
byId('demo-reset').addEventListener('click',()=>{requests=createRequests();selected='DEMO-001';filter='all';paint();byId('demo-status').textContent='Demo reset. All fictional requests restored.';});
paint();byId('demo-ui').hidden=false;byId('demo-reset').hidden=false;byId('demo-fallback').hidden=true;
