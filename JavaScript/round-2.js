// Project: Week 4
// Jeopardy Board Part 2 - Adding functionality
// John Isabella III

import placeholderQuestions from "../scripts/placeholder-questions"
console.log(placeholderQuestions)

    var modal = document.getElementById("modal");

// Select Questions

let startingCatergories = ["Nature"]; // Randomly selects catergories

let questionSelector = document.querySelectorAll(".points");
console.log("questionSelector",questionSelector, typeof questionSelector); //! Test
//node list loop trhough and apply event listener

//let questionInformation = await 

for (let i = 0; i < questionSelector.length; i++) {
    questionSelector[i].addEventListener("click",() => revealQuestion(i));  
    //questionSelector[i].addEventListener("click", ()=>console.log("TEST 4"));  //! TEST
    };

//! TEST FUNCTION
let category1 = placeholderQuestions
.filter((cat) => cat.category === "Nature")
.slice(5);

console.log("Catyergory1 Length =", category1.length);//! TEST

//function selectStartingCatergories(){}

// TODO function populatecategory from DOM Displaying Data




function selectStartingQuestions(elementTitleId,
  elementQuestionClass,
  categoryFilteredArray

){
debugger;
let elementTitle = document.getElementById(elementTitleId);
let title = categoryFilteredArray[0].category;
elementTitle.textContent = title;

let questions = document.querySelectorAll(elementQuestionClass);

questions.forEach((item, index) => {
  // Console Log Item
  item.innerHTML = `${categoryFilteredArray[index].question} 
  <input type="text" class="answer-${title
    .split(" ")
    .join("-")
    .toLowerCase()}" style="display:block"/>`;
});
}

let category1Answers = document.querySelectorAll(".category1.answers");
console.log("category1 Answers =",category1Answers);

for (let i = 0; i < category1Answers.length; i++) {
  category1Answers[i].addEventListener("keyup", () => {
    let answer = category1Answers[i].value.toLowerCase();
    let actualAnswer = category1[i].answer.toLowerCase();
    if (answer == actualAnswer) {
      console.log("Answer is Correct"); //! TEST 
      category1Answers[i].style.backgroundColor = "lightgreen";
    } else {
      console.log("Answer is Incorrect"); //! TEST 
      category1Answers[i].style.backgroundColor = "red";
    }
  });
}


    // pass to revel question what index it goes to
// TODO to Display questions use pokedex
    function revealQuestion(questionIndex){
    //const spinnyBoyz = document.getElementsByClassName("points");  
    console.log("Question Index",questionIndex); //! Test
     modal.style.display = "block";
    //spinnyBoyz.classList.toggle("spin");
   /*  questionSelector(questionIndex) => {
    let revealQuestionText = document.createElement("p");
    revealQuestionText.textContent = item;
    console.log("MIDPOINT"); //! Test
    let poolParty = document.getElementById("jeopardyBoard");
    poolParty = revealQuestionText; //.appendChild(revealQuestionText);
    console.log("Appended"); //! Test
        }; */
        console.log("Post Append"); //! Test */
      }

   /* 
    let questionTextRevealed = placeholderQuestion[0]//randomizeQuestions();
    questionTextRevealed.textContent = questionTextRevealed.question
    console.log(questionTextRevealed);
    return  */

