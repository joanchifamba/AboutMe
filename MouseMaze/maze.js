"use strict";


$(document).ready(function(){
    var hitWall=false;
    var gameStarted=false;

    $("#boundary1").mouseover(function(){
        $(this).addClass("youlose");
    });

    $(".boundary").mouseover(function(){
        $(this).addClass("youlose");
        hitWall=true;
    });



    $("#end").click(function(){
        if(hitWall){
            $("#status").text("You lose");
        }else{
            $("#status").text("You win");
        }
       
    });

    $("#start").click(function(){
        resetGame();
        gameStarted=true;
    });

    $("#maze").mouseleave(function(){
        if(gameStarted){
            if(!$(this).is(event.target))
            $('.boundary').addClass('youlose');
            hitWall = true;
            $('#status').text('You lose!');
            gameStarted = false;
        }
    })

    function resetGame(){
        $(".boundary").removeClass("youlose");
        $("#status").text("Move your mouse through the maze without touching the walls.");
        hitWall=false;
    }

    

})
