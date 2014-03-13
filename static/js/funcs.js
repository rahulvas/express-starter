$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    //alert('Drawing a square is unimplemented!');
    // Write square drawing code here
    // Delete the alerts when done
    context.strokeStyle= color;
    context.strokeRect(x, y, sideLen, sideLen);
  };

  var drawCircle = function(x, y, radius, color) {
    //alert('Drawing a circle is unimplemented!');
    // Write circle drawing code here
    // Delete the alert when done
    context.strokeStyle=color;
    context.beginPath();
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
  };

  // Write drawTriplet function here

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //
  $('#p5').click(function() {
    drawSquare(75,75, 50, 'red');
    drawCircle(100, 100, 25, 'blue');
    drawCircle(75, 100, 25, 'green');
    drawCircle(100, 75, 25, 'green');
    drawCircle(125, 100, 25, 'green');
    drawCircle(100, 125, 25, 'green');
  });

});
