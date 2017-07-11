$(document).ready(function() {

	$('.price-menu-item li').hide();
	$('.price-menu-item-active li').show();
	$('.price-menu-item-active p img').css('transform', 'rotate(180deg)');
	$('nav.article-items p').hide();

	$('nav.article-items li').on('click', function(event) {
		event.preventDefault();
		if ($(this).find('p').hasClass('article-items-active')) {
			$('nav.article-items p').slideUp(300).removeClass('article-items-active');
			return true;
		}
		$('nav.article-items p').slideUp(300).removeClass('article-items-active');
		$(this).find('p').slideDown(300).addClass('article-items-active');
	});

	$('.price-menu-item').on('click', function(event) {
		event.preventDefault();
		if ($(this).hasClass('price-menu-item-active')) return false;
		$('.price-menu-item li').slideUp(300);
		$('.price-menu-item').removeClass('price-menu-item-active');
		$(this).find('li').slideDown(300);
		$(this).addClass('price-menu-item-active');
		$('.price-menu-item').find('img').css({
			'transform': 'rotate(0deg)',
			'transition': '.4s ease'
		});
		$(this).find('img').css({
			'transform': 'rotate(-180deg)',
			'transition': '.4s ease'
		});
	});

	$('.header-nav-has-child').hover(function() {
		$(this).children('a').css({
			'background-color': '#039be4',
			'color': 'white'
		});
		$(this).find('ul').css({
			'display': 'block',
			'transition': '.3s ease'
		});
	}, function() {
		$(this).children('a').css({
			'background-color': 'transparent',
			'color': 'black'
		});
		$(this).find('ul').css({
			'display': 'none',
			'transition': '.3s ease'
		});
	});

	$('.sitebar-menu ul').hide();
	$('.sitebar-menu-active ul').show();
	$('.sitebar-menu').first().find('p').css({
		'border-top-left-radius': '5px',
		'border-top-right-radius': '5px'
	});
	$('.sitebar-menu').last().find('p').css({
		'border-bottom-left-radius': '5px',
		'border-bottom-right-radius': '5px'
	});

	var sitebarItemLast = false;
	$('.sitebar-menu').last().find('p').on('click', function() {
		$(this).css('border-radius', '0px');
	});
	$('.sitebar-menu').on('click', function(event) {
		event.preventDefault();

		if ($(this).hasClass('sitebar-menu-active')) return false;

		if (sitebarItemLast == true) {
			sitebarItemLast = false;
			$('.sitebar-menu').last().find('p').css({
				'border-bottom-left-radius': '5px',
				'border-bottom-right-radius': '5px'
			});
		}

		$('.sitebar-menu').removeClass('sitebar-menu-active');
		$('.sitebar-menu ul').slideUp(300);
		$('.sitebar-menu p img').css({
			'transform': 'rotate(0deg)',
			'transition': '.3s ease'
		});
		$(this).find('ul').slideDown(300);
		$(this).addClass('sitebar-menu-active');
		$(this).find('p img').css({
			'transform': 'rotate(180deg)',
			'transition': '.3s ease'
		});
	});
	$('.sitebar-menu:last-child').on('click', function(event) {
		sitebarItemLast = true;
		$('.sitebar-menu').last().find('p').css({
			'border-bottom-left-radius': '0px',
			'border-bottom-right-radius': '0px'
		});
	});

	var isMenuOpen = false;
	$('.header-nav-mob p').click(function() {
		if (isMenuOpen == false) {
			isMenuOpen = true;
			$('.header-nav-mob ul').slideDown(600);
			$(this).find('img').css({
				'transform': 'rotate(-180deg)',
				'transition': '.3s ease'
			});
			$('.nav-overlay').css({
				'opacity': '1',
				'transition': '.5s ease',
				'z-index': '999'
			});
		} else {
			isMenuOpen = false;
			$('.header-nav-mob ul').slideUp(600);
			$(this).find('img').css({
				'transform': 'rotate(0deg)',
				'transition': '.3s ease'
			});
			$('.nav-overlay').css({
				'opacity': '0',
				'transition': '.5s ease',
				'z-index': '-1'
			});
		}
	});

	$(".owl-carousel").owlCarousel({
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
				items: 4
			}
		}
	});

});