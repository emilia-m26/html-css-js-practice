console.log('it works');

/*create a closure so separate galleries will not 
intefere with each other but reuse same code */
function Gallery(gallery) {
    console.log(gallery);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
