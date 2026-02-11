/* User actions: 
  1. Primary langauge radio button check
  2. "Compare with:" second language radio button check
  3. Data type select list selection (numbers, strings, etc.)
  4. Method select list selection (push, pop, etc.) ❓
  5. Form button submit - renders the page elements
  - The only other user action would be to open the docs sub-menu - I have moved that logic to menu.js 
  - Another possible user function would be a copy button on hover for the code blocks but that is a stretch goal
*/

/**
 * SELECT DOM ELEMENTS
 */
const detailsForm = document.getElementById('details-form');
const primaryRadios = document.querySelectorAll(
  'fieldset.primary-radio-group input[type="radio"]'
);
const secondaryRadios = document.querySelectorAll(
  'fieldset.secondary-radio-group input[type="radio"]'
);
const dataTypeSelect = document.getElementById('data-type');
const methods = document.getElementById('methods');
const h1 = document.getElementById('details-heading');

const state = {
  primaryDetails: '',
  secondaryDetails: '',
  dataType: '',
  method: ''
};

/**
 * * GLOBAL FUNCTIONS
 */
// 1. Set local storage for primary, secondary & h1 text
function setLocalStorage(key, val) {
	return localStorage.setItem(key, JSON.stringify(val));
}

// 2. Get local storage for primary, secondary & h1 text
function getLocalStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}

/**
 * * FUNCTIONS FOR EVENT LISTENERS
 */
// 1. On page visit
function initDetailsPage() {
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

// 4. Data type select list change
function handleDataTypeSelect(e) {
  // e.target.selectedIndex
  // e.target.options[e.target.selectedIndex].text
  console.log(e.target.value)
}

// 5. Data type select list change
function handleMethodSelect(e) {
  // e.target.selectedIndex
  // e.target.options[e.target.selectedIndex].text
  console.log(e.target.value)
}

// 6. Form submit
function handleDetailsFormSubmit(e) {
  e.preventDefault();
  console.log('Form submit')
}

/**
 * * HELPER FUNCTIONS
 */
// 1. ???

/**
 * * EVENT LISTENERS
 */
// 1. Load localStorage objects if they exist
document.addEventListener('DOMContentLoaded', initDetailsPage);

// 2. Radio button check for user's primary language
primaryRadios.forEach(radio =>
  radio.addEventListener('change', handlePrimaryCheck)
);

// 3. Radio button check for user's language to compare to their primary
secondaryRadios.forEach(radio =>
  radio.addEventListener('change', handleSecondaryCheck)
);

// 4. Select list for data type
dataTypeSelect.addEventListener('change', handleDataTypeSelect);

// 5. Select list for methods
methods.addEventListener('change', handleMethodSelect);

// 6. Form listener
detailsForm.addEventListener('submit', handleDetailsFormSubmit);