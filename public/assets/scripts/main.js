$(document).ready(function() {
	$(".dropdown-toggle").click(function(event) {
		event.stopPropagation();
		var dropdown = $(this).parent('.dropdown'); 
		if ($(dropdown).hasClass('open')) {
			$(dropdown).removeClass('open');
		}
		else {
			$(dropdown).addClass('open');
		}
	});

	/* close the drop down when clicking elsewhere */
	$('html, body').click(function() {
		$('.dropdown.open').removeClass('open');
	});

	$("#nav-news").click(function(event) {
		event.stopPropagation();

		$("#page-contact").slideUp();
		$("#page-news").slideDown();
	});

	$("#nav-contact").click(function(event) {
		event.stopPropagation();
		
		$("#page-news").slideUp();
		$("#page-contact").slideDown();
	});
});

