import{a as v}from"./chunk.2C7KHCNI.js";import{a as c,c as u}from"./chunk.RGDK5VTE.js";function p(t){var o,e,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(o=0;o<i;o++)t[o]&&(e=p(t[o]))&&(r&&(r+=" "),r+=e)}else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function b(){for(var t,o,e=0,r="",i=arguments.length;e<i;e++)(t=arguments[e])&&(o=p(t))&&(r&&(r+=" "),r+=o);return r}var x=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,y=b,w=(t,o)=>e=>{var r;if((o==null?void 0:o.variants)==null)return y(t,e==null?void 0:e.class,e==null?void 0:e.className);let{variants:i,defaultVariants:s}=o,z=Object.keys(i).map(a=>{let n=e==null?void 0:e[a],d=s==null?void 0:s[a];if(n===null)return null;let l=x(n)||x(d);return i[a][l]}),h=e&&Object.entries(e).reduce((a,n)=>{let[d,l]=n;return l===void 0||(a[d]=l),a},{}),j=o==null||(r=o.compoundVariants)===null||r===void 0?void 0:r.reduce((a,n)=>{let g=n,{class:d,className:l}=g,k=u(g,["class","className"]);return Object.entries(k).every(V=>{let[f,m]=V;return Array.isArray(m)?m.includes(c(c({},s),h)[f]):c(c({},s),h)[f]===m})?[...a,d,l]:a},[]);return y(t,z,j,e==null?void 0:e.class,e==null?void 0:e.className)};var _=w(`
      header
  `,{variants:{size:{small:"header--size-small",medium:"header--size-medium",large:"header--size-large"},borderBottom:{true:"border-bottom"}}}),B=v`
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

  .header--login-button {
    --wa-color-brand-600: var(--hot-color-red-500);
    --wa-color-brand-700: var(--hot-color-red-600);
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

  .login-modal::part(header) {
    padding: 1.5rem 1.5rem 0 1.5rem;
  }

  .login-modal::part(body) {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }

  .login-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .login-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1f2937;
  }

  .login-options {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .login-option {
    background-color: #f5f5f5;
    border: 1px solid #d1d5db;
    color: #374151;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: all 0.3s ease;
    min-height: 3rem;
  }

  .login-option:hover {
    border-color: #d73f3f;
    color: #d73f3f;
  }

  .login-option-icon {
    width: 2.5rem;
    height: 2.5rem;
    max-width: 2.5rem;
    min-width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .login-option-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .login-option-text {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5;
  }
`;export{_ as a,B as b};
