import{i as ht,x as ut}from"./lit-element-BcQOHSkQ.js";import{c as pt,b as ft,L as Ft,g as Lt,h as Ct,S as ee,_ as u,e as Q,a as Vt,n as f,w as Et,s as Ut,d as Ot,f as wt,o as N}from"./icons-D8Ilt-xN.js";import{H as fe,s as oe,p as jt,a as qt,g as Yt,b as Xt,w as Kt}from"./chunk.NYIIDP5N-Csveo3ir.js";var be=ht`
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
`,re=class extends ft{constructor(){super(...arguments),this.localize=new Ft(this)}render(){return ut`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};re.styles=[pt,be];var st=new WeakMap,at=new WeakMap,lt=new WeakMap,Pt=new WeakSet,gt=new WeakMap,me=class{constructor(t,e){this.handleFormData=o=>{const r=this.options.disabled(this.host),i=this.options.name(this.host),n=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!s&&typeof i=="string"&&i.length>0&&typeof n<"u"&&(Array.isArray(n)?n.forEach(l=>{o.formData.append(i,l.toString())}):o.formData.append(i,n.toString()))},this.handleFormSubmit=o=>{var r;const i=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=st.get(this.form))==null||r.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!i&&!n(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),gt.set(this.host,[])},this.handleInteraction=o=>{const r=gt.get(this.host);r.includes(o.type)||r.push(o.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Ct({form:o=>{const r=o.form;if(r){const n=o.getRootNode().querySelector(`#${r}`);if(n)return n}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var r;return(r=o.disabled)!=null?r:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,r)=>o.value=r,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),gt.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),gt.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,st.has(this.form)?st.get(this.form).add(this.host):st.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),at.has(this.form)||(at.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),lt.has(this.form)||(lt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=st.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),at.has(this.form)&&(this.form.reportValidity=at.get(this.form),at.delete(this.form)),lt.has(this.form)&&(this.form.checkValidity=lt.get(this.form),lt.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Pt.add(t):Pt.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{e.hasAttribute(r)&&o.setAttribute(r,e.getAttribute(r))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!Pt.has(e),r=!!e.required;e.toggleAttribute("data-required",r),e.toggleAttribute("data-optional",!r),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},Tt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),co=Object.freeze(Lt(Ct({},Tt),{valid:!1,valueMissing:!0})),uo=Object.freeze(Lt(Ct({},Tt),{valid:!1,customError:!0})),ge=ht`
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
    border-color: var(--sl-color-neutral-300);
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
    border-color: var(--sl-color-neutral-300);
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
`,x=class extends ft{constructor(){super(...arguments),this.formControlController=new me(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new fe(this,"[default]","prefix","suffix"),this.localize=new Ft(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Tt}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Ut`a`:Ut`button`;return Ot`
      <${e}
        part="base"
        class=${wt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
        ${this.caret?Ot` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Ot`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};x.styles=[pt,ge];x.dependencies={"sl-icon":ee,"sl-spinner":re};u([Q(".button")],x.prototype,"button",2);u([Vt()],x.prototype,"hasFocus",2);u([Vt()],x.prototype,"invalid",2);u([f()],x.prototype,"title",2);u([f({reflect:!0})],x.prototype,"variant",2);u([f({reflect:!0})],x.prototype,"size",2);u([f({type:Boolean,reflect:!0})],x.prototype,"caret",2);u([f({type:Boolean,reflect:!0})],x.prototype,"disabled",2);u([f({type:Boolean,reflect:!0})],x.prototype,"loading",2);u([f({type:Boolean,reflect:!0})],x.prototype,"outline",2);u([f({type:Boolean,reflect:!0})],x.prototype,"pill",2);u([f({type:Boolean,reflect:!0})],x.prototype,"circle",2);u([f()],x.prototype,"type",2);u([f()],x.prototype,"name",2);u([f()],x.prototype,"value",2);u([f()],x.prototype,"href",2);u([f()],x.prototype,"target",2);u([f()],x.prototype,"rel",2);u([f()],x.prototype,"download",2);u([f()],x.prototype,"form",2);u([f({attribute:"formaction"})],x.prototype,"formAction",2);u([f({attribute:"formenctype"})],x.prototype,"formEnctype",2);u([f({attribute:"formmethod"})],x.prototype,"formMethod",2);u([f({attribute:"formnovalidate",type:Boolean})],x.prototype,"formNoValidate",2);u([f({attribute:"formtarget"})],x.prototype,"formTarget",2);u([Et("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1);var ve=ht`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,bt=class extends ft{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=ct(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=ct(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=ct(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=ct(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const o=t.indexOf(e),r=ct(e);r&&(r.toggleAttribute("data-sl-button-group__button",!0),r.toggleAttribute("data-sl-button-group__button--first",o===0),r.toggleAttribute("data-sl-button-group__button--inner",o>0&&o<t.length-1),r.toggleAttribute("data-sl-button-group__button--last",o===t.length-1),r.toggleAttribute("data-sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return ut`
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
    `}};bt.styles=[pt,ve];u([Q("slot")],bt.prototype,"defaultSlot",2);u([Vt()],bt.prototype,"disableRole",2);u([f()],bt.prototype,"label",2);function ct(t){var e;const o="sl-button, sl-radio-button";return(e=t.closest(o))!=null?e:t.querySelector(o)}var ye=ht`
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
`;const V=Math.min,P=Math.max,xt=Math.round,vt=Math.floor,q=t=>({x:t,y:t}),we={left:"right",right:"left",bottom:"top",top:"bottom"},xe={start:"end",end:"start"};function Bt(t,e,o){return P(t,V(e,o))}function ot(t,e){return typeof t=="function"?t(e):t}function Y(t){return t.split("-")[0]}function rt(t){return t.split("-")[1]}function ie(t){return t==="x"?"y":"x"}function Dt(t){return t==="y"?"height":"width"}function G(t){return["top","bottom"].includes(Y(t))?"y":"x"}function Mt(t){return ie(G(t))}function _e(t,e,o){o===void 0&&(o=!1);const r=rt(t),i=Mt(t),n=Dt(i);let s=i==="x"?r===(o?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=_t(s)),[s,_t(s)]}function ke(t){const e=_t(t);return[Rt(t),e,Rt(e)]}function Rt(t){return t.replace(/start|end/g,e=>xe[e])}function Ce(t,e,o){const r=["left","right"],i=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:r:e?r:i;case"left":case"right":return e?n:s;default:return[]}}function Ee(t,e,o,r){const i=rt(t);let n=Ce(Y(t),o==="start",r);return i&&(n=n.map(s=>s+"-"+i),e&&(n=n.concat(n.map(Rt)))),n}function _t(t){return t.replace(/left|right|bottom|top/g,e=>we[e])}function Ae(t){return{top:0,right:0,bottom:0,left:0,...t}}function ne(t){return typeof t!="number"?Ae(t):{top:t,right:t,bottom:t,left:t}}function kt(t){const{x:e,y:o,width:r,height:i}=t;return{width:r,height:i,top:o,left:e,right:e+r,bottom:o+i,x:e,y:o}}function Gt(t,e,o){let{reference:r,floating:i}=t;const n=G(e),s=Mt(e),l=Dt(s),a=Y(e),c=n==="y",h=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,m=r[l]/2-i[l]/2;let d;switch(a){case"top":d={x:h,y:r.y-i.height};break;case"bottom":d={x:h,y:r.y+r.height};break;case"right":d={x:r.x+r.width,y:p};break;case"left":d={x:r.x-i.width,y:p};break;default:d={x:r.x,y:r.y}}switch(rt(e)){case"start":d[s]-=m*(o&&c?-1:1);break;case"end":d[s]+=m*(o&&c?-1:1);break}return d}const Se=async(t,e,o)=>{const{placement:r="bottom",strategy:i="absolute",middleware:n=[],platform:s}=o,l=n.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:p}=Gt(c,r,a),m=r,d={},b=0;for(let g=0;g<l.length;g++){const{name:y,fn:v}=l[g],{x:w,y:_,data:E,reset:C}=await v({x:h,y:p,initialPlacement:r,placement:m,strategy:i,middlewareData:d,rects:c,platform:s,elements:{reference:t,floating:e}});h=w??h,p=_??p,d={...d,[y]:{...d[y],...E}},C&&b<=50&&(b++,typeof C=="object"&&(C.placement&&(m=C.placement),C.rects&&(c=C.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):C.rects),{x:h,y:p}=Gt(c,m,a)),g=-1)}return{x:h,y:p,placement:m,strategy:i,middlewareData:d}};async function Nt(t,e){var o;e===void 0&&(e={});const{x:r,y:i,platform:n,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:m=!1,padding:d=0}=ot(e,t),b=ne(d),y=l[m?p==="floating"?"reference":"floating":p],v=kt(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement(y)))==null||o?y:y.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),w=p==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,_=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),E=await(n.isElement==null?void 0:n.isElement(_))?await(n.getScale==null?void 0:n.getScale(_))||{x:1,y:1}:{x:1,y:1},C=kt(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:w,offsetParent:_,strategy:a}):w);return{top:(v.top-C.top+b.top)/E.y,bottom:(C.bottom-v.bottom+b.bottom)/E.y,left:(v.left-C.left+b.left)/E.x,right:(C.right-v.right+b.right)/E.x}}const Oe=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:r,placement:i,rects:n,platform:s,elements:l,middlewareData:a}=e,{element:c,padding:h=0}=ot(t,e)||{};if(c==null)return{};const p=ne(h),m={x:o,y:r},d=Mt(i),b=Dt(d),g=await s.getDimensions(c),y=d==="y",v=y?"top":"left",w=y?"bottom":"right",_=y?"clientHeight":"clientWidth",E=n.reference[b]+n.reference[d]-m[d]-n.floating[b],C=m[d]-n.reference[d],O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let R=O?O[_]:0;(!R||!await(s.isElement==null?void 0:s.isElement(O)))&&(R=l.floating[_]||n.floating[b]);const I=E/2-C/2,F=R/2-g[b]/2-1,$=V(p[v],F),H=V(p[w],F),K=$,nt=R-g[b]-H,S=R/2-g[b]/2+I,Z=Bt(K,S,nt),M=!a.arrow&&rt(i)!=null&&S!==Z&&n.reference[b]/2-(S<K?$:H)-g[b]/2<0,L=M?S<K?S-K:S-nt:0;return{[d]:m[d]+L,data:{[d]:Z,centerOffset:S-Z-L,...M&&{alignmentOffset:L}},reset:M}}}),Pe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,r;const{placement:i,middlewareData:n,rects:s,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:g=!0,...y}=ot(t,e);if((o=n.arrow)!=null&&o.alignmentOffset)return{};const v=Y(i),w=G(l),_=Y(l)===l,E=await(a.isRTL==null?void 0:a.isRTL(c.floating)),C=m||(_||!g?[_t(l)]:ke(l)),O=b!=="none";!m&&O&&C.push(...Ee(l,g,b,E));const R=[l,...C],I=await Nt(e,y),F=[];let $=((r=n.flip)==null?void 0:r.overflows)||[];if(h&&F.push(I[v]),p){const S=_e(i,s,E);F.push(I[S[0]],I[S[1]])}if($=[...$,{placement:i,overflows:F}],!F.every(S=>S<=0)){var H,K;const S=(((H=n.flip)==null?void 0:H.index)||0)+1,Z=R[S];if(Z)return{data:{index:S,overflows:$},reset:{placement:Z}};let M=(K=$.filter(L=>L.overflows[0]<=0).sort((L,U)=>L.overflows[1]-U.overflows[1])[0])==null?void 0:K.placement;if(!M)switch(d){case"bestFit":{var nt;const L=(nt=$.filter(U=>{if(O){const j=G(U.placement);return j===w||j==="y"}return!0}).map(U=>[U.placement,U.overflows.filter(j=>j>0).reduce((j,pe)=>j+pe,0)]).sort((U,j)=>U[1]-j[1])[0])==null?void 0:nt[0];L&&(M=L);break}case"initialPlacement":M=l;break}if(i!==M)return{reset:{placement:M}}}return{}}}};async function ze(t,e){const{placement:o,platform:r,elements:i}=t,n=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=Y(o),l=rt(o),a=G(o)==="y",c=["left","top"].includes(s)?-1:1,h=n&&a?-1:1,p=ot(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:b}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&typeof b=="number"&&(d=l==="end"?b*-1:b),a?{x:d*h,y:m*c}:{x:m*c,y:d*h}}const $e=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,r;const{x:i,y:n,placement:s,middlewareData:l}=e,a=await ze(e,t);return s===((o=l.offset)==null?void 0:o.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:i+a.x,y:n+a.y,data:{...a,placement:s}}}}},Be=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:r,placement:i}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:l={fn:y=>{let{x:v,y:w}=y;return{x:v,y:w}}},...a}=ot(t,e),c={x:o,y:r},h=await Nt(e,a),p=G(Y(i)),m=ie(p);let d=c[m],b=c[p];if(n){const y=m==="y"?"top":"left",v=m==="y"?"bottom":"right",w=d+h[y],_=d-h[v];d=Bt(w,d,_)}if(s){const y=p==="y"?"top":"left",v=p==="y"?"bottom":"right",w=b+h[y],_=b-h[v];b=Bt(w,b,_)}const g=l.fn({...e,[m]:d,[p]:b});return{...g,data:{x:g.x-o,y:g.y-r}}}}},Re=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:r,platform:i,elements:n}=e,{apply:s=()=>{},...l}=ot(t,e),a=await Nt(e,l),c=Y(o),h=rt(o),p=G(o)==="y",{width:m,height:d}=r.floating;let b,g;c==="top"||c==="bottom"?(b=c,g=h===(await(i.isRTL==null?void 0:i.isRTL(n.floating))?"start":"end")?"left":"right"):(g=c,b=h==="end"?"top":"bottom");const y=d-a.top-a.bottom,v=m-a.left-a.right,w=V(d-a[b],y),_=V(m-a[g],v),E=!e.middlewareData.shift;let C=w,O=_;if(p?O=h||E?V(_,v):v:C=h||E?V(w,y):y,E&&!h){const I=P(a.left,0),F=P(a.right,0),$=P(a.top,0),H=P(a.bottom,0);p?O=m-2*(I!==0||F!==0?I+F:P(a.left,a.right)):C=d-2*($!==0||H!==0?$+H:P(a.top,a.bottom))}await s({...e,availableWidth:O,availableHeight:C});const R=await i.getDimensions(n.floating);return m!==R.width||d!==R.height?{reset:{rects:!0}}:{}}}};function it(t){return se(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function W(t){var e;return(e=(se(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function se(t){return t instanceof Node||t instanceof z(t).Node}function T(t){return t instanceof Element||t instanceof z(t).Element}function D(t){return t instanceof HTMLElement||t instanceof z(t).HTMLElement}function Jt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}function mt(t){const{overflow:e,overflowX:o,overflowY:r,display:i}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+o)&&!["inline","contents"].includes(i)}function Fe(t){return["table","td","th"].includes(it(t))}function At(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Wt(t){const e=It(),o=B(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(o.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(o.contain||"").includes(r))}function Le(t){let e=X(t);for(;D(e)&&!et(e);){if(At(e))return null;if(Wt(e))return e;e=X(e)}return null}function It(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function et(t){return["html","body","#document"].includes(it(t))}function B(t){return z(t).getComputedStyle(t)}function St(t){return T(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function X(t){if(it(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Jt(t)&&t.host||W(t);return Jt(e)?e.host:e}function ae(t){const e=X(t);return et(e)?t.ownerDocument?t.ownerDocument.body:t.body:D(e)&&mt(e)?e:ae(e)}function dt(t,e,o){var r;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=ae(t),n=i===((r=t.ownerDocument)==null?void 0:r.body),s=z(i);return n?e.concat(s,s.visualViewport||[],mt(i)?i:[],s.frameElement&&o?dt(s.frameElement):[]):e.concat(i,dt(i,[],o))}function le(t){const e=B(t);let o=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=D(t),n=i?t.offsetWidth:o,s=i?t.offsetHeight:r,l=xt(o)!==n||xt(r)!==s;return l&&(o=n,r=s),{width:o,height:r,$:l}}function Ht(t){return T(t)?t:t.contextElement}function tt(t){const e=Ht(t);if(!D(e))return q(1);const o=e.getBoundingClientRect(),{width:r,height:i,$:n}=le(e);let s=(n?xt(o.width):o.width)/r,l=(n?xt(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Ve=q(0);function ce(t){const e=z(t);return!It()||!e.visualViewport?Ve:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Te(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==z(t)?!1:e}function J(t,e,o,r){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),n=Ht(t);let s=q(1);e&&(r?T(r)&&(s=tt(r)):s=tt(t));const l=Te(n,o,r)?ce(n):q(0);let a=(i.left+l.x)/s.x,c=(i.top+l.y)/s.y,h=i.width/s.x,p=i.height/s.y;if(n){const m=z(n),d=r&&T(r)?z(r):r;let b=m,g=b.frameElement;for(;g&&r&&d!==b;){const y=tt(g),v=g.getBoundingClientRect(),w=B(g),_=v.left+(g.clientLeft+parseFloat(w.paddingLeft))*y.x,E=v.top+(g.clientTop+parseFloat(w.paddingTop))*y.y;a*=y.x,c*=y.y,h*=y.x,p*=y.y,a+=_,c+=E,b=z(g),g=b.frameElement}}return kt({width:h,height:p,x:a,y:c})}function De(t){let{elements:e,rect:o,offsetParent:r,strategy:i}=t;const n=i==="fixed",s=W(r),l=e?At(e.floating):!1;if(r===s||l&&n)return o;let a={scrollLeft:0,scrollTop:0},c=q(1);const h=q(0),p=D(r);if((p||!p&&!n)&&((it(r)!=="body"||mt(s))&&(a=St(r)),D(r))){const m=J(r);c=tt(r),h.x=m.x+r.clientLeft,h.y=m.y+r.clientTop}return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-a.scrollLeft*c.x+h.x,y:o.y*c.y-a.scrollTop*c.y+h.y}}function Me(t){return Array.from(t.getClientRects())}function ue(t){return J(W(t)).left+St(t).scrollLeft}function Ne(t){const e=W(t),o=St(t),r=t.ownerDocument.body,i=P(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),n=P(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let s=-o.scrollLeft+ue(t);const l=-o.scrollTop;return B(r).direction==="rtl"&&(s+=P(e.clientWidth,r.clientWidth)-i),{width:i,height:n,x:s,y:l}}function We(t,e){const o=z(t),r=W(t),i=o.visualViewport;let n=r.clientWidth,s=r.clientHeight,l=0,a=0;if(i){n=i.width,s=i.height;const c=It();(!c||c&&e==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:n,height:s,x:l,y:a}}function Ie(t,e){const o=J(t,!0,e==="fixed"),r=o.top+t.clientTop,i=o.left+t.clientLeft,n=D(t)?tt(t):q(1),s=t.clientWidth*n.x,l=t.clientHeight*n.y,a=i*n.x,c=r*n.y;return{width:s,height:l,x:a,y:c}}function Qt(t,e,o){let r;if(e==="viewport")r=We(t,o);else if(e==="document")r=Ne(W(t));else if(T(e))r=Ie(e,o);else{const i=ce(t);r={...e,x:e.x-i.x,y:e.y-i.y}}return kt(r)}function de(t,e){const o=X(t);return o===e||!T(o)||et(o)?!1:B(o).position==="fixed"||de(o,e)}function He(t,e){const o=e.get(t);if(o)return o;let r=dt(t,[],!1).filter(l=>T(l)&&it(l)!=="body"),i=null;const n=B(t).position==="fixed";let s=n?X(t):t;for(;T(s)&&!et(s);){const l=B(s),a=Wt(s);!a&&l.position==="fixed"&&(i=null),(n?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||mt(s)&&!a&&de(t,s))?r=r.filter(h=>h!==s):i=l,s=X(s)}return e.set(t,r),r}function Ue(t){let{element:e,boundary:o,rootBoundary:r,strategy:i}=t;const s=[...o==="clippingAncestors"?At(e)?[]:He(e,this._c):[].concat(o),r],l=s[0],a=s.reduce((c,h)=>{const p=Qt(e,h,i);return c.top=P(p.top,c.top),c.right=V(p.right,c.right),c.bottom=V(p.bottom,c.bottom),c.left=P(p.left,c.left),c},Qt(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function je(t){const{width:e,height:o}=le(t);return{width:e,height:o}}function qe(t,e,o){const r=D(e),i=W(e),n=o==="fixed",s=J(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const a=q(0);if(r||!r&&!n)if((it(e)!=="body"||mt(i))&&(l=St(e)),r){const p=J(e,!0,n,e);a.x=p.x+e.clientLeft,a.y=p.y+e.clientTop}else i&&(a.x=ue(i));const c=s.left+l.scrollLeft-a.x,h=s.top+l.scrollTop-a.y;return{x:c,y:h,width:s.width,height:s.height}}function zt(t){return B(t).position==="static"}function Zt(t,e){return!D(t)||B(t).position==="fixed"?null:e?e(t):t.offsetParent}function he(t,e){const o=z(t);if(At(t))return o;if(!D(t)){let i=X(t);for(;i&&!et(i);){if(T(i)&&!zt(i))return i;i=X(i)}return o}let r=Zt(t,e);for(;r&&Fe(r)&&zt(r);)r=Zt(r,e);return r&&et(r)&&zt(r)&&!Wt(r)?o:r||Le(t)||o}const Ye=async function(t){const e=this.getOffsetParent||he,o=this.getDimensions,r=await o(t.floating);return{reference:qe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Xe(t){return B(t).direction==="rtl"}const yt={convertOffsetParentRelativeRectToViewportRelativeRect:De,getDocumentElement:W,getClippingRect:Ue,getOffsetParent:he,getElementRects:Ye,getClientRects:Me,getDimensions:je,getScale:tt,isElement:T,isRTL:Xe};function Ke(t,e){let o=null,r;const i=W(t);function n(){var l;clearTimeout(r),(l=o)==null||l.disconnect(),o=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),n();const{left:c,top:h,width:p,height:m}=t.getBoundingClientRect();if(l||e(),!p||!m)return;const d=vt(h),b=vt(i.clientWidth-(c+p)),g=vt(i.clientHeight-(h+m)),y=vt(c),w={rootMargin:-d+"px "+-b+"px "+-g+"px "+-y+"px",threshold:P(0,V(1,a))||1};let _=!0;function E(C){const O=C[0].intersectionRatio;if(O!==a){if(!_)return s();O?s(!1,O):r=setTimeout(()=>{s(!1,1e-7)},1e3)}_=!1}try{o=new IntersectionObserver(E,{...w,root:i.ownerDocument})}catch{o=new IntersectionObserver(E,w)}o.observe(t)}return s(!0),n}function Ge(t,e,o,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,c=Ht(t),h=i||n?[...c?dt(c):[],...dt(e)]:[];h.forEach(v=>{i&&v.addEventListener("scroll",o,{passive:!0}),n&&v.addEventListener("resize",o)});const p=c&&l?Ke(c,o):null;let m=-1,d=null;s&&(d=new ResizeObserver(v=>{let[w]=v;w&&w.target===c&&d&&(d.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var _;(_=d)==null||_.observe(e)})),o()}),c&&!a&&d.observe(c),d.observe(e));let b,g=a?J(t):null;a&&y();function y(){const v=J(t);g&&(v.x!==g.x||v.y!==g.y||v.width!==g.width||v.height!==g.height)&&o(),g=v,b=requestAnimationFrame(y)}return o(),()=>{var v;h.forEach(w=>{i&&w.removeEventListener("scroll",o),n&&w.removeEventListener("resize",o)}),p==null||p(),(v=d)==null||v.disconnect(),d=null,a&&cancelAnimationFrame(b)}}const Je=$e,Qe=Be,Ze=Pe,te=Re,to=Oe,eo=(t,e,o)=>{const r=new Map,i={platform:yt,...o},n={...i.platform,_c:r};return Se(t,e,{...i,platform:n})};function oo(t){return ro(t)}function $t(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function ro(t){for(let e=t;e;e=$t(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=$t(t);e;e=$t(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function io(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var k=class extends ft{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let r=0,i=0,n=0,s=0,l=0,a=0,c=0,h=0;o?t.top<e.top?(r=t.left,i=t.bottom,n=t.right,s=t.bottom,l=e.left,a=e.top,c=e.right,h=e.top):(r=e.left,i=e.bottom,n=e.right,s=e.bottom,l=t.left,a=t.top,c=t.right,h=t.top):t.left<e.left?(r=t.right,i=t.top,n=e.left,s=e.top,l=t.right,a=t.bottom,c=e.left,h=e.bottom):(r=e.right,i=e.top,n=t.left,s=t.top,l=e.right,a=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||io(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Ge(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Je({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(te({apply:({rects:o})=>{const r=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${o.reference.width}px`:"",this.popup.style.height=i?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Ze({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Qe({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(te({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(to({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>yt.getOffsetParent(o,oo):yt.getOffsetParent;eo(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Lt(Ct({},yt),{getOffsetParent:e})}).then(({x:o,y:r,middlewareData:i,placement:n})=>{const s=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${o}px`,top:`${r}px`}),this.arrow){const a=i.arrow.x,c=i.arrow.y;let h="",p="",m="",d="";if(this.arrowPlacement==="start"){const b=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=s?b:"",d=s?"":b}else if(this.arrowPlacement==="end"){const b=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=s?"":b,d=s?b:"",m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(d=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(d=typeof a=="number"?`${a}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:p,bottom:m,left:d,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return ut`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${wt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${wt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ut`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};k.styles=[pt,ye];u([Q(".popup")],k.prototype,"popup",2);u([Q(".popup__arrow")],k.prototype,"arrowEl",2);u([f()],k.prototype,"anchor",2);u([f({type:Boolean,reflect:!0})],k.prototype,"active",2);u([f({reflect:!0})],k.prototype,"placement",2);u([f({reflect:!0})],k.prototype,"strategy",2);u([f({type:Number})],k.prototype,"distance",2);u([f({type:Number})],k.prototype,"skidding",2);u([f({type:Boolean})],k.prototype,"arrow",2);u([f({attribute:"arrow-placement"})],k.prototype,"arrowPlacement",2);u([f({attribute:"arrow-padding",type:Number})],k.prototype,"arrowPadding",2);u([f({type:Boolean})],k.prototype,"flip",2);u([f({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],k.prototype,"flipFallbackPlacements",2);u([f({attribute:"flip-fallback-strategy"})],k.prototype,"flipFallbackStrategy",2);u([f({type:Object})],k.prototype,"flipBoundary",2);u([f({attribute:"flip-padding",type:Number})],k.prototype,"flipPadding",2);u([f({type:Boolean})],k.prototype,"shift",2);u([f({type:Object})],k.prototype,"shiftBoundary",2);u([f({attribute:"shift-padding",type:Number})],k.prototype,"shiftPadding",2);u([f({attribute:"auto-size"})],k.prototype,"autoSize",2);u([f()],k.prototype,"sync",2);u([f({type:Object})],k.prototype,"autoSizeBoundary",2);u([f({attribute:"auto-size-padding",type:Number})],k.prototype,"autoSizePadding",2);u([f({attribute:"hover-bridge",type:Boolean})],k.prototype,"hoverBridge",2);var no=ht`
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
`,A=class extends ft{constructor(){super(),this.localize=new Ft(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=jt(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=jt(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await qt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:r}=Yt(this,"tooltip.show",{dir:this.localize.dir()});await Xt(this.popup.popup,o,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await qt(this.body);const{keyframes:o,options:r}=Yt(this,"tooltip.hide",{dir:this.localize.dir()});await Xt(this.popup.popup,o,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Kt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Kt(this,"sl-after-hide")}render(){return ut`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${wt({tooltip:!0,"tooltip--open":this.open})}
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
    `}};A.styles=[pt,no];A.dependencies={"sl-popup":k};u([Q("slot:not([name])")],A.prototype,"defaultSlot",2);u([Q(".tooltip__body")],A.prototype,"body",2);u([Q("sl-popup")],A.prototype,"popup",2);u([f()],A.prototype,"content",2);u([f()],A.prototype,"placement",2);u([f({type:Boolean,reflect:!0})],A.prototype,"disabled",2);u([f({type:Number})],A.prototype,"distance",2);u([f({type:Boolean,reflect:!0})],A.prototype,"open",2);u([f({type:Number})],A.prototype,"skidding",2);u([f()],A.prototype,"trigger",2);u([f({type:Boolean})],A.prototype,"hoist",2);u([Et("open",{waitUntilFirstUpdate:!0})],A.prototype,"handleOpenChange",1);u([Et(["content","distance","hoist","placement","skidding"])],A.prototype,"handleOptionsChange",1);u([Et("disabled")],A.prototype,"handleDisabledChange",1);oe("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});oe("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});x.define("sl-button");bt.define("sl-button-group");ee.define("sl-icon");A.define("sl-tooltip");export{me as F,k as S,bt as a,x as b,A as c,re as d,ge as e,uo as f,Tt as g,co as v};
