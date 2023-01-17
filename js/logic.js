//VARIABLE NEEDED
// var body = document.body;
var header = document.querySelector(".header");
var score = document.querySelector(".score");
var submitButton = document.getElementById("start");

var quizQuestionHeader = document.getElementById("question-title");
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var correct = document.getElementById("correct");
var answerResponse = document.getElementById("answerResponse");

var finalScoreIs = document.getElementById("final-score");
var quizQuestionsPage = document.getElementById("questions");
var questionButton = document.querySelector(".choices");

var quizChallengePage = document.getElementById("start-screen");
var finalScorePage = document.getElementById("end-screen");
var highScoreButtons = document.getElementById("wrapper");

var initialButton = document.getElementById("start");
var initials = document.getElementById("initials");
var initialInput = document.getElementById("initialInput");

var allDone = document.getElementById("allDone");
var allDoneButtons = document.getElementById("submit");

var timer = document.getElementById("timer"); // Timer Variable 

var startScore = 0;
var questionIndex = 0;


//QUESTIONS



//FUNCTIONS


// Start quiz
function startQuiz() {
    quizChallengePage.style.display = "none"; // Hide Rules 
    quizQuestionsPage.style.display = "block"; // Show Quiz Questions Page

    secondsLeft = 90; // seconds in Timer 

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0 || quizQuestions.length === questionIndex) {
            clearInterval(timerInterval);
            showFinalScore();
        }
    }, 1000);
}

////////////EVENT LISTENERS////////////////

// START QUIZ - WORKS 
submitButton.addEventListener("click", function () {
    startQuiz()
    console.log("start")
})