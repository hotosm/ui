<img src="https://github.com/hotosm/ui/blob/main/theme/logo/hot-logo-png.png" width="250">

[![Release](https://github.com/hotosm/ui/actions/workflows/publish.yml/badge.svg?event=release)](https://github.com/hotosm/ui/actions/workflows/publish.yml/)
[![CDN Deploy](https://github.com/hotosm/ui/actions/workflows/cdn_deploy.yml/badge.svg?branch=main)](https://github.com/hotosm/ui/actions/workflows/cdn_deploy.yml)
[![Docs](https://github.com/hotosm/ui/actions/workflows/docs.yml/badge.svg)](https://github.com/hotosm/ui/actions/workflows/docs.yml)
[![Package Version](https://img.shields.io/npm/v/%40hotosm/ui?color=334D058)](https://www.npmjs.com/package/@hotosm/ui)
[![Downloads](https://img.shields.io/npm/dm/%40hotosm%2Fui)](https://npmtrends.com/@hotosm/ui)
[![License](https://img.shields.io/github/license/hotosm/ui.svg)](https://github.com/hotosm/ui/blob/main/LICENSE.md)

# HOT UI

## Shared UI components with HOT theming

### HOT themed UI components to reduce code duplication and make live easier for developers, available as [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) with support for usage in [almost all](https://custom-elements-everywhere.com) modern web frameworks.

The main goal of this project is not to re-invent the wheel, or add an extra burden of development and maintenance.


📖 **Documentation**: <a href="https://hotosm.github.io/ui/" target="_blank">https://hotosm.github.io/ui/</a>

🖥️ **Source Code**: <a href="https://github.com/hotosm/ui" target="_blank">https://github.com/hotosm/ui</a>

🎯 **Roadmap / Tasks**: <a href="https://github.com/orgs/hotosm/projects/37/views/3" target="_blank">https://github.com/orgs/hotosm/projects/37/views/3</a>

---

## Quick start

There are two options: NPM and Components Bundle.

### NPM

Appropriate for applications that have installable dependencies

`npm install @hotosm/ui`

Import the library in your project and use the components.

```html
<script>
  import '@hotosm/ui/dist/style.css';
  import '@hotosm/ui/dist/hotosm-ui.js';
</script>
```

```html
<hot-logo><hot-logo>
```

#### React

```js
  import { Logo } from '@hotosm/ui/components/react';
```

```jsx
<Logo />
```

### Components Bundle

- This is the compiled JavaScript bundle generated from the TypeScript code.
- The components require no additional dependencies and are minified.

Appropriate for HTML / Markdown / HTMX.

```html
<link
  rel="stylesheet"
  href="https://s3.amazonaws.com/hotosm-ui/latest/style.css"
/>

<script
  type="module"
  src="https://s3.amazonaws.com/hotosm-ui/latest/dist/components.js"
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
import '@hotosm/ui/components/button/button';
```

```html
<hot-button disabled variant="secondary">Can't Click Me</hot-button>
```

### React

```js
import { Button } from '@hotosm/ui/components';
```

```html
<Button disabled variant="secondary">Can't Click Me</Button>
```

### Examples

You can found examples for HTML and also all common frameworks (React, Svelte, Vue) under `/examples`.

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

There's also a React storybook that you can use for testing:

- Run the React storybook `pnpm run dev-react`

For **styling**, we have 2 important files under `/theme`:

- `hot-sl.css` has a Shoelace theme, re-defining some variables
- `hot.css` has custom styles for eveything else, specially composited components

### License

HOT UI is free and open source software! you may use any HOT UI project under the terms of the GNU Affero General Public License (AGPL) Version 3.
