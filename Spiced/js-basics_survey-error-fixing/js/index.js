console.clear();

// ------------------ 1 & 2 -----------------

// 1. This code selects the "next" button using an ID. This is bad practice. Can you find a better solution?
const nextButton = document.querySelector(".steps-button");
nextButton.addEventListener("click", () => {
  console.log("Go to next question");
});

// 2. When clicking the "previous" button, this event listener is not executed. Do you know what's wrong with this code?
const prevButton = document.querySelector(".prev-button");
prevButton.addEventListener("prev", () => {
  console.log("Go to previous question");
});

// ------------------ 3 & 4 -----------------

const firstChoiceButton = document.querySelector('[data-js="first-choice"]');
const secondChoiceButton = document.querySelector('[data-js="second-choice"]');

// 3. This event listener is connected properly. When clicked the button is shown active. However, the debug message doesn't appear in the debug console. Where is the error with this code?
firstChoiceButton.addEventListener("click", () => {
  firstChoiceButton.classList.add("active-choice");
  secondChoiceButton.classList.remove("active-choice");
  console.log("Selected first choice");
});

// 4. When clicking on the second choice, the button should be shown with an active state. Do you see why it isn't working?
secondChoiceButton.addEventListener("click", () => {
  firstChoiceButton.classList.remove("active-choice");
  secondChoiceButton.classList.add("active-choice");
  console.log("Selected second choice");
});