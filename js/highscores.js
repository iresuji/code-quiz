var highScoreButtons = document.getElementById("HighScoreBtn");
//var finalScorePage = document.getElementById("end-screen");
var finalScoreIs = document.getElementById("finalScoreIs");
var initialButton = document.getElementById("initialButton");
var initials = document.getElementById("initials");
var initialInput = document.getElementById("initialInput");
var highestScore = document.getElementById("highscores");

var highScoreArray = [] // Global variable  


// SHOWS ALL HIGH SCORES 
function showHighScores() {
    highScoreButtons.style.display = "block"; // Show Final Score Page 

    var highScoreArray = JSON.parse(localStorage.getItem("highScore")) || [];

    console.log(highScoreArray);

    highScoreArray.sort(function (a, b) { return b.score - a.score });

    let highest = highScoreArray[0];
    highestScore.innerText = highest.initials + " " + highest.score;

    console.log(highest);

}

showHighScores();

// CLEAR HIGH SCORES
clearHighScore.addEventListener("click", function () {
    localStorage.clear();
})