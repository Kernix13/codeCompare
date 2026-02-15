"use strict";

const detailsForm = document.getElementById('details-form');
const primaryRadios = document.querySelectorAll(
  'fieldset.primary-radio-group input[type="radio"]'
);
const secondaryRadios = document.querySelectorAll(
  'fieldset.secondary-radio-group input[type="radio"]'
);
const dataTypeSelect = document.getElementById('data-type');
const methodsSelect = document.getElementById('methods');
const h1 = document.getElementById('details-heading');
const compareDetails = document.getElementById('compare-details');

const state = { 
  detailsPrimary: '', 
  detailsSecondary: '', 
  dataType: '', 
  method: '' ,
  heading: ''
};

const languages = {
  JavaScript,
  PHP,
  Python,
  CSharp
};

/**
 * * DOM ELEMENT FUNCTIONS
 */
// 1. Create the column for each section and language
function createColumn(type) {
  const div = document.createElement('div');
  div.className = type;
  return div;
}

// 2. Render language & keywords headings, and pre blocks
function renderlanguageColumns(methodIdx = 0) {
  const primaryLang = getLocalStorage('details-primary');
  const secondaryLang = getLocalStorage('details-secondary');
  const dataType = getLocalStorage('data-type');
  // This needs to be moved in the form submit listener
  const method = getLocalStorage('method-selection');
  console.log('method-selection:', method);   

  const arrPrimary = detailsPre[primaryLang][dataType];
  const arrSecondary = detailsPre[secondaryLang][dataType];

  compareDetails.innerHTML = '';

  if (method > 0) {
    // code here to return only code blocks tthat have the method name in the keywords array
  }

  arrPrimary.forEach((_, i) => {

    const grid = document.createElement('div');
    grid.className = 'grid-2';

    const primaryDiv = createColumn('primary');
    const secondaryDiv = createColumn('secondary');

    // Render primary block
    createLanguageColumn([arrPrimary[i]], primaryLang, primaryDiv);

    // Render secondary block
    createLanguageColumn([arrSecondary[i]], secondaryLang, secondaryDiv);

    grid.append(primaryDiv, secondaryDiv);
    compareDetails.append(grid);
  });
}

renderlanguageColumns();

// 3. Create the elements and content for each column
function createLanguageColumn(arr, language, el) {

  arr.forEach(item => {

    const keywords = item.keywords.join(', ');
    const preContent = item.code;

    const h2 = document.createElement('h2');
    h2.textContent = language;

    const h3 = document.createElement('h3');
    h3.textContent = keywords;

    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.className = `language-${language.toLowerCase()}`;
    code.textContent = preContent;

    pre.append(code);
    el.append(h2, h3, pre);
  });

  return el;
}

// 4. Create and addd Function/Method options into select#methods
function createOptions() {
  methodsSelect.textContent = '';
  const primaryLang = getLocalStorage('details-primary'); // 'JavaScript'
  const selectedDataType = getLocalStorage('data-type'); // 'Array
  const langObj = languages[primaryLang];

  // First option
  const firstOption = document.createElement('option');
  firstOption.textContent = 'ALL METHODS';
  firstOption.value = '';
  methodsSelect.append(firstOption);

  if (langObj) {
    langObj[selectedDataType].filter(Boolean).forEach(method => {
      // console.log(method);
      const option = document.createElement('option');
      option.textContent = method;
      option.value = method;
      methodsSelect.append(option);
    });
  }
  
}

/**
 * * FUNCTIONS FOR EVENT LISTENERS
 */
// 1. On page visit
function initDetailsPage() {
  console.log('DOMContentLoaded');
  state.detailsPrimary = getLocalStorage('details-primary') || '';
  state.detailsSecondary = getLocalStorage('details-secondary') || '';
  state.dataType = getLocalStorage('data-type') || '';
  state.method = getLocalStorage('method') || '';
  state.heading = getLocalStorage('details-heading') || 'Choose a primary language and a secondary language';

  h1.textContent = state.heading;

  const firstOption = document.createElement('option');
  firstOption.textContent = 'ALL METHODS'; 
  firstOption.value = '';                
  methodsSelect.appendChild(firstOption);

  // Select data type and method on page load from localStorage
  if (state.detailsPrimary) {
    const selectedTypeIdx = getLocalStorage('type-selection') || '';
    dataTypeSelect.options[selectedTypeIdx].selected = true;
  }

  createOptions(); // now methodsSelect.options exists

  // 2. Select previously saved method
  const selectedMethodIdx = getLocalStorage('method-selection');
  if (selectedMethodIdx !== null && methodsSelect.options[selectedMethodIdx]) {
    methodsSelect.options[selectedMethodIdx].selected = true;
  }

}

// 2. Primary language radio button check
function handlePrimaryCheck(e) {
  if (!e.target.checked) return;
  console.log(e.target.value);
  
  state.detailsPrimary = e.target.value;
  setLocalStorage('details-primary', state.detailsPrimary);

  createOptions()
}

// 3. Secondary language radio button check
function handleSecondaryCheck(e) {
  if (!e.target.checked) return;
  console.log(e.target.value);

  state.detailsSecondary = e.target.value;
  setLocalStorage('details-secondary', state.detailsSecondary);
}

// 4. Data type select list change  
function handleDataTypeSelect(e) {
  state.dataType = e.target.value;
  console.log(e.target.value)
  setLocalStorage('data-type', state.dataType);

  const select = document.querySelector('#methods');
  select.innerHTML = '';

  createOptions();
}

// 5. Data type select list change
function handleMethodSelect(e) {
  // e.target.selectedIndex
  // e.target.options[e.target.selectedIndex].text
  // I need to populate this list first
  console.log(e.target.value)
}

// 6. Form submit
function handleDetailsFormSubmit(e) {
  e.preventDefault();
  
  setLocalStorage('type-selection', dataTypeSelect.selectedIndex);
  setLocalStorage('method-selection', methodsSelect.selectedIndex);

  state.detailsPrimary
  const primaryDisplay = getLocalStorage('details-primary');
  const secondaryDisplay = getLocalStorage('details-secondary');
  const dataType = getLocalStorage('data-type');
  state.heading = `Compare ${primaryDisplay} to ${secondaryDisplay} (${dataType})`;
  h1.textContent = state.heading;

  setLocalStorage('details-heading', state.heading);
  renderlanguageColumns();

  // Highlight code blocks with Prism
  Prism.highlightAll();
}

/**
 * * EVENT LISTENERS
 */
// 1. Load localStorage objects if they exist
document.addEventListener('DOMContentLoaded', initDetailsPage);

// 2. Radio button check for user's primary language
primaryRadios.forEach(radio => {
  radio.addEventListener('change', handlePrimaryCheck);

  getLocalStorage('details-primary') === radio.value 
    ? radio.checked = true 
    : false;
});

// 3. Radio button check for user's language to compare to their primary
secondaryRadios.forEach(radio => {
  radio.addEventListener('change', handleSecondaryCheck);

  getLocalStorage('details-secondary') === radio.value 
    ? radio.checked = true 
    : false;

});

// 4. Select list for data type
dataTypeSelect.addEventListener('change', handleDataTypeSelect);

// 5. Select list for methods
methodsSelect.addEventListener('change', handleMethodSelect);

// 6. Form listener
detailsForm.addEventListener('submit', handleDetailsFormSubmit);





