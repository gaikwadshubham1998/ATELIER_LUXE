/**
 * =====================================================================
 * MAIN CLIENT CONTROLLER (main.js)
 * =====================================================================
 * Handles navigation behavior, sticky headers, mobile menus,
 * dynamic copyright year, back-to-top, business details injection,
 * and user interactions.
 */

document.addEventListener("DOMContentLoaded", () => {
  initBusinessDetails();
  initHeaderScroll();
  initMobileNavigation();
  initActiveNavLink();
  initBackToTop();
  initFeedbackForm();
  initFaqAccordion();
});

/**
 * Injects business details from config.js into matching DOM placeholders
 */
function initBusinessDetails() {
  if (typeof window.STUDIO_CONFIG === "undefined") return;
  const cfg = window.STUDIO_CONFIG;

  // Update dynamic year
  const yearEls = document.querySelectorAll(".current-year");
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => el.textContent = currentYear);

  // Update phone numbers
  const phoneEls = document.querySelectorAll(".business-phone");
  phoneEls.forEach(el => el.textContent = cfg.phone);

  const phoneLinks = document.querySelectorAll(".business-phone-link");
  phoneLinks.forEach(link => {
    link.href = `tel:${cfg.phoneRaw}`;
    // Only update pure text nodes, never overwrite buttons or icons
    if (link.childElementCount === 0 && link.textContent.trim()) {
      link.textContent = cfg.phone;
    }
  });

  // Update WhatsApp links
  const waLinks = document.querySelectorAll(".business-whatsapp-link");
  waLinks.forEach(link => {
    link.href = `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent("Hello! I would like to inquire about your interior design services.")}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  // Update Email links
  const emailEls = document.querySelectorAll(".business-email");
  emailEls.forEach(el => el.textContent = cfg.email);

  const emailLinks = document.querySelectorAll(".business-email-link");
  emailLinks.forEach(link => link.href = `mailto:${cfg.email}`);

  // Update Address
  const addressEls = document.querySelectorAll(".business-address");
  addressEls.forEach(el => {
    el.textContent = `${cfg.address.street}, ${cfg.address.locality}, ${cfg.address.city} - ${cfg.address.postalCode}`;
  });

  // Update Studio Name
  const studioNameEls = document.querySelectorAll(".studio-business-name");
  studioNameEls.forEach(el => el.textContent = cfg.businessName);

  // Update Social Links
  const igLinks = document.querySelectorAll(".social-instagram-link");
  igLinks.forEach(link => { link.href = cfg.social.instagram; link.target = "_blank"; link.rel = "noopener noreferrer"; });

  const fbLinks = document.querySelectorAll(".social-facebook-link");
  fbLinks.forEach(link => { link.href = cfg.social.facebook; link.target = "_blank"; link.rel = "noopener noreferrer"; });

  const ytLinks = document.querySelectorAll(".social-youtube-link");
  ytLinks.forEach(link => { link.href = cfg.social.youtube; link.target = "_blank"; link.rel = "noopener noreferrer"; });

  const pinLinks = document.querySelectorAll(".social-pinterest-link");
  pinLinks.forEach(link => { link.href = cfg.social.pinterest; link.target = "_blank"; link.rel = "noopener noreferrer"; });
}

/**
 * Sticky header with background transition on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("header-scrolled");
      header.classList.remove("header-transparent");
    } else {
      header.classList.remove("header-scrolled");
      if (header.dataset.transparent === "true") {
        header.classList.add("header-transparent");
      }
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/**
 * Mobile Navigation Drawer Controls
 */
function initMobileNavigation() {
  const navLinks = document.querySelectorAll(".mobile-drawer-nav a");
  const offcanvasEl = document.getElementById("mobileNavDrawer");
  
  if (!offcanvasEl) return;

  // Close mobile drawer when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    });
  });
}

/**
 * Highlights active navigation item based on current page pathname
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link-custom, .mobile-drawer-nav a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    const targetPage = href.split("#")[0].split("/").pop();
    if (targetPage === currentPath || (currentPath === "" && targetPage === "index.html")) {
      link.classList.add("active");
    }
  });
}

/**
 * Back to Top smooth scrolling
 */
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/**
 * Honest Client Feedback Form handler
 */
function initFeedbackForm() {
  const form = document.getElementById("clientFeedbackForm");
  if (!form) return;

  const resultBox = document.getElementById("feedbackResultBox");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("[name='clientName']").value.trim();
    const project = form.querySelector("[name='projectType']").value;
    const rating = form.querySelector("[name='feedbackRating']").value;
    const comments = form.querySelector("[name='clientComments']").value.trim();

    if (!name || !comments) {
      alert("Please provide your name and your feedback comments.");
      return;
    }

    // Display honest confirmation
    if (resultBox) {
      resultBox.innerHTML = `
        <div class="alert alert-success mt-3" role="alert">
          <h6 class="alert-heading mb-1"><i class="bi bi-check-circle-fill me-2"></i>Thank You, ${escapeHtml(name)}!</h6>
          <p class="mb-0 text-dark small">Your feedback regarding <strong>${escapeHtml(project)}</strong> has been captured locally. To submit it directly to our studio concierge, you can also share it via WhatsApp.</p>
        </div>
      `;
      resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      form.reset();
    }
  });
}

/**
 * Helper to escape HTML strings safely
 */
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}

/**
 * FAQ Accordion Accessibility Enhancements
 */
function initFaqAccordion() {
  const accordions = document.querySelectorAll(".accordion-editorial");
  accordions.forEach(acc => {
    acc.addEventListener("show.bs.collapse", (e) => {
      const heading = e.target.previousElementSibling;
      if (heading) heading.classList.add("active-faq");
    });
    acc.addEventListener("hide.bs.collapse", (e) => {
      const heading = e.target.previousElementSibling;
      if (heading) heading.classList.remove("active-faq");
    });
  });
}
