/**
 * =====================================================================
 * PROJECT INQUIRY FORM & WHATSAPP PREFILL (inquiry-form.js)
 * =====================================================================
 * Validates inputs, handles automatic prefilling from packages, services,
 * and portfolio, and builds the structured WhatsApp message.
 */

document.addEventListener("DOMContentLoaded", () => {
  initInquiryForm();
  handleUrlPrefillParams();
  initPackageCTAs();
  initServiceInquiryCTAs();
});

/**
 * Initializes form validation, multi-step progress, and WhatsApp builder
 */
function initInquiryForm() {
  const form = document.getElementById("projectInquiryForm");
  if (!form) return;

  const steps = form.querySelectorAll(".form-step-pane");
  const stepNodes = document.querySelectorAll(".step-node");
  let currentStep = 1;

  const showStep = (stepNumber) => {
    steps.forEach(step => {
      const sNum = parseInt(step.getAttribute("data-step"), 10);
      step.style.display = sNum === stepNumber ? "block" : "none";
    });

    stepNodes.forEach((node, idx) => {
      const nodeStep = idx + 1;
      node.classList.remove("active", "completed");
      if (nodeStep === stepNumber) {
        node.classList.add("active");
      } else if (nodeStep < stepNumber) {
        node.classList.add("completed");
      }
    });

    currentStep = stepNumber;
  };

  // Next Step Buttons
  form.querySelectorAll(".btn-next-step").forEach(btn => {
    btn.addEventListener("click", () => {
      if (validateStep(currentStep)) {
        showStep(currentStep + 1);
      }
    });
  });

  // Prev Step Buttons
  form.querySelectorAll(".btn-prev-step").forEach(btn => {
    btn.addEventListener("click", () => {
      showStep(currentStep - 1);
    });
  });

  // Form Submission via WhatsApp
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      submitToWhatsApp(form);
    }
  });

  // Step Validation logic
  function validateStep(step) {
    let isValid = true;
    if (step === 1) {
      const nameInput = form.querySelector("#inquiryFullName");
      const phoneInput = form.querySelector("#inquiryPhone");
      const nameErr = form.querySelector("#nameError");
      const phoneErr = form.querySelector("#phoneError");

      if (!nameInput.value.trim()) {
        nameErr.classList.add("active");
        nameInput.focus();
        isValid = false;
      } else {
        nameErr.classList.remove("active");
      }

      if (!phoneInput.value.trim() || phoneInput.value.trim().length < 8) {
        phoneErr.classList.add("active");
        if (isValid) phoneInput.focus();
        isValid = false;
      } else {
        phoneErr.classList.remove("active");
      }
    }
    return isValid;
  }
}

/**
 * Builds formatted text according to prompt guidelines and opens WhatsApp
 */
