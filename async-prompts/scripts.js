console.log('connected');
function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
    popup.classList.remove('open');
    await wait(1000);
    //remove entirely
    popup.remove();
    popup = null;
}

//make prompt function
function ask(options) {
    return new Promise (async function(resolve) {
//need to create a popup with fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML('afterbegin', 
    `<fieldset>
     <label>${options.title}</label>
     <input type="text" name="input"/>
     <button type="submit">Submit</button>
     </fieldset>
    `);
    //console.log(popup);

//check if they want cancel button
    if(options.cancel) {
        const skipButton = document.createElement('button');
        skipButton.type = 'button'; //if not don't give type, form will assume it is submit
        skipButton.textContent = 'Cancel';
        console.log(popup.firstElementChild);
        popup.firstElementChild.appendChild(skipButton);
        //listen for click on that cancel button
        skipButton.addEventListener('click',function() {
            resolve(null);
            destroyPopup(popup);
        }, { once: true }
        );
        }
//listen for submit event on inputs
        popup.addEventListener('submit', function(event){
            event.preventDefault();
            //console.log('Submitted');
            resolve(event.target.input.value);
            //remove from DOM entirely
            destroyPopup(popup);
        },
        { once: true }
    );


//when submitted, resolve data that was in input field

//insert popup into DOM
document.body.appendChild(popup);
//add small timeout before adding open class (so it fades in)
await wait(50)
    popup.classList.add('open');
 });
}


async function askQuestion(event) {
    //console.log(event);
    const button = event.currentTarget;
    //console.log(button); 
    const shouldCancel = 'cancel' in button.dataset; //can use button.hasAttribute('data-cancel')
    const answer = await ask({ title: button.dataset.question, cancel: shouldCancel });
    console.log(answer);
}

//select all buttons that have a question
const buttons = document.querySelectorAll('[data-question]');

buttons.forEach(button => button.addEventListener('click', askQuestion));


const questions = [
    { title: "O wai kou inoa?" },
    { title: "No hea 'oe?", cancel: true }
];

// Promise.all(questions.map(ask)).then(data => {
//     console.log(data);
// })

//for of allows you to pause a loop by awaiting inside
async function askMany() {
    for(const question of questions) {
        const answer = await ask(question);
        console.log(answer);
    }
}

askMany();
