/*
 * lom-enhancements.js — tiny runtime that decorates existing markdown
 * pages so they pick up the prototype's product-page look without any
 * markdown edits.
 *
 * What it does:
 * 1. Stamps a mono "eyebrow" attribute on h1 containing section + slug
 * 2. Tags any <ul> under a "Downloads" / "Compatible Accessories" /
 *    "Related" heading with class "lom-rowlinks"
 * 3. No-ops on pages that don't need it
 */
(function () {
  function enhance() {
    const article = document.querySelector('.md-content__inner, article');
    if (!article) return;

    // 1. H1 eyebrow
    const h1 = article.querySelector('h1');
    if (h1 && !h1.dataset.lomEyebrow) {
      // Figure out a section from the active top-nav tab
      const activeTab = document.querySelector('.md-tabs__link--active');
      const sectionName = activeTab ? activeTab.textContent.trim() : '';
      const slug = (location.pathname
        .replace(/\/$/, '')
        .split('/')
        .filter(Boolean)
        .pop() || '').toUpperCase();
      const eyebrow = [sectionName, slug]
        .filter(Boolean)
        .join(' · ');
      if (eyebrow) h1.dataset.lomEyebrow = eyebrow;
    }

    // 2. Row-link lists under certain headings
    const rowlinkHeadings = /^(downloads?|compatible accessories|related|resources|files)$/i;
    article.querySelectorAll('h2, h3').forEach((h) => {
      if (rowlinkHeadings.test(h.textContent.trim())) {
        let next = h.nextElementSibling;
        while (next && !/^H[1-6]$/.test(next.tagName)) {
          if (next.tagName === 'UL') next.classList.add('lom-rowlinks');
          next = next.nextElementSibling;
        }
      }
    });
  }

  // Run on first load and on Material's instant-navigation page swaps
  document.addEventListener('DOMContentLoaded', enhance);
  if (window.document$) {
    // Material exposes an RxJS-style observable
    window.document$.subscribe(enhance);
  }
})();
