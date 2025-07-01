import{b as d,c as m}from"./chunk.2C7KHCNI.js";import{a as l,b as p}from"./chunk.RGDK5VTE.js";var h={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:m},y=(t=h,n,e)=>{let{kind:a,metadata:c}=e,r=globalThis.litPropertyMetadata.get(c);if(r===void 0&&globalThis.litPropertyMetadata.set(c,r=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(e.name,t),a==="accessor"){let{name:o}=e;return{set(s){let u=n.get.call(this);n.set.call(this,s),this.requestUpdate(o,u,t)},init(s){return s!==void 0&&this.C(o,void 0,t,s),s}}}if(a==="setter"){let{name:o}=e;return function(s){let u=this[o];n.call(this,s),this.requestUpdate(o,u,t)}}throw Error("Unsupported decorator location: "+a)};function f(t){return(n,e)=>typeof e=="object"?y(t,n,e):((a,c,r)=>{let o=c.hasOwnProperty(r);return c.constructor.createProperty(r,a),o?Object.getOwnPropertyDescriptor(c,r):void 0})(t,n,e)}function q(t){return f(p(l({},t),{state:!0,attribute:!1}))}export{f as a,q as b};
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
