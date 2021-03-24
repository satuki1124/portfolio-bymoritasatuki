//top
$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});
// history
$(function () {
	var effect_pos = 300;
	var effect_move = 100;
	var effect_time = 10000;
	$(function () {
		$('#nav-toggle').on('click', function () {
			$('header').toggleClass('open');
		});
	});
	//
	$('.scroll-fade').css({
		opacity: 0,
		transform: 'translateY(' + effect_move + 'px)',
		transition: effect_time + 'ms'
	});
	$(window).on('load scroll', function () {
		var box = $('.fadeIn');
		var animated = 'animated';
		box.each(function () {
			var boxOffset = $(this).offset().top;
			var scrollPos = $(window).scrollTop();
			var wh = $(window).height();
			if (scrollPos > boxOffset - wh + 100) {
				$(this).addClass(animated);
			}
		});
		// スクロールまたはロードするたびに実行
		$(window).on('scroll load', function () {
			var scroll_top = $(this).scrollTop();
			var scroll_btm = scroll_top + $(this).height();
			effect_pos = scroll_btm - effect_pos;
			$('.scroll-fade').each(function () {
				var this_pos = $(this).offset().top;
				if (effect_pos > this_pos) {
					$(this).css({
						opacity: 1,
						transform: 'translateY(0)'
					});
				}
			});
		});
	});
	// service
	$(function () {
		var effect_btm = 300;
		var effect_move = 100;
		var effect_time = 2000;
		$('.scroll-fade-row').css({
			opacity: 0
		});
		$('.scroll-fade-row').children().each(function () {
			$(this).css({
				opacity: 0,
				transform: 'translateY(' + effect_move + 'px)',
				transition: effect_time + 'ms'
			});
		});
		$(window).on('scroll load', function () {
			var scroll_top = $(this).scrollTop();
			var scroll_btm = scroll_top + $(this).height();
			var effect_pos = scroll_btm - effect_btm;
			$('.scroll-fade-row').each(function () {
				var this_pos = $(this).offset().top;
				if (effect_pos > this_pos) {
					$(this).css({
						opacity: 1,
						transform: 'translateY(0)'
					});
					$(this).children().each(function (i) {
						$(this).delay(100 + i * 200).queue(function () {
							$(this).css({
								opacity: 1,
								transform: 'translateY(0)'
							}).dequeue();
						});
					});
				}
			});
		});
	});
	$('.gallary-2 img').eq(1).css({
		'margin-left': '-450px'
	});
	$('.gallary-2 img').eq(2).css({
		'margin-left': '-450px'
	});
	let count = 0;
	const slide_show = () => {
		$('.gallary-2 img').eq(count % 3).animate({
			'marginLeft': '450px'
		}, 1000, function () {
			$('.gallary-2 img').eq(count % 3).css({
				'margin-left': '-450px'
			});
			count++;
		});
		$('.gallary-2 img').eq((count + 1) % 3).animate({
			'marginLeft': '0px'
		}, 1000);
	}
	setInterval(slide_show, 3000);
});