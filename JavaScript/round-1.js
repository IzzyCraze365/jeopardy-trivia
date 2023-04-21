// Project: Week 4
// Jeopardy Board Part 2 - Adding functionality
// John Isabella III

import placeholderQuestions from "../scripts/placeholder-questions.js";
//console.log("Here are the Questions");//! TEST

//List of Variables
var modal = document.querySelector("#modal");
let playerAnswer = document.querySelector("#playerAnswer"); //Going Fishing
console.log("User Input =", playerAnswer); //! TEST
let questionButton = document.querySelectorAll(".points"); //Going Fishing
let guessButton = document.getElementById("guess-btn"); //Going Fishing
let passButton = document.getElementById("pass-btn"); //Going Fishing
let categoryList = [
  "Nature",
  "Animals",
  "Computers",
  "Mythology",
  "History",
  "General",
  "Final",
]; // TODO Empty Array
let player1Name = "John";
let player1Score = document.querySelector(".score1");
let score1 = 0; // TODO Placeholder
let player2Name = "Rob";
let player2Score = document.querySelector(".score2");

// Assign values to the categories
let selectedQuestions = {
  // This is an Object
  selectedQuestion1: placeholderQuestions
    .filter((cat) => cat.category === categoryList[0])
    .slice(5),
  selectedQuestion2: placeholderQuestions
    .filter((cat) => cat.category === categoryList[1])
    .slice(5),
  selectedQuestion3: placeholderQuestions
    .filter((cat) => cat.category === categoryList[2])
    .slice(5),
  selectedQuestion4: placeholderQuestions
    .filter((cat) => cat.category === categoryList[3])
    .slice(5),
  selectedQuestion5: placeholderQuestions
    .filter((cat) => cat.category === categoryList[4])
    .slice(5),
  selectedQuestion6: placeholderQuestions
    .filter((cat) => cat.category === categoryList[5])
    .slice(5),
};

// Select the Boards categories (from HTML)
let categoryName1 = document.querySelector("#category1");
let categoryName2 = document.querySelector("#category2");
let categoryName3 = document.querySelector("#category3");
let categoryName4 = document.querySelector("#category4");
let categoryName5 = document.querySelector("#category5");
let categoryName6 = document.querySelector("#category6");
let popupQuestion = document.querySelector("#popupInsideModal");

// Populate the Board's category Names (Top Row)
categoryName1.innerText = selectedQuestions.selectedQuestion1[0].category;
categoryName2.innerText = selectedQuestions.selectedQuestion2[0].category;
categoryName3.innerText = selectedQuestions.selectedQuestion3[0].category;
categoryName4.innerText = selectedQuestions.selectedQuestion4[0].category;
categoryName5.innerText = selectedQuestions.selectedQuestion5[0].category;
categoryName6.innerText = selectedQuestions.selectedQuestion6[0].category;
//let categoryName1 = document.querySelector("#category1");

// Populate the Questions // TODO make this look neater
let newQuestion = document.createElement("p");
let questionValue = 0; // placeholder value

questionButton.forEach((questionBox) => {
  questionBox.addEventListener("click", () => {
    modal.style.display = "block";
    console.log("questionBox=", questionBox, "type=", typeof questionBox); //! TEST
    let questionCategory = getButtonCategory(questionBox); // Locates the Key
    questionValue = getButtonValue(questionBox); // Locates the Index
    console.log(displayQuestion(questionCategory, questionValue)); //! TEST
    newQuestion = displayQuestion(questionCategory, questionValue);
    popupQuestion.textContent = newQuestion.question; // Prints the Question in the Modal
  });
});

// Function that Selects the Question Data we are using
function displayQuestion(category, value) {
  console.log("Inside Function, DisplayingQuestion"); //! TEST
  console.log("Category", category, "& Value ", value); //! TEST
  return selectedQuestions[category][value];
}

function getButtonCategory(selectedObject) {
  console.log("Selected Object", selectedObject); //! TEST
  for (let i = 1; i < 7; i++) {
    if (selectedObject.className.split(" ").includes(`category${i}`)) {
      console.log(`category${i}`); //! TEST
      return `selectedQuestion${i}`; // This gives me the correct key
    }
  }
}

function getButtonValue(selectedObject) {
  console.log("Selected Object", selectedObject); //! TEST
  for (let i = 1; i < 7; i++) {
    if (selectedObject.className.split(" ").includes(`value${i}00`)) {
      console.log(`$${i}00`); //! TEST
      return i - 1; // Gives me the Index Number of the Question
    }
  }
}


// Modal Buttons
guessButton.onclick = function() {
  console.log("Guess Button Clicked"); //! TEST
  console.log("Question", newQuestion); //! TEST
  console.log("Input answer", playerAnswer.value, typeof playerAnswer.value); //! TEST I NEED TO STOP FORGETTING ABOUT VALUE!!!!
  console.log("Correct answer", newQuestion.answer); //! TEST
  console.log("Question Value", questionValue, typeof questionValue); //! TEST
questionValue = ((+questionValue +1)*100)
console.log("Question Value", questionValue, typeof questionValue); //! TEST
  //playerAnswer = titleCase(playerAnswer);
  if(titleCase(playerAnswer.value) === newQuestion.answer){
console.log("Correct Answer"); //! TEST
score1 += questionValue;
  }else{
    console.log("Wrong Answer"); //! TEST
    score1 -= questionValue;
  }
  modal.style.display = "none";
  player1Score.textContent = `Player 1's Score: ${score1}`
}

passButton.onclick = function () {
  console.log("Pass Button Clicked"); //! TEST
  modal.style.display = "none";
  player1Score.textContent = `Player 1's Score: ${score1}`;
};

// Capitalize Strings
function titleCase(myString) {
  return myString
    .split(" ")
    .map((word) => {
      word = word.trim();
      let firstLetter1 = word.charAt(0).toUpperCase();
      let restOfWord1 = word.slice(1).toLowerCase();
      return firstLetter1 + restOfWord1;
    })
    .join(" ");
}
