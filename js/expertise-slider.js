/**
 * =====================================================================
 * EXPERTISE CATALOG & SLIDER CONTROLLER (expertise-slider.js)
 * =====================================================================
 * Powers the interactive "OUR EXPERTISE / End-to-End Interior Architecture"
 * slider, catalog filtering, slide next navigation, counter synchronization,
 * and the rich Quick-View specification modal.
 */

const STUDIO_EXPERTISE_CATALOG = [
  {
    id: "living-salons",
    number: "01",
    category: "living",
    categoryLabel: "Living Salons",
    tag: "SPATIAL ARCHITECTURE & FLOW",
    title: "Bespoke Living Salons & Great Rooms",
    shapeClass: "shape-seq-left",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    scopeTag: "Turnkey Architecture & Decor",
    timeline: "6–8 Weeks",
    shortDesc: "Double-height proportions, monolithic travertine fireplaces, recessed acoustic cove illumination, and curated conversational lounge layouts.",
    overview: "We transform living salons into expansive, light-drenched architectural sanctuaries. Using honest materials—honed travertine, brushed brass, and natural linens—we maximize ceiling volumes and natural sightlines while banishing visible conduits and clutter.",
    deliverables: [
      "2D Spatial circulation & furniture layouts",
      "Photorealistic 3D perspectives & daylight studies",
      "Travertine or marble fireplace monolith design",
      "Acoustic tray ceiling with indirect cove channels",
      "Bespoke joinery, credenzas & media wall concealers",
      "Curated luxury textiles, rugs & lighting schedule"
    ],
    materials: [
      "Honed Navona Travertine",
      "Smoked European Oak Veneer",
      "Brushed Champagne Brass Accents",
      "Belgian Boucle & Organic Linen Textiles"
    ],
    basis: "Turnkey or Design-Only"
  },
  {
    id: "modular-kitchens",
    number: "02",
    category: "kitchens",
    categoryLabel: "Modular Kitchens",
    tag: "CULINARY ENGINEERING",
    title: "Precision Modular Kitchens & Butler's Pantries",
    shapeClass: "shape-seq-center",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
    scopeTag: "German Hardware & Sintered Stone",
    timeline: "4–6 Weeks",
    shortDesc: "German precision motion hardware paired with Italian sintered porcelain slabs, anti-fingerprint nano surfaces, and separate wet/dry cooking zones.",
    overview: "Designed for serious culinary passion and effortless social hosting. Every drawer and prep zone adheres to strict ergonomic golden-triangle planning with whisper-quiet motorized lift mechanisms and integrated smart appliances.",
    deliverables: [
      "Ergonomic work-triangle & workflow analysis",
      "Wet heavy-cooking and dry entertaining segregation",
      "Blum Legrabox / Hettich motorized motion hardware",
      "Sintered porcelain waterfall island fabrication",
      "Concealed pocket doors for appliance garages",
      "Integrated under-cabinet circadian task illumination"
    ],
    materials: [
      "Dekton Laurent / Calacatta Porcelain",
      "Fenix NTM Anti-Fingerprint Matte Laminate",
      "Smoked Fluted Glass & Bronze Framing",
      "Marine-Grade Anti-Boil Moisture Resistant Plywood"
    ],
    basis: "Factory Turnkey Assembly"
  },
  {
    id: "master-suites",
    number: "03",
    category: "bedrooms",
    categoryLabel: "Master Suites",
    tag: "SANCTUARY & RESTORATION",
    title: "Master Bedroom Suites & Retreats",
    shapeClass: "shape-seq-right",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
    scopeTag: "Acoustic Cocooning (<28dB)",
    timeline: "5–7 Weeks",
    shortDesc: "Acoustically insulated primary suites featuring fluted timber acoustic panels, bespoke channel bedheads, and circadian biodynamic mood lighting.",
    overview: "The primary suite reimagined as a private five-star cocoon. Perimeter wall acoustic buffering shields against urban bustle, while smart scenes shift from crisp morning daylight to soothing amber twilight.",
    deliverables: [
      "Acoustic perimeter insulation engineering (<28dB)",
      "Bespoke wall-to-wall bedhead & joinery drafting",
      "Circadian biodynamic dimming scene automation",
      "Private reading alcove & lounge seating curation",
      "Concealed TV lift & acoustic media concealment",
      "Master en-suite spatial flow coordination"
    ],
    materials: [
      "American Walnut Fluted Acoustic Ribs",
      "Natural Suede & Velvet Channel Padding",
      "Hand-Woven Raw Silk Wallcoverings",
      "Brushed Bronze Hardware Trims"
    ],
    basis: "Custom Turnkey Interior"
  },
  {
    id: "walkin-closets",
    number: "04",
    category: "closets",
    categoryLabel: "Wardrobe Galleries",
    tag: "MILANESE DRESSING SUITES",
    title: "Walk-In Dressing Rooms & Wardrobe Galleries",
    shapeClass: "shape-seq-left",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85",
    scopeTag: "Bronze Framework & Sensor Illumination",
    timeline: "4–5 Weeks",
    shortDesc: "Bronze-framed smoked glass display wardrobes with sensor-activated warm illumination, central jewelry islands, and leather-lined organizers.",
    overview: "A boutique showroom experience for your personal wardrobe. Dust-sealed acoustic gaskets protect couture garments while pull-out tie racks, watch winders, and illuminated shoe vitrines keep everything impeccably categorized.",
    deliverables: [
      "Millimeter-precision internal elevation drawings",
      "Bronze-anodized slim aluminum frame system",
      "Sensor-activated 2700K warm LED rail lighting",
      "Central accessories island with glass top view",
      "Tuscan leather-lined jewelry and watch drawers",
      "Full-height 3-way backlit vanity dressing mirrors"
    ],
    materials: [
      "Champagne Bronze Anodized Aluminum",
      "Smoked Fluted Tempered Glass",
      "Tuscan Cognac Saddle Leather Linings",
      "Thermal-Structured European Melamine Core"
    ],
    basis: "Precision Modular Joinery"
  },
  {
    id: "spa-bathrooms",
    number: "05",
    category: "bathrooms",
    categoryLabel: "Spa Bathrooms",
    tag: "WELLNESS & HYDROTHERAPY",
    title: "Spa Bathrooms & Sculptural Powder Rooms",
    shapeClass: "shape-seq-center",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85",
    scopeTag: "Bookmatched Marble & Concealed Mixers",
    timeline: "3–5 Weeks",
    shortDesc: "Monolithic stone soaking tubs, floor-to-ceiling bookmatched marble slabs, Gessi concealed thermostatic rain showers, and backlit floating vanities.",
    overview: "Elevating daily grooming into a serene restorative ritual. We hide unsightly plumbing traps inside custom stone casework and pair warm indirect niche glows with frameless low-iron glass partitions.",
    deliverables: [
      "Complete wet & dry multi-stage waterproofing",
      "Bookmatched marble / porcelain slab layouts",
      "Concealed thermostatic shower & body jet engineering",
      "Custom floating stone double vanity fabrication",
      "Recessed backlit toiletry niche engineering",
      "Defogger anti-steam smart mirror integration"
    ],
    materials: [
      "Statuario & Nero Marquina Italian Marble",
      "Composite Stone Monolithic Free-Standing Tub",
      "Gessi / Hansgrohe Brushed Gunmetal Fixtures",
      "Low-Iron Anti-Spot Starphire Glazing"
    ],
    basis: "Civil & Sanitary Turnkey"
  },
  {
    id: "dining-salons",
    number: "06",
    category: "dining",
    categoryLabel: "Dining & Bars",
    tag: "SCULPTURAL ENTERTAINING",
    title: "Boutique Dining Salons & Wine Displays",
    shapeClass: "shape-seq-right",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85",
    scopeTag: "Sommelier Display & Custom Furniture",
    timeline: "4–6 Weeks",
    shortDesc: "Sculptural smoked timber tables, statement alabaster chandelier compositions, and climate-controlled sommelier wine display showcases.",
    overview: "The heart of residential hospitality. We design seamless flow between kitchen and formal dining, crafting focal-point tables and acoustic ceiling treatments that ensure intimate, effortless conversations.",
    deliverables: [
      "Custom dining table & chair ergonomic design",
      "Climate-controlled fluted glass wine cellar wall",
      "Acoustic ceiling drop with focal chandelier circuit",
      "Integrated bar counter with ice maker & cocktail station",
      "Cutlery & fine bone china storage joinery",
      "Dimmable multi-scene dining ambient control"
    ],
    materials: [
      "Smoked Eucalyptus Solid Wood",
      "Translucent Honed Alabaster Stone",
      "Polished Unlacquered Brass Hardware",
      "Textured Venetian Plaster Finish"
    ],
    basis: "Turnkey Space & Joinery"
  },
  {
    id: "home-offices",
    number: "07",
    category: "offices",
    categoryLabel: "Executive Studies",
    tag: "FOCUS & ERGONOMICS",
    title: "Executive Home Studies & Private Libraries",
    shapeClass: "shape-seq-left",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85",
    scopeTag: "Acoustic Millwork & Wire Concealment",
    timeline: "3–5 Weeks",
    shortDesc: "Floor-to-ceiling recessed architectural bookcases, acoustic wool felt backings, concealed cable management, and studio-grade video lighting.",
    overview: "For decision-makers who lead from home. An environment of quiet focus where technology is invisible, acoustics are calibrated for confidential video calls, and books are housed with library-grade elegance.",
    deliverables: [
      "Floor-to-ceiling modular book shelving system",
      "Full hidden cable raceway & power distribution",
      "Acoustic wool felt sound-absorbing wall paneling",
      "Studio-grade 95+ CRI glare-free video call lighting",
      "Concealed digital biometric safe & credenza joinery",
      "Private conversational lounge & reading chair nook"
    ],
    materials: [
      "Smoked Quarter-Sawn Rift Oak",
      "Matte Black Anodized Steel Frames",
      "Sound-Absorbing Wool Felt Baffles",
      "Full-Grain Saddle Leather Desk Mats"
    ],
    basis: "Custom Joinery & Interior"
  },
  {
    id: "turnkey-villas",
    number: "08",
    category: "villas",
    categoryLabel: "Villas & Penthouses",
    tag: "HOLISTIC ARCHITECTURE",
    title: "Turnkey Luxury Villas & Bare-Shell Penthouses",
    shapeClass: "shape-seq-center",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    scopeTag: "Complete Civil, MEP & Handover",
    timeline: "16–24 Weeks",
    shortDesc: "Complete bare-shell transformation: civil demolition, structural optimization, HVAC ducting, bespoke millwork, and white-glove turnkey delivery.",
    overview: "A single-window, hassle-free partnership for discerning homeowners. From gut renovation of high-floor penthouses to sprawling coastal villas, our in-house architects and site engineers manage every bolt and finish with zero subcontractor disputes.",
    deliverables: [
      "Full civil demolition & layout restructuring",
      "Complete MEP, HVAC plenum & automation schematics",
      "Indoor-outdoor verandah & courtyard continuity",
      "Factory-built modular carpentry & civil joinery",
      "Dedicated full-time on-site project engineer",
      "Weekly WhatsApp video audit logs & milestone billing"
    ],
    materials: [
      "Imported Botticino & Travertine Slabs",
      "Teak Wood Verandah Beams & Slats",
      "Smart KNX / Lutron Automation Systems",
      "Thermally Broken Slimline Panoramic Glass"
    ],
    basis: "Full Turnkey Contract"
  },
  {
    id: "ceilings-lighting",
    number: "09",
    category: "lighting",
    categoryLabel: "Ceilings & Illumination",
    tag: "ARCHITECTURAL ILLUMINATION",
    title: "False Ceiling & Architectural Lighting Systems",
    shapeClass: "shape-seq-right",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    scopeTag: "Magnetic Track & Circadian Scenes",
    timeline: "3–4 Weeks",
    shortDesc: "Low-glare magnetic track channels, continuous perimeter shadow reveals, indirect warm cove illumination, and smart automated scene controllers.",
    overview: "We treat lighting as the fourth dimension of architecture. Saying goodbye to glaring center downlights, we choreograph low-glare magnetic fixtures, cove glows, and artwork spotlights that harmonize with natural daylight.",
    deliverables: [
      "Reflected Ceiling Plans (RCP) & dimensioned layouts",
      "Low-glare magnetic track & COB spot channel design",
      "AC plenum, duct, and inspection trap concealment",
      "Perimeter shadow reveal channel engineering",
      "Circuit load balancing & automation module mapping",
      "Circadian 2700K–4000K tuneable white scene tuning"
    ],
    materials: [
      "Gyproc High-Density Acoustic Boards",
      "Matte Black Architectural Magnetic Tracks",
      "High CRI (98+) COB LED Strip Modules",
      "Extruded Aluminum Flush Plaster-in Profiles"
    ],
    basis: "Specialized Engineering"
  },
  {
    id: "commercial-workplaces",
    number: "10",
    category: "commercial",
    categoryLabel: "Workplaces & Salons",
    tag: "BOUTIQUE COMMERCIAL",
    title: "Executive Corporate Headquarters & Salons",
    shapeClass: "shape-seq-left",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    scopeTag: "Hospitality-Driven Corporate Design",
    timeline: "8–12 Weeks",
    shortDesc: "Curved acoustic timber partitions, electrochromic smart privacy glass, high-impact reception salons, and state-of-the-art conference suites.",
    overview: "Designed for boutique venture capital funds, luxury consultancies, and flagship corporate lounges. Blending the warmth of a luxury five-star hotel with the technological efficiency of a premier global headquarters.",
    deliverables: [
      "Corporate zoning & spatial privacy audit",
      "Electrochromic switchable smart PDLC glass walls",
      "Acoustic ceiling sound-masking transducers",
      "Integrated conference tech & hidden wireless docks",
      "Executive client lounge & refreshment bar",
      "Full commercial fire & building code compliance"
    ],
    materials: [
      "Smoked Ash Architectural Wall Paneling",
      "Sound-Absorbing Wool Felt Ceiling Ribs",
      "Commercial-Grade Large Porcelain Slabs",
      "Cognac Leather Conference Armchairs"
    ],
    basis: "Commercial Turnkey Build"
  }
];

