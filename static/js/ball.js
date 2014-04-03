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
  circle.vx = 5;
  circle.vy = 5;
  circle.color = ['blue', 'red', 'yellow', 'green', 'purple', 'magenta', 'black', 'blue', 'red'];
  
  
  var i = 0;

  //run an iteration of the game
  var updateGame = function() {
    
    i += 1;

    if((circle.vx > 0 && circle.x + circle.r >= canvas.width) || (circle.vx <
    0 && circle.x <= 0)){
      circle.vx = -circle.vx; 
    };

    if((circle.vy > 0 && circle.y + circle.r >= canvas.height) || (circle.vy <
    0 && circle.y < 0)){
      circle.vy = -circle.vy; 
    };
    
    circle.x += circle.vx;
    circle.y += circle.vy;

    context.fillStyle = i % 30 === 0 ? 'white': 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);


    context.beginPath();
    context.strokeStyle = circle.color[Math.floor(10*Math.random()-1)];
    context.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
    

    setTimeout(updateGame, 10)


    //PUT STUFF HERE
  };

  updateGame();
});
