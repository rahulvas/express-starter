$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var balls = [];
  var b0 = {};
    b0.x = 40;
    b0.y = 40;
    b0.r = 20;
    b0.vx = 10;
    b0.vy = 10;
  var b1 = {};
    b1.x = 200;
    b1.y = 200;
    b1.r = 20;
    b1.vx = -5;
    b1.vy = -5;
  var b2 = {};
    b2.x = 100;
    b2.y = 100;
    b2.r = 20;
    b2.vx = -8;
    b2.vy = -8;
  balls.push(b0);
  balls.push(b1);
  balls.push(b2);

  // Run an interation of the game
  var updateGame = function() {
    // PUT STUFF HERE

    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

  for(var i = 0; i < balls.length; i++){
    if((balls[i].vx > 0 && balls[i].x + balls[i].r >= canvas.width) || (balls[i].vx <
    0 && balls[i].x <= 0)){
      balls[i].vx = -balls[i].vx; 
    };

    if((balls[i].vy > 0 && balls[i].y + balls[i].r >= canvas.height) || (balls[i].vy <
    0 && balls[i].y < 0)){
      balls[i].vy = -balls[i].vy; 
    };
    
    balls[i].x += balls[i].vx;
    balls[i].y += balls[i].vy;
}



  for(var i = 0; i< balls.length; i++){
    context.beginPath();
    context.arc(balls[i].x, balls[i].y, balls[i].r, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
  };

  setTimeout(updateGame, 10)

  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
  });



  updateGame();
});
