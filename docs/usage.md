# Usage

It production either the HOT S3-based CDN can be used, or JSDelivr.

## ES6 Modules (NPM Package)

The recommended approach if possible, see the [README](./index.md).

## AWS S3 CDN

```html
// Import the components
<script
  type="module"
  src="https://s3.amazonaws.com/hotosm-ui/latest/components/Button.js"
></script>

// Import the styles (or create your own)
<link
  rel="stylesheet"
  href="https://s3.amazonaws.com/hotosm-ui/latest/theme/styles.css"
/>

<hot-button>Click Me!</hot-button>
```

## JSDelivr (NPM CDN)

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/hotosm/ui@latest/Button.js"
></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/hotosm/ui@latest/theme/styles.css"
/>

<hot-button>Click Me!</hot-button>
```

## Example Component In Markdown

<!-- markdownlint-disable -->

<hot-button id="hotButton">Click Me!</hot-button>
<script>
  const button = document.getElementById('hotButton');

  button.addEventListener('click', () => {
    alert('Button Clicked!');
  });
</script>

<!-- markdownlint-enable -->
