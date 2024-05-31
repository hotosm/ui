# hot-button

## Properties

| Property   | Attribute  | Type                       | Default      | Description                                    |
|------------|------------|----------------------------|--------------|------------------------------------------------|
| `disabled` | `disabled` | `boolean`                  | false        | Disable the button, greyed out, not clickable. |
| `name`     | `name`     | `string`                   | "hot-button" |                                                |
| `variant`  | `variant`  | `"primary" \| "secondary"` | "primary"    | CVA button type.                               |

## Events

| Event   |
|---------|
| `click` |

## Example

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
