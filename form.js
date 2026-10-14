const form = document.getElementById('enquiry-form');
if (form) {
  const button = form.querySelector('button[type="submit"]');
  const initialLabel = button.innerHTML;
  const status = document.getElementById('form-status');
  const fields = [
    { field: form.elements.name, minimum: 1, message: 'Please enter your name.' },
    { field: form.elements.details, minimum: 15, message: 'Please describe your project in at least 15 characters.' },
  ];
  function validate({ field, minimum, message }, trim = false) {
    if (trim) field.value = field.value.trim();
    field.setCustomValidity(field.value.trim().length < minimum ? message : '');
  }
  for (const item of fields) {
    item.field.addEventListener('input', () => validate(item));
    item.field.addEventListener('blur', () => validate(item, true));
  }
  form.addEventListener('submit', event => {
    fields.forEach(item => validate(item, true));
    if (!form.reportValidity()) {
      event.preventDefault();
      return;
    }
    button.disabled = true;
    button.textContent = 'Opening FormSubmit…';
    button.setAttribute('aria-busy', 'true');
    if (status) status.textContent = 'Opening FormSubmit. Complete its spam check to submit your enquiry.';
  });
  window.addEventListener('pageshow', () => {
    button.disabled = false;
    button.innerHTML = initialLabel;
    button.removeAttribute('aria-busy');
    if (status) status.textContent = '';
  });
}

