const form=document.getElementById('enquiry-form');
const button=form.querySelector('button[type="submit"]');
for(const name of ['name','details']){const field=form.elements[name];field.addEventListener('input',()=>field.setCustomValidity(''));field.addEventListener('change',()=>{field.value=field.value.trim();const minimum=name==='details'?15:1;field.setCustomValidity(field.value.length<minimum?'Please provide a name and a project description of at least 15 characters.':'');});}
form.addEventListener('submit',()=>{button.disabled=true;button.textContent='Opening FormSubmit…';});
window.addEventListener('pageshow',()=>{button.disabled=false;button.textContent='Continue to FormSubmit';});
