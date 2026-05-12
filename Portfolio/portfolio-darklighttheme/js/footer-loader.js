/* footer-loader.js - Dynamically loads footer into all HTML pages */

// Function to load footer component
function loadFooter() {
  // Check if footer already exists to avoid duplicates
  if (document.querySelector('.site-footer')) {
    return;
  }
  
  // Fetch the footer.html file
  fetch('footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Footer file not found. Make sure footer.html exists in the same directory.');
      }
      return response.text();
    })
    .then(footerHtml => {
      // Insert footer before closing body tag
      document.body.insertAdjacentHTML('beforeend', footerHtml);
      
      // Re-initialize scroll to top functionality
      initScrollToTop();
      
      // Apply any theme-specific adjustments
      applyFooterTheme();
    })
    .catch(error => {
      console.error('Error loading footer:', error);
      // Fallback: Create simple footer if file not found
      createFallbackFooter();
    });
}

// Initialize scroll to top button
function initScrollToTop() {
  const scrollBtn = document.getElementById('scrollTopFooter');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Apply theme-aware adjustments to footer
function applyFooterTheme() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute('data-bs-theme') || 'light';
  
  // Footer automatically adapts via CSS variables, but we ensure glow classes work
  const footer = document.querySelector('.site-footer');
  if (footer) {
    footer.setAttribute('data-theme', currentTheme);
  }
}

// Fallback footer in case footer.html is not found
function createFallbackFooter() {
  const fallbackHtml = `
    <footer class="site-footer pt-5 pb-2" style="background: #f8fafd; border-top: 1px solid #2977ec20; margin-top: 3rem;">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <p class="mb-0 text-body-secondary small">
              © 2025 Pooja Kothawade — Portfolio(). Built with ❤️
            </p>
            <div class="mt-2">
              <a href="https://www.linkedin.com/in/pooja-kothawade-techpro/" target="_blank" class="text-decoration-none me-3">LinkedIn</a>
              <a href="https://github.com/pooja123-kothawade" target="_blank" class="text-decoration-none">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', fallbackHtml);
  initScrollToTop();
}

// Listen for theme changes to update footer appearance
function watchThemeChanges() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'data-bs-theme') {
        applyFooterTheme();
      }
    });
  });
  
  observer.observe(document.documentElement, { attributes: true });
}

// Load footer when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    loadFooter();
    watchThemeChanges();
  });
} else {
  loadFooter();
  watchThemeChanges();
}