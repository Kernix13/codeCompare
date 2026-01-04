"use strict";
import { vars, numbers, strings, arrays, objects } from "./js/listEls.js";

const languageForm = document.getElementById('languageForm');
const select = document.getElementById('primaryLang');
const h1 = document.querySelector('h1');

/**
 * * FUNCTIONS
 */
// set local storage for primary & secondary languages, and for H1 text
function setLocalStorage(key, val) {
	return localStorage.setItem(key, JSON.stringify(val));
}

function getLocalStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}

// On page visit
function initHomePage() {
  const h1Text = getLocalStorage('h1');
  if (!h1Text) {
    setLocalStorage('h1', 'Choose a primary language and at least 1 secondary language');
  } else {
    h1.textContent = getLocalStorage('h1');
    // make the selected primary language be selected on page load
    const selectedIdx = Number(getLocalStorage('selection'));
    select.options[selectedIdx].selected = true;

    const langs = getLocalStorage('checkedLangs');

    // check the secondary languages the user checked
    langs.forEach(val => {
      const checkbox = document.querySelector(`input[type="checkbox"][value="${val}"]`);
      if (checkbox) checkbox.checked = true;
    });

    createLiSection(vars, 'vars', 'Variables + Miscellaneous');
    createLiSection(numbers, 'numbers', 'Numbers');
    createLiSection(strings, 'strings', 'Strings');
    createLiSection(arrays, 'arrays', 'Arrays');
    createLiSection(objects, 'objects', 'Objects');
  }
}

// for the 5 ol > li sections
function createLiSection(obj, sectionId, h3Text) {
  const section = document.getElementById(sectionId);
  section.textContent = '';

  const primary = getLocalStorage('primary');
  const secondary = getLocalStorage('checkedLangs');
  const num = secondary.length + 1;

  const grid = document.createElement('div');
  grid.className = `grid-${num}`;

  const primaryChild = document.createElement('div');
  primaryChild.className = 'primary';

  languageListItems(obj, primary, h3Text, section, grid, primaryChild);

  secondary.forEach(lang => {
    const secondaryChild = document.createElement('div');
    secondaryChild.className = 'secondary';

    languageListItems(obj, lang, h3Text, section, grid, secondaryChild);
  })

  // Re-apply Prism.js highlighting only to this section
  Prism.highlightAllUnder(section);
}

// HELPER function: used in createLiSection
function languageListItems(obj, string, text, el1, el2, el3) {
  const h2 = document.createElement('h2');
  h2.textContent = string;

  const h3 = document.createElement('h3');
  h3.textContent = text;

  el1.append(el2);
  el2.append(el3);

  const list = document.createElement('ol');

  el3.append(h2, h3, list);

  obj[string].forEach(item => {
    const li = document.createElement('li');
    const code = document.createElement('code');
    code.className = `language-${string.toLowerCase()}`;
    code.textContent = item;
    li.append(code);
    list.append(li);
  })
}


/**
 * * EVENT LISTENERS
 */

// 1. Load localStorage objects if they exist
document.addEventListener('DOMContentLoaded', initHomePage);

// Select list 
select.addEventListener('change', e => {
  const checkedLanguages = getLocalStorage('checkedLangs') || []
  if (checkedLanguages.length > 0) {
    setLocalStorage('checkedLangs', [])
  }
  const selectedvalue = select.options[select.selectedIndex].value;
  console.log(selectedvalue) // this is correct

  const boxes = document.querySelectorAll('input[type="checkbox"]');

  const disabled = [...boxes].filter(box => box.id === selectedvalue).map(box => box.disabled = true);
  const primarySelection = [...boxes].filter(box => box.id === selectedvalue)

  // I need to somehow maintain the disabled attribute and only remove it when the user picks a different primary language or clears LS
})

// 2. form listener
// Why are my form listeners always so busy?
languageForm.addEventListener('submit', e => {
  e.preventDefault();
  
  // Get the text for the selected primary language - save to LS
  const selectedText = select.options[select.selectedIndex].text;
  console.log('selectedText: ', selectedText) 
  // above is wrong! It is whatever was previously selected, not the user selection when they submit the form
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

  // ol > li page content
  createLiSection(vars, 'vars', 'Variables + Miscellaneous');
  createLiSection(numbers, 'numbers', 'Numbers');
  createLiSection(strings, 'strings', 'Strings');
  createLiSection(arrays, 'arrays', 'Arrays');
  createLiSection(objects, 'objects', 'Objects');
})