var contentOneDiv;
var replacementOneDiv;
var replacementTwoDiv;
// script.js
// script.js

menuButtonTwo.addEventListener("click", function () {
  toggleMenu(menuButtonTwo, popupMenuTwo);
});
function toggleMenu(menuButton, popupMenu) {
  if (popupMenu.style.display === "block") {
    popupMenu.style.display = "none";
  } else {
    popupMenu.style.display = "block";
  }
}

menuButtonTwo.addEventListener("click", function () {
  toggleMenu(menuButtonTwo, popupMenuTwo);
});

// Event delegation on a common ancestor
document.addEventListener("click", function (event) {
  if (event.target === menuButton) {
    toggleMenu(menuButton, popupMenu);
  } else if (event.target === menuButtonTwo) {
    toggleMenu(menuButtonTwo, popupMenuTwo);
  }
});

window.onload = function () {
  const sneakernessButton = document.getElementById("Sneakerness");
  const homeButton = document.getElementById("Home");
  const thirdButton = document.getElementById("menuButton"); // Add this line

  const contentDiv = document.getElementById("row");
  const surveyDiv = document.getElementById("survey-disabled");
  const thirdDiv = document.getElementById("sfirst"); // Add this line

  sneakernessButton.addEventListener("click", function () {
    contentDiv.style.display = "none";
    surveyDiv.style.display = "block";
    thirdDiv.style.display = "none"; // Hide the third page when going to Sneakerness
  });

  homeButton.addEventListener("click", function () {
    contentDiv.style.display = "block";
    surveyDiv.style.display = "none";
    thirdDiv.style.display = "none"; // Hide the third page when going back to Home
  });

  thirdButton.addEventListener("click", function () {
    contentDiv.style.display = "none";
    surveyDiv.style.display = "none";
    thirdDiv.style.display = "block"; // Show the third page when going to the Third Page
  });

  sneakernessButton.addEventListener("click", function () {
    contentDiv.style.display = "none";
    surveyDiv.style.display = "block";
    thirdDiv.style.display = "none"; // Hide the third page when going to Sneakerness
  });

  homeButton.addEventListener("click", function () {
    contentDiv.style.display = "block";
    surveyDiv.style.display = "none";
    thirdDiv.style.display = "none"; // Hide the third page when going back to Home
  });
};

const myButton = document.getElementById("omo");

// Add a click event listener to the button
myButton.addEventListener("click", function () {
  // Show an alert when the button is clicked
  alert("Email:omolade249ahmed@gmail.com");
});
const myButtonSec = document.getElementById("reb");

// Add a click event listener to the button
myButtonSec.addEventListener("click", function () {
  // Show an alert when the button is clicked
  alert("Email:r.ollivieira@berlagelyceum.eu");
});
const myButtonThird = document.getElementById("school");

// Add a click event listener to the button
myButtonThird.addEventListener("click", function () {
  // Show an alert when the button is clicked
  alert("Call the school with this number: +020 572 1200");
});
