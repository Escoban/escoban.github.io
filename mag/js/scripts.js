$(document).ready(function() {

	$('.sitebar-menu ul').hide();
	$('.sitebar-menu-active ul').show();
	$('.sitebar-menu').on('click', function(event) {
		event.preventDefault();

		if ($(this).hasClass('sitebar-menu-active')) return false;

		$('.sitebar-menu').removeClass('sitebar-menu-active');
		$('.sitebar-menu ul').hide(300);
		$(this).find('ul').show(300);
		$(this).addClass('sitebar-menu-active');
	});

	var isMenuOpen = false;
	$('.header-nav-mob p').click(function() {
		if (isMenuOpen == false) {
			isMenuOpen = true;
			$('.header-nav-mob ul').slideDown(600);
		} else {
			isMenuOpen = false;
			$('.header-nav-mob ul').slideUp(600);
		}
	});

	$(".owl-carousel").owlCarousel({
		items: 5,
		loop: true,
		smartSpeed: 700,
		dotsSpeed: 700,
		dots: true,
		mouseDrag: false,
		responsiveClass:true,
		responsive: {
			320: {
				items: 1
			},
			767: {
				items: 2
			},
			992: {
				items: 3
			},
			1024: {
				items: 4
			},
			1440: {
				items: 5
			}
		}
	});

});