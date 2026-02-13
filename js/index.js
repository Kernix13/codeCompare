"use strict";

const languageForm = document.getElementById('languageForm');
const select = document.getElementById('primaryLang');
const h1 = document.getElementById('heading');

const DISPLAY_NAMES = {
  javascript: 'JavaScript',
  python: 'Python',
  php: 'PHP',
  csharp: 'CSharp',
  dart: 'Dart'
};
const PRISM_LANG = {
  javascript: 'javascript',
  python: 'python',
  php: 'php',
  csharp: 'csharp',
  dart: 'javascript' // Dart fallback
};
const titleMap = {
  vars: 'Variables + Miscellaneous',
  numbers: 'Numbers',
  strings: 'Strings',
  arrays: 'Arrays',
  objects: 'Objects'
};
const state = { primary: '', checkedLangs: [], heading: '' };
const listData = { vars,  numbers, strings, arrays, objects };
const preData = { conditionals, loops, functions, classes };

/**
 * * DOM ELEMENT FUNCTIONS
 */
// 1. Create container and add content for the 5 ol > li sections
function createLiSection(data, sectionId, title) {
  const section = document.getElementById(sectionId);
  section.textContent = '';

  const grid = document.createElement('div');
  grid.className = `grid-${state.checkedLangs.length + 1}`;

  // Primary column
  renderLanguageColumn({
    data,
    language: state.primary,
    title,
    sectionEl: section,
    gridEl: grid,
    columnEl: createColumn('primary')
  });

  // Secondary columns
  state.checkedLangs.forEach(lang => {
    renderLanguageColumn({
      data,
      language: lang,
      title,
      sectionEl: section,
      gridEl: grid,
      columnEl: createColumn('secondary')
    });
  });
}

// 2. Create the column for each section and language
function createColumn(type) {
  const div = document.createElement('div');
  div.className = type;
  return div;
}

// 3. Create headings and render content
function renderLanguageColumn({ data, language, title, sectionEl, gridEl, columnEl }) {
  const h2 = document.createElement('h2');
  h2.textContent = DISPLAY_NAMES[language];

  const h3 = document.createElement('h3');
  h3.textContent = title;

  sectionEl.append(gridEl);
  gridEl.append(columnEl);

  const usesPre = [conditionals, loops, functions, classes].includes(data);

  if (!usesPre) {
    renderList(data, language, columnEl, h2, h3);
  } else {
    renderPre(data, language, columnEl, h2, h3);
  }
}

// 4. Create ol and li elements and append to DOM
function renderList(data, language, columnEl, h2, h3) {
  const prism = PRISM_LANG[language];
  if (!prism) return;

  const list = document.createElement('ol');
  columnEl.append(h2, h3, list);

  data[prism].forEach(item => {
    const li = document.createElement('li');
    const code = document.createElement('code');

    code.className = `custom-${prism}`;
    code.textContent = item;

    li.append(code);
    list.append(li);
  });
}

// 5. Create pre elements and append to DOM
function renderPre(data, language, columnEl, h2, h3) {
  const prism = PRISM_LANG[language];
  if (!prism) return;

  const pre = document.createElement('pre');
  const code = document.createElement('code');
  code.className = `language-${prism}`;
  code.textContent = data[language][0];

  pre.append(code);
  columnEl.append(h2, h3, pre);
}

/**
 * * EVENT LISTENER FUNCTIONS
 */

// 1. On page visit
function initHomePage() {
  // Initialize state from localStorage if available
  state.primary = getLocalStorage('primary') || '';
  state.checkedLangs = getLocalStorage('checkedLangs') || [];
  state.heading = getLocalStorage('h1') || 'Choose a primary language and at least 1 secondary language';

  h1.textContent = state.heading;

  // Select primary language on page load
  if (state.primary) {
    const selectedIdx = getLocalStorage('selection');
    select.options[selectedIdx].selected = true;
  }

  // Check the secondary language(s) on page load
  state.checkedLangs.forEach(val => {
    const checkbox = document.querySelector(`input[type="checkbox"][value="${val}"]`);
    if (checkbox) checkbox.checked = true;
  });

  // Render ol > li sections
  for (const [id, data] of Object.entries(listData)) {
    createLiSection(data, id, titleMap[id]);
  }

  // Render pre sections
  for (const [id, data] of Object.entries(preData)) {
    createLiSection(data, id, titleMap[id]);
  }
}

// 2. Select element change
function handlePrimaryChange() {
  state.primary = select.value;
  setLocalStorage('primary', state.primary);

  state.checkedLangs = [];
  setLocalStorage('checkedLangs', []);

  const boxes = document.querySelectorAll('input[type="checkbox"]');
  boxes.forEach(box => {
    box.disabled = (box.value === state.primary);
    box.checked = false; // uncheck previously checked boxes
  });

  // Update the heading placeholder to remind the user to select secondaries
  state.heading = 'Choose at least 1 secondary language';
  h1.textContent = state.heading;
  setLocalStorage('h1', state.heading);
}

// 3. Language form submit
function handleLanguageFormSubmit(e) {
  e.preventDefault();

  const primarySelection = select.value; 
  state.primary = primarySelection;

  const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
  state.checkedLangs = [...checkedBoxes]
    .filter(box => box.value !== primarySelection) // exclude primary
    .map(box => box.value);

  const primaryDisplay = select.options[select.selectedIndex].text;
  const secondaryDisplay = state.checkedLangs.map(l => DISPLAY_NAMES[l]);
  state.heading = `Compare ${primaryDisplay} to ${secondaryDisplay.join(' and ')}`;

  h1.textContent = state.heading;

  setLocalStorage('primary', state.primary);
  setLocalStorage('checkedLangs', state.checkedLangs);
  setLocalStorage('h1', state.heading);
  setLocalStorage('selection', select.selectedIndex);

  // Render ol > li sections
  for (const [id, data] of Object.entries(listData)) {
    createLiSection(data, id, titleMap[id]);
  }

  // Render pre sections
  for (const [id, data] of Object.entries(preData)) {
    createLiSection(data, id, titleMap[id]);
  }

  // Highlight code blocks with Prism
  Prism.highlightAll();
}

/**
 * * EVENT LISTENERS
 */

// 1. Load localStorage objects if they exist
document.addEventListener('DOMContentLoaded', initHomePage);

// 2. Select list
select.addEventListener('change', handlePrimaryChange);

// 3. form listener
languageForm.addEventListener('submit', handleLanguageFormSubmit);