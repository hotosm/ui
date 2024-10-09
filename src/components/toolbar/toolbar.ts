import Toolbar from './toolbar.component.js';

export * from './toolbar.component.js';
export default Toolbar;

declare global {
  interface HTMLElementTagNameMap {
    'hot-toolbar': Toolbar;
  }
}

