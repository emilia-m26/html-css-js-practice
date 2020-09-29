console.log('connected');

/*create a closure so separate galleries will not 
intefere with each other but reuse same code */
function Gallery(gallery) {
    //console.log(gallery);
    if (!gallery) {
        throw new Error('no gallery found');
    }
        this.gallery = gallery;
//select elements we need
    this.images = Array.from(gallery.querySelectorAll('img'));
    //console.log(images);
    this.modal = document.querySelector('.modal');
    this.prevButton = this.modal.querySelector('.prev');
    this.nextButton = this.modal.querySelector('.next');

//bind our methods to the instance when we need them
//explicity supply the this we want it equal to
this.showNextImage = this.showNextImage.bind(this);
this.showPrevImage = this.showPrevImage.bind(this);
this.handleKeyUp= this.handleKeyUp.bind(this);
this.handleClickOutside = this.handleClickOutside.bind(this);

    
//event listeners area
this.images.forEach(image => image.addEventListener('click', event => this.showImage(event.currentTarget))
    );

this.images.forEach(image =>{
    //loop each image, attach listener for each
    image.addEventListener('keyup', event => {
        //check enter if keyup and if was, show image
        if (event.key === 'Enter') {
            this.showImage(event.currentImage);
        }
    })
});


this.modal.addEventListener('click', this.handleClickOutside);

}

//function to open modal to user
Gallery.prototype.openModal = function() {
    console.info('Opening Modal...');
    //first check if modal is already open
    if(this.modal.matches('.open')) {
        console.info('Modal already open...');
        return; //stop function from running
    }
    this.modal.classList.add('open');

    //event listeners to be bound when open modal
    window.addEventListener('keyup', this.handleKeyUp);
    this.nextButton.addEventListener('click', this.showNextImage);
    this.prevButton.addEventListener('click', this.showPrevImage);
}

Gallery.prototype.closeModal = function() {
    this.modal.classList.remove('open');
    ///removing when close modal
    window.removeEventListener('keyup', this.handleKeyUp);
    this.nextButton.removeEventListener('click', this.showNextImage);
    this.prevButton.removeEventListener('click', this.showPrevImage);

}

Gallery.prototype.handleClickOutside = function(event) {
    if (event.target === event.currentTarget) {
        this.closeModal();
    }
}

Gallery.prototype.handleKeyUp = function(event){
    //using return stops functionf rom running if previous was matched
    if (event.key === 'Escape') return this.closeModal();
    if (event.key === 'ArrowRight') return this.showNextImage();
    if (event.key === 'ArrowLeft') return this.showPrevImage();
}

Gallery.prototype.showNextImage = function() {
    this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
}

Gallery.prototype.showPrevImage = function() {
    this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
}


//when image clicked, show modal and image clicked on
Gallery.prototype.showImage = function(element){
    if(!element) {
        console.info('no image to show');
        return;
    }
    //update modal with this info
    console.log(element);
    this.modal.querySelector('img').src = element.src;
    this.modal.querySelector('h2').textContent = element.title;
    this.modal.querySelector('figure p').textContent = element.dataset.description;
    //to track current image
    this.currentImage = element;
    this.openModal();
}
//refactor
// function handleImageClick(event){
//     showImage(event.currentTarget);
// }





const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);