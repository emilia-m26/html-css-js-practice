console.log(' IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event){
    //console.log(event.currentTarget);
    //hide all tab panels
    //mark all tabs as unselected
    //mark the clicked tab as selected
    //find associated tab panel and show it
}

tabButtons.forEach(button => button.addEventListener('click',handleTabClick));