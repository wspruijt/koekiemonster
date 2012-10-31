$(function() {
 
  var url = document.URL

  // Nu.nl
  if (url.indexOf("nu.nl") >= 0) {
    $('span#sanoma-optin-close a').trigger('click');
  }

  // Hyves
   if (url.indexOf("hyves.nl") >= 0) {
    injectJs("hyves.js");
  }

  // Telegraaf
  if (url.indexOf("telegraaf.nl") >= 0) {
    setTimeout(function() { $('span#cookiepolicy-accept-cookies').trigger('click'); }, 500)
  }

  // Persgroep
  if (url.indexOf("ad.nl") >= 0 ||
      url.indexOf("volkskrant.nl") >= 0) {
      injectJs("persgroep.js");
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

function injectJs(link) {
        var scr = document.createElement("script");
        scr.type= "text/javascript";
        scr.src=  chrome.extension.getURL('js/inject/'+link)+'?'+Math.random().toString(36).substring(7);
        (document.head || document.body || document.documentElement).appendChild(scr);
}