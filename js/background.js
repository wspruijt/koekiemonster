
var cookiemonster_tabs = [];

chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab)
{
     chrome.tabs.getSelected(null,function(tab){
        changeBarIcon(tab);
    });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab)
{
     chrome.tabs.getSelected(null,function(tab){
        changeBarIcon(tab);
    });
});

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
      cookiemonster_tabs[sender.tab.id] = request.active;
      changeBarIcon(sender.tab);
});

function changeBarIcon(tab) {
  if( typeof(cookiemonster_tabs[tab.id]) == "undefined" || cookiemonster_tabs[tab.id] == false) {
    chrome.browserAction.setIcon({path: 'images/icon19.png'});
  } else {
    chrome.browserAction.setIcon({path: 'images/icon19_eat.png'});
  }
}