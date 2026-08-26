# HOT Shared UI

<!-- markdownlint-disable -->
<p align="center">
  <img src="https://github.com/hotosm/ui/blob/main/src/assets/logo/hot-logo-png.png?raw=true" width="250" alt="HOT"></a>
</p>
<p align="center">
  <em>Shared Web Components with theming for use across HOTOSM tools.</em>
</p>
<p align="center">
  <a href="https://github.com/hotosm/ui/actions/workflows/publish.yml" target="_blank">
      <img src="https://github.com/hotosm/ui/actions/workflows/publish.yml/badge.svg?event=release" alt="Publish">
  </a>
  <a href="https://github.com/hotosm/ui/actions/workflows/playwright.yml" target="_blank">
      <img src="https://github.com/hotosm/ui/actions/workflows/playwright.yml/badge.svg?branch=main" alt="Tests">
  </a>
  <a href="https://github.com/hotosm/ui/actions/workflows/cdn_deploy.yml" target="_blank">
      <img src="https://github.com/hotosm/ui/actions/workflows/cdn_deploy.yml/badge.svg?branch=main" alt="CDN Deploy">
  </a>
  <a href="https://github.com/hotosm/ui/actions/workflows/docs.yml" target="_blank">
      <img src="https://github.com/hotosm/ui/actions/workflows/docs.yml/badge.svg" alt="Publish Docs">
  </a>
  <a href="https://www.npmjs.com/package/@hotosm/ui" target="_blank">
      <img src="https://img.shields.io/npm/v/%40hotosm/ui?color=334D058"
      alt="Package version">
  </a>
  <a href="https://npmtrends.com/@hotosm/ui" target="_blank">
      <img src="https://img.shields.io/npm/dm/%40hotosm%2Fui"
      alt="Downloads">
  </a>
  <a href="https://github.com/hotosm/ui/blob/main/LICENSE.md" target="_blank">
      <img src="https://img.shields.io/github/license/hotosm/ui.svg" alt="License">
  </a>
</p>

<p align="center">
  📖 <strong>Documentation</strong>: 
  <a href="https://ui.hotosm.org" target="_blank">https://ui.hotosm.org</a><br>
</p>

<p align="center">
  🖥️ <strong>Source Code</strong>: 
  <a href="https://github.com/hotosm/ui" target="_blank">https://github.com/hotosm/ui</a><br>
</p>

<p align="center">
  🎯 <strong>Roadmap / Tasks</strong>: 
  <a href="https://github.com/orgs/hotosm/projects/37/views/3" target="_blank">https://github.com/orgs/hotosm/projects/37/views/3</a>
</p>
<!-- markdownlint-enable -->

---

## Overview

