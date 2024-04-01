# Vue Custom Components

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
