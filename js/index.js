"use strict";


const languageForm = document.getElementById('languageForm');
const select = document.getElementById('primaryLang');
const h1 = document.querySelector('h1');

const STATE_KEY = 'codeCompareState';
const LANGUAGE_CONFIG = {
  JavaScript: { id: 'javascript', prism: 'javascript' },
  Python: { id: 'python', prism: 'python' },
  PHP: { id: 'php', prism: 'php' },
  CSharp: { id: 'csharp', prism: 'csharp' },
  Dart: { id: 'dart', prism: 'javascript' } // Prism fallback
};


/**
 * * FUNCTIONS
 */
// 1. Set local storage for form selections and for H1 text
function setLocalStorage(key, val) {
	return localStorage.setItem(key, JSON.stringify(val));
}

// 2. Get local storage for primary, secondary & h1 text
function getLocalStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}

// 3. On page visit
function initHomePage() {
  const h1Text = getLocalStorage('h1');
  if (!h1Text) {
    setLocalStorage('h1', 'Choose a primary language and at least 1 secondary language');
  } else {
    h1.textContent = getLocalStorage('h1');
    // Select primary language on page load
    const selectedIdx = Number(getLocalStorage('selection'));
    select.options[selectedIdx].selected = true;

    const langs = getLocalStorage('checkedLangs');

    // Check the secondary language(s) on page load
    langs.forEach(val => {
      const checkbox = document.querySelector(`input[type="checkbox"][value="${val}"]`);
      if (checkbox) checkbox.checked = true;
    });

    // Create list item sections
    createLiSection(vars, 'vars', 'Variables + Miscellaneous');
    createLiSection(numbers, 'numbers', 'Numbers');
    createLiSection(strings, 'strings', 'Strings');
    createLiSection(arrays, 'arrays', 'Arrays');
    createLiSection(objects, 'objects', 'Objects');
    // Create pre tag sections
    createLiSection(conditionals, 'conditionals', 'Conditionals');
    createLiSection(loops, 'loops', 'Loops');
    createLiSection(functions, 'functions', 'Functions');
    createLiSection(classes, 'classes', 'Classes');
  }
}

// 4. Create container and add content for the 5 ol > li sections
function createLiSection(data, sectionId, title) {
  const section = document.getElementById(sectionId);
  section.textContent = '';

  const primary = getLocalStorage('primary');
  const secondary = getLocalStorage('checkedLangs') || [];

  const grid = document.createElement('div');
  grid.className = `grid-${secondary.length + 1}`;

  renderLanguageColumn({
    data,
    language: primary,
    title,
    sectionEl: section,
    gridEl: grid,
    columnEl: createColumn('primary')
  });

  secondary.forEach(lang => {
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

// 5. Create the column for each section and language
function createColumn(type) {
  const div = document.createElement('div');
  div.className = type;
  return div;
}

// 6. Create headings and render content
function renderLanguageColumn({ data, language, title, sectionEl, gridEl, columnEl }) {
  const h2 = document.createElement('h2');
  h2.textContent = language;

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

// 7. Create ol and li elements and append to DOM
function renderList(data, language, columnEl, h2, h3) {
  const list = document.createElement('ol');
  columnEl.append(h2, h3, list);

  const key = LANGUAGE_CONFIG[language].id;

  data[key].forEach(item => {
    const li = document.createElement('li');
    const code = document.createElement('code');

    const langId = LANGUAGE_CONFIG[language]?.id || language.toLowerCase();
    code.className = `custom-${langId}`;
    code.textContent = item;

    li.append(code);
    list.append(li);
  });
}

// 7. Create pre elements and append to DOM
function renderPre(data, language, columnEl, h2, h3) {

  const { prism, id } = LANGUAGE_CONFIG[language];

  const pre = document.createElement('pre');
  // pre.tabIndex = 0;

  const code = document.createElement('code');
  code.className = `language-${prism}`;
  code.textContent = data[id][0];

  pre.append(code);
  columnEl.append(h2, h3, pre);
}

/**
 * * EVENT LISTENERS
 */

// 1. Load localStorage objects if they exist
document.addEventListener('DOMContentLoaded', initHomePage);

// 2. Select list 
select.addEventListener('change', e => {
  const checkedLanguages = getLocalStorage('checkedLangs') || []
  if (checkedLanguages.length > 0) {
    setLocalStorage('checkedLangs', [])
  }
  const selectedvalue = select.options[select.selectedIndex].value;
  setLocalStorage('selected-primary', selectedvalue)

  const boxes = document.querySelectorAll('input[type="checkbox"]');

  const disabled = [...boxes].filter(box => box.id === selectedvalue).map(box => box.disabled = true);
  const primarySelection = [...boxes].filter(box => box.id === selectedvalue)

  // I need to somehow maintain the disabled attribute and only remove it when the user picks a different primary language or clears LS
})

// 3. form listener
languageForm.addEventListener('submit', e => {
  e.preventDefault();
  
  // Get the text for the selected primary language - save to LS
  const selectedText = select.options[select.selectedIndex].text;

  setLocalStorage('selection', select.selectedIndex)
  setLocalStorage('primary', selectedText)

  // Get the checked boxes and save to LS
  const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
  const checkedValues = [...checkedBoxes]
    .filter(box => box.value !== selectedText)
    .map(box => box.value);
  setLocalStorage('checkedLangs', checkedValues)

  // Set the h1 textContent for the user choices
  const headingText = `Compare ${selectedText} to ${checkedValues.join(' and ')}`;

  // Save the heading text to LS
  setLocalStorage('h1', headingText)
  h1.textContent = getLocalStorage('h1');

  // Create list item sections
  createLiSection(vars, 'vars', 'Variables + Miscellaneous');
  createLiSection(numbers, 'numbers', 'Numbers');
  createLiSection(strings, 'strings', 'Strings');
  createLiSection(arrays, 'arrays', 'Arrays');
  createLiSection(objects, 'objects', 'Objects');
  // Create pre tag sections
  createLiSection(conditionals, 'conditionals', 'Conditionals');
  createLiSection(loops, 'loops', 'Loops');
  createLiSection(functions, 'functions', 'Functions');
  createLiSection(classes, 'classes', 'Classes');

  Prism.highlightAll();
})