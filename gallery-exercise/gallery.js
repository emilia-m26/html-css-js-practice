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
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
