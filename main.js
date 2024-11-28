const slideContainer = document.querySelector('.container')
const slideLeft = document.querySelector('.left-slider')
const slideRight = document.querySelector('.right-slider')
const buttonUp = document.getElementById('upbutton')
const buttonDown = document.getElementById('downbutton')
const slideLength = slideRight.querySelectorAll('div').length

let activeSlideIndex=0


// function updateSliderPosition() {
    
//     slideLeft.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
//     slideRight.style.transform = `translateY(${activeSlideIndex * 100}vh)`;
// }


// updateSliderPosition();


// buttonUp.addEventListener('click', () => {
//     if (activeSlideIndex > 0) {
//         activeSlideIndex--;
//         updateSliderPosition();
//     }
// });


// buttonDown.addEventListener('click', () => {
//     if (activeSlideIndex < slideLength - 1) {
//         activeSlideIndex++;
//         updateSliderPosition();
//     }
// });
slideLeft.style.top =`${(slideLength - 1)* 100}vh`
buttonUp.addEventListener('click', ()=> changeSlide('up'))
buttonDown.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) =>{
    const slideHeight = slideContainer.clientHeight
    if(direction ==='up'){
        activeSlideIndex++
        if(activeSlideIndex > slideLength - 1){
            activeSlideIndex = 0
        }
    }else if(direction ==='down'){
        activeSlideIndex--  
        if(activeSlideIndex < 0){
            activeSlideIndex = slideLength-1
        }

    }

    slideRight.style.transform = `translateY(-${activeSlideIndex *slideHeight}px)`
    slideLeft.style.transform = `translateY(${(activeSlideIndex - slideLength+1) *slideHeight}px)`
}