console.log(' IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(){
    
}

tabButtons.forEach(button => button.addEventListener('click',handleTabClick));