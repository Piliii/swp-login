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