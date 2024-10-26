let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.modal-form');
const emailInput = form.elements['email'];
const messageTextarea = form.elements['message'];
const loadFormData = () => {
  const savedData = localStorage.getItem('modal-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageTextarea.value = formData.message || '';
  }
};

loadFormData();

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('modal-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitting Form:', formData);
  localStorage.removeItem('modal-form-state');
  formData = { email: '', message: '' };
  form.reset();
});

