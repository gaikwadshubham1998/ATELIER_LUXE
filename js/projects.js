/**
 * =====================================================================
 * PROJECT REPOSITORY (projects.js)
 * =====================================================================
 * Centralized project data for the portfolio grid, homepage showcases,
 * interactive before/after transformation sliders, architectural hotspot pins,
 * lightbox viewer, and individual project detail pages.
 * Fully configured with authentic Mumbai & coastal luxury estate locations.
 */

// Image optimization helper for fast CDN delivery & responsive srcset
function getOptimizedImageUrl(url, width = 800, quality = 75) {
  if (!url) return "";
  if (url.includes("images.unsplash.com")) {
    const cleanUrl = url.split("?")[0];
    return `${cleanUrl}?auto=format&fit=crop&w=${width}&q=${quality}`;
  }
  return url;
}

function getResponsiveSrcset(url) {
  if (!url || !url.includes("images.unsplash.com")) return "";
  const cleanUrl = url.split("?")[0];
  return `${cleanUrl}?auto=format&fit=crop&w=480&q=70 480w, ${cleanUrl}?auto=format&fit=crop&w=800&q=75 800w, ${cleanUrl}?auto=format&fit=crop&w=1200&q=80 1200w`;
}

// Interactive Before/After Transformation Showcases
const TRANSFORMATION_SHOWCASES = [
  {
    id: "worli-penthouse-salon",
    title: "Worli Sea Face Duplex Salon",
    location: "Worli Sea Face, Mumbai",
    area: "4,800 sq.ft Duplex",
    duration: "6 Months",
    beforeLabel: "Raw Bare-Shell Concrete Structure",
    afterLabel: "Turnkey Architecture & Travertine Salon",
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    description: "Transformation from an unfinished high-rise shell into a double-height warm minimalist sanctuary overlooking the Arabian Sea."
  },
  {
    id: "altamount-gourmet-kitchen",
    title: "Altamount Road Show Kitchen",
    location: "Altamount Road, South Mumbai",
    area: "650 sq.ft Culinary Lab",
    duration: "2 Months",
    beforeLabel: "Dated Partitioned Masonry",
    afterLabel: "Precision Italian Quartz Island & Butler's Pantry",
    beforeImage: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1600&q=80",
    afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
    description: "Re-engineered spatial circulation segregating heavy prep zones from an open entertaining quartz island with motorized pocket doors."
  },
  {
    id: "bandra-minimalist-monolith",
    title: "Pali Hill Minimalist Residence",
    location: "Pali Hill, Bandra West, Mumbai",
    area: "3,200 sq.ft Flat",
    duration: "4.5 Months",
    beforeLabel: "Fragmented Beams & Brickwork",
    afterLabel: "Continuous Micro-Cement & Oiled Ash Serenity",
    beforeImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80",
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    description: "Complete interior gut renovation hiding all mechanical systems behind acoustic timber slats and curved micro-cement planes."
  }
];

