# LOM Knowledge Base — theme handoff

Self-contained skin for an existing MkDocs Material site. This bundle
replaces every earlier step-by-step patch.

## What Claude Code should do

Treat this whole bundle as a single install. Apply all of these — partial
installs look broken. The order matters.

### 1. Copy files into the repo

Given `$REPO` is the MkDocs project root (the folder containing `mkdocs.yml`
and `docs/`), copy every file from this bundle, preserving paths:

| This bundle | → Repo destination |
|---|---|
| `docs/stylesheets/lom.css` | `$REPO/docs/stylesheets/lom.css` |
| `docs/javascripts/cmd-k.js` | `$REPO/docs/javascripts/cmd-k.js` |
| `docs/javascripts/audio-sample.js` | `$REPO/docs/javascripts/audio-sample.js` |
| `docs/javascripts/lom-enhancements.js` | `$REPO/docs/javascripts/lom-enhancements.js` |
| `overrides/main.html` | `$REPO/overrides/main.html` |
| `overrides/partials/lom-footer.html` | `$REPO/overrides/partials/lom-footer.html` |
| `docs/index.md` | `$REPO/docs/index.md` (**replace** existing — back up first) |
| `docs/_sample-product.md` | `$REPO/docs/_sample-product.md` (reference only — not linked from nav) |

Create directories as needed. Don't merge into existing `lom.css` — this
one is the final consolidated version.

### 2. Edit `mkdocs.yml` — final shape

The `theme`, `extra_css`, `extra_javascript`, and `markdown_extensions`
sections should end up **exactly** like this after your edits. Preserve
everything else (site_name, nav, plugins, etc).

```yaml
theme:
  name: material
  custom_dir: overrides
  font: false                      # we load Inter + JetBrains Mono via CSS
  favicon: assets/favicon.ico      # keep your existing value
  logo: assets/logo.png            # keep your existing value
  features:
    - navigation.tabs              # REQUIRED — enables top-nav row
    - navigation.tabs.sticky
    - navigation.top
    - navigation.indexes
    - navigation.sections
    - toc.follow
    - search.suggest
    - search.highlight
    - content.tabs.link
    - content.code.copy
  palette:
    - media: "(prefers-color-scheme: light)"
      scheme: default
      toggle:
        icon: material/weather-night
        name: Switch to dark mode
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      toggle:
        icon: material/weather-sunny
        name: Switch to light mode

extra_css:
  - stylesheets/lom.css

extra_javascript:
  - javascripts/cmd-k.js
  - javascripts/audio-sample.js
  - javascripts/lom-enhancements.js

markdown_extensions:
  - attr_list
  - md_in_html
  - admonition
  - pymdownx.details
  - pymdownx.superfences
  - pymdownx.tabbed:
      alternate_style: true
  - pymdownx.emoji
  - tables
  - footnotes
  - toc:
      permalink: true
```

**Do NOT** keep any `palette.primary:` / `palette.accent:` keys other
than the light/dark toggle shown above — they override our custom
colors. Remove them if present.

**Do NOT** keep separate `lom-topnav.css`, `lom-fixes.css`, or
`lom-product-auto.css` in `extra_css:` — they are all merged into
`lom.css` now. Delete those old files.

### 3. Verify the install

Run `mkdocs serve` and hard-reload the browser (Cmd+Shift+R). You
should see:

- [ ] Header is paper-white with a hairline black underline, Inter type
- [ ] Horizontal top-nav row under the header with your top-level pages
- [ ] Home page shows a large headline, search bar, four quick links,
      and two rows of product family cards with hairline borders
- [ ] Any product page (e.g. Geofón) shows `§ 01`, `§ 02` mono labels
      before each `##` heading, and a framed image
- [ ] Right-hand table of contents is numbered `01 · 02 · 03` in mono
- [ ] Search placeholder and the ⌘K hint use JetBrains Mono

If any of those fail, see "Troubleshooting" at the bottom.

## Design system used

- **Type**: Inter (400/500) for UI and body; JetBrains Mono (400/500) for
  labels, eyebrows, and spec values. Loaded from Google Fonts via
  `@import` at the top of `lom.css`.
- **Palette**: paper-white #FAFAF7, ink-black #111, hairline #E4E2DC,
  accent red #C9442E (used sparingly on hover/CTA).
- **Geometry**: zero border-radius, zero box-shadows. Hairline 1px borders
  only. 16/24/48/80 px rhythm.
- **Language**: § section numbers in mono, `decimal-leading-zero`.

## Page patterns supported

### Home page (`docs/index.md`)
Uses a `<div class="lom-home">` with nested sections
(`.lom-hero`, `.lom-section`, `.lom-grid`, `.lom-card`, `.lom-list`,
`.lom-list-row`). Edit the existing `index.md` in-place; structure stays.

### Product page (auto-styled)
Any markdown page with an `# H1` followed by an image + `## sections`
gets the product look automatically via `lom-enhancements.js`:
- h1 gains a mono eyebrow (derived from active top-nav tab + page slug)
- h2s get `§ 01`, `§ 02` auto-numbering via CSS counters
- first image is framed and size-capped
- two-column tables render as key/value spec rows
- `## Downloads`, `## Compatible Accessories`, `## Related` — the bullet
  list under the heading is rendered as stacked row-cards

No per-page markdown edits required.

### Product page (explicit, for flagship products)
Use `docs/_sample-product.md` as a template. It uses
`.product-hero` (two-column: photo + buy buttons), `{: .product-tagline }`
under the h1, and `{ .specs }` on the spec table.

### Audio samples
Any div of the form
`<div class="lom-audio" data-title="…" data-sub="…" data-src="…"></div>`
is upgraded by `audio-sample.js` into a styled inline player.

## Troubleshooting

- **Top-nav is empty**: your `mkdocs.yml` doesn't have top-level entries
  in `nav:`, or `navigation.tabs` isn't in `theme.features`.
- **Fonts look like Roboto**: `theme.font: false` is missing.
- **Colors look Material-blue**: a `palette.primary:` key is still in
  `mkdocs.yml`. Remove.
- **Home page shows raw HTML code blocks**: `md_in_html` is missing from
  `markdown_extensions`.
- **Cards have no borders**: `attr_list` is missing, or `lom.css` isn't
  the only stylesheet loading.
- **⌘K doesn't focus search**: `cmd-k.js` isn't in `extra_javascript:`.

If any of the above still happens after checking these, open DevTools →
Network → filter "css" and confirm `lom.css` returns 200. Then Network →
filter "font" and confirm Inter and JetBrains Mono files load from
fonts.gstatic.com.
