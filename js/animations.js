/**
 * =====================================================================
 * ADVANCED ANIMATION CONTROLLER (animations.js)
 * =====================================================================
 * GSAP + ScrollTrigger integration with robust IntersectionObserver fallback.
 * Honors prefers-reduced-motion and ensures all content remains fully visible.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    document.querySelectorAll(".reveal-fade-up, .reveal-fade-in").forEach(el => {
      el.classList.add("is-visible");
    });
    return;
  }

  // Attempt GSAP initialization if available
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    initGsapAnimations();
  } else {
    initIntersectionObserverFallback();
  }

  initCounterAnimation();
});

/**
 * GSAP & ScrollTrigger Animations
 */
function initGsapAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Hero Stagger Reveal
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.1 } });
  
  if (document.querySelector(".hero-headline")) {
    heroTl
      .from(".hero-badge-location", { opacity: 0, y: 20, duration: 0.8 }, 0.2)
      .from(".hero-headline", { opacity: 0, y: 35, duration: 1.2 }, 0.4)
      .from(".hero-description", { opacity: 0, y: 25, duration: 1 }, 0.7)
      .from(".hero-cta-group", { opacity: 0, y: 20, duration: 0.9 }, 0.9)
      .from(".hero-scroll-indicator", { opacity: 0, duration: 1 }, 1.2);

    // Subtle background scale parallax on hero
    gsap.to(".hero-background-media img", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-editorial",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }

  // Batch reveal for editorial cards and sections
  ScrollTrigger.batch(".reveal-fade-up", {
    start: "top 92%",
    onEnter: batch => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
        overwrite: true
      });
    },
    once: true
  });

  // Safety fallback: Ensure any dynamic elements are revealed
  setTimeout(() => {
    ScrollTrigger.refresh();
    document.querySelectorAll(".reveal-fade-up").forEach(el => {
      if (parseFloat(window.getComputedStyle(el).opacity) < 0.1) {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.5 });
      }
    });
  }, 800);
}

/**
 * Fallback via IntersectionObserver if GSAP is unavailable
 */
function initIntersectionObserverFallback() {
  const elements = document.querySelectorAll(".reveal-fade-up, .reveal-fade-in");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -20px 0px"
  });

  elements.forEach(el => observer.observe(el));

  // Safety reveal after timeout
  setTimeout(() => {
    elements.forEach(el => el.classList.add("is-visible"));
  }, 1000);
}

/**
 * Animated statistics numbers (e.g. 150+ Projects, 12+ Years)
 */
function initCounterAnimation() {
  const counterElements = document.querySelectorAll(".stat-counter-val");
  if (!counterElements.length) return;

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target") || el.textContent, 10);
        const duration = 1800; // ms
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeProgress * target);
          el.textContent = currentVal;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = target;
          }
        };

        requestAnimationFrame(updateCounter);
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(el => countObserver.observe(el));
}
