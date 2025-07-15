import{a as b,b as s,c as E,d as T}from"./chunk.6Y3X2E2V.js";import{a as X,e as m,f as Y,g as Z,h as Q,i as J,j as tt,k as et}from"./chunk.TNLBUOUK.js";import{a as C}from"./chunk.NI7UJOOZ.js";var rt=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};var R="";function St(t){R=t}function kt(){if(!R){let t=document.querySelector("[data-fa-kit-code]");t&&St(t.getAttribute("data-fa-kit-code")||"")}return R}function At(t,e,r){let n=kt(),a=n.length>0,o="solid";return e==="classic"&&(r==="thin"&&(o="thin"),r==="light"&&(o="light"),r==="regular"&&(o="regular"),r==="solid"&&(o="solid")),e==="sharp"&&(r==="thin"&&(o="sharp-thin"),r==="light"&&(o="sharp-light"),r==="regular"&&(o="sharp-regular"),r==="solid"&&(o="sharp-solid")),e==="duotone"&&(r==="thin"&&(o="duotone-thin"),r==="light"&&(o="duotone-light"),r==="regular"&&(o="duotone-regular"),r==="solid"&&(o="duotone")),e==="sharp-duotone"&&(r==="thin"&&(o="sharp-duotone-thin"),r==="light"&&(o="sharp-duotone-light"),r==="regular"&&(o="sharp-duotone-regular"),r==="solid"&&(o="sharp-duotone-solid")),e==="brands"&&(o="brands"),a?`https://ka-p.fontawesome.com/releases/v6.7.2/svgs/${o}/${t}.svg?token=${encodeURIComponent(n)}`:`https://ka-f.fontawesome.com/releases/v6.7.2/svgs/${o}/${t}.svg`}var zt={name:"default",resolver:(t,e="classic",r="solid")=>At(t,e,r)},ot=zt;function qt(t){return`data:image/svg+xml,${encodeURIComponent(t)}`}var D={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M341.6 29.2L240.1 130.8l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4L482.8 170.4c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6v42.4L5.4 462.2c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4L89.7 480h42.4c21.2 0 41.6-8.4 56.6-23.4L309.4 335.9l-45.3-45.3L143.4 411.3c-3 3-7.1 4.7-11.3 4.7H96V379.9c0-4.2 1.7-8.3 4.7-11.3L221.4 247.9l-45.3-45.3L55.4 323.3z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714, 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>'}},Vt={name:"system",resolver:(t,e="classic",r="solid")=>{var o,c;let a=(c=(o=D[r][t])!=null?o:D.regular[t])!=null?c:D.regular["circle-question"];return a?qt(a):""}},nt=Vt;var It="classic",Mt=[ot,nt],U=[];function at(t){U.push(t)}function it(t){U=U.filter(e=>e!==t)}function A(t){return Mt.find(e=>e.name===t)}function st(){return It}function $(t,e){let r=C({waitUntilFirstUpdate:!1},e);return(n,a)=>{let{update:o}=n,c=Array.isArray(t)?t:[t];n.update=function(d){c.forEach(v=>{let h=v;if(d.has(h)){let x=d.get(h),_=this[h];x!==_&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[a](x,_)}}),o.call(this,d)}}}var Bt=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,lt=t=>{throw TypeError(t)},i=(t,e,r,n)=>{for(var a=n>1?void 0:n?Tt(e,r):e,o=t.length-1,c;o>=0;o--)(c=t[o])&&(a=(n?c(e,r,a):c(a))||a);return n&&a&&Bt(e,r,a),a},ct=(t,e,r)=>e.has(t)||lt("Cannot "+r),dt=(t,e,r)=>(ct(t,e,"read from private field"),r?r.call(t):e.get(t)),ut=(t,e,r)=>e.has(t)?lt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),ht=(t,e,r,n)=>(ct(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r);var Rt=`:host {
  box-sizing: border-box !important;
}

:host *,
:host *::before,
:host *::after {
  box-sizing: inherit !important;
}

