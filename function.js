mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n)
{
    showSlides(slideIndex +=n);
}

function currentSlide(n)
{
    showSlides(slideIndex = n);
}

function showSlides(n)
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var preview = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if (n > slides.length)
    {slideIndex=1}
    if (n < 1)
    {slideIndex = slides.length}

    for (i=0; i<slides.length; i++)
    {slides[i].style.display = "none";}

    for (i=0; i<preview.length; i++)
    {preview[i].className = preview[i].className.replace(" active","");}

    slides[slideIndex-1].style.display = "block";
    preview[slideIndex-1].className += " active";
    captionText.innerHTML =preview[slideIndex-1].alt;

}