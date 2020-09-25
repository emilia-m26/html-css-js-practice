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

}
//refactor
// function handleImageClick(event){
//     showImage(event.currentTarget);
// }

images.forEach(image => image.addEventListener('click', event => showImage(event.currentTarget))
    );

}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
