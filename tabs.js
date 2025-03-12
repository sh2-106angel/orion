
  const tabButtons = document.querySelectorAll('[button role="tab"]');
  const tabPanels = document.querySelectorAll('[div role="tabpanel"]');
console.log()
  function handleTabClick(event) {
  console.log(event);
}

   tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick);
  });
console.log()
debugger;
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

