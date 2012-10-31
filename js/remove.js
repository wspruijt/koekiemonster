$(function() {
 
  var url = document.URL

  // Nu.nl
  if (url.indexOf("nu.nl") >= 0 || 
      url.indexOf("nusport.nl") >= 0 ||
      url.indexOf("nuzakelijk.nl") >= 0 ||
      url.indexOf("nubijlage.nl") >= 0 ||
      url.indexOf("nuentoen.nl") >= 0 ||
      url.indexOf("nufoto.nl") >= 0 ||
      url.indexOf("nujij.nl") >= 0 ||
      url.indexOf("nulive.nl") >= 0 ||
      url.indexOf("nutvgids.nl") >= 0 ||
      url.indexOf("nuwerk.nl") >= 0
      ) {

        $('span#sanoma-optin-close a').click();
  }

  // Hyves
   if (url.indexOf("hyves.nl") >= 0) {
    injectJs("hyves.js");
  }

  // TNG
  if (url.indexOf("telegraaf.nl") >= 0 ||
      url.indexOf("dichtbij.nl") >= 0 || 
      url.indexOf("spitsnieuws.nl") >= 0 || 
      url.indexOf("jaap.nl") >= 0 || 
      url.indexOf("autotekoop.nl") >= 0 ||
      url.indexOf("metronieuws.nl") >= 0
      ) {
        injectJs('tmg.js');
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