# HOT Shared UI

<!-- markdownlint-disable -->
<p align="center">
  <img src="https://github.com/hotosm/fmtm/blob/main/images/hot_logo.png?raw=true" style="width: 200px;" alt="HOT"></a>
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

📖 **Documentation**: <a href="https://hotosm.github.io/ui/" target="_blank">https://hotosm.github.io/ui/</a>

🖥️ **Source Code**: <a href="https://github.com/hotosm/ui" target="_blank">https://github.com/hotosm/ui</a>

---

<!-- markdownlint-enable -->

Shared UI components with theming for use across HOTOSM tools,
to reduce code duplication.

The components are
[Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components),
currently written in **Lit**, using TypeScript.

## Install

Via NPM:

```bash
npm install @hotosm/ui

yarn add @hotosm/ui

pnpm install @hotosm/ui
```

## Usage

### CDN (HTML / HTMX)

```html
// Import Shoelace dependency
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@shoelace-style
  /shoelace@2.15.1/cdn/themes/light.css" />
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@shoelace-style/
  shoelace@2.15.1/cdn/shoelace-autoloader.js"
></script>

// Import the components & styles (or add your own styling)
<link
  rel="stylesheet"
  href="https://s3.amazonaws.com/hotosm-ui/latest/theme/hot.css"
/>
<script
  type="module"
  src="https://s3.amazonaws.com/hotosm-ui/latest/components/Button.js"
></script>

<div>
  <hot-button disabled> </hot-button>
</div>
```

> Using the Shoelace autoloader will lazy load only the components you use.

See the docs for more [usage examples](https://hotosm.github.io/ui/usage/).

> Components are versioned under subdirectories, with /latest/ tracking the
> `main` branch, plus versioned releases.

### ES6 Imports (most frameworks)

Install your required version with a pin, or latest:

```bash
pnpm install @hotosm/ui
```

```js
<script>
  import '@hotosm/ui/theme/hot.css'
  import '@hotosm/ui/components/Button'
</script>

<hot-button disabled></hot-button>
```

#### Importing Icons

The icon pack for Shoelace must be imported to display in components.

There are two options:

##### CDN Assets

Just add the Shoelace icons via CDN in your HTML file:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style
/shoelace@2.15.1/cdn/themes/light.css" />

// Or dark
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style
/shoelace@2.15.1/cdn/themes/dark.css" />
```

##### Bundle Assets Yourself

- Add Shoelace as a `peerDependency` and to your `package.json`:

    ```json
      "peerDependencies": {
        "@shoelace-style/shoelace": "^2.15.1"
      }
    ```

- Also add `vite-plugin-static-copy` as a devDependency:
    `pnpm install -D vite-plugin-static-copy`
- Add to your `vite.config.ts`:

    ```js
    import { viteStaticCopy } from 'vite-plugin-static-copy';

    export default defineConfig({
      plugins: [
        viteStaticCopy({
          targets: [
            {
            src: 'node_modules/@shoelace-style/shoelace/dist/assets',
            dest: ''
            }
          ]
        }),
      ],
    ```

- Now the Shoelace assets will be bundled with your dist, under `/shoelace`.

#### React

Versions of React below v19 require a specific 'wrapper' component to use the
web components.

Use these instead of the standard `@hotosm/ui/components/xxx`:

```bash
pnpm install @hotosm/ui
```

```js
import '@hotosm/ui/react/Button'

const HomePage = ({}) => {
  return (
    <div className="your-css-classes">
      <div
        ...
      >
        <hot-button disabled>
        </hot-button>
      </div>
    </div>
  );
};

export default HomePage;
```
