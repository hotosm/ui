# HOTOSM UI — Header Component (`hot-header`)

Shared web component providing a branded HOT header with optional navigation tabs, a drawer, and login modal. It is built with Lit and uses WebAwesome primitives.

- Tag: `hot-header`
- Module: `@hotosm/ui`
- Depends on: `@awesome.me/webawesome`

## Installation

```bash
pnpm add @hotosm/ui @awesome.me/webawesome@3.0.0-beta.1
```

> Important: Pin WebAwesome to the version used by this package to avoid incompatibilities.

## Global setup (theming + CSS)

1) Add WebAwesome theme classes to your root HTML element:

```html
<html class="hot-theme-light wa-theme-default wa-palette-hotosm">
```

2) Import the HOT UI CSS once in your app (preferred: bundle CSS):

```js
// main.ts / main.js
import '@hotosm/ui/dist/style.css';
```

This CSS bundles:

- WebAwesome base styles
- HOT theme variables (`hot.css`)
- WebAwesome overrides (`hot-wa-override.css`)
- Button overrides (`hot-button-override.css`)

The header automatically injects HOT variables into WebAwesome components inside its Shadow DOM. No extra setup is required for styling.

## Usage

### Register the component

- All components bundle (recommended):

```js
import '@hotosm/ui/dist/hotosm-ui.js';
```

- Or only the header:

```js
import '@hotosm/ui/dist/components/header/header.js';
```

### HTML (bundler)

```html
<!-- index.html -->
<html class="hot-theme-light wa-theme-default wa-palette-hotosm">
  <head>
    <script type="module">
      import '@hotosm/ui/dist/style.css';
      import '@hotosm/ui/dist/components/header/header.js';
    </script>
  </head>
  <body>
    <hot-header id="hdr" title="My App" size="small"></hot-header>

    <script>
    const hdr = document.getElementById('hdr');

    // Map boolean and complex props via JS properties
    hdr.borderBottom = true;
    hdr.drawer = true;
    hdr.defaultLoginIcon = 'user';

    // Logo needs to be provided
    hdr.logo = "{logo_url}";

    // Tabs must be provided as functions from JS
    hdr.tabs = [
      { label: 'Learn', clickEvent: () => (location.href = 'https://hotosm.github.io/fmtm') },
      { label: 'About', clickEvent: () => (location.href = 'https://docs.fmtm.dev/about/about/') },
      { label: 'Support', clickEvent: () => (location.href = 'https://github.com/hotosm/fmtm/issues/') }
    ];
    hdr.activeTabIndex = 0;

    // Drawer links
    hdr.drawerLinks = [
      { label: "Learn", href: "https://hotosm.github.io/fmtm" },
      { label: "About", href: "https://docs.fmtm.dev/about/about/" },
      { label: "Support", href: "https://github.com/hotosm/fmtm/issues/" },
      { label: "Download Custom ODK Collect", href: "https://github.com/hotosm/odkcollect/releases/download/v2024.3.5-entity-select/ODK-Collect-v2024.3.5-HOTOSM-FMTM.apk" }
    ];

    // Events
    hdr.addEventListener('login', () => {
      console.log('Login event dispatched');
    });

    hdr.addEventListener('tab-change', (e) => {
      console.log('tab-change', e.detail);
    });
  </script>
  </body>
</html>
```

### HTML (CDN-only)

```html
<!DOCTYPE html>
<html class="hot-theme-light wa-theme-default wa-palette-hotosm">
<head>
  <meta charset="UTF-8" />
  <title>HOT Header — HTML demo</title>
  <link rel="stylesheet" href="https://unpkg.com/@hotosm/ui/dist/style.css" />
  <script type="module" src="https://unpkg.com/@hotosm/ui/dist/hotosm-ui.js"></script>
</head>
<body>
  <hot-header id="hdr" title="Field TM" size="small" showLogin="true"></hot-header>

  <script>
    const hdr = document.getElementById('hdr');

    // Map boolean and complex props via JS properties
    hdr.borderBottom = true;
    hdr.drawer = true;
    hdr.defaultLoginIcon = 'user';

    // Logo needs to be provided
    hdr.logo = "{logo_url}";

    // Tabs must be provided as functions from JS
    hdr.tabs = [
      { label: 'Learn', clickEvent: () => (location.href = 'https://hotosm.github.io/fmtm') },
      { label: 'About', clickEvent: () => (location.href = 'https://docs.fmtm.dev/about/about/') },
      { label: 'Support', clickEvent: () => (location.href = 'https://github.com/hotosm/fmtm/issues/') }
    ];
    hdr.activeTabIndex = 0;

    // Drawer links
    hdr.drawerLinks = [
      { label: "Learn", href: "https://hotosm.github.io/fmtm" },
      { label: "About", href: "https://docs.fmtm.dev/about/about/" },
      { label: "Support", href: "https://github.com/hotosm/fmtm/issues/" },
      { label: "Download Custom ODK Collect", href: "https://github.com/hotosm/odkcollect/releases/download/v2024.3.5-entity-select/ODK-Collect-v2024.3.5-HOTOSM-FMTM.apk" }
    ];

    // Events
    hdr.addEventListener('login', () => {
      console.log('Login event dispatched');
    });

    hdr.addEventListener('tab-change', (e) => {
      console.log('tab-change', e.detail);
    });
  </script>
</body>
</html>
```

