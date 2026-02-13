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

const frameworks = {
  React,
  Vue,
  Svelte,
  Angular,
  Django,
  Laravel,
  ASP
};

const state = {
  primaryFW: '',
  secondaryFW: '',
  heading: ''
};

/**
 * * FUNCTIONS FOR EVENT LISTENERS
 */
// 1. On page visit
function initFrameworksPage() {
  console.log('DOMContentLoaded')
  state.primaryFW = getLocalStorage('primary-fw') || '';
  state.secondaryFW = getLocalStorage('secondary-fw') || '';
  state.heading = getLocalStorage('fw-heading') || 'Choose a primary framework and a secondary framework';

  h1.textContent = state.heading;
  
}

// 2. Primary radio button check
function handlePrimaryCheck(e) {
  if (!e.target.checked) return;
  console.log(e.target.value)

  state.primaryFW = e.target.value;
  setLocalStorage('primary-fw', state.primaryFW);
}

// 3. Secondary radio button check
function handleSecondaryCheck(e) {
  if (!e.target.checked) return;
  console.log(e.target.value);

  state.secondaryFW = e.target.value;
  setLocalStorage('secondary-fw', state.secondaryFW);
}

// 4. Form submit
function handleFrameworksFormSubmit(e) {
  e.preventDefault();
  console.log(e)

  state.detailsPrimary
  const primaryFramewrok = getLocalStorage('primary-fw');
  const secondaryFramewrok = getLocalStorage('secondary-fw');
  state.heading = `Compare ${primaryFramewrok} to ${secondaryFramewrok}`;
  h1.textContent = state.heading;

  setLocalStorage('fw-heading', state.heading);
}

/**
 * * EVENT LISTENERS
 */
// 1. Load localStorage objects if they exist
document.addEventListener('DOMContentLoaded', initFrameworksPage);

// 2. Radio button check for user's primary language
primaryRadios.forEach(radio => {
  radio.addEventListener('change', handlePrimaryCheck);
  getLocalStorage('primary-fw') === radio.value 
    ? radio.checked = true 
    : false;
});

// 3. Radio button check for user's language to compare to their primary
secondaryRadios.forEach(radio => {
  radio.addEventListener('change', handleSecondaryCheck);
  getLocalStorage('secondary-fw') === radio.value 
    ? radio.checked = true 
    : false;
});

// 4. form listener
frameworksForm.addEventListener('submit', handleFrameworksFormSubmit);