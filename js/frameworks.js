/* User actions: 
  1. Primary framework radio button check
  2. Secondary framework radio button check
  3. Form button submit - renders the page elements
  - Copy button on hover for the code blocks?
*/

/**
 * SELECT DOM ELEMENTS
 */
const frameworksForm = document.getElementById('frameworks-form');
const primaryRadios = document.querySelectorAll(
  'fieldset.primary-radio-group input[type="radio"]'
);
const secondaryRadios = document.querySelectorAll(
  'fieldset.secondary-radio-group input[type="radio"]'
);
const h1 = document.getElementById('frameworks-heading'); 

const state = {
  primaryFW: '',
  secondaryFW: ''
};

/**
 * * FUNCTIONS FOR EVENT LISTENERS
 */
// 1. On page visit
function initFrameworksPage() {
  console.log('DOMContentLoaded')
}

// 2. Primary radio button check
function handlePrimaryCheck(e) {
  if (!e.target.checked) return;
  console.log(e.target.value)
}

// 3. Secondary radio button check
function handleSecondaryCheck(e) {
  if (!e.target.checked) return;
  console.log(e.target.value)
}

// 4. Form submit
function handleFrameworksFormSubmit(e) {
  e.preventDefault();
  console.log('Form submit')
}

/**
 * * EVENT LISTENERS
 */
// 1. Load localStorage objects if they exist
document.addEventListener('DOMContentLoaded', initFrameworksPage);

// 2. Radio button check for user's primary language
primaryRadios.forEach(radio =>
  radio.addEventListener('change', handlePrimaryCheck)
);

// 3. Radio button check for user's language to compare to their primary
secondaryRadios.forEach(radio =>
  radio.addEventListener('change', handleSecondaryCheck)
);

// 4. form listener
frameworksForm.addEventListener('submit', handleFrameworksFormSubmit);