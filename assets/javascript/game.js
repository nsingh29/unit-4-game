// pseudo code
// game w/ 4 crystals
// Each crystal generates random number
// there is a random starting number at the beginning of the game
// player wins if the score matches random number 
// player loses if their score goes over random number

var startingNumber;
var wins= 0;
var lost = 0;
var totalScore = 0;

var crystal1;
var crystal2;
var crystal3;
var crystal4;


function restartGame(){
    startingNumber = Math.floor(Math.random() * 101) + 19;
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
    totalScore = 0;
    $("#wins").text(wins)
    $("#loss").text(lost)
    $("#total-score").text(totalScore)
    $("#random-number").text(startingNumber)

}

//make function to increase score everytime player matches starting number

function setNumber(crystalValue){
    totalScore += crystalValue
    $("#total-score").text(totalScore)
    if (totalScore === startingNumber){
        wins++;
        restartGame();
    }
    else if (totalScore >= startingNumber){
        lost++;
        restartGame();
    };
    
}
restartGame();

$(document).ready(function () {
    
    $(".crystal1").on("click", function() { 
        setNumber(crystal1);
    });

    $(".crystal2").on("click", function() {
        setNumber(crystal2);
    });

    $(".crystal3").on("click", function() {
        setNumber(crystal3);
    });

    $(".crystal4").on("click", function() {
        setNumber(crystal4);
        console.log(crystal4)
    });
});