[hidden] {
  display: none !important;
}
`,z,f=class extends et{constructor(){super(),ut(this,z,!1),this.initialReflectedProperties=new Map,this.didSSR=!1||!!this.shadowRoot,this.customStates={set:(e,r)=>{var n;(n=this.internals)!=null&&n.states&&(r?this.internals.states.add(e):this.internals.states.delete(e))},has:e=>{var r;return(r=this.internals)!=null&&r.states?this.internals.states.has(e):!1}};try{this.internals=this.attachInternals()}catch(e){console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,r]of t.elementProperties)r.default==="inherit"&&r.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${r.initial}`,!0)}static get styles(){let t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[Rt,...t].map(e=>typeof e=="string"?X(e):e)}attributeChangedCallback(t,e,r){dt(this,z)||(this.constructor.elementProperties.forEach((n,a)=>{n.reflect&&this[a]!=null&&this.initialReflectedProperties.set(a,this[a])}),ht(this,z,!0)),super.attributeChangedCallback(t,e,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,r)=>{t.has(r)&&this[r]==null&&(this[r]=e)})}firstUpdated(t){var e;super.firstUpdated(t),this.didSSR&&((e=this.shadowRoot)==null||e.querySelectorAll("slot").forEach(r=>{r.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}))}update(t){try{super.update(t)}catch(e){if(this.didSSR&&!this.hasUpdated){let r=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});r.error=e,this.dispatchEvent(r)}throw e}}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,C(C({},t),e)))}};z=new WeakMap;i([s()],f.prototype,"dir",2);i([s()],f.prototype,"lang",2);i([s({type:Boolean,reflect:!0,attribute:"did-ssr"})],f.prototype,"didSSR",2);var{I:se}=tt;var pt=(t,e)=>e===void 0?(t==null?void 0:t._$litType$)!==void 0:(t==null?void 0:t._$litType$)===e;var Dt=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},Ut=`:host {
  --primary-color: currentColor;
  --primary-opacity: 1;
  --secondary-color: currentColor;
  --secondary-opacity: 0.4;

  display: inline-flex;
  box-sizing: content-box !important;
  width: auto;
  height: 1em;
}

svg {
  display: inline-block;
  width: auto;
  height: inherit;
  fill: currentColor;

  .fa-primary {
    color: var(--primary-color);
    opacity: var(--primary-opacity);
  }

  .fa-secondary {
    color: var(--secondary-color);
    opacity: var(--secondary-opacity);
  }
}

:host([fixed-width]) {
  width: 1em;
  justify-content: center;
}
`,S=Symbol(),q=Symbol(),N,O=new Map,u=class extends f{constructor(){super(...arguments),this.svg=null,this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),at(this)}firstUpdated(t){super.firstUpdated(t),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),it(this)}getIconSource(){let t=A(this.library),e=this.family||st();return this.name&&t?{url:t.resolver(this.name,e,this.variant),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}async resolveIcon(t,e){var n;let r;if(e!=null&&e.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=m`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;let a=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(a),this.svg}try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return r.status===410?S:q}catch(a){return q}try{let a=document.createElement("div");a.innerHTML=await r.text();let o=a.firstElementChild;if(((n=o==null?void 0:o.tagName)==null?void 0:n.toLowerCase())!=="svg")return S;N||(N=new DOMParser);let d=N.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return d?(d.part.add("svg"),document.adoptNode(d)):S}catch(a){return S}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var o;let{url:t,fromLibrary:e}=this.getIconSource(),r=e?A(this.library):void 0;if(!t){this.svg=null;return}let n=O.get(t);n||(n=this.resolveIcon(t,r),O.set(t,n));let a=await n;if(a===q&&O.delete(t),t===this.getIconSource().url){if(pt(a)){this.svg=a;return}switch(a){case q:case S:this.svg=null,this.dispatchEvent(new Dt);break;default:this.svg=a.cloneNode(!0),(o=r==null?void 0:r.mutator)==null||o.call(r,this.svg),this.dispatchEvent(new rt)}}}updated(t){var n,a;super.updated(t);let e=A(this.library),r=(n=this.shadowRoot)==null?void 0:n.querySelector("svg");r&&((a=e==null?void 0:e.mutator)==null||a.call(e,r))}render(){return this.hasUpdated?this.svg:m`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};u.css=Ut;i([E()],u.prototype,"svg",2);i([s()],u.prototype,"name",2);i([s()],u.prototype,"family",2);i([s()],u.prototype,"variant",2);i([s({attribute:"fixed-width",type:Boolean,reflect:!0})],u.prototype,"fixedWidth",2);i([s()],u.prototype,"src",2);i([s()],u.prototype,"label",2);i([s()],u.prototype,"library",2);i([$("label")],u.prototype,"handleLabelChange",1);i([$(["family","name","library","variant","src"])],u.prototype,"setIcon",1);u=i([b("wa-icon")],u);var H=new Set,y=new Map,g,P="ltr",F="en",vt=typeof MutationObserver!="undefined"&&typeof document!="undefined"&&typeof document.documentElement!="undefined";if(vt){let t=new MutationObserver(ft);P=document.documentElement.dir||"ltr",F=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function k(...t){t.map(e=>{let r=e.$code.toLowerCase();y.has(r)?y.set(r,Object.assign(Object.assign({},y.get(r)),e)):y.set(r,e),g||(g=e)}),ft()}function ft(){vt&&(P=document.documentElement.dir||"ltr",F=document.documentElement.lang||navigator.language),[...H.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var V=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){H.add(this.host)}hostDisconnected(){H.delete(this.host)}dir(){return`${this.host.dir||P}`.toLowerCase()}lang(){return`${this.host.lang||F}`.toLowerCase()}getTranslationData(e){var r,n;let a=new Intl.Locale(e.replace(/_/g,"-")),o=a==null?void 0:a.language.toLowerCase(),c=(n=(r=a==null?void 0:a.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&n!==void 0?n:"",d=y.get(`${o}-${c}`),v=y.get(o);return{locale:a,language:o,region:c,primary:d,secondary:v}}exists(e,r){var n;let{primary:a,secondary:o}=this.getTranslationData((n=r.lang)!==null&&n!==void 0?n:this.lang());return r=Object.assign({includeFallback:!1},r),!!(a&&a[e]||o&&o[e]||r.includeFallback&&g&&g[e])}term(e,...r){let{primary:n,secondary:a}=this.getTranslationData(this.lang()),o;if(n&&n[e])o=n[e];else if(a&&a[e])o=a[e];else if(g&&g[e])o=g[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof o=="function"?o(...r):o}date(e,r){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),r).format(e)}number(e,r){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),r).format(e)}relativeTime(e,r,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,r)}};var wt={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};k(wt);var mt=wt;var I=class extends V{};k(mt);var gt=()=>({checkValidity(t){let e=t.input,r={message:"",isValid:!0,invalidKeys:[]};if(!e)return r;let n=!0;if("checkValidity"in e&&(n=e.checkValidity()),n)return r;if(r.isValid=!1,"validationMessage"in e&&(r.message=e.validationMessage),!("validity"in e))return r.invalidKeys.push("customError"),r;for(let a in e.validity){if(a==="valid")continue;let o=a;e.validity[o]&&r.invalidKeys.push(o)}return r}});var W=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},Nt=()=>({observedAttributes:["custom-error"],checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}),w=class extends f{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new W))},this.handleInteraction=t=>{var r;let e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===((r=this.assumeInteractionOn)==null?void 0:r.length)&&(this.hasInteracted=!0)},!1||this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[Nt()]}static get observedAttributes(){let t=new Set(super.observedAttributes||[]);for(let e of this.validators)if(e.observedAttributes)for(let r of e.observedAttributes)t.add(r);return[...t]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(!!1&&t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")){let e=this.value;if(Array.isArray(e)){if(this.name){let r=new FormData;for(let n of e)r.append(this.name,n);this.setValue(r,r)}}else this.setValue(e,e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!!1&&!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){let e=t[0],r=t[1],n=t[2];n||(n=this.validationTarget),this.internals.setValidity(e,r,n||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let t=!!this.required,e=this.internals.validity.valid,r=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&r),this.customStates.set("user-valid",e&&r)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...t){let[e,r]=t;this.internals.setFormValue(e,r)}get allValidators(){let t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}let t=this.allValidators;if(!(t!=null&&t.length))return;let e={customError:!!this.customError},r=this.validationTarget||this.input||void 0,n="";for(let a of t){let{isValid:o,message:c,invalidKeys:d}=a.checkValidity(this);o||(n||(n=c),(d==null?void 0:d.length)>=0&&d.forEach(v=>e[v]=!0))}n||(n=this.validationMessage),this.setValidity(e,n,r)}};w.formAssociated=!0;i([s({reflect:!0})],w.prototype,"name",2);i([s({type:Boolean})],w.prototype,"disabled",2);i([s({state:!0,attribute:!1})],w.prototype,"valueHasChanged",2);i([s({state:!0,attribute:!1})],w.prototype,"hasInteracted",2);i([s({attribute:"custom-error",reflect:!0})],w.prototype,"customError",2);i([s({attribute:!1,state:!0,type:Object})],w.prototype,"validity",1);var bt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=r=>{let n=r.target;(this.slotNames.includes("[default]")&&!n.name||n.name&&this.slotNames.includes(n.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var yt=`@layer wa-utilities {
  :host([size='small']),
  .wa-size-s {
    font-size: var(--wa-font-size-s);
  }

  :host([size='medium']),
  .wa-size-m {
    font-size: var(--wa-font-size-m);
  }

  :host([size='large']),
  .wa-size-l {
    font-size: var(--wa-font-size-l);
  }
}
`;var xt=`@layer wa-utilities {
  /** Register color properties so that the space toggle hack can work. */
  @property --wa-color-fill-loud {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-fill-normal {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-fill-quiet {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-border-loud {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-border-normal {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-border-quiet {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-on-loud {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-on-normal {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-on-quiet {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  /**
 * Element defaults.
   We want these to resolve to inherit when inside a variant, and only be applied when not inside an explicit variant.
 */

  :host(wa-button),
  button,
  input[type='button'],
  input[type='submit'],
  :host(wa-tag) {
    --wa-color-fill-loud: var(--wa-no-variant, var(--wa-color-neutral-fill-loud));
    --wa-color-fill-normal: var(--wa-no-variant, var(--wa-color-neutral-fill-normal));
    --wa-color-fill-quiet: var(--wa-no-variant, var(--wa-color-neutral-fill-quiet));
    --wa-color-border-loud: var(--wa-no-variant, var(--wa-color-neutral-border-loud));
    --wa-color-border-normal: var(--wa-no-variant, var(--wa-color-neutral-border-normal));
    --wa-color-border-quiet: var(--wa-no-variant, var(--wa-color-neutral-border-quiet));
    --wa-color-on-loud: var(--wa-no-variant, var(--wa-color-neutral-on-loud));
    --wa-color-on-normal: var(--wa-no-variant, var(--wa-color-neutral-on-normal));
    --wa-color-on-quiet: var(--wa-no-variant, var(--wa-color-neutral-on-quiet));
  }

  :host(wa-callout),
  :host(wa-badge) {
    --wa-color-fill-loud: var(--wa-no-variant, var(--wa-color-brand-fill-loud));
    --wa-color-fill-normal: var(--wa-no-variant, var(--wa-color-brand-fill-normal));
    --wa-color-fill-quiet: var(--wa-no-variant, var(--wa-color-brand-fill-quiet));
    --wa-color-border-loud: var(--wa-no-variant, var(--wa-color-brand-border-loud));
    --wa-color-border-normal: var(--wa-no-variant, var(--wa-color-brand-border-normal));
    --wa-color-border-quiet: var(--wa-no-variant, var(--wa-color-brand-border-quiet));
    --wa-color-on-loud: var(--wa-no-variant, var(--wa-color-brand-on-loud));
    --wa-color-on-normal: var(--wa-no-variant, var(--wa-color-brand-on-normal));
    --wa-color-on-quiet: var(--wa-no-variant, var(--wa-color-brand-on-quiet));
  }

  /**
 * Variants
 */

  :root,
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }

  .wa-neutral,
  .wa-brand,
  .wa-success,
  .wa-warning,
  .wa-danger,
  :host([variant]) {
    --wa-no-variant: /* space toggle */;
  }
}
`;var _t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ct=t=>(...e)=>({_$litDirective$:t,values:e}),M=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var Et=Ct(class extends M{constructor(t){var e;if(super(t),t.type!==_t.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,a;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in e)e[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(e)}let r=t.element.classList;for(let o of this.st)o in e||(r.remove(o),this.st.delete(o));for(let o in e){let c=!!e[o];c===this.st.has(o)||(a=this.nt)!=null&&a.has(o)||(c?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Q}});var p=t=>t!=null?t:J;var Lt=Symbol.for(""),Ot=t=>{if((t==null?void 0:t.r)===Lt)return t==null?void 0:t._$litStatic$};var j=(t,...e)=>({_$litStatic$:e.reduce((r,n,a)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+t[a+1],t[0]),r:Lt}),$t=new Map,K=t=>(e,...r)=>{let n=r.length,a,o,c=[],d=[],v,h=0,x=!1;for(;h<n;){for(v=e[h];h<n&&(o=r[h],(a=Ot(o))!==void 0);)v+=a+e[++h],x=!0;h!==n&&d.push(o),c.push(v),h++}if(h===n&&c.push(e[n]),x){let _=c.join("$$lit$$");(e=$t.get(_))===void 0&&(c.raw=c,$t.set(_,e=c)),r=d}return t(e,...r)},B=K(m),cr=K(Y),dr=K(Z);var Ht=`@layer wa-component {
  :host {
    display: inline-block;
    position: relative;
  }
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  transition-property: background, border, box-shadow, color;
  transition-duration: var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);
  cursor: pointer;
  padding: 0 var(--wa-form-control-padding-inline);
  font-family: inherit;
  font-size: inherit;
  font-weight: var(--wa-font-weight-action);
  line-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
  height: var(--wa-form-control-height);
  width: 100%;

  background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
  border-color: transparent;
  color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
  border-radius: var(--wa-form-control-border-radius);
  border-style: var(--wa-border-style);
  border-width: var(--wa-border-width-s);
}

/* Appearance modifiers */
:host([appearance~='plain']) {
  .button {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: transparent;
    border-color: transparent;
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    }
  }
  .button:not(.disabled):not(.loading):active {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: color-mix(
      in oklab,
      var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
      var(--wa-color-mix-active)
    );
  }
}

:host([appearance~='outlined']) {
  .button {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    }
  }
  .button:not(.disabled):not(.loading):active {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: color-mix(
      in oklab,
      var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
      var(--wa-color-mix-active)
    );
  }
}

:host([appearance~='filled']) {
  .button {
    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
    border-color: transparent;
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-hover)
      );
    }
  }
  .button:not(.disabled):not(.loading):active {
    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
    background-color: color-mix(
      in oklab,
      var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
      var(--wa-color-mix-active)
    );
  }

  &:host([appearance~='outlined']) .button {
    border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
  }
}

:host([appearance~='accent']) {
  .button {
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
    border-color: transparent;
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-hover)
      );
    }
  }
  .button:not(.disabled):not(.loading):active {
    background-color: color-mix(
      in oklab,
      var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
      var(--wa-color-mix-active)
    );
  }
}

