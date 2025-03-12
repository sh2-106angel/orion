
  const tabButtons = document.querySelectorAll('button[role="tab"]');

  console.log()

  function handleTabClick(event) {
  console.log(event);
   //mark clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  const { id } = event.currentTarget;
  const tabPanel = document.querySelector('div[aria-labelledby="${id}"]');
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


