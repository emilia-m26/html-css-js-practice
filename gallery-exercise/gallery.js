console.log('it works');

/*create a closure so separate galleries will not 
intefere with each other but reuse same code */
function Gallery(gallery) {
    //console.log(gallery);
    if (!gallery) {
        throw new Error('no gallery found');
    }
//select elements we need
    const images = Array.from(gallery.querySelectorAll('img'));
    //console.log(images);
    const modal = document.querySelector('.modal');
    const prevButton = modal.querySelector('.prev');
    const nextButton = modal.querySelector('.next');
    //keep track of what the currently open image is
    let currentImage;


//function to open modal to user
function openModal(){
    console.info('Opening Modal...');
    //first check if modal is already open
    if(modal.matches('.open')) {
        console.info('Modal already open...');
        return; //stop function from running
    }
    modal.classList.add('open');

    //event listeners to be bound when open modal
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
}

function closeModal() {
    modal.classList.remove('open');
    ///removing when close modal
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);

}

function handleClickOutside(event) {
    if (event.target === event.currentTarget) {
        closeModal();
    }
}

function handleKeyUp(event){
    //using return stops functionf rom running if previous was matched
    if (event.key === 'Escape') return closeModal();
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
}

function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
}

function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
}


//when image clicked, show modal and image clicked on
function showImage(element){
    if(!element) {
        console.info('no image to show');
        return;
    }
    //update modal with this info
    console.log(element);
    modal.querySelector('img').src = element.src;
    modal.querySelector('h2').textContent = element.title;
    modal.querySelector('figure p').textContent = element.dataset.description;
    //to track current image
    currentImage = element;
    openModal();
}
//refactor
// function handleImageClick(event){
//     showImage(event.currentTarget);
// }


//event listeners area
images.forEach(image => image.addEventListener('click', event => showImage(event.currentTarget))
    );

images.forEach(image =>{
    //loop each image, attach listener for each
    image.addEventListener('keyup', event => {
        //check enter if keyuo and if was, show image
        if (event.key === 'Enter') {
            showImage(event.currentImage);
        }
    })
});
modal.addEventListener('click', handleClickOutside);

}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));