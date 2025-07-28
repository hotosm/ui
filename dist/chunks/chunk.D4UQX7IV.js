import{b as f}from"./chunk.TNLBUOUK.js";import{a as h,c as u}from"./chunk.NI7UJOOZ.js";function p(t){var r,e,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(r=0;r<i;r++)t[r]&&(e=p(t[r]))&&(a&&(a+=" "),a+=e)}else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function b(){for(var t,r,e=0,a="",i=arguments.length;e<i;e++)(t=arguments[e])&&(r=p(t))&&(a&&(a+=" "),a+=r);return a}var x=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,y=b,w=(t,r)=>e=>{var a;if((r==null?void 0:r.variants)==null)return y(t,e==null?void 0:e.class,e==null?void 0:e.className);let{variants:i,defaultVariants:s}=r,z=Object.keys(i).map(o=>{let n=e==null?void 0:e[o],d=s==null?void 0:s[o];if(n===null)return null;let l=x(n)||x(d);return i[o][l]}),m=e&&Object.entries(e).reduce((o,n)=>{let[d,l]=n;return l===void 0||(o[d]=l),o},{}),j=r==null||(a=r.compoundVariants)===null||a===void 0?void 0:a.reduce((o,n)=>{let v=n,{class:d,className:l}=v,k=u(v,["class","className"]);return Object.entries(k).every(V=>{let[g,c]=V;return Array.isArray(c)?c.includes(h(h({},s),m)[g]):h(h({},s),m)[g]===c})?[...o,d,l]:o},[]);return y(t,z,j,e==null?void 0:e.class,e==null?void 0:e.className)};var S=w(`
      header
  `,{variants:{size:{small:"header--size-small",medium:"header--size-medium",large:"header--size-large"},borderBottom:{true:"border-bottom"}}}),_=f`
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
    border-bottom: 2px solid transparent;
    transition: border-color 0.2s ease;
  }

  .header--tab[active]::part(base) {
    border-bottom-color: var(--hot-color-neutral-1000);
    font-weight: var(--hot-font-weight-semibold);
  }

  .header--tab:hover::part(base) {
    color: var(--hot-color-neutral-700);
  }

  .header--tab[active]:hover::part(base) {
    color: var(--hot-color-neutral-950);
  }

  .header--tab-group::part(base) {
    --track-color: transparent;
    --indicator-color: transparent;
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



  /* Login Modal Styles */
  .login-modal {
    --width: 35rem;
    --border-radius: 8px;
    --background-color: white;
  }

  /* --- Responsive styles for mobile --- */
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      align-items: stretch;
      padding: var(--hot-spacing-small);
      height: auto;
    }
    .header--link {
      justify-content: flex-start;
      gap: var(--hot-spacing-x-small);
    }
    .header--title {
      font-size: var(--hot-font-size-large);
    }
    .header--nav {
      display: none;
    }
    .header--nav-mobile {
      display: block;
      width: 100%;
      margin-top: var(--hot-spacing-small);
    }
    .header--right-section {
      justify-content: flex-end;
      width: 100%;
      margin-top: var(--hot-spacing-small);
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
  }
`;export{S as a,_ as b};
