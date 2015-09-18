// forked from https://github.com/panicsteve/cloud-to-butt

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'find_love.js'
  });
});