let expertiseSwiperInstance = null;

document.addEventListener("DOMContentLoaded", () => {
  initExpertiseCatalog();
});

/**
 * Initializes Swiper, Slider controls, Counter, Filters, and Modal
 */
function initExpertiseCatalog() {
  const swiperEl = document.querySelector(".expertise-swiper");
  if (!swiperEl) return;

  // Initialize Swiper 11 with exact integer slidesPerView to prevent card/button cutoff
  expertiseSwiperInstance = new Swiper(".expertise-swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    grabCursor: true,
    watchSlidesProgress: true,
    speed: 600,
    navigation: {
      nextEl: ".expertise-nav-next",
      prevEl: ".expertise-nav-prev"
    },
    pagination: {
      el: ".expertise-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '" aria-label="Go to slide ' + (index + 1) + '"></span>';
      }
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 28
      }
    },
    on: {
      init: function () {
        syncArcadeSequence(this);
        updateExpertiseCounter(this.realIndex + 1, this.slides.length);
      },
      slideChange: function () {
        syncArcadeSequence(this);
        updateExpertiseCounter(this.realIndex + 1, this.slides.length);
      },
      resize: function () {
        syncArcadeSequence(this);
      }
    }
  });

  // Connect secondary slide next buttons (floating next & bottom hint pill)
  const secondaryNextButtons = document.querySelectorAll(".expertise-floating-next, .expertise-slide-next-hint");
  secondaryNextButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (expertiseSwiperInstance) {
        expertiseSwiperInstance.slideNext();
      }
    });
  });

  // Connect category filter pills
  initExpertiseFilterPills();

  // Connect quick view modal buttons
  initExpertiseQuickView();
}

