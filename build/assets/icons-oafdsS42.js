import{i as R,u as Z,f as Y,h as G,k,R as J,D as K}from"./lit-element-CPYlYYac.js";import{n as Q}from"./directive-helpers-CHX3h6dV.js";var L="";function E(t){L=t}function W(t=""){if(!L){const e=[...document.getElementsByTagName("script")],r=e.find(i=>i.hasAttribute("data-shoelace"));if(r)E(r.getAttribute("data-shoelace"));else{const i=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let o="";i&&(o=i.getAttribute("src")),E(o.split("/").slice(0,-1).join("/"))}}return L.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var X={name:"default",resolver:t=>W(`assets/icons/${t}.svg`)},ee=X,A={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},te={name:"system",resolver:t=>t in A?`data:image/svg+xml,${encodeURIComponent(A[t])}`:""},re=te,y=[ee,re],x=[];function se(t){x.push(t)}function ie(t){x=x.filter(e=>e!==t)}function B(t){return y.find(e=>e.name===t)}function oe(t,e){ae(t),y.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),x.forEach(r=>{r.library===t&&r.setIcon()})}function ae(t){y=y.filter(e=>e.name!==t)}var le=R`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,T=Object.defineProperty,ne=Object.defineProperties,ce=Object.getOwnPropertyDescriptor,he=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,z=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),j=(t,e,r)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,V=(t,e)=>{for(var r in e||(e={}))de.call(e,r)&&j(t,r,e[r]);if(O)for(var r of O(e))ue.call(e,r)&&j(t,r,e[r]);return t},Ee=(t,e)=>ne(t,he(e)),h=(t,e,r,i)=>{for(var o=i>1?void 0:i?ce(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(i?a(e,r,o):a(o))||o);return i&&o&&T(e,r,o),o},ve=function(t,e){this[0]=t,this[1]=e},Ae=t=>{var e=t[z("asyncIterator")],r=!1,i,o={};return e==null?(e=t[z("iterator")](),i=s=>o[s]=a=>e[s](a)):(e=e.call(t),i=s=>o[s]=a=>{if(r){if(r=!1,s==="throw")throw a;return a}return r=!0,{done:!1,value:new ve(new Promise(l=>{var n=e[s](a);if(!(n instanceof Object))throw TypeError("Object expected");l(n)}),1)}}),o[z("iterator")]=()=>o,i("next"),"throw"in e?i("throw"):o.throw=s=>{throw s},"return"in e&&i("return"),o};function H(t,e){const r=V({waitUntilFirstUpdate:!1},e);return(i,o)=>{const{update:s}=i,a=Array.isArray(t)?t:[t];i.update=function(l){a.forEach(n=>{const c=n;if(l.has(c)){const w=l.get(c),p=this[c];w!==p&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](w,p)}}),s.call(this,l)}}}var ge=R`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:Y},pe=(t=we,e,r)=>{const{kind:i,metadata:o}=r;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(r.name,t),i==="accessor"){const{name:a}=r;return{set(l){const n=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,n,t)},init(l){return l!==void 0&&this.P(a,void 0,t),l}}}if(i==="setter"){const{name:a}=r;return function(l){const n=this[a];e.call(this,l),this.requestUpdate(a,n,t)}}throw Error("Unsupported decorator location: "+i)};function v(t){return(e,r)=>typeof r=="object"?pe(t,e,r):((i,o,s)=>{const a=o.hasOwnProperty(s);return o.constructor.createProperty(s,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(o,s):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(t){return v({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Be(t,e){return(r,i,o)=>{const s=a=>{var l;return((l=a.renderRoot)==null?void 0:l.querySelector(t))??null};return me(r,i,{get(){return s(this)}})}}var m=class extends G{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const r=new CustomEvent(t,V({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(r),r}static define(t,e=this,r={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,r)}catch{customElements.define(t,class extends e{},r)}return}let o=" (unknown version)",s=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in i&&i.version&&(s=" v"+i.version),!(o&&s&&o===s)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${s} has already been registered.`)}};m.version="2.16.0";m.dependencies={};h([v()],m.prototype,"dir",2);h([v()],m.prototype,"lang",2);var f=Symbol(),b=Symbol(),C,_=new Map,d=class extends m{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var r;let i;if(e!=null&&e.spriteSheet){this.svg=k`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(o),this.svg}try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?f:b}catch{return b}try{const o=document.createElement("div");o.innerHTML=await i.text();const s=o.firstElementChild;if(((r=s==null?void 0:s.tagName)==null?void 0:r.toLowerCase())!=="svg")return f;C||(C=new DOMParser);const l=C.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):f}catch{return f}}connectedCallback(){super.connectedCallback(),se(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ie(this)}getIconSource(){const t=B(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:r}=this.getIconSource(),i=r?B(this.library):void 0;if(!e){this.svg=null;return}let o=_.get(e);if(o||(o=this.resolveIcon(e,i),_.set(e,o)),!this.initialRender)return;const s=await o;if(s===b&&_.delete(e),e===this.getIconSource().url){if(Q(s)){this.svg=s;return}switch(s){case b:case f:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(t=i==null?void 0:i.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};d.styles=[ge,le];h([fe()],d.prototype,"svg",2);h([v({reflect:!0})],d.prototype,"name",2);h([v()],d.prototype,"src",2);h([v()],d.prototype,"label",2);h([v({reflect:!0})],d.prototype,"library",2);h([H("label")],d.prototype,"handleLabelChange",1);h([H(["name","src","library"])],d.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ye=t=>(...e)=>({_$litDirective$:t,values:e});class xe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this.t=e,this._$AM=r,this.i=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=ye(class extends xe{constructor(t){var e;if(super(t),t.type!==be.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,o;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(e)}const r=t.element.classList;for(const s of this.st)s in e||(r.remove(s),this.st.delete(s));for(const s in e){const a=!!e[s];a===this.st.has(s)||(o=this.nt)!=null&&o.has(s)||(a?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return J}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=Symbol.for(""),ze=t=>{if((t==null?void 0:t.r)===U)return t==null?void 0:t._$litStatic$},je=(t,...e)=>({_$litStatic$:e.reduce((r,i,o)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[o+1],t[0]),r:U}),P=new Map,Ce=t=>(e,...r)=>{const i=r.length;let o,s;const a=[],l=[];let n,c=0,w=!1;for(;c<i;){for(n=e[c];c<i&&(s=r[c],(o=ze(s))!==void 0);)n+=o+e[++c],w=!0;c!==i&&l.push(s),a.push(n),c++}if(c===i&&a.push(e[i]),w){const p=a.join("$$lit$$");(e=P.get(p))===void 0&&(a.raw=a,P.set(p,e=a)),r=l}return t(e,...r)},Pe=Ce(k);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=t=>t??K,M=new Set,g=new Map;let u,$="ltr",S="en";const D=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(D){const t=new MutationObserver(q);$=document.documentElement.dir||"ltr",S=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function N(...t){t.map(e=>{const r=e.$code.toLowerCase();g.has(r)?g.set(r,Object.assign(Object.assign({},g.get(r)),e)):g.set(r,e),u||(u=e)}),q()}function q(){D&&($=document.documentElement.dir||"ltr",S=document.documentElement.lang||navigator.language),[...M.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let _e=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){M.add(this.host)}hostDisconnected(){M.delete(this.host)}dir(){return`${this.host.dir||$}`.toLowerCase()}lang(){return`${this.host.lang||S}`.toLowerCase()}getTranslationData(e){var r,i;const o=new Intl.Locale(e.replace(/_/g,"-")),s=o==null?void 0:o.language.toLowerCase(),a=(i=(r=o==null?void 0:o.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",l=g.get(`${s}-${a}`),n=g.get(s);return{locale:o,language:s,region:a,primary:l,secondary:n}}exists(e,r){var i;const{primary:o,secondary:s}=this.getTranslationData((i=r.lang)!==null&&i!==void 0?i:this.lang());return r=Object.assign({includeFallback:!1},r),!!(o&&o[e]||s&&s[e]||r.includeFallback&&u&&u[e])}term(e,...r){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let s;if(i&&i[e])s=i[e];else if(o&&o[e])s=o[e];else if(u&&u[e])s=u[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...r):s}date(e,r){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),r).format(e)}number(e,r){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),r).format(e)}relativeTime(e,r,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,r)}};var F={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};N(F);var Le=F,ke=class extends _e{};N(Le);const I={list:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
  `,"info-circle":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
  `,"arrow-counterclockwise":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
      <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
    </svg>
  `,"arrow-clockwise":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
    </svg>
  `,"type-bold":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-bold" viewBox="0 0 16 16">
      <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
    </svg>
  `,"type-italic":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-italic" viewBox="0 0 16 16">
      <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/>
    </svg>
  `,"type-underline":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-underline" viewBox="0 0 16 16">
      <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z"/>
    </svg>
  `,"justify-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
    </svg>
  `,justify:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
    </svg>
  `,"justify-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
    </svg>
  `,"person-circle":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
    </svg>  
  `},Me=t=>t in I?`data:image/svg+xml,${encodeURIComponent(I[t])}`:"";function Te(){oe("bundled",{resolver:Me})}export{ke as L,Oe as R,d as S,h as _,m as a,je as b,ge as c,Te as d,Be as e,Ee as f,V as g,me as h,ye as i,xe as j,Pe as k,be as l,Ae as m,v as n,fe as r,Ie as t,H as w};
