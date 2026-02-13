"use strict";

// sub-menu: display on click
const docsNav = document.getElementById('docs-nav');
const docsLink = docsNav.querySelector('a');

// 1. Set local storage for primary, secondary & h1 text
function setLocalStorage(key, val) {
	return localStorage.setItem(key, JSON.stringify(val));
}

// 2. Get local storage for primary, secondary & h1 text
function getLocalStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}


/**
 * * EVENT LISTENERS
 */
// 1. Click on docs link
docsLink.addEventListener('click', function (e) {
  e.preventDefault();
  docsNav.classList.toggle('open');
});
document.addEventListener('click', function (e) {
  if (!docsNav.contains(e.target)) {
    docsNav.classList.remove('open');
  }
});