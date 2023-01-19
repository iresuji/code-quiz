////////////VARIABLES////////////////
var header = document.querySelector(".header");
var score = document.querySelector(".scores");
var submitButton = document.getElementById("start");
var quizQuestionHeader = document.getElementById("question-title");
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var correct = document.getElementById("correct");
var answerResponse = document.getElementById("answerResponse");
var finalScoreIs = document.getElementById("finalScoreIs");
var quizQuestionsPage = document.getElementById("questions");
var questionButton = document.querySelector(".questionButton");
var quizChallengePage = document.getElementById("start-screen");
var finalScorePage = document.getElementById("end-screen");
var highScoreButtons = document.getElementById("HighScoreBtn");
var initialButton = document.getElementById("initialButton");
var initials = document.getElementById("initials");
var initialInput = document.getElementById("initialInput");
var allDone = document.getElementById("allDone");
var allDoneButtons = document.getElementById("form-inline");
var timer = document.querySelector(".timer"); // Timer Variable 
var clearHighScore = document.getElementById("clear");
var startScore = 0;
var questionIndex = 0;

////////////QUESTIONS////////////////
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
////////////FUNCTIONS////////////////
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
// FIRST PAGE 
function codeQuizChallenge() {
    quizChallengePage.style.display = "block"; // Shows Rules 
    header.style.display = "block"; // Shows Header
    quizQuestionsPage.style.display = "none"; // Hide Quiz Questions Page
    finalScorePage.style.display = "none";   // Hide Final score Page 
    var startScore = 0; // Starting time 
    timer.textContent = "Time: " + startScore; // Holder text in nav bar 
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
// CHECK TO SEE IF ANSWER IS CORRECT
function checkAnswer(event) {
    event.preventDefault();
    var answer = event.currentTarget.dataset.answer;
    var correctAnswer = null;
    if (quizQuestions[questionIndex].correct === answer) {
        correctAnswer = answer;
    }
    if (answer === correctAnswer) {
        answerResponse.textContent = "Correct!"; // If correct, say correct
    } else {
        answerResponse.textContent = "Wrong!"; // If wrong, say wrong & deduct 10 points
        secondsLeft -= 10
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
    }
    if (quizQuestions.length === questionIndex + 1) {
        showFinalScore(); // If it has gone through all questions, show final score
        return; // If not, print the next question
    }
    questionIndex++;
    showQuestions();
}
// GO TO "ALL DONE" PAGE AND SHOW FINAL SCORE
function showFinalScore() { //Function to go to page when time out or quiz complete 
    quizQuestionsPage.style.display = "none"; // Hide Questions Page
    finalScorePage.style.display = "block"; // Show Final Score Page 
    finalScoreIs.style.display = "block" // Show Final Score
    initials.style.display = "block" // Show initial input
    initialButton.style.display = "block" // Show initial button
    initialInput.style.display = "block" // Show initial input
    finalScoreIs.textContent = "Your final score is " + secondsLeft;
    initialButton.textContent = "Submit"; // Form button 
    initials.textContent = "Enter Your Initials: "; // Form text
} // end of showFinalScore

var highScoreArray = [] // Global variable 

// SHOWS ALL HIGH SCORES 
function showHighScores() {
    header.style.display = "none"; // Hide header 
    allDone.style.display = "none"; // Hide all done
    finalScoreIs.style.display = "none" // Hide Final Score
    initials.style.display = "none" // Hide initial input
    initialButton.style.display = "none" // Hide initial button
    initialInput.style.display = "none" // Hide initial button
    var getInitials = document.getElementById("initialInput").value; // captures the value of the initials 
    var highScoreArray = JSON.parse(localStorage.getItem("highScore")) || [];
    var localStorageArray = { score: secondsLeft, initials: getInitials };
    highScoreArray.push(localStorageArray)
    localStorage.setItem("highScore", JSON.stringify(highScoreArray)); // Adds array 
    var highScores = getInitials + ": " + secondsLeft; // add in + getInitials when read it
    window.location.href = './highscores.html';
}

// RESETTING GLOBAL VARIABLES WHEN RESTART QUIZ 
function resetVariables() {
    startScore = 0;
    questionIndex = 0;
}

////////////EVENT LISTENERS////////////////

// START QUIZ
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

// CLICK TO VIEW HIGH SCORES
score.addEventListener("click", function () {
    showHighScores();
    console.log("view high scores")
})

// CLICK INTIAL BUTTON TO SHOW HIGH SCORES
initialButton.addEventListener("click", function () {
    showHighScores();
    console.log("initial button")
})


// Page starts at home page 
codeQuizChallenge(); 