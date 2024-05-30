// import { rollupPluginHTML as html } from "@web/rollup-plugin-html";
import css from 'rollup-plugin-css-only'
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
// Replace with @lit-labs/rollup-plugin-minify-html-literals when available
// https://github.com/lit/lit/issues/4273
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';

export default {
  input: 'components/index.js',
  plugins: [
    // HTML files for non-SPA app
    // html({
    //   input: 'index.html',
    // }),

    // Resolve bare module specifiers to relative paths
    resolve(),

    // Minify HTML template literals
    minifyHTML.default(),

    // Bundle styles into dist/bundle.css
    css({
      output: 'styles.css' 
    }),

    // Bundles additional assets (images)
    importMetaAssets(),

    // Minify JS
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
    }),

    // Print bundle summary
    summary(),
  ],
  output: {
    dir: 'dist',
    entryFileNames: 'components.js',
  },

  preserveEntrySignatures: 'strict',
};
