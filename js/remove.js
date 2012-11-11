$(function() {
 
  var url = document.URL
  var active = false; // Cookiemonster active? 

  // Sanoma
  if (url.indexOf("nu.nl") >= 0 || 
      url.indexOf("nusport.nl") >= 0 ||
      url.indexOf("nuzakelijk.nl") >= 0 ||
      url.indexOf("nubijlage.nl") >= 0 ||
      url.indexOf("nuentoen.nl") >= 0 ||
      url.indexOf("nufoto.nl") >= 0 ||
      url.indexOf("nujij.nl") >= 0 ||
      url.indexOf("nulive.nl") >= 0 ||
      url.indexOf("nutvgids.nl") >= 0 ||
      url.indexOf("nuwerk.nl") >= 0 ||
      url.indexOf("autoweek.nl") >= 0 ||
      url.indexOf("margriet.nl") >= 0 ||
      url.indexOf("viva.nl") >= 0 ||
      url.indexOf("flaironline.nl") >= 0 ||
      url.indexOf("autotrader.nl") >= 0 ||
      url.indexOf("belegger.nl") >= 0 ||
      url.indexOf("fashionchick.nl") >= 0 ||
      url.indexOf("gamer.nl") >= 0 || 
      url.indexOf("goeievraag.nl") >= 0 ||
      url.indexOf("overzicht.nl") >= 0 || 
      url.indexOf("kieskeurig.nl") >= 0 || 
      url.indexOf("schoolbank.nl") >= 0 || 
      url.indexOf("libelle.nl") >= 0 ||
      url.indexOf("startpagina.nl") >= 0 ||
      url.indexOf("tvgids.nl") >= 0 
      ) {

        $('span#sanoma-optin-close a').click(); // deprecated?
        $('div#sanoma-optin-close a').click();

        active = true;
  }

  // TMG
  if (url.indexOf("telegraaf.nl") >= 0 ||
      url.indexOf("hyves.nl") >= 0 ||
      url.indexOf("dichtbij.nl") >= 0 || 
      url.indexOf("spitsnieuws.nl") >= 0 || 
      url.indexOf("jaap.nl") >= 0 || 
      url.indexOf("autotekoop.nl") >= 0 ||
      url.indexOf("metronieuws.nl") >= 0 ||
      url.indexOf("speurders.nl") >= 0 ||
      url.indexOf("denksport.nl") >= 0 ||
      url.indexOf("gaspedaal.nl") >= 0 ||
      url.indexOf("scholieren.tv") >= 0 
      ) {
        injectJs('tmg.js');
        active = true;
  }

  // Persgroep
  if (url.indexOf("ad.nl") >= 0 ||
      url.indexOf("volkskrant.nl") >= 0) {
      injectJs("persgroep.js");
      active = true;
  }

  // NCR
  if (url.indexOf("nrc.nl") >= 0) {
    $('div.cookiemonster button').trigger('click'); // :)
    active = true;
  }
  
  // MSN
  if (url.indexOf("nl.msn.com") >= 0) {
    setTimeout(function(){ $('#cb1').hide(); }, 2000); 
    active = true;
  }

  // Tweakers
  if (url.indexOf("tweakers.net") >= 0) {
    if($('div#cookieBar')) {
      $('div#cookieBar input.fancyButton').trigger('click');
    }
    active = true;
  }

  // Marktplaats
  if (url.indexOf("marktplaats.nl") >= 0) {
    $('div#cookie-opt-in-button').trigger('click');
    active = true;
  }

  if (url.indexOf("rabobank.nl") >= 0) {
      $('div.cookieBar a.close').click();
  }
  
  chrome.extension.sendMessage({active: active}, function(response) {});

});

function injectJs(link) {
        var scr = document.createElement("script");
        scr.type= "text/javascript";
        scr.src=  chrome.extension.getURL('js/inject/'+link)+'?'+Math.random().toString(36).substring(7);
        (document.head || document.body || document.documentElement).appendChild(scr);
}