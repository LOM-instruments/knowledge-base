/* Bind ⌘K / Ctrl+K to focus Material's search input. */
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    const toggle = document.querySelector('[data-md-toggle="search"]');
    const input  = document.querySelector('.md-search__input');
    if (toggle && !toggle.checked) toggle.checked = true;
    if (input) setTimeout(() => input.focus(), 50);
  }
});
