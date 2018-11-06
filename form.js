(function() {

  'use strict';

  let frameChecker;

  const clickListener = (evt) => {
    const nodeName = evt.target.nodeName;
    if (nodeName === 'INPUT' || nodeName === 'TEXTAREA' || nodeName === 'SELECT') {
      const nodeId = evt.target.closest('td').getAttribute('nodeid');
      chrome.storage.sync.get('display', data => {
        if (data.display) {
          if (data.display === 'alert') {
            alert(`Node id:\n\n\n ${nodeId}`);
          } else if (data.display === 'raw_data') {
            chrome.runtime.sendMessage({ id : nodeId }, () => {});
          }
        }
      });
    }
  };

  const addClickListener = () => {
    if (document.getElementsByTagName('frame').midfr)
      {
      document.getElementsByTagName('frame').midfr.contentWindow.addEventListener('click', clickListener);
      clearInterval(frameChecker);
      }
  };

  frameChecker = setInterval(() => {
    addClickListener();
  }, 1000);

  chrome.runtime.onMessage.addListener(function(msg){
    debugger;
    const inputs = document.getElementsByTagName('frame').midfr.contentWindow.document.querySelectorAll('input[type="text"], textarea');
    inputs.forEach(input => {
      const nodeId = input.closest('td').getAttribute('nodeid');
      if (nodeId) {
        input.value = nodeId;
      }
    });
  });
})();
  