function submitToWhatsApp(form) {
  const cfg = window.STUDIO_CONFIG || {};
  const waNumber = cfg.whatsappNumber || "919699564112";

  // Gather Form Values
  const fullName = form.querySelector("#inquiryFullName")?.value.trim() || "";
  const phone = form.querySelector("#inquiryPhone")?.value.trim() || "";
  const email = form.querySelector("#inquiryEmail")?.value.trim() || "";
  const contactMethod = form.querySelector("input[name='preferredContact']:checked")?.value || "WhatsApp";

  const projectType = form.querySelector("#inquiryProjectType")?.value || "";
  const location = form.querySelector("#inquiryLocation")?.value.trim() || "";
  const area = form.querySelector("#inquiryArea")?.value.trim() || "";
  const bedrooms = form.querySelector("#inquiryBedrooms")?.value || "";
  const selectedPackage = form.querySelector("#inquiryPackage")?.value || "";
  const budget = form.querySelector("#inquiryBudget")?.value || "";
  const startDate = form.querySelector("#inquiryStartDate")?.value || "";
  const estimate = form.querySelector("#inquiryEstimatePrefill")?.value.trim() || "";
  const requirements = form.querySelector("#inquiryRequirements")?.value.trim() || "";

  // Selected Services
  const serviceCheckboxes = form.querySelectorAll("input[name='servicesRequired']:checked");
  const selectedServices = Array.from(serviceCheckboxes).map(cb => cb.value);

  // Build Formatted Message exactly as required
  let messageLines = [
    "Hello! I would like to inquire about your interior design services.",
    "",
    "MY CONTACT DETAILS",
    `Name: ${fullName}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    `Preferred Contact: ${contactMethod}`,
    "",
    "PROJECT DETAILS",
    projectType ? `Project Type: ${projectType}` : null,
    location ? `Project Location: ${location}` : null,
    area ? `Property Size: ${area} Sq. Ft.` : null,
    bedrooms ? `Number of Bedrooms: ${bedrooms}` : null,
    selectedPackage ? `Selected Package: ${selectedPackage}` : null,
    budget ? `Estimated Budget: ${budget}` : null,
    startDate ? `Expected Start Date: ${startDate}` : null
  ].filter(line => line !== null);

  if (selectedServices.length > 0) {
    messageLines.push("");
    messageLines.push("SERVICES REQUIRED");
    messageLines.push(selectedServices.map(s => `• ${s}`).join("\n"));
  }

  if (estimate) {
    messageLines.push("");
    messageLines.push("ESTIMATE, IF AVAILABLE");
    messageLines.push(`Calculated Indicative Estimate: ${estimate}`);
  }

  if (requirements) {
    messageLines.push("");
    messageLines.push("PROJECT REQUIREMENTS");
    messageLines.push(requirements);
  }

  messageLines.push("");
  messageLines.push("Please contact me to discuss my project, package inclusions, pricing, and the next steps.");
  messageLines.push("");
  messageLines.push("Thank you!");

  const rawMessage = messageLines.join("\n");
  const encodedMessage = encodeURIComponent(rawMessage);
  const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

  // Open WhatsApp in a new tab upon explicit user action
  window.open(waUrl, "_blank", "noopener,noreferrer");

  // Show honest on-screen confirmation
  const confirmationBox = document.getElementById("waSubmissionAlert");
  if (confirmationBox) {
    confirmationBox.classList.add("show");
    confirmationBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

/**
 * Reads URL search parameters to prefill fields (e.g. from service or package links)
 */
function handleUrlPrefillParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const packageParam = urlParams.get("package");
  const serviceParam = urlParams.get("service");
  const projectParam = urlParams.get("project");
  const areaParam = urlParams.get("area");
  const estimateParam = urlParams.get("estimate");
  const propertyTypeParam = urlParams.get("propertyType");
  const bedroomsParam = urlParams.get("bedrooms");

  const packageSelect = document.getElementById("inquiryPackage");
  const areaInput = document.getElementById("inquiryArea");
  const estimateInput = document.getElementById("inquiryEstimatePrefill");
  const propTypeSelect = document.getElementById("inquiryProjectType");
  const bedroomsSelect = document.getElementById("inquiryBedrooms");
  const reqTextarea = document.getElementById("inquiryRequirements");

  if (packageParam && packageSelect) {
    packageSelect.value = packageParam;
  }
  if (areaParam && areaInput) {
    areaInput.value = areaParam;
  }
  if (estimateParam && estimateInput) {
    estimateInput.value = estimateParam;
  }
  if (propTypeParam && propTypeSelect) {
    propTypeSelect.value = propTypeParam;
  }
  if (bedroomsParam && bedroomsSelect) {
    bedroomsSelect.value = bedroomsParam;
  }

  if (serviceParam) {
    // Check corresponding service checkbox
    const cb = document.querySelector(`input[name='servicesRequired'][value*='${serviceParam}']`);
    if (cb) cb.checked = true;
    if (reqTextarea) {
      reqTextarea.value = `I am specifically interested in inquiring about your "${serviceParam}" service.`;
    }
  }

  if (projectParam && reqTextarea) {
    reqTextarea.value = `I am interested in discussing a project similar to: "${projectParam}".`;
  }
}

/**
 * Connects package CTA buttons to preselect the package and scroll to inquiry
 */
function initPackageCTAs() {
  const packageBtns = document.querySelectorAll(".btn-select-package");
  packageBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const packageName = btn.getAttribute("data-package-name");
      const packageSelect = document.getElementById("inquiryPackage");
      const inquirySection = document.getElementById("inquiry-section");

      if (packageSelect && inquirySection) {
        packageSelect.value = packageName;
        inquirySection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `contact.html?package=${encodeURIComponent(packageName)}#inquiry-section`;
      }
    });
  });
}

/**
 * Connects service CTA buttons to prefill service and scroll to inquiry
 */
function initServiceInquiryCTAs() {
  const serviceBtns = document.querySelectorAll(".btn-enquire-service");
  serviceBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const serviceTitle = btn.getAttribute("data-service-title");
      const inquirySection = document.getElementById("inquiry-section");
      const reqTextarea = document.getElementById("inquiryRequirements");

      if (inquirySection) {
        if (reqTextarea) {
          reqTextarea.value = `I am interested in your "${serviceTitle}" service. Please provide further details on scope and consultation.`;
        }
        inquirySection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `contact.html?service=${encodeURIComponent(serviceTitle)}#inquiry-section`;
      }
    });
  });
}
