
var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;
var userPattern = [];
function nextSequence() {
    userPattern = [];
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColor);
    level++;
    $("#level-title").text("Level "+level);

}

function makeSound(ChosenButton){
    switch (ChosenButton) {
        case "red":
            var redAudio = new Audio("sounds/red.mp3");
            redAudio.play();
            break;
        case "blue":
            var blueAudio = new Audio("sounds/blue.mp3");
            blueAudio.play();
            break;
        case "green":
            var greenAudio = new Audio("sounds/green.mp3");
            greenAudio.play();
            break;
        case "yellow":
            var yellowAudio = new Audio("sounds/yellow.mp3");
            yellowAudio.play();
            break;
    
        default:
            break;
    }
}
// User Section --------------------------------------------------------------------------------------------------------------------
$(".btn").on("click", function(){
    var userChosenButton = $(this).attr("id");
    makeSound(userChosenButton);
    userPattern.push(userChosenButton);
    animatePress(userChosenButton);
    checkAnswer(userPattern.length - 1);
});
function playsound(name) {
    switch (name) {
        case "red":
            var redAudio = new Audio("sounds/red.mp3");
            redAudio.play();
            break;
        case "blue":
            var blueAudio = new Audio("sounds/blue.mp3");
            blueAudio.play();
            break;
        case "green":
            var greenAudio = new Audio("sounds/green.mp3");
            greenAudio.play();
            break;
        case "yellow":
            var yellowAudio = new Audio("sounds/yellow.mp3");
            yellowAudio.play();
            break;
    
        default:
            break;
    }
}
function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}
// Game Starts--------------------------------------------------------------------------------------------------------------------


$(document).on("keydown", function(){
    if (!started){
        nextSequence();
        started = true;
    }
    
});
function checkAnswer(currentLevel) {
    if (userPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("sucess");
        if(userPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence()
            }, 1000);
        }
    }
// Game over ----------------------------------------------------------------------------------------------------------------------
    else{
        $("#level-title").text("Game over, press any key to restart");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 150);
        console.log("game over");
        $(document).on("keydown", startOver());
    }
}
 
function startOver() {
    gamePattern = [];
    started = false;
    level = 0;
}
