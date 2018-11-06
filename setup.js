chrome.runtime.onMessage.addListener(function(msg){
  document.getElementById('columnnode').value = msg.id;
});