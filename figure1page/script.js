$(document).ready(function() {

	$('.imgLink').on('click', function() {
		$('#displayImg').attr('src', $(this).attr('imgsrc'));
	});	

	$('#displayImg').on('click', function() {
  	$('#bigImg').attr('src', $('#displayImg').attr('src'));
  });	
    
});

