/**
 * =====================================================================
 * PACKAGES & PRICING CONFIGURATION (packages.js)
 * =====================================================================
 * Fully configurable tier structures, itemized price breakdowns,
 * comparison matrices, and interior design cost calculator rules.
 */

const STUDIO_PACKAGES = [
  {
    id: "essential-design",
    name: "Essential Design",
    badge: "Design-Only Concept",
    tagline: "Ideal for homeowners seeking professional space planning, layouts, and curated design direction before hiring their own contractors.",
    scopeType: "Design-Only (Execution Excluded)",
    priceDisplay: "₹120",
    priceUnit: "per sq. ft",
    indicativeStarting: "From ₹1,20,000 (Based on min. 1,000 sq.ft)",
    pricingModel: "per-sqft",
    baseRatePerSqFt: 120,
    minSqFt: 800,
    revisions: "2 Iteration Rounds",
    turnaround: "3 to 4 Weeks",
    popular: false,
    ctaText: "Choose Essential Design",
    description: "A focused, structured architectural design package delivering comprehensive 2D layouts, concept mood boards, and material guidance.",
    
    // Key Feature Highlights
    features: [
      { text: "Detailed In-Person / Virtual Design Consultation", included: true },
      { text: "Precise As-Built Space Planning & 2D Furniture Layouts", included: true },
      { text: "Curated Mood Boards & Color Schemes per room", included: true },
      { text: "Material, Fabric & Finish Palette Recommendations", included: true },
      { text: "Basic Electrical, Switch & Lighting Schematic", included: true },
      { text: "Final Digital Design Dossier (PDF)", included: true },
      { text: "Photorealistic 3D Renders", included: false, note: "Available as add-on" },
      { text: "Detailed Millwork & Modular Kitchen Shop Drawings", included: false },
      { text: "Site Supervision & Turnkey Execution", included: false, note: "Design-only package" }
    ],

    // Itemized Breakdown
    breakdown: [
      { item: "Initial Comprehensive Design Discovery", status: "Included", basis: "Fixed per project", description: "In-depth lifestyle audit, spatial flow analysis, and design brief consolidation." },
      { item: "2D Cad Floor Plans & Space Planning", status: "Included", basis: "Per room / zone", description: "Ergonomic furniture layouts and dimensional circulation paths." },
      { item: "Aesthetic Moodboards & Color Harmonies", status: "Included", basis: "Per room", description: "Curated imagery, paint codes (Asian Paints/Dulux/Benjamin Moore), and textural direction." },
      { item: "Material & Surface Specification Guide", status: "Included", basis: "Per project", description: "List of recommended laminates, veneers, tiles, and fabrics with brand catalogs." },
      { item: "Basic Lighting & Electrical Strategy", status: "Included", basis: "Per project", description: "Ceiling point guidance and task-lighting placement suggestions." },
      { item: "3D Photorealistic Visualizations", status: "Optional Add-On", basis: "₹8,000 per room", description: "High-resolution 3D perspectives of selected spaces upon request." },
      { item: "Turnkey Execution & Site Labour", status: "Excluded", basis: "Self-contracted", description: "Clients hire and manage their own civil, electrical, carpentry, and painting teams." }
    ],

    exclusions: [
      "Civil, electrical, plumbing, or carpentry labor",
      "Material purchasing and vendor billing",
      "Daily site visits or contractor supervision",
      "Bespoke joinery fabrication drawings"
    ]
  },

  {
    id: "premium-interiors",
    name: "Premium Interiors",
    badge: "Most Popular",
    tagline: "Our signature design & specification package tailored for modern apartments and villas requiring detailed 3D perspectives and millwork drawing sets.",
    scopeType: "Design + Technical Drawings (Execution Optional)",
    priceDisplay: "₹220",
    priceUnit: "per sq. ft",
    indicativeStarting: "From ₹2,60,000 (Based on min. 1,200 sq.ft)",
    pricingModel: "per-sqft",
    baseRatePerSqFt: 220,
    minSqFt: 1000,
    revisions: "3 Iteration Rounds",
    turnaround: "5 to 6 Weeks",
    popular: true,
    ctaText: "Choose Premium Interiors",
    description: "An end-to-end design formulation delivering photorealistic 3D perspectives for all primary rooms, modular kitchen specs, wardrobe engineering, and electrical schematics.",

    features: [
      { text: "Everything in Essential Design", included: true },
      { text: "Photorealistic 3D Visualizations for All Main Rooms", included: true },
      { text: "Comprehensive Modular Kitchen Engineering & Hardware Specs", included: true },
      { text: "Custom Wardrobe & Storage Joinery Working Drawings", included: true },
      { text: "Detailed False Ceiling & Circuiting Lighting Layouts", included: true },
      { text: "Detailed Bill of Quantities (BOQ) with Brand References", included: true },
      { text: "3 Scheduled Site Coordination Visits during rough-in", included: true },
      { text: "Full Turnkey Material & Labor Execution", included: false, note: "Can be contracted via studio execution wing" }
    ],

    breakdown: [
      { item: "Concept & Space Planning Architecture", status: "Included", basis: "Whole home", description: "Zoning, ergonomics, structural adjustments analysis, and flow optimization." },
      { item: "Photorealistic 3D Renderings", status: "Included", basis: "2 angles per major room", description: "Ultra-crisp 4K renders illustrating actual materials, lighting, and finishes." },
      { item: "Modular Kitchen Technical Set", status: "Included", basis: "Custom", description: "Internal carcass dimensions, drawer accessories, Blum/Hettich hardware specs, and countertop detailing." },
      { item: "Wardrobes & Built-in Joinery Detailing", status: "Included", basis: "All bedrooms", description: "Elevation, internal section, hanging/drawer ratios, and fluted/glass shutter details." },
      { item: "False Ceiling & Reflected Ceiling Plan (RCP)", status: "Included", basis: "Whole home", description: "Cove lighting dimensions, AC vent locations, speaker points, and magnetic track channels." },
      { item: "Itemized Bill of Quantities (BOQ)", status: "Included", basis: "Comprehensive", description: "Transparent material take-offs and estimated budget for execution." },
      { item: "Turnkey Contracting & Project Management", status: "Optional Add-On", basis: "Cost-plus / Turnkey quotation", description: "Execution through our vetted master craftsmen and trade partners." }
    ],

    exclusions: [
      "Physical procurement of loose decor and styling art",
      "Building authority approvals or structural alterations outside standard guidelines",
      "Execution labour (unless opted for turnkey execution add-on)"
    ]
  },

  {
    id: "complete-home-interiors",
    name: "Complete Home Interiors",
    badge: "Turnkey Excellence",
    tagline: "The stress-free turnkey solution. From bare-shell design to procurement, bespoke carpentry, and white-glove site delivery.",
    scopeType: "Full Turnkey Design & Build",
    priceDisplay: "₹1,850",
    priceUnit: "per sq. ft (Indicative Design + Build)",
    indicativeStarting: "From ₹24,00,000 (Based on 1,300 sq.ft 3BHK)",
    pricingModel: "per-sqft",
    baseRatePerSqFt: 1850,
    minSqFt: 1200,
    revisions: "Unlimited during design phase",
    turnaround: "90 to 120 Working Days",
    popular: false,
    ctaText: "Choose Complete Home",
    description: "A complete turnkey engagement covering design, demolition/civil works, electrical, false ceilings, factory-finish modular carpentry, Italian marble/hardwood flooring, painting, and handover.",

    features: [
      { text: "Complete Architectural Design & 3D Visualization", included: true },
      { text: "Full Civil, Plumbing & Electrical Overhaul", included: true },
      { text: "Factory-Manufactured Modular Kitchen with Quartz Countertops", included: true },
      { text: "Full Height Modular Wardrobes in All Bedrooms (PU / Acrylic / Glass)", included: true },
      { text: "Designer False Ceiling with Premium COB / Strip / Magnetic Lights", included: true },
      { text: "Luxury Wall Paneling, Fluted Accents & Royal Emulsion Paint", included: true },
      { text: "Dedicated On-Site Project Manager & Quality Assurance Audits", included: true },
      { text: "Deep Cleaning & White-Glove Handover", included: true },
      { text: "10-Year Warranty on Factory Modular Elements", included: true }
    ],

    breakdown: [
      { item: "Complete Design, 3D Renders & Technical Drafting", status: "Included", basis: "Full suite", description: "End-to-end design drawings, sample boards, and 3D walkthroughs." },
      { item: "Civil, Electrical & False Ceiling Execution", status: "Included", basis: "Complete", description: "Concealed wiring (Finolex/Havells), Gyproc ceilings, and architectural lighting fixtures." },
      { item: "Gourmet Modular Kitchen", status: "Included", basis: "Up to 150 sq.ft footprint", description: "Marine BWP plywood carcasses, soft-close Blum hardware, quartz slab, and profile lighting." },
      { item: "Custom Wardrobes & Vanity Units", status: "Included", basis: "Master + Guest bedrooms", description: "Anti-scratch laminate/veneer/PU shutters with integrated sensor LED lighting." },
      { item: "Surfacing & Painting", status: "Included", basis: "Whole home", description: "Asian Paints Royale luxury emulsion, Italian PU on timber trims, and anti-fungal primer." },
      { item: "Site Management & Quality Audits", status: "Included", basis: "Full duration", description: "Dedicated site supervisor, weekly WhatsApp photo progress reports, and milestone tracking." }
    ],

    exclusions: [
      "Loose luxury sofas, dining chairs, and master mattresses (available under decor package)",
      "Smart consumer electronics, refrigerators, TVs, and washing machines",
      "Structural exterior modifications requiring municipal sanctions"
    ]
  },

  {
    id: "luxury-bespoke",
    name: "Luxury Bespoke Design",
    badge: "Haute Interior Architecture",
    tagline: "Unconstrained luxury for high-end villas, penthouses, and bespoke residences requiring rare marbles, artisan millwork, and custom furniture.",
    scopeType: "Bespoke Design & Mastercraft Execution",
    priceDisplay: "Custom Quote",
    priceUnit: "Tailored to architectural brief",
    indicativeStarting: "Typical projects range ₹45L to ₹2Cr+",
    pricingModel: "custom",
    baseRatePerSqFt: null, // Custom quotation
    minSqFt: 2500,
    revisions: "Bespoke Tailoring",
    turnaround: "6 to 9 Months",
    popular: false,
    ctaText: "Request Luxury Consultation",
    description: "Every element is custom-commissioned. From imported Italian monolith marble installations to hand-finished brass screens, acoustic cinema salons, and smart home automation integration.",

    features: [
      { text: "Direct Consultation with Principal Architect & Creative Director", included: true },
      { text: "Rare Stone & Marble Selection Tours (Italian Statuario, Travertine)", included: true },
      { text: "Custom One-of-a-Kind Furniture Design & Master Joinery", included: true },
      { text: "Architectural Lighting Design with Circadian Dimming Integrations", included: true },
      { text: "Full Home Automation & Smart Integration (Lutron / KNX / Crestron)", included: true },
      { text: "Acoustic Home Cinema / Bar Salon / Wine Cellar Planning", included: true },
      { text: "Art Curation, Bespoke Sculptures & Soft Furnishing Curation", included: true },
      { text: "Priority Handover with Lifetime Concierge Maintenance Support", included: true }
    ],

    breakdown: [
      { item: "Principal Architect Leadership", status: "Included", basis: "Dedicated team", description: "Direct project guidance and tailored architectural interventions." },
      { item: "Artisan Material Sourcing", status: "Included", basis: "Global & Domestic", description: "Direct hand-selection of bookmatched marble lots, exotic veneers, and designer hardware." },
      { item: "Custom Furniture Fabrication", status: "Custom", basis: "Per commission", description: "Handcrafted dining tables, custom headboards, and bespoke upholstery." },
      { item: "Smart Automation Engineering", status: "Included", basis: "Comprehensive", description: "Seamless coordination with automation partners for motorized drapes, HVAC, and mood scenes." },
      { item: "Art & Styling Curation", status: "Included", basis: "Curated dossier", description: "Sourcing original canvases, sculptures, artisan rugs, and imported lighting." }
    ],

    exclusions: [
      "Original fine art acquisition costs (priced directly by galleries)",
      "Import customs duties on international specialized furniture orders"
    ]
  }
];

