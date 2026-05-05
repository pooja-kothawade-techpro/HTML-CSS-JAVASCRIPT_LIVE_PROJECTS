/* --------------------------------------------------------------------------------------------------------------------- */
/* -----dark-light-theme------------------------------------------------------------------------------------------------ */
//  dark-light-theme
 const htmlElement = document.documentElement; const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => { const currentTheme = htmlElement.getAttribute("data-bs-theme"); 
  const newTheme = currentTheme === "light" ? "dark" : "light"; htmlElement.setAttribute("data-bs-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  htmlElement.setAttribute("data-bs-theme", savedTheme);
});
/* --------------------------------------------------------------------------------------------------------------------- */
// loader-effect
  window.addEventListener("load", function() {
  setTimeout(function() {
    const loader = document.getElementById("loader-container");
    loader.classList.add("fade-out"); // fade the black overlay
    setTimeout(function() {
      loader.remove(); // remove overlay completely
      document.getElementById("homepage").style.display = "block"; // show content
    }, 1000); // wait for fade animation
  }, 3000); // loader stays visible for 3 seconds
});
/* --------------------------------------------------------------------------------------------------------------------- */
// Initialize the typing animation
									const typingAnimationElement = document.getElementById('typing-animation');
									// Create an array of typing text
									const typingTexts = [
										'Full Stack Developer',
										'Data Analyst',
                    'Full Stack Developer',
										'Data Analyst',
									];
									// Create a function to display the typing animation for a given text
function playTypingAnimation(text) {
										// Loop through each character and add it to the element
										for (let i = 0; i < text.length; i++) {
											setTimeout(() => {
												typingAnimationElement.textContent += text[i];
											}, i * 10); // Increase the delay to slow down the typing animation
										}
										// Once the animation is complete, reset the text and start over
										setTimeout(() => {
											typingAnimationElement.textContent = '';
											playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
										}, text.length * 200);
									}
									// Start the typing animation loop
									playTypingAnimation(typingTexts[0]);
/* --------------------------------------------------------------------------------------------------------------------- */


