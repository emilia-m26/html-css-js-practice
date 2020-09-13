console.log('connected');

const cardButtons =document.querySelectorAll('.card button');
//use to populate modal
const modalInner = document.querySelector('.modal-inner');
//use to show modal
const modalOuter = document.querySelector('.modal-outer');


//grab something to show in modal - event
function handleCardButtonClick(event){
    const button = event.currentTarget;
    card = button.closest('.card');
    //console.log(card);
    //grab image source
    const imgSrc = card.querySelector('img').src;
    //console.log(imgSrc);
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    //console.log(desc);
    //populate modal with new info
    modalInner.innerHTML = `
        <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
        <p>${desc}</p>
    `;
    //show modal
    modalOuter.classList.add('open');
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

function closeModal() {
    modalOuter.classList.remove('open');
}


modalOuter.addEventListener('click', function(event){
    const isOutside = !event.target.closest('.modal-inner');
    //console.log(isOutside);
    if(isOutside) {
        modalOuter.classList.remove('open');
    }
})

window.addEventListener('click', function(event){
    if (event.key === 'Escape'){
        modalOuter.classList.remove('open');
    }
})