(function() {
  "use strict";

  const radioButtons = document.querySelectorAll("input[type='radio']");

  radioButtons.forEach(radio => {
    radio.addEventListener("change", evt =>  {
      const button = evt.target;
      chrome.storage.sync.set({ display: button.id });
    });
  });
  chrome.storage.sync.get('display', data => {
    if (data.display) {
      const savedDisplaySelectionRadio = document.getElementById(data.display);
      if (savedDisplaySelectionRadio) {
        savedDisplaySelectionRadio.checked = true;
      }
    }
  });
})();