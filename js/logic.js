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

var quizQuestions = [
    {
        "quizQuestionHeader": "Commonly used Data Types do NOT Include:",
        "one": "strings",
        "two": "booleans",
        "three": "alerts",
        "four": "numbers",
        "correct": "alerts",
    }, {
        "quizQuestionHeader": "The condition in an if / else statement is enclosed within ________.",
        "one": "quotes",
        "two": "curly brackets",
        "three": "parenthesis",
        "four": "square brackets",
        "correct": "parenthesis",
    }, {
        "quizQuestionHeader": "Arrays in JavaScript can be used to store ________.",
        "one": "numbers and strings",
        "two": "other arrays",
        "three": "booleans",
        "four": "all of the above",
        "correct": "all of the above",
    }, {
        "quizQuestionHeader": "String values must be enclosed within ________ when being assigned to variables",
        "one": "commas",
        "two": "curly brackets",
        "three": "quotes",
        "four": "parenthesis",
        "correct": "quotes",
    }, {
        "quizQuestionHeader": "A very useful tool used for developing and debugging for printing content to the debugger is:",
        "one": "JavaScript",
        "two": "terminal / bash",
        "three": "for loops",
        "four": "console.log",
        "correct": "console.log",
    },
]


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

// SHOW QUESTIONS
function showQuestions() {
    var q = quizQuestions[questionIndex];

    quizQuestionHeader.innerHTML = q.quizQuestionHeader;
    choice1.innerHTML = q.one;
    choice1.setAttribute("data-answer", q.one);
    choice2.innerHTML = q.two;
    choice2.setAttribute("data-answer", q.two);
    choice3.innerHTML = q.three;
    choice3.setAttribute("data-answer", q.three);
    choice4.innerHTML = q.four;
    choice4.setAttribute("data-answer", q.four);
}

////////////EVENT LISTENERS////////////////

// START QUIZ - WORKS 
submitButton.addEventListener("click", function () {
    startQuiz()
    console.log("start")
})

// EVENT LISTENERS WHEN USER CLICKS ANSWERS 
showQuestions();
choice1.addEventListener("click", function (event) {
    checkAnswer(event);
})
choice2.addEventListener("click", function (event) {
    checkAnswer(event);
})
choice3.addEventListener("click", function (event) {
    checkAnswer(event);
})
choice4.addEventListener("click", function (event) {
    checkAnswer(event);
})