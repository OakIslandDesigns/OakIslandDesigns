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

/* Load fade-in
======================================= */
window.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(function() {
      document.body.style.opacity = "1";
  }, 500);
});

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

/* Mobile button
======================================= */
var button = document.querySelector('.mobile-button');

button.addEventListener('click', function() {
    var element = document.querySelector('body');
    element.classList.toggle('mm-active');
});

/* Sets the CSS variable "doc-height" to
the device height. Accounts for search
bars and other browser stuff.
======================================= */
const documentHeight = () => {
  const doc = document.documentElement;
  // console.log('doc', doc);
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
}
window.addEventListener('resize', documentHeight);
documentHeight();