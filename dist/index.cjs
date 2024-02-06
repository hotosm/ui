"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// node_modules/.pnpm/@lit-labs+ssr-dom-shim@1.1.2/node_modules/@lit-labs/ssr-dom-shim/lib/element-internals.js
var ElementInternalsShim = class ElementInternals {
  get shadowRoot() {
    return this.__host.__shadowRoot;
  }
  constructor(_host) {
    this.ariaAtomic = "";
    this.ariaAutoComplete = "";
    this.ariaBraileLabel = "";
    this.ariaBraileRoleDescription = "";
    this.ariaBusy = "";
    this.ariaChecked = "";
    this.ariaColCount = "";
    this.ariaColIndex = "";
    this.ariaColSpan = "";
    this.ariaCurrent = "";
    this.ariaDescription = "";
    this.ariaDisabled = "";
    this.ariaExpanded = "";
    this.ariaHasPopup = "";
    this.ariaHidden = "";
    this.ariaInvalid = "";
    this.ariaKeyShortcuts = "";
    this.ariaLabel = "";
    this.ariaLevel = "";
    this.ariaLive = "";
    this.ariaModal = "";
    this.ariaMultiLine = "";
    this.ariaMultiSelectable = "";
    this.ariaOrientation = "";
    this.ariaPlaceholder = "";
    this.ariaPosInSet = "";
    this.ariaPressed = "";
    this.ariaReadOnly = "";
    this.ariaRequired = "";
    this.ariaRoleDescription = "";
    this.ariaRowCount = "";
    this.ariaRowIndex = "";
    this.ariaRowSpan = "";
    this.ariaSelected = "";
    this.ariaSetSize = "";
    this.ariaSort = "";
    this.ariaValueMax = "";
    this.ariaValueMin = "";
    this.ariaValueNow = "";
    this.ariaValueText = "";
    this.role = "";
    this.form = null;
    this.labels = [];
    this.states = /* @__PURE__ */ new Set();
    this.validationMessage = "";
    this.validity = {};
    this.willValidate = true;
    this.__host = _host;
  }
  checkValidity() {
    console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true.");
    return true;
  }
  reportValidity() {
    return true;
  }
  setFormValue() {
  }
  setValidity() {
  }
};

// node_modules/.pnpm/@lit-labs+ssr-dom-shim@1.1.2/node_modules/@lit-labs/ssr-dom-shim/index.js
var attributes = /* @__PURE__ */ new WeakMap();
var attributesForElement = (element) => {
  let attrs = attributes.get(element);
  if (attrs === void 0) {
    attributes.set(element, attrs = /* @__PURE__ */ new Map());
  }
  return attrs;
};
var ElementShim = class Element {
  constructor() {
    this.__shadowRootMode = null;
    this.__shadowRoot = null;
    this.__internals = null;
  }
  get attributes() {
    return Array.from(attributesForElement(this)).map(([name, value]) => ({
      name,
      value
    }));
  }
  get shadowRoot() {
    if (this.__shadowRootMode === "closed") {
      return null;
    }
    return this.__shadowRoot;
  }
  setAttribute(name, value) {
    attributesForElement(this).set(name, String(value));
  }
  removeAttribute(name) {
    attributesForElement(this).delete(name);
  }
  hasAttribute(name) {
    return attributesForElement(this).has(name);
  }
  attachShadow(init) {
    const shadowRoot = { host: this };
    this.__shadowRootMode = init.mode;
    if (init && init.mode === "open") {
      this.__shadowRoot = shadowRoot;
    }
    return shadowRoot;
  }
  attachInternals() {
    if (this.__internals !== null) {
      throw new Error(`Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.`);
    }
    const internals = new ElementInternalsShim(this);
    this.__internals = internals;
    return internals;
  }
  getAttribute(name) {
    const value = attributesForElement(this).get(name);
    return _nullishCoalesce(value, () => ( null));
  }
};
var HTMLElementShim = class HTMLElement extends ElementShim {
};
var HTMLElementShimWithRealType = HTMLElementShim;
var CustomElementRegistryShim = class CustomElementRegistry {
  constructor() {
    this.__definitions = /* @__PURE__ */ new Map();
  }
  define(name, ctor) {
    if (this.__definitions.has(name)) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`'CustomElementRegistry' already has "${name}" defined. This may have been caused by live reload or hot module replacement in which case it can be safely ignored.
Make sure to test your application with a production build as repeat registrations will throw in production.`);
      } else {
        throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': the name "${name}" has already been used with this registry`);
      }
    }
    this.__definitions.set(name, {
      ctor,
      // Note it's important we read `observedAttributes` in case it is a getter
      // with side-effects, as is the case in Lit, where it triggers class
      // finalization.
      //
      // TODO(aomarks) To be spec compliant, we should also capture the
      // registration-time lifecycle methods like `connectedCallback`. For them
      // to be actually accessible to e.g. the Lit SSR element renderer, though,
      // we'd need to introduce a new API for accessing them (since `get` only
      // returns the constructor).
      observedAttributes: _nullishCoalesce(ctor.observedAttributes, () => ( []))
    });
  }
  get(name) {
    const definition = this.__definitions.get(name);
    return definition == null ? void 0 : definition.ctor;
  }
};
var CustomElementRegistryShimWithRealType = CustomElementRegistryShim;
var customElements2 = new CustomElementRegistryShimWithRealType();

