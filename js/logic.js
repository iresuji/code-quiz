//VARIABLE NEEDED
var startButton = document.getElementById("start")

var quizQuestions = document.getElementById("questions");
var startScreen = document.getElementById("start-screen");
var timer = document.getElementById("timer"); // Timer Variable
var quizQuestionTitle = document.getElementById("question-title")

//FUNCTIONS


// Start quiz
function startQuiz() {
    startScreen.style.display = "none"; // Hide Rules 
    quizQuestions.style.display = "block"; // Show Quiz Questions Page

    secondsLeft = 80; // seconds in Timer 

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0 || quizQuestions.length === questionIndex) {
            clearInterval(timerInterval);
            showFinalScore();
        }
    }, 1000);
}

// First page 
function codeQuizChallenge() {
    startScreen.style.display = "block"; // Shows Rules 
    header.style.display = "block"; // Shows Header
    quizQuestions.style.display = "none"; // Hide Quiz Questions Page
    finalScorePage.style.display = "none";   // Hide Final Core Page 

    var startScore = 0; // Starting time 
    timer.textContent = "Time: " + startScore; // Holder text in nav bar 
}

// SHOW QUESTIONS
function showQuestions() {
    var quiz = questions[questionIndex];

    quizQuestionTitle.innerHTML = quiz.quizQuestionTitle;
    choice1.innerHTML = quiz.one;
    choice1.setAttribute("data-answer", quiz.one);
    choice2.innerHTML = quiz.two;
    choice2.setAttribute("data-answer", quiz.two);
    choice3.innerHTML = quiz.three;
    choice3.setAttribute("data-answer", quiz.three);
    choice4.innerHTML = quiz.four;
    choice4.setAttribute("data-answer", quiz.four);
}

////////////EVENT LISTENERS////////////////

// START QUIZ - WORKS 
startButton.addEventListener("click", function () {
    startQuiz()
    console.log("start")
})