const STUDIO_PROJECTS = [
  // 1. RESIDENTIAL: The Serene Pavilion
  {
    id: "the-serene-pavilion",
    title: "The Serene Pavilion",
    subtitle: "A 4,800 sq.ft Duplex Penthouse",
    category: "residential",
    categoryLabel: "Residential Architecture",
    tags: ["Residential", "Living Rooms", "Penthouses"],
    location: "Worli Sea Face, Mumbai",
    year: "2024",
    area: "4,800 sq. ft",
    timeline: "6 Months",
    coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Formal Living Salon",
        caption: "Double-height formal lounge with recessed architectural cove lighting and travertine monolith fireplace.",
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80"
      },
      {
        room: "Gourmet Show Kitchen",
        caption: "Seamless matte graphite fluted joinery paired with waterfall Calacatta gold quartz.",
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80"
      },
      {
        room: "Master Bedroom Sanctuary",
        caption: "Custom fluted acoustic oak paneling, brushed bronze trims, and neutral boucle chaise.",
        url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80"
      },
      {
        room: "Dining Rotunda & Bar",
        caption: "Sculptural dining table in smoked eucalyptus with statement alabaster pendant.",
        url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    hotspots: [
      { x: 38, y: 52, label: "Honed Navona Travertine", detail: "20mm bookmatched Italian vein-cut travertine with concealed negative shadow gaps." },
      { x: 74, y: 34, label: "Recessed Magnetic Track", detail: "Flos Architectural 48V magnetic system with 2700K high-CRI museum grade beam." },
      { x: 55, y: 72, label: "Custom Boucle Sectional", detail: "Bespoke low-slung organic curved sofa upholstered in Belgian linen boucle." }
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      after: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      label: "Worli Duplex Transformation"
    },
    shortDesc: "A masterclass in quiet luxury, featuring double-height ceiling volumes, monolithic travertine, and bespoke walnut cabinetry overlooking the Arabian Sea.",
    overview: "Designed for an art connoisseur family, The Serene Pavilion transforms a bare-shell sea-facing penthouse into an expansive, light-drenched sanctuary. The design vocabulary leans into warm minimalism—replacing visual clutter with architectural honesty, sculptural geometries, and tactile textures.",
    challenge: "Maximizing ocean panoramic sightlines while managing coastal salt-air humidity, alongside integrating a museum-grade climate and art lighting system without visible conduits.",
    solution: "We engineered custom marine-grade champagne-anodized architectural louvers, coupled with low-glare magnetic track fixtures that frame artwork subtly without heating delicate canvases.",
    style: "Contemporary Warm Minimalism",
    materials: [
      "Honed Navona Travertine",
      "Smoked European Oak Veneer",
      "Brushed Champagne Brass Hardware",
      "Organic Linen and Boucle Upholstery",
      "Calacatta Gold Sintered Stone"
    ]
  },

  // 2. RESIDENTIAL: The Skylark Penthouse (Juhu)
  {
    id: "the-skylark-penthouse",
    title: "The Skylark Sky Villa",
    subtitle: "Double-Height Sea-Facing Sky Villa",
    category: "residential",
    categoryLabel: "Penthouse & Sky Villa",
    tags: ["Residential", "Penthouses", "Living Rooms"],
    location: "Juhu Tara Road, Juhu Beach, Mumbai",
    year: "2024",
    area: "6,200 sq. ft",
    timeline: "8 Months",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Great Room & Sunken Lounge",
        caption: "Seamless floor-to-ceiling slimline glass facade framing the Arabian Sea sunset.",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
      },
      {
        room: "Cantilevered Walnut Staircase",
        caption: "Floating treads anchored to a concealed structural steel stringer with frameless glass balustrade.",
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
      },
      {
        room: "Private Rooftop Plunge Terrace",
        caption: "Thermal ash decking with monolithic granite fire bowl and submerged water lounger.",
        url: "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    hotspots: [
      { x: 45, y: 40, label: "Double-Height Structural Glazing", detail: "Schüco motorized panoramic sliding facade with tropical solar-control Low-E coating." },
      { x: 68, y: 65, label: "Monolithic Sintered Plinth", detail: "Sculptural low plinth in brushed basalt hosting custom brass reading hearth." }
    ],
    shortDesc: "A breathtaking triplex sky villa capturing panoramic coastal sunsets with cantilevered walnut stairs and a sunken conversational hearth.",
    overview: "Crafted for a prominent film producer, The Skylark embraces theatrical proportions while preserving residential warmth. We opened the central living volume vertically, introducing a monumental light atrium that draws coastal daylight into the heart of the home.",
    challenge: "Handling heavy monsoon wind-load pressures on a 18th-floor sea-facing structural aperture.",
    solution: "Structural steel wind-posts integrated behind acoustic timber baffles, matched with German multi-point motorized perimeter seals.",
    style: "Modern Coastal Grandeur",
    materials: [
      "Imported Bianco Lasa Vena Oro Marble",
      "Quarter-Sawn American Walnut",
      "Dark Gunmetal Architectural Hardware",
      "Acoustic Linen Wall Panels"
    ]
  },

  // 3. LIVING ROOMS: The Minimalist Monolith (Bandra)
  {
    id: "the-minimalist-monolith",
    title: "The Minimalist Monolith",
    subtitle: "Modern Luxury Apartment",
    category: "living-rooms",
    categoryLabel: "Living Space Architecture",
    tags: ["Living Rooms", "Residential"],
    location: "Pali Hill, Bandra West, Mumbai",
    year: "2024",
    area: "3,200 sq. ft",
    timeline: "4.5 Months",
    coverImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Open-Plan Living Lounge",
        caption: "Curved sectional seating resting on a custom hand-knotted New Zealand wool rug.",
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
      },
      {
        room: "Architectural Reading Nook",
        caption: "Floor-to-ceiling recessed library wall finished in warm beige micro-cement.",
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    hotspots: [
      { x: 50, y: 60, label: "Seamless Micro-Cement Flooring", detail: "Continuous 3mm seamless micro-topping with warm matte polyurethane sealer." },
      { x: 30, y: 40, label: "Recessed Book Display Wall", detail: "Integrated soft 2400K LED ribbon concealed within curved plaster reveals." }
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80",
      after: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      label: "Bandra Apartment Overhaul"
    },
    shortDesc: "Monochromatic serenity where continuous micro-cement surfaces create an unbroken visual rhythm.",
    overview: "An uncompromising vision of seamless flow in Bandra's prime residential enclave. Doors are hidden within flush paneled wall surfaces, and functional storage is concealed behind flush acoustic timber slats to allow light and shadow to act as primary architectural ornaments.",
    challenge: "The original layout had low peripheral structural beams that fragmented the ceiling plane.",
    solution: "We designed a multi-tier acoustic micro-perforated tray ceiling with gentle perimeter curves, concealing air-conditioning plenums while creating soft ambient glow.",
    style: "Japandi & Brutalist Minimal",
    materials: [
      "Beige Micro-cement Walls",
      "White Oiled Ash Flooring",
      "Raw Cast Concrete Plinths",
      "Muted Olive Velvet Textiles"
    ]
  },

  // 4. LIVING ROOMS: The Amber Atrium (Khar West)
  {
    id: "the-amber-atrium",
    title: "The Amber Atrium",
    subtitle: "Sculptural Living Salon & Sun Gallery",
    category: "living-rooms",
    categoryLabel: "Living Space Architecture",
    tags: ["Living Rooms", "Residential"],
    location: "14th Road, Khar West, Mumbai",
    year: "2024",
    area: "2,400 sq. ft",
    timeline: "3.5 Months",
    coverImage: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Sunlit Conversation Lounge",
        caption: "Bespoke fluted travertine feature wall with custom curved camel wool velvet sofa.",
        url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=80"
      },
      {
        room: "Sculptural Reading Corner",
        caption: "Solid smoked oak statement lounge chair paired with architectural bronze floor luminaire.",
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    hotspots: [
      { x: 42, y: 55, label: "Curved Velvet Lounge", detail: "Handcrafted camel velvet sofa with memory-layer comfort core." },
      { x: 75, y: 35, label: "Fluted Limestone Wall", detail: "Precision CNC milled French limestone panels with zero visible seams." }
    ],
    shortDesc: "Golden hour tones, custom curved wool upholstery, and fluted French limestone celebrating warmth and texture.",
    overview: "Conceived as an antidote to cold urban spaces, The Amber Atrium uses a palette of butter-soft taupes, warm sandstones, and rich amber lighting. The spatial plan centers on conversational groupings rather than TV entertainment.",
    challenge: "Deep apartment footprint with limited natural light penetrating the inner central zone.",
    solution: "We installed architectural clerestory reeded glass transoms above internal partitions and integrated a tunable circadian ceiling skylight box.",
    style: "Warm Organic Modernism",
    materials: [
      "Chiseled French Limestone",
      "Camel Wool Upholstery",
      "Brushed Amber Brass",
      "Natural Jute & Sisal Floor Carpets"
    ]
  },

  // 5. LIVING ROOMS: The Brutalist Sanctuary (Cuffe Parade)
  {
    id: "the-brutalist-sanctuary",
    title: "The Brutalist Sanctuary",
    subtitle: "Raw Cast Concrete & Smoked Walnut Lounge",
    category: "living-rooms",
    categoryLabel: "Living Space Architecture",
    tags: ["Living Rooms", "Residential"],
    location: "Cuffe Parade, Colaba, Mumbai",
    year: "2024",
    area: "2,850 sq. ft",
    timeline: "4 Months",
    coverImage: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Concrete Horizon Great Room",
        caption: "Board-formed architectural concrete backdrop balanced by dark walnut cabinetry.",
        url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1600&q=80"
      },
      {
        room: "Sculptural Joinery & Bar",
        caption: "Concealed wet bar enclosed in hand-patinated bronze doors with Nero Marquina counter.",
        url: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    shortDesc: "A masterwork of honest materiality where board-formed concrete meets hand-patinated bronze and dark walnut.",
    overview: "For an architect-collector client in South Mumbai, this residence celebrates structural honesty. Every joint is exposed with surgical precision, juxtaposed against tactile shearling seating and soft acoustic drapery.",
    challenge: "Ensuring raw concrete aesthetic feels warm, luxurious, and acoustically insulated rather than echoey or cold.",
    solution: "Sub-surface acoustic dampening behind walnut battens, paired with high-pile silk-wool hand-woven rugs and dimmable 2200K graze lighting.",
    style: "Refined Brutalist Luxury",
    materials: [
      "Board-Formed Architectural Concrete",
      "Smoked American Walnut",
      "Hand-Patinated Bronze Plate",
      "Nero Marquina Marble"
    ]
  },

  // 6. KITCHENS: Atelier Culinaire (Altamount Road)
  {
    id: "atelier-culinaire",
    title: "Atelier Culinaire",
    subtitle: "Precision Modular Kitchen & Pantry",
    category: "kitchens",
    categoryLabel: "Modular Kitchen",
    tags: ["Kitchens", "Residential"],
    location: "Altamount Road, South Mumbai",
    year: "2023",
    area: "650 sq. ft",
    timeline: "2 Months",
    coverImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Gourmet Island & Breakfast Bar",
        caption: "Seamless matte black cabinetry with anti-fingerprint nanotech surface and integrated induction hob.",
        url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80"
      },
      {
        room: "Walk-in Butler's Pantry",
        caption: "Fluted smoked glass displays with automated sensor warm illumination.",
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    hotspots: [
      { x: 50, y: 55, label: "Dekton Laurent Worktops", detail: "12mm ultra-compact sintered stone resistant to high heat, scratches, and acidic stains." },
      { x: 30, y: 35, label: "Fenix NTM Anti-Fingerprint", detail: "Thermal healing nanotech laminate in ultra-matte Nero Ingo." }
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1600&q=80",
      after: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
      label: "Altamount Kitchen Metamorphosis"
    },
    shortDesc: "German precision hardware meets Italian porcelain slabs in an ergonomic culinary laboratory.",
    overview: "Crafted for an avid South Mumbai host. Every drawer, pocket door, and prep zone is calibrated according to strict kitchen work-triangle principles with smart appliance integration.",
    challenge: "Segregating wet heavy-spice Indian cooking from dry entertaining zones without disconnecting the chef from guests.",
    solution: "We created a concealed motorized double pocket sliding glass partition with fluted soundproof glazing that transitions from open island to isolated kitchen in seconds.",
    style: "Modern Industrial Elegance",
    materials: [
      "Fenix NTM Anti-Fingerprint Laminate",
      "Dekton Laurent Countertops",
      "Blum Legrabox Motorized Drawers",
      "Smoked Glass Cabinetry"
    ]
  },

  // 7. KITCHENS: The Nero Marquina Culinary Suite (Lower Parel)
  {
    id: "the-nero-marquina-kitchen",
    title: "The Nero Marquina Culinary Suite",
    subtitle: "Monolithic Black Quartz & Smoked Bronze Kitchen",
    category: "kitchens",
    categoryLabel: "Modular Kitchen",
    tags: ["Kitchens", "Residential"],
    location: "Lodha World One, Lower Parel, Mumbai",
    year: "2024",
    area: "780 sq. ft",
    timeline: "2.5 Months",
    coverImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Cantilevered Island & Prep Bar",
        caption: "Monolithic waterfall Nero Marquina island with touch-activated induction downdraft.",
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
      },
      {
        room: "Concealed Appliance Wall",
        caption: "Motorized vertical sliding tambour cabinets in fluted smoked bronze aluminium.",
        url: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    shortDesc: "A dramatic dark luxury culinary showpiece pairing waterfall black quartz with German motorized cabinetry.",
    overview: "Set in Lower Parel's iconic skyscraper, this kitchen acts as both a professional cooking station and a dramatic backdrop for evening cocktail parties.",
    challenge: "High ceiling height requiring specialized structural anchoring for cantilevered extractor hoods and wall cabinets.",
    solution: "Engineered overhead structural unistrut cage clad in seamless bronze sheets with integrated perimeter lighting.",
    style: "Dark Architectural Opulence",
    materials: [
      "Nero Marquina Quartzite",
      "Fluted Smoked Bronze Aluminium",
      "Integrated Gaggenau 400 Series",
      "Tinted Parsol Glass"
    ]
  },

  // 8. KITCHENS: The Nordic Hearth Kitchen (Powai)
  {
    id: "the-scandinavian-hearth",
    title: "The Nordic Hearth Kitchen",
    subtitle: "Seamless White Ash & Honed Terrazzo Open Kitchen",
    category: "kitchens",
    categoryLabel: "Modular Kitchen",
    tags: ["Kitchens", "Residential"],
    location: "Hiranandani Gardens, Powai, Mumbai",
    year: "2023",
    area: "580 sq. ft",
    timeline: "6 Weeks",
    coverImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Open Daylight Culinary Hub",
        caption: "Organic curved terrazzo island bar flanked by flush hand-rubbed white ash cabinets.",
        url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    shortDesc: "Effortless Scandinavian light-wood aesthetics paired with durable Italian terrazzo worktops.",
    overview: "Designed for a young creative couple who love family baking and weekend brunches. The focus is on natural illumination, open shelving for ceramic displays, and child-safe rounded corner joinery.",
    challenge: "Integrating maximum pantry capacity without making the space feel crowded.",
    solution: "Full-height bi-fold pocket pantry with internal power docks and automated sensor warm strips.",
    style: "Nordic Minimalist Warmth",
    materials: [
      "Solid Scandinavian White Ash",
      "Custom Honed Italian Terrazzo",
      "Brushed Nickel Fittings",
      "Acoustic Cork Drawer Liners"
    ]
  },

  // 9. BEDROOMS: The Luminary Suite (Prabhadevi)
  {
    id: "the-luminary-suite",
    title: "The Luminary Suite",
    subtitle: "Master Sanctuary & Walk-in Dressing Suite",
    category: "bedrooms",
    categoryLabel: "Master Bedroom Suite",
    tags: ["Bedrooms", "Residential"],
    location: "Prabhadevi, Mumbai",
    year: "2024",
    area: "950 sq. ft",
    timeline: "3 Months",
    coverImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Bedhead Architecture",
        caption: "Bespoke suede channel-tufted bedhead anchored between fluted walnut pillars.",
        url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80"
      },
      {
        room: "His & Hers Walk-In Dressing",
        caption: "Bronze aluminum framework with integrated leather-lined jewelry drawers.",
        url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    hotspots: [
      { x: 48, y: 48, label: "Acoustic Suede Bedhead", detail: "Sub-surface sound absorbing mineral core wrapped in Alcantara suede." },
      { x: 72, y: 30, label: "Biodynamic Circadian Sconces", detail: "Custom bronze sconces shifting from 4000K crisp day to 2000K candle night." }
    ],
    shortDesc: "A cocoon of tranquil tones, tactile fabrics, and circadian biodynamic lighting.",
    overview: "The primary suite is reimagined as a private retreat from the fast-paced city. Acoustic insulation on all perimeter walls drops ambient sound below 28dB, while circadian lighting adjusts color temperature across the day.",
    challenge: "An oddly proportioned rectangular footprint that felt like a corridor.",
    solution: "We zoned the space into three distinct functional volumes—Sleep, Lounge, and Wardrobe—separated by low-profile bronze divider screens that preserve airiness while creating intimacy.",
    style: "Contemporary Warm Luxury",
    materials: [
      "Natural Silk Wallpaper",
      "American Walnut Joinery",
      "Taupe Suede Panels",
      "Brushed Bronze Metal Trims"
    ]
  },

  // 10. BEDROOMS: The Kyoto Zen Retreat (Breach Candy)
  {
    id: "the-kyoto-zen-suite",
    title: "The Kyoto Zen Retreat",
    subtitle: "Japandi Master Sanctuary & Onsen Bath",
    category: "bedrooms",
    categoryLabel: "Master Bedroom Suite",
    tags: ["Bedrooms", "Residential"],
    location: "Breach Candy, South Mumbai",
    year: "2024",
    area: "1,100 sq. ft",
    timeline: "3 Months",
    coverImage: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Tatami Inspired Platform Suite",
        caption: "Low-slung solid Hinoki wood platform with integrated floating nightstands and woven paper blinds.",
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=80"
      },
      {
        room: "En-Suite Zen Sanctuary",
        caption: "Handcrafted river pebble mosaic flooring with freestanding basalt soaking vessel.",
        url: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    shortDesc: "Japandi simplicity inspired by Kyoto ryokans, incorporating natural cedar, tatami textures, and filtered paper glow.",
    overview: "Designed for mindful restoration overlooking Breach Candy's sea breeze. Screened partition walls let morning daylight filter softly across natural linen surfaces.",
    challenge: "Excessive street ambient noise and humidity control in an en-suite wet area.",
    solution: "Triple-glazed acoustic fenestrations and continuous microbial-resistant micro-cement throughout wet-to-dry transitions.",
    style: "Japandi Architectural Restraint",
    materials: [
      "Japanese Hinoki Cypress Wood",
      "Handmade Washi Paper Screens",
      "River Stone Mosaic",
      "Raw Unbleached Belgian Linens"
    ]
  },

  // 11. BEDROOMS: The Celestial Master Suite (Versova)
  {
    id: "the-celestial-master",
    title: "The Celestial Master Suite",
    subtitle: "Skyline Bedroom & Glass Dressing Salon",
    category: "bedrooms",
    categoryLabel: "Master Bedroom Suite",
    tags: ["Bedrooms", "Residential"],
    location: "Versova Bay View, Andheri West, Mumbai",
    year: "2024",
    area: "880 sq. ft",
    timeline: "2.5 Months",
    coverImage: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Skyline Bedroom Chamber",
        caption: "Curved headboard wrapped in pearl nubuck leather with perimeter floating bed platform.",
        url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    shortDesc: "Curved nubuck headboards, floating oak platforms, and sunset skyline panoramas.",
    overview: "A coastal high-rise retreat that maximizes panoramic horizon sightlines. Motorized blackout drapes emerge silently from concealed ceiling pockets at the touch of a keypad.",
    challenge: "Low structural beam intersecting the bed center line.",
    solution: "Created an organic sculptured ceiling vault that flows smoothly over the beam with indirect 2700K perimeter light troughs.",
    style: "Soft Luxury Modernism",
    materials: [
      "Pearl Nubuck Leather",
      "Bleached Rift-Cut Oak",
      "Brushed Rose Gold Accents",
      "Smoked Bronze Glass"
    ]
  },

  // 12. RESIDENTIAL: The Verona Villa (Alibaug)
  {
    id: "the-verona-villa",
    title: "The Verona Villa",
    subtitle: "Private 8,500 sq.ft Coastal Estate",
    category: "residential",
    categoryLabel: "Luxury Villa",
    tags: ["Residential", "Villas", "Living Rooms"],
    location: "Awas Beach Estate, Alibaug, Mumbai",
    year: "2023",
    area: "8,500 sq. ft",
    timeline: "11 Months",
    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Courtyard Living Hall",
        caption: "Floor-to-ceiling panoramic slimline glazing opening into an internal water courtyard.",
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
      },
      {
        room: "Formal Lounge & Library",
        caption: "Double volume ceiling featuring fluted acoustic timber ribs.",
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    hotspots: [
      { x: 35, y: 50, label: "Botticino Marble Flooring", detail: "Oversized 1200x1200mm honed Italian Botticino with continuous hairline joints." },
      { x: 70, y: 35, label: "Teak Verandah Rafters", detail: "Reclaimed seasoned Burma teak with natural tung oil weather protection." }
    ],
    shortDesc: "Seamless indoor-outdoor living framed by monumental columns and soothing reflection pools.",
    overview: "A coastal beach retreat that marries tropical modernism with Mediterranean masonry. Natural stone flooring extends outward from the living spaces into covered verandahs.",
    challenge: "Maintaining thermal comfort and high humidity resistance.",
    solution: "Deep overhangs, double-glazed low-e glass envelopes, and strategic placement of internal water bodies created passive cooling that dropped ambient temperature by 5°C.",
    style: "Modern Indo-Mediterranean",
    materials: [
      "Imported Botticino Marble",
      "Teak Timber Verandah Ceilings",
      "Hand-Chiseled Sandstone Feature Walls",
      "Natural Brass Ironmongery"
    ]
  },

  // 13. RESIDENTIAL: Casa Botânica (Khandala)
  {
    id: "casa-botanica-manor",
    title: "Casa Botânica",
    subtitle: "Courtyard Tropical Modern Villa",
    category: "residential",
    categoryLabel: "Luxury Villa",
    tags: ["Residential", "Villas"],
    location: "Khandala Foothills, Maharashtra",
    year: "2023",
    area: "10,200 sq. ft",
    timeline: "14 Months",
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Open Colonnade Verandah",
        caption: "Exposed basalt stone columns framing mist-covered Western Ghat mountain ridges.",
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
      },
      {
        room: "Great Living Pavilion",
        caption: "Poured terrazzo floor reflecting the internal Frangipani rain garden.",
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    shortDesc: "A sprawling tropical mountain villa organized around internal rain gardens and basalt colonnades.",
    overview: "Built into the undulating slope of the Khandala ridge, Casa Botânica blurs the boundary between interior architecture and lush monsoon landscape.",
    challenge: "Steep topography and intense heavy monsoon precipitation cycles.",
    solution: "Subterranean drainage cisterns combined with generous 3-meter overhang verandahs that shade rooms from glare and heavy rain.",
    style: "Tropical Brutalism",
    materials: [
      "Local Maharashtra Basalt Stone",
      "Cast On-Site White Terrazzo",
      "Seasoned Malabar Teak",
      "Copper Flashing & Rain Chains"
    ]
  },

  // 14. RESIDENTIAL: The Heritage Belvedere (Marine Drive)
  {
    id: "the-heritage-belvedere",
    title: "The Heritage Belvedere",
    subtitle: "Restored Art Deco Sea-View Residence",
    category: "residential",
    categoryLabel: "Art Deco Restoration",
    tags: ["Residential", "Living Rooms"],
    location: "Marine Drive Art Deco Precinct, Mumbai",
    year: "2024",
    area: "3,600 sq. ft",
    timeline: "7 Months",
    coverImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Art Deco Salon",
        caption: "Restored Burma teak herringbone flooring with stepped plaster ceiling cornices and brass bar.",
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    shortDesc: "Meticulous 1930s Mumbai Art Deco restoration blending heritage geometry with modern conveniences.",
    overview: "Located along Mumbai's UNESCO World Heritage coastal strip, this flat honors authentic Art Deco stepped moldings, restored cast iron handles, and vintage Burma teak woodwork.",
    challenge: "Aging 90-year-old masonry and plumbing infrastructure requiring complete seismic and structural reinforcement.",
    solution: "Sub-floor carbon fiber reinforcing paired with bespoke plumbing chases disguised behind reeded timber wainscoting.",
    style: "Mumbai Deco Revival",
    materials: [
      "Restored Burma Teak Parquet",
      "Cast Brass Hardware",
      "Reeded Fluted Glass",
      "Verde Guatemala Marble"
    ]
  },

  // 15. COMMERCIAL: Horizon Capital Studio (BKC)
  {
    id: "horizon-capital-office",
    title: "Horizon Capital Studio",
    subtitle: "Boutique Executive Headquarters",
    category: "commercial",
    categoryLabel: "Commercial / Office",
    tags: ["Commercial", "Offices"],
    location: "Bandra Kurla Complex (BKC), Mumbai",
    year: "2024",
    area: "5,200 sq. ft",
    timeline: "4 Months",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Boardroom & Strategy Suite",
        caption: "Monolithic quartz conference table with hidden wireless charging and recessed acoustic ceiling baffles.",
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      },
      {
        room: "Private Partner's Study",
        caption: "Deep charcoal cabinetry, leather executive desk, and private conversational lounge.",
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    shortDesc: "Hospitality-driven corporate interior blending private client salons with collaborative work hubs.",
    overview: "Designed for a boutique venture capital fund, this workspace feels more like a 5-star hotel club lounge than a standard corporate office. Curved timber partitions define spaces without blocking light.",
    challenge: "Balancing strict financial client confidentiality with the desire for an energetic, daylight-filled open workplace.",
    solution: "Smart switchable electrochromic PDLC privacy glass for boardrooms, paired with sound-masking ceiling transducers.",
    style: "Executive Modern Hospitality",
    materials: [
      "Dark Smoked Ash Veneer",
      "Acoustic Wool Felt Baffles",
      "Honed Grey Basalt Tiles",
      "Cognac Saddle Leather"
    ]
  },

  // 16. COMMERCIAL: Aëthel Wellness Sanctuary (Colaba)
  {
    id: "aethel-flagship-salon",
    title: "Aëthel Wellness & Aesthetic Clinic",
    subtitle: "Boutique Medical & Aesthetic Sanctuary",
    category: "commercial",
    categoryLabel: "Boutique Commercial & Wellness",
    tags: ["Commercial", "Offices"],
    location: "Kala Ghoda Arts District, Fort, Mumbai",
    year: "2024",
    area: "4,400 sq. ft",
    timeline: "5 Months",
    coverImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
    ],
    gallery: [
      {
        room: "Aesthetic Reception Lounge",
        caption: "Sculptural Roman clay vaulted ceiling with travertine consultation plinth.",
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80"
      }
    ],
    shortDesc: "A sanctuary of calm featuring monolithic travertine reception desks and curvilinear lime-wash walls.",
    overview: "Reimagining the clinical experience into a serene ritual of healing. The space replaces sterile white hospital finishes with organic chalk plasters, gentle acoustic dampening, and circadian illumination.",
    challenge: "Meeting rigorous medical sterilization standards while maintaining high aesthetic elegance.",
    solution: "Seamless anti-microbial epoxy-quartz flooring treated with silk-matte sealant that withstands medical sanitation agents without staining.",
    style: "Curvilinear Biophilic Sanctuary",
    materials: [
      "Mineral Lime-Wash Plaster",
      "Roman Travertine Blocks",
      "Seamless Medical Quartz",
      "Fluted Acoustic Felt"
    ]
  }
];

