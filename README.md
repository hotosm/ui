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

There are two options for install:

- **NPM**: appropriate for applications that have installable dependencies.
- **CDN**: appropriate for HTML / Markdown / HTMX.

### Components Bundle

- This is the compiled JavaScript bundle generated from the TypeScript code.
- The components require no additional dependencies and are minified.

#### Via NPM

- Install package `@hotosm/ui` as a dependency in your `package.json`.
- Import the components.

```html
<script>
  import '@hotosm/ui/dist/components.js';
</script>

// Use the components in your templates
<hot-button disabled> </hot-button>
```

#### Via CDN

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@hotosm/ui@latest/dist/components.js"
></script>

<hot-button disabled> </hot-button>
```

The `jsdelivr` CDN only includes package releases, with `@latest` pointing to the
most recent tagged release.

There is also an S3-based CDN, where `latest` tracks the `main` branch of the repo:
  `https://s3.amazonaws.com/hotosm-ui/latest/dist/components.js`

### ES Modules

- Using the TypeScript ES Modules allows for cherry-picking components, so
'tree-shaking' can remove the remaining ones you don't use.
- If you are developing an application that uses `@hotosm/ui` components,
including a bundler such as rollup/vite/webpack, this is probably the best approach.
- However, you must first add Shoelace as a `peerDependency` in your `package.json`:

    ```json
      "peerDependencies": {
        "@shoelace-style/shoelace": "^2.15.1"
      }
    ```

    > Ideally the version of Shoelace installed should match the version used in
    > hotosm/ui.

- This will also install subdependencies such as Lit.
- If there is a conflict between Lit versions, the `lit` package can also be pinned
  via `peerDependency`.

Example:

```js
import '@hotosm/ui/components/Toolbar';

// Then in your template
<hot-button>Click Me</hot-button>
```

### React

Versions of React below v19 require a specific 'wrapper' component to use the
web components.

Use these instead of the standard `@hotosm/ui/components/xxx`:

```bash
pnpm install @hotosm/ui
```

```js
import { Button } from '@hotosm/ui/react/Button'

const HomePage = ({}) => {
  return (
    <div className="your-css-classes">
      <div
        ...
      >
        <Button disabled />
      </div>
    </div>
  );
};

export default HomePage;
```

> Note that while web components must always have a closing tag, this is not
> required for the React wrappers.

## Using Extra Shoelace Components

The UI library is not comprehensive & you may wish to use additional components
from Shoelace in your app.

Ideally you should install the same version of @shoelace-style/shoelace as this
library (particularly if using the ES Modules)

To determine which version:

- View the
  [@hotosm/ui](https://www.npmjs.com/package/@hotosm/ui?activeTab=versions)
  package on npmjs.com.
- Select the version you are using.
- Go to the `Code` tab, then open the `package.json` file.
- The version of shoelace used should be in the `dependencies` section.

If you are using a bundler, you must bundle the (icon) assets yourself,
described in the Shoelace docs.

### Example of bundling assets

- To include the Shoelace assets in your final bundle (dist), you could add
  the following to your `package.json`:

```json
  "scripts": {
    "clean-icons": "rm -rf public/assets/icons",
    "get-icons": "cp -r node_modules/@shoelace-style/shoelace/dist/assets/icons public/",
    "setup-dist": "pnpm run clean-icons && pnpm run get-icons",
  }
```

- Now the Shoelace assets will be bundled with your dist, under `/shoelace`.
- Following the example, also add `public/assets/icons` to your `.gitignore` file.
