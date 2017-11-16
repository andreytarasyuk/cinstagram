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

	$('.js-scroll-to').on("click", function(e){
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
	});


	// catalog__slider
	// $('.popular-slider-js').slick({
	// 	slidesToShow: 5,
	// 	slidesToScroll: 1,
	// 	arrows: true,
	// 	responsive: [
	// 	{
	// 		breakpoint: 1200,
	// 		settings: {
	// 			slidesToShow: 4,
	// 			slidesToScroll: 1,
	// 			arrows: true
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 992,
	// 		settings: {
	// 			slidesToShow: 3,
	// 			slidesToScroll: 1,
	// 			arrows: true
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 715,
	// 		settings: {
	// 			slidesToShow: 2,
	// 			slidesToScroll: 1,
	// 			arrows: true
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 520,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 			arrows: true
	// 		}
	// 	}
	// 	]
	// });
});






