$(function(){
	//new WOW().init();

	$('.MainSlider').slick({
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
  		autoplaySpeed: 5000,
  		adaptiveHeight: true
	});

	$('.slick-dots');

	window.FontAwesomeConfig = {
    	searchPseudoElements: true
  	}
});

