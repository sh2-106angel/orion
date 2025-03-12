
  const tabButtons = document.querySelectorAll('button[role="tab"]');
  const tabPanels = document.querySelectorAll('div[role="tabpanel"]');
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


