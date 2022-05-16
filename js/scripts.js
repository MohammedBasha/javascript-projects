const next = document.querySelector('.next'); // the next button
const prev = document.querySelector('.prev'); // the prev button
const slides = document.querySelectorAll('.slide'); // the slide divs

let index = 0; // initializing an index variable

// declaring a function for the display functionality
function display(index) {
    slides.forEach(slide => { // loop through the slides
        slide.style.display = 'none'; // style all the slides to display: none
    });
    slides[index].style.display = 'flex'; // style the current index slide to display: flex
}

// calling the display function and passing the current index value
// calling it here to make sure all the slides are display: none except the current one
// It's polyfill for the :not() selection in the CSS file
display(index);

// the next slide function
function nextSlide() {
    index++; // adding 1 to the index variable
    if (index > slides.length - 1) { // check if the current index is bigger than the slides.length-1
        index = 0; // set the index to the first slide's index
    }
    display(index); // calling the display function and passing the current index value
}

// the prev slide function
function prevSlide() {
    index--; // subtract 1 from the index variable
    if (index < 0) { // checking if the current index is less than 0
        index = slides.length - 1; // set the index to the last slide's index
    }
    display(index); // calling the display function and passing the current index value
}

next.addEventListener('click', nextSlide); // call the next slide function when clicking on the next button
prev.addEventListener('click', prevSlide); // call the prev slide function when clicking on the prev button