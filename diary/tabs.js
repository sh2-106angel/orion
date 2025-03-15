const tabButtons = document.querySelectorAll('button[role="tab"]');
const tabPanels = document.querySelectorAll('.window');

tabPanels.forEach(function(panel) {
  panel.hidden = true;
});
function handleTabClick(event) {
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });
  
  event.currentTarget.setAttribute('aria-selected', true);
  const tabId = event.currentTarget.id;
  const tabPanel = document.querySelector(`[aria-labelledby="${tabId}"]`);
  tabPanel.hidden = false;
}

tabButtons.forEach(button => {
  button.addEventListener('click', handleTabClick);
});

// This code was clicking the first tab
// if (tabButtons.length > 0) {
//   tabButtons[0].click();
// }



