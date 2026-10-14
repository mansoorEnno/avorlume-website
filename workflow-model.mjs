export const stages = ['New', 'Assigned', 'In progress', 'Complete'];
export const actionLabels = ['Assign to demo owner', 'Start work', 'Mark complete', 'Completed'];
export function createRequests() {
  return [
    {id:'DEMO-001',title:'Exterior repair quote',description:'A sample enquiry asking for a repair assessment. Assign an owner so the request has a clear next step.',type:'Quote request',stage:0,owner:'Unassigned',history:['Sample request created.']},
    {id:'DEMO-002',title:'New service enquiry',description:'A sample question about a service. An owner has been assigned and the job is ready to start.',type:'Service enquiry',stage:1,owner:'Demo owner',history:['Sample request created.','Assigned to demo owner.']},
    {id:'DEMO-003',title:'Site visit follow-up',description:'A completed sample request, retained so the team can see what happened.',type:'Follow-up',stage:3,owner:'Demo owner',history:['Sample request created.','Assigned to demo owner.','Work started.','Marked complete.']}
  ];
}
export function advanceRequest(requests,id) {
  const request=requests.find(item=>item.id===id);
  if(!request) throw new Error('Unknown demonstration request.');
  if(request.stage>=stages.length-1) return false;
  request.stage+=1;
  request.owner='Demo owner';
  request.history.push(['','Assigned to demo owner.','Work started.','Marked complete.'][request.stage]);
  return true;
}
export function visibleRequests(requests,filter) {
  if(!['all','open','complete'].includes(filter)) throw new Error('Unknown filter.');
  return requests.filter(item=>filter==='all'||(filter==='open'?item.stage<3:item.stage===3));
}