Shared [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
built with [Lit](https://lit.dev) and themed for HOTOSM tools using
[WebAwesome](https://webawesome.com) primitives.

**Goals:**

- Reduce code duplication across HOT tools.
- Provide a consistent HOT look-and-feel out of the box.
- Keep the component set small and focused (header, sidebar, footer, etc.).

**WebAwesome version:** `3.11.0`

---

## Installation

```bash
pnpm install @hotosm/ui @awesome.me/webawesome@3.11.0
```

> [!NOTE]
> `@awesome.me/webawesome` is a **peer dependency**. Always pin it to the
> version shown above to avoid conflicts between HOT components and
> WebAwesome internals.

---

## Loading Styles

Use the single self-contained stylesheet (WebAwesome base styles + HOT
theme inlined):

```js
import "@hotosm/ui/dist/style.css";
```

Or from CDN:

<!-- markdownlint-disable MD013 -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@hotosm/ui@1.0.0/dist/style.css" />
```

<!-- markdownlint-enable MD013 -->

`style-core.css` (HOT theme only, no WebAwesome) exists for pages that
load the WebAwesome base stylesheets themselves - most apps don't need it.

### Fonts

Fonts are **not** bundled in the CSS
([#178](https://github.com/hotosm/ui/issues/178) - a CSS `@import` would
serialise the font download behind the stylesheet). Add them to your HTML
so they load in parallel:

<!-- markdownlint-disable MD013 -->

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;700&family=Barlow:wght@400;500;700&family=Barlow+Condensed:wght@400;500;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
/>
```

<!-- markdownlint-enable MD013 -->

---

## HTML Setup

Add the required WebAwesome classes to your `<html>` element:

```html
<!DOCTYPE html>
<html class="wa-theme-default wa-palette-hotosm">
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

> [!IMPORTANT]
> These classes activate the HOT colour palette and light theme for every
> WebAwesome component on the page. Do not remove them.

---

## Using Components

### Via Bundler (Vite, Webpack, etc.)

Recommended: register **all** WebAwesome elements once, up front, so every
custom element is defined before first render - this eliminates flash of
undefined custom elements (FOUCE) without maintaining per-page import
lists:

```js
import "@hotosm/ui/dist/style.css";
import "@hotosm/ui/dist/webawesome-all.js"; // registers every wa-* element
import "@hotosm/ui/dist/components/header/header.js"; // hot-* components you use
```

```html
<hot-header title="My App"></hot-header>
```

Put WebAwesome in its own long-lived chunk so app deploys don't invalidate
the browser-cached copy:

```js
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes("@awesome.me/webawesome")) return "webawesome";
      },
    },
  },
},
```

Byte-critical app? Skip `webawesome-all.js` and cherry-pick individual
WebAwesome components instead - then add the `wa-cloak` class to `<html>`
as a FOUCE backstop (pure CSS, ships in WebAwesome's `utilities.css`,
already included in `style.css`).

### Via CDN / Plain HTML / HTMX

Load the raw dist files, with an import map to resolve the bare
`@awesome.me/webawesome/...` imports in `webawesome-all.js`. The map's
WebAwesome pin must match the version this `@hotosm/ui` release was
built against. Do not use jsDelivr's `/+esm` URLs - they duplicate
element registrations and most `wa-*` elements never register.

<!-- markdownlint-disable MD013 -->

```html
<!DOCTYPE html>
<!-- wa-cloak: hides the page until all custom elements are defined (2s max) -->
<html class="wa-theme-default wa-palette-hotosm wa-cloak">
  <head>
    <!-- Fonts: see "Fonts" above -->

    <!-- WebAwesome base styles + HOT theme, self-contained -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@hotosm/ui@1.0.0/dist/style.css" />

    <script type="importmap">
      {
        "imports": {
          "@awesome.me/webawesome/dist/components/": "https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.11.0/dist-cdn/components/"
        }
      }
    </script>

    <!-- Register every wa-* element, then the hot-* components -->
    <script
      type="module"
      src="https://cdn.jsdelivr.net/npm/@hotosm/ui@1.0.0/dist/webawesome-all.js"
    ></script>
    <script
      type="module"
      src="https://cdn.jsdelivr.net/npm/@hotosm/ui@1.0.0/dist/hotosm-ui.js"
    ></script>
  </head>

  <body>
    <hot-header id="hdr" title="My App" size="small" show-login></hot-header>

    <script>
      // Boolean props default to false.
      // Include the attribute to make it true.
      const hdr = document.getElementById("hdr");
      hdr.drawer = true; // enable the hamburger drawer
    </script>
  </body>
</html>
```

<!-- markdownlint-enable MD013 -->

For multi-page (HTMX) apps, also inline a few critical theme tokens in
`<head>` so first paint looks right before the CDN CSS arrives - see
[Loading Strategies](https://hotosm.github.io/ui/?path=/docs/loading-strategies--docs).

### React

Web Components work in React with a small caveat - use `ref` callbacks
for custom events if React's synthetic event system doesn't forward them:

```jsx
import "@hotosm/ui/dist/components/header/header.js";

function App() {
  return (
    <hot-header
      title="My App"
      ref={(el) => {
        if (el) el.addEventListener("login", () => console.log("logged in"));
      }}
    />
  );
}
```

---

## Using HOT Design Tokens

The HOT theme exposes CSS custom properties you can reference in your
own stylesheets:

```css
.my-card {
  background: var(--hot-color-primary-50);
  color: var(--hot-color-neutral-900);
  font-family: var(--hot-font-sans);
  padding: var(--hot-spacing-medium);
  border-radius: var(--hot-border-radius-large);
}
```

See all available tokens in
[`src/themes/hot.css`](src/themes/hot.css).

---

## Component Guides

- **Header:** see [`header.md`](header.md) for detailed integration,
  styling, and framework examples.

---

## Contributing

```bash
git clone git@github.com:hotosm/ui.git
cd ui
pnpm install
pnpm run dev        # starts Storybook on localhost:3001
```

**Styling files** (under `src/themes/`):

| File         | Purpose                                                |
| ------------ | ------------------------------------------------------ |
| `hot.css`    | HOT design tokens (colours, typography, spacing)       |
| `hot-wa.css` | WebAwesome variable overrides to apply the HOT palette |

---

## License

HOT UI is free and open source software. You may use any HOT UI project
under the terms of the
[GNU General Public License (GPL) Version 3](LICENSE.md).
