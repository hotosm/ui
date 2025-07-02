import{b as a}from"./chunk.6ZDEZIWM.js";import{a as c,k as f}from"./chunk.U4P7XQR4.js";import{a as p}from"./chunk.NI7UJOOZ.js";var m=Object.defineProperty,w=Object.getOwnPropertyDescriptor,u=e=>{throw TypeError(e)},n=(e,t,s,r)=>{for(var i=r>1?void 0:r?w(t,s):t,l=e.length-1,h;l>=0;l--)(h=e[l])&&(i=(r?h(t,s,i):h(i))||i);return r&&i&&m(t,s,i),i},v=(e,t,s)=>t.has(e)||u("Cannot "+s),_=(e,t,s)=>(v(e,t,"read from private field"),s?s.call(e):t.get(e)),y=(e,t,s)=>t.has(e)?u("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),S=(e,t,s,r)=>(v(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s);var b=`:host {
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
`,o,d=class extends f{constructor(){super(),y(this,o,!1),this.initialReflectedProperties=new Map,this.didSSR=!1||!!this.shadowRoot,this.customStates={set:(t,s)=>{var r;(r=this.internals)!=null&&r.states&&(s?this.internals.states.add(t):this.internals.states.delete(t))},has:t=>{var s;return(s=this.internals)!=null&&s.states?this.internals.states.has(t):!1}};try{this.internals=this.attachInternals()}catch(t){console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let e=this.constructor;for(let[t,s]of e.elementProperties)s.default==="inherit"&&s.initial!==void 0&&typeof t=="string"&&this.customStates.set(`initial-${t}-${s.initial}`,!0)}static get styles(){let e=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[b,...e].map(t=>typeof t=="string"?c(t):t)}attributeChangedCallback(e,t,s){_(this,o)||(this.constructor.elementProperties.forEach((r,i)=>{r.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),S(this,o,!0)),super.attributeChangedCallback(e,t,s)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,s)=>{e.has(s)&&this[s]==null&&(this[s]=t)})}firstUpdated(e){var t;super.firstUpdated(e),this.didSSR&&((t=this.shadowRoot)==null||t.querySelectorAll("slot").forEach(s=>{s.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}))}update(e){try{super.update(e)}catch(t){if(this.didSSR&&!this.hasUpdated){let s=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});s.error=t,this.dispatchEvent(s)}throw t}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,p(p({},e),t)))}};o=new WeakMap;n([a()],d.prototype,"dir",2);n([a()],d.prototype,"lang",2);n([a({type:Boolean,reflect:!0,attribute:"did-ssr"})],d.prototype,"didSSR",2);export{n as a,d as b};
