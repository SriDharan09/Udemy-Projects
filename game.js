
var buttonColours =["red", "yellow", "blue", "green"];
var gamePattern = [];
var userPattern =[];

var gameStart =false;
var level =0 ;

function toggle(){
     var x = document.getElementById("show")
     if(x.style.display == "none"){
        x.style.display = "block";
     }
     else{
        x.style.display = "none";
     }
}

$(document).keypress(function(){
    if(!gameStart){
        $(".inst").css("display", "none");
        $("#level-title").text("Level " + level);
        setTimeout(function(){



            nextSequence();
            
        },1500);
       
        gameStart = true;
    }

});


function startOver(){
    gameStart = false;
    level = 0;
    gamePattern = [];

}

function checkAnswers(currentLevel){
    if(gamePattern[currentLevel] === userPattern[currentLevel]){
        console.log("Correct answer");
        if (userPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }

    else{
        console.log("Wrong answer");

        playSound("wrong");

        $("body").addClass("game-over");
    
    setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

    //   $("#level-title").css("font-size","2rem");
      $("#level-title").text("Game Over, Press Any key to play again");

      startOver();
      
    }
}
    

$(".btn").click(function() {
    var userClick = $(this).attr("id");
    userPattern.push(userClick);
    playSound(userClick);
    animatePress(userClick);
    checkAnswers(userPattern.length-1);

    // console.log(userPattern);


});

function playSound(name){
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();

}
function animatePress(CurretColor){
    $("."+ CurretColor).addClass("pressed");

    setTimeout(() => {
        $("."+ CurretColor).removeClass("pressed");
        
    }, 200);

}

function nextSequence(){
    userPattern = [];

    level++;
    
    $("#level-title").text("Level " + level);

    var randomNum = Math.floor(Math.random()*4);
    var randomChooseClr = buttonColours[randomNum];
    gamePattern.push(randomChooseClr);
    $("#" + randomChooseClr).fadeOut(100).fadeIn(100);

    playSound(randomChooseClr);






}



