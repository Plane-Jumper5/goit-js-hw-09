let formData = { email: "", message: "" };
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
  formData = JSON.parse(savedData);
  emailInput.value = formData.email || "";
  messageInput.value = formData.message || "";
}

const saveToLocalStorage = () => {
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value; 
  saveToLocalStorage(); 
});


form.addEventListener('submit', (event) => {
  event.preventDefault(); 


if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }


  console.log(formData);


  localStorage.removeItem("feedback-form-state");
  formData = { email: "", message: "" }; 
  form.reset(); 
});