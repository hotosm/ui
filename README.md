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

**WebAwesome version:** `3.2.1`

---

## Installation

```bash
pnpm install @hotosm/ui @awesome.me/webawesome@3.2.1
```

> [!NOTE]
> `@awesome.me/webawesome` is a **peer dependency**. Always pin it to the
> version shown above to avoid conflicts between HOT components and
> WebAwesome internals.

---

## Loading Styles

Two CSS files are published. Choose the one that fits your setup.

### Option A — Bundled (recommended for simplicity)

A single self-contained file with WebAwesome base styles + HOT theme
already inlined. Nothing else to load.

```html
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@hotosm/ui@0.6.1/dist/style.css">
```

Or from a bundler:

```js
import '@hotosm/ui/dist/style.css';
```

### Option B — Split / CDN-optimised (recommended for multi-tool caching)

If you run several HOT tools (FMTM, Tasking Manager, etc.) and want
the browser to **cache WebAwesome CSS once** across all of them, load
WebAwesome from CDN separately and use the slim HOT-only stylesheet:

```html
<!-- WebAwesome CSS — shared across all HOT tools via browser cache -->
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.2.1/dist/styles/native.css">
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.2.1/dist/styles/utilities.css">
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.2.1/dist/styles/themes/default.css">

<!-- HOT theme only (fonts + design tokens + WebAwesome overrides) -->
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@hotosm/ui@0.6.1/dist/style-core.css">
```

Or from a bundler:

```js
// WebAwesome (resolve from node_modules)
import '@awesome.me/webawesome/dist/styles/native.css';
import '@awesome.me/webawesome/dist/styles/utilities.css';
import '@awesome.me/webawesome/dist/styles/themes/default.css';

// HOT theme only
import '@hotosm/ui/dist/style-core.css';
```

| File | Size | Contains |
| --- | --- | --- |
| `style.css` | ~105 KB | WebAwesome + fonts + HOT theme (everything) |
| `style-core.css` | ~21 KB | Fonts + HOT theme only (no WebAwesome) |

> [!TIP]
> **Which should I pick?**
>
> - Building a single standalone app? Use **Option A** — zero config.
> - Running multiple HOT tools on the same domain or expecting users to
>   navigate between them? Use **Option B** — the ~84 KB of shared
>   WebAwesome CSS is fetched once and cached by the browser.

---

## HTML Setup

Add the required WebAwesome classes to your `<html>` element:

```html
<!DOCTYPE html>
<html class="wa-theme-default wa-palette-hotosm wa-brand-red wa-neutral-gray
  wa-success-cyan wa-warning-yellow wa-danger-orange">
  <head>...</head>
  <body>...</body>
</html>
```

> [!IMPORTANT]
> These classes control the colour palette used by every WebAwesome
> component. Do not remove them unless you are building a custom theme.

---

## Using Components

### Via Bundler (Vite, Webpack, etc.)

Import individual components — your bundler will tree-shake the rest:

```js
import '@hotosm/ui/dist/components/header/header.js';
```

```html
<hot-header title="My App"></hot-header>
```

### Via CDN / Plain HTML / HTMX

The recommended approach for HTMX and plain-HTML apps loads WebAwesome
styles and components from CDN so the browser can cache them once across
all HOT tools (Option B from the styles section above):

```html
<!DOCTYPE html>
<html class="wa-theme-default wa-palette-hotosm">
<head>
  <!-- WebAwesome CSS — cached once across all HOT tools at this WA version -->
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.2.1/dist/styles/native.css">
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.2.1/dist/styles/utilities.css">
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.2.1/dist/styles/themes/default.css">

  <!-- HOT UI theme (fonts + HOT design tokens + WebAwesome overrides, ~21 KB) -->
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@hotosm/ui@0.6.1/dist/style-core.css">

  <!-- Import map: resolves WebAwesome bare-module specifiers
       inside hotosm-ui.js -->
  <!-- WA components load lazily from CDN only when first used;
       no separate loader needed -->
  <script type="importmap">
    {
      "imports": {
        "@awesome.me/webawesome/dist/components/":
          "https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.2.1/dist-cdn/components/"
      }
    }
  </script>

  <!-- HOT UI web components -->
  <script type="module"
    src="https://cdn.jsdelivr.net/npm/@hotosm/ui@0.6.1/dist/hotosm-ui.js">
  </script>
</head>

<body>
  <hot-header id="hdr" title="My App" size="small"></hot-header>

  <script>
    // Boolean props must be set via JS — an HTML attribute is always truthy.
    // Defaults: drawer=true, show-login=false, border-bottom=true
    const hdr = document.getElementById('hdr');
    hdr.drawer = false;       // disable the hamburger drawer
    hdr.showLogin = false;    // hide the login button
  </script>
</body>
</html>
```

> [!TIP]
> If you need only a single self-contained stylesheet instead of the three
> WA links above, you can use Option A (`style.css`) — but then the ~84 KB
> of WebAwesome CSS is bundled into the HOT package and cannot be shared
> across tools as a single cached resource.

### React

Web Components work in React with a small caveat — use `ref` callbacks
for custom events if React's synthetic event system doesn't forward them:

```jsx
import '@hotosm/ui/dist/components/header/header.js';

function App() {
  return (
    <hot-header
      title="My App"
      ref={(el) => {
        if (el) el.addEventListener('login', () => console.log('logged in'));
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

| File | Purpose |
| --- | --- |
| `hot.css` | HOT design tokens (colours, typography, spacing) |
| `hot-wa.css` | WebAwesome variable overrides to apply the HOT palette |

---

## License

HOT UI is free and open source software. You may use any HOT UI project
under the terms of the
[GNU Affero General Public License (AGPL) Version 3](LICENSE.md).
