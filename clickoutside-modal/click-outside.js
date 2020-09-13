console.log('connected');

const cardButtons =document.querySelectorAll('.card button');

//grab something to show in modal - event
function handleCardButtonClick(event){
    const button = event.currentTarget;
    card = button.closest('.card');
    console.log(card);
    //grab image source
    const imgSrc = card.querySelector('img').src;
    console.log(imgSrc);
    const desc = card.dataset.description;
    console.log(desc);
};

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