/* Focus states */
.button:focus {
  outline: none;
}

.button:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

/* Disabled state */
.button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* When disabled, prevent mouse events from bubbling up from children */
.button.disabled * {
  pointer-events: none;
}

/* Keep it last so Safari doesn't stop parsing this block */
.button::-moz-focus-inner {
  border: 0;
}

/* Icon buttons */
.button.is-icon-button {
  outline-offset: 2px;
  width: var(--wa-form-control-height);
  aspect-ratio: 1;
}

/* Pill modifier */
:host([pill]) .button {
  border-radius: var(--wa-border-radius-pill);
}

/*
 * Label
 */

.start,
.end {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  pointer-events: none;
}

.label {
  display: flex;
}

.label::slotted(wa-icon) {
  align-self: center;
}

/*
 * Caret modifier
 */

wa-icon[part~='caret'] {
  display: flex;
  align-self: center;
  align-items: center;

  &::part(svg) {
    width: 0.875em;
    height: 0.875em;
  }

  .button:has(&) .end {
    display: none;
  }
}

/*
 * Loading modifier
 */

.loading {
  position: relative;
  cursor: wait;

  .start,
  .label,
  .end,
  .caret {
    visibility: hidden;
  }

  wa-spinner {
    --indicator-color: currentColor;
    --track-color: color-mix(in oklab, currentColor, transparent 90%);

    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }
}

