// Query Selectors
var viewHighscoresLink = document.querySelector("#viewHighscores");
var timerElement = document.querySelector("#timer-Count");

// var headerTextEle = document.querySelector("#headingText");
// var mainTextEle = document.querySelector("#headerText");
// var userActionEle = document.querySelector("#userAction");
var headingTextEle = document.querySelector("#headingText");
var startButton = document.querySelector("#start-button");
var startContainerEle = document.querySelector("#startContainer");

// Arrary of Quetions
var questionOne = {
  title: "Inside which HTML element do we put the JavaScript?",
  choices: ["script", "javascript", "js", "scripting"],
  answer: "script",
};

var questionTwo = {
  title: "Who invented JavaScript?",
  choices: ["Bill Gates", "Brendan Eich", "Mark Zuckerberg", "Douglas Crockford"],
  answer: "Brendan Eich",
};

var questionThree = {
  title: "Where is the correct place to insert a JavaScript?",
  choices: ["<head>", "<body>", "<head> and/or <body>", "<footer>"],
  answer: "<body>",
};

var questionFour = {
  title: "What is the correct syntax for referring to an external script called 'xxx.js'?",
  choices: ["<script src='xxx.js'>", "<script href='xxx.js'>", "<script name='xxx.js'>", "<script file='xxx.js'>"],
  answer: "<script src='xxx.js'>",
};

var questionFive = {
  title: "The external JavaScript file must contain the <script> tag.",
  choices: ["True", "False"],
  answer: "True",
};

var allQuestionsArr = [questionOne, questionTwo, questionThree, questionFour, questionFive];

// Global Variables
var timer;
var timerCount;
var isCorrect = false;
var correctCounter = 0;
var incorrectCounter = 0;
var currentQuestionIndex = 0;

// The init function is called when the page loads 
function init() {
  getCorrect();
  getIncorrect();
}

// The startGame function is called when the start button is clicked
function startGame() {
  timerCount = 29;
  startTimer();
  startContainerEle.classList.add("visually-hidden");
  promptQuestions();
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer(){
timer = setInterval(function(){
  if(timerCount <= 0){
    clearInterval(timer);
    document.getElementById("timer-Count").innerHTML = "Finished";
  } else {
    document.getElementById("timer-Count").innerHTML = "Time: " + timerCount;
  }
  timerCount -= 1;
}, 1000);
};

// This function will populate the question after the game starts
function promptQuestions(){
  var displayQuestionEle = document.querySelector(".displayQuestion");
  var displayChoicesEle = document.querySelector(".displayChoices");

  displayQuestionEle.textContent =  allQuestionsArr[currentQuestionIndex].title;
  var choiceArr = allQuestionsArr[currentQuestionIndex].choices;
  for (var i = 0 ; i < choiceArr.length; i++){
  var button = document.createElement("button");
  button.classList.add("choice-buttons", "btn", "btn-primary", "mt-2", "btn-sm");
  button.textContent = choiceArr[i];
  displayChoicesEle.appendChild(button);
};
var choiceButtons = document.querySelectorAll(".choice-buttons");
choiceButtons.forEach(element => {
  // if ()
  
  console.log(element);
});
}

// Updates correct count and sets correct counter to client storage
function setCorrect(){
  localStorage.setItem("correctCount", correctCounter);
};

// Updates incorrect count and sets incorrect counter to client storage
function setIncorrect() {
  localStorage.setItem("incorrectCount", incorrectCounter);
}

// These functions are used by init
function getCorrect() {
  // Get stored value from client storage, if it exists
  var storedCorrect = localStorage.getItem("correctCount");
  // If stored value doesn't exist, set counter to 0
  if (storedCorrect === null) {
    correctCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    correctCounter = storedCorrect;
  }
}

function getIncorrect() {
  var storedIncorrect = localStorage.getItem("incorrectCount");
  if (storedIncorrect === null) {
    incorrectCount = 0;
  } else {
    incorrectCount = storedIncorrect;
  }
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