/**
 * Updates the 01 / 10 counter badge
 */
function updateExpertiseCounter(current, total) {
  const currentEl = document.querySelector(".expertise-counter-current");
  const totalEl = document.querySelector(".expertise-counter-total");
  if (currentEl) {
    currentEl.textContent = String(current).padStart(2, "0");
  }
  if (totalEl) {
    totalEl.textContent = String(total).padStart(2, "0");
  }
}

/**
 * Synchronizes the architectural shape sequence across visible carousel cards:
 * Column 1: Arcade Left Vault (High parabolic curve on left)
 * Column 2: Cathedral Dome (Symmetrical dual arch apex)
 * Column 3: Arcade Right Vault (High parabolic curve on right)
 * This guarantees the visual arcade triptych is ALWAYS maintained across slide steps.
 */
function syncArcadeSequence(swiper) {
  if (!swiper || !swiper.slides) return;
  const isDesktop = window.innerWidth >= 1200;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1200;
  const activeIdx = swiper.activeIndex;

  swiper.slides.forEach((slideEl, idx) => {
    const card = slideEl.querySelector(".expertise-card");
    if (!card) return;

    // Reset column runtime shape classes
    card.classList.remove("arcade-col-left", "arcade-col-center", "arcade-col-right");

    const offset = idx - activeIdx;
    if (isDesktop) {
      if (offset === 0) {
        card.classList.add("arcade-col-left");
      } else if (offset === 1) {
        card.classList.add("arcade-col-center");
      } else if (offset === 2) {
        card.classList.add("arcade-col-right");
      }
    } else if (isTablet) {
      if (offset === 0) {
        card.classList.add("arcade-col-left");
      } else if (offset === 1) {
        card.classList.add("arcade-col-right");
      }
    } else {
      if (offset === 0) {
        card.classList.add("arcade-col-center");
      }
    }
  });
}

