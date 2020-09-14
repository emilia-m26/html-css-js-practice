console.log('Connected');
// function scrollToAccept (){
//     const terms = document.querySelector('.terms-and-conditions');
// if (!terms) {
//     return; //quit this, there isn't that item on the page
// }

// terms.addEventListener('scroll', function(event){
//     console.log(event);
//     });
// }

// scrollToAccept();

const terms = document.querySelector('.terms-and-conditions');
const acceptButton =document.querySelector('.accept');

//observer takes callback
const observer = new IntersectionObserver(observerCallback, { 
    root: terms, 
    threshold: 0.5,
});

function observerCallback(payload){
    console.log(payload[0].intersectionRatio);
}

observer.observe(terms.lastElementChild);

// terms.addEventListener('scroll', function(event){
//     console.log(event.currentTarget.scrollTop);
//     console.log(event.currentTarget.scrollHeight);
// });

/*use intersection observer to see if something 
is viewable on the page*/

