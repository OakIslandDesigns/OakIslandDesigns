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

/* Header styling on scroll
======================================= */
window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');

  if (window.pageYOffset > 0) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});