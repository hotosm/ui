# Component Examples

As web components can be rendered in HTML / Markdown, here are some examples.

## Button

<!-- markdownlint-disable -->

<hot-button id="hotButton">Click Me!</hot-button>
<script>
  const button = document.getElementById('hotButton');

  button.addEventListener('click', () => {
    alert('Button Clicked!');
  });
</script>

<br>

<!-- markdownlint-enable -->

## Toolbar

<!-- markdownlint-disable -->

<hot-toolbar></hot-toolbar>

<!-- markdownlint-enable -->
