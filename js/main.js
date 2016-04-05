$(document).ready(function() {
	setTimeout(function(){
		$('.h0').removeClass('h0');
	}, 900);

	var $loading = $('.loading');
	var $body = $(document.body);
	var timeout = autoclick();

	$(document).on('click', '.button', function(e){
		e.preventDefault();
		clearTimeout(timeout);

		var $current = $('.current-slide');
		var $prev = $('.prev-slide');
		var $next = $('.next-slide');
		var $h2 = $('.current-slide+h2');
		var bg = $current.css('background-image');

		$body.css('background-image', bg);
		$loading.addClass('d-n');

		if ($(e.target).hasClass('button-left')){
				$current.addClass('next-slide').removeClass('current-slide');
				$prev.addClass('current-slide').removeClass('prev-slide');
				$next.addClass('prev-slide').removeClass('next-slide');
		} else {
				$current.addClass('prev-slide').removeClass('current-slide');
				$prev.addClass('next-slide').removeClass('prev-slide');
				$next.addClass('current-slide').removeClass('next-slide');
		}
		setTimeout(function(){
			$loading.removeClass('d-n');
			timeout = autoclick();
		}, 2000);
	});

	function autoclick(){
		return setTimeout(function(){
			$('.button-right').click();
		}, 8000);
	}


});