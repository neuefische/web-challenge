console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector('[data-js="body"]');
  const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
  const lightModeButton = document.querySelector(
    '[data-js="light-mode-button"]'
  );
  const toggleButton = document.querySelector('[data-js="toggle-button"]');

  // enables dark mode
  function enableDarkMode() {
    body.classList.add("dark");
  }

  // enables light mode
  function disableDarkMode() {
    body.classList.remove("dark");
  }

  // toggle dark/light
  function toggleDarkMode() {
    body.classList.toggle("dark");
  }

  darkModeButton.addEventListener("click", enableDarkMode);
  lightModeButton.addEventListener("click", disableDarkMode);
  toggleButton.addEventListener("click", toggleDarkMode);
});
