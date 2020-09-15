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
    threshold: 1,
});

function observerCallback(payload){
    if (payload[0].intersectionRatio === 1) {
        acceptButton.disabled = false;
    //below is for other use cases
    // } else {
    //     acceptButton.disabled =true;
        observer.unobserve(terms.lastElementChild); //will stop observing
    }
}

observer.observe(terms.lastElementChild);

// terms.addEventListener('scroll', function(event){
//     console.log(event.currentTarget.scrollTop);
//     console.log(event.currentTarget.scrollHeight);
// });

/*use intersection observer to see if something 
is viewable on the page*/

