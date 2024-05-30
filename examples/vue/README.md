# Vue Demo

## Running

```bash
pnpm run dev
```

This will serve the app using the web components on <http://localhost:3000>

## Notes

Components must be defined in vite.config.ts:

```js
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['hot-button'].includes(tag),
        }
      },
    })
  ],
```
