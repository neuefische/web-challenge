console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  const data = {
    firstName: formElements.firstName.value,
    lastName: formElements.lastName.value,
    age: formElements.age.value,
    email: formElements.email.value,
    complaint: formElements.complaint.value,
    details: formElements.details.value,
    badness: formElements.badness.value,
    orderDate: formElements.orderDate.value,
  };

  console.log(data);

  const sum = Number(data.age) + Number(data.badness);
  console.log(`The age-badness-sum of ${data.firstName} is ${sum}`);

  /* const formData = new FormData (event.target);
const data = Object.fromEntries(formData);

console.log(data); */

  form.reset();

  formElements.firstName.focus();
});
