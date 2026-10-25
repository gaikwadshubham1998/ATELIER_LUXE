# ATELIER LUXE — Luxury Interior Architecture & Design Studio Website

A world-class, production-ready, editorial multi-page website custom-built for high-end interior designers, architectural studios, and luxury turnkey home builders.

Built with **HTML5, CSS3 (Vanilla Design System), Bootstrap 5.3, Vanilla JavaScript (ES6+), GSAP & ScrollTrigger, Swiper.js, and Google Fonts**.

---

## 1. Project Overview & Architecture

```
interior-design-studio/
│
├── index.html                  # Homepage (Hero, About, Services, Gallery, Packages, Calculator, Process, Reels, Reviews, WhatsApp Inquiry, Map)
├── about.html                  # About Studio (Ethos, Principles, Joinery Craftsmanship)
├── services.html               # Complete Services Catalog & Deliverables
├── portfolio.html              # Portfolio Gallery with Live Category Filtering & Lightbox
├── project-details.html        # Dynamic Architectural Project Case Study Template
├── packages.html               # 4 Tiers, Expandable Price Breakdowns & Comparison Matrix
├── contact.html                # Inquiry Form with Multi-Step WhatsApp Prefill & Location
├── privacy-policy.html         # Privacy Policy & Data Processing Disclosures
├── terms.html                  # Terms of Service & Warranty Conditions
│
├── css/
│   ├── style.css               # Core Design System, Variables, Typography & Components
│   ├── responsive.css          # Responsive Breakpoints (320px to 1600px+)
│   └── animations.css          # GSAP Timelines, Fallbacks & Reduced-Motion Rules
│
├── js/
│   ├── config.js               # Centralized Business Identity, Phone, WhatsApp, Maps & Social
│   ├── projects.js             # Structured Project Repository & Room Gallery Data
│   ├── packages.js             # Package Tiers, Breakdowns, Comparison Matrix & Calculator Rules
│   ├── main.js                 # Header Scroll, Dynamic Year, Mobile Nav, Feedback Handler
│   ├── gallery.js              # Masonry Filtering, Lightbox (Touch/Keys) & Details Hydration
│   ├── calculator.js           # Real-Time Interior Cost Calculator Engine
│   ├── inquiry-form.js         # Multi-Step Validation, Prefill Listener & WhatsApp Formatter
│   └── animations.js          # GSAP ScrollTrigger & IntersectionObserver Fallbacks
│
├── assets/
│   ├── images/
│   │   └── logo.svg            # Vector Architectural Monogram Logo
│   └── icons/
│
├── robots.txt                  # Technical SEO Crawler Rules
├── sitemap.xml                 # Search Engine Sitemap
└── README.md                   # Full Documentation & Configuration Manual
```

---

## 2. Quick Local Setup

The website requires no complex Node build step or Webpack bundler. You can run it immediately using any static web server:

### Option A: Using Python (Built-in)
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

### Option B: Using Node (`npx serve`)
```bash
npx -y serve . -p 3000
```
Then visit: `http://localhost:3000`

### Option C: VS Code Live Server
Right-click on `index.html` and choose **"Open with Live Server"**.

---

## 3. How to Customize Business Information

All core studio information is centralized in **`js/config.js`**. You do not need to modify multiple HTML files.

Open `js/config.js` to change:
- **`businessName`**: Studio brand title
- **`phone`**: Formatted phone number (e.g., `+91 96995 64112`)
- **`whatsappNumber`**: WhatsApp number in international format **without '+' or spaces** (e.g., `919699564112`)
- **`email`**: Studio concierge email
- **`address`**: Physical address, city, postal code
- **`serviceAreas`**: List of cities served
- **`maps.embedUrl`**: Google Maps iframe embed URL
- **`social`**: Instagram, Facebook, YouTube, and Pinterest profile links

---

## 4. How to Update Packages & Calculator Pricing

All pricing tiers, line-item breakdowns, and calculator rates are configured in **`js/packages.js`**:

1. **Package Tiers (`STUDIO_PACKAGES`)**:
   - Change package title, badge ("Most Popular", "Turnkey Build"), rates per sq.ft, or turnaround time.
   - Edit the `breakdown` array to add or remove line items in the expandable breakdown section.
