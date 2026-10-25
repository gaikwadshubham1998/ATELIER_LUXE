/**
 * =====================================================================
 * INTERIOR DESIGN COST CALCULATOR (calculator.js)
 * =====================================================================
 * Fully dynamic cost calculation using transparent rules defined in packages.js.
 * Updates real-time breakdowns, handles bespoke custom tiers, and transfers
 * calculated estimates into the project inquiry form.
 */

document.addEventListener("DOMContentLoaded", () => {
  initCostCalculator();
});

function initCostCalculator() {
  const calcForm = document.getElementById("interiorCostCalculatorForm");
  if (!calcForm || typeof window.CALCULATOR_RULES === "undefined") return;

  const areaInput = document.getElementById("calcAreaSqFt");
  const resultDisplay = document.getElementById("calcResultGrandTotal");
  const resultPackageName = document.getElementById("calcResultPackageName");
  const resultRateRow = document.getElementById("calcResultBaseRate");
  const resultSubtotalRow = document.getElementById("calcResultSubtotal");
  const resultAddonsRow = document.getElementById("calcResultAddons");
  const resultTaxRow = document.getElementById("calcResultTax");
  const resultNotice = document.getElementById("calcResultNotice");
  const transferBtn = document.getElementById("calcTransferToInquiryBtn");
  const customQuoteNotice = document.getElementById("calcCustomQuoteNotice");
  const standardCalcWrapper = document.getElementById("calcStandardBreakdownWrapper");

  const formatINR = (val) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  const runCalculation = () => {
    const propertyType = calcForm.querySelector("input[name='propertyType']:checked")?.value || "apartment";
    const areaSqFt = parseFloat(areaInput?.value) || 1200;
    const packageId = calcForm.querySelector("input[name='packageTier']:checked")?.value || "premium-interiors";
    const bedrooms = calcForm.querySelector("input[name='bedroomsCount']:checked")?.value || "3BHK";

    // Selected add-on checkboxes
    const addOnCheckboxes = calcForm.querySelectorAll("input[name='calcAddons']:checked");
    const addOnIds = Array.from(addOnCheckboxes).map(cb => cb.value);

    const calcResult = window.CALCULATOR_RULES.calculateEstimate({
      propertyType,
      areaSqFt,
      packageId,
      addOnIds
    });

    if (calcResult.isCustom) {
      if (standardCalcWrapper) standardCalcWrapper.style.display = "none";
      if (customQuoteNotice) {
        customQuoteNotice.style.display = "block";
        customQuoteNotice.innerHTML = `
          <div class="p-3 bg-white border rounded">
            <h5 class="font-serif mb-1">${escapeHtml(calcResult.packageName)}</h5>
            <p class="small text-muted mb-3">${escapeHtml(calcResult.message)}</p>
            <button type="button" class="btn btn-luxury-primary btn-sm w-100" id="btnBespokeInquire">
              ${escapeHtml(calcResult.callToAction)} <i class="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        `;
        document.getElementById("btnBespokeInquire")?.addEventListener("click", () => {
          transferQuoteToInquiry({
            propertyType,
            areaSqFt,
            bedrooms,
            packageName: calcResult.packageName,
            estimateDisplay: "Custom Architectural Quote"
          });
        });
      }
      return;
    }

    if (customQuoteNotice) customQuoteNotice.style.display = "none";
    if (standardCalcWrapper) standardCalcWrapper.style.display = "block";

    if (calcResult.error) {
      if (resultDisplay) resultDisplay.textContent = "—";
      return;
    }

    // Populate Results
    if (resultPackageName) resultPackageName.textContent = calcResult.packageName;
    if (resultRateRow) resultRateRow.textContent = `₹${calcResult.baseRateApplied} / sq.ft`;
    if (resultSubtotalRow) resultSubtotalRow.textContent = formatINR(calcResult.baseSubtotal);
    if (resultAddonsRow) resultAddonsRow.textContent = calcResult.addOnsTotal > 0 ? formatINR(calcResult.addOnsTotal) : "₹0 (None selected)";
    if (resultTaxRow) resultTaxRow.textContent = formatINR(calcResult.taxAmount);
    if (resultDisplay) resultDisplay.textContent = formatINR(calcResult.grandTotal);
    if (resultNotice) resultNotice.textContent = calcResult.indicativeNote;

    // Attach data to transfer button
    if (transferBtn) {
      transferBtn.onclick = () => {
        transferQuoteToInquiry({
          propertyType,
          areaSqFt,
          bedrooms,
          packageName: calcResult.packageName,
          estimateDisplay: formatINR(calcResult.grandTotal)
        });
      };
    }
  };

  // Listeners on all inputs
  calcForm.addEventListener("change", runCalculation);
  if (areaInput) {
    areaInput.addEventListener("input", (e) => {
      const slider = document.getElementById("calcAreaSlider");
      if (slider && !isNaN(e.target.value)) {
        slider.value = e.target.value;
      }
      runCalculation();
    });
  }

  // Initial Calculation
  runCalculation();
}

/**
 * Transfers the calculated estimate into the inquiry form
 */
function transferQuoteToInquiry(data) {
  const inquirySection = document.getElementById("inquiry-section");
  const propTypeField = document.getElementById("inquiryProjectType");
  const areaField = document.getElementById("inquiryArea");
  const bedroomsField = document.getElementById("inquiryBedrooms");
  const packageField = document.getElementById("inquiryPackage");
  const estimateField = document.getElementById("inquiryEstimatePrefill");

  if (propTypeField) propTypeField.value = data.propertyType;
  if (areaField) areaField.value = data.areaSqFt;
  if (bedroomsField) bedroomsField.value = data.bedrooms;
  if (packageField) packageField.value = data.packageName;
  if (estimateField) estimateField.value = data.estimateDisplay;

  if (inquirySection) {
    inquirySection.scrollIntoView({ behavior: "smooth" });
  } else {
    // Navigate to contact page with prefilled parameters
    const params = new URLSearchParams({
      propertyType: data.propertyType,
      area: data.areaSqFt,
      bedrooms: data.bedrooms,
      package: data.packageName,
      estimate: data.estimateDisplay
    });
    window.location.href = `contact.html?${params.toString()}#inquiry-section`;
  }
}
