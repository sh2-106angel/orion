
  const tabButtons = document.querySelectorAll('button[role="tab"]');
  const tabPanels = document.querySelectorAll('.window');
  console.log()
  tabPanels.forEach(function(panel) {
  panel.hidden = true;
})
  function handleTabClick(event) {
  console.log(event);
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach(tab => {
    // tab.ariaSelected = false;
    tab.setAttribute('aria-selected', false);
  });
   //mark clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  const { id } = event.currentTarget;
  const tabPanel = tabPanels.querySelector('[aria-labelledby="${id}"]');
  console.log(tabPanel);
  tabPanel.hidden = false;
}
   tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick);
  });
console.log()
   //finding associate tab panel

console.log()
debugger;
     //    <menu role="tablist">
     //      <button role="tab" id="Angel" aria-selected="true">Angel</button>
     //      <button role="tab" id="SweetTime" aria-selected="false">Sweet Time</button>
     //    </menu>
 
      
     //  <div class="window" role="tabpanel" aria-labelledby="Angel">
     //    <div class="window-body">
     //       <p>Hello! This is a work in progress...</p>
     //    </div>
     //  </div>
     // <div class="window" role="tabpanel" aria-labelledby="SweetTime" hidden>
     //   <div class="window-body"> 
     //     <p>Hello again!</p></div>
     // </div>
     // </div>


