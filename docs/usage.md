# Usage

It production either the HOT S3-based CDN can be used, or JSDelivr.

## AWS S3 CDN

```html
// Import the components
<script
  type="module"
  src="https://s3.amazonaws.com/hotosm-ui/latest/ui.js"
></script>

// Import the styles (or create your own)
<link
  rel="stylesheet"
  href="https://s3.amazonaws.com/hotosm-ui/latest/style.css"
/>

<hot-button>Click Me!</hot-button>
```

## JSDelivr (NPM CDN)

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/hotosm/ui@latest/dist/ui.js"
></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/hotosm/ui@latest/dist/style.css"
/>

<hot-button>Click Me!</hot-button>
```

## Github Pages

This deployment is mostly use for development and tracks the most recent
changes.

```html
<script type="module" src="https://hotosm.github.io/ui/dist/ui.js"></script>
<link rel="stylesheet" href="https://hotosm.github.io/ui/dist/style.css" />

<hot-button>Click Me!</hot-button>
```

## Example

<!-- markdownlint-disable -->

<hot-button id="hotButton">Click Me!</hot-button>
<script>
  const button = document.getElementById('hotButton');

  button.addEventListener('click', () => {
    alert('Button Clicked!');
  });
</script>

<!-- markdownlint-enable -->
