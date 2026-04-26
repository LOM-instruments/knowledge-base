/*
 * lom-enhancements.js
 *
 * 1. Appends a "+" marker to top-level tabs that are section parents.
 * 2. Builds a hover-dropdown mega-menu for those tabs, populated from
 *    Material's own nav sidebar (so the children stay in sync with
 *    mkdocs.yml — nothing hardcoded beyond the parent list).
 */
(function () {
  const TAB_PARENTS = new Set([
    'Microphones',
    'Electromagnetic',
    'Vibration',
    'Build guides',
    'Tips & tricks',
    'Research',
  ]);

  /** Find the sidebar nav item whose label matches `label`, return its
   *  descendant leaf-links as [{href, text}, ...]. */
  function childrenFor(label) {
    const labels = document.querySelectorAll(
      '.md-sidebar--primary .md-nav__item--section > label.md-nav__link, ' +
      '.md-sidebar--primary .md-nav__item--nested > label.md-nav__link, ' +
      '.md-sidebar--primary .md-nav__item--section > .md-nav__link, ' +
      '.md-sidebar--primary .md-nav__item--nested > .md-nav__link'
    );
    for (const l of labels) {
      if (l.textContent.trim() === label) {
        const container = l.closest('.md-nav__item');
        const links = container.querySelectorAll(':scope > .md-nav > .md-nav__list > .md-nav__item > a.md-nav__link');
        return Array.from(links).map((a) => ({ href: a.getAttribute('href'), text: a.textContent.trim() }));
      }
    }
    return [];
  }

  function buildDropdown(tabEl, label) {
    const items = childrenFor(label);
    if (!items.length) return null;
    const menu = document.createElement('div');
    menu.className = 'lom-megamenu';
    // Split into two columns if > 4 items
    const cols = items.length > 4 ? 2 : 1;
    const per = Math.ceil(items.length / cols);
    for (let c = 0; c < cols; c++) {
      const col = document.createElement('div');
      col.className = 'lom-megamenu-col';
      items.slice(c * per, (c + 1) * per).forEach((it) => {
        const a = document.createElement('a');
        a.href = it.href;
        a.textContent = it.text;
        col.appendChild(a);
      });
      menu.appendChild(col);
    }
    return menu;
  }

  function decorateTabs() {
    const tabs = document.querySelectorAll('.md-tabs__item');
    tabs.forEach((item) => {
      const link = item.querySelector('.md-tabs__link');
      if (!link) return;

      // Strip previous enhancements before re-applying (instant-nav safe)
      link.querySelector('.lom-plus')?.remove();
      item.querySelector(':scope > .lom-megamenu')?.remove();
      item.classList.remove('lom-has-menu');

      const text = link.textContent.trim();
      if (!TAB_PARENTS.has(text)) return;

      // "+" marker
      const plus = document.createElement('span');
      plus.className = 'lom-plus';
      plus.textContent = '+';
      link.appendChild(plus);

      // dropdown
      const menu = buildDropdown(item, text);
      if (menu) {
        item.appendChild(menu);
        item.classList.add('lom-has-menu');
      }
    });
  }

  function enhance() { decorateTabs(); }

  document.addEventListener('DOMContentLoaded', enhance);
  if (window.document$) window.document$.subscribe(enhance);
})();
