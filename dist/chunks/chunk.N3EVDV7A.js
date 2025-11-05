import{b as d,c as m}from"./chunk.64GCJQA3.js";import{a as l,b as p}from"./chunk.N2W26RCT.js";var y={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:m},g=(e=y,s,t)=>{let{kind:a,metadata:c}=t,i=globalThis.litPropertyMetadata.get(c);if(i===void 0&&globalThis.litPropertyMetadata.set(c,i=new Map),a==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(t.name,e),a==="accessor"){let{name:n}=t;return{set(o){let r=s.get.call(this);s.set.call(this,o),this.requestUpdate(n,r,e)},init(o){return o!==void 0&&this.C(n,void 0,e,o),o}}}if(a==="setter"){let{name:n}=t;return function(o){let r=this[n];s.call(this,o),this.requestUpdate(n,r,e)}}throw Error("Unsupported decorator location: "+a)};function f(e){return(s,t)=>typeof t=="object"?g(e,s,t):((a,c,i)=>{let n=c.hasOwnProperty(i);return c.constructor.createProperty(i,a),n?Object.getOwnPropertyDescriptor(c,i):void 0})(e,s,t)}function v(e){return f(p(l({},e),{state:!0,attribute:!1}))}var u=(e,s,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof s!="object"&&Object.defineProperty(e,s,t),t);function S(e,s){return(t,a,c)=>{let i=n=>{var o,r;return(r=(o=n.renderRoot)==null?void 0:o.querySelector(e))!=null?r:null};if(s){let{get:n,set:o}=typeof a=="object"?t:c!=null?c:(()=>{let r=Symbol();return{get(){return this[r]},set(h){this[r]=h}}})();return u(t,a,{get(){let r=n.call(this);return r===void 0&&(r=i(this),(r!==null||this.hasUpdated)&&o.call(this,r)),r}})}return u(t,a,{get(){return i(this)}})}}export{f as a,v as b,S as c};
/*! Bundled license information:

@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
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
*/