/**
 * Filter pills for jumping or isolating categories
 */
function initExpertiseFilterPills() {
  const pills = document.querySelectorAll(".expertise-filter-pill");
  if (!pills.length) return;

  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const filterCat = pill.getAttribute("data-filter");
      if (!expertiseSwiperInstance) return;

      if (filterCat === "all") {
        expertiseSwiperInstance.slideTo(0);
      } else {
        // Find index of slide with matching category
        const targetIndex = STUDIO_EXPERTISE_CATALOG.findIndex(item => item.category === filterCat);
        if (targetIndex !== -1) {
          expertiseSwiperInstance.slideTo(targetIndex);
        }
      }
    });
  });
}

/**
 * Quick-View Modal Population
 */
function initExpertiseQuickView() {
  const modalEl = document.getElementById("expertiseQuickViewModal");
  if (!modalEl) return;

  const bsModal = new bootstrap.Modal(modalEl);

  // Delegate click for any quickview button or card media click
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".btn-expertise-quickview, .expertise-media-frame");
    if (!trigger) return;

    const card = trigger.closest(".expertise-card");
    if (!card) return;

    const id = card.getAttribute("data-expertise-id");
    const item = STUDIO_EXPERTISE_CATALOG.find(x => x.id === id);
    if (!item) return;

    // Populate Modal Fields
    const titleEl = modalEl.querySelector(".modal-title");
    const categoryEl = modalEl.querySelector(".modal-discipline-badge");
    const tagEl = modalEl.querySelector(".modal-discipline-tag");
    const imageEl = modalEl.querySelector(".modal-hero-img");
    const descEl = modalEl.querySelector(".modal-desc");
    const timelineEl = modalEl.querySelector(".modal-spec-timeline");
    const scopeEl = modalEl.querySelector(".modal-spec-scope");
    const basisEl = modalEl.querySelector(".modal-spec-basis");
    const deliverablesListEl = modalEl.querySelector(".modal-deliverables-list");
    const materialsListEl = modalEl.querySelector(".modal-materials-list");
    const waLinkEl = modalEl.querySelector(".modal-whatsapp-link");
    const consultBtnEl = modalEl.querySelector(".modal-consult-btn");

    if (titleEl) titleEl.textContent = item.title;
    if (categoryEl) categoryEl.textContent = `${item.number} / ${item.categoryLabel}`;
    if (tagEl) tagEl.textContent = item.tag;
    if (imageEl) {
      imageEl.src = item.image;
      imageEl.alt = item.title;
    }
    if (descEl) descEl.textContent = item.overview;
    if (timelineEl) timelineEl.textContent = item.timeline;
    if (scopeEl) scopeEl.textContent = item.scopeTag;
    if (basisEl) basisEl.textContent = item.basis;

    if (deliverablesListEl) {
      deliverablesListEl.innerHTML = item.deliverables.map(d => `
        <li><i class="bi bi-check2-circle me-2 text-gold"></i><span>${escapeExpertiseHtml(d)}</span></li>
      `).join("");
    }

    if (materialsListEl) {
      materialsListEl.innerHTML = item.materials.map(m => `
        <li><i class="bi bi-layers me-2 text-gold"></i><span>${escapeExpertiseHtml(m)}</span></li>
      `).join("");
    }

    // Set WhatsApp inquiry with prefilled custom text
    if (waLinkEl) {
      const waNumber = (window.STUDIO_CONFIG && window.STUDIO_CONFIG.whatsappNumber) || "919699564112";
      const waMessage = `Hello Atelier Luxe! I am interested in your "${item.title}" interior architecture service. Please share your catalog, deliverables, and consultation availability.`;
      waLinkEl.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
    }

    // Set Consultation Link to pre-fill inquiry form
    if (consultBtnEl) {
      consultBtnEl.onclick = () => {
        bsModal.hide();
        const inquirySection = document.getElementById("inquiry-section");
        const reqTextarea = document.getElementById("inquiryRequirements");
        if (inquirySection) {
          if (reqTextarea) {
            reqTextarea.value = `I would like to inquire about your "${item.title}" service (${item.scopeTag}).`;
          }
          inquirySection.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = `contact.html?service=${encodeURIComponent(item.title)}#inquiry-section`;
        }
      };
    }

    bsModal.show();
  });
}

function escapeExpertiseHtml(str) {
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

if (typeof window !== "undefined") {
  window.STUDIO_EXPERTISE_CATALOG = STUDIO_EXPERTISE_CATALOG;
}
