/**
 * =====================================================================
 * CENTRAL BUSINESS CONFIGURATION (config.js)
 * =====================================================================
 * Studio information configured for Mumbai, Maharashtra.
 * All pages, forms, footers, and WhatsApp prefill mechanisms dynamically
 * read from this config.
 */

const STUDIO_CONFIG = {
  // Brand Identity
  businessName: "ATELIER LUXE",
  legalName: "Atelier Luxe Interior Architecture & Design Studio",
  tagline: "Spaces That Inspire. Designs That Feel Like Home.",
  subTagline: "High-End Residential Architecture & Contemporary Interior Design",
  wordmark: {
    primary: "ATELIER",
    secondary: "LUXE",
    suffix: "STUDIO"
  },
  logoPath: "assets/images/logo.svg",

  // Contact Information (Configured with User's Number)
  phone: "+91 96995 64112",
  phoneRaw: "919699564112",
  whatsappNumber: "919699564112",
  email: "concierge@atelierluxe.in",
  supportEmail: "design@atelierluxe.in",

  // Physical Location & Service Areas (Mumbai, Maharashtra)
  address: {
    street: "Suite 702, Lodha Supremus, Senapati Bapat Marg",
    locality: "Lower Parel",
    city: "Mumbai",
    postalCode: "400013",
    state: "Maharashtra",
    country: "India"
  },
  serviceAreas: [
    "South Mumbai (Worli, Malabar Hill, Cuffe Parade)",
    "Bandra, Khar & Juhu (West)",
    "Lower Parel & Prabhadevi",
    "Pali Hill & Carter Road",
    "Bandra Kurla Complex (BKC) & Powai",
    "Alibaug Luxury Coastal Estates"
  ],
  businessHours: "Mon – Sat: 10:00 AM – 7:30 PM | Sun: By Appointment Only",

  // External Links & Embeds (Mumbai, Maharashtra)
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15086.29944719602!2d72.825838!3d18.998634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8c9735d51d%3A0x6b779a1fbe7b3991!2sLower%20Parel%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Lodha+Supremus+Lower+Parel+Mumbai+Maharashtra+400013"
  },
  social: {
    instagram: "https://instagram.com/atelierluxe.interiors",
    facebook: "https://facebook.com/atelierluxe.studio",
    youtube: "https://youtube.com/@atelierluxedesign",
    pinterest: "https://pinterest.com/atelierluxe"
  },

  // Consultation & Website URL
  websiteUrl: "https://www.atelierluxe.in",
  consultationUrl: "#inquiry-section",

  // SEO Defaults
  seo: {
    defaultTitle: "ATELIER LUXE | Luxury Interior Architecture & Modern Home Design Mumbai",
    defaultDescription: "Premier interior architecture studio crafting bespoke residences, penthouses, luxury modular kitchens, and private sanctuaries across Mumbai.",
    keywords: "Luxury Interior Designers Mumbai, South Mumbai Penthouses, Worli Interior Architecture, Bandra West Homes, Modular Kitchens Mumbai"
  }
};

// Export to window for vanilla JS access across all pages
if (typeof window !== "undefined") {
  window.STUDIO_CONFIG = STUDIO_CONFIG;
}