// node_modules/.pnpm/@lit+reactive-element@2.0.2/node_modules/@lit/reactive-element/node/css-tag.js
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var o = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t4, e4, o5) {
    if (this._$cssResult$ = true, o5 !== s)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t4, this.t = e4;
  }
  get styleSheet() {
    let t4 = this.o;
    const s4 = this.t;
    if (e && void 0 === t4) {
      const e4 = void 0 !== s4 && 1 === s4.length;
      e4 && (t4 = o.get(s4)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && o.set(s4, t4));
    }
    return t4;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t4) => new n("string" == typeof t4 ? t4 : t4 + "", void 0, s);
var i = (t4, ...e4) => {
  const o5 = 1 === t4.length ? t4[0] : e4.reduce((e5, s4, o6) => e5 + ((t5) => {
    if (true === t5._$cssResult$)
      return t5.cssText;
    if ("number" == typeof t5)
      return t5;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s4) + t4[o6 + 1], t4[0]);
  return new n(o5, t4, s);
};
var S = (s4, o5) => {
  if (e)
    s4.adoptedStyleSheets = o5.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet);
  else
    for (const e4 of o5) {
      const o6 = document.createElement("style"), n5 = t.litNonce;
      void 0 !== n5 && o6.setAttribute("nonce", n5), o6.textContent = e4.cssText, s4.appendChild(o6);
    }
};
var c = e || void 0 === t.CSSStyleSheet ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
  let e4 = "";
  for (const s4 of t5.cssRules)
    e4 += s4.cssText;
  return r(e4);
})(t4) : t4;

