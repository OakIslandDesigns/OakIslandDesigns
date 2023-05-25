var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};

//If the contact form sent successfully, show the "Thank you" message.
if(getUrlParameter('form') == "success"){
	var contactMessage = $('.contact-message');
	contactMessage.fadeIn(300, "linear");
	contactMessage.delay(5000).fadeOut(300, "linear");
}

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
				}, 500);
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

	$('.home__work-box--phone').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: true,
		fixedContentPos: true,
		verticalFit: false,
		mainClass: "work-modal work-modal--mobile"
	});

});