// Package Comparison Data Matrix
const PACKAGE_COMPARISON = {
  criteria: [
    { name: "Design Consultation", essential: "1 Detailed Session", premium: "2-3 Iterative Sessions", complete: "Dedicated Ongoing", luxury: "Principal Architect Direct" },
    { name: "2D Floor Plans & Space Layouts", essential: "Included", premium: "Included (Advanced)", complete: "Included (Full Set)", luxury: "Bespoke Architectural" },
    { name: "3D Photorealistic Visualizations", essential: "Optional Add-on", premium: "Included (All Rooms)", complete: "Included (All Rooms)", luxury: "Virtual Walkthroughs & 4K" },
    { name: "Modular Kitchen Technical Specs", essential: "Basic Layout Only", premium: "Full Working Drawings", complete: "Factory Built & Installed", luxury: "Imported / Custom Artisan" },
    { name: "Wardrobe & Storage Engineering", essential: "Conceptual Placement", premium: "Full Working Drawings", complete: "Factory Built & Installed", luxury: "Walk-in Dressing Suites" },
    { name: "False Ceiling & Lighting Schematics", essential: "Basic Guidelines", premium: "Detailed Electrical / RCP", complete: "Execution & Fixtures Included", luxury: "Architectural Circadian" },
    { name: "Material & Finish Samples", essential: "Catalog Recommendations", premium: "Physical Sample Board", complete: "Sample Box & Site Selection", luxury: "Quarry & Factory Tours" },
    { name: "Bill of Quantities (BOQ)", essential: "Not Included", premium: "Comprehensive BOQ", complete: "Turnkey Milestone Contract", luxury: "Transparent Executive BOQ" },
    { name: "Site Supervision & Contracting", essential: "Excluded (Client Managed)", premium: "3 Scheduled Audits", complete: "Full On-Site PM Team", luxury: "Dedicated Project Director" },
    { name: "Civil, Plumbing & Electrical Labour", essential: "Excluded", premium: "Excluded (Add-on Available)", complete: "Included in Turnkey Fee", luxury: "Full Mastercraft Execution" },
    { name: "Post-Completion Warranty", essential: "N/A (Design-Only)", premium: "N/A (Design-Only)", complete: "10-Year Modular Warranty", luxury: "Lifetime Concierge Care" },
    { name: "Pricing Model", essential: "₹120 / sq. ft", premium: "₹220 / sq. ft", complete: "₹1,850 / sq. ft (Turnkey)", luxury: "Custom Architectural Quote" }
  ]
};

