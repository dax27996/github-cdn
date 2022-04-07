$(document).ready(function() {
	$('.personal-home-menu li:has(ul)').click(function(e) {
		e.preventDefault();

		if($(this).hasClass('activado')) {
			$('.activado i').removeClass('icon-minimal-up');
			$('.activado i').addClass('icon-minimal-down');
			$(this).removeClass('activado');
			$(this).children('ul').slideUp();
		} else {
			$('.personal-home-menu li ul').slideUp();
			$('.personal-home-menu li').removeClass('activado');
			$('.sidebar_accordian').removeClass('icon-minimal-up');
			$('.sidebar_accordian').addClass('icon-minimal-down');
			$(this).addClass('activado');
			$('.activado i').removeClass('icon-minimal-down');
			$('.activado i').addClass('icon-minimal-up');
			$(this).children('ul').slideDown();
		}
	});
});