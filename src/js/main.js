function navigation() {
	var $navBtn = $('.js-toggle');
	var $nav = $('.js-nav');
	var $navLink = $('.js-link');
	var navBtnOpen = 'nav-toggle-open';
	var navOpen = 'nav-open';

	$navBtn.on('click', function() {
		$(this).toggleClass(navBtnOpen);
		$nav.toggleClass(navOpen);
	});

	$navLink.on('click', function() {
		$navBtn.removeClass(navBtnOpen);
		$nav.removeClass(navOpen);
	});
}

navigation();