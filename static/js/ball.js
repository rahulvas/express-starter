$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE

  var circle = {};
  circle.x = 20;
  circle.y = 20;
  circle.r = 20;

  //run an iteration of the game
  var updateGame = function() {
    
    circle.x += 5;
    circle.y += 5;

    context.strokeRect(0, 0, canvas.width, canvas.height);
    context.clearRect(0, 0, canvas.width, canvas.height);


    context.beginPath();
    context.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
    

    setTimeout(updateGame, 10)

    //PUT STUFF HERE
  };

  updateGame();
});
