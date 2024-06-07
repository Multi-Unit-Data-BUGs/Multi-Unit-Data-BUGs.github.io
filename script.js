var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    console.log("Handler called with n =", n);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  console.log("Displaying slide #" + slideIndex);
}

function toggleDropdown(dropdownClass) {
  document.querySelector(`.${dropdownClass}`).classList.toggle("select-hide");
}

function selectItem(url, dropdownClass) {
  window.location.href = url;
  toggleDropdown(dropdownClass);
}
// Optional: Automatically move to the next slide every 10 seconds
setInterval(function() {
  plusSlides(1);
}, 10000);
