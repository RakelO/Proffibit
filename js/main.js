$(document).ready(function() {

	var $first = $('.first-slide');
	var $second = $('.second-slide');
	var $third = $('.third-slide');
	var timeout = autoclick();

	$(document).on('click', '.button', function(e){
		e.preventDefault();

		clearTimeout(timeout);

		var $current = $('.current-slide');
		var $prev = $('.prev-slide');
		var $next = $('.next-slide');
		var $h2 = $('.current-slide+h2');
		var $loading = $('.loading');
		$loading.addClass('d-n');
		$h2.addClass('head-out');

		var $clone = $current.clone().addClass('new');
		$current.parent().append($clone);

		if ($(e.target).hasClass('.button-left')){
			$current.addClass('next-slide').removeClass('current-slide');
			$prev.addClass('current-slide').removeClass('prev-slide');
			$next.addClass('prev-slide').removeClass('next-slide');
		} else {
			$current.addClass('prev-slide').removeClass('current-slide');
			$prev.addClass('next-slide').removeClass('prev-slide');
			$next.addClass('current-slide').removeClass('next-slide');
		}

		setTimeout(function(){
			$current.removeClass('z3');
			$clone.remove();
			$loading.removeClass('d-n');
			timeout = autoclick();
		}, 2000);


	});

	function autoclick(){
		return setTimeout(function(){
			$('.button-right').click();
		}, 8000);
	}


})