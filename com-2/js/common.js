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

});
