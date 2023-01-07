"use strict";

const ratingButtons = document.querySelectorAll(".rate-button");
const submitButton = document.querySelector(".submit-btn");
const ratingComponent = document.querySelector(".rating-section");
const thanksComponent = document.querySelector(".thanks-section");
const ratedText = document.querySelector(".rated");

let selectedRatingButton;

submitButton.addEventListener("click", thanksSection);

for (let index = 0; index < ratingButtons.length; index++) {
  const element = ratingButtons[index];
  element.addEventListener("click", function () {
    selectedRatingButton = element;
    const literalTemplate = `You selected ${selectedRatingButton.innerHTML.slice(
      3,
      4
    )} out of 5`;
    ratedText.textContent = literalTemplate;
  });
}

function thanksSection() {
  ratingComponent.classList.add("hide");
  ratingComponent.classList.remove("show");
  thanksComponent.classList.add("show");
  thanksComponent.classList.remove("hide");
}
