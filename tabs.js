<script>
  const tabs = document.querySelector('.tabs');
  const tabButtons = tabs.querySelectorAll('[role="tabs"]');
  const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick)
  });
  function handleTabClick(event) {
  console.log(event);
 }
  function handleTabClick(event) {
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

</script>