// node_modules/.pnpm/@lit+reactive-element@2.0.2/node_modules/@lit/reactive-element/node/reactive-element.js
var { is: r2, defineProperty: h, getOwnPropertyDescriptor: o2, getOwnPropertyNames: n2, getOwnPropertySymbols: a, getPrototypeOf: c2 } = Object;
var l = globalThis;
l.customElements ??= customElements2;
var p = l.trustedTypes;
var d = p ? p.emptyScript : "";
var u = l.reactiveElementPolyfillSupport;
var f = (t4, s4) => t4;
var b = { toAttribute(t4, s4) {
  switch (s4) {
    case Boolean:
      t4 = t4 ? d : null;
      break;
    case Object:
    case Array:
      t4 = null == t4 ? t4 : JSON.stringify(t4);
  }
  return t4;
}, fromAttribute(t4, s4) {
  let i3 = t4;
  switch (s4) {
    case Boolean:
      i3 = null !== t4;
      break;
    case Number:
      i3 = null === t4 ? null : Number(t4);
      break;
    case Object:
    case Array:
      try {
        i3 = JSON.parse(t4);
      } catch (t5) {
        i3 = null;
      }
  }
  return i3;
} };
var y = (t4, s4) => !r2(t4, s4);
var m = { attribute: true, type: String, converter: b, reflect: false, hasChanged: y };
Symbol.metadata ??= Symbol("metadata"), l.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var g = class extends (_nullishCoalesce(globalThis.HTMLElement, () => ( HTMLElementShimWithRealType))) {
  static addInitializer(t4) {
    this._$Ei(), (this.l ??= []).push(t4);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t4, s4 = m) {
    if (s4.state && (s4.attribute = false), this._$Ei(), this.elementProperties.set(t4, s4), !s4.noAccessor) {
      const i3 = Symbol(), e4 = this.getPropertyDescriptor(t4, i3, s4);
      void 0 !== e4 && h(this.prototype, t4, e4);
    }
  }
  static getPropertyDescriptor(t4, s4, i3) {
    const { get: e4, set: r7 } = _nullishCoalesce(o2(this.prototype, t4), () => ( { get() {
      return this[s4];
    }, set(t5) {
      this[s4] = t5;
    } }));
    return { get() {
      return e4 == null ? void 0 : e4.call(this);
    }, set(s5) {
      const h3 = e4 == null ? void 0 : e4.call(this);
      r7.call(this, s5), this.requestUpdate(t4, h3, i3);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t4) {
    return _nullishCoalesce(this.elementProperties.get(t4), () => ( m));
  }
  static _$Ei() {
    if (this.hasOwnProperty(f("elementProperties")))
      return;
    const t4 = c2(this);
    t4.finalize(), void 0 !== t4.l && (this.l = [...t4.l]), this.elementProperties = new Map(t4.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(f("finalized")))
      return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(f("properties"))) {
      const t5 = this.properties, s4 = [...n2(t5), ...a(t5)];
      for (const i3 of s4)
        this.createProperty(i3, t5[i3]);
    }
    const t4 = this[Symbol.metadata];
    if (null !== t4) {
      const s4 = litPropertyMetadata.get(t4);
      if (void 0 !== s4)
        for (const [t5, i3] of s4)
          this.elementProperties.set(t5, i3);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t5, s4] of this.elementProperties) {
      const i3 = this._$Eu(t5, s4);
      void 0 !== i3 && this._$Eh.set(i3, t5);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t4) {
    const s4 = [];
    if (Array.isArray(t4)) {
      const e4 = new Set(t4.flat(1 / 0).reverse());
      for (const t5 of e4)
        s4.unshift(c(t5));
    } else
      void 0 !== t4 && s4.push(c(t4));
    return s4;
  }
  static _$Eu(t4, s4) {
    const i3 = s4.attribute;
    return false === i3 ? void 0 : "string" == typeof i3 ? i3 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var _a2;
    this._$Eg = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$ES(), this.requestUpdate(), (_a2 = this.constructor.l) == null ? void 0 : _a2.forEach((t4) => t4(this));
  }
  addController(t4) {
    var _a2;
    (this._$E_ ??= /* @__PURE__ */ new Set()).add(t4), void 0 !== this.renderRoot && this.isConnected && ((_a2 = t4.hostConnected) == null ? void 0 : _a2.call(t4));
  }
  removeController(t4) {
    var _a2;
    (_a2 = this._$E_) == null ? void 0 : _a2.delete(t4);
  }
  _$ES() {
    const t4 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
    for (const i3 of s4.keys())
      this.hasOwnProperty(i3) && (t4.set(i3, this[i3]), delete this[i3]);
    t4.size > 0 && (this._$Ep = t4);
  }
  createRenderRoot() {
    const t4 = _nullishCoalesce(this.shadowRoot, () => ( this.attachShadow(this.constructor.shadowRootOptions)));
    return S(t4, this.constructor.elementStyles), t4;
  }
  connectedCallback() {
    var _a2;
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), (_a2 = this._$E_) == null ? void 0 : _a2.forEach((t4) => {
      var _a3;
      return (_a3 = t4.hostConnected) == null ? void 0 : _a3.call(t4);
    });
  }
  enableUpdating(t4) {
  }
  disconnectedCallback() {
    var _a2;
    (_a2 = this._$E_) == null ? void 0 : _a2.forEach((t4) => {
      var _a3;
      return (_a3 = t4.hostDisconnected) == null ? void 0 : _a3.call(t4);
    });
  }
  attributeChangedCallback(t4, s4, i3) {
    this._$AK(t4, i3);
  }
  _$EO(t4, s4) {
    var _a2;
    const i3 = this.constructor.elementProperties.get(t4), e4 = this.constructor._$Eu(t4, i3);
    if (void 0 !== e4 && true === i3.reflect) {
      const r7 = (void 0 !== ((_a2 = i3.converter) == null ? void 0 : _a2.toAttribute) ? i3.converter : b).toAttribute(s4, i3.type);
      this._$Em = t4, null == r7 ? this.removeAttribute(e4) : this.setAttribute(e4, r7), this._$Em = null;
    }
  }
  _$AK(t4, s4) {
    var _a2;
    const i3 = this.constructor, e4 = i3._$Eh.get(t4);
    if (void 0 !== e4 && this._$Em !== e4) {
      const t5 = i3.getPropertyOptions(e4), r7 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== ((_a2 = t5.converter) == null ? void 0 : _a2.fromAttribute) ? t5.converter : b;
      this._$Em = e4, this[e4] = r7.fromAttribute(s4, t5.type), this._$Em = null;
    }
  }
  requestUpdate(t4, s4, i3, e4 = false, r7) {
    if (void 0 !== t4) {
      if (i3 ??= this.constructor.getPropertyOptions(t4), !(_nullishCoalesce(i3.hasChanged, () => ( y)))(e4 ? r7 : this[t4], s4))
        return;
      this.C(t4, s4, i3);
    }
    false === this.isUpdatePending && (this._$Eg = this._$EP());
  }
  C(t4, s4, i3) {
    this._$AL.has(t4) || this._$AL.set(t4, s4), true === i3.reflect && this._$Em !== t4 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t4);
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$Eg;
    } catch (t5) {
      Promise.reject(t5);
    }
    const t4 = this.scheduleUpdate();
    return null != t4 && await t4, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var _a2;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t6, s5] of this._$Ep)
          this[t6] = s5;
        this._$Ep = void 0;
      }
      const t5 = this.constructor.elementProperties;
      if (t5.size > 0)
        for (const [s5, i3] of t5)
          true !== i3.wrapped || this._$AL.has(s5) || void 0 === this[s5] || this.C(s5, this[s5], i3);
    }
    let t4 = false;
    const s4 = this._$AL;
    try {
      t4 = this.shouldUpdate(s4), t4 ? (this.willUpdate(s4), (_a2 = this._$E_) == null ? void 0 : _a2.forEach((t5) => {
        var _a3;
        return (_a3 = t5.hostUpdate) == null ? void 0 : _a3.call(t5);
      }), this.update(s4)) : this._$ET();
    } catch (s5) {
      throw t4 = false, this._$ET(), s5;
    }
    t4 && this._$AE(s4);
  }
  willUpdate(t4) {
  }
  _$AE(t4) {
    var _a2;
    (_a2 = this._$E_) == null ? void 0 : _a2.forEach((t5) => {
      var _a3;
      return (_a3 = t5.hostUpdated) == null ? void 0 : _a3.call(t5);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
  }
  _$ET() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Eg;
  }
  shouldUpdate(t4) {
    return true;
  }
  update(t4) {
    this._$Ej &&= this._$Ej.forEach((t5) => this._$EO(t5, this[t5])), this._$ET();
  }
  updated(t4) {
  }
  firstUpdated(t4) {
  }
};
g.elementStyles = [], g.shadowRootOptions = { mode: "open" }, g[f("elementProperties")] = /* @__PURE__ */ new Map(), g[f("finalized")] = /* @__PURE__ */ new Map(), u == null ? void 0 : u({ ReactiveElement: g }), (l.reactiveElementVersions ??= []).push("2.0.2");

