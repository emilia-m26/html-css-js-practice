function Slider(slider) {
    //checking if passed in an actual html element
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');    
    }
    //create variables for working with slider - variables that begin empty
    let prev;
    let current;
    let next;

    //select elements needed for slider
    const slides = slider.querySelector('.slides');
    const prevButton = document.querySelector('.goToPrev');
    const nextButton = document.querySelector('.goToNext');

function startSlider(){
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;

    console.log(current, prev, next);
}

function applyClasses(){
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
}

function move(direction){
//strip all classes off current slides
    const classesToRemove = ['prev', 'current', 'next'];

    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if(direction === 'back') {
        /* make array of new values,
        destructure them over and into prev, current and next variables*/
        [prev, current, next] = [prev.previousElementSibling, prev, current];

    } else {
        [prev, current, next] = [current, next, next.nextElementSibling];
    }
    applyClasses();

  
}

//when slider created, run functions below
startSlider();
applyClasses();

}

const mySlider = Slider(document.querySelector('.slider')
);

const dogSlider = Slider(document.querySelector('.dog-slider'));