// Helper methods for project queries & searches
const ProjectRepository = {
  getAll: () => STUDIO_PROJECTS,
  getById: (id) => STUDIO_PROJECTS.find(p => p.id === id),
  getByCategory: (category) => {
    if (!category || category === "all") return STUDIO_PROJECTS;
    return STUDIO_PROJECTS.filter(p => 
      p.category === category || 
      (p.tags && p.tags.some(t => t.toLowerCase() === category.toLowerCase()))
    );
  },
  getCategories: () => [
    { key: "all", label: "All Projects" },
    { key: "residential", label: "Residential" },
    { key: "living-rooms", label: "Living Rooms" },
    { key: "kitchens", label: "Kitchens" },
    { key: "bedrooms", label: "Bedrooms" },
    { key: "commercial", label: "Commercial" }
  ],
  getCounts: () => {
    const counts = { all: STUDIO_PROJECTS.length };
    STUDIO_PROJECTS.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
      if (p.tags) {
        p.tags.forEach(t => {
          const lower = t.toLowerCase().replace(/\s+/g, "-");
          counts[lower] = (counts[lower] || 0) + 1;
        });
      }
    });
    return counts;
  },
  search: (query, category = "all") => {
    let list = ProjectRepository.getByCategory(category);
    if (!query || !query.trim()) return list;
    const q = query.trim().toLowerCase();
    return list.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.style.toLowerCase().includes(q) ||
      (p.materials && p.materials.some(m => m.toLowerCase().includes(q))) ||
      (p.gallery && p.gallery.some(g => g.room.toLowerCase().includes(q) || g.caption.toLowerCase().includes(q)))
    );
  },
  getTransformations: () => TRANSFORMATION_SHOWCASES
};

if (typeof window !== "undefined") {
  window.STUDIO_PROJECTS = STUDIO_PROJECTS;
  window.TRANSFORMATION_SHOWCASES = TRANSFORMATION_SHOWCASES;
  window.ProjectRepository = ProjectRepository;
  window.getOptimizedImageUrl = getOptimizedImageUrl;
  window.getResponsiveSrcset = getResponsiveSrcset;
}
