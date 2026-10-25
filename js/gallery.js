/**
 * =====================================================================
 * GALLERY & INTERACTIVE VISUALS CONTROLLER (gallery.js)
 * =====================================================================
 * High-speed responsive portfolio rendering, interactive multi-room preview
 * cards, live search & category counts, interactive Before/After sliders,
 * architectural hotspot material inspector, and full-screen lightbox.
 */

document.addEventListener("DOMContentLoaded", () => {
  initPortfolioGrid();
  initBeforeAfterSliders();
  initHotspotShowcase();
  initLightbox();
  initProjectDetailsPage();
});

// Global state for lightbox viewer
let currentLightboxImages = [];
let currentLightboxIndex = 0;
let currentLightboxZoom = 1;

/**
 * Initializes portfolio grid, live search, and filter interactions
 */
function initPortfolioGrid() {
  const gridContainer = document.getElementById("portfolioGridContainer");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("portfolioSearchInput");
  const searchClearBtn = document.getElementById("portfolioSearchClear");

  if (!gridContainer || typeof window.STUDIO_PROJECTS === "undefined") return;

  // Render Category Counts on filter buttons
  updateFilterBadges();

  let activeCategory = "all";
  let activeQuery = "";

  const renderProjects = () => {
    let projects = [];
    if (activeQuery) {
      projects = window.ProjectRepository.search(activeQuery, activeCategory);
    } else {
      projects = window.ProjectRepository.getByCategory(activeCategory);
    }

    gridContainer.innerHTML = "";

    if (projects.length === 0) {
      gridContainer.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="p-5 bg-white border rounded shadow-sm max-w-600 mx-auto">
            <i class="bi bi-search text-gold" style="font-size: 2.5rem;"></i>
            <h4 class="font-serif mt-3 mb-2">No Matching Projects Found</h4>
            <p class="text-muted small mb-3">Try adjusting your search terms or selecting a different category.</p>
            <button class="btn btn-luxury-primary btn-luxury-sm" id="resetPortfolioSearchBtn">Reset Filters</button>
          </div>
        </div>
      `;
      const resetBtn = document.getElementById("resetPortfolioSearchBtn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          if (searchInput) searchInput.value = "";
          activeQuery = "";
          activeCategory = "all";
          filterBtns.forEach(b => b.classList.toggle("active", b.getAttribute("data-filter") === "all"));
          renderProjects();
        });
      }
      return;
    }

    projects.forEach((proj, idx) => {
      // Dynamic asymmetric grid sizing
      const isLarge = idx % 3 === 0;
      const colClass = isLarge ? "col-lg-8 col-md-12" : "col-lg-4 col-md-6";
      const cardLargeClass = isLarge ? "project-card-large" : "";

      // High-speed optimized cover image & responsive srcset
      const optimizedCover = window.getOptimizedImageUrl ? window.getOptimizedImageUrl(proj.coverImage, 800, 75) : proj.coverImage;
      const responsiveSrcset = window.getResponsiveSrcset ? window.getResponsiveSrcset(proj.coverImage) : "";

      // Build room preview dots (up to 4 rooms)
      const previewRooms = proj.gallery && proj.gallery.length > 1 ? proj.gallery.slice(0, 4) : [];
      let roomDotsHtml = "";
      if (previewRooms.length > 1) {
        roomDotsHtml = `
          <div class="card-room-preview-bar" aria-label="Quick room switch">
            ${previewRooms.map((r, rIdx) => `
              <button class="card-room-dot ${rIdx === 0 ? 'active' : ''}" 
                      data-img-url="${window.getOptimizedImageUrl ? window.getOptimizedImageUrl(r.url, 800, 75) : r.url}" 
                      data-room-name="${escapeHtml(r.room)}"
                      title="Preview: ${escapeHtml(r.room)}">
              </button>
            `).join("")}
          </div>
        `;
      }

      // Feature badge (e.g. Before/After or Hotspot indicator)
      let featurePill = "";
      if (proj.beforeAfter) {
        featurePill = `<span class="project-feature-pill"><i class="bi bi-arrow-left-right me-1"></i>Before & After</span>`;
      } else if (proj.hotspots && proj.hotspots.length > 0) {
        featurePill = `<span class="project-feature-pill"><i class="bi bi-pin-map me-1"></i>Interactive Details</span>`;
      }

      const col = document.createElement("div");
      col.className = `${colClass} reveal-fade-up`;
      col.innerHTML = `
        <div class="project-card-asymmetric ${cardLargeClass}" data-project-id="${proj.id}">
          <div class="project-media-wrapper img-skeleton">
            <img src="${optimizedCover}" 
                 srcset="${responsiveSrcset}" 
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 alt="${escapeHtml(proj.title)} - ${escapeHtml(proj.subtitle)}" 
                 loading="lazy" 
                 decoding="async"
                 onload="this.parentElement.classList.add('media-loaded')">
            ${featurePill}
            ${roomDotsHtml}
          </div>
          <div class="project-overlay-content">
            <span class="project-category-tag">${escapeHtml(proj.categoryLabel)}</span>
            <h3 class="project-overlay-title">${escapeHtml(proj.title)}</h3>
            <div class="project-overlay-meta">
              <span><i class="bi bi-geo-alt me-1 text-gold"></i>${escapeHtml(proj.location)}</span>
              <span><i class="bi bi-arrows-fullscreen me-1 text-gold"></i>${escapeHtml(proj.area)}</span>
              <span class="d-none d-sm-inline"><i class="bi bi-clock me-1 text-gold"></i>${escapeHtml(proj.timeline)}</span>
            </div>
            <div class="project-card-actions">
              <a href="project-details.html?id=${encodeURIComponent(proj.id)}" class="btn btn-luxury-white btn-luxury-sm">
                Case Study <i class="bi bi-arrow-right ms-1"></i>
              </a>
              <button class="btn btn-luxury-outline-white btn-luxury-sm btn-quick-lightbox" data-project-id="${proj.id}" title="Quick Gallery">
                <i class="bi bi-zoom-in"></i> Gallery (${proj.gallery ? proj.gallery.length : proj.images.length})
              </button>
              <button class="btn btn-luxury-outline-white btn-luxury-sm btn-prefill-project" data-project-title="${escapeHtml(proj.title)}" title="Discuss Similar Concept">
                <i class="bi bi-chat-text"></i> Discuss
              </button>
            </div>
          </div>
        </div>
      `;

      gridContainer.appendChild(col);
    });

    // Attach Interactive Room Preview Dots
    gridContainer.querySelectorAll(".project-card-asymmetric").forEach(card => {
      const mainImg = card.querySelector(".project-media-wrapper img");
      const dots = card.querySelectorAll(".card-room-dot");

      dots.forEach(dot => {
        dot.addEventListener("mouseenter", () => switchCardImage(dot, mainImg, dots));
        dot.addEventListener("click", (e) => {
          e.stopPropagation();
          switchCardImage(dot, mainImg, dots);
        });
      });

      // Interactive 3D Card Tilt on Mousemove
      card.addEventListener("mousemove", (e) => handleCardTilt(e, card));
      card.addEventListener("mouseleave", () => resetCardTilt(card));
    });

    // Attach Quick Lightbox Triggers
    gridContainer.querySelectorAll(".btn-quick-lightbox").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const pId = btn.getAttribute("data-project-id");
        openProjectInLightbox(pId);
      });
    });

    // Attach Prefill Project Triggers
    gridContainer.querySelectorAll(".btn-prefill-project").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const title = btn.getAttribute("data-project-title");
        prefillAndScrollToInquiry(title);
      });
    });

    // Card click navigates to details
    gridContainer.querySelectorAll(".project-card-asymmetric").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("button") || e.target.closest("a")) return;
        const pId = card.getAttribute("data-project-id");
        window.location.href = `project-details.html?id=${encodeURIComponent(pId)}`;
      });
    });

    // Smooth reveal animation
    setTimeout(() => {
      gridContainer.querySelectorAll(".reveal-fade-up").forEach(el => el.classList.add("is-visible"));
    }, 40);
  };

  // Helper for instant room swap on card
  function switchCardImage(activeDot, imgElement, allDots) {
    if (!imgElement || activeDot.classList.contains("active")) return;
    allDots.forEach(d => d.classList.remove("active"));
    activeDot.classList.add("active");
    const newUrl = activeDot.getAttribute("data-img-url");
    imgElement.style.opacity = "0.7";
    const tempImg = new Image();
    tempImg.onload = () => {
      imgElement.src = newUrl;
      imgElement.style.opacity = "1";
    };
    tempImg.src = newUrl;
  }

  // 3D Tilt calculation
  function handleCardTilt(e, card) {
    if (window.innerWidth < 992) return; // Desktop only for performance
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
  }

  function resetCardTilt(card) {
    card.style.transform = "";
  }

  // Update Category Filter Buttons with Count Badges
  function updateFilterBadges() {
    if (typeof window.ProjectRepository?.getCounts !== "function") return;
    const counts = window.ProjectRepository.getCounts();
    filterBtns.forEach(btn => {
      const cat = btn.getAttribute("data-filter");
      const count = counts[cat] || 0;
      let badge = btn.querySelector(".filter-count-badge");
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "filter-count-badge";
        btn.appendChild(badge);
      }
      badge.textContent = count;
    });
  }

  // Filter Button Listeners
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-filter");
      renderProjects();
    });
  });

  // Live Search Listener
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        activeQuery = e.target.value;
        if (searchClearBtn) {
          searchClearBtn.style.display = activeQuery ? "inline-flex" : "none";
        }
        renderProjects();
      }, 200);
    });

    if (searchClearBtn) {
      searchClearBtn.addEventListener("click", () => {
        searchInput.value = "";
        activeQuery = "";
        searchClearBtn.style.display = "none";
        renderProjects();
      });
    }
  }

  // Initial render
  renderProjects();
}

/**
 * Interactive Before & After Comparison Split Sliders
 */
function initBeforeAfterSliders() {
  const sliders = document.querySelectorAll(".interactive-before-after");
  if (!sliders.length) return;

  sliders.forEach(slider => {
    const beforeLayer = slider.querySelector(".ba-before-layer");
    const handle = slider.querySelector(".ba-divider-handle");
    if (!beforeLayer || !handle) return;

    let isDragging = false;

    const setPosition = (xPos) => {
      const rect = slider.getBoundingClientRect();
      let percent = ((xPos - rect.left) / rect.width) * 100;
      percent = Math.max(0, Math.min(100, percent));
      beforeLayer.style.width = `${percent}%`;
      handle.style.left = `${percent}%`;
    };

    // Mouse events
    const startDrag = (e) => {
      isDragging = true;
      setPosition(e.clientX);
      slider.classList.add("is-dragging");
    };

    const doDrag = (e) => {
      if (!isDragging) return;
      setPosition(e.clientX);
    };

    const stopDrag = () => {
      isDragging = false;
      slider.classList.remove("is-dragging");
    };

    // Touch events for mobile
    const touchStart = (e) => {
      isDragging = true;
      setPosition(e.touches[0].clientX);
    };

    const touchMove = (e) => {
      if (!isDragging) return;
      setPosition(e.touches[0].clientX);
    };

    slider.addEventListener("mousedown", startDrag);
    window.addEventListener("mousemove", doDrag);
    window.addEventListener("mouseup", stopDrag);

    slider.addEventListener("touchstart", touchStart, { passive: true });
    window.addEventListener("touchmove", touchMove, { passive: true });
    window.addEventListener("touchend", stopDrag);

    // Initial position at 50%
    beforeLayer.style.width = "50%";
    handle.style.left = "50%";
  });

  // Transformation Showcase Preset Switcher (if on index.html)
  const presetTabs = document.querySelectorAll(".ba-preset-tab");
  if (presetTabs.length && typeof window.TRANSFORMATION_SHOWCASES !== "undefined") {
    presetTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        presetTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const showcaseId = tab.getAttribute("data-showcase-id");
        const showcase = window.TRANSFORMATION_SHOWCASES.find(s => s.id === showcaseId);
        if (!showcase) return;

        const mainSlider = document.getElementById("mainHeroBeforeAfter");
        if (!mainSlider) return;

        const beforeImg = mainSlider.querySelector(".ba-before-img");
        const afterImg = mainSlider.querySelector(".ba-after-img");
        const titleEl = document.getElementById("baShowcaseTitle");
        const metaEl = document.getElementById("baShowcaseMeta");
        const descEl = document.getElementById("baShowcaseDesc");

        if (beforeImg) beforeImg.src = window.getOptimizedImageUrl ? window.getOptimizedImageUrl(showcase.beforeImage, 1200, 80) : showcase.beforeImage;
        if (afterImg) afterImg.src = window.getOptimizedImageUrl ? window.getOptimizedImageUrl(showcase.afterImage, 1200, 80) : showcase.afterImage;
        if (titleEl) titleEl.textContent = showcase.title;
        if (metaEl) metaEl.innerHTML = `<i class="bi bi-geo-alt text-gold me-1"></i>${escapeHtml(showcase.location)} &bull; ${escapeHtml(showcase.area)} &bull; ${escapeHtml(showcase.duration)}`;
        if (descEl) descEl.textContent = showcase.description;
      });
    });
  }
}

/**
 * Interactive Architectural Hotspot Material Inspector
 */
function initHotspotShowcase() {
  const container = document.getElementById("interactiveHotspotContainer");
  if (!container) return;

  const pins = container.querySelectorAll(".hotspot-pin");
  const popover = document.getElementById("hotspotDetailCard");
  const titleEl = document.getElementById("hotspotCardTitle");
  const descEl = document.getElementById("hotspotCardDesc");
  const closeBtn = document.getElementById("hotspotCardClose");

  if (!pins.length || !popover) return;

  const openHotspot = (pin) => {
    pins.forEach(p => p.classList.remove("active"));
    pin.classList.add("active");

    const label = pin.getAttribute("data-label") || "";
    const detail = pin.getAttribute("data-detail") || "";

    if (titleEl) titleEl.textContent = label;
    if (descEl) descEl.textContent = detail;

    popover.classList.add("active");
  };

  pins.forEach(pin => {
    pin.addEventListener("click", (e) => {
      e.stopPropagation();
      openHotspot(pin);
    });

    pin.addEventListener("mouseenter", () => {
      openHotspot(pin);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      popover.classList.remove("active");
      pins.forEach(p => p.classList.remove("active"));
    });
  }

  // Close popover when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#interactiveHotspotContainer")) {
      popover.classList.remove("active");
      pins.forEach(p => p.classList.remove("active"));
    }
  });
}

/**
 * Enhanced Lightbox with Thumbnails, Keyboard Controls & Zoom
 */
function initLightbox() {
  const modal = document.getElementById("globalLightboxModal");
  if (!modal) return;

  const closeBtn = modal.querySelector(".lightbox-close-btn");
  const prevBtn = modal.querySelector(".lightbox-prev");
  const nextBtn = modal.querySelector(".lightbox-next");
  const zoomInBtn = modal.querySelector(".lightbox-zoom-in");
  const zoomOutBtn = modal.querySelector(".lightbox-zoom-out");

  const closeLightbox = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    resetZoom();
  };

  const nextImage = () => {
    if (currentLightboxImages.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
    resetZoom();
    updateLightboxView();
  };

  const prevImage = () => {
    if (currentLightboxImages.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
    resetZoom();
    updateLightboxView();
  };

  const resetZoom = () => {
    currentLightboxZoom = 1;
    const imgEl = document.getElementById("lightboxImage");
    if (imgEl) imgEl.style.transform = `scale(1)`;
  };

  const applyZoom = (delta) => {
    currentLightboxZoom = Math.max(1, Math.min(2.5, currentLightboxZoom + delta));
    const imgEl = document.getElementById("lightboxImage");
    if (imgEl) imgEl.style.transform = `scale(${currentLightboxZoom})`;
  };

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", nextImage);
  if (prevBtn) prevBtn.addEventListener("click", prevImage);
  if (zoomInBtn) zoomInBtn.addEventListener("click", () => applyZoom(0.3));
  if (zoomOutBtn) zoomOutBtn.addEventListener("click", () => applyZoom(-0.3));

  // Close when clicking modal backdrop (not image box)
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("lightbox-container")) closeLightbox();
  });

  // Keyboard controls
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "+" || e.key === "=") applyZoom(0.3);
    if (e.key === "-") applyZoom(-0.3);
  });

  // Touch swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  modal.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) nextImage();
    else if (touchEndX - touchStartX > 50) prevImage();
  }, { passive: true });
}

function openProjectInLightbox(projectId) {
  const project = window.ProjectRepository.getById(projectId);
  if (!project) return;

  if (project.gallery && project.gallery.length > 0) {
    currentLightboxImages = project.gallery.map(item => ({
      url: window.getOptimizedImageUrl ? window.getOptimizedImageUrl(item.url, 1600, 85) : item.url,
      thumb: window.getOptimizedImageUrl ? window.getOptimizedImageUrl(item.url, 200, 70) : item.url,
      room: item.room,
      caption: `${project.title} &mdash; ${item.room}: ${item.caption}`,
      projectTitle: project.title
    }));
  } else {
    currentLightboxImages = project.images.map((img, i) => ({
      url: window.getOptimizedImageUrl ? window.getOptimizedImageUrl(img, 1600, 85) : img,
      thumb: window.getOptimizedImageUrl ? window.getOptimizedImageUrl(img, 200, 70) : img,
      room: `Perspective ${i + 1}`,
      caption: `${project.title}`,
      projectTitle: project.title
    }));
  }

  currentLightboxIndex = 0;
  renderLightboxThumbnails();
  updateLightboxView();

  const modal = document.getElementById("globalLightboxModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function renderLightboxThumbnails() {
  const thumbContainer = document.getElementById("lightboxThumbnailsBar");
  if (!thumbContainer || currentLightboxImages.length <= 1) {
    if (thumbContainer) thumbContainer.innerHTML = "";
    return;
  }

  thumbContainer.innerHTML = currentLightboxImages.map((img, idx) => `
    <button class="lightbox-thumb-btn ${idx === currentLightboxIndex ? 'active' : ''}" data-index="${idx}" title="${escapeHtml(img.room)}">
      <img src="${img.thumb}" alt="Thumbnail ${idx + 1}" loading="lazy">
    </button>
  `).join("");

  thumbContainer.querySelectorAll(".lightbox-thumb-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      currentLightboxIndex = idx;
      updateLightboxView();
    });
  });
}

function updateLightboxView() {
  const imgEl = document.getElementById("lightboxImage");
  const captionEl = document.getElementById("lightboxCaption");
  const counterEl = document.getElementById("lightboxCounter");
  const inquireBtn = document.getElementById("lightboxInquireBtn");
  const thumbContainer = document.getElementById("lightboxThumbnailsBar");

  if (!imgEl || currentLightboxImages.length === 0) return;

  const current = currentLightboxImages[currentLightboxIndex];
  imgEl.src = current.url;

  if (captionEl) {
    captionEl.innerHTML = current.caption;
  }

  if (counterEl) {
    counterEl.textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
  }

  if (inquireBtn) {
    inquireBtn.onclick = () => {
      const modal = document.getElementById("globalLightboxModal");
      if (modal) modal.classList.remove("active");
      document.body.style.overflow = "";
      prefillAndScrollToInquiry(`${current.projectTitle} - ${current.room}`);
    };
  }

  if (thumbContainer) {
    thumbContainer.querySelectorAll(".lightbox-thumb-btn").forEach((btn, idx) => {
      btn.classList.toggle("active", idx === currentLightboxIndex);
    });
  }
}

/**
 * Prefills the project inquiry form and scrolls smoothly
 */
function prefillAndScrollToInquiry(projectTitle) {
  const inquirySection = document.getElementById("inquiry-section");
  const projectInput = document.getElementById("inquiryProjectPrefill") || document.getElementById("inquiryAdditionalDetails");

  if (projectInput) {
    if (projectInput.tagName === "SELECT") {
      projectInput.value = projectTitle;
    } else {
      projectInput.value = `I am interested in discussing a bespoke interior concept similar to: "${projectTitle}".`;
    }
  }

  if (inquirySection) {
    inquirySection.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = `contact.html?project=${encodeURIComponent(projectTitle)}#inquiry-section`;
  }
}

/**
 * Hydrates the project-details.html case study page
 */
function initProjectDetailsPage() {
  const container = document.getElementById("projectDetailsContainer");
  if (!container || typeof window.STUDIO_PROJECTS === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id") || "the-serene-pavilion";
  const project = window.ProjectRepository.getById(projectId) || window.STUDIO_PROJECTS[0];

  if (!project) return;

  // Update Page Title & Metadata
  document.title = `${project.title} | ${window.STUDIO_CONFIG?.businessName || "Atelier Luxe Architecture"}`;

  // Populate Hero
  const titleEl = document.getElementById("projDetailTitle");
  const titleMainEl = document.getElementById("projDetailTitleMain");
  const subtitleEl = document.getElementById("projDetailSubtitle");
  const locationEl = document.getElementById("projDetailLocation");
  const areaEl = document.getElementById("projDetailArea");
  const yearEl = document.getElementById("projDetailYear");
  const timelineEl = document.getElementById("projDetailTimeline");
  const styleEl = document.getElementById("projDetailStyle");
  const overviewEl = document.getElementById("projDetailOverview");
  const challengeEl = document.getElementById("projDetailChallenge");
  const solutionEl = document.getElementById("projDetailSolution");
  const heroBg = document.getElementById("projDetailHeroBg");

  if (titleEl) titleEl.textContent = project.title;
  if (titleMainEl) titleMainEl.textContent = project.title;
  if (subtitleEl) subtitleEl.textContent = project.subtitle;
  if (locationEl) locationEl.textContent = project.location;
  if (areaEl) areaEl.textContent = project.area;
  if (yearEl) yearEl.textContent = `${project.year} (${project.timeline})`;
  if (timelineEl) timelineEl.textContent = project.timeline;
  if (styleEl) styleEl.textContent = project.style;
  if (overviewEl) overviewEl.textContent = project.overview;
  if (challengeEl) challengeEl.textContent = project.challenge;
  if (solutionEl) solutionEl.textContent = project.solution;
  if (heroBg) {
    heroBg.src = window.getOptimizedImageUrl ? window.getOptimizedImageUrl(project.coverImage, 1600, 80) : project.coverImage;
  }

  // Materials & Finishes
  const materialsList = document.getElementById("projDetailMaterials");
  if (materialsList && project.materials) {
    materialsList.innerHTML = project.materials
      .map(m => `<li><i class="bi bi-diamond-fill me-2 text-gold"></i>${escapeHtml(m)}</li>`)
      .join("");
  }

  // Interactive Hotspot Showcase on Case Study (if project has hotspots)
  const detailHotspotSection = document.getElementById("projDetailHotspotSection");
  if (detailHotspotSection && project.hotspots && project.hotspots.length > 0) {
    detailHotspotSection.style.display = "block";
    const hotspotMedia = detailHotspotSection.querySelector(".hotspot-interactive-image");
    if (hotspotMedia) {
      hotspotMedia.innerHTML = `
        <img src="${window.getOptimizedImageUrl(project.coverImage, 1200, 80)}" alt="${escapeHtml(project.title)} Details" class="w-100 rounded">
        ${project.hotspots.map((h, i) => `
          <button class="hotspot-pin" style="left: ${h.x}%; top: ${h.y}%;" data-label="${escapeHtml(h.label)}" data-detail="${escapeHtml(h.detail)}" aria-label="${escapeHtml(h.label)}">
            <span class="hotspot-pulse"></span>
            <span class="hotspot-dot">${i + 1}</span>
          </button>
        `).join("")}
      `;
      initHotspotShowcase();
    }
  }

  // Interactive Before & After Section on Case Study (if project has before/after)
  const detailBeforeAfterSection = document.getElementById("projDetailBeforeAfterSection");
  if (detailBeforeAfterSection && project.beforeAfter) {
    detailBeforeAfterSection.style.display = "block";
    const sliderContainer = detailBeforeAfterSection.querySelector(".interactive-before-after");
    if (sliderContainer) {
      sliderContainer.innerHTML = `
        <div class="ba-after-layer">
          <img src="${window.getOptimizedImageUrl(project.beforeAfter.after, 1200, 80)}" alt="Finished Luxury Interior" class="ba-after-img">
          <span class="ba-badge ba-badge-after">After: Atelier Architecture</span>
        </div>
        <div class="ba-before-layer">
          <img src="${window.getOptimizedImageUrl(project.beforeAfter.before, 1200, 80)}" alt="Raw Site Before" class="ba-before-img">
          <span class="ba-badge ba-badge-before">Before: Bare-Shell Site</span>
        </div>
        <div class="ba-divider-handle" aria-label="Drag to compare before and after">
          <div class="ba-handle-line"></div>
          <div class="ba-handle-circle">
            <i class="bi bi-chevron-left"></i>
            <i class="bi bi-chevron-right"></i>
          </div>
          <div class="ba-handle-line"></div>
        </div>
      `;
      initBeforeAfterSliders();
    }
  }

  // Room-by-room High-Resolution Gallery
  const galleryGrid = document.getElementById("projDetailGalleryGrid");
  if (galleryGrid && project.gallery) {
    galleryGrid.innerHTML = project.gallery
      .map((item, idx) => `
        <div class="col-md-6 mb-4">
          <div class="editorial-image-frame img-skeleton" style="height: 380px; cursor: pointer;" onclick="openProjectInLightbox('${project.id}')">
            <img src="${window.getOptimizedImageUrl ? window.getOptimizedImageUrl(item.url, 800, 75) : item.url}" 
                 alt="${escapeHtml(item.room)}" 
                 loading="lazy" 
                 decoding="async"
                 onload="this.parentElement.classList.add('media-loaded')">
            <div class="editorial-zoom-icon"><i class="bi bi-arrows-fullscreen"></i></div>
          </div>
          <h5 class="mt-3 mb-1 font-serif">${escapeHtml(item.room)}</h5>
          <p class="small text-muted mb-0">${escapeHtml(item.caption)}</p>
        </div>
      `).join("");
  }

  // Discuss this project CTA button
  const discussBtn = document.getElementById("projDetailDiscussBtn");
  if (discussBtn) {
    discussBtn.addEventListener("click", () => {
      window.location.href = `contact.html?project=${encodeURIComponent(project.title)}#inquiry-section`;
    });
  }

  // Related Projects
  const relatedContainer = document.getElementById("projDetailRelatedGrid");
  if (relatedContainer) {
    const related = window.STUDIO_PROJECTS.filter(p => p.id !== project.id && (p.category === project.category || p.tags.some(t => project.tags.includes(t)))).slice(0, 2);
    const fallbackRelated = related.length ? related : window.STUDIO_PROJECTS.filter(p => p.id !== project.id).slice(0, 2);
    
    relatedContainer.innerHTML = fallbackRelated
      .map(p => `
        <div class="col-md-6 mb-4">
          <div class="project-card-asymmetric">
            <div class="project-media-wrapper img-skeleton">
              <img src="${window.getOptimizedImageUrl ? window.getOptimizedImageUrl(p.coverImage, 800, 75) : p.coverImage}" 
                   alt="${escapeHtml(p.title)}" 
                   loading="lazy"
                   onload="this.parentElement.classList.add('media-loaded')">
            </div>
            <div class="project-overlay-content">
              <span class="project-category-tag">${escapeHtml(p.categoryLabel)}</span>
              <h4 class="project-overlay-title">${escapeHtml(p.title)}</h4>
              <p class="small text-white-50 mb-3">${escapeHtml(p.subtitle)} &bull; ${escapeHtml(p.location)}</p>
              <a href="project-details.html?id=${encodeURIComponent(p.id)}" class="btn btn-luxury-white btn-luxury-sm">
                Explore Case Study <i class="bi bi-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      `).join("");
  }
}

// Global escapeHtml helper if not already defined
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

if (typeof window !== "undefined") {
  window.openProjectInLightbox = openProjectInLightbox;
  window.prefillAndScrollToInquiry = prefillAndScrollToInquiry;
}
