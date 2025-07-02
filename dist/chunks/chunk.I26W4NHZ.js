import{a as R}from"./chunk.OHRBDQCO.js";import{a as F,b as j}from"./chunk.TFICHQZE.js";import{a,b as y}from"./chunk.FIQQYKEP.js";import{a as w,b as s,c as x,d as $}from"./chunk.6ZDEZIWM.js";import{e as g,f as z,g as M,h as O,i as U}from"./chunk.U4P7XQR4.js";var S=new Set,b=new Map,f,V="ltr",T="en",H=typeof MutationObserver!="undefined"&&typeof document!="undefined"&&typeof document.documentElement!="undefined";if(H){let t=new MutationObserver(W);V=document.documentElement.dir||"ltr",T=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function v(...t){t.map(e=>{let r=e.$code.toLowerCase();b.has(r)?b.set(r,Object.assign(Object.assign({},b.get(r)),e)):b.set(r,e),f||(f=e)}),W()}function W(){H&&(V=document.documentElement.dir||"ltr",T=document.documentElement.lang||navigator.language),[...S.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var E=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){S.add(this.host)}hostDisconnected(){S.delete(this.host)}dir(){return`${this.host.dir||V}`.toLowerCase()}lang(){return`${this.host.lang||T}`.toLowerCase()}getTranslationData(e){var r,n;let i=new Intl.Locale(e.replace(/_/g,"-")),o=i==null?void 0:i.language.toLowerCase(),d=(n=(r=i==null?void 0:i.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&n!==void 0?n:"",c=b.get(`${o}-${d}`),m=b.get(o);return{locale:i,language:o,region:d,primary:c,secondary:m}}exists(e,r){var n;let{primary:i,secondary:o}=this.getTranslationData((n=r.lang)!==null&&n!==void 0?n:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[e]||o&&o[e]||r.includeFallback&&f&&f[e])}term(e,...r){let{primary:n,secondary:i}=this.getTranslationData(this.lang()),o;if(n&&n[e])o=n[e];else if(i&&i[e])o=i[e];else if(f&&f[e])o=f[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof o=="function"?o(...r):o}date(e,r){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),r).format(e)}number(e,r){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),r).format(e)}relativeTime(e,r,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,r)}};var K={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};v(K);var P=K;var _=class extends E{};v(P);var X=()=>({checkValidity(t){let e=t.input,r={message:"",isValid:!0,invalidKeys:[]};if(!e)return r;let n=!0;if("checkValidity"in e&&(n=e.checkValidity()),n)return r;if(r.isValid=!1,"validationMessage"in e&&(r.message=e.validationMessage),!("validity"in e))return r.invalidKeys.push("customError"),r;for(let i in e.validity){if(i==="valid")continue;let o=i;e.validity[o]&&r.invalidKeys.push(o)}return r}});var A=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},et=()=>({observedAttributes:["custom-error"],checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}),h=class extends y{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new A))},this.handleInteraction=t=>{var r;let e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===((r=this.assumeInteractionOn)==null?void 0:r.length)&&(this.hasInteracted=!0)},!1||this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[et()]}static get observedAttributes(){let t=new Set(super.observedAttributes||[]);for(let e of this.validators)if(e.observedAttributes)for(let r of e.observedAttributes)t.add(r);return[...t]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(!!1&&t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")){let e=this.value;if(Array.isArray(e)){if(this.name){let r=new FormData;for(let n of e)r.append(this.name,n);this.setValue(r,r)}}else this.setValue(e,e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!!1&&!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){let e=t[0],r=t[1],n=t[2];n||(n=this.validationTarget),this.internals.setValidity(e,r,n||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let t=!!this.required,e=this.internals.validity.valid,r=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&r),this.customStates.set("user-valid",e&&r)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...t){let[e,r]=t;this.internals.setFormValue(e,r)}get allValidators(){let t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}let t=this.allValidators;if(!(t!=null&&t.length))return;let e={customError:!!this.customError},r=this.validationTarget||this.input||void 0,n="";for(let i of t){let{isValid:o,message:d,invalidKeys:c}=i.checkValidity(this);o||(n||(n=d),(c==null?void 0:c.length)>=0&&c.forEach(m=>e[m]=!0))}n||(n=this.validationMessage),this.setValidity(e,n,r)}};h.formAssociated=!0;a([s({reflect:!0})],h.prototype,"name",2);a([s({type:Boolean})],h.prototype,"disabled",2);a([s({state:!0,attribute:!1})],h.prototype,"valueHasChanged",2);a([s({state:!0,attribute:!1})],h.prototype,"hasInteracted",2);a([s({attribute:"custom-error",reflect:!0})],h.prototype,"customError",2);a([s({attribute:!1,state:!0,type:Object})],h.prototype,"validity",1);var Z=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=r=>{let n=r.target;(this.slotNames.includes("[default]")&&!n.name||n.name&&this.slotNames.includes(n.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var G={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Y=t=>(...e)=>({_$litDirective$:t,values:e}),k=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var J=Y(class extends k{constructor(t){var e;if(super(t),t.type!==G.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in e)e[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(e)}let r=t.element.classList;for(let o of this.st)o in e||(r.remove(o),this.st.delete(o));for(let o in e){let d=!!e[o];d===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(d?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return O}});var u=t=>t!=null?t:U;var tt=Symbol.for(""),rt=t=>{if((t==null?void 0:t.r)===tt)return t==null?void 0:t._$litStatic$};var L=(t,...e)=>({_$litStatic$:e.reduce((r,n,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+t[i+1],t[0]),r:tt}),Q=new Map,N=t=>(e,...r)=>{let n=r.length,i,o,d=[],c=[],m,p=0,D=!1;for(;p<n;){for(m=e[p];p<n&&(o=r[p],(i=rt(o))!==void 0);)m+=i+e[++p],D=!0;p!==n&&c.push(o),d.push(m),p++}if(p===n&&d.push(e[n]),D){let B=d.join("$$lit$$");(e=Q.get(B))===void 0&&(d.raw=d,Q.set(B,e=d)),r=c}return t(e,...r)},C=N(g),Dt=N(z),Bt=N(M);var nt=`@layer wa-component {
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
`,l=class extends h{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new Z(this,"[default]","start","end"),this.localize=new _(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button",this.form=null}static get validators(){return[...super.validators,X()]}constructLightDOMButton(){let t=document.createElement("button");return t.type=this.type,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.clipPath="inset(50%)",t.style.overflow="hidden",t.style.whiteSpace="nowrap",this.name&&(t.name=this.name),t.value=this.value||"",["form","formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(e=>{this.hasAttribute(e)&&t.setAttribute(e,this.getAttribute(e))}),t}handleClick(){var r;if(!this.getForm())return;let e=this.constructLightDOMButton();(r=this.parentElement)==null||r.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new A)}handleLabelSlotChange(){let t=this.labelSlot.assignedNodes({flatten:!0}),e=!1,r=!1,n="";[...t].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&i.localName==="wa-icon"&&(r=!0,e||(e=i.hasAttribute("label"))),i.nodeType===Node.TEXT_NODE&&(n+=i.textContent)}),this.isIconButton=n.trim()===""&&r,this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=this.isLink(),e=t?L`a`:L`button`;return C`
      <${e}
        part="base"
        class=${J({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${u(t?void 0:this.disabled)}
        type=${u(t?void 0:this.type)}
        title=${this.title}
        name=${u(t?void 0:this.name)}
        value=${u(t?void 0:this.value)}
        href=${u(t?this.href:void 0)}
        target=${u(t?this.target:void 0)}
        download=${u(t?this.download:void 0)}
        rel=${u(t&&this.rel?this.rel:void 0)}
        role=${u(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?C`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?C`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${e}>
    `}};l.css=[nt,j,F];a([$(".button")],l.prototype,"button",2);a([$("slot:not([name])")],l.prototype,"labelSlot",2);a([x()],l.prototype,"invalid",2);a([x()],l.prototype,"isIconButton",2);a([s()],l.prototype,"title",2);a([s({reflect:!0})],l.prototype,"variant",2);a([s({reflect:!0})],l.prototype,"appearance",2);a([s({reflect:!0})],l.prototype,"size",2);a([s({attribute:"with-caret",type:Boolean,reflect:!0})],l.prototype,"withCaret",2);a([s({type:Boolean})],l.prototype,"disabled",2);a([s({type:Boolean,reflect:!0})],l.prototype,"loading",2);a([s({type:Boolean,reflect:!0})],l.prototype,"pill",2);a([s()],l.prototype,"type",2);a([s({reflect:!0})],l.prototype,"name",2);a([s({reflect:!0})],l.prototype,"value",2);a([s({reflect:!0})],l.prototype,"href",2);a([s()],l.prototype,"target",2);a([s()],l.prototype,"rel",2);a([s()],l.prototype,"download",2);a([s({reflect:!0})],l.prototype,"form",2);a([s({attribute:"formaction"})],l.prototype,"formAction",2);a([s({attribute:"formenctype"})],l.prototype,"formEnctype",2);a([s({attribute:"formmethod"})],l.prototype,"formMethod",2);a([s({attribute:"formnovalidate",type:Boolean})],l.prototype,"formNoValidate",2);a([s({attribute:"formtarget"})],l.prototype,"formTarget",2);a([R("disabled",{waitUntilFirstUpdate:!0})],l.prototype,"handleDisabledChange",1);l=a([w("wa-button")],l);var ot=`:host {
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
`,q=class extends y{constructor(){super(...arguments),this.localize=new _(this)}render(){return g`
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
    `}};q.css=ot;q=a([w("wa-spinner")],q);export{_ as a,J as b,Z as c,l as d};
/*! Bundled license information:

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
