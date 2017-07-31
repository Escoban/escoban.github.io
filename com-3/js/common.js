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

});
