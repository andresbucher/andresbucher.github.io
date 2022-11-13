function plusSlides(n, slideshow) {
    showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
    showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
    var i;
    var slides = slideshow.getElementsByClassName("mineralbox");
    if (n > slides.length) {slideshow.currentSlideIndex = 1}    
    if (n < 1) {slideshow.currentSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideshow.currentSlideIndex-1].style.display = "block";  
}
