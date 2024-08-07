import{c as ft,a as bt,L as Vt,f as Tt,g as Et,S as ne,_ as u,e as Z,r as Dt,n as p,w as At,b as Yt,k as zt,R as xt,t as N,d as ve}from"./icons-oafdsS42.js";import{i as rt,k as q,h as ye}from"./lit-element-CPYlYYac.js";import{H as we,s as ie,p as Xt,a as Gt,g as Kt,b as Jt,w as Qt}from"./chunk.NYIIDP5N-8SoPRANK.js";var xe=rt`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,se=class extends bt{constructor(){super(...arguments),this.localize=new Vt(this)}render(){return q`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};se.styles=[ft,xe];var lt=new WeakMap,ct=new WeakMap,ut=new WeakMap,$t=new WeakSet,vt=new WeakMap,ke=class{constructor(t,e){this.handleFormData=o=>{const r=this.options.disabled(this.host),n=this.options.name(this.host),i=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!s&&typeof n=="string"&&n.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(l=>{o.formData.append(n,l.toString())}):o.formData.append(n,i.toString()))},this.handleFormSubmit=o=>{var r;const n=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=lt.get(this.form))==null||r.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!n&&!i(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),vt.set(this.host,[])},this.handleInteraction=o=>{const r=vt.get(this.host);r.includes(o.type)||r.push(o.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Et({form:o=>{const r=o.form;if(r){const i=o.getRootNode().querySelector(`#${r}`);if(i)return i}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var r;return(r=o.disabled)!=null?r:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,r)=>o.value=r,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),vt.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),vt.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,lt.has(this.form)?lt.get(this.form).add(this.host):lt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ct.has(this.form)||(ct.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ut.has(this.form)||(ut.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=lt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ct.has(this.form)&&(this.form.reportValidity=ct.get(this.form),ct.delete(this.form)),ut.has(this.form)&&(this.form.checkValidity=ut.get(this.form),ut.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?$t.add(t):$t.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{e.hasAttribute(r)&&o.setAttribute(r,e.getAttribute(r))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!$t.has(e),r=!!e.required;e.toggleAttribute("data-required",r),e.toggleAttribute("data-optional",!r),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},Mt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),mo=Object.freeze(Tt(Et({},Mt),{valid:!1,valueMissing:!0})),vo=Object.freeze(Tt(Et({},Mt),{valid:!1,customError:!0})),_e=rt`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,x=class extends bt{constructor(){super(...arguments),this.formControlController=new ke(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new we(this,"[default]","prefix","suffix"),this.localize=new Vt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Mt}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Yt`a`:Yt`button`;return zt`
      <${e}
        part="base"
        class=${xt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${N(t?void 0:this.disabled)}
        type=${N(t?void 0:this.type)}
        title=${this.title}
        name=${N(t?void 0:this.name)}
        value=${N(t?void 0:this.value)}
        href=${N(t?this.href:void 0)}
        target=${N(t?this.target:void 0)}
        download=${N(t?this.download:void 0)}
        rel=${N(t?this.rel:void 0)}
        role=${N(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?zt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?zt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};x.styles=[ft,_e];x.dependencies={"sl-icon":ne,"sl-spinner":se};u([Z(".button")],x.prototype,"button",2);u([Dt()],x.prototype,"hasFocus",2);u([Dt()],x.prototype,"invalid",2);u([p()],x.prototype,"title",2);u([p({reflect:!0})],x.prototype,"variant",2);u([p({reflect:!0})],x.prototype,"size",2);u([p({type:Boolean,reflect:!0})],x.prototype,"caret",2);u([p({type:Boolean,reflect:!0})],x.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],x.prototype,"loading",2);u([p({type:Boolean,reflect:!0})],x.prototype,"outline",2);u([p({type:Boolean,reflect:!0})],x.prototype,"pill",2);u([p({type:Boolean,reflect:!0})],x.prototype,"circle",2);u([p()],x.prototype,"type",2);u([p()],x.prototype,"name",2);u([p()],x.prototype,"value",2);u([p()],x.prototype,"href",2);u([p()],x.prototype,"target",2);u([p()],x.prototype,"rel",2);u([p()],x.prototype,"download",2);u([p()],x.prototype,"form",2);u([p({attribute:"formaction"})],x.prototype,"formAction",2);u([p({attribute:"formenctype"})],x.prototype,"formEnctype",2);u([p({attribute:"formmethod"})],x.prototype,"formMethod",2);u([p({attribute:"formnovalidate",type:Boolean})],x.prototype,"formNoValidate",2);u([p({attribute:"formtarget"})],x.prototype,"formTarget",2);u([At("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1);var Ce=rt`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,gt=class extends bt{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=dt(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=dt(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=dt(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=dt(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const o=t.indexOf(e),r=dt(e);r&&(r.toggleAttribute("data-sl-button-group__button",!0),r.toggleAttribute("data-sl-button-group__button--first",o===0),r.toggleAttribute("data-sl-button-group__button--inner",o>0&&o<t.length-1),r.toggleAttribute("data-sl-button-group__button--last",o===t.length-1),r.toggleAttribute("data-sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return q`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};gt.styles=[ft,Ce];u([Z("slot")],gt.prototype,"defaultSlot",2);u([Dt()],gt.prototype,"disableRole",2);u([p()],gt.prototype,"label",2);function dt(t){var e;const o="sl-button, sl-radio-button";return(e=t.closest(o))!=null?e:t.querySelector(o)}var Ee=rt`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const T=Math.min,z=Math.max,kt=Math.round,yt=Math.floor,Y=t=>({x:t,y:t}),Ae={left:"right",right:"left",bottom:"top",top:"bottom"},Se={start:"end",end:"start"};function Rt(t,e,o){return z(t,T(e,o))}function nt(t,e){return typeof t=="function"?t(e):t}function X(t){return t.split("-")[0]}function it(t){return t.split("-")[1]}function ae(t){return t==="x"?"y":"x"}function Nt(t){return t==="y"?"height":"width"}function J(t){return["top","bottom"].includes(X(t))?"y":"x"}function Wt(t){return ae(J(t))}function Pe(t,e,o){o===void 0&&(o=!1);const r=it(t),n=Wt(t),i=Nt(n);let s=n==="x"?r===(o?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=_t(s)),[s,_t(s)]}function ze(t){const e=_t(t);return[Ft(t),e,Ft(e)]}function Ft(t){return t.replace(/start|end/g,e=>Se[e])}function $e(t,e,o){const r=["left","right"],n=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?n:r:e?r:n;case"left":case"right":return e?i:s;default:return[]}}function Oe(t,e,o,r){const n=it(t);let i=$e(X(t),o==="start",r);return n&&(i=i.map(s=>s+"-"+n),e&&(i=i.concat(i.map(Ft)))),i}function _t(t){return t.replace(/left|right|bottom|top/g,e=>Ae[e])}function Be(t){return{top:0,right:0,bottom:0,left:0,...t}}function le(t){return typeof t!="number"?Be(t):{top:t,right:t,bottom:t,left:t}}function Ct(t){const{x:e,y:o,width:r,height:n}=t;return{width:r,height:n,top:o,left:e,right:e+r,bottom:o+n,x:e,y:o}}function Zt(t,e,o){let{reference:r,floating:n}=t;const i=J(e),s=Wt(e),l=Nt(s),a=X(e),c=i==="y",h=r.x+r.width/2-n.width/2,f=r.y+r.height/2-n.height/2,g=r[l]/2-n[l]/2;let d;switch(a){case"top":d={x:h,y:r.y-n.height};break;case"bottom":d={x:h,y:r.y+r.height};break;case"right":d={x:r.x+r.width,y:f};break;case"left":d={x:r.x-n.width,y:f};break;default:d={x:r.x,y:r.y}}switch(it(e)){case"start":d[s]-=g*(o&&c?-1:1);break;case"end":d[s]+=g*(o&&c?-1:1);break}return d}const Re=async(t,e,o)=>{const{placement:r="bottom",strategy:n="absolute",middleware:i=[],platform:s}=o,l=i.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:n}),{x:h,y:f}=Zt(c,r,a),g=r,d={},b=0;for(let m=0;m<l.length;m++){const{name:y,fn:v}=l[m],{x:w,y:k,data:E,reset:C}=await v({x:h,y:f,initialPlacement:r,placement:g,strategy:n,middlewareData:d,rects:c,platform:s,elements:{reference:t,floating:e}});h=w??h,f=k??f,d={...d,[y]:{...d[y],...E}},C&&b<=50&&(b++,typeof C=="object"&&(C.placement&&(g=C.placement),C.rects&&(c=C.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:n}):C.rects),{x:h,y:f}=Zt(c,g,a)),m=-1)}return{x:h,y:f,placement:g,strategy:n,middlewareData:d}};async function It(t,e){var o;e===void 0&&(e={});const{x:r,y:n,platform:i,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:f="floating",altBoundary:g=!1,padding:d=0}=nt(e,t),b=le(d),y=l[g?f==="floating"?"reference":"floating":f],v=Ct(await i.getClippingRect({element:(o=await(i.isElement==null?void 0:i.isElement(y)))==null||o?y:y.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),w=f==="floating"?{x:r,y:n,width:s.floating.width,height:s.floating.height}:s.reference,k=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),E=await(i.isElement==null?void 0:i.isElement(k))?await(i.getScale==null?void 0:i.getScale(k))||{x:1,y:1}:{x:1,y:1},C=Ct(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:w,offsetParent:k,strategy:a}):w);return{top:(v.top-C.top+b.top)/E.y,bottom:(C.bottom-v.bottom+b.bottom)/E.y,left:(v.left-C.left+b.left)/E.x,right:(C.right-v.right+b.right)/E.x}}const Fe=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:r,placement:n,rects:i,platform:s,elements:l,middlewareData:a}=e,{element:c,padding:h=0}=nt(t,e)||{};if(c==null)return{};const f=le(h),g={x:o,y:r},d=Wt(n),b=Nt(d),m=await s.getDimensions(c),y=d==="y",v=y?"top":"left",w=y?"bottom":"right",k=y?"clientHeight":"clientWidth",E=i.reference[b]+i.reference[d]-g[d]-i.floating[b],C=g[d]-i.reference[d],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let F=P?P[k]:0;(!F||!await(s.isElement==null?void 0:s.isElement(P)))&&(F=l.floating[k]||i.floating[b]);const I=E/2-C/2,L=F/2-m[b]/2-1,O=T(f[v],L),j=T(f[w],L),K=O,at=F-m[b]-j,S=F/2-m[b]/2+I,tt=Rt(K,S,at),M=!a.arrow&&it(n)!=null&&S!==tt&&i.reference[b]/2-(S<K?O:j)-m[b]/2<0,V=M?S<K?S-K:S-at:0;return{[d]:g[d]+V,data:{[d]:tt,centerOffset:S-tt-V,...M&&{alignmentOffset:V}},reset:M}}}),Le=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,r;const{placement:n,middlewareData:i,rects:s,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:h=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:m=!0,...y}=nt(t,e);if((o=i.arrow)!=null&&o.alignmentOffset)return{};const v=X(n),w=J(l),k=X(l)===l,E=await(a.isRTL==null?void 0:a.isRTL(c.floating)),C=g||(k||!m?[_t(l)]:ze(l)),P=b!=="none";!g&&P&&C.push(...Oe(l,m,b,E));const F=[l,...C],I=await It(e,y),L=[];let O=((r=i.flip)==null?void 0:r.overflows)||[];if(h&&L.push(I[v]),f){const S=Pe(n,s,E);L.push(I[S[0]],I[S[1]])}if(O=[...O,{placement:n,overflows:L}],!L.every(S=>S<=0)){var j,K;const S=(((j=i.flip)==null?void 0:j.index)||0)+1,tt=F[S];if(tt)return{data:{index:S,overflows:O},reset:{placement:tt}};let M=(K=O.filter(V=>V.overflows[0]<=0).sort((V,H)=>V.overflows[1]-H.overflows[1])[0])==null?void 0:K.placement;if(!M)switch(d){case"bestFit":{var at;const V=(at=O.filter(H=>{if(P){const U=J(H.placement);return U===w||U==="y"}return!0}).map(H=>[H.placement,H.overflows.filter(U=>U>0).reduce((U,me)=>U+me,0)]).sort((H,U)=>H[1]-U[1])[0])==null?void 0:at[0];V&&(M=V);break}case"initialPlacement":M=l;break}if(n!==M)return{reset:{placement:M}}}return{}}}};async function Ve(t,e){const{placement:o,platform:r,elements:n}=t,i=await(r.isRTL==null?void 0:r.isRTL(n.floating)),s=X(o),l=it(o),a=J(o)==="y",c=["left","top"].includes(s)?-1:1,h=i&&a?-1:1,f=nt(e,t);let{mainAxis:g,crossAxis:d,alignmentAxis:b}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof b=="number"&&(d=l==="end"?b*-1:b),a?{x:d*h,y:g*c}:{x:g*c,y:d*h}}const Te=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,r;const{x:n,y:i,placement:s,middlewareData:l}=e,a=await Ve(e,t);return s===((o=l.offset)==null?void 0:o.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:n+a.x,y:i+a.y,data:{...a,placement:s}}}}},De=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:r,placement:n}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:y=>{let{x:v,y:w}=y;return{x:v,y:w}}},...a}=nt(t,e),c={x:o,y:r},h=await It(e,a),f=J(X(n)),g=ae(f);let d=c[g],b=c[f];if(i){const y=g==="y"?"top":"left",v=g==="y"?"bottom":"right",w=d+h[y],k=d-h[v];d=Rt(w,d,k)}if(s){const y=f==="y"?"top":"left",v=f==="y"?"bottom":"right",w=b+h[y],k=b-h[v];b=Rt(w,b,k)}const m=l.fn({...e,[g]:d,[f]:b});return{...m,data:{x:m.x-o,y:m.y-r}}}}},Me=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:r,platform:n,elements:i}=e,{apply:s=()=>{},...l}=nt(t,e),a=await It(e,l),c=X(o),h=it(o),f=J(o)==="y",{width:g,height:d}=r.floating;let b,m;c==="top"||c==="bottom"?(b=c,m=h===(await(n.isRTL==null?void 0:n.isRTL(i.floating))?"start":"end")?"left":"right"):(m=c,b=h==="end"?"top":"bottom");const y=d-a.top-a.bottom,v=g-a.left-a.right,w=T(d-a[b],y),k=T(g-a[m],v),E=!e.middlewareData.shift;let C=w,P=k;if(f?P=h||E?T(k,v):v:C=h||E?T(w,y):y,E&&!h){const I=z(a.left,0),L=z(a.right,0),O=z(a.top,0),j=z(a.bottom,0);f?P=g-2*(I!==0||L!==0?I+L:z(a.left,a.right)):C=d-2*(O!==0||j!==0?O+j:z(a.top,a.bottom))}await s({...e,availableWidth:P,availableHeight:C});const F=await n.getDimensions(i.floating);return g!==F.width||d!==F.height?{reset:{rects:!0}}:{}}}};function st(t){return ce(t)?(t.nodeName||"").toLowerCase():"#document"}function $(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function W(t){var e;return(e=(ce(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ce(t){return t instanceof Node||t instanceof $(t).Node}function B(t){return t instanceof Element||t instanceof $(t).Element}function D(t){return t instanceof HTMLElement||t instanceof $(t).HTMLElement}function te(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof $(t).ShadowRoot}function mt(t){const{overflow:e,overflowX:o,overflowY:r,display:n}=R(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+o)&&!["inline","contents"].includes(n)}function Ne(t){return["table","td","th"].includes(st(t))}function St(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function jt(t){const e=Ht(),o=B(t)?R(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(o.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(o.contain||"").includes(r))}function We(t){let e=G(t);for(;D(e)&&!ot(e);){if(jt(e))return e;if(St(e))return null;e=G(e)}return null}function Ht(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ot(t){return["html","body","#document"].includes(st(t))}function R(t){return $(t).getComputedStyle(t)}function Pt(t){return B(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function G(t){if(st(t)==="html")return t;const e=t.assignedSlot||t.parentNode||te(t)&&t.host||W(t);return te(e)?e.host:e}function ue(t){const e=G(t);return ot(e)?t.ownerDocument?t.ownerDocument.body:t.body:D(e)&&mt(e)?e:ue(e)}function ht(t,e,o){var r;e===void 0&&(e=[]),o===void 0&&(o=!0);const n=ue(t),i=n===((r=t.ownerDocument)==null?void 0:r.body),s=$(n);if(i){const l=Lt(s);return e.concat(s,s.visualViewport||[],mt(n)?n:[],l&&o?ht(l):[])}return e.concat(n,ht(n,[],o))}function Lt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function de(t){const e=R(t);let o=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const n=D(t),i=n?t.offsetWidth:o,s=n?t.offsetHeight:r,l=kt(o)!==i||kt(r)!==s;return l&&(o=i,r=s),{width:o,height:r,$:l}}function Ut(t){return B(t)?t:t.contextElement}function et(t){const e=Ut(t);if(!D(e))return Y(1);const o=e.getBoundingClientRect(),{width:r,height:n,$:i}=de(e);let s=(i?kt(o.width):o.width)/r,l=(i?kt(o.height):o.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Ie=Y(0);function he(t){const e=$(t);return!Ht()||!e.visualViewport?Ie:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function je(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==$(t)?!1:e}function Q(t,e,o,r){e===void 0&&(e=!1),o===void 0&&(o=!1);const n=t.getBoundingClientRect(),i=Ut(t);let s=Y(1);e&&(r?B(r)&&(s=et(r)):s=et(t));const l=je(i,o,r)?he(i):Y(0);let a=(n.left+l.x)/s.x,c=(n.top+l.y)/s.y,h=n.width/s.x,f=n.height/s.y;if(i){const g=$(i),d=r&&B(r)?$(r):r;let b=g,m=Lt(b);for(;m&&r&&d!==b;){const y=et(m),v=m.getBoundingClientRect(),w=R(m),k=v.left+(m.clientLeft+parseFloat(w.paddingLeft))*y.x,E=v.top+(m.clientTop+parseFloat(w.paddingTop))*y.y;a*=y.x,c*=y.y,h*=y.x,f*=y.y,a+=k,c+=E,b=$(m),m=Lt(b)}}return Ct({width:h,height:f,x:a,y:c})}function He(t){let{elements:e,rect:o,offsetParent:r,strategy:n}=t;const i=n==="fixed",s=W(r),l=e?St(e.floating):!1;if(r===s||l&&i)return o;let a={scrollLeft:0,scrollTop:0},c=Y(1);const h=Y(0),f=D(r);if((f||!f&&!i)&&((st(r)!=="body"||mt(s))&&(a=Pt(r)),D(r))){const g=Q(r);c=et(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-a.scrollLeft*c.x+h.x,y:o.y*c.y-a.scrollTop*c.y+h.y}}function Ue(t){return Array.from(t.getClientRects())}function pe(t){return Q(W(t)).left+Pt(t).scrollLeft}function qe(t){const e=W(t),o=Pt(t),r=t.ownerDocument.body,n=z(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),i=z(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let s=-o.scrollLeft+pe(t);const l=-o.scrollTop;return R(r).direction==="rtl"&&(s+=z(e.clientWidth,r.clientWidth)-n),{width:n,height:i,x:s,y:l}}function Ye(t,e){const o=$(t),r=W(t),n=o.visualViewport;let i=r.clientWidth,s=r.clientHeight,l=0,a=0;if(n){i=n.width,s=n.height;const c=Ht();(!c||c&&e==="fixed")&&(l=n.offsetLeft,a=n.offsetTop)}return{width:i,height:s,x:l,y:a}}function Xe(t,e){const o=Q(t,!0,e==="fixed"),r=o.top+t.clientTop,n=o.left+t.clientLeft,i=D(t)?et(t):Y(1),s=t.clientWidth*i.x,l=t.clientHeight*i.y,a=n*i.x,c=r*i.y;return{width:s,height:l,x:a,y:c}}function ee(t,e,o){let r;if(e==="viewport")r=Ye(t,o);else if(e==="document")r=qe(W(t));else if(B(e))r=Xe(e,o);else{const n=he(t);r={...e,x:e.x-n.x,y:e.y-n.y}}return Ct(r)}function fe(t,e){const o=G(t);return o===e||!B(o)||ot(o)?!1:R(o).position==="fixed"||fe(o,e)}function Ge(t,e){const o=e.get(t);if(o)return o;let r=ht(t,[],!1).filter(l=>B(l)&&st(l)!=="body"),n=null;const i=R(t).position==="fixed";let s=i?G(t):t;for(;B(s)&&!ot(s);){const l=R(s),a=jt(s);!a&&l.position==="fixed"&&(n=null),(i?!a&&!n:!a&&l.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||mt(s)&&!a&&fe(t,s))?r=r.filter(h=>h!==s):n=l,s=G(s)}return e.set(t,r),r}function Ke(t){let{element:e,boundary:o,rootBoundary:r,strategy:n}=t;const s=[...o==="clippingAncestors"?St(e)?[]:Ge(e,this._c):[].concat(o),r],l=s[0],a=s.reduce((c,h)=>{const f=ee(e,h,n);return c.top=z(f.top,c.top),c.right=T(f.right,c.right),c.bottom=T(f.bottom,c.bottom),c.left=z(f.left,c.left),c},ee(e,l,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Je(t){const{width:e,height:o}=de(t);return{width:e,height:o}}function Qe(t,e,o){const r=D(e),n=W(e),i=o==="fixed",s=Q(t,!0,i,e);let l={scrollLeft:0,scrollTop:0};const a=Y(0);if(r||!r&&!i)if((st(e)!=="body"||mt(n))&&(l=Pt(e)),r){const f=Q(e,!0,i,e);a.x=f.x+e.clientLeft,a.y=f.y+e.clientTop}else n&&(a.x=pe(n));const c=s.left+l.scrollLeft-a.x,h=s.top+l.scrollTop-a.y;return{x:c,y:h,width:s.width,height:s.height}}function Ot(t){return R(t).position==="static"}function oe(t,e){return!D(t)||R(t).position==="fixed"?null:e?e(t):t.offsetParent}function be(t,e){const o=$(t);if(St(t))return o;if(!D(t)){let n=G(t);for(;n&&!ot(n);){if(B(n)&&!Ot(n))return n;n=G(n)}return o}let r=oe(t,e);for(;r&&Ne(r)&&Ot(r);)r=oe(r,e);return r&&ot(r)&&Ot(r)&&!jt(r)?o:r||We(t)||o}const Ze=async function(t){const e=this.getOffsetParent||be,o=this.getDimensions,r=await o(t.floating);return{reference:Qe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function to(t){return R(t).direction==="rtl"}const wt={convertOffsetParentRelativeRectToViewportRelativeRect:He,getDocumentElement:W,getClippingRect:Ke,getOffsetParent:be,getElementRects:Ze,getClientRects:Ue,getDimensions:Je,getScale:et,isElement:B,isRTL:to};function eo(t,e){let o=null,r;const n=W(t);function i(){var l;clearTimeout(r),(l=o)==null||l.disconnect(),o=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),i();const{left:c,top:h,width:f,height:g}=t.getBoundingClientRect();if(l||e(),!f||!g)return;const d=yt(h),b=yt(n.clientWidth-(c+f)),m=yt(n.clientHeight-(h+g)),y=yt(c),w={rootMargin:-d+"px "+-b+"px "+-m+"px "+-y+"px",threshold:z(0,T(1,a))||1};let k=!0;function E(C){const P=C[0].intersectionRatio;if(P!==a){if(!k)return s();P?s(!1,P):r=setTimeout(()=>{s(!1,1e-7)},1e3)}k=!1}try{o=new IntersectionObserver(E,{...w,root:n.ownerDocument})}catch{o=new IntersectionObserver(E,w)}o.observe(t)}return s(!0),i}function oo(t,e,o,r){r===void 0&&(r={});const{ancestorScroll:n=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,c=Ut(t),h=n||i?[...c?ht(c):[],...ht(e)]:[];h.forEach(v=>{n&&v.addEventListener("scroll",o,{passive:!0}),i&&v.addEventListener("resize",o)});const f=c&&l?eo(c,o):null;let g=-1,d=null;s&&(d=new ResizeObserver(v=>{let[w]=v;w&&w.target===c&&d&&(d.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var k;(k=d)==null||k.observe(e)})),o()}),c&&!a&&d.observe(c),d.observe(e));let b,m=a?Q(t):null;a&&y();function y(){const v=Q(t);m&&(v.x!==m.x||v.y!==m.y||v.width!==m.width||v.height!==m.height)&&o(),m=v,b=requestAnimationFrame(y)}return o(),()=>{var v;h.forEach(w=>{n&&w.removeEventListener("scroll",o),i&&w.removeEventListener("resize",o)}),f==null||f(),(v=d)==null||v.disconnect(),d=null,a&&cancelAnimationFrame(b)}}const ro=Te,no=De,io=Le,re=Me,so=Fe,ao=(t,e,o)=>{const r=new Map,n={platform:wt,...o},i={...n.platform,_c:r};return Re(t,e,{...n,platform:i})};function lo(t){return co(t)}function Bt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function co(t){for(let e=t;e;e=Bt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Bt(t);e;e=Bt(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function uo(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var _=class extends bt{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let r=0,n=0,i=0,s=0,l=0,a=0,c=0,h=0;o?t.top<e.top?(r=t.left,n=t.bottom,i=t.right,s=t.bottom,l=e.left,a=e.top,c=e.right,h=e.top):(r=e.left,n=e.bottom,i=e.right,s=e.bottom,l=t.left,a=t.top,c=t.right,h=t.top):t.left<e.left?(r=t.right,n=t.top,i=e.left,s=e.top,l=t.right,a=t.bottom,c=e.left,h=e.bottom):(r=e.right,n=e.top,i=t.left,s=t.top,l=e.right,a=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${i}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||uo(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=oo(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[ro({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(re({apply:({rects:o})=>{const r=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${o.reference.width}px`:"",this.popup.style.height=n?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(io({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(no({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(re({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(so({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>wt.getOffsetParent(o,lo):wt.getOffsetParent;ao(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Tt(Et({},wt),{getOffsetParent:e})}).then(({x:o,y:r,middlewareData:n,placement:i})=>{const s=this.matches(":dir(rtl)"),l={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${o}px`,top:`${r}px`}),this.arrow){const a=n.arrow.x,c=n.arrow.y;let h="",f="",g="",d="";if(this.arrowPlacement==="start"){const b=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",f=s?b:"",d=s?"":b}else if(this.arrowPlacement==="end"){const b=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=s?"":b,d=s?b:"",g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(d=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(d=typeof a=="number"?`${a}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:f,bottom:g,left:d,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return q`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${xt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${xt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?q`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};_.styles=[ft,Ee];u([Z(".popup")],_.prototype,"popup",2);u([Z(".popup__arrow")],_.prototype,"arrowEl",2);u([p()],_.prototype,"anchor",2);u([p({type:Boolean,reflect:!0})],_.prototype,"active",2);u([p({reflect:!0})],_.prototype,"placement",2);u([p({reflect:!0})],_.prototype,"strategy",2);u([p({type:Number})],_.prototype,"distance",2);u([p({type:Number})],_.prototype,"skidding",2);u([p({type:Boolean})],_.prototype,"arrow",2);u([p({attribute:"arrow-placement"})],_.prototype,"arrowPlacement",2);u([p({attribute:"arrow-padding",type:Number})],_.prototype,"arrowPadding",2);u([p({type:Boolean})],_.prototype,"flip",2);u([p({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],_.prototype,"flipFallbackPlacements",2);u([p({attribute:"flip-fallback-strategy"})],_.prototype,"flipFallbackStrategy",2);u([p({type:Object})],_.prototype,"flipBoundary",2);u([p({attribute:"flip-padding",type:Number})],_.prototype,"flipPadding",2);u([p({type:Boolean})],_.prototype,"shift",2);u([p({type:Object})],_.prototype,"shiftBoundary",2);u([p({attribute:"shift-padding",type:Number})],_.prototype,"shiftPadding",2);u([p({attribute:"auto-size"})],_.prototype,"autoSize",2);u([p()],_.prototype,"sync",2);u([p({type:Object})],_.prototype,"autoSizeBoundary",2);u([p({attribute:"auto-size-padding",type:Number})],_.prototype,"autoSizePadding",2);u([p({attribute:"hover-bridge",type:Boolean})],_.prototype,"hoverBridge",2);var ho=rt`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,A=class extends bt{constructor(){super(),this.localize=new Vt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Xt(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Xt(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Gt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:r}=Kt(this,"tooltip.show",{dir:this.localize.dir()});await Jt(this.popup.popup,o,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Gt(this.body);const{keyframes:o,options:r}=Kt(this,"tooltip.hide",{dir:this.localize.dir()});await Jt(this.popup.popup,o,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Qt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Qt(this,"sl-after-hide")}render(){return q`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${xt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};A.styles=[ft,ho];A.dependencies={"sl-popup":_};u([Z("slot:not([name])")],A.prototype,"defaultSlot",2);u([Z(".tooltip__body")],A.prototype,"body",2);u([Z("sl-popup")],A.prototype,"popup",2);u([p()],A.prototype,"content",2);u([p()],A.prototype,"placement",2);u([p({type:Boolean,reflect:!0})],A.prototype,"disabled",2);u([p({type:Number})],A.prototype,"distance",2);u([p({type:Boolean,reflect:!0})],A.prototype,"open",2);u([p({type:Number})],A.prototype,"skidding",2);u([p()],A.prototype,"trigger",2);u([p({type:Boolean})],A.prototype,"hoist",2);u([At("open",{waitUntilFirstUpdate:!0})],A.prototype,"handleOpenChange",1);u([At(["content","distance","hoist","placement","skidding"])],A.prototype,"handleOptionsChange",1);u([At("disabled")],A.prototype,"handleDisabledChange",1);ie("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});ie("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});x.define("sl-button");gt.define("sl-button-group");ne.define("sl-icon");A.define("sl-tooltip");var po=Object.defineProperty,ge=(t,e,o,r)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,o,n)||n);return n&&po(e,o,n),n};ve();const qt=class qt extends ye{constructor(){super(...arguments),this.name="hot-toolbar",this.tooltipPosition="top",this.undo=e=>{e.stopPropagation(),this.dispatchEvent(new Event("undo"))},this.redo=e=>{e.stopPropagation(),this.dispatchEvent(new Event("redo"))},this.bold=e=>{e.stopPropagation(),this.dispatchEvent(new Event("bold"))},this.italic=e=>{e.stopPropagation(),this.dispatchEvent(new Event("italic"))},this.underline=e=>{e.stopPropagation(),this.dispatchEvent(new Event("underline"))},this.alignLeft=e=>{e.stopPropagation(),this.dispatchEvent(new Event("leftalign"))},this.alignCenter=e=>{e.stopPropagation(),this.dispatchEvent(new Event("centeralign"))},this.alignRight=e=>{e.stopPropagation(),this.dispatchEvent(new Event("rightalign"))}}render(){return q`
      <div class="button-group-toolbar">
        ${this.renderButtonGroup("History",[{content:"Undo",icon:"arrow-counterclockwise",label:"Undo",action:this.undo},{content:"Redo",icon:"arrow-clockwise",label:"Redo",action:this.redo}])}
        ${this.renderButtonGroup("Formatting",[{content:"Bold",icon:"type-bold",label:"Bold",action:this.bold},{content:"Italic",icon:"type-italic",label:"Italic",action:this.italic},{content:"Underline",icon:"type-underline",label:"Underline",action:this.underline}])}
        ${this.renderButtonGroup("Alignment",[{content:"Align Left",icon:"justify-left",label:"Align Left",action:this.alignLeft},{content:"Align Center",icon:"justify",label:"Align Center",action:this.alignCenter},{content:"Align Right",icon:"justify-right",label:"Align Right",action:this.alignRight}])}
      </div>
    `}renderButtonGroup(e,o){return q`
      <sl-button-group label=${e}>
        ${o.map(r=>this.renderButton(r))}
      </sl-button-group>
    `}renderButton({content:e,icon:o,label:r,action:n}){return q`
      <sl-tooltip content=${e} placement="${this.tooltipPosition}">
        <sl-button @click=${n??(()=>{})}
          ><sl-icon library="bundled" name=${o} label=${r}></sl-icon
        ></sl-button>
      </sl-tooltip>
    `}};qt.styles=[rt`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.relative{position:relative;}
.static{position:static;}
.justify-left{justify-content:left;}
.justify-right{justify-content:right;}
.italic{font-style:italic;}
.underline{text-decoration-line:underline;};
    `];let pt=qt;ge([p()],pt.prototype,"name");ge([p({type:String,attribute:"tooltip-position"})],pt.prototype,"tooltipPosition");customElements.define("hot-toolbar",pt);export{ke as F,_ as S,gt as a,x as b,A as c,se as d,_e as e,vo as f,Mt as g,mo as v};
