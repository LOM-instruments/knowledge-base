/* Open Material's search overlay (toggle checkbox + focus input). */
function lomOpenSearch() {
  const toggle = document.querySelector('[data-md-toggle="search"]');
  const input  = document.querySelector('.md-search__input');
  if (toggle && !toggle.checked) {
    toggle.checked = true;
    toggle.dispatchEvent(new Event('change', { bubbles: true }));
  }
  if (input) setTimeout(() => input.focus(), 50);
}

/* ⌘K / Ctrl+K */
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    lomOpenSearch();
  }
});

/* Click the hero search box on the home page */
document.addEventListener('click', (e) => {
  if (e.target.closest('.hero-search')) {
    e.preventDefault();
    lomOpenSearch();
  }
});