// Pricing Rules for Cost Calculator
const CALCULATOR_RULES = {
  // Base rate multiplier by property type
  propertyTypeMultipliers: {
    apartment: 1.0,
    villa: 1.15,
    independentHouse: 1.10,
    commercial: 1.20
  },

  // Base rate per sq.ft by package (indicative)
  packageRates: {
    "essential-design": {
      name: "Essential Design",
      ratePerSqFt: 120,
      isCustom: false,
      isTurnkey: false
    },
    "premium-interiors": {
      name: "Premium Interiors",
      ratePerSqFt: 220,
      isCustom: false,
      isTurnkey: false
    },
    "complete-home-interiors": {
      name: "Complete Home Interiors (Turnkey)",
      ratePerSqFt: 1850,
      isCustom: false,
      isTurnkey: true
    },
    "luxury-bespoke": {
      name: "Luxury Bespoke Design",
      ratePerSqFt: null,
      isCustom: true,
      isTurnkey: true
    }
  },

  // Optional Add-on services rates
  addOns: [
    { id: "vrWalkthrough", name: "3D Virtual Reality (VR) Immersive Walkthrough", fixedPrice: 25000 },
    { id: "smartHomePlan", name: "Smart Home Automation & Lighting Control Planning", fixedPrice: 35000 },
    { id: "terraceLandscape", name: "Terrace & Balcony Biophilic Landscape Design", fixedPrice: 45000 },
    { id: "siteSupervisionExtra", name: "Additional Site Quality Audits (Package of 5 Visits)", fixedPrice: 20000 }
  ],

  // Tax configuration (GST in India on services is typically 18%)
  taxRate: 0.18,
  taxLabel: "GST (18% applicable on services)",

  // Calculate project estimate function
  calculateEstimate: function(params) {
    const { propertyType, areaSqFt, packageId, addOnIds = [] } = params;
    const pkg = this.packageRates[packageId];

    if (!pkg) {
      return { error: "Please select a valid package tier." };
    }

    if (pkg.isCustom) {
      return {
        isCustom: true,
        packageName: pkg.name,
        message: "Luxury Bespoke projects are custom-scoped based on architectural floor plans and luxury specifications.",
        callToAction: "Request Custom Architectural Consultation"
      };
    }

    const area = parseFloat(areaSqFt) || 0;
    if (area <= 0) {
      return { error: "Please provide a valid property area in square feet." };
    }

    const multiplier = this.propertyTypeMultipliers[propertyType] || 1.0;
    const baseSubtotal = Math.round(area * pkg.ratePerSqFt * multiplier);

    // Calculate add-ons
    let addOnsTotal = 0;
    const selectedAddOnsList = [];
    if (Array.isArray(addOnIds)) {
      addOnIds.forEach(addonId => {
        const found = this.addOns.find(a => a.id === addonId);
        if (found) {
          addOnsTotal += found.fixedPrice;
          selectedAddOnsList.push({ name: found.name, price: found.fixedPrice });
        }
      });
    }

    const subtotal = baseSubtotal + addOnsTotal;
    const tax = Math.round(subtotal * this.taxRate);
    const grandTotal = subtotal + tax;

    return {
      isCustom: false,
      propertyType,
      areaSqFt: area,
      packageName: pkg.name,
      baseRateApplied: Math.round(pkg.ratePerSqFt * multiplier),
      baseSubtotal,
      selectedAddOns: selectedAddOnsList,
      addOnsTotal,
      subtotal,
      taxRate: this.taxRate,
      taxAmount: tax,
      grandTotal,
      isTurnkey: pkg.isTurnkey,
      indicativeNote: "Notice: This calculation provides an indicative budget estimation based on standard room configurations and specifications. Final quotation is subject to exact site dimensions, material selections, and formal scope agreement."
    };
  }
};

if (typeof window !== "undefined") {
  window.STUDIO_PACKAGES = STUDIO_PACKAGES;
  window.PACKAGE_COMPARISON = PACKAGE_COMPARISON;
  window.CALCULATOR_RULES = CALCULATOR_RULES;
}
