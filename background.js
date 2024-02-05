// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
    // Get the current tab's URL
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var currentTab = tabs[0];
      var url = currentTab.url;
  
      // Display the URL in an alert (you can modify this to your preferred way of displaying)
      alert("Current URL: " + url);
    });
  });
  