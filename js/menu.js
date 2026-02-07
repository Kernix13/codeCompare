// sub-menu: display on click
const docsNav = document.getElementById('docs-nav');
const docsLink = docsNav.querySelector('a');

docsLink.addEventListener('click', function (e) {
  e.preventDefault();
  docsNav.classList.toggle('open');
});
document.addEventListener('click', function (e) {
  if (!docsNav.contains(e.target)) {
    docsNav.classList.remove('open');
  }
});