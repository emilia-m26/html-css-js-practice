console.log(' IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event){
    //console.log(event.currentTarget);
    //hide all tab panels
    tabPanels.forEach(function(panel){
        //console.log(panel);
        panel.hidden = true;
    })
    //mark all tabs as unselected
    tabButtons.forEach(tabButton => {
        tabButton.setAttribute('aria-selected', false);
    })
    //mark the clicked tab as selected
    //find associated tab panel and show it
}

tabButtons.forEach(button => button.addEventListener('click',handleTabClick));