console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newCard = document.createElement("li");
  newCard.classList.add("toast-container__message");
  newCard.textContent = "I'm a toast message.";

  toastContainer.append(newCard);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.textContent = "";
});