// node_modules/.pnpm/lit-html@3.1.0/node_modules/lit-html/node/lit-html.js
var t2 = globalThis;
var i2 = t2.trustedTypes;
var s2 = i2 ? i2.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
var e2 = "$lit$";
var h2 = `lit$${(Math.random() + "").slice(9)}$`;
var o3 = "?" + h2;
var n3 = `<${o3}>`;
var r3 = void 0 === t2.document ? { createTreeWalker: () => ({}) } : document;
var l2 = () => r3.createComment("");
var c3 = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
var a2 = Array.isArray;
var u2 = (t4) => a2(t4) || "function" == typeof (t4 == null ? void 0 : t4[Symbol.iterator]);
var d2 = "[ 	\n\f\r]";
var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v = /-->/g;
var _ = />/g;
var m2 = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var p2 = /'/g;
var g2 = /"/g;
var $ = /^(?:script|style|textarea|title)$/i;
var y2 = (t4) => (i3, ...s4) => ({ _$litType$: t4, strings: i3, values: s4 });
var x = y2(1);
var T = y2(2);
var b2 = Symbol.for("lit-noChange");
var w = Symbol.for("lit-nothing");
var A = /* @__PURE__ */ new WeakMap();
var E = r3.createTreeWalker(r3, 129);
function C(t4, i3) {
  if (!Array.isArray(t4) || !t4.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== s2 ? s2.createHTML(i3) : i3;
}
var P = (t4, i3) => {
  const s4 = t4.length - 1, o5 = [];
  let r7, l3 = 2 === i3 ? "<svg>" : "", c4 = f2;
  for (let i4 = 0; i4 < s4; i4++) {
    const s5 = t4[i4];
    let a3, u3, d3 = -1, y3 = 0;
    for (; y3 < s5.length && (c4.lastIndex = y3, u3 = c4.exec(s5), null !== u3); )
      y3 = c4.lastIndex, c4 === f2 ? "!--" === u3[1] ? c4 = v : void 0 !== u3[1] ? c4 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r7 = RegExp("</" + u3[2], "g")), c4 = m2) : void 0 !== u3[3] && (c4 = m2) : c4 === m2 ? ">" === u3[0] ? (c4 = _nullishCoalesce(r7, () => ( f2)), d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? m2 : '"' === u3[3] ? g2 : p2) : c4 === g2 || c4 === p2 ? c4 = m2 : c4 === v || c4 === _ ? c4 = f2 : (c4 = m2, r7 = void 0);
    const x2 = c4 === m2 && t4[i4 + 1].startsWith("/>") ? " " : "";
    l3 += c4 === f2 ? s5 + n3 : d3 >= 0 ? (o5.push(a3), s5.slice(0, d3) + e2 + s5.slice(d3) + h2 + x2) : s5 + h2 + (-2 === d3 ? i4 : x2);
  }
  return [C(t4, l3 + (t4[s4] || "<?>") + (2 === i3 ? "</svg>" : "")), o5];
};
var V = class _V {
  constructor({ strings: t4, _$litType$: s4 }, n5) {
    let r7;
    this.parts = [];
    let c4 = 0, a3 = 0;
    const u3 = t4.length - 1, d3 = this.parts, [f3, v2] = P(t4, s4);
    if (this.el = _V.createElement(f3, n5), E.currentNode = this.el.content, 2 === s4) {
      const t5 = this.el.content.firstChild;
      t5.replaceWith(...t5.childNodes);
    }
    for (; null !== (r7 = E.nextNode()) && d3.length < u3; ) {
      if (1 === r7.nodeType) {
        if (r7.hasAttributes())
          for (const t5 of r7.getAttributeNames())
            if (t5.endsWith(e2)) {
              const i3 = v2[a3++], s5 = r7.getAttribute(t5).split(h2), e4 = /([.?@])?(.*)/.exec(i3);
              d3.push({ type: 1, index: c4, name: e4[2], strings: s5, ctor: "." === e4[1] ? R : "?" === e4[1] ? H : "@" === e4[1] ? I : k }), r7.removeAttribute(t5);
            } else
              t5.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r7.removeAttribute(t5));
        if ($.test(r7.tagName)) {
          const t5 = r7.textContent.split(h2), s5 = t5.length - 1;
          if (s5 > 0) {
            r7.textContent = i2 ? i2.emptyScript : "";
            for (let i3 = 0; i3 < s5; i3++)
              r7.append(t5[i3], l2()), E.nextNode(), d3.push({ type: 2, index: ++c4 });
            r7.append(t5[s5], l2());
          }
        }
      } else if (8 === r7.nodeType)
        if (r7.data === o3)
          d3.push({ type: 2, index: c4 });
        else {
          let t5 = -1;
          for (; -1 !== (t5 = r7.data.indexOf(h2, t5 + 1)); )
            d3.push({ type: 7, index: c4 }), t5 += h2.length - 1;
        }
      c4++;
    }
  }
  static createElement(t4, i3) {
    const s4 = r3.createElement("template");
    return s4.innerHTML = t4, s4;
  }
};
function N(t4, i3, s4 = t4, e4) {
  var _a2, _b;
  if (i3 === b2)
    return i3;
  let h3 = void 0 !== e4 ? (_a2 = s4._$Co) == null ? void 0 : _a2[e4] : s4._$Cl;
  const o5 = c3(i3) ? void 0 : i3._$litDirective$;
  return (h3 == null ? void 0 : h3.constructor) !== o5 && ((_b = h3 == null ? void 0 : h3._$AO) == null ? void 0 : _b.call(h3, false), void 0 === o5 ? h3 = void 0 : (h3 = new o5(t4), h3._$AT(t4, s4, e4)), void 0 !== e4 ? (s4._$Co ??= [])[e4] = h3 : s4._$Cl = h3), void 0 !== h3 && (i3 = N(t4, h3._$AS(t4, i3.values), h3, e4)), i3;
}
var S2 = class {
  constructor(t4, i3) {
    this._$AV = [], this._$AN = void 0, this._$AD = t4, this._$AM = i3;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t4) {
    const { el: { content: i3 }, parts: s4 } = this._$AD, e4 = (_nullishCoalesce((t4 == null ? void 0 : t4.creationScope), () => ( r3))).importNode(i3, true);
    E.currentNode = e4;
    let h3 = E.nextNode(), o5 = 0, n5 = 0, l3 = s4[0];
    for (; void 0 !== l3; ) {
      if (o5 === l3.index) {
        let i4;
        2 === l3.type ? i4 = new M(h3, h3.nextSibling, this, t4) : 1 === l3.type ? i4 = new l3.ctor(h3, l3.name, l3.strings, this, t4) : 6 === l3.type && (i4 = new L(h3, this, t4)), this._$AV.push(i4), l3 = s4[++n5];
      }
      o5 !== (l3 == null ? void 0 : l3.index) && (h3 = E.nextNode(), o5++);
    }
    return E.currentNode = r3, e4;
  }
  p(t4) {
    let i3 = 0;
    for (const s4 of this._$AV)
      void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t4, s4, i3), i3 += s4.strings.length - 2) : s4._$AI(t4[i3])), i3++;
  }
};
var M = class _M {
  get _$AU() {
    var _a2;
    return _nullishCoalesce(((_a2 = this._$AM) == null ? void 0 : _a2._$AU), () => ( this._$Cv));
  }
  constructor(t4, i3, s4, e4) {
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t4, this._$AB = i3, this._$AM = s4, this.options = e4, this._$Cv = _nullishCoalesce((e4 == null ? void 0 : e4.isConnected), () => ( true));
  }
  get parentNode() {
    let t4 = this._$AA.parentNode;
    const i3 = this._$AM;
    return void 0 !== i3 && 11 === (t4 == null ? void 0 : t4.nodeType) && (t4 = i3.parentNode), t4;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t4, i3 = this) {
    t4 = N(this, t4, i3), c3(t4) ? t4 === w || null == t4 || "" === t4 ? (this._$AH !== w && this._$AR(), this._$AH = w) : t4 !== this._$AH && t4 !== b2 && this._(t4) : void 0 !== t4._$litType$ ? this.g(t4) : void 0 !== t4.nodeType ? this.$(t4) : u2(t4) ? this.T(t4) : this._(t4);
  }
  k(t4) {
    return this._$AA.parentNode.insertBefore(t4, this._$AB);
  }
  $(t4) {
    this._$AH !== t4 && (this._$AR(), this._$AH = this.k(t4));
  }
  _(t4) {
    this._$AH !== w && c3(this._$AH) ? this._$AA.nextSibling.data = t4 : this.$(r3.createTextNode(t4)), this._$AH = t4;
  }
  g(t4) {
    var _a2;
    const { values: i3, _$litType$: s4 } = t4, e4 = "number" == typeof s4 ? this._$AC(t4) : (void 0 === s4.el && (s4.el = V.createElement(C(s4.h, s4.h[0]), this.options)), s4);
    if (((_a2 = this._$AH) == null ? void 0 : _a2._$AD) === e4)
      this._$AH.p(i3);
    else {
      const t5 = new S2(e4, this), s5 = t5.u(this.options);
      t5.p(i3), this.$(s5), this._$AH = t5;
    }
  }
  _$AC(t4) {
    let i3 = A.get(t4.strings);
    return void 0 === i3 && A.set(t4.strings, i3 = new V(t4)), i3;
  }
  T(t4) {
    a2(this._$AH) || (this._$AH = [], this._$AR());
    const i3 = this._$AH;
    let s4, e4 = 0;
    for (const h3 of t4)
      e4 === i3.length ? i3.push(s4 = new _M(this.k(l2()), this.k(l2()), this, this.options)) : s4 = i3[e4], s4._$AI(h3), e4++;
    e4 < i3.length && (this._$AR(s4 && s4._$AB.nextSibling, e4), i3.length = e4);
  }
  _$AR(t4 = this._$AA.nextSibling, i3) {
    var _a2;
    for ((_a2 = this._$AP) == null ? void 0 : _a2.call(this, false, true, i3); t4 && t4 !== this._$AB; ) {
      const i4 = t4.nextSibling;
      t4.remove(), t4 = i4;
    }
  }
  setConnected(t4) {
    var _a2;
    void 0 === this._$AM && (this._$Cv = t4, (_a2 = this._$AP) == null ? void 0 : _a2.call(this, t4));
  }
};
var k = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t4, i3, s4, e4, h3) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t4, this.name = i3, this._$AM = e4, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = w;
  }
  _$AI(t4, i3 = this, s4, e4) {
    const h3 = this.strings;
    let o5 = false;
    if (void 0 === h3)
      t4 = N(this, t4, i3, 0), o5 = !c3(t4) || t4 !== this._$AH && t4 !== b2, o5 && (this._$AH = t4);
    else {
      const e5 = t4;
      let n5, r7;
      for (t4 = h3[0], n5 = 0; n5 < h3.length - 1; n5++)
        r7 = N(this, e5[s4 + n5], i3, n5), r7 === b2 && (r7 = this._$AH[n5]), o5 ||= !c3(r7) || r7 !== this._$AH[n5], r7 === w ? t4 = w : t4 !== w && (t4 += (_nullishCoalesce(r7, () => ( ""))) + h3[n5 + 1]), this._$AH[n5] = r7;
    }
    o5 && !e4 && this.O(t4);
  }
  O(t4) {
    t4 === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, _nullishCoalesce(t4, () => ( "")));
  }
};
var R = class extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  O(t4) {
    this.element[this.name] = t4 === w ? void 0 : t4;
  }
};
var H = class extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  O(t4) {
    this.element.toggleAttribute(this.name, !!t4 && t4 !== w);
  }
};
var I = class extends k {
  constructor(t4, i3, s4, e4, h3) {
    super(t4, i3, s4, e4, h3), this.type = 5;
  }
  _$AI(t4, i3 = this) {
    if ((t4 = _nullishCoalesce(N(this, t4, i3, 0), () => ( w))) === b2)
      return;
    const s4 = this._$AH, e4 = t4 === w && s4 !== w || t4.capture !== s4.capture || t4.once !== s4.once || t4.passive !== s4.passive, h3 = t4 !== w && (s4 === w || e4);
    e4 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
  }
  handleEvent(t4) {
    var _a2;
    "function" == typeof this._$AH ? this._$AH.call(_nullishCoalesce(((_a2 = this.options) == null ? void 0 : _a2.host), () => ( this.element)), t4) : this._$AH.handleEvent(t4);
  }
};
var L = class {
  constructor(t4, i3, s4) {
    this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s4;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t4) {
    N(this, t4);
  }
};
var W = t2.litHtmlPolyfillSupport;
W == null ? void 0 : W(V, M), (t2.litHtmlVersions ??= []).push("3.1.0");
var Z = (t4, i3, s4) => {
  const e4 = _nullishCoalesce((s4 == null ? void 0 : s4.renderBefore), () => ( i3));
  let h3 = e4._$litPart$;
  if (void 0 === h3) {
    const t5 = _nullishCoalesce((s4 == null ? void 0 : s4.renderBefore), () => ( null));
    e4._$litPart$ = h3 = new M(i3.insertBefore(l2(), t5), t5, void 0, _nullishCoalesce(s4, () => ( {})));
  }
  return h3._$AI(t4), h3;
};

