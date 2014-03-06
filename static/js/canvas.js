$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

  $('#p1').click(function() {
  	context.strokeRect(50,30, 10, 50);
  });

  $('#p2').click(function() {
  	context.strokeRect(75, 95, 20, 20);
  });

  $('#p3').click(function() {
  	context.beginPath();
  	context.arc(90, 150, 50, 0, Math.PI);
  	context.closePath();
  	context.stroke();
  });

  $('#p4').click(function(){
  	context.beginPath();
  	context.arc(110, 60, 15, 0, 2*Math.PI);
  	context.closePath();
  	context.stroke();
  });

  $('#p5').click(function(){
  	context.beginPath();
  	context.moveTo(75, 95);
  	context.lineTo(120,70);
  	context.closePath();
  	context.stroke();
  })

});
