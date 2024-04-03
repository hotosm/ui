# React Demo

## Running

```bash
pnpm run dev
```

This will:

- Serve the compiled web components on <http://localhost:8080>
- Serve app using the web components on <http://localhost:3000>

> Typically the components would be loaded via NPM package, or via CDN.
>
> However, in this example we are building and serving the components
> on localhost, for the purpose of the demo.
>
> <http://localhost:8080> is served via `vite preview`, which is basically just a
> a small webserver - so we have our own localhost CDN!

## Info

There is a great reference for building React wrappers dynamically here:
<https://github.com/shoelace-style/shoelace/blob/next/scripts/make-react.js>
