// Index to import all components together
// import '@hotosm/ui/components';

// setBasePath makes the icons available via CDN, instead of expecting them to be
// on the webserver the runs the web-component
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('https://cdn.jsdelivr.net/npm/@hotosm/ui@latest/dist');

export { default as Button } from './Button';
export { default as Header } from './Header';
export { default as Toolbar } from './Toolbar';
export { default as Tracking } from './Tracking';
