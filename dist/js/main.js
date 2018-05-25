$(function(){
	//////////////////// LIBRARY INIT ////////////////////

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

	window.FontAwesomeConfig = {
    	searchPseudoElements: true
  	}










  	//////////////////// CUSTOM JS ////////////////////

  	// ---------- change MainActionBtns position ---------- //

  	// ----- onLoad ----- //

  	// variables declaration
  	var lg = 1200;
	var md = 992;
	var sm = 768;

	var windowWidth = 0;

	var mainActionBtns = $('#main-action-btns');
	var navigationLine = $('.navigation-line');
	var mainHeader = $('.MainHeader');

	if ( (mainActionBtns.length > 0) && (navigationLine.length > 0) && (mainHeader.length > 0)){
		var navLineClass = 'main-action-btns--navLine';

		// test resolution and button position
		changeActionBtnsPosCtrl();





		// ----- onResize ----- //
		window.addEventListener('resize', changeActionBtnsPosCtrl);





		// ----- FUN ----- //

		// test resolution and button position
		function changeActionBtnsPosCtrl (event) {
			windowWidth = document.documentElement.clientWidth;
			window.removeEventListener('resize', changeActionBtnsPosCtrl);

			(windowWidth < md) ? putMainBtnToNavLine() : putMainBtnToHeader();

			window.addEventListener('resize', changeActionBtnsPosCtrl);
		}

		function putMainBtnToNavLine () {
			mainActionBtns.detach().addClass(navLineClass);
			navigationLine.prepend(mainActionBtns);
		}

		function putMainBtnToHeader () {
			mainActionBtns.detach().removeClass(navLineClass);
			mainHeader.find('.row').find('div').last().prepend(mainActionBtns);
		}
	}
});

