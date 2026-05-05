
// heading


// js/about.js --- about-section


// js/about.js --- progressbar ink-flow
document.addEventListener("DOMContentLoaded", function() {
  const bars = document.querySelectorAll(".progress-bar.ink-flow");

  function animateBars() {
    bars.forEach(bar => {
      const value = bar.getAttribute("aria-valuenow");
      const position = bar.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight - 50) {
        // Reset to 0 before animating ink
        bar.style.width = "0%";

        // Ink fill animation
        setTimeout(() => {
          bar.style.width = value + "%";

          // Once ink starts, stripes begin instantly
          bar.classList.add("progress-bar-striped", "progress-bar-animated");
        }, 200); 
      }
    });
  }

  // Run once on load/reload/refresh
  animateBars();

  // Run again on scroll
  window.addEventListener("scroll", animateBars);
});
