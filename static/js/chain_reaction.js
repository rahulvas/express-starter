$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  
//MENU STUFF
  var gameState = 'menu';
  var menuText = 'Click to play!';

//
  var reacting = false;
  var numReacted = 0;
  var reactions = [];

  var Colors = ['blue', 'red', 'yellow', 'green', 'purple', 'magenta', 'black', 'blue', 'red'];

  var numBalls = 10;
  var balls = [];

  var createBall = function(x,y,r,t){
    var newBall = {};
    if(x > 0 && y > 0 && r > 0){
      newBall.x = x;
      newBall.y = y;
      newBall.r = r;
      newBall.t = t;
    }
    else{ newBall.x = canvas.width*Math.random();
    newBall.y = canvas.height*Math.random();
    newBall.r = 20;
    newBall.t = 0;
  }
    newBall.vx = 5*Math.random();
    newBall.vy = 5*Math.random();
    newBall.color = Colors[Math.floor(10*Math.random()-1)];
    return newBall;
  };

  for(var i = 0; i< numBalls; i++){
    var newBall = createBall(-1,-1,-1);
    balls.push(newBall);
  };

  // Run an interation of the game
  var updateGame = function() {
    // PUT STUFF HERE
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
   
    //CHECK GAME STATE
    if (gameState === 'menu'){
        context.fillStyle = 'black';
        context.font = '20px Arial';
        context.fillText(menuText, canvas.width/3, canvas.height/2.5);
    }
    //


  else if (gameState === 'playing'){

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

  for(var i = 0; i<reactions.length; i++){
    reactions[i].t += 1;
    if (reactions[i].t > 200){
      reactions[i].r -= 1;
    }
    else if(reactions[i].r < 30) {
      reactions[i].r += 1;
    }
    if (reactions[i].r === 0){
      reactions.splice(i,1);
      i--;
    }
  }

  for (var i = 0; i < balls.length; i++) {
      var collided = false;
        for (var j = 0; j < reactions.length; j++) {
                var xdiff = Math.abs(reactions[j].x - balls[i].x);
                var ydiff = Math.abs(reactions[j].y - balls[i].y);
                var dist = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
                if (dist < reactions[j].r + balls[i].r){
                collided = true;
                numReacted += 1;
                reactions.push(createBall(balls[i].x,balls[i].y,balls[i].r,0));
                balls.splice(i,1);
                i--;
        }
      }
}


  for(var i = 0; i< balls.length; i++){
    context.beginPath();
    context.arc(balls[i].x, balls[i].y, balls[i].r, 0, 2*Math.PI);
    context.strokeStyle= balls[i].color;
    context.closePath();
    context.stroke();
  };

  for(var i = 0; i < reactions.length; i++){
    context.beginPath();
    context.arc(reactions[i].x, reactions[i].y, reactions[i].r, 0, 2*Math.PI);
    context.strokeStyle= 'grey';
    context.closePath();
    context.stroke();
  }

  context.fillStyle = 'black';
  context.font = '20px Comic Sans';
  context.fillText("Reactions: " + numReacted, canvas.width/2.5, canvas.height);
}
if (reacting === true && reactions.length === 0){
  menuText = "Game over! You reacted with " + numReacted + " balls!";
  gameState = 'menu';
}

  requestAnimationFrame(updateGame)

  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    if (gameState === 'menu'){
      gameState = 'playing';
      reacting = false;
      numReacted = 0;
      balls = [];
    for(var i = 0; i< numBalls; i++){
        var newBall = createBall(-1,-1,-1);
        balls.push(newBall);
  };
    }
    // Find the mouse x and y relative to the top-left corner of the canvas
    if (gameState === 'playing' && reacting === false){
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    reacting = true;
    // PUT STUFF HERE
  var newBall = createBall(x,y,1, 0);
  reactions.push(newBall);
}
  });



  updateGame();
});
