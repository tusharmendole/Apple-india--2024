// Get the slides container
const slider = document.querySelector('.slides');
let counter = 1;

function slide() {
  // Move to the next image
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(${-100 * counter}%)`;
  counter++;

  // Reset to the first image after the last one
  if (counter === document.querySelectorAll('.slides img').length) {
    counter = 1;
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
    }, 500);
  }
}

// Automatically slide every 3 seconds (adjust as needed)
setInterval(slide, 3000);
