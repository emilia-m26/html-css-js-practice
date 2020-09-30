function Slider(slider) {
    //checking if passed in an actual html element
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');    
    }

    //select elements needed for slider
    this.slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');



//when slider created, run functions below
startSlider();
applyClasses();

//event listeners
this.prevButton.addEventListener('click', () => move('back'));
this.nextButton.addEventListener('click', move);
 

}


Slider.prototype.startSlider = function(){
    this.current = slider.querySelector('.current') || this.slides.firstElementChild;
    this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;

    console.log(this.current, this.prev, this.next);
}

Slider.prototype.applyClasses = function(){
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
}

Slider.prototype.move = function(direction){
//strip all classes off current slides
    const classesToRemove = ['prev', 'current', 'next'];

    this.prev.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);

    if(direction === 'back') {
        /* make array of new values,
        destructure them over and into prev, current and next variables*/
        [this.prev, this.current, this.next] = [
            /*get prev slide, if none then get last slide from entire slider to wrap */
            this.prev.previousElementSibling || this.slides.lastElementChild, this.prev, this.current];

    } else {
        [this.prev, this.current, this.next] = [this.current, this.next, this.next.nextElementSibling || this.slides.firstElementChild]; //get next slide, if none then first lside from entire slider to wrap
    }
    applyClasses();
}

const mySlider = new Slider(document.querySelector('.slider')
);

const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);