/*
 * Badges
 */

button ::slotted(wa-badge) {
  border-color: var(--wa-color-surface-default);
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;
  translate: 50% -50%;
  pointer-events: none;
}

:host(:dir(rtl)) ::slotted(wa-badge) {
  translate: -50% -50%;
}

/*
* Button spacing
*/

slot[name='start']::slotted(*) {
  margin-inline-end: 0.75em;
}

slot[name='end']::slotted(*),
.button:not(.visually-hidden-label) [part~='caret'] {
  margin-inline-start: 0.75em;
}

/*
 * Button group border radius modifications
 */

/* Remove border radius from all grouped buttons by default */
:host(.wa-button-group__button) .button {
  border-radius: 0;
}

/* Horizontal orientation */
:host(.wa-button-group__horizontal.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-form-control-border-radius);
  border-end-start-radius: var(--wa-form-control-border-radius);
}

:host(.wa-button-group__horizontal.wa-button-group__button-last) .button {
  border-start-end-radius: var(--wa-form-control-border-radius);
  border-end-end-radius: var(--wa-form-control-border-radius);
}

/* Vertical orientation */
:host(.wa-button-group__vertical) {
  flex: 1 1 auto;
}

:host(.wa-button-group__vertical) .button {
  width: 100%;
  justify-content: start;
}

