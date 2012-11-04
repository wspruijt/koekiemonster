$(function() {
  
  var extension_version = chrome.app.getDetails().version
  $('span#version').html(extension_version);

});
