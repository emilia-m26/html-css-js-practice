console.log('Connected');
function scrollToAccept (){
    const terms = document.querySelector('.terms-and-conditions');
if (!terms) {
    return; //quit this, there isn't that item on the page
}

terms.addEventListener('scroll', function(event){
    console.log(event);
    });
}

scrollToAccept();