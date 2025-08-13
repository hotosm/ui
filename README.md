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

This repository contains advice on how to use the WebAwesome
[Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
library, references to the HOTOSM style guide, and a few 'wrapper'
components to assist development:

1. Reduced code duplication across HOT tools (we repeat a lot!)
2. Simplified developer experience to create a HOT app.
3. Reasonably consistent theming and style across tools.

The main goal of this project is not to re-invent the wheel, or add an extra burden
of development and maintenance. It should include a minimal number of
components, such as:

- Header, including auth flows (OSM, Google) and login info.
- Sidebar with links to extra resources.
- Footer with links.

## Quick start

Current HOTOSM UI version used: `0.3.1-b5`
Current WebAwesome version used: `3.0.0-beta.1`

### Install WebAwesome

```bash
pnpm install "@awesome.me/webawesome@3.0.0-beta.1"
```

> [!NOTE]
> It's important to pin the version of web awesome used to the version in this
> library, to avoid any conflicts and incompatibilities between components.

### Install HOT Components

```bash
pnpm install "@hotosm/ui"
```

### Configure The Styles

In your `index.html` or equivalent frontend root, add the following classes
to your `<html>` block:

  ```html
  <!DOCTYPE html>
  <html class="wa-theme-default wa-palette-hotosm wa-brand-red wa-neutral-gray
    wa-success-cyan wa-warning-yellow wa-danger-orange">
    <head>
      xxx
    </head>
    <body>
      xxx
    </body>
  </html>
  ```

> [!IMPORTANT]
> These classes determine the colour usage for different component variants,
> and probably should not be changed!

And import the required styles in your `main.ts` or equivalent (we import from package
rather than CDN, to allow the bundler to work it's CSS tree-shaking magic).

  ```js
  import '@hotosm/ui/dist/style.css';
  ```

If you wish to use any of the variables in `hot.css` manually, you can reference
them as variables like so:

  ```css
  /* In your CSS file */
  some-param: var(--hot-some-param);
  /* See all variables in the `theme/hot.css` file */
  ```

### Use The Components

#### Via Bundler

Import each component individually into your code:

  ```html
  <script>
    import '@hotosm/ui/dist/components/header/header.js';
  </script>

  <hot-header
    param1=""
    param2=""
  >
  </hot-header>
  ```

#### Via CDN

If you are working directly in HTML, or other ways without a configured
bundler, you can import all the components as a bundle, as use them like so:

  ```html
  <script>
    import '@hotosm/ui/dist/style.css';
    import '@hotosm/ui/dist/hotosm-ui';
  </script>

  <hot-header title="Test App" size="small" showLogin="false"></hot-header>
  ```

#### React

Import in the same way as the bundler example above, except events
are bound to slightly differently:

  ```jsx
  <hot-header
    title="Test App"
    size="small"
    showLogin="false"
    onLogin={() => {
      console.log('handler');
    }}
  ></hot-header>
  ```

### Component Guides

- Header: see [`/header.md`](/header.md) for detailed integration, styling, and framework examples.

### How to contribute

- Clone the project `git clone git@github.com:hotosm/ui.git`
- Install dependencies `pnpm install`
- Run the storybook `pnpm run dev`
- Write code!

For **styling**, check `/theme`:

- `hot.css` has a HOT theme, used across HOT components.
- `hot-wa-override.css` has a WebAwesome theme, re-defining style variables.

### License

HOT UI is free and open source software! you may use any HOT UI project under the
terms of the GNU Affero General Public License (AGPL) Version 3.