### React

```jsx
// AppHeader.tsx / AppHeader.jsx
import { useEffect, useRef } from 'react';
import '@hotosm/ui/dist/style.css';
import '@hotosm/ui/dist/hotosm-ui.js';

export default function AppHeader() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.tabs = [
      { label: 'Home', clickEvent: () => console.log('to /') },
      { label: 'Projects', clickEvent: () => console.log('to /projects') },
      { label: 'About', clickEvent: () => console.log('to /about') }
    ];
    el.activeTabIndex = 0;
    el.drawerLinks = [
      { label: 'Support', href: 'https://example.com/support' },
      { label: 'Docs', href: 'https://example.com/docs' }
    ];

    const onTabChange = (e) => console.log('tab-change', e.detail);
    const onLogin = () => console.log('login clicked');
    el.addEventListener('tab-change', onTabChange);
    el.addEventListener('login', onLogin);

    return () => {
      el.removeEventListener('tab-change', onTabChange);
      el.removeEventListener('login', onLogin);
    };
  }, []);

  return (
    <hot-header ref={ref} title="My App" size="small" showLogin="true" />
  );
}
```

TypeScript note: add an intrinsic element type if needed:

```ts
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hot-header': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        title?: string;
        size?: 'small' | 'medium' | 'large';
        showLogin?: boolean | string;
      };
    }
  }
}
```

### Svelte

```svelte
<!-- AppHeader.svelte -->
<script lang="ts">
  import '@hotosm/ui/dist/style.css';
  import '@hotosm/ui/dist/hotosm-ui.js';
  import { onMount } from 'svelte';

  let headerEl: HTMLElement | null = null;

  onMount(() => {
    if (!headerEl) return;
    (headerEl as any).tabs = [
      { label: 'Home', clickEvent: () => console.log('to /') },
      { label: 'Projects', clickEvent: () => console.log('to /projects') },
      { label: 'About', clickEvent: () => console.log('to /about') }
    ];
    (headerEl as any).activeTabIndex = 0;
    (headerEl as any).drawerLinks = [
      { label: 'Support', href: 'https://example.com/support' },
      { label: 'Docs', href: 'https://example.com/docs' }
    ];
  });

  function onLogin() {
    console.log('login clicked');
  }

  function onTabChange(e: CustomEvent) {
    console.log('tab-change', e.detail);
  }
</script>

<hot-header
  bind:this={headerEl}
  title="My App"
  size="small"
  showLogin="true"
  on:login={onLogin}
  on:tab-change={onTabChange}
/>
```

## API

### Properties

- title: string — Text title shown next to the logo
- logo: string | URL — Image URL for the logo (optional)
- size: 'small' | 'medium' | 'large' — Header height variant
- drawer: boolean (default true) — Show the drawer button
- drawerLinks: Array<{ label: string; href: string }>
- tabs: Array<{ label: string; clickEvent: () => void }>
- activeTabIndex: number — Controls which tab is active
- borderBottom: boolean (default true) — Show bottom border
- showLogin: boolean — Shows a “Login” button and modal

Notes:

- In plain HTML, the presence of a boolean attribute is treated as true. Set false by assigning the property from JS (e.g., `el.borderBottom = false`).
- Arrays and functions must be assigned as properties from JS (attributes are strings).

### Events

- tab-change — Fired when a tab is selected
  - detail: `{ selectedIndex: number, previousIndex: number, tab: { label, clickEvent } }`
- login — Fired when the “Login” button is clicked

## Styling

The header is styled with Shadow DOM CSS using the HOT design variables. Override styles primarily via CSS variables.

### Per-instance overrides

```css
/* Scope overrides to a specific header */
hot-header {
  /* Colors */
  --hot-color-red-500: #e11d48;
  --hot-color-neutral-950: #0f172a;

  /* Typography & spacing */
  --hot-font-size-medium: 0.95rem;
  --hot-spacing-4x-large: 4rem; /* affects header size variants */
}
```

### Global theme tweaks

```css
:root {
  --hot-color-primary-500: #ef4444;
  --hot-font-sans: Inter, system-ui, sans-serif;
}
```

### Targeting specific affordances

- Active tab underline color (via tokens used by internal rules):

```css
hot-header { --hot-color-red-500: #dc2626; }
```

- Login modal look (the dialog reads CSS variables):

```css
hot-header {
  --width: 32rem;
  --border-radius: 12px;
  --background-color: white;
}
```

Notes:

- Internal classes (e.g., `.header--tab::part(base)`) are inside Shadow DOM; prefer variable overrides.
- WebAwesome parts are styled inside the component; use tokens/variables instead of trying to pierce Shadow DOM from outside.

## How styling works (behind the scenes)

- `@hotosm/ui/dist/style.css` defines HOT tokens/variables and maps them to WebAwesome variables.
- The header imports WebAwesome elements (tabs, button, drawer, dialog) and automatically injects HOT variables into their Shadow DOM, so variants like `variant="brand"` use HOT colors.

## Troubleshooting

- I see “true” when I pass booleans as attributes: assign booleans via JS properties (`el.showLogin = true/false`).
- Tabs don’t navigate: `tabs` need `clickEvent` functions. Ensure you assign the array as a property, not as an attribute string.
- Styles not taking effect: confirm you imported `@hotosm/ui/dist/style.css` and have the required WebAwesome classes on `<html>`.
