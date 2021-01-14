// Query Selectors
var viewHighscoresLink = document.querySelector("#viewHighscores");
var timerElement = document.querySelector("#timer-Count");
var headingTextEle = document.querySelector("#headingText");
var startButton = document.querySelector("#start-button");
var startContainerEle = document.querySelector("#startContainer");
var secondContainerEle = document.querySelector(".secondContainer");

// Arrary of Quetions
var questionOne = {
  title: "Inside which HTML element do we put the JavaScript?",
  choices: ["script", "javascript", "js", "scripting"],
  answer: 0,
};

var questionTwo = {
  title: "Who invented JavaScript?",
  choices: ["Bill Gates", "Brendan Eich", "Mark Zuckerberg", "Douglas Crockford"],
  answer: 1,
};

var questionThree = {
  title: "Where is the correct place to insert a JavaScript?",
  choices: ["<head>", "<body>", "<head> and/or <body>", "<footer>"],
  answer: 1,
};

var questionFour = {
  title: "What is the correct syntax for referring to an external script called 'xxx.js'?",
  choices: ["<script src='xxx.js'>", "<script href='xxx.js'>", "<script name='xxx.js'>", "<script file='xxx.js'>"],
  answer: 0,
};

var questionFive = {
  title: "The external JavaScript file must contain the <script> tag.",
  choices: ["True", "False", "None", "Both"],
  answer: 1,
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
function startTimer() {
  timer = setInterval(function () {
    if (timerCount <= 0) {
      clearInterval(timer);
      document.getElementById("timer-Count").innerHTML = "Times Up!";
    } else {
      document.getElementById("timer-Count").innerHTML = "Time: " + timerCount;
    }
    timerCount -= 1;
  }, 1000);
};

// This function will populate the question after the game starts
function promptQuestions() {
  var displayQuestionEle = document.querySelector("#displayQuestion");
  var choiceOneElement = document.querySelector("#choiceOne");
  var choiceTwoElement = document.querySelector("#choiceTwo");
  var choiceThreeElement = document.querySelector("#choiceThree");
  var choiceFourElement = document.querySelector("#choiceFour");

  displayQuestionEle.textContent = allQuestionsArr[currentQuestionIndex].title;
  var choiceArr = allQuestionsArr[currentQuestionIndex].choices;
  choiceOneElement.textContent = allQuestionsArr[currentQuestionIndex].choices[0];
  choiceTwoElement.textContent = allQuestionsArr[currentQuestionIndex].choices[1];
  choiceThreeElement.textContent = allQuestionsArr[currentQuestionIndex].choices[2];
  choiceFourElement.textContent = allQuestionsArr[currentQuestionIndex].choices[3];

  console.log(allQuestionsArr[currentQuestionIndex].choices);

  for (var i = 0; i < choiceArr.length; i++) {
    secondContainerEle.classList.remove("visually-hidden");
  };
}

// Updates correct count and sets correct counter to client storage
function setCorrect() {
  localStorage.setItem("correctCount", correctCounter);
};

// Updates incorrect count and sets incorrect counter to client storage
function setIncorrect() {
  localStorage.setItem("incorrectCount", incorrectCounter);
}

// These functions are used by init; get stored correct/incorrect values from client storage, if they exist
function getCorrect() {
  var storedCorrect = localStorage.getItem("correctCount");
  if (storedCorrect === null) {
    correctCounter = 0;
  } else {
    correctCounter = storedCorrect;
  }
}

// These functions are used by init; get stored incorrect values from client storage, if they exist
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
