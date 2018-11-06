chrome.runtime.onMessage.addListener(msg => {
  chrome.tabs.query({ "url":["*://*.procentive.com/set/rawdatasetup.jsp*"]}, tabs => {
    tabs.forEach(tab => {
      chrome.tabs.sendMessage(tab.id, { id: msg.id }, () => {});
    });
  });
});