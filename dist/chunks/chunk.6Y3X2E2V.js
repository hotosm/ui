import{c as d,d as m}from"./chunk.TNLBUOUK.js";import{a as l,b as p}from"./chunk.NI7UJOOZ.js";var y={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:m},g=(e=y,o,t)=>{let{kind:a,metadata:c}=t,i=globalThis.litPropertyMetadata.get(c);if(i===void 0&&globalThis.litPropertyMetadata.set(c,i=new Map),a==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(t.name,e),a==="accessor"){let{name:n}=t;return{set(s){let r=o.get.call(this);o.set.call(this,s),this.requestUpdate(n,r,e)},init(s){return s!==void 0&&this.C(n,void 0,e,s),s}}}if(a==="setter"){let{name:n}=t;return function(s){let r=this[n];o.call(this,s),this.requestUpdate(n,r,e)}}throw Error("Unsupported decorator location: "+a)};function f(e){return(o,t)=>typeof t=="object"?g(e,o,t):((a,c,i)=>{let n=c.hasOwnProperty(i);return c.constructor.createProperty(i,a),n?Object.getOwnPropertyDescriptor(c,i):void 0})(e,o,t)}function v(e){return f(p(l({},e),{state:!0,attribute:!1}))}var O=e=>(o,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(e,o)}):customElements.define(e,o)};var u=(e,o,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof o!="object"&&Object.defineProperty(e,o,t),t);function A(e,o){return(t,a,c)=>{let i=n=>{var s,r;return(r=(s=n.renderRoot)==null?void 0:s.querySelector(e))!=null?r:null};if(o){let{get:n,set:s}=typeof a=="object"?t:c!=null?c:(()=>{let r=Symbol();return{get(){return this[r]},set(h){this[r]=h}}})();return u(t,a,{get(){let r=n.call(this);return r===void 0&&(r=i(this),(r!==null||this.hasUpdated)&&s.call(this,r)),r}})}return u(t,a,{get(){return i(this)}})}}export{O as a,f as b,v as c,A as d};
/*! Bundled license information:

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
