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

## Shared UI Components with HOT Theming

This repository contains HOT themed UI components, with three goals:

1. Reduced code duplication across HOT tools (we repeat a lot!)
2. Simplified developer experience to create a HOT app.
3. Reasonably consistent theming and style across tools.

They are available as
[Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
and have first-class React support.

The main goal of this project is not to re-invent the wheel, or add an extra burden
of development and maintenance. It should include a minimal number of components:

- Header, including auth flows (OSM, Google) and login info.
- Sidebar with links to extra resources.
- Footer with links.
- File upload component (including dropzone).
- Date picker component.
- Workflow stepper component.

## Quick start

There are two options: NPM and Components Bundle.

### NPM

Appropriate for applications that have installable dependencies

`npm install @hotosm/ui`

Import the library in your project and use the components.

```html
<script>
  import '@hotosm/ui/dist/style.css';
  import { Logo, Button } from '@hotosm/ui/dist/hotosm-ui';
</script>
```

```html
<hot-logo><hot-logo>
<hot-button variant="primary">Click me!</hot-button>
```

#### React

```js
import '@hotosm/ui/dist/style.css';
import { Logo, Button } from '@hotosm/ui/dist/react';
```

```jsx
<Logo />
<Button variant="primary">Click me!</Button>
```

### Components Bundle

- This is the compiled JavaScript bundle generated from the TypeScript code.
- The components require no additional dependencies and are minified.

Appropriate for HTML / Markdown / HTMX.

```html
<link
  rel="stylesheet"
  href="https://s3.amazonaws.com/hotosm-ui/latest/dist/style.css"
/>

<script
  type="module"
  src="https://s3.amazonaws.com/hotosm-ui/latest/dist/ui.js"
></script>

<hot-logo></hot-logo>
```  

## Using Extra Shoelace Components

The HOT UI library contains many composite components, such as headers, sidebars,
tracking banners, etc, and does not re-invent the wheel for low-level components.

Shoelace is an UI library that is exported directly from `@hotosm/ui`.

To access the low-level components, such as buttons, dropdowns, modals, etc,
simply import the component of the same name from the [Shoelace docs]
(<https://shoelace.style>):

```js
import { Button } from '@hotosm/ui/dist/hotosm-ui';
```

```html
<hot-button disabled variant="secondary">Can't Click Me</hot-button>
```

### React Shoelace Wrappers

```js
import { Button } from '@hotosm/ui/dist/react';
```

```html
<Button disabled variant="secondary">Can't Click Me</Button>
```

### Examples

You can found examples for HTML and also all common frameworks
(React, Svelte, Vue) under `/examples`.

### Development

HOT UI is developed in TypeScript, using Lit and @lit/react.

Primarily we want to have:

- Low level components exported from the Shoelace web component
  library, simply re-exported with our default styling / CSS overrides.
- A few composite components (header, sidebar, etc):
  - Consistent styling across most of our tools where it counts.
  - Reduction in duplicated logic, such as user management, OAuth login, etc.
- Improved developer experience, reduced development time for new tools, while
  maintaining consistency in look and feel of applications.

### How to contribute

- Clone the project `git clone git@github.com:hotosm/ui.git`
- Install dependencies `pnpm install`
- Run the storybook `pnpm run dev`
- Write code!

For **styling**, check `/theme`:

- `hot.css` has a HOT theme, used across HOT components
- `hot-sl.css` has a Shoelace theme, re-defining styles variables

### License

HOT UI is free and open source software! you may use any HOT UI project under the
terms of the GNU Affero General Public License (AGPL) Version 3.
