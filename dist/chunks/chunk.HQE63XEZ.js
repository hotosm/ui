import{b as f}from"./chunk.U4P7XQR4.js";import{a as c,c as g}from"./chunk.NI7UJOOZ.js";function b(t){var r,e,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(r=0;r<n;r++)t[r]&&(e=b(t[r]))&&(a&&(a+=" "),a+=e)}else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function y(){for(var t,r,e=0,a="",n=arguments.length;e<n;e++)(t=arguments[e])&&(r=b(t))&&(a&&(a+=" "),a+=r);return a}var x=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,p=y,z=(t,r)=>e=>{var a;if((r==null?void 0:r.variants)==null)return p(t,e==null?void 0:e.class,e==null?void 0:e.className);let{variants:n,defaultVariants:s}=r,w=Object.keys(n).map(o=>{let i=e==null?void 0:e[o],d=s==null?void 0:s[o];if(i===null)return null;let l=x(i)||x(d);return n[o][l]}),m=e&&Object.entries(e).reduce((o,i)=>{let[d,l]=i;return l===void 0||(o[d]=l),o},{}),j=r==null||(a=r.compoundVariants)===null||a===void 0?void 0:a.reduce((o,i)=>{let u=i,{class:d,className:l}=u,V=g(u,["class","className"]);return Object.entries(V).every(k=>{let[v,h]=k;return Array.isArray(h)?h.includes(c(c({},s),m)[v]):c(c({},s),m)[v]===h})?[...o,d,l]:o},[]);return p(t,w,j,e==null?void 0:e.class,e==null?void 0:e.className)};var _=z(`
      header
  `,{variants:{size:{small:"header--size-small",medium:"header--size-medium",large:"header--size-large"},borderBottom:{true:"border-bottom"}}}),B=f`
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
`;export{_ as a,B as b};
