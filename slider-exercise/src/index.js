function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');    
    }
    //create variables for working with slider
    let current;
    let prev;
    let next;
}

const mySlider = Slider(document.querySelector('.slider')
);

const dogSlider = Slider(document.querySelector('.dog-slider'));