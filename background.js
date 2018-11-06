chrome.runtime.onMessage.addListener(function(msg){
  chrome.tabs.query({ "url":["*://*.procentive.com/set/rawdatasetup.jsp*"]},
   (tabs) => { 
    if( tabs.length ) {
      tabs.forEach((tab) => {
        chrome.tabs.sendMessage(tab.id, { id:  msg.id}, () => {});
      });
    }
  });
});