console.log('common');



$(document).ready(function() {

	// transparent input, etx
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');

		$(this).focus(function(){
			$(this).attr('placeholder', '');
		});
		$(this).blur(function(){
			$(this).attr('placeholder', placeholder);
		});
	});

	$('a[href="#"]').click(function (e) {
		e.preventDefault();
	});

	// $('.js-scroll-to').on("click", function(e){
	// 	e.preventDefault();
	// 	var anchor = $(this);
	// 	$('html, body').stop().animate({
	// 		scrollTop: $(anchor.attr('href')).offset().top
	// 	}, 1000);
	// });


});






