// Background service worker for Claude Chat Exporter

chrome.action.onClicked.addListener((tab) => {
  // Check if we're on a Claude.ai page
  if (tab.url && tab.url.includes('claude.ai')) {
    // Inject and execute the exporter script
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['exporter.js']
    }).then(() => {
      console.log('Claude chat exporter script injected successfully');
    }).catch((error) => {
      console.error('Failed to inject script:', error);
    });
  } else {
    // Show a message if not on Claude.ai
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        alert('This extension only works on claude.ai pages. Please navigate to a Claude conversation first.');
      }
    });
  }
});
