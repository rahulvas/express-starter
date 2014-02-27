// Problem 2 (Peekaboo) ------------------------------------------------------
// WRITE CODE HERE


$('#toggle_img').click(function() {
	if($('#toggle_img').text() === 'Go Away!'){
		$('#main_img').hide();
		$('#toggle_img').text('Come Back!');
	}
	else {
		$('#main_img').show();
		$('#toggle_img').text('Go Away!');
	}
});

// Problem 3 (Swap Em) -----------------------------------------------
// WRITE CODE HERE
$('#change_img').click(function() {
	var current_img = $('#new_img_file').val();
	alert('/static/img/' + current_img);
});

// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
	var linky = $(this).attr('src');
	alert(linky);
  // WRITE CODE HERE
});

// Problem 5 (Imgrr) -------------------------------------------------
// WRITE CODE HERE
$('.imgrr_click').click(function() {
	var newsrc = $(this).attr('src');
	$('#imgrr_main').attr('src', newsrc);
});
