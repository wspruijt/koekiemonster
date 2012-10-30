$(function() {
 
  var url = document.URL

  // Nu.nl
  if (url.indexOf("nu.nl") >= 0) {
    $('span#sanoma-optin-close a').trigger('click');
  }

  // Telegraaf
  if (url.indexOf("telegraaf.nl") >= 0) {
    setTimeout(function() { $('span#cookiepolicy-accept-cookies').trigger('click'); }, 500)
  }

  if (url.indexOf("ad.nl") >= 0) {
    $('#cookiestatement').hide();
  }

  // NCR
  if (url.indexOf("nrc.nl") >= 0) {
    $('div.cookiemonster button').trigger('click'); // :)
  }
  
  // MSN
  if (url.indexOf("nl.msn.com") >= 0) {
    setTimeout(function(){ $('#cb1').hide(); }, 2000); 
  }

  // Tweakers
  if (url.indexOf("tweakers.net") >= 0) {
    if($('div#cookieBar')) {
      $('div#cookieBar input.fancyButton').trigger('click');
    }
  }

  // Marktplaats
  if (url.indexOf("marktplaats.nl") >= 0) {
    $('div#cookie-opt-in-button').trigger('click');
  }

});




