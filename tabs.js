
  const tabs = document.querySelector('.tab');
  const tabButtons = tabs.querySelectorAll('[role="tab"]');
  const window = document.querySelector('.window');
  const tabPanels = window.querySelectorAll('[role="tabpanel"]');

  function handleTabClick(event) {
  console.log(event);
}

   tabButtons.forEach(tabButtons => {
    button.addEventListener('click', handleTabClick);
  });
  event.currentTarget.setAttribute('aria-selected', true);
  tabButtons.forEach(tab => {
    // tab.ariaSelected = false;
    tab.setAttribute('aria-selected', false);
  });
  event.currentTarget.setAttribute('aria-selected', true);
   //finding associate tab panel
  const { id } = event.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  console.log(tabPanel);
  tabPanel.hidden = false;