2. **Comparison Matrix (`PACKAGE_COMPARISON`)**:
   - Edit criteria rows comparing consultation, 3D renders, drawings, site supervision, and warranty.
3. **Cost Calculator (`CALCULATOR_RULES`)**:
   - Adjust `ratePerSqFt` for each package.
   - Adjust `propertyTypeMultipliers` (Apartment: 1.0, Villa: 1.15, etc.).
   - Configure add-on pricing (e.g., VR Walkthroughs, Home Automation).

---

## 5. How to Add or Edit Portfolio Projects

To add a new project, simply append an object to `STUDIO_PROJECTS` in **`js/projects.js`**:

```javascript
{
  id: "your-project-slug",
  title: "The Glass House",
  subtitle: "Modern Luxury Villa",
  category: "residential", // "residential", "living-rooms", "kitchens", "bedrooms", "commercial"
  categoryLabel: "Luxury Villa",
  tags: ["Residential", "Villas"],
  location: "Worli Sea Face, Mumbai",
  year: "2024",
  area: "6,500 sq. ft",
  timeline: "8 Months",
  coverImage: "assets/images/projects/your-cover.webp",
  gallery: [
    {
      room: "Double Volume Living Lounge",
      caption: "Italian travertine feature wall with custom brass lighting.",
      url: "assets/images/projects/your-living.webp"
    }
  ],
  overview: "Detailed project background...",
  challenge: "Structural challenge encountered...",
  solution: "Architectural solution delivered...",
  style: "Warm Contemporary Minimalist",
  materials: ["Travertine Navona", "Smoked Oak", "Champagne Metal"]
}
```
The homepage showcase, portfolio filters, lightbox viewer, and `project-details.html?id=your-project-slug` will automatically display the new project!

---

## 6. How the WhatsApp Inquiry Flow Works

1. Visitors complete the multi-step or single-page inquiry form on the homepage or `contact.html`.
2. When the user clicks **"Send Inquiry on WhatsApp"**:
   - Required fields (Full Name, Phone) are validated.
   - If user clicked a package CTA, service CTA, or calculator quote, the fields are already prefilled!
   - A structured, human-readable WhatsApp message is assembled:
     ```text
     Hello! I would like to inquire about your interior design services.

     MY CONTACT DETAILS
     Name: [Full Name]
     Phone: [Phone Number]
     Email: [Email Address]

     PROJECT DETAILS
     Project Type: [Project Type]
     Project Location: [City]
     Property Size: [Area in Sq. Ft.]
     Number of Bedrooms: [Number]
     Selected Package: [Package Name]
     Estimated Budget: [Budget Range]
     Expected Start Date: [Date]

     SERVICES REQUIRED
     [Selected Services]

     ESTIMATE, IF AVAILABLE
     [Calculated Indicative Estimate]

     PROJECT REQUIREMENTS
     [Additional Details]
     ```
   - The message is encoded via `encodeURIComponent()`.
   - The official WhatsApp click-to-chat URL (`https://wa.me/919699564112?text=...`) opens in a new tab upon explicit user action.
   - An on-screen confirmation informs the client: *"Your inquiry has been prepared in WhatsApp. Please review the details and press Send to share them with our team."*

---

## 7. Pre-Launch Checklist

- [ ] Update `js/config.js` with verified business phone and WhatsApp number (`91XXXXXXXXXX`).
- [ ] Update Google Maps embed URL with your exact studio address.
- [ ] Replace demo client testimonials in `index.html` with verified homeowner feedback.
- [ ] Add authentic high-resolution project photography into `assets/images/` and update `js/projects.js`.
- [ ] Verify package inclusions and turnkey rates in `js/packages.js`.
- [ ] Update canonical domain in `index.html`, `sitemap.xml`, and `robots.txt`.
- [ ] Test on mobile, tablet, and desktop viewports.

---

## 8. Deployment Options

Since this website is built with clean static standards:
1. **Vercel / Netlify / Cloudflare Pages**: Connect your GitHub repository; zero build configuration needed.
2. **AWS S3 + CloudFront**: Upload the workspace folder directly to an S3 bucket with static website hosting.
3. **Traditional cPanel / Apache / Nginx**: Upload files via SFTP directly to `public_html/`.
