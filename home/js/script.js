// PopUp

document.addEventListener("DOMContentLoaded", function() {
    var popupOverlay = document.getElementById("popup-overlay");
    var closeButton = document.getElementById("close-button");
    
    // Check if the popup should be shown (using localStorage)
    if (!localStorage.getItem("popupShown")) {
      popupOverlay.style.display = "flex";
    }
    
    // Close the popup
    closeButton.addEventListener("click", function() {
      popupOverlay.style.display = "none";
      
      // Save that the popup has been shown (using localStorage)
      localStorage.setItem("popupShown", true);
    });
  });


// Smooth Scroll

//   var scrollDown = document.querySelector('.scroll-down');
// scrollDown.addEventListener('click', function() {
//   scrollSmoothly('next');
// });

// var scrollUp = document.querySelector('.scroll-up');
// scrollUp.addEventListener('click', function() {
//   scrollSmoothly('prev');
// });

// function scrollSmoothly(direction) {
//   var sections = document.querySelectorAll('.section');
//   var currentSection = document.querySelector('.section.active');
//   var currentIndex = Array.from(sections).indexOf(currentSection);

//   var nextIndex = currentIndex + 1;
//   var prevIndex = currentIndex - 1;

//   if (direction === 'next' && nextIndex < sections.length) {
//     sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
//   } else if (direction === 'prev' && prevIndex >= 0) {
//     sections[prevIndex].scrollIntoView({ behavior: 'smooth' });
//   }
// }

// window.addEventListener('scroll', function() {
//   var scrollIndicator = document.querySelector('.scroll-indicator');
//   scrollIndicator.classList.toggle('show', window.scrollY > 200);
// });