console.log('connected');

//make prompt function
function ask(options) {
    return new Promise (function(resolve) {
//need to create a popup with fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML('afterbegin', `
     <fieldset>
     <label>${options.title}</label>
     </fieldset>
    `);
    //console.log(popup);

//check if they want cancel button
    if(options.cancel) {
        const skipButton = document.createElement('button');
        skipButton.type = 'button'; //if not don't give type, form will assume it is submit
        skipButton.textContent = 'Cancel'; 
        //listen for click on that cancel button
    }
//listen for submit event on inputs

//when submitted, resolve data that was in inpput field

//insert popup into DOM
document.body.appendChild(popup);
popup.classList.add('open');
    });
}