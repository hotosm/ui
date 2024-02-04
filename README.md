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
      <img src="https://github.com/hotosm/ui/actions/workflows/publish.yml/badge.svg" alt="Publish">
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

## [![🚩 Deploy to CDN](https://github.com/hotosm/ui/actions/workflows/cdn_deploy.yml/badge.svg?branch=main)](https://github.com/hotosm/ui/actions/workflows/cdn_deploy.yml)

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

yarn install @hotosm/ui

pnpm install @hotosm/ui
```

## Usage

### HTML / HTMX

```html
<!-- <script src="https://cdn.hotosm.org/ui/latest/core.js"> -->
<script src="https://cdn.hotosm.org/ui/v1/core.js">

<div>
  <hot-button disabled="false"> </hot-button>
</div>
```

> core.js will contain the minimal low level components.
>
> extra.js will contain additional wrapper components.
>
> There should be versioning of the components, plus a /latest/ version too.

### React

Install your required version with a pin, or latest:

```bash
pnpm install @hotosm/ui
```

```js
import { hot-button } from '@hotosm/ui';

const HomePage = ({}) => {
  return (
    <div className="your-css-classes">
      <div
        ...
      >
        <hot-button disabled="false">
        </hot-button>
      </div>
    </div>
  );
};

export default HomePage;
```