:host(.wa-button-group__vertical.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-form-control-border-radius);
  border-start-end-radius: var(--wa-form-control-border-radius);
}

:host(.wa-button-group__vertical.wa-button-group__button-last) .button {
  border-end-start-radius: var(--wa-form-control-border-radius);
  border-end-end-radius: var(--wa-form-control-border-radius);
}

/* Handle pill modifier for button groups */
:host([pill]) .wa-button-group__horizontal.wa-button-group__button-first {
  border-start-start-radius: var(--wa-border-radius-pill);
  border-end-start-radius: var(--wa-border-radius-pill);
}

:host([pill]) .wa-button-group__horizontal.wa-button-group__button-last {
  border-start-end-radius: var(--wa-border-radius-pill);
  border-end-end-radius: var(--wa-border-radius-pill);
}

:host([pill]) .wa-button-group__vertical.wa-button-group__button-first {
  border-start-start-radius: var(--wa-border-radius-pill);
  border-start-end-radius: var(--wa-border-radius-pill);
}

:host([pill]) .wa-button-group__vertical.wa-button-group__button-last {
  border-end-start-radius: var(--wa-border-radius-pill);
  border-end-end-radius: var(--wa-border-radius-pill);
}
`,l=class extends w{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new bt(this,"[default]","start","end"),this.localize=new I(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button",this.form=null}static get validators(){return[...super.validators,gt()]}constructLightDOMButton(){let t=document.createElement("button");return t.type=this.type,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.clipPath="inset(50%)",t.style.overflow="hidden",t.style.whiteSpace="nowrap",this.name&&(t.name=this.name),t.value=this.value||"",["form","formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(e=>{this.hasAttribute(e)&&t.setAttribute(e,this.getAttribute(e))}),t}handleClick(){var r;if(!this.getForm())return;let e=this.constructLightDOMButton();(r=this.parentElement)==null||r.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new W)}handleLabelSlotChange(){let t=this.labelSlot.assignedNodes({flatten:!0}),e=!1,r=!1,n="";[...t].forEach(a=>{a.nodeType===Node.ELEMENT_NODE&&a.localName==="wa-icon"&&(r=!0,e||(e=a.hasAttribute("label"))),a.nodeType===Node.TEXT_NODE&&(n+=a.textContent)}),this.isIconButton=n.trim()===""&&r,this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=this.isLink(),e=t?j`a`:j`button`;return B`
      <${e}
        part="base"
        class=${Et({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${p(t?void 0:this.disabled)}
        type=${p(t?void 0:this.type)}
        title=${this.title}
        name=${p(t?void 0:this.name)}
        value=${p(t?void 0:this.value)}
        href=${p(t?this.href:void 0)}
        target=${p(t?this.target:void 0)}
        download=${p(t?this.download:void 0)}
        rel=${p(t&&this.rel?this.rel:void 0)}
        role=${p(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?B`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?B`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${e}>
    `}};l.css=[Ht,xt,yt];i([T(".button")],l.prototype,"button",2);i([T("slot:not([name])")],l.prototype,"labelSlot",2);i([E()],l.prototype,"invalid",2);i([E()],l.prototype,"isIconButton",2);i([s()],l.prototype,"title",2);i([s({reflect:!0})],l.prototype,"variant",2);i([s({reflect:!0})],l.prototype,"appearance",2);i([s({reflect:!0})],l.prototype,"size",2);i([s({attribute:"with-caret",type:Boolean,reflect:!0})],l.prototype,"withCaret",2);i([s({type:Boolean})],l.prototype,"disabled",2);i([s({type:Boolean,reflect:!0})],l.prototype,"loading",2);i([s({type:Boolean,reflect:!0})],l.prototype,"pill",2);i([s()],l.prototype,"type",2);i([s({reflect:!0})],l.prototype,"name",2);i([s({reflect:!0})],l.prototype,"value",2);i([s({reflect:!0})],l.prototype,"href",2);i([s()],l.prototype,"target",2);i([s()],l.prototype,"rel",2);i([s()],l.prototype,"download",2);i([s({reflect:!0})],l.prototype,"form",2);i([s({attribute:"formaction"})],l.prototype,"formAction",2);i([s({attribute:"formenctype"})],l.prototype,"formEnctype",2);i([s({attribute:"formmethod"})],l.prototype,"formMethod",2);i([s({attribute:"formnovalidate",type:Boolean})],l.prototype,"formNoValidate",2);i([s({attribute:"formtarget"})],l.prototype,"formTarget",2);i([$("disabled",{waitUntilFirstUpdate:!0})],l.prototype,"handleDisabledChange",1);l=i([b("wa-button")],l);var Pt=`:host {
  --track-width: 2px;
  --track-color: var(--wa-color-neutral-fill-normal);
  --indicator-color: var(--wa-color-brand-fill-loud);
  --speed: 2s;

  /* Resizing a spinner element using anything but font-size will break the animation because the animation uses em units.
   Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can grow/shrink and
   break the animation. The use of \`flex: none\` on the host element prevents this by always having the spinner sized
   according to its actual dimensions.
  */
  flex: none;
  display: inline-flex;
  width: 1em;
  height: 1em;
}

svg {
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  animation: spin var(--speed) linear infinite;
}

.track {
  stroke: var(--track-color);
}

.indicator {
  stroke: var(--indicator-color);
  stroke-dasharray: 75, 100;
  stroke-dashoffset: -5;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
`,G=class extends f{constructor(){super(...arguments),this.localize=new I(this)}render(){return m`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `}};G.css=Pt;G=i([b("wa-spinner")],G);export{I as a,$ as b,i as c,f as d,Et as e,bt as f,yt as g,xt as h};
/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
