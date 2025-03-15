// Get all the tab buttons (the clickable parts at the top)
const tabButtons = document.querySelectorAll('button[role="tab"]');

// Get all the tab panels (the content sections that show/hide)
const tabPanels = document.querySelectorAll('.window');

// Hide all tab panels initially
// This loops through each panel and sets it to hidden
tabPanels.forEach(function(panel) {
  panel.hidden = true;
});
debugger;
console.log()
function handleTabClick(event) {
  // Step 1: Hide all tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  
  // Step 2: Mark all tab buttons as not selected
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });
  
  // Step 3: Mark the clicked tab button as selected
  event.currentTarget.setAttribute('aria-selected', true);
  
  // Step 4: Find which panel to show based on the tab's id
  const tabId = event.currentTarget.id;
  
  // Step 5: Find the panel with aria-labelledby matching the tab id
  const tabPanel = document.querySelector(`[aria-labelledby="${tabId}"]`);
  
  // Step 6: Show the matching panel
  tabPanel.hidden = false;
}

tabButtons.forEach(button => {
  button.addEventListener('click', handleTabClick);
});

if (tabButtons.length > 0) {
  tabButtons[0].click();
}



