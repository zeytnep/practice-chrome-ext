// background.js
chrome.browserAction.onClicked.addListener(function(tab) {

    // Get the current tab's URL using Promise-based syntax
    //Query the active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true })
      .then(function(tabs) {
      //The promise is resolved successfully, and 'tabs' contains information about matching tabs
      //Extract information about the first tab (usually the only one)
      var currentTab = tabs[0];

      // Extract the URL of the current tab
      var url = currentTab.url;

      //Display the URL in an alert
      alert("Current URL of the website: " +url);


    })
    .catch(function(error) {
      //The promise is rejected, and 'error' contains info about the error

      //Log an error message to the console
      console.error("Error querying tabs:", error);
    });


  });
  