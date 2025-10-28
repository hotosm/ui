import{a as h,b as v}from"./chunk.ZYCXU3RQ.js";import{css as V}from"lit";function f(t){var r,e,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(r=0;r<n;r++)t[r]&&(e=f(t[r]))&&(a&&(a+=" "),a+=e)}else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function p(){for(var t,r,e=0,a="",n=arguments.length;e<n;e++)(t=arguments[e])&&(r=f(t))&&(a&&(a+=" "),a+=r);return a}var b=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,x=p,y=(t,r)=>e=>{var a;if((r==null?void 0:r.variants)==null)return x(t,e==null?void 0:e.class,e==null?void 0:e.className);let{variants:n,defaultVariants:s}=r,w=Object.keys(n).map(o=>{let i=e==null?void 0:e[o],d=s==null?void 0:s[o];if(i===null)return null;let l=b(i)||b(d);return n[o][l]}),m=e&&Object.entries(e).reduce((o,i)=>{let[d,l]=i;return l===void 0||(o[d]=l),o},{}),z=r==null||(a=r.compoundVariants)===null||a===void 0?void 0:a.reduce((o,i)=>{let g=i,{class:d,className:l}=g,j=v(g,["class","className"]);return Object.entries(j).every(k=>{let[u,c]=k;return Array.isArray(c)?c.includes(h(h({},s),m)[u]):h(h({},s),m)[u]===c})?[...o,d,l]:o},[]);return x(t,w,z,e==null?void 0:e.class,e==null?void 0:e.className)};var S=y(`
      header
  `,{variants:{size:{small:"header--size-small",medium:"header--size-medium",large:"header--size-large"},borderBottom:{true:"border-bottom"}}}),_=V`
  .header {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    height: auto;
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
    justify-content: flex-start;
    padding-right: var(--hot-spacing-2x-small);
    gap: var(--hot-spacing-x-small);
  }

  .header--title {
    color: var(--hot-color-neutral-950);
    font-family: var(--hot-font-sans);
    font-size: var(--hot-font-size-large);
  }

  .header--tab::part(base) {
    font-size: var(--hot-font-size-medium);
    font-weight: var(--hot-font-weight-normal);
    color: var(--hot-color-neutral-950);
    padding: var(--hot-spacing-small) var(--hot-spacing-small);
    border-bottom: 3px solid transparent;
    transition: all 0.2s ease;
    text-transform: uppercase;
    font-weight: var(--hot-font-weight-bold);
    letter-spacing: 0.5px;
  }

  .header--tab[active]::part(base) {
    border-bottom-color: var(--hot-color-red-500);
    font-weight: var(--hot-font-weight-bold);
    color: var(--hot-color-neutral-950);
  }

  .header--tab:hover::part(base) {
    color: var(--hot-color-neutral-700);
    border-bottom-color: var(--hot-color-red-300);
  }

  .header--tab[active]:hover::part(base) {
    color: var(--hot-color-neutral-950);
    border-bottom-color: var(--hot-color-red-600);
  }

  .header--tab-group::part(base) {
    --track-color: transparent;
    --indicator-color: transparent;
  }

  .header--nav {
    display: none;
  }

  .header--nav-mobile {
    display: block;
    width: 100%;
    margin-top: var(--hot-spacing-small);
  }

  .header--person-circle {
    font-size: var(--hot-font-size-x-large);
  }

  .header--drawer {
    font-size: var(--hot-font-size-x-large);
  }

  .header--right-section {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--hot-spacing-x-small);
  }

  .header--logo-img {
    max-height: 2.5rem;
    width: auto;
  }

  wa-button[appearance="outlined"] {
    /* Make drawer button larger for touch */
    min-width: 2.5rem;
    min-height: 2.5rem;
    padding: 0.5rem;
  }

  /* Login Modal Styles */
  .login-modal {
    --width: 35rem;
    --border-radius: 8px;
    --background-color: white;
  }

  /* --- Responsive styles for tablet and desktop --- */
  @media (min-width: 769px) {
    .header {
      align-items: center;
      height: auto;
    }

    .header--link {
      justify-content: space-between;
      padding-right: 0;
      gap: var(--hot-spacing-small);
    }

    .header--title {
      font-size: var(--hot-font-size-x-large);
    }

    .header--nav {
      display: flex;
      justify-content: space-between;
      justify-items: center;
      gap: var(--hot-spacing-medium);
      font-weight: var(--hot-font-weight-semibold);
    }

    .header--nav-mobile {
      display: none;
    }

    .header--right-section {
      justify-content: center;
      margin-top: 0;
      gap: var(--hot-spacing-small);
    }

    .header--logo-img {
      max-height: none;
      width: auto;
    }

    wa-button[appearance="outlined"] {
      min-width: auto;
      min-height: auto;
      padding: initial;
    }
  }
`;export{S as a,_ as b};
