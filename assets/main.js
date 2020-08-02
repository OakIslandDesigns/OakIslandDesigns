$(document).ready(function(){
  //Adds smooth scroll to internal links.
	$('a[href*="#"]:not([href="#"],.no-scroll)').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      console.log(target);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      console.log(target.offset().top);
			if (target.length) {
				$('.wrapper').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	$('.home__work-box--imac').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: true,
		fixedContentPos: true,
		verticalFit: false,
		mainClass: "work-modal work-modal--mockup"
	});

	$('.home__work-box--logo').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: true,
		fixedContentPos: true,
		verticalFit: false,
		mainClass: "work-modal work-modal--logo"
	});

});