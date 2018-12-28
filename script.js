$(document).ready(function(){
	function ajax(form){
		$.ajax({
			url: form.attr('action'),
			type: form.attr('method'),
			data: form.serialize(),
			success: function(){
				var info = form.find('.form_text');
				info.addClass('shown');
				form.reset();
				var timer = setTimeout(function(){
					info.removeClass('shown');
				}, 3000);
				clearTimeout(timer);
			}
		});
	}

	$('.client_slider').slick({
		prevArrow: '.client_prev',
		nextArrow: '.client_next',
		slidesToShow: 7,
		responsive: [
			{
			breakpoint: 1200,
			settings: {
				slidesToShow: 6
			}
			},
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 5
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
				dots: false
			}
			},
			{
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
				dots: false
			}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				dots: false
			}
			}
		]
	});

	$('.contact_btn').click( function(){
	var scrollEl = $(this).attr('href');
		if ($(scrollEl).length != 0) {
			$('html, body').animate({ scrollTop: $(scrollEl).offset().top }, 800);
		}
		return false;
	});
	

	$('#form .select').on('click', function(e){
		e.preventDefault();
		var text;
		$(this).toggleClass('opened');
		$(this).find('.dropdown').slideToggle();
		if(e.target.tagName == 'LI'){
			text = e.target.textContent;
			$(this).find('span').text(text);
			$(this).find('input').val(text);
		}
	});

	$(document).on('click', function(e){
		if(!$(e.target).hasClass('label') && !$(e.target).hasClass('label_text')){
			$('#form .select').removeClass('opened');
			$('.dropdown').slideUp();
		}
	});

	$('input, textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input, textarea').blur(function(){
		$(this).attr('placeholder', $(this).data('placeholder'));
	});
	
	grecaptcha.ready(function() {
		grecaptcha.execute('6LeSIoUUAAAAALRQJ6E1PL8MA1V0TZuLSKrH8M3O', {action: 'homepage'}).then(function(token){
			console.log(token);
		});
	});

	$('#form').on('submit', function(e){
		e.preventDefault();
		ajax($(this));
	});
});