// node_modules/.pnpm/lit-element@4.0.2/node_modules/lit-element/lit-element.js
var s3 = class extends g {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t4 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t4.firstChild, t4;
  }
  update(t4) {
    const i3 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = Z(i3, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var _a2;
    super.connectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(true);
  }
  disconnectedCallback() {
    var _a2;
    super.disconnectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(false);
  }
  render() {
    return b2;
  }
};
var _a;
s3._$litElement$ = true, s3["finalized", "finalized"] = true, (_a = globalThis.litElementHydrateSupport) == null ? void 0 : _a.call(globalThis, { LitElement: s3 });
var r4 = globalThis.litElementPolyfillSupport;
r4 == null ? void 0 : r4({ LitElement: s3 });
(globalThis.litElementVersions ??= []).push("4.0.2");

// node_modules/.pnpm/@lit+reactive-element@2.0.2/node_modules/@lit/reactive-element/node/decorators/custom-element.js
var t3 = (t4) => (e4, o5) => {
  void 0 !== o5 ? o5.addInitializer(() => {
    customElements.define(t4, e4);
  }) : customElements.define(t4, e4);
};

// node_modules/.pnpm/@lit+reactive-element@2.0.2/node_modules/@lit/reactive-element/node/decorators/property.js
var o4 = { attribute: true, type: String, converter: b, reflect: false, hasChanged: y };
var r5 = (t4 = o4, e4, r7) => {
  const { kind: n5, metadata: i3 } = r7;
  let s4 = globalThis.litPropertyMetadata.get(i3);
  if (void 0 === s4 && globalThis.litPropertyMetadata.set(i3, s4 = /* @__PURE__ */ new Map()), s4.set(r7.name, t4), "accessor" === n5) {
    const { name: o5 } = r7;
    return { set(r8) {
      const n6 = e4.get.call(this);
      e4.set.call(this, r8), this.requestUpdate(o5, n6, t4);
    }, init(e5) {
      return void 0 !== e5 && this.C(o5, void 0, t4), e5;
    } };
  }
  if ("setter" === n5) {
    const { name: o5 } = r7;
    return function(r8) {
      const n6 = this[o5];
      e4.call(this, r8), this.requestUpdate(o5, n6, t4);
    };
  }
  throw Error("Unsupported decorator location: " + n5);
};
function n4(t4) {
  return (e4, o5) => "object" == typeof o5 ? r5(t4, e4, o5) : ((t5, e5, o6) => {
    const r7 = e5.hasOwnProperty(o6);
    return e5.constructor.createProperty(o6, r7 ? { ...t5, wrapped: true } : t5), r7 ? Object.getOwnPropertyDescriptor(e5, o6) : void 0;
  })(t4, e4, o5);
}

