//Transition images on the webpage

const images = document.querySelectorAll('.transitionImage'); // Select all images
let currentIndex = 0;

function transitionImages() {
  images[currentIndex].classList.remove('visible');
  currentIndex = (currentIndex + 1) % images.length; 
  images[currentIndex].classList.add('visible');
}

setInterval(transitionImages, 5000);
