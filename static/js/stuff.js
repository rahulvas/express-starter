alert('Hello Awesome!'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert('Hello World!');// WRITE CODE HERE
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
	$('#houdini_text').hide();
  //WRITE CODE HERE
});

$('#reappear').click(function() {
	$('#houdini_text').show();
  //WRITE CODE HERE
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
$('#tickled_button').click(function() {
	$('#tickled_text').css('color', 'blue');
});

// WRITE CODE HERE


// Problem 4 (Greet Me) -----------------------------------------------------
// WRITE CODE HERE
$('#name_button').click(function() {
	alert('Hey there '+ $('#my_name').val() + ', looking good today!');
});
