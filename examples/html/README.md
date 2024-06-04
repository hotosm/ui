# HTML Demo

## Running

```bash
pnpm run dev
```

This will serve the app using the web components on <http://localhost:3000>

## Notes

- Typically loading @hotosm/ui via CDN would import everything you need:
  JS, CSS, Icons.
- This example manually copies these files to the public dir prior to running the
  webserver, as a self-contained demo.
- In reality, the `components.js` and `style.css` files should be loaded via CDN.
