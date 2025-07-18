import{b as p}from"./chunk.TNLBUOUK.js";import{a as h,c as g}from"./chunk.NI7UJOOZ.js";function b(r){var e,o,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var i=r.length;for(e=0;e<i;e++)r[e]&&(o=b(r[e]))&&(t&&(t+=" "),t+=o)}else for(o in r)r[o]&&(t&&(t+=" "),t+=o);return t}function f(){for(var r,e,o=0,t="",i=arguments.length;o<i;o++)(r=arguments[o])&&(e=b(r))&&(t&&(t+=" "),t+=e);return t}var y=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,x=f,w=(r,e)=>o=>{var t;if((e==null?void 0:e.variants)==null)return x(r,o==null?void 0:o.class,o==null?void 0:o.className);let{variants:i,defaultVariants:s}=e,z=Object.keys(i).map(a=>{let l=o==null?void 0:o[a],d=s==null?void 0:s[a];if(l===null)return null;let n=y(l)||y(d);return i[a][n]}),m=o&&Object.entries(o).reduce((a,l)=>{let[d,n]=l;return n===void 0||(a[d]=n),a},{}),A=e==null||(t=e.compoundVariants)===null||t===void 0?void 0:t.reduce((a,l)=>{let u=l,{class:d,className:n}=u,O=g(u,["class","className"]);return Object.entries(O).every(C=>{let[v,c]=C;return Array.isArray(c)?c.includes(h(h({},s),m)[v]):h(h({},s),m)[v]===c})?[...a,d,n]:a},[]);return x(r,z,A,o==null?void 0:o.class,o==null?void 0:o.className)};var V=w(`
      header
  `,{variants:{size:{small:"header--size-small",medium:"header--size-medium",large:"header--size-large"},borderBottom:{true:"border-bottom"}}}),F=p`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--hot-spacing-small);
  }

  .header.border-bottom {
    border-bottom: var(--hot-spacing-3x-small) solid var(--hot-color-neutral-50);
  }

  .header--size-small {
    height: var(--hot-spacing-4x-large);
  }

  .header--size-medium {
    height: calc(var(--hot-spacing-4x-large) * 2);
  }

  .header--size-large {
    height: calc(var(--hot-spacing-4x-large) * 4);
  }

  .header--link {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--hot-spacing-small);
  }

  .header--title {
    color: var(--hot-color-neutral-950);
    font-family: var(--hot-font-sans);
    font-size: var(--hot-font-size-x-large);
  }

  .header--tab::part(base) {
    font-size: var(--hot-font-size-medium);
    font-weight: var(--hot-font-weight-normal);
    color: var(--hot-color-neutral-950);
    padding: var(--hot-spacing-small) var(--hot-spacing-small);
  }

  .header--tab-group::part(base) {
    --track-color: transparent;
    --indicator-color: none;
  }

  .header--nav {
    justify-content: space-between;
    justify-items: center;
    gap: var(--hot-spacing-medium);
    font-weight: var(--hot-font-weight-semibold);
  }

  .header--nav-mobile {
  }

  .header--person-circle {
    font-size: var(--hot-font-size-x-large);
  }

  .header--drawer {
    font-size: var(--hot-font-size-x-large)
  }

  .header--right-section {
    display: flex;
    align-items: center;
    gap: var(--hot-spacing-small);
  }

  .header--logo-img {
  }

  .header--tab {
    border-bottom: 2px solid;
    border-color: transparent;
  }
  .header--tab-active {
    border-color: var(--hot-color-neutral-1000);
  }

  /* Login Modal Styles */
  .login-modal {
    --width: 35rem;
    --border-radius: 8px;
    --background-color: white;
  }

  /* Global wa-button styling when shadow DOM is disabled */
  wa-button {
    /* HOT Color primitives */
    --hot-color-red-950: #A52A28;
    --hot-color-red-900: #B9302D;
    --hot-color-red-800: #B83032;
    --hot-color-red-700: #C53639;
    --hot-color-red-600: #D73F3F;
    --hot-color-red-500: #F34D47;
    --hot-color-red-400: #ED5C5E;
    --hot-color-red-300: #E27A7D;
    --hot-color-red-200: #EC9EA1;
    --hot-color-red-100: #FDD0D6;
    --hot-color-red-50: #FEECEF;

    /* HOT Semantic colors */
    --hot-color-primary-950: var(--hot-color-red-950);
    --hot-color-primary-900: var(--hot-color-red-900);
    --hot-color-primary-800: var(--hot-color-red-800);
    --hot-color-primary-700: var(--hot-color-red-700);
    --hot-color-primary-600: var(--hot-color-red-600);
    --hot-color-primary-500: var(--hot-color-red-500);
    --hot-color-primary-400: var(--hot-color-red-400);
    --hot-color-primary-300: var(--hot-color-red-300);
    --hot-color-primary-200: var(--hot-color-red-200);
    --hot-color-primary-100: var(--hot-color-red-100);
    --hot-color-primary-50: var(--hot-color-red-50);

    /* HOT Typography */
    --hot-font-sans: Archivo, -apple-system, Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    --hot-font-weight-semibold: 500;
    --hot-font-weight-bold: 700;

    /* HOT Spacing */
    --hot-spacing-x-small: 0.5rem;
    --hot-spacing-small: 0.75rem;
    --hot-spacing-medium: 1rem;
    --hot-spacing-large: 1.25rem;

    /* HOT Border radius */
    --hot-border-radius-medium: 0.25rem;
    --hot-border-radius-circle: 50%;

    /* HOT Font sizes */
    --hot-font-size-small: 0.875rem;
    --hot-font-size-medium: 1rem;
    --hot-font-size-large: 1.25rem;
  }

  /* Apply HOT styling to button parts */
  wa-button::part(base) {
    font-family: var(--hot-font-sans);
    font-weight: var(--hot-font-weight-semibold);
    border-radius: var(--hot-border-radius-medium);
    transition: all 0.2s ease-in-out;
  }

  wa-button::part(base):hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  wa-button::part(base):active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  wa-button::part(label) {
    font-family: var(--hot-font-sans);
    font-weight: var(--hot-font-weight-semibold);
  }

  /* Login button specific styling */
  wa-button.login-button::part(base) {
    background: linear-gradient(135deg, var(--hot-color-primary-500), var(--hot-color-primary-600));
    border: none;
    color: white;
    padding: var(--hot-spacing-small) var(--hot-spacing-medium);
    font-size: var(--hot-font-size-medium);
  }

  wa-button.login-button::part(base):hover {
    background: linear-gradient(135deg, var(--hot-color-primary-600), var(--hot-color-primary-700));
  }
`;export{V as a,F as b};