// src/tailwind-reset.ts
var tailwind_reset_default = `/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
2. [UnoCSS]: allow to override the default border color with css var \`--un-default-border-color\`
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: var(--un-default-border-color, #e5e7eb); /* 2 */
}

::before,
::after {
  --un-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS.
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/*
Make elements with the HTML hidden attribute stay hidden by default.
*/

[hidden] {
  display: none;
}`;

// node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
function r6(e4) {
  var t4, f3, n5 = "";
  if ("string" == typeof e4 || "number" == typeof e4)
    n5 += e4;
  else if ("object" == typeof e4)
    if (Array.isArray(e4))
      for (t4 = 0; t4 < e4.length; t4++)
        e4[t4] && (f3 = r6(e4[t4])) && (n5 && (n5 += " "), n5 += f3);
    else
      for (t4 in e4)
        e4[t4] && (n5 && (n5 += " "), n5 += t4);
  return n5;
}
function clsx() {
  for (var e4, t4, f3 = 0, n5 = ""; f3 < arguments.length; )
    (e4 = arguments[f3++]) && (t4 = r6(e4)) && (n5 && (n5 += " "), n5 += t4);
  return n5;
}

// node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => {
  return (props) => {
    var ref;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null)
      return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null)
        return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1) => {
      let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param1;
      return Object.entries(compoundVariantOptions).every((param) => {
        let [key, value] = param;
        return Array.isArray(value) ? value.includes({
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key]) : {
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };
};

// src/button/Button.ts
var buttonStyle = cva(
  "bg-primary text-white py-3 px-6 rounded leading-[1.15]",
  {
    variants: {
      intent: {
        primary: "bg-primary text-white",
        secondary: "bg-white border-2 border-primary text-primary! hover:bg-lightGray focus:bg-transparent focus:border-white"
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: ""
      }
    }
  }
);
var button = class extends s3 {
  constructor() {
    super();
    this.disabled = false;
    this.intent = "primary";
  }
  render() {
    return x`<button
      class=${buttonStyle({
      intent: this.intent,
      disabled: this.disabled
    })}
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button>`;
  }
};
button.styles = [
  i`
      @unocss-placeholder;
    `,
  r(tailwind_reset_default)
];
__decorateClass([
  n4({ type: Boolean })
], button.prototype, "disabled", 2);
__decorateClass([
  n4({ type: String })
], button.prototype, "intent", 2);
button = exports.button = __decorateClass([
  t3("hot-button")
], button);


exports.button = button;
/*! Bundled license information:

@lit-labs/ssr-dom-shim/lib/element-internals.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/ssr-dom-shim/index.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=index.cjs.map