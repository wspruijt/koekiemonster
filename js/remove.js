$(function() {
 
  var url = document.URL

  // Nu.nl
  if (url.indexOf("nu.nl") >= 0) {
     $('span#sanoma-optin-close a').trigger('click');
  }

  // MSN
  if (url.indexOf("nl.msn.com") >= 0) {
    setTimeout(function(){ $('#cb1').hide(); }, 2000); 
  }


});


