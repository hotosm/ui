# Usage

## NPM vs CDN

The components are distributed as both ES Modules for import in an application
that will be bundled later (by rollup, vite, webpack, etc), and also as pre-compiled
bundles for use in cases where a bundler is not involved (e.g. direct HTML).

While it is possible to use either the ES Modules or compiled bundle via either NPM
install or CDN loading, it is recommended to use the modules with a bundler and the
CDN for use in HTML / Markdown / HTMX.

## ES Modules

Using the ES Modules will allow for cherry-picking of only the required components
that your app requires, in addition to tree-shaking in the final bundle
(removing unused code).

### Importing Icons

The icon pack for Shoelace must be imported to display in components.

#### 1. Loading Assets from CDN

If the component is imported via CDN, the icons will be bundled automatically:

```js
import "https://cdn.jsdelivr.net/npm/@shoelace-style
/shoelace@2.15.1/cdn/components/Button.js"
```

#### 2. Bundle Assets Yourself

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

## CDN

### AWS

Versions published under `https://s3.amazonaws.com/hotosm-ui/latest` track the `main`
branch of the repo.

The example below imports the ES Modules:

```html
// Import only the button component
<script
  type="module"
  src="https://s3.amazonaws.com/hotosm-ui/latest/components/Button.js"
></script>

// Import the styles (or import custom styles)
<link
  rel="stylesheet"
  href="https://s3.amazonaws.com/hotosm-ui/latest/dist/styles.css"
/>

<hot-button>Click Me!</hot-button>
```

## JSDelivr (provided by NPM)

This only includes the package releases, with `@latest` pointing to the most
recent tagged release.

The example below imports the compiled bundle (i.e. all components and styles):

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@hotosm/ui@latest/dist/components.js"
></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@hotosm/ui@latest/dist/styles.css"
/>

<hot-button>Click Me!</hot-button>
```

## Using Extra Shoelace Components

The UI library is not comprehensive & you may wish to use additional components
from Shoelace in your app.

Ideally you should install the same version of @shoelace-style/shoelace as this
library.

To determine which version:

- View the
  [@hotosm/ui](https://www.npmjs.com/package/@hotosm/ui?activeTab=versions)
  package on npmjs.com.
- Select the version you are using.
- Go to the `Code` tab, then open the `package.json` file.
- The version of shoelace used should be in the `dependencies` section.

If you are using a bundler, you must bundle the (icon) assets yourself,
as described above.

## Example Markdown Components

<!-- markdownlint-disable -->

<hot-button id="hotButton">Click Me!</hot-button>
<script>
  const button = document.getElementById('hotButton');

  button.addEventListener('click', () => {
    alert('Button Clicked!');
  });
</script>

<br>

<hot-toolbar></hot-toolbar>

<!-- markdownlint-enable -->
