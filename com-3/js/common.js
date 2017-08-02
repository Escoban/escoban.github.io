$(function() {

	$('.more-domain').hide();

	var isShowMoreOpen = false;
	$('.show-me-more-domain').on('click', function(event) {
		event.preventDefault();
		if (isShowMoreOpen == false) {
			isShowMoreOpen = true;
			$('.more-domain').slideDown(600);
		} else {
			isShowMoreOpen = false;
			$('.more-domain').slideUp(600);
		}
	});

	$('.antivirus-popup').hide();
	$('.antivirus-popup-wraper i').hover(function() {
		$(this).parent().find('div.antivirus-popup').slideDown(300);
	}, function() {
		$(this).parent().find('div.antivirus-popup').slideUp(300)
	});

	$('.range-css').change(function(event) {
		var x = document.getElementById("myRange").value;
    document.getElementById("demo").value = x;
	});

	var isAntivirusDopOpen = false;
	$('.more-params').hide();
	$('.show-more-param').on('click', function(event) {
		event.preventDefault();
		if (isAntivirusDopOpen == false) {
			isAntivirusDopOpen = true;
			$('.more-params').slideDown(600);
		} else {
			isAntivirusDopOpen = false;
			$('.more-params').slideUp(600);
		}
	});

	$(".owl-carousel-index").owlCarousel({
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		freeDrag: false,
		dots: true,
		smartSpeed: 600,
		margin: 100,
		nav: true,
		navText: ['<img src="img/icons/arrow-left.png" alt="arrow-left">', '<img src="img/icons/arrow-right.png" alt="arrow-right">']
	});

	$('.owl-carousel-clients').owlCarousel({
		items: 7,
		margin: 10,
		mouseDrag: false,
		dots: false,
		smartSpeed: 600,
		nav: true,
		navText: ['<img src="img/icons/arrow-left.png" style="width: 10px;" alt="arrow-left">', '<img src="img/icons/arrow-right.png" style="width: 10px;" alt="arrow-right">'],
		responsiveClass: true,
    responsive: {
        0:{
          items: 2
        },
        480:{
          items: 3
        },
        769:{
          items: 7
        }
    }
	});

	$('.owl-carousel-reviews').owlCarousel({
		items: 3,
		dots: false,
		nav: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		freeDrag: false,
		margin: 60,
		smartSpeed: 600,
		loop: true,
		mergeFit: true,
		navText: ['<img src="img/icons/arrow-left.png" style="width: 10px;" alt="arrow-left">', '<img src="img/icons/arrow-right.png" style="width: 10px;" alt="arrow-right">'],
		responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        },
        769:{
          items: 1
        },
        1440: {
        	items: 3
        }
    }

	});
	$('section.index-review .active').first().addClass('review-wraper-no-active');
	$('section.index-review .active').last().addClass('review-wraper-no-active');
	$('section.index-review .owl-next').on('click', function() {
		$('section.index-review .active').css('transition', '.8s ease').removeClass('review-wraper-no-active');
	
		$('section.index-review .active').first().addClass('review-wraper-no-active');
		$('section.index-review .active').last().addClass('review-wraper-no-active');
	});
	$('section.index-review .owl-prev').on('click', function() {
		$('section.index-review .active').css('transition', '.8s ease').removeClass('review-wraper-no-active');
	
		$('section.index-review .active').first().addClass('review-wraper-no-active');
		$('section.index-review .active').last().addClass('review-wraper-no-active');
	});

	$('.owl-carousel-cerificate').owlCarousel({
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		freeDrag: false,
		smartSpeed: 600,
	});

	$('.owl-carousel-virtual-server').owlCarousel({
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		freeDrag: false,
		smartSpeed: 600,
	});

	$('.tab-content').hide();

	$('nav.tab').on('click', function(event) {
		event.preventDefault();

		if($(this).hasClass('tab-active')) return 1;

		$('nav.tab').removeClass('tab-active');
		$('.tab-content').slideUp(300);

		$(this).addClass('tab-active');
		$(this).find('.tab-content').slideDown(300);
	});

	$('.vks-listitem').hide();
	$('.price-list-item-kvm').on('click', function(event) {
		event.preventDefault();
		$('.vks-listitem').slideUp(300);
		$('.vds-listitem').slideDown(300);

		$('.price-list-item-vds').removeClass('price-list-active');
		$('.price-list-item-kvm').addClass('price-list-active');
	});
	$('.price-list-item-vds').on('click', function(event) {
		event.preventDefault();
		$('.vds-listitem').slideUp(300);
		$('.vks-listitem').slideDown(300);

		$('.price-list-item-kvm').removeClass('price-list-active');
		$('.price-list-item-vds').addClass('price-list-active');
	});

	$('.big-tab-content').hide();
	$('nav.big-tab').on('click', function(event) {
		event.preventDefault();
		$('.big-tab-content').hide();

		$(this).find('.big-tab-content').show();
	});

	$('.advantages').hide();
	$('.rent-type-2').hide();
	$('.rent-type-3').hide();
	$('.rent-type-1-btn').on('click', function(event) {
		event.preventDefault();
		$('.rent-type-1').show();
		$('.rent-type-2').hide();
		$('.rent-type-3').hide();

		$('section.soft').show();

		$('.rent-title').removeClass('rent-title-active');
		$(this).addClass('rent-title-active');
	});
	$('.rent-type-2-btn').on('click', function(event) {
		event.preventDefault();
		$('.rent-type-1').hide();
		$('.rent-type-2').show();
		$('.rent-type-3').hide();

		$('section.soft').hide();
		$('.advantages').show();

		$('.rent-title').removeClass('rent-title-active');
		$(this).addClass('rent-title-active');
	});
	$('.rent-type-3-btn').on('click', function(event) {
		event.preventDefault();
		$('.rent-type-1').hide();
		$('.rent-type-2').hide();
		$('.rent-type-3').show();

		$('section.soft').hide();
		$('.advantages').hide();

		$('.rent-title').removeClass('rent-title-active');
		$(this).addClass('rent-title-active');
	});

});
