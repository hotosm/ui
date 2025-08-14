import{a as go,b as bo}from"./chunk.3M4SJCXS.js";import{a as ut,b as He,c as H,d as Je,e as Qe,f as Rt}from"./chunk.N7VH3RWY.js";import{a as yo}from"./chunk.M3ZIZPKF.js";import{a as Ze,b as $,c as vo,d as Ye}from"./chunk.OHYOXYF2.js";import{e as le,k as mo}from"./chunk.C6I42VVF.js";import{a as fo,d as Me,e as Ne,f as Ue,g as ze}from"./chunk.N2W26RCT.js";function Pa(n,t){return{top:Math.round(n.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(n.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var An=new Set;function ja(){let n=document.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}function Da(){let n=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(n)||!n?0:n}function pt(n){if(An.add(n),!document.documentElement.classList.contains("wa-scroll-lock")){let t=ja()+Da(),e=getComputedStyle(document.documentElement).scrollbarGutter;(!e||e==="auto")&&(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",e),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${t}px`)}}function ft(n){An.delete(n),An.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function En(n,t,e="vertical",o="smooth"){let r=Pa(n,t),i=r.top+t.scrollTop,s=r.left+t.scrollLeft,c=t.scrollLeft,h=t.scrollLeft+t.offsetWidth,l=t.scrollTop,d=t.scrollTop+t.offsetHeight;(e==="horizontal"||e==="both")&&(s<c?t.scrollTo({left:s,behavior:o}):s+n.clientWidth>h&&t.scrollTo({left:s-t.offsetWidth+n.clientWidth,behavior:o})),(e==="vertical"||e==="both")&&(i<l?t.scrollTo({top:i,behavior:o}):i+n.clientHeight>d&&t.scrollTo({top:i-t.offsetHeight+n.clientHeight,behavior:o}))}var La=class extends Event{constructor(n){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=n}},Ma=class extends Event{constructor(n){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=n}},Na=`:host {
  --indicator-color: var(--wa-color-brand-fill-loud);
  --track-color: var(--wa-color-neutral-fill-normal);
  --track-width: 0.125rem;

  display: block;
}

.tab-group {
  display: flex;
  border-radius: 0;
}

.tabs {
  display: flex;
  position: relative;
}

.indicator {
  position: absolute;
}

.tab-group-has-scroll-controls .nav-container {
  position: relative;
  padding: 0 1.5em;
}

.body {
  display: block;
  overflow: auto;
}

.scroll-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1.5em;
}

.scroll-button-start {
  inset-inline-start: 0;
}

.scroll-button-end {
  inset-inline-end: 0;
}

/*
   * Top
   */

.tab-group-top {
  flex-direction: column;
}

.tab-group-top .nav-container {
  order: 1;
}

.tab-group-top .nav {
  display: flex;
  overflow-x: auto;

  /* Hide scrollbar in Firefox */
  scrollbar-width: none;
}

/* Hide scrollbar in Chrome/Safari */
.tab-group-top .nav::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.tab-group-top .tabs {
  flex: 1 1 auto;
  position: relative;
  flex-direction: row;
  border-bottom: solid var(--track-width) var(--track-color);
}

.tab-group-top .indicator {
  bottom: calc(-1 * var(--track-width));
  border-bottom: solid var(--track-width) var(--indicator-color);
}

.tab-group-top .body {
  order: 2;
}

.tab-group-top ::slotted(wa-tab[active]) {
  border-block-end: solid var(--track-width) var(--indicator-color);
  margin-block-end: calc(-1 * var(--track-width));
}

.tab-group-top ::slotted(wa-tab-panel) {
  --padding: var(--wa-space-xl) 0;
}

/*
   * Bottom
   */

.tab-group-bottom {
  flex-direction: column;
}

.tab-group-bottom .nav-container {
  order: 2;
}

.tab-group-bottom .nav {
  display: flex;
  overflow-x: auto;

  /* Hide scrollbar in Firefox */
  scrollbar-width: none;
}

/* Hide scrollbar in Chrome/Safari */
.tab-group-bottom .nav::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.tab-group-bottom .tabs {
  flex: 1 1 auto;
  position: relative;
  flex-direction: row;
  border-top: solid var(--track-width) var(--track-color);
}

.tab-group-bottom .indicator {
  top: calc(-1 * var(--track-width));
  border-top: solid var(--track-width) var(--indicator-color);
}

.tab-group-bottom .body {
  order: 1;
}

.tab-group-bottom ::slotted(wa-tab[active]) {
  border-block-start: solid var(--track-width) var(--indicator-color);
  margin-block-start: calc(-1 * var(--track-width));
}

.tab-group-bottom ::slotted(wa-tab-panel) {
  --padding: var(--wa-space-xl) 0;
}

/*
   * Start
   */

.tab-group-start {
  flex-direction: row;
}

.tab-group-start .nav-container {
  order: 1;
}

.tab-group-start .tabs {
  flex: 0 0 auto;
  flex-direction: column;
  border-inline-end: solid var(--track-width) var(--track-color);
}

.tab-group-start .indicator {
  inset-inline-end: calc(-1 * var(--track-width));
  border-right: solid var(--track-width) var(--indicator-color);
}

.tab-group-start .body {
  flex: 1 1 auto;
  order: 2;
}

.tab-group-start ::slotted(wa-tab[active]) {
  border-inline-end: solid var(--track-width) var(--indicator-color);
  margin-inline-end: calc(-1 * var(--track-width));
}

.tab-group-start ::slotted(wa-tab-panel) {
  --padding: 0 var(--wa-space-xl);
}

/*
   * End
   */

.tab-group-end {
  flex-direction: row;
}

.tab-group-end .nav-container {
  order: 2;
}

.tab-group-end .tabs {
  flex: 0 0 auto;
  flex-direction: column;
  border-left: solid var(--track-width) var(--track-color);
}

.tab-group-end .indicator {
  inset-inline-start: calc(-1 * var(--track-width));
  border-inline-start: solid var(--track-width) var(--indicator-color);
}

.tab-group-end .body {
  flex: 1 1 auto;
  order: 1;
}

.tab-group-end ::slotted(wa-tab[active]) {
  border-inline-start: solid var(--track-width) var(--indicator-color);
  margin-inline-start: calc(-1 * var(--track-width));
}

.tab-group-end ::slotted(wa-tab-panel) {
  --padding: 0 var(--wa-space-xl);
}
`,De=class extends Je{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new ut(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(n=>{n.some(e=>!["aria-labelledby","aria-controls"].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels());let t=n.filter(e=>e.target.closest("wa-tab-group")===this);if(t.some(e=>e.attributeName==="disabled"))this.syncTabsAndPanels();else if(t.some(e=>e.attributeName==="active")){let o=t.filter(r=>r.attributeName==="active"&&r.target.tagName.toLowerCase()==="wa-tab").map(r=>r.target).find(r=>r.active);o&&o.closest("wa-tab-group")===this&&this.setActiveTab(o)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((t,e)=>{var o;if(t[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){let r=this.tabs.find(i=>i.panel===this.active);r&&this.setActiveTab(r)}else this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1});e.unobserve(t[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){var n,t;super.disconnectedCallback(),(n=this.mutationObserver)==null||n.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.body.assignedElements()].filter(n=>n.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(n=>n.active)}handleClick(n){let e=n.target.closest("wa-tab");(e==null?void 0:e.closest("wa-tab-group"))===this&&e!==null&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(n){let e=n.target.closest("wa-tab");if((e==null?void 0:e.closest("wa-tab-group"))===this){if(["Enter"," "].includes(n.key)){e!==null&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),n.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(n.key)){let r=this.tabs.find(c=>c.matches(":focus")),i=this.localize.dir()==="rtl",s=null;if((r==null?void 0:r.tagName.toLowerCase())==="wa-tab"){if(n.key==="Home")s=this.focusableTabs[0];else if(n.key==="End")s=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&n.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&n.key==="ArrowUp"){let c=this.tabs.findIndex(h=>h===r);s=this.findNextFocusableTab(c,"backward")}else if(["top","bottom"].includes(this.placement)&&n.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&n.key==="ArrowDown"){let c=this.tabs.findIndex(h=>h===r);s=this.findNextFocusableTab(c,"forward")}if(!s)return;s.tabIndex=0,s.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(s,{scrollBehavior:"smooth"}):this.tabs.forEach(c=>{c.tabIndex=c===s?0:-1}),["top","bottom"].includes(this.placement)&&En(s,this.nav,"horizontal"),n.preventDefault()}}}}findNextFocusableTab(n,t){let e=null,o=t==="forward"?1:-1,r=n+o;for(;n<this.tabs.length;){if(e=this.tabs[r]||null,e===null){t==="forward"?e=this.focusableTabs[0]:e=this.focusableTabs[this.focusableTabs.length-1];break}if(!e.disabled)break;r+=o}return e}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(n,t){if(t=fo({emitEvents:!0,scrollBehavior:"auto"},t),n.closest("wa-tab-group")===this&&n!==this.activeTab&&!n.disabled){let e=this.activeTab;this.active=n.panel,this.activeTab=n,this.tabs.forEach(o=>{o.active=o===this.activeTab,o.tabIndex=o===this.activeTab?0:-1}),this.panels.forEach(o=>{var r;return o.active=o.name===((r=this.activeTab)==null?void 0:r.panel)}),["top","bottom"].includes(this.placement)&&En(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(e&&this.dispatchEvent(new La({name:e.panel})),this.dispatchEvent(new Ma({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(n=>{let t=this.panels.find(e=>e.name===n.panel);t&&(n.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",n.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(n=>!n.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){let n=this.tabs.find(t=>t.panel===this.active);n&&this.setActiveTab(n,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){let n=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return le`
      <div
        part="base"
        class=${Qe({"tab-group":!0,"tab-group-top":this.placement==="top","tab-group-bottom":this.placement==="bottom","tab-group-start":this.placement==="start","tab-group-end":this.placement==="end","tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?le`
                <wa-button
                  part="scroll-button scroll-button-start"
                  exportparts="base:scroll-button__base"
                  class="scroll-button scroll-button-start"
                  appearance="plain"
                  @click=${this.handleScrollToStart}
                >
                  <wa-icon
                    name=${n?"chevron-right":"chevron-left"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToStart")}
                  ></wa-icon>
                </wa-button>
              `:""}

          <!-- We have a focus listener because in Firefox (and soon to be Chrome) overflow containers are focusable. -->
          <div class="nav" @focus=${()=>{var t;return(t=this.activeTab)==null?void 0:t.focus({preventScroll:!0})}}>
            <div part="tabs" class="tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?le`
                <wa-button
                  part="scroll-button scroll-button-end"
                  class="scroll-button scroll-button-end"
                  exportparts="base:scroll-button__base"
                  appearance="plain"
                  @click=${this.handleScrollToEnd}
                >
                  <wa-icon
                    name=${n?"chevron-left":"chevron-right"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToEnd")}
                  ></wa-icon>
                </wa-button>
              `:""}
        </div>

        <slot part="body" class="body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};De.css=Na;H([Ye(".tab-group")],De.prototype,"tabGroup",2);H([Ye(".body")],De.prototype,"body",2);H([Ye(".nav")],De.prototype,"nav",2);H([vo()],De.prototype,"hasScrollControls",2);H([$({reflect:!0})],De.prototype,"active",2);H([$()],De.prototype,"placement",2);H([$()],De.prototype,"activation",2);H([$({attribute:"without-scroll-controls",type:Boolean})],De.prototype,"withoutScrollControls",2);H([He("active")],De.prototype,"updateActiveTab",1);H([He("withoutScrollControls",{waitUntilFirstUpdate:!0})],De.prototype,"updateScrollControls",1);De=H([Ze("wa-tab-group")],De);var Ua=`:host {
  display: inline-block;
  color: var(--wa-color-neutral-on-quiet);
  font-weight: var(--wa-font-weight-action);
}

.tab {
  display: inline-flex;
  align-items: center;
  font: inherit;
  padding: 1em 1.5em;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  transition: color var(--wa-transition-fast) var(--wa-transition-easing);

  ::slotted(wa-icon:first-child) {
    margin-inline-end: 0.5em;
  }

  ::slotted(wa-icon:last-child) {
    margin-inline-start: 0.5em;
  }
}

@media (hover: hover) {
  :host(:hover:not([disabled])) .tab {
    color: currentColor;
  }
}

:host(:focus) {
  outline: transparent;
}

:host(:focus-visible) .tab {
  outline: var(--wa-focus-ring);
  outline-offset: calc(-1 * var(--wa-border-width-l) - var(--wa-focus-ring-offset));
}

:host([active]:not([disabled])) {
  color: var(--wa-color-brand-on-quiet);
}

:host([disabled]) .tab {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (forced-colors: active) {
  :host([active]:not([disabled])) {
    outline: solid 1px transparent;
    outline-offset: -3px;
  }
}
`,za=0,Xe=class extends Je{constructor(){super(...arguments),this.attrId=++za,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||(this.slot="nav"),super.connectedCallback(),this.setAttribute("role","tab")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){var n;return this.id=((n=this.id)==null?void 0:n.length)>0?this.id:this.componentId,le`
      <div
        part="base"
        class=${Qe({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};Xe.css=Ua;H([Ye(".tab")],Xe.prototype,"tab",2);H([$({reflect:!0})],Xe.prototype,"panel",2);H([$({type:Boolean,reflect:!0})],Xe.prototype,"active",2);H([$({type:Boolean,reflect:!0})],Xe.prototype,"disabled",2);H([$({type:Number,reflect:!0})],Xe.prototype,"tabIndex",2);H([He("active")],Xe.prototype,"handleActiveChange",1);H([He("disabled")],Xe.prototype,"handleDisabledChange",1);Xe=H([Ze("wa-tab")],Xe);var Wa=`:host {
  --padding: 0;

  display: none;
}

:host([active]) {
  display: block;
}

.tab-panel {
  display: block;
  padding: var(--padding);
}
`,Fa=0,mt=class extends Je{constructor(){super(...arguments),this.attrId=++Fa,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return le`
      <slot
        part="base"
        class=${Qe({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};mt.css=Wa;H([$({reflect:!0})],mt.prototype,"name",2);H([$({type:Boolean,reflect:!0})],mt.prototype,"active",2);H([He("active")],mt.prototype,"handleActiveChange",1);mt=H([Ze("wa-tab-panel")],mt);function $t(n){return n.split(" ").map(t=>t.trim()).filter(t=>t!=="")}var Kt=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},Gt=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}},Vt=class extends Event{constructor(n){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=n}},Zt=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};function et(n,t){return new Promise(e=>{let o=new AbortController,{signal:r}=o;if(n.classList.contains(t))return;n.classList.remove(t),n.classList.add(t);let i=()=>{n.classList.remove(t),e(),o.abort()};n.addEventListener("animationend",i,{once:!0,signal:r}),n.addEventListener("animationcancel",i,{once:!0,signal:r})})}var Ha=`:host {
  --width: 31rem;
  --spacing: var(--wa-space-l);
  --show-duration: 200ms;
  --hide-duration: 200ms;

  display: none;
}

:host([open]) {
  display: block;
}

.dialog {
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: var(--width);
  max-width: calc(100% - var(--wa-space-2xl));
  max-height: calc(100% - var(--wa-space-2xl));
  background-color: var(--wa-color-surface-raised);
  border-radius: var(--wa-panel-border-radius);
  border: none;
  box-shadow: var(--wa-shadow-l);
  padding: 0;
  margin: auto;

  &.show {
    animation: show-dialog var(--show-duration) ease;

    &::backdrop {
      animation: show-backdrop var(--show-duration, 200ms) ease;
    }
  }

  &.hide {
    animation: show-dialog var(--hide-duration) ease reverse;

    &::backdrop {
      animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
    }
  }

  &.pulse {
    animation: pulse 250ms ease;
  }
}

.dialog:focus {
  outline: none;
}

/* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
@media screen and (max-width: 420px) {
  .dialog {
    max-height: 80vh;
  }
}

.open {
  display: flex;
  opacity: 1;
}

.header {
  flex: 0 0 auto;
  display: flex;
  flex-wrap: nowrap;

  padding-inline-start: var(--spacing);
  padding-block-end: 0;

  /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
  padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
  padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
}

.title {
  align-self: center;
  flex: 1 1 auto;
  font-family: inherit;
  font-size: var(--wa-font-size-l);
  font-weight: var(--wa-font-weight-heading);
  line-height: var(--wa-line-height-condensed);
  margin: 0;
}

.header-actions {
  align-self: start;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: end;
  gap: var(--wa-space-2xs);
  padding-inline-start: var(--spacing);
}

.header-actions wa-button,
.header-actions ::slotted(wa-button) {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.body {
  flex: 1 1 auto;
  display: block;
  padding: var(--spacing);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.footer {
  flex: 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: var(--wa-space-xs);
  justify-content: end;
  padding: var(--spacing);
  padding-block-start: 0;
}

.footer ::slotted(wa-button:not(:first-of-type)) {
  margin-inline-start: var(--wa-spacing-xs);
}

.dialog::backdrop {
  /*
    NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
    remove the fallback values here.
  */
  background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
}

@keyframes pulse {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.02;
  }
  100% {
    scale: 1;
  }
}

@keyframes show-dialog {
  from {
    opacity: 0;
    scale: 0.8;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}

@keyframes show-backdrop {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (forced-colors: active) {
  .dialog {
    border: solid 1px white;
  }
}
`,tt=class extends Je{constructor(){super(...arguments),this.localize=new ut(this),this.hasSlotController=new Rt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=n=>{n.key==="Escape"&&this.open&&(n.preventDefault(),n.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),pt(this))}disconnectedCallback(){super.disconnectedCallback(),ft(this),this.removeOpenListeners()}async requestClose(n){let t=new Vt({source:n});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,et(this.dialog,"pulse");return}this.removeOpenListeners(),await et(this.dialog,"hide"),this.open=!1,this.dialog.close(),ft(this);let e=this.originalTrigger;typeof(e==null?void 0:e.focus)=="function"&&setTimeout(()=>e.focus()),this.dispatchEvent(new Kt)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(n){n.preventDefault(),this.dialog.classList.contains("hide")||this.requestClose(this.dialog)}handleDialogClick(n){let e=n.target.closest('[data-dialog="close"]');e&&(n.stopPropagation(),this.requestClose(e))}async handleDialogPointerDown(n){n.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await et(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){let n=new Zt;if(this.dispatchEvent(n),n.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),pt(this),requestAnimationFrame(()=>{let t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"&&t.focus()}),await et(this.dialog,"show"),this.dispatchEvent(new Gt)}render(){let n=!this.withoutHeader&&(this.label.length>0||this.hasSlotController.test("label")||this.hasSlotController.test("header-actions")),t=this.hasSlotController.test("footer");return le`
      <dialog
        part="dialog"
        class=${Qe({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${n?le`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${e=>this.requestClose(e.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        ${t?le`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};tt.css=Ha;H([Ye(".dialog")],tt.prototype,"dialog",2);H([$({type:Boolean,reflect:!0})],tt.prototype,"open",2);H([$({reflect:!0})],tt.prototype,"label",2);H([$({attribute:"without-header",type:Boolean,reflect:!0})],tt.prototype,"withoutHeader",2);H([$({attribute:"light-dismiss",type:Boolean})],tt.prototype,"lightDismiss",2);H([He("open",{waitUntilFirstUpdate:!0})],tt.prototype,"handleOpenChange",1);tt=H([Ze("wa-dialog")],tt);document.addEventListener("click",n=>{let t=n.target.closest("[data-dialog]");if(t instanceof Element){let[e,o]=$t(t.getAttribute("data-dialog")||"");if(e==="open"&&(o!=null&&o.length)){let i=t.getRootNode().getElementById(o);(i==null?void 0:i.localName)==="wa-dialog"?i.open=!0:console.warn(`A dialog with an ID of "${o}" could not be found in this document.`)}}});document.addEventListener("pointerdown",()=>{});var Ba=`:host {
  --size: 25rem;
  --spacing: var(--wa-space-l);
  --show-duration: 200ms;
  --hide-duration: 200ms;

  display: none;
}

:host([open]) {
  display: block;
}

.drawer {
  display: flex;
  flex-direction: column;
  top: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  background-color: var(--wa-color-surface-raised);
  border: none;
  box-shadow: var(--wa-shadow-l);
  overflow: auto;
  padding: 0;
  margin: 0;
  animation-duration: var(--show-duration);
  animation-timing-function: ease;

  &.show::backdrop {
    animation: show-backdrop var(--show-duration, 200ms) ease;
  }

  &.hide::backdrop {
    animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
  }

  &.show.top {
    animation: show-drawer-from-top var(--show-duration) ease;
  }

  &.hide.top {
    animation: show-drawer-from-top var(--hide-duration) ease reverse;
  }

  &.show.end {
    animation: show-drawer-from-end var(--show-duration) ease;

    &:dir(rtl) {
      animation-name: show-drawer-from-start;
    }
  }

  &.hide.end {
    animation: show-drawer-from-end var(--hide-duration) ease reverse;

    &:dir(rtl) {
      animation-name: show-drawer-from-start;
    }
  }

  &.show.bottom {
    animation: show-drawer-from-bottom var(--show-duration) ease;
  }

  &.hide.bottom {
    animation: show-drawer-from-bottom var(--hide-duration) ease reverse;
  }

  &.show.start {
    animation: show-drawer-from-start var(--show-duration) ease;

    &:dir(rtl) {
      animation-name: show-drawer-from-end;
    }
  }

  &.hide.start {
    animation: show-drawer-from-start var(--hide-duration) ease reverse;

    &:dir(rtl) {
      animation-name: show-drawer-from-end;
    }
  }

  &.pulse {
    animation: pulse 250ms ease;
  }
}

.drawer:focus {
  outline: none;
}

.top {
  top: 0;
  inset-inline-end: auto;
  bottom: auto;
  inset-inline-start: 0;
  width: 100%;
  height: var(--size);
}

.end {
  top: 0;
  inset-inline-end: 0;
  bottom: auto;
  inset-inline-start: auto;
  width: var(--size);
  height: 100%;
}

.bottom {
  top: auto;
  inset-inline-end: auto;
  bottom: 0;
  inset-inline-start: 0;
  width: 100%;
  height: var(--size);
}

.start {
  top: 0;
  inset-inline-end: auto;
  bottom: auto;
  inset-inline-start: 0;
  width: var(--size);
  height: 100%;
}

.header {
  display: flex;
  flex-wrap: nowrap;
  padding-inline-start: var(--spacing);
  padding-block-end: 0;

  /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
  padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
  padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
}

.title {
  align-self: center;
  flex: 1 1 auto;
  font: inherit;
  font-size: var(--wa-font-size-l);
  font-weight: var(--wa-font-weight-heading);
  line-height: var(--wa-line-height-condensed);
  margin: 0;
}

.header-actions {
  align-self: start;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: end;
  gap: var(--wa-space-2xs);
  padding-inline-start: var(--spacing);
}

.header-actions wa-button,
.header-actions ::slotted(wa-button) {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.body {
  flex: 1 1 auto;
  display: block;
  padding: var(--spacing);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.footer {
  display: flex;
  flex-wrap: wrap;
  gap: var(--wa-space-xs);
  justify-content: end;
  padding: var(--spacing);
  padding-block-start: 0;
}

.footer ::slotted(wa-button:not(:last-of-type)) {
  margin-inline-end: var(--wa-spacing-xs);
}

.drawer::backdrop {
  /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
  background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
}

@keyframes pulse {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.01;
  }
  100% {
    scale: 1;
  }
}

@keyframes show-drawer {
  from {
    opacity: 0;
    scale: 0.8;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}

@keyframes show-drawer-from-top {
  from {
    opacity: 0;
    translate: 0 -100%;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes show-drawer-from-end {
  from {
    opacity: 0;
    translate: 100%;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes show-drawer-from-bottom {
  from {
    opacity: 0;
    translate: 0 100%;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes show-drawer-from-start {
  from {
    opacity: 0;
    translate: -100% 0;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes show-backdrop {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (forced-colors: active) {
  .drawer {
    border: solid 1px white;
  }
}
`,Re=class extends Je{constructor(){super(...arguments),this.localize=new ut(this),this.hasSlotController=new Rt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!0,this.handleDocumentKeyDown=n=>{n.key==="Escape"&&this.open&&(n.preventDefault(),n.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),pt(this))}disconnectedCallback(){super.disconnectedCallback(),ft(this),this.removeOpenListeners()}async requestClose(n){let t=new Vt({source:n});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,et(this.drawer,"pulse");return}this.removeOpenListeners(),await et(this.drawer,"hide"),this.open=!1,this.drawer.close(),ft(this);let e=this.originalTrigger;typeof(e==null?void 0:e.focus)=="function"&&setTimeout(()=>e.focus()),this.dispatchEvent(new Kt)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(n){n.preventDefault(),this.drawer.classList.contains("hide")||this.requestClose(this.drawer)}handleDialogClick(n){let e=n.target.closest('[data-drawer="close"]');e&&(n.stopPropagation(),this.requestClose(e))}async handleDialogPointerDown(n){n.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await et(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){let n=new Zt;if(this.dispatchEvent(n),n.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),pt(this),requestAnimationFrame(()=>{let t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"&&t.focus()}),await et(this.drawer,"show"),this.dispatchEvent(new Gt)}render(){let n=!this.withoutHeader&&(this.label.length>0||this.hasSlotController.test("label")||this.hasSlotController.test("header-actions")),t=this.hasSlotController.test("footer");return le`
      <dialog
        part="dialog"
        class=${Qe({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${n?le`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${e=>this.requestClose(e.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        ${t?le`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};Re.css=Ba;H([Ye(".drawer")],Re.prototype,"drawer",2);H([$({type:Boolean,reflect:!0})],Re.prototype,"open",2);H([$({reflect:!0})],Re.prototype,"label",2);H([$({reflect:!0})],Re.prototype,"placement",2);H([$({attribute:"without-header",type:Boolean,reflect:!0})],Re.prototype,"withoutHeader",2);H([$({attribute:"light-dismiss",type:Boolean})],Re.prototype,"lightDismiss",2);H([He("open",{waitUntilFirstUpdate:!0})],Re.prototype,"handleOpenChange",1);Re=H([Ze("wa-drawer")],Re);document.addEventListener("click",n=>{let t=n.target.closest("[data-drawer]");if(t instanceof Element){let[e,o]=$t(t.getAttribute("data-drawer")||"");if(e==="open"&&(o!=null&&o.length)){let i=t.getRootNode().getElementById(o);(i==null?void 0:i.localName)==="wa-drawer"?i.open=!0:console.warn(`A drawer with an ID of "${o}" could not be found in this document.`)}}});document.body.addEventListener("pointerdown",()=>{});var qa={7:function(n,t,e){(function(o,r,i){var s=function(){return s=Object.assign||function(x){for(var _,w=1,P=arguments.length;w<P;w++)for(var N in _=arguments[w])Object.prototype.hasOwnProperty.call(_,N)&&(x[N]=_[N]);return x},s.apply(this,arguments)};function c(x,_){var w=typeof Symbol=="function"&&x[Symbol.iterator];if(!w)return x;var P,N,j=w.call(x),D=[];try{for(;(_===void 0||_-- >0)&&!(P=j.next()).done;)D.push(P.value)}catch(W){N={error:W}}finally{try{P&&!P.done&&(w=j.return)&&w.call(j)}finally{if(N)throw N.error}}return D}function h(x,_){return[x,!x||x.endsWith("/")?"":"/",_,".json"].join("")}function l(x,_){var w=x;return _&&Object.keys(_).forEach(function(P){var N=_[P],j=new RegExp("{".concat(P,"}"),"gm");w=w.replace(j,N.toString())}),w}function d(x,_,w){var P=x[_];if(!P)return w;var N=w.split("."),j="";do{var D=P[j+=N.shift()];D===void 0||typeof D!="object"&&N.length?N.length?j+=".":P=w:(P=D,j="")}while(N.length);return P}var m={},g={root:"",lang:"en",fallbackLang:"en"},v=r.createContext(null);o.TranslateContext=v,o.TranslateProvider=function(x){var _=function(D,W){D=Object.assign({},g,D),m=W||m;var U=c(i.useState(D.lang),2),M=U[0],re=U[1],oe=c(i.useState(m),2),te=oe[0],R=oe[1],ue=c(i.useState(!1),2),Ce=ue[0],fe=ue[1],Ee=function(ie){if(!te.hasOwnProperty(ie)){fe(!1);var pe=h(D.root,ie);fetch(pe).then(function(T){return T.json()}).then(function(T){m[ie]=T,R(s({},m)),fe(!0)}).catch(function(T){console.log("Aww, snap.",T),R(s({},m)),fe(!0)})}};return i.useEffect(function(){Ee(D.fallbackLang),Ee(M)},[M]),{lang:M,setLang:re,t:function(ie,pe){if(!te.hasOwnProperty(M))return ie;var T=d(te,M,ie);return T===ie&&M!==D.fallbackLang&&(T=d(te,D.fallbackLang,ie)),l(T,pe)},isReady:Ce}}({root:x.root||"assets",lang:x.lang||"en",fallbackLang:x.fallbackLang||"en"},x.translations),w=_.t,P=_.setLang,N=_.lang,j=_.isReady;return r.h(v.Provider,{value:{t:w,setLang:P,lang:N,isReady:j}},x.children)},o.format=l,o.getResourceUrl=h,o.getValue=d,Object.defineProperty(o,"__esModule",{value:!0})})(t,e(616),e(78))},633:(n,t)=>{var e;(function(){var o={}.hasOwnProperty;function r(){for(var i=[],s=0;s<arguments.length;s++){var c=arguments[s];if(c){var h=typeof c;if(h==="string"||h==="number")i.push(c);else if(Array.isArray(c)){if(c.length){var l=r.apply(null,c);l&&i.push(l)}}else if(h==="object"){if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]")){i.push(c.toString());continue}for(var d in c)o.call(c,d)&&c[d]&&i.push(d)}}}return i.join(" ")}n.exports?(r.default=r,n.exports=r):(e=function(){return r}.apply(t,[]))===void 0||(n.exports=e)})()},21:(n,t,e)=>{e.d(t,{A:()=>c});var o=e(645),r=e.n(o),i=e(278),s=e.n(i)()(r());s.push([n.id,'.hanko_accordion{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);width:100%;overflow:hidden}.hanko_accordion .hanko_accordionItem{color:var(--color, #333333);margin:.25rem 0;overflow:hidden}.hanko_accordion .hanko_accordionItem.hanko_dropdown{margin:0}.hanko_accordion .hanko_accordionItem .hanko_label{border-radius:var(--border-radius, 8px);border-style:none;height:var(--item-height, 42px);background:var(--background-color, white);box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;padding:0 1rem;margin:0;cursor:pointer;transition:all .35s}.hanko_accordion .hanko_accordionItem .hanko_label .hanko_labelText{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hanko_accordion .hanko_accordionItem .hanko_label .hanko_labelText .hanko_description{color:var(--color-shade-1, #8f9095)}.hanko_accordion .hanko_accordionItem .hanko_label.hanko_dropdown{margin:0;color:var(--link-color, #506cf0);justify-content:flex-start}.hanko_accordion .hanko_accordionItem .hanko_label:hover{color:var(--brand-contrast-color, white);background:var(--brand-color-shade-1, #6b84fb)}.hanko_accordion .hanko_accordionItem .hanko_label:hover .hanko_description{color:var(--brand-contrast-color, white)}.hanko_accordion .hanko_accordionItem .hanko_label:hover.hanko_dropdown{color:var(--link-color, #506cf0);background:none}.hanko_accordion .hanko_accordionItem .hanko_label:not(.hanko_dropdown)::after{content:"\u276F";width:1rem;text-align:center;transition:all .35s}.hanko_accordion .hanko_accordionItem .hanko_accordionInput{position:absolute;opacity:0;z-index:-1}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label{color:var(--brand-contrast-color, white);background:var(--brand-color, #506cf0)}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label .hanko_description{color:var(--brand-contrast-color, white)}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label.hanko_dropdown{color:var(--link-color, #506cf0);background:none}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label:not(.hanko_dropdown)::after{transform:rotate(90deg)}.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label~.hanko_accordionContent{margin:.25rem 1rem;opacity:1;max-height:100vh}.hanko_accordion .hanko_accordionItem .hanko_accordionContent{max-height:0;margin:0 1rem;opacity:0;overflow:hidden;transition:all .35s}.hanko_accordion .hanko_accordionItem .hanko_accordionContent.hanko_dropdownContent{border-style:none}',""]),s.locals={accordion:"hanko_accordion",accordionItem:"hanko_accordionItem",dropdown:"hanko_dropdown",label:"hanko_label",labelText:"hanko_labelText",description:"hanko_description",accordionInput:"hanko_accordionInput",accordionContent:"hanko_accordionContent",dropdownContent:"hanko_dropdownContent"};let c=s},905:(n,t,e)=>{e.d(t,{A:()=>c});var o=e(645),r=e.n(o),i=e(278),s=e.n(i)()(r());s.push([n.id,".hanko_errorBox{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);border-radius:var(--border-radius, 8px);border-style:var(--border-style, solid);border-width:var(--border-width, 1px);color:var(--error-color, #e82020);background:var(--background-color, white);margin:var(--item-margin, 0.5rem 0);display:flex;align-items:start;box-sizing:border-box;line-height:1.5rem;padding:.25em;gap:.2em}.hanko_errorBox>span{display:inline-flex}.hanko_errorBox>span:first-child{padding:.25em 0 .25em .19em}.hanko_errorBox[hidden]{display:none}.hanko_errorMessage{color:var(--error-color, #e82020)}",""]),s.locals={errorBox:"hanko_errorBox",errorMessage:"hanko_errorMessage"};let c=s},577:(n,t,e)=>{e.d(t,{A:()=>c});var o=e(645),r=e.n(o),i=e(278),s=e.n(i)()(r());s.push([n.id,'.hanko_form{display:flex;flex-grow:1}.hanko_form .hanko_ul{flex-grow:1;margin:var(--item-margin, 0.5rem 0);padding-inline-start:0;list-style-type:none;display:flex;flex-wrap:wrap;gap:1em}.hanko_form .hanko_li{display:flex;max-width:100%;flex-grow:1;flex-basis:min-content}.hanko_form .hanko_li.hanko_maxWidth{min-width:100%}.hanko_button{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);border-radius:var(--border-radius, 8px);border-style:var(--border-style, solid);border-width:var(--border-width, 1px);white-space:nowrap;width:100%;min-width:var(--button-min-width, 7em);min-height:var(--item-height, 42px);outline:none;cursor:pointer;transition:.1s ease-out;flex-grow:1;flex-shrink:1;display:inline-flex}.hanko_button:disabled{cursor:default}.hanko_button.hanko_primary{color:var(--brand-contrast-color, white);background:var(--brand-color, #506cf0);border-color:var(--brand-color, #506cf0);justify-content:center}.hanko_button.hanko_primary:hover{color:var(--brand-contrast-color, white);background:var(--brand-color-shade-1, #6b84fb);border-color:var(--brand-color, #506cf0)}.hanko_button.hanko_primary:focus{color:var(--brand-contrast-color, white);background:var(--brand-color, #506cf0);border-color:var(--color, #333333)}.hanko_button.hanko_primary:disabled{color:var(--color-shade-1, #8f9095);background:var(--color-shade-2, #e5e6ef);border-color:var(--color-shade-2, #e5e6ef)}.hanko_button.hanko_secondary{color:var(--color, #333333);background:var(--background-color, white);border-color:var(--color, #333333);justify-content:flex-start}.hanko_button.hanko_secondary:hover{color:var(--color, #333333);background:var(--color-shade-2, #e5e6ef);border-color:var(--color, #333333)}.hanko_button.hanko_secondary:focus{color:var(--color, #333333);background:var(--background-color, white);border-color:var(--brand-color, #506cf0)}.hanko_button.hanko_secondary:disabled{color:var(--color-shade-1, #8f9095);background:var(--color-shade-2, #e5e6ef);border-color:var(--color-shade-1, #8f9095)}.hanko_button.hanko_dangerous{color:var(--error-color, #e82020);background:var(--background-color, white);border-color:var(--error-color, #e82020);flex-grow:0;width:auto}.hanko_caption{flex-grow:1;flex-wrap:wrap;display:flex;justify-content:space-between;align-items:baseline}.hanko_lastUsed{color:var(--color-shade-1, #8f9095);font-size:smaller}.hanko_inputWrapper{flex-grow:1;position:relative;display:flex;min-width:var(--input-min-width, 14em);max-width:100%}.hanko_input{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);border-radius:var(--border-radius, 8px);border-style:var(--border-style, solid);border-width:var(--border-width, 1px);height:var(--item-height, 42px);color:var(--color, #333333);border-color:var(--color-shade-1, #8f9095);background:var(--background-color, white);padding:0 .5rem;outline:none;width:100%;box-sizing:border-box;transition:.1s ease-out}.hanko_input.hanko_error{border-color:var(--error-color, #e82020)}.hanko_input:-webkit-autofill,.hanko_input:-webkit-autofill:hover,.hanko_input:-webkit-autofill:focus{-webkit-text-fill-color:var(--color, #333333);-webkit-box-shadow:0 0 0 50px var(--background-color, white) inset}.hanko_input::-ms-reveal,.hanko_input::-ms-clear{display:none}.hanko_input::placeholder{color:var(--color-shade-1, #8f9095)}.hanko_input:focus{color:var(--color, #333333);border-color:var(--color, #333333)}.hanko_input:disabled{color:var(--color-shade-1, #8f9095);background:var(--color-shade-2, #e5e6ef);border-color:var(--color-shade-1, #8f9095)}.hanko_passcodeInputWrapper{flex-grow:1;min-width:var(--input-min-width, 14em);max-width:fit-content;position:relative;display:flex;justify-content:space-between}.hanko_passcodeInputWrapper .hanko_passcodeDigitWrapper{flex-grow:1;margin:0 .5rem 0 0}.hanko_passcodeInputWrapper .hanko_passcodeDigitWrapper:last-child{margin:0}.hanko_passcodeInputWrapper .hanko_passcodeDigitWrapper .hanko_input{text-align:center}.hanko_checkboxWrapper{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);color:var(--color, #333333);align-items:center;display:flex}.hanko_checkboxWrapper .hanko_label{color:inherit;padding-left:.5rem;cursor:pointer}.hanko_checkboxWrapper .hanko_label.hanko_disabled{cursor:default;color:var(--color-shade-1, #8f9095)}.hanko_checkboxWrapper .hanko_checkbox{border:currentColor solid 1px;border-radius:.15em;appearance:none;-webkit-appearance:none;width:1.1rem;height:1.1rem;margin:0;color:currentColor;background-color:var(--background-color, white);font:inherit;box-shadow:none;display:inline-flex;place-content:center;cursor:pointer}.hanko_checkboxWrapper .hanko_checkbox:checked{background-color:var(--color, #333333)}.hanko_checkboxWrapper .hanko_checkbox:disabled{cursor:default;background-color:var(--color-shade-2, #e5e6ef);border-color:var(--color-shade-1, #8f9095)}.hanko_checkboxWrapper .hanko_checkbox:checked:after{content:"\u2713";color:var(--background-color, white);position:absolute;line-height:1.1rem}.hanko_checkboxWrapper .hanko_checkbox:disabled:after{color:var(--color-shade-1, #8f9095)}',""]),s.locals={form:"hanko_form",ul:"hanko_ul",li:"hanko_li",maxWidth:"hanko_maxWidth",button:"hanko_button",primary:"hanko_primary",secondary:"hanko_secondary",dangerous:"hanko_dangerous",caption:"hanko_caption",lastUsed:"hanko_lastUsed",inputWrapper:"hanko_inputWrapper",input:"hanko_input",error:"hanko_error",passcodeInputWrapper:"hanko_passcodeInputWrapper",passcodeDigitWrapper:"hanko_passcodeDigitWrapper",checkboxWrapper:"hanko_checkboxWrapper",label:"hanko_label",disabled:"hanko_disabled",checkbox:"hanko_checkbox"};let c=s},619:(n,t,e)=>{e.d(t,{A:()=>c});var o=e(645),r=e.n(o),i=e(278),s=e.n(i)()(r());s.push([n.id,".hanko_headline{color:var(--color, #333333);font-family:var(--font-family, sans-serif);text-align:left;letter-spacing:0;font-style:normal;line-height:1.1}.hanko_headline.hanko_grade1{font-size:var(--headline1-font-size, 24px);font-weight:var(--headline1-font-weight, 600);margin:var(--headline1-margin, 0 0 0.5rem)}.hanko_headline.hanko_grade2{font-size:var(--headline2-font-size, 16px);font-weight:var(--headline2-font-weight, 600);margin:var(--headline2-margin, 1rem 0 0.5rem)}",""]),s.locals={headline:"hanko_headline",grade1:"hanko_grade1",grade2:"hanko_grade2"};let c=s},697:(n,t,e)=>{e.d(t,{A:()=>c});var o=e(645),r=e.n(o),i=e(278),s=e.n(i)()(r());s.push([n.id,".hanko_icon,.hanko_loadingSpinnerWrapper .hanko_loadingSpinner,.hanko_loadingSpinnerWrapperIcon .hanko_loadingSpinner,.hanko_exclamationMark,.hanko_checkmark{display:inline-block;fill:var(--brand-contrast-color, white);width:18px}.hanko_icon.hanko_secondary,.hanko_loadingSpinnerWrapper .hanko_secondary.hanko_loadingSpinner,.hanko_loadingSpinnerWrapperIcon .hanko_secondary.hanko_loadingSpinner,.hanko_secondary.hanko_exclamationMark,.hanko_secondary.hanko_checkmark{fill:var(--color, #333333)}.hanko_icon.hanko_disabled,.hanko_loadingSpinnerWrapper .hanko_disabled.hanko_loadingSpinner,.hanko_loadingSpinnerWrapperIcon .hanko_disabled.hanko_loadingSpinner,.hanko_disabled.hanko_exclamationMark,.hanko_disabled.hanko_checkmark{fill:var(--color-shade-1, #8f9095)}.hanko_checkmark{fill:var(--brand-color, #506cf0)}.hanko_checkmark.hanko_secondary{fill:var(--color-shade-1, #8f9095)}.hanko_checkmark.hanko_fadeOut{animation:hanko_fadeOut ease-out 1.5s forwards !important}@keyframes hanko_fadeOut{0%{opacity:1}100%{opacity:0}}.hanko_exclamationMark{fill:var(--error-color, #e82020)}.hanko_loadingSpinnerWrapperIcon{width:100%;column-gap:10px;margin-left:10px}.hanko_loadingSpinnerWrapper,.hanko_loadingSpinnerWrapperIcon{display:inline-flex;align-items:center;height:100%;margin:0 5px;justify-content:inherit;flex-wrap:inherit}.hanko_loadingSpinnerWrapper.hanko_centerContent,.hanko_centerContent.hanko_loadingSpinnerWrapperIcon{justify-content:center}.hanko_loadingSpinnerWrapper.hanko_maxWidth,.hanko_maxWidth.hanko_loadingSpinnerWrapperIcon{width:100%}.hanko_loadingSpinnerWrapper .hanko_loadingSpinner,.hanko_loadingSpinnerWrapperIcon .hanko_loadingSpinner{fill:var(--brand-color, #506cf0);animation:hanko_spin 500ms ease-in-out infinite}.hanko_loadingSpinnerWrapper.hanko_secondary,.hanko_secondary.hanko_loadingSpinnerWrapperIcon{fill:var(--color-shade-1, #8f9095)}@keyframes hanko_spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.hanko_googleIcon.hanko_disabled{fill:var(--color-shade-1, #8f9095)}.hanko_googleIcon.hanko_blue{fill:#4285f4}.hanko_googleIcon.hanko_green{fill:#34a853}.hanko_googleIcon.hanko_yellow{fill:#fbbc05}.hanko_googleIcon.hanko_red{fill:#ea4335}.hanko_microsoftIcon.hanko_disabled{fill:var(--color-shade-1, #8f9095)}.hanko_microsoftIcon.hanko_blue{fill:#00a4ef}.hanko_microsoftIcon.hanko_green{fill:#7fba00}.hanko_microsoftIcon.hanko_yellow{fill:#ffb900}.hanko_microsoftIcon.hanko_red{fill:#f25022}.hanko_facebookIcon.hanko_outline{fill:#0866ff}.hanko_facebookIcon.hanko_disabledOutline{fill:var(--color-shade-1, #8f9095)}.hanko_facebookIcon.hanko_letter{fill:#fff}.hanko_facebookIcon.hanko_disabledLetter{fill:var(--color-shade-2, #e5e6ef)}",""]),s.locals={icon:"hanko_icon",loadingSpinnerWrapper:"hanko_loadingSpinnerWrapper",loadingSpinner:"hanko_loadingSpinner",loadingSpinnerWrapperIcon:"hanko_loadingSpinnerWrapperIcon",exclamationMark:"hanko_exclamationMark",checkmark:"hanko_checkmark",secondary:"hanko_secondary",disabled:"hanko_disabled",fadeOut:"hanko_fadeOut",centerContent:"hanko_centerContent",maxWidth:"hanko_maxWidth",spin:"hanko_spin",googleIcon:"hanko_googleIcon",blue:"hanko_blue",green:"hanko_green",yellow:"hanko_yellow",red:"hanko_red",microsoftIcon:"hanko_microsoftIcon",facebookIcon:"hanko_facebookIcon",outline:"hanko_outline",disabledOutline:"hanko_disabledOutline",letter:"hanko_letter",disabledLetter:"hanko_disabledLetter"};let c=s},995:(n,t,e)=>{e.d(t,{A:()=>c});var o=e(645),r=e.n(o),i=e(278),s=e.n(i)()(r());s.push([n.id,".hanko_link{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);color:var(--link-color, #506cf0);text-decoration:var(--link-text-decoration, none);cursor:pointer;background:none !important;border:none;padding:0 !important;transition:all .1s}.hanko_link:hover{text-decoration:var(--link-text-decoration-hover, underline)}.hanko_link:disabled{color:var(--color, #333333) !important;pointer-events:none;cursor:default}.hanko_link.hanko_danger{color:var(--error-color, #e82020)}.hanko_linkWrapper{display:inline-flex;flex-direction:row;justify-content:space-between;align-items:center;overflow:hidden}.hanko_linkWrapper.hanko_reverse{flex-direction:row-reverse}",""]),s.locals={link:"hanko_link",danger:"hanko_danger",linkWrapper:"hanko_linkWrapper",reverse:"hanko_reverse"};let c=s},560:(n,t,e)=>{e.d(t,{A:()=>c});var o=e(645),r=e.n(o),i=e(278),s=e.n(i)()(r());s.push([n.id,".hanko_otpCreationDetails{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);color:var(--color, #333333);margin:var(--item-margin, 0.5rem 0);display:flex;justify-content:center;align-items:center;flex-direction:column;font-size:smaller}",""]),s.locals={otpCreationDetails:"hanko_otpCreationDetails"};let c=s},489:(n,t,e)=>{e.d(t,{A:()=>c});var o=e(645),r=e.n(o),i=e(278),s=e.n(i)()(r());s.push([n.id,".hanko_paragraph{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);color:var(--color, #333333);margin:var(--item-margin, 0.5rem 0);text-align:left;word-break:break-word}",""]),s.locals={paragraph:"hanko_paragraph"};let c=s},111:(n,t,e)=>{e.d(t,{A:()=>c});var o=e(645),r=e.n(o),i=e(278),s=e.n(i)()(r());s.push([n.id,".hanko_spacer{height:1em}.hanko_divider{font-weight:var(--font-weight, 400);font-size:var(--font-size, 16px);font-family:var(--font-family, sans-serif);line-height:var(--line-height, 1.4rem);display:flex;visibility:var(--divider-visibility, visible);color:var(--color-shade-1, #8f9095);margin:var(--item-margin, 0.5rem 0);padding:.5em 0}.hanko_divider .hanko_line{border-bottom-style:var(--border-style, solid);border-bottom-width:var(--border-width, 1px);color:inherit;font:inherit;width:100%}.hanko_divider .hanko_text{font:inherit;color:inherit;background:var(--background-color, white);padding:var(--divider-padding, 0 42px);line-height:.1em}",""]),s.locals={spacer:"hanko_spacer",divider:"hanko_divider",line:"hanko_line",text:"hanko_text"};let c=s},914:(n,t,e)=>{e.d(t,{A:()=>c});var o=e(645),r=e.n(o),i=e(278),s=e.n(i)()(r());s.push([n.id,".hanko_container{background-color:var(--background-color, white);padding:var(--container-padding, 30px);max-width:var(--container-max-width, 410px);display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:center;align-items:center;align-content:flex-start;box-sizing:border-box}.hanko_content{box-sizing:border-box;flex:0 1 auto;width:100%;height:100%}.hanko_footer{padding:.5rem 0 0;box-sizing:border-box;width:100%}.hanko_footer :nth-child(1){float:left}.hanko_footer :nth-child(2){float:right}.hanko_clipboardContainer{display:flex}.hanko_clipboardIcon{display:flex;margin:auto;cursor:pointer}",""]),s.locals={container:"hanko_container",content:"hanko_content",footer:"hanko_footer",clipboardContainer:"hanko_clipboardContainer",clipboardIcon:"hanko_clipboardIcon"};let c=s},278:n=>{n.exports=function(t){var e=[];return e.toString=function(){return this.map(function(o){var r="",i=o[5]!==void 0;return o[4]&&(r+="@supports (".concat(o[4],") {")),o[2]&&(r+="@media ".concat(o[2]," {")),i&&(r+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),r+=t(o),i&&(r+="}"),o[2]&&(r+="}"),o[4]&&(r+="}"),r}).join("")},e.i=function(o,r,i,s,c){typeof o=="string"&&(o=[[null,o,void 0]]);var h={};if(i)for(var l=0;l<this.length;l++){var d=this[l][0];d!=null&&(h[d]=!0)}for(var m=0;m<o.length;m++){var g=[].concat(o[m]);i&&h[g[0]]||(c!==void 0&&(g[5]===void 0||(g[1]="@layer".concat(g[5].length>0?" ".concat(g[5]):""," {").concat(g[1],"}")),g[5]=c),r&&(g[2]&&(g[1]="@media ".concat(g[2]," {").concat(g[1],"}")),g[2]=r),s&&(g[4]?(g[1]="@supports (".concat(g[4],") {").concat(g[1],"}"),g[4]=s):g[4]="".concat(s)),e.push(g))}},e}},645:n=>{n.exports=function(t){return t[1]}},616:(n,t,e)=>{e.r(t),e.d(t,{Component:()=>W,Fragment:()=>D,cloneElement:()=>Ge,createContext:()=>Ve,createElement:()=>P,createRef:()=>j,h:()=>P,hydrate:()=>yt,isValidElement:()=>s,options:()=>r,render:()=>Ke,toChildArray:()=>ue});var o,r,i,s,c,h,l,d,m,g={},v=[],x=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function _(u,p){for(var b in p)u[b]=p[b];return u}function w(u){var p=u.parentNode;p&&p.removeChild(u)}function P(u,p,b){var O,L,A,F={};for(A in p)A=="key"?O=p[A]:A=="ref"?L=p[A]:F[A]=p[A];if(arguments.length>2&&(F.children=arguments.length>3?o.call(arguments,2):b),typeof u=="function"&&u.defaultProps!=null)for(A in u.defaultProps)F[A]===void 0&&(F[A]=u.defaultProps[A]);return N(u,F,O,L,null)}function N(u,p,b,O,L){var A={type:u,props:p,key:b,ref:O,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:L==null?++i:L};return L==null&&r.vnode!=null&&r.vnode(A),A}function j(){return{current:null}}function D(u){return u.children}function W(u,p){this.props=u,this.context=p}function U(u,p){if(p==null)return u.__?U(u.__,u.__.__k.indexOf(u)+1):null;for(var b;p<u.__k.length;p++)if((b=u.__k[p])!=null&&b.__e!=null)return b.__e;return typeof u.type=="function"?U(u):null}function M(u){var p,b;if((u=u.__)!=null&&u.__c!=null){for(u.__e=u.__c.base=null,p=0;p<u.__k.length;p++)if((b=u.__k[p])!=null&&b.__e!=null){u.__e=u.__c.base=b.__e;break}return M(u)}}function re(u){(!u.__d&&(u.__d=!0)&&c.push(u)&&!oe.__r++||h!==r.debounceRendering)&&((h=r.debounceRendering)||l)(oe)}function oe(){var u,p,b,O,L,A,F,ne;for(c.sort(d);u=c.shift();)u.__d&&(p=c.length,O=void 0,L=void 0,F=(A=(b=u).__v).__e,(ne=b.__P)&&(O=[],(L=_({},A)).__v=A.__v+1,me(ne,A,L,b.__n,ne.ownerSVGElement!==void 0,A.__h!=null?[F]:null,O,F==null?U(A):F,A.__h),C(O,A),A.__e!=F&&M(A)),c.length>p&&c.sort(d));oe.__r=0}function te(u,p,b,O,L,A,F,ne,de,ge){var y,we,Z,z,Y,lt,se,be=O&&O.__k||v,je=be.length;for(b.__k=[],y=0;y<p.length;y++)if((z=b.__k[y]=(z=p[y])==null||typeof z=="boolean"||typeof z=="function"?null:typeof z=="string"||typeof z=="number"||typeof z=="bigint"?N(null,z,null,null,z):Array.isArray(z)?N(D,{children:z},null,null,null):z.__b>0?N(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):z)!=null){if(z.__=b,z.__b=b.__b+1,(Z=be[y])===null||Z&&z.key==Z.key&&z.type===Z.type)be[y]=void 0;else for(we=0;we<je;we++){if((Z=be[we])&&z.key==Z.key&&z.type===Z.type){be[we]=void 0;break}Z=null}me(u,z,Z=Z||g,L,A,F,ne,de,ge),Y=z.__e,(we=z.ref)&&Z.ref!=we&&(se||(se=[]),Z.ref&&se.push(Z.ref,null,z),se.push(we,z.__c||Y,z)),Y!=null?(lt==null&&(lt=Y),typeof z.type=="function"&&z.__k===Z.__k?z.__d=de=R(z,de,u):de=Ce(u,z,Z,be,Y,de),typeof b.type=="function"&&(b.__d=de)):de&&Z.__e==de&&de.parentNode!=u&&(de=U(Z))}for(b.__e=lt,y=je;y--;)be[y]!=null&&(typeof b.type=="function"&&be[y].__e!=null&&be[y].__e==b.__d&&(b.__d=fe(O).nextSibling),Q(be[y],be[y]));if(se)for(y=0;y<se.length;y++)E(se[y],se[++y],se[++y])}function R(u,p,b){for(var O,L=u.__k,A=0;L&&A<L.length;A++)(O=L[A])&&(O.__=u,p=typeof O.type=="function"?R(O,p,b):Ce(b,O,O,L,O.__e,p));return p}function ue(u,p){return p=p||[],u==null||typeof u=="boolean"||(Array.isArray(u)?u.some(function(b){ue(b,p)}):p.push(u)),p}function Ce(u,p,b,O,L,A){var F,ne,de;if(p.__d!==void 0)F=p.__d,p.__d=void 0;else if(b==null||L!=A||L.parentNode==null)e:if(A==null||A.parentNode!==u)u.appendChild(L),F=null;else{for(ne=A,de=0;(ne=ne.nextSibling)&&de<O.length;de+=1)if(ne==L)break e;u.insertBefore(L,A),F=A}return F!==void 0?F:L.nextSibling}function fe(u){var p,b,O;if(u.type==null||typeof u.type=="string")return u.__e;if(u.__k){for(p=u.__k.length-1;p>=0;p--)if((b=u.__k[p])&&(O=fe(b)))return O}return null}function Ee(u,p,b){p[0]==="-"?u.setProperty(p,b==null?"":b):u[p]=b==null?"":typeof b!="number"||x.test(p)?b:b+"px"}function ie(u,p,b,O,L){var A;e:if(p==="style")if(typeof b=="string")u.style.cssText=b;else{if(typeof O=="string"&&(u.style.cssText=O=""),O)for(p in O)b&&p in b||Ee(u.style,p,"");if(b)for(p in b)O&&b[p]===O[p]||Ee(u.style,p,b[p])}else if(p[0]==="o"&&p[1]==="n")A=p!==(p=p.replace(/Capture$/,"")),p=p.toLowerCase()in u?p.toLowerCase().slice(2):p.slice(2),u.l||(u.l={}),u.l[p+A]=b,b?O||u.addEventListener(p,A?T:pe,A):u.removeEventListener(p,A?T:pe,A);else if(p!=="dangerouslySetInnerHTML"){if(L)p=p.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(p!=="width"&&p!=="height"&&p!=="href"&&p!=="list"&&p!=="form"&&p!=="tabIndex"&&p!=="download"&&p in u)try{u[p]=b==null?"":b;break e}catch(F){}typeof b=="function"||(b==null||b===!1&&p.indexOf("-")==-1?u.removeAttribute(p):u.setAttribute(p,b))}}function pe(u){return this.l[u.type+!1](r.event?r.event(u):u)}function T(u){return this.l[u.type+!0](r.event?r.event(u):u)}function me(u,p,b,O,L,A,F,ne,de){var ge,y,we,Z,z,Y,lt,se,be,je,ht,ve,po,Ht,Bt,Fe=p.type;if(p.constructor!==void 0)return null;b.__h!=null&&(de=b.__h,ne=p.__e=b.__e,p.__h=null,A=[ne]),(ge=r.__b)&&ge(p);try{e:if(typeof Fe=="function"){if(se=p.props,be=(ge=Fe.contextType)&&O[ge.__c],je=ge?be?be.props.value:ge.__:O,b.__c?lt=(y=p.__c=b.__c).__=y.__E:("prototype"in Fe&&Fe.prototype.render?p.__c=y=new Fe(se,je):(p.__c=y=new W(se,je),y.constructor=Fe,y.render=qe),be&&be.sub(y),y.props=se,y.state||(y.state={}),y.context=je,y.__n=O,we=y.__d=!0,y.__h=[],y._sb=[]),y.__s==null&&(y.__s=y.state),Fe.getDerivedStateFromProps!=null&&(y.__s==y.state&&(y.__s=_({},y.__s)),_(y.__s,Fe.getDerivedStateFromProps(se,y.__s))),Z=y.props,z=y.state,y.__v=p,we)Fe.getDerivedStateFromProps==null&&y.componentWillMount!=null&&y.componentWillMount(),y.componentDidMount!=null&&y.__h.push(y.componentDidMount);else{if(Fe.getDerivedStateFromProps==null&&se!==Z&&y.componentWillReceiveProps!=null&&y.componentWillReceiveProps(se,je),!y.__e&&y.shouldComponentUpdate!=null&&y.shouldComponentUpdate(se,y.__s,je)===!1||p.__v===b.__v){for(p.__v!==b.__v&&(y.props=se,y.state=y.__s,y.__d=!1),y.__e=!1,p.__e=b.__e,p.__k=b.__k,p.__k.forEach(function(qt){qt&&(qt.__=p)}),ht=0;ht<y._sb.length;ht++)y.__h.push(y._sb[ht]);y._sb=[],y.__h.length&&F.push(y);break e}y.componentWillUpdate!=null&&y.componentWillUpdate(se,y.__s,je),y.componentDidUpdate!=null&&y.__h.push(function(){y.componentDidUpdate(Z,z,Y)})}if(y.context=je,y.props=se,y.__P=u,ve=r.__r,po=0,"prototype"in Fe&&Fe.prototype.render){for(y.state=y.__s,y.__d=!1,ve&&ve(p),ge=y.render(y.props,y.state,y.context),Ht=0;Ht<y._sb.length;Ht++)y.__h.push(y._sb[Ht]);y._sb=[]}else do y.__d=!1,ve&&ve(p),ge=y.render(y.props,y.state,y.context),y.state=y.__s;while(y.__d&&++po<25);y.state=y.__s,y.getChildContext!=null&&(O=_(_({},O),y.getChildContext())),we||y.getSnapshotBeforeUpdate==null||(Y=y.getSnapshotBeforeUpdate(Z,z)),Bt=ge!=null&&ge.type===D&&ge.key==null?ge.props.children:ge,te(u,Array.isArray(Bt)?Bt:[Bt],p,b,O,L,A,F,ne,de),y.base=p.__e,p.__h=null,y.__h.length&&F.push(y),lt&&(y.__E=y.__=null),y.__e=!1}else A==null&&p.__v===b.__v?(p.__k=b.__k,p.__e=b.__e):p.__e=S(b.__e,p,b,O,L,A,F,de);(ge=r.diffed)&&ge(p)}catch(qt){p.__v=null,(de||A!=null)&&(p.__e=ne,p.__h=!!de,A[A.indexOf(ne)]=null),r.__e(qt,p,b)}}function C(u,p){r.__c&&r.__c(p,u),u.some(function(b){try{u=b.__h,b.__h=[],u.some(function(O){O.call(b)})}catch(O){r.__e(O,b.__v)}})}function S(u,p,b,O,L,A,F,ne){var de,ge,y,we=b.props,Z=p.props,z=p.type,Y=0;if(z==="svg"&&(L=!0),A!=null){for(;Y<A.length;Y++)if((de=A[Y])&&"setAttribute"in de==!!z&&(z?de.localName===z:de.nodeType===3)){u=de,A[Y]=null;break}}if(u==null){if(z===null)return document.createTextNode(Z);u=L?document.createElementNS("http://www.w3.org/2000/svg",z):document.createElement(z,Z.is&&Z),A=null,ne=!1}if(z===null)we===Z||ne&&u.data===Z||(u.data=Z);else{if(A=A&&o.call(u.childNodes),ge=(we=b.props||g).dangerouslySetInnerHTML,y=Z.dangerouslySetInnerHTML,!ne){if(A!=null)for(we={},Y=0;Y<u.attributes.length;Y++)we[u.attributes[Y].name]=u.attributes[Y].value;(y||ge)&&(y&&(ge&&y.__html==ge.__html||y.__html===u.innerHTML)||(u.innerHTML=y&&y.__html||""))}if(function(lt,se,be,je,ht){var ve;for(ve in be)ve==="children"||ve==="key"||ve in se||ie(lt,ve,null,be[ve],je);for(ve in se)ht&&typeof se[ve]!="function"||ve==="children"||ve==="key"||ve==="value"||ve==="checked"||be[ve]===se[ve]||ie(lt,ve,se[ve],be[ve],je)}(u,Z,we,L,ne),y)p.__k=[];else if(Y=p.props.children,te(u,Array.isArray(Y)?Y:[Y],p,b,O,L&&z!=="foreignObject",A,F,A?A[0]:b.__k&&U(b,0),ne),A!=null)for(Y=A.length;Y--;)A[Y]!=null&&w(A[Y]);ne||("value"in Z&&(Y=Z.value)!==void 0&&(Y!==u.value||z==="progress"&&!Y||z==="option"&&Y!==we.value)&&ie(u,"value",Y,we.value,!1),"checked"in Z&&(Y=Z.checked)!==void 0&&Y!==u.checked&&ie(u,"checked",Y,we.checked,!1))}return u}function E(u,p,b){try{typeof u=="function"?u(p):u.current=p}catch(O){r.__e(O,b)}}function Q(u,p,b){var O,L;if(r.unmount&&r.unmount(u),(O=u.ref)&&(O.current&&O.current!==u.__e||E(O,null,p)),(O=u.__c)!=null){if(O.componentWillUnmount)try{O.componentWillUnmount()}catch(A){r.__e(A,p)}O.base=O.__P=null,u.__c=void 0}if(O=u.__k)for(L=0;L<O.length;L++)O[L]&&Q(O[L],p,b||typeof u.type!="function");b||u.__e==null||w(u.__e),u.__=u.__e=u.__d=void 0}function qe(u,p,b){return this.constructor(u,b)}function Ke(u,p,b){var O,L,A;r.__&&r.__(u,p),L=(O=typeof b=="function")?null:b&&b.__k||p.__k,A=[],me(p,u=(!O&&b||p).__k=P(D,null,[u]),L||g,g,p.ownerSVGElement!==void 0,!O&&b?[b]:L?null:p.firstChild?o.call(p.childNodes):null,A,!O&&b?b:L?L.__e:p.firstChild,O),C(A,u)}function yt(u,p){Ke(u,p,yt)}function Ge(u,p,b){var O,L,A,F=_({},u.props);for(A in p)A=="key"?O=p[A]:A=="ref"?L=p[A]:F[A]=p[A];return arguments.length>2&&(F.children=arguments.length>3?o.call(arguments,2):b),N(u.type,F,O||u.key,L||u.ref,null)}function Ve(u,p){var b={__c:p="__cC"+m++,__:u,Consumer:function(O,L){return O.children(L)},Provider:function(O){var L,A;return this.getChildContext||(L=[],(A={})[p]=this,this.getChildContext=function(){return A},this.shouldComponentUpdate=function(F){this.props.value!==F.value&&L.some(function(ne){ne.__e=!0,re(ne)})},this.sub=function(F){L.push(F);var ne=F.componentWillUnmount;F.componentWillUnmount=function(){L.splice(L.indexOf(F),1),ne&&ne.call(F)}}),O.children}};return b.Provider.__=b.Consumer.contextType=b}o=v.slice,r={__e:function(u,p,b,O){for(var L,A,F;p=p.__;)if((L=p.__c)&&!L.__)try{if((A=L.constructor)&&A.getDerivedStateFromError!=null&&(L.setState(A.getDerivedStateFromError(u)),F=L.__d),L.componentDidCatch!=null&&(L.componentDidCatch(u,O||{}),F=L.__d),F)return L.__E=L}catch(ne){u=ne}throw u}},i=0,s=function(u){return u!=null&&u.constructor===void 0},W.prototype.setState=function(u,p){var b;b=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=_({},this.state),typeof u=="function"&&(u=u(_({},b),this.props)),u&&_(b,u),u!=null&&this.__v&&(p&&this._sb.push(p),re(this))},W.prototype.forceUpdate=function(u){this.__v&&(this.__e=!0,u&&this.__h.push(u),re(this))},W.prototype.render=D,c=[],l=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,d=function(u,p){return u.__v.__b-p.__v.__b},oe.__r=0,m=0},78:(n,t,e)=>{e.r(t),e.d(t,{useCallback:()=>re,useContext:()=>oe,useDebugValue:()=>te,useEffect:()=>j,useErrorBoundary:()=>R,useId:()=>ue,useImperativeHandle:()=>U,useLayoutEffect:()=>D,useMemo:()=>M,useReducer:()=>N,useRef:()=>W,useState:()=>P});var o,r,i,s,c=e(616),h=0,l=[],d=[],m=c.options.__b,g=c.options.__r,v=c.options.diffed,x=c.options.__c,_=c.options.unmount;function w(C,S){c.options.__h&&c.options.__h(r,C,h||S),h=0;var E=r.__H||(r.__H={__:[],__h:[]});return C>=E.__.length&&E.__.push({__V:d}),E.__[C]}function P(C){return h=1,N(me,C)}function N(C,S,E){var Q=w(o++,2);if(Q.t=C,!Q.__c&&(Q.__=[E?E(S):me(void 0,S),function(Ge){var Ve=Q.__N?Q.__N[0]:Q.__[0],u=Q.t(Ve,Ge);Ve!==u&&(Q.__N=[u,Q.__[1]],Q.__c.setState({}))}],Q.__c=r,!r.u)){var qe=function(Ge,Ve,u){if(!Q.__c.__H)return!0;var p=Q.__c.__H.__.filter(function(O){return O.__c});if(p.every(function(O){return!O.__N}))return!Ke||Ke.call(this,Ge,Ve,u);var b=!1;return p.forEach(function(O){if(O.__N){var L=O.__[0];O.__=O.__N,O.__N=void 0,L!==O.__[0]&&(b=!0)}}),!(!b&&Q.__c.props===Ge)&&(!Ke||Ke.call(this,Ge,Ve,u))};r.u=!0;var Ke=r.shouldComponentUpdate,yt=r.componentWillUpdate;r.componentWillUpdate=function(Ge,Ve,u){if(this.__e){var p=Ke;Ke=void 0,qe(Ge,Ve,u),Ke=p}yt&&yt.call(this,Ge,Ve,u)},r.shouldComponentUpdate=qe}return Q.__N||Q.__}function j(C,S){var E=w(o++,3);!c.options.__s&&T(E.__H,S)&&(E.__=C,E.i=S,r.__H.__h.push(E))}function D(C,S){var E=w(o++,4);!c.options.__s&&T(E.__H,S)&&(E.__=C,E.i=S,r.__h.push(E))}function W(C){return h=5,M(function(){return{current:C}},[])}function U(C,S,E){h=6,D(function(){return typeof C=="function"?(C(S()),function(){return C(null)}):C?(C.current=S(),function(){return C.current=null}):void 0},E==null?E:E.concat(C))}function M(C,S){var E=w(o++,7);return T(E.__H,S)?(E.__V=C(),E.i=S,E.__h=C,E.__V):E.__}function re(C,S){return h=8,M(function(){return C},S)}function oe(C){var S=r.context[C.__c],E=w(o++,9);return E.c=C,S?(E.__==null&&(E.__=!0,S.sub(r)),S.props.value):C.__}function te(C,S){c.options.useDebugValue&&c.options.useDebugValue(S?S(C):C)}function R(C){var S=w(o++,10),E=P();return S.__=C,r.componentDidCatch||(r.componentDidCatch=function(Q,qe){S.__&&S.__(Q,qe),E[1](Q)}),[E[0],function(){E[1](void 0)}]}function ue(){var C=w(o++,11);if(!C.__){for(var S=r.__v;S!==null&&!S.__m&&S.__!==null;)S=S.__;var E=S.__m||(S.__m=[0,0]);C.__="P"+E[0]+"-"+E[1]++}return C.__}function Ce(){for(var C;C=l.shift();)if(C.__P&&C.__H)try{C.__H.__h.forEach(ie),C.__H.__h.forEach(pe),C.__H.__h=[]}catch(S){C.__H.__h=[],c.options.__e(S,C.__v)}}c.options.__b=function(C){r=null,m&&m(C)},c.options.__r=function(C){g&&g(C),o=0;var S=(r=C.__c).__H;S&&(i===r?(S.__h=[],r.__h=[],S.__.forEach(function(E){E.__N&&(E.__=E.__N),E.__V=d,E.__N=E.i=void 0})):(S.__h.forEach(ie),S.__h.forEach(pe),S.__h=[])),i=r},c.options.diffed=function(C){v&&v(C);var S=C.__c;S&&S.__H&&(S.__H.__h.length&&(l.push(S)!==1&&s===c.options.requestAnimationFrame||((s=c.options.requestAnimationFrame)||Ee)(Ce)),S.__H.__.forEach(function(E){E.i&&(E.__H=E.i),E.__V!==d&&(E.__=E.__V),E.i=void 0,E.__V=d})),i=r=null},c.options.__c=function(C,S){S.some(function(E){try{E.__h.forEach(ie),E.__h=E.__h.filter(function(Q){return!Q.__||pe(Q)})}catch(Q){S.some(function(qe){qe.__h&&(qe.__h=[])}),S=[],c.options.__e(Q,E.__v)}}),x&&x(C,S)},c.options.unmount=function(C){_&&_(C);var S,E=C.__c;E&&E.__H&&(E.__H.__.forEach(function(Q){try{ie(Q)}catch(qe){S=qe}}),E.__H=void 0,S&&c.options.__e(S,E.__v))};var fe=typeof requestAnimationFrame=="function";function Ee(C){var S,E=function(){clearTimeout(Q),fe&&cancelAnimationFrame(S),setTimeout(C)},Q=setTimeout(E,100);fe&&(S=requestAnimationFrame(E))}function ie(C){var S=r,E=C.__c;typeof E=="function"&&(C.__c=void 0,E()),r=S}function pe(C){var S=r;C.__c=C.__(),r=S}function T(C,S){return!C||C.length!==S.length||S.some(function(E,Q){return E!==C[Q]})}function me(C,S){return typeof S=="function"?S(C):S}},292:n=>{var t=[];function e(i){for(var s=-1,c=0;c<t.length;c++)if(t[c].identifier===i){s=c;break}return s}function o(i,s){for(var c={},h=[],l=0;l<i.length;l++){var d=i[l],m=s.base?d[0]+s.base:d[0],g=c[m]||0,v="".concat(m," ").concat(g);c[m]=g+1;var x=e(v),_={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(x!==-1)t[x].references++,t[x].updater(_);else{var w=r(_,s);s.byIndex=l,t.splice(l,0,{identifier:v,updater:w,references:1})}h.push(v)}return h}function r(i,s){var c=s.domAPI(s);return c.update(i),function(h){if(h){if(h.css===i.css&&h.media===i.media&&h.sourceMap===i.sourceMap&&h.supports===i.supports&&h.layer===i.layer)return;c.update(i=h)}else c.remove()}}n.exports=function(i,s){var c=o(i=i||[],s=s||{});return function(h){h=h||[];for(var l=0;l<c.length;l++){var d=e(c[l]);t[d].references--}for(var m=o(h,s),g=0;g<c.length;g++){var v=e(c[g]);t[v].references===0&&(t[v].updater(),t.splice(v,1))}c=m}}},88:n=>{n.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},884:(n,t,e)=>{n.exports=function(o){var r=e.nc;r&&o.setAttribute("nonce",r)}},360:n=>{var t,e=(t=[],function(i,s){return t[i]=s,t.filter(Boolean).join(`
`)});function o(i,s,c,h){var l;if(c)l="";else{l="",h.supports&&(l+="@supports (".concat(h.supports,") {")),h.media&&(l+="@media ".concat(h.media," {"));var d=h.layer!==void 0;d&&(l+="@layer".concat(h.layer.length>0?" ".concat(h.layer):""," {")),l+=h.css,d&&(l+="}"),h.media&&(l+="}"),h.supports&&(l+="}")}if(i.styleSheet)i.styleSheet.cssText=e(s,l);else{var m=document.createTextNode(l),g=i.childNodes;g[s]&&i.removeChild(g[s]),g.length?i.insertBefore(m,g[s]):i.appendChild(m)}}var r={singleton:null,singletonCounter:0};n.exports=function(i){if(typeof document=="undefined")return{update:function(){},remove:function(){}};var s=r.singletonCounter++,c=r.singleton||(r.singleton=i.insertStyleElement(i));return{update:function(h){o(c,s,!1,h)},remove:function(h){o(c,s,!0,h)}}}},6:(n,t,e)=>{e.d(t,{en:()=>o});let o={headlines:{error:"An error has occurred",loginEmail:"Sign in or create account",loginEmailNoSignup:"Sign in",loginFinished:"Login successful",loginPasscode:"Enter passcode",loginPassword:"Enter password",registerAuthenticator:"Create a passkey",registerConfirm:"Create account?",registerPassword:"Set new password",otpSetUp:"Set up authenticator app",profileEmails:"Emails",profilePassword:"Password",profilePasskeys:"Passkeys",isPrimaryEmail:"Primary email address",setPrimaryEmail:"Set primary email address",createEmail:"Enter a new email",createUsername:"Enter a new username",emailVerified:"Verified",emailUnverified:"Unverified",emailDelete:"Delete",renamePasskey:"Rename passkey",deletePasskey:"Delete passkey",lastUsedAt:"Last used at",createdAt:"Created at",connectedAccounts:"Connected accounts",deleteAccount:"Delete account",accountNotFound:"Account not found",signIn:"Sign in",signUp:"Create account",selectLoginMethod:"Select login method",setupLoginMethod:"Set up login method",lastUsed:"Last seen",ipAddress:"IP address",revokeSession:"Revoke session",profileSessions:"Sessions",mfaSetUp:"Set up MFA",securityKeySetUp:"Add security key",securityKeyLogin:"Security key",otpLogin:"Authentication code",renameSecurityKey:"Rename security key",deleteSecurityKey:"Delete security key",securityKeys:"Security keys",authenticatorApp:"Authenticator app",authenticatorAppAlreadySetUp:"Authenticator app is set up",authenticatorAppNotSetUp:"Set up authenticator app",trustDevice:"Trust this browser?"},texts:{enterPasscode:'Enter the passcode that was sent to "{emailAddress}".',enterPasscodeNoEmail:"Enter the passcode that was sent to your primary email address.",setupPasskey:"Sign in to your account easily and securely with a passkey. Note: Your biometric data is only stored on your devices and will never be shared with anyone.",createAccount:'No account exists for "{emailAddress}". Do you want to create a new account?',otpEnterVerificationCode:"Enter the one-time password (OTP) obtained from your authenticator app below:",otpScanQRCode:"Scan the QR code using your authenticator app (such as Google Authenticator or any other TOTP app). Alternatively, you can manually enter the OTP secret key into the app.",otpSecretKey:"OTP secret key",passwordFormatHint:"Must be between {minLength} and {maxLength} characters long.",securityKeySetUp:"Use a dedicated security key via USB, Bluetooth, or NFC, or your mobile phone. Connect or activate your security key, then click the button below and follow the prompts to complete the registration.",setPrimaryEmail:"Set this email address to be used for contacting you.",isPrimaryEmail:"This email address will be used to contact you if necessary.",emailVerified:"This email address has been verified.",emailUnverified:"This email address has not been verified.",emailDelete:"If you delete this email address, it can no longer be used to sign in.",renamePasskey:"Set a name for the passkey.",deletePasskey:"Delete this passkey from your account.",deleteAccount:"Are you sure you want to delete this account? All data will be deleted immediately and cannot be recovered.",noAccountExists:'No account exists for "{emailAddress}".',selectLoginMethodForFutureLogins:"Select one of the following login methods to use for future logins.",howDoYouWantToLogin:"How do you want to login?",mfaSetUp:"Protect your account with Multi-Factor Authentication (MFA). MFA adds an additional step to your login process, ensuring that even if your password or email account is compromised, your account stays secure.",securityKeyLogin:"Connect or activate your security key, then click the button below. Once ready, use it via USB, NFC, your mobile phone. Follow the prompts to complete the login process.",otpLogin:"Open your authenticator app to obtain the one-time password (OTP). Enter the code in the field below to complete your login.",renameSecurityKey:"Set a name for the security key.",deleteSecurityKey:"Delete this security key from your account.",authenticatorAppAlreadySetUp:"Your account is secured with an authenticator app that generates time-based one-time passwords (TOTP) for multi-factor authentication.",authenticatorAppNotSetUp:"Secure your account with an authenticator app that generates time-based one-time passwords (TOTP) for multi-factor authentication.",trustDevice:"If you trust this browser, you won\u2019t need to enter your OTP (One-Time-Password) or use your security key for multi-factor authentication (MFA) the next time you log in."},labels:{or:"or",no:"no",yes:"yes",email:"Email",continue:"Continue",copied:"copied",skip:"Skip",save:"Save",password:"Password",passkey:"Passkey",passcode:"Passcode",signInPassword:"Sign in with a password",signInPasscode:"Sign in with a passcode",forgotYourPassword:"Forgot your password?",back:"Back",signInPasskey:"Sign in with a passkey",registerAuthenticator:"Create a passkey",signIn:"Sign in",signUp:"Create account",sendNewPasscode:"Send new code",passwordRetryAfter:"Retry in {passwordRetryAfter}",passcodeResendAfter:"Request a new code in {passcodeResendAfter}",unverifiedEmail:"unverified",primaryEmail:"primary",setAsPrimaryEmail:"Set as primary",verify:"Verify",delete:"Delete",newEmailAddress:"New email address",newPassword:"New password",rename:"Rename",newPasskeyName:"New passkey name",addEmail:"Add email",createPasskey:"Create a passkey",webauthnUnsupported:"Passkeys are not supported by your browser",signInWith:"Sign in with {provider}",deleteAccount:"Yes, delete this account.",emailOrUsername:"Email or username",username:"Username",optional:"optional",dontHaveAnAccount:"Don't have an account?",alreadyHaveAnAccount:"Already have an account?",changeUsername:"Change username",setUsername:"Set username",changePassword:"Change password",setPassword:"Set password",revoke:"Revoke",currentSession:"Current session",authenticatorApp:"Authenticator app",securityKey:"Security key",securityKeyUse:"Use security key",newSecurityKeyName:"New security key name",createSecurityKey:"Add a security key",authenticatorAppManage:"Manage authenticator app",authenticatorAppAdd:"Set up",configured:"configured",useAnotherMethod:"Use another method",lastUsed:"Last used",trustDevice:"Trust this browser",staySignedIn:"Stay signed in"},errors:{somethingWentWrong:"A technical error has occurred. Please try again later.",requestTimeout:"The request timed out.",invalidPassword:"Wrong email or password.",invalidPasscode:"The passcode provided was not correct.",passcodeAttemptsReached:"The passcode was entered incorrectly too many times. Please request a new code.",tooManyRequests:"Too many requests have been made. Please wait to repeat the requested operation.",unauthorized:"Your session has expired. Please log in again.",invalidWebauthnCredential:"This passkey cannot be used anymore.",passcodeExpired:"The passcode has expired. Please request a new one.",userVerification:"User verification required. Please ensure your authenticator device is protected with a PIN or biometric.",emailAddressAlreadyExistsError:"The email address already exists.",maxNumOfEmailAddressesReached:"No further email addresses can be added.",thirdPartyAccessDenied:"Access denied. The request was cancelled by the user or the provider has denied access for other reasons.",thirdPartyMultipleAccounts:"Cannot identify account. The email address is used by multiple accounts.",thirdPartyUnverifiedEmail:"Email verification required. Please verify the used email address with your provider.",signupDisabled:"Account registration is disabled.",handlerNotFoundError:"The current step in your process is not supported by this application version. Please try again later or contact support if the issue persists."},flowErrors:{technical_error:"A technical error has occurred. Please try again later.",flow_expired_error:"The session has expired, please click the button to restart.",value_invalid_error:"The entered value is invalid.",passcode_invalid:"The passcode provided was not correct.",passkey_invalid:"This passkey cannot be used anymore",passcode_max_attempts_reached:"The passcode was entered incorrectly too many times. Please request a new code.",rate_limit_exceeded:"Too many requests have been made. Please wait to repeat the requested operation.",unknown_username_error:"The username is unknown.",unknown_email_error:"The email address is unknown.",username_already_exists:"The username is already taken.",invalid_username_error:"The username must contain only letters, numbers, and underscores.",email_already_exists:"The email is already taken.",not_found:"The requested resource was not found.",operation_not_permitted_error:"The operation is not permitted.",flow_discontinuity_error:"The process cannot be continued due to user settings or the provider's configuration.",form_data_invalid_error:"The submitted form data contains errors.",unauthorized:"Your session has expired. Please log in again.",value_missing_error:"The value is missing.",value_too_long_error:"Value is too long.",value_too_short_error:"The value is too short.",webauthn_credential_invalid_mfa_only:"This credential can be used as a second factor security key only.",webauthn_credential_already_exists:"The request either timed out, was canceled or the device is already registered. Please try again or try using another device.",platform_authenticator_required:"Your account is configured to use platform authenticators, but your current device or browser does not support this feature. Please try again with a compatible device or browser.",third_party_access_denied:"Access denied. The request was cancelled by the user or the provider has denied access for other reasons."}}}},wo={};function G(n){var t=wo[n];if(t!==void 0)return t.exports;var e=wo[n]={id:n,exports:{}};return qa[n].call(e.exports,e,e.exports,G),e.exports}G.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return G.d(t,{a:t}),t},G.d=(n,t)=>{for(var e in t)G.o(t,e)&&!G.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},G.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),G.r=n=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},G.nc=void 0;var J={};G.d(J,{rc:()=>Nt,Kj:()=>Lt,fK:()=>Ln,tJ:()=>vn,Z7:()=>Kn,qQ:()=>qn,I4:()=>xn,O8:()=>ke,Qq:()=>Dt,ku:()=>Un,ls:()=>Nn,bO:()=>zn,yv:()=>$n,AT:()=>Fn,m_:()=>Hn,KG:()=>Wn,Wj:()=>_n,DH:()=>yn,kf:()=>Mt,Uw:()=>gt,oY:()=>ot,Wg:()=>Gn,AC:()=>Bn,D_:()=>jt,jx:()=>kn,nX:()=>Rn,Nx:()=>Mn,Sd:()=>ct,kz:()=>_i,fX:()=>oo,qA:()=>ao,tz:()=>io,gN:()=>ro});var jn={};G.r(jn),G.d(jn,{apple:()=>gr,checkmark:()=>br,copy:()=>yr,customProvider:()=>wr,discord:()=>_r,exclamation:()=>kr,facebook:()=>xr,github:()=>Sr,google:()=>Cr,linkedin:()=>Or,mail:()=>Ar,microsoft:()=>Er,passkey:()=>Ir,password:()=>Tr,qrCodeScanner:()=>Pr,securityKey:()=>jr,spinner:()=>Dr});var k=G(616),Ra=0;function a(n,t,e,o,r,i){var s,c,h={};for(c in t)c=="ref"?s=t[c]:h[c]=t[c];var l={type:n,props:h,key:e,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ra,__source:r,__self:i};if(typeof n=="function"&&(s=n.defaultProps))for(c in s)h[c]===void 0&&(h[c]=s[c]);return k.options.vnode&&k.options.vnode(l),l}function mn(){return mn=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},mn.apply(this,arguments)}var $a=["context","children"];function Ka(n){this.getChildContext=function(){return n.context};var t=n.children,e=function(o,r){if(o==null)return{};var i,s,c={},h=Object.keys(o);for(s=0;s<h.length;s++)r.indexOf(i=h[s])>=0||(c[i]=o[i]);return c}(n,$a);return(0,k.cloneElement)(t,e)}function Ga(){var n=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(n),this._vdom=(0,k.h)(Ka,mn({},this._props,{context:n.detail.context}),Qo(this,this._vdomComponent)),(this.hasAttribute("hydrate")?k.hydrate:k.render)(this._vdom,this._root)}function Jo(n){return n.replace(/-(\w)/g,function(t,e){return e?e.toUpperCase():""})}function Va(n,t,e){if(this._vdom){var o={};o[n]=e=e==null?void 0:e,o[Jo(n)]=e,this._vdom=(0,k.cloneElement)(this._vdom,o),(0,k.render)(this._vdom,this._root)}}function Za(){(0,k.render)(this._vdom=null,this._root)}function _o(n,t){var e=this;return(0,k.h)("slot",mn({},n,{ref:function(o){o?(e.ref=o,e._listener||(e._listener=function(r){r.stopPropagation(),r.detail.context=t},o.addEventListener("_preact",e._listener))):e.ref.removeEventListener("_preact",e._listener)}}))}function Qo(n,t){if(n.nodeType===3)return n.data;if(n.nodeType!==1)return null;var e=[],o={},r=0,i=n.attributes,s=n.childNodes;for(r=i.length;r--;)i[r].name!=="slot"&&(o[i[r].name]=i[r].value,o[Jo(i[r].name)]=i[r].value);for(r=s.length;r--;){var c=Qo(s[r],null),h=s[r].slot;h?o[h]=(0,k.h)(_o,{name:h},c):e[r]=c}var l=t?(0,k.h)(_o,null,e):e;return(0,k.h)(t||n.nodeName.toLowerCase(),o,l)}var q=G(7),f=G(78);function Xo(n,t){for(var e in t)n[e]=t[e];return n}function ko(n,t){for(var e in n)if(e!=="__source"&&!(e in t))return!0;for(var o in t)if(o!=="__source"&&n[o]!==t[o])return!0;return!1}function xo(n){this.props=n}(xo.prototype=new k.Component).isPureReactComponent=!0,xo.prototype.shouldComponentUpdate=function(n,t){return ko(this.props,n)||ko(this.state,t)};var So=k.options.__b;k.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),So&&So(n)};var Ya=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911,Ja=(k.toChildArray,k.options.__e);k.options.__e=function(n,t,e,o){if(n.then){for(var r,i=t;i=i.__;)if((r=i.__c)&&r.__c)return t.__e==null&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t)}Ja(n,t,e,o)};var Co=k.options.unmount;function ea(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),n.__c.__H=null),(n=Xo({},n)).__c!=null&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(o){return ea(o,t,e)})),n}function ta(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(o){return ta(o,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function In(){this.__u=0,this.t=null,this.__b=null}function na(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function Jt(){this.u=null,this.o=null}k.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&n.__h===!0&&(n.type=null),Co&&Co(n)},(In.prototype=new k.Component).__c=function(n,t){var e=t.__c,o=this;o.t==null&&(o.t=[]),o.t.push(e);var r=na(o.__v),i=!1,s=function(){i||(i=!0,e.__R=null,r?r(c):c())};e.__R=s;var c=function(){if(!--o.__u){if(o.state.__a){var l=o.state.__a;o.__v.__k[0]=ta(l,l.__c.__P,l.__c.__O)}var d;for(o.setState({__a:o.__b=null});d=o.t.pop();)d.forceUpdate()}},h=t.__h===!0;o.__u++||h||o.setState({__a:o.__b=o.__v.__k[0]}),n.then(s,s)},In.prototype.componentWillUnmount=function(){this.t=[]},In.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=ea(this.__b,e,o.__O=o.__P)}this.__b=null}var r=t.__a&&(0,k.createElement)(k.Fragment,null,n.fallback);return r&&(r.__h=null),[(0,k.createElement)(k.Fragment,null,t.__a?null:n.children),r]};var Oo=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};(Jt.prototype=new k.Component).__a=function(n){var t=this,e=na(t.__v),o=t.o.get(n);return o[0]++,function(r){var i=function(){t.props.revealOrder?(o.push(r),Oo(t,n,o)):r()};e?e(i):i()}},Jt.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,k.toChildArray)(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},Jt.prototype.componentDidUpdate=Jt.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){Oo(n,e,t)})};var Qa=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,Xa=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,er=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,tr=/[A-Z0-9]/g,nr=typeof document!="undefined",or=function(n){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};k.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(k.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var Ao=k.options.event;function ar(){}function rr(){return this.cancelBubble}function ir(){return this.defaultPrevented}k.options.event=function(n){return Ao&&(n=Ao(n)),n.persist=ar,n.isPropagationStopped=rr,n.isDefaultPrevented=ir,n.nativeEvent=n};var Eo={configurable:!0,get:function(){return this.class}},Io=k.options.vnode;k.options.vnode=function(n){var t=n.type,e=n.props,o=e;if(typeof t=="string"){for(var r in o={},e){var i=e[r];if(!(r==="value"&&"defaultValue"in e&&i==null||nr&&r==="children"&&t==="noscript")){var s=r.toLowerCase();r==="defaultValue"&&"value"in e&&e.value==null?r="value":r==="download"&&i===!0?i="":s==="ondoubleclick"?r="ondblclick":s!=="onchange"||t!=="input"&&t!=="textarea"||or(e.type)?s==="onfocus"?r="onfocusin":s==="onblur"?r="onfocusout":er.test(r)?r=s:t.indexOf("-")===-1&&Xa.test(r)?r=r.replace(tr,"-$&").toLowerCase():i===null&&(i=void 0):s=r="oninput",s==="oninput"&&o[r=s]&&(r="oninputCapture"),o[r]=i}}t=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=(0,k.toChildArray)(e.children).forEach(function(c){c.props.selected=o.value.indexOf(c.props.value)!=-1})),t=="select"&&o.defaultValue!=null&&(o.value=(0,k.toChildArray)(e.children).forEach(function(c){c.props.selected=o.multiple?o.defaultValue.indexOf(c.props.value)!=-1:o.defaultValue==c.props.value})),n.props=o,e.class!=e.className&&(Eo.enumerable="className"in e,e.className!=null&&(o.class=e.className),Object.defineProperty(o,"className",Eo))}n.$$typeof=Qa,Io&&Io(n)};var To=k.options.__r;k.options.__r=function(n){To&&To(n),n.__c};var Po=k.options.diffed;function Be(){return Be=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},Be.apply(this,arguments)}k.options.diffed=function(n){Po&&Po(n);var t=n.props,e=n.__e;e!=null&&n.type==="textarea"&&"value"in t&&t.value!==e.value&&(e.value=t.value==null?"":t.value)},k.Fragment,f.useLayoutEffect,f.useState,f.useId,f.useReducer,f.useEffect,f.useLayoutEffect,f.useRef,f.useImperativeHandle,f.useMemo,f.useCallback,f.useContext,f.useDebugValue,k.createElement,k.createContext,k.createRef,k.Fragment,k.Component;var Dn=class{static throttle(t,e,o={}){let{leading:r=!0,trailing:i=!0}=o,s,c,h,l=0,d=()=>{l=r===!1?0:Date.now(),h=null,t.apply(s,c)};return function(...m){let g=Date.now();l||r!==!1||(l=g);let v=e-(g-l);s=this,c=m,v<=0||v>e?(h&&(window.clearTimeout(h),h=null),l=g,t.apply(s,c)):h||i===!1||(h=window.setTimeout(d,v))}}},oo="hanko-session-created",ao="hanko-session-expired",ro="hanko-user-logged-out",io="hanko-user-deleted",oa="hanko-after-state-change",aa="hanko-before-state-change",vn=class extends CustomEvent{constructor(t,e){super(t,{detail:e})}},gn=class n{constructor(){this.throttleLimit=1e3,this._addEventListener=document.addEventListener.bind(document),this._removeEventListener=document.removeEventListener.bind(document),this._throttle=Dn.throttle}wrapCallback(t,e){let o=r=>{t(r.detail)};return e?this._throttle(o,this.throttleLimit,{leading:!0,trailing:!1}):o}addEventListenerWithType({type:t,callback:e,once:o=!1,throttle:r=!1}){let i=this.wrapCallback(e,r);return this._addEventListener(t,i,{once:o}),()=>this._removeEventListener(t,i)}static mapAddEventListenerParams(t,{once:e,callback:o},r){return{type:t,callback:o,once:e,throttle:r}}addEventListener(t,e,o){return this.addEventListenerWithType(n.mapAddEventListenerParams(t,e,o))}onSessionCreated(t,e){return this.addEventListener(oo,{callback:t,once:e},!0)}onSessionExpired(t,e){return this.addEventListener(ao,{callback:t,once:e},!0)}onUserLoggedOut(t,e){return this.addEventListener(ro,{callback:t,once:e})}onUserDeleted(t,e){return this.addEventListener(io,{callback:t,once:e})}onAfterStateChange(t,e){return this.addEventListener(oa,{callback:t,once:e},!1)}onBeforeStateChange(t,e){return this.addEventListener(aa,{callback:t,once:e},!1)}},bn=class{constructor(){this._dispatchEvent=document.dispatchEvent.bind(document)}dispatch(t,e){this._dispatchEvent(new vn(t,e))}dispatchSessionCreatedEvent(t){this.dispatch(oo,t)}dispatchSessionExpiredEvent(){this.dispatch(ao,null)}dispatchUserLoggedOutEvent(){this.dispatch(ro,null)}dispatchUserDeletedEvent(){this.dispatch(io,null)}dispatchAfterStateChangeEvent(t){this.dispatch(oa,t)}dispatchBeforeStateChangeEvent(t){this.dispatch(aa,t)}},ke=class n extends Error{constructor(t,e,o){super(t),this.code=void 0,this.cause=void 0,this.code=e,this.cause=o,Object.setPrototypeOf(this,n.prototype)}},ot=class n extends ke{constructor(t){super("Technical error","somethingWentWrong",t),Object.setPrototypeOf(this,n.prototype)}},Ln=class n extends ke{constructor(t,e){super("Conflict error","conflict",e),Object.setPrototypeOf(this,n.prototype)}},yn=class n extends ke{constructor(t){super("Request timed out error","requestTimeout",t),Object.setPrototypeOf(this,n.prototype)}},Mn=class n extends ke{constructor(t){super("Request cancelled error","requestCancelled",t),Object.setPrototypeOf(this,n.prototype)}},Nn=class n extends ke{constructor(t){super("Invalid password error","invalidPassword",t),Object.setPrototypeOf(this,n.prototype)}},Un=class n extends ke{constructor(t){super("Invalid Passcode error","invalidPasscode",t),Object.setPrototypeOf(this,n.prototype)}},zn=class n extends ke{constructor(t){super("Invalid WebAuthn credential error","invalidWebauthnCredential",t),Object.setPrototypeOf(this,n.prototype)}},Wn=class n extends ke{constructor(t){super("Passcode expired error","passcodeExpired",t),Object.setPrototypeOf(this,n.prototype)}},Fn=class n extends ke{constructor(t){super("Maximum number of Passcode attempts reached error","passcodeAttemptsReached",t),Object.setPrototypeOf(this,n.prototype)}},Hn=class n extends ke{constructor(t){super("Not found error","notFound",t),Object.setPrototypeOf(this,n.prototype)}},Bn=class n extends ke{constructor(t,e){super("Too many requests error","tooManyRequests",e),this.retryAfter=void 0,this.retryAfter=t,Object.setPrototypeOf(this,n.prototype)}},jt=class n extends ke{constructor(t){super("Unauthorized error","unauthorized",t),Object.setPrototypeOf(this,n.prototype)}},qn=class n extends ke{constructor(t){super("Forbidden error","forbidden",t),Object.setPrototypeOf(this,n.prototype)}},Rn=class n extends ke{constructor(t){super("User verification error","userVerification",t),Object.setPrototypeOf(this,n.prototype)}},$n=class n extends ke{constructor(t){super("Maximum number of email addresses reached error","maxNumOfEmailAddressesReached",t),Object.setPrototypeOf(this,n.prototype)}},Kn=class n extends ke{constructor(t){super("The email address already exists","emailAddressAlreadyExistsError",t),Object.setPrototypeOf(this,n.prototype)}},Gn=class n extends ke{constructor(t,e){super("An error occurred during third party sign up/sign in",t,e),Object.setPrototypeOf(this,n.prototype)}};function Qt(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)n[o]=e[o]}return n}var Tn=function n(t,e){function o(r,i,s){if(typeof document!="undefined"){typeof(s=Qt({},e,s)).expires=="number"&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var h in s)s[h]&&(c+="; "+h,s[h]!==!0&&(c+="="+s[h].split(";")[0]));return document.cookie=r+"="+t.write(i,r)+c}}return Object.create({set:o,get:function(r){if(typeof document!="undefined"&&(!arguments.length||r)){for(var i=document.cookie?document.cookie.split("; "):[],s={},c=0;c<i.length;c++){var h=i[c].split("="),l=h.slice(1).join("=");try{var d=decodeURIComponent(h[0]);if(s[d]=t.read(l,d),r===d)break}catch(m){}}return r?s[r]:s}},remove:function(r,i){o(r,"",Qt({},i,{expires:-1}))},withAttributes:function(r){return n(this.converter,Qt({},this.attributes,r))},withConverter:function(r){return n(Qt({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(t)}})}({read:function(n){return n[0]==='"'&&(n=n.slice(1,-1)),n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(n){return encodeURIComponent(n).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),wn=class{constructor(t){var e,o;this.authCookieName=void 0,this.authCookieDomain=void 0,this.authCookieSameSite=void 0,this.authCookieName=(e=t.cookieName)!=null?e:"hanko",this.authCookieDomain=t.cookieDomain,this.authCookieSameSite=(o=t.cookieSameSite)!=null?o:"lax"}getAuthCookie(){return Tn.get(this.authCookieName)}setAuthCookie(t,e){let o={secure:!0,sameSite:this.authCookieSameSite};this.authCookieDomain!==void 0&&(o.domain=this.authCookieDomain);let r=Be({},o,e);if((r.sameSite==="none"||r.sameSite==="None")&&r.secure===!1)throw new ot(new Error("Secure attribute must be set when SameSite=None"));Tn.set(this.authCookieName,t,r)}removeAuthCookie(){Tn.remove(this.authCookieName)}},Vn=class{constructor(t){this.keyName=void 0,this.keyName=t.keyName}getSessionToken(){return sessionStorage.getItem(this.keyName)}setSessionToken(t){sessionStorage.setItem(this.keyName,t)}removeSessionToken(){sessionStorage.removeItem(this.keyName)}},Zn=class{constructor(t){this._xhr=void 0,this._xhr=t}getResponseHeader(t){return this._xhr.getResponseHeader(t)}},Yn=class{constructor(t){this.headers=void 0,this.ok=void 0,this.status=void 0,this.statusText=void 0,this.url=void 0,this._decodedJSON=void 0,this.xhr=void 0,this.headers=new Zn(t),this.ok=t.status>=200&&t.status<=299,this.status=t.status,this.statusText=t.statusText,this.url=t.responseURL,this.xhr=t}json(){return this._decodedJSON||(this._decodedJSON=JSON.parse(this.xhr.response)),this._decodedJSON}parseNumericHeader(t){let e=parseInt(this.headers.getResponseHeader(t),10);return isNaN(e)?0:e}},Dt=class{constructor(t,e){var o;this.timeout=void 0,this.api=void 0,this.dispatcher=void 0,this.cookie=void 0,this.sessionTokenStorage=void 0,this.lang=void 0,this.sessionTokenLocation=void 0,this.api=t,this.timeout=(o=e.timeout)!=null?o:13e3,this.dispatcher=new bn,this.cookie=new wn(Be({},e)),this.sessionTokenStorage=new Vn({keyName:e.cookieName}),this.lang=e.lang,this.sessionTokenLocation=e.sessionTokenLocation}_fetch(t,e,o=new XMLHttpRequest){let r=this,i=this.api+t,s=this.timeout,c=this.getAuthToken(),h=this.lang;return new Promise(function(l,d){o.open(e.method,i,!0),o.setRequestHeader("Accept","application/json"),o.setRequestHeader("Content-Type","application/json"),o.setRequestHeader("X-Language",h),c&&o.setRequestHeader("Authorization",`Bearer ${c}`),o.timeout=s,o.withCredentials=!0,o.onload=()=>{r.processHeaders(o),l(new Yn(o))},o.onerror=()=>{d(new ot)},o.ontimeout=()=>{d(new yn)},o.send(e.body?e.body.toString():null)})}processHeaders(t){let e="",o=0,r="";if(t.getAllResponseHeaders().split(`\r
`).forEach(i=>{let s=i.toLowerCase();s.startsWith("x-auth-token")?e=t.getResponseHeader("X-Auth-Token"):s.startsWith("x-session-lifetime")?o=parseInt(t.getResponseHeader("X-Session-Lifetime"),10):s.startsWith("x-session-retention")&&(r=t.getResponseHeader("X-Session-Retention"))}),e){let i=new RegExp("^https://"),s=!!this.api.match(i)&&!!window.location.href.match(i),c=r==="session"?void 0:new Date(new Date().getTime()+1e3*o);this.setAuthToken(e,{secure:s,expires:c})}}get(t){return this._fetch(t,{method:"GET"})}post(t,e){return this._fetch(t,{method:"POST",body:JSON.stringify(e)})}put(t,e){return this._fetch(t,{method:"PUT",body:JSON.stringify(e)})}patch(t,e){return this._fetch(t,{method:"PATCH",body:JSON.stringify(e)})}delete(t){return this._fetch(t,{method:"DELETE"})}getAuthToken(){let t="";switch(this.sessionTokenLocation){case"cookie":default:t=this.cookie.getAuthCookie();break;case"sessionStorage":t=this.sessionTokenStorage.getSessionToken()}return t}setAuthToken(t,e){switch(this.sessionTokenLocation){case"cookie":default:return this.cookie.setAuthCookie(t,e);case"sessionStorage":return this.sessionTokenStorage.setSessionToken(t)}}},Lt=class{constructor(t,e){this.client=void 0,this.client=new Dt(t,e)}},Mt=class extends Lt{async validate(){let t=await this.client.get("/sessions/validate");if(!t.ok)throw new ot;return await t.json()}},Jn=class{constructor(t){this.storageKey=void 0,this.defaultState={expiration:0,lastCheck:0},this.storageKey=t}load(){let t=window.localStorage.getItem(this.storageKey);return t==null?this.defaultState:JSON.parse(t)}save(t){window.localStorage.setItem(this.storageKey,JSON.stringify(t||this.defaultState))}},Qn=class{constructor(t,e){this.onActivityCallback=void 0,this.onInactivityCallback=void 0,this.handleFocus=()=>{this.onActivityCallback()},this.handleBlur=()=>{this.onInactivityCallback()},this.handleVisibilityChange=()=>{document.visibilityState==="visible"?this.onActivityCallback():this.onInactivityCallback()},this.hasFocus=()=>document.hasFocus(),this.onActivityCallback=t,this.onInactivityCallback=e,window.addEventListener("focus",this.handleFocus),window.addEventListener("blur",this.handleBlur),document.addEventListener("visibilitychange",this.handleVisibilityChange)}},Xn=class{constructor(t,e,o){this.intervalID=null,this.timeoutID=null,this.checkInterval=void 0,this.checkSession=void 0,this.onSessionExpired=void 0,this.checkInterval=t,this.checkSession=e,this.onSessionExpired=o}scheduleSessionExpiry(t){var e=this;this.stop(),this.timeoutID=setTimeout(async function(){e.stop(),e.onSessionExpired()},t)}start(t=0,e=0){var o=this;let r=this.calcTimeToNextCheck(t);this.sessionExpiresSoon(e)?this.scheduleSessionExpiry(r):this.timeoutID=setTimeout(async function(){let i=await o.checkSession();if(i.is_valid){if(o.sessionExpiresSoon(i.expiration))return void o.scheduleSessionExpiry(i.expiration-Date.now());o.intervalID=setInterval(async function(){i=await o.checkSession(),i.is_valid?o.sessionExpiresSoon(i.expiration)&&o.scheduleSessionExpiry(i.expiration-Date.now()):o.stop()},o.checkInterval)}else o.stop()},r)}stop(){this.timeoutID&&(clearTimeout(this.timeoutID),this.timeoutID=null),this.intervalID&&(clearInterval(this.intervalID),this.intervalID=null)}isRunning(){return this.timeoutID!==null||this.intervalID!==null}sessionExpiresSoon(t){return t>0&&t-Date.now()<=this.checkInterval}calcTimeToNextCheck(t){let e=Date.now()-t;return this.checkInterval>=e?this.checkInterval-e%this.checkInterval:0}},eo=class{constructor(t="hanko_session",e,o,r){this.channel=void 0,this.onSessionExpired=void 0,this.onSessionCreated=void 0,this.onLeadershipRequested=void 0,this.handleMessage=i=>{let s=i.data;switch(s.action){case"sessionExpired":this.onSessionExpired(s);break;case"sessionCreated":this.onSessionCreated(s);break;case"requestLeadership":this.onLeadershipRequested(s)}},this.onSessionExpired=e,this.onSessionCreated=o,this.onLeadershipRequested=r,this.channel=new BroadcastChannel(t),this.channel.onmessage=this.handleMessage}post(t){this.channel.postMessage(t)}},_n=class extends bn{constructor(t,e){super(),this.listener=new gn,this.checkInterval=3e4,this.client=void 0,this.sessionState=void 0,this.windowActivityManager=void 0,this.scheduler=void 0,this.sessionChannel=void 0,this.isLoggedIn=void 0,this.client=new Mt(t,e),e.sessionCheckInterval&&(this.checkInterval=e.sessionCheckInterval<3e3?3e3:e.sessionCheckInterval),this.sessionState=new Jn(`${e.cookieName}_session_state`),this.sessionChannel=new eo(this.getSessionCheckChannelName(e.sessionTokenLocation,e.sessionCheckChannelName),()=>this.onChannelSessionExpired(),i=>this.onChannelSessionCreated(i),()=>this.onChannelLeadershipRequested()),this.scheduler=new Xn(this.checkInterval,()=>this.checkSession(),()=>this.onSessionExpired()),this.windowActivityManager=new Qn(()=>this.startSessionCheck(),()=>this.scheduler.stop());let o=Date.now(),{expiration:r}=this.sessionState.load();this.isLoggedIn=o<r,this.initializeEventListeners(),this.startSessionCheck()}initializeEventListeners(){this.listener.onSessionCreated(t=>{let{claims:e}=t,o=Date.parse(e.expiration),r=Date.now();this.isLoggedIn=!0,this.sessionState.save({expiration:o,lastCheck:r}),this.sessionChannel.post({action:"sessionCreated",claims:e}),this.startSessionCheck()}),this.listener.onUserLoggedOut(()=>{this.isLoggedIn=!1,this.sessionChannel.post({action:"sessionExpired"}),this.sessionState.save(null),this.scheduler.stop()}),window.addEventListener("beforeunload",()=>this.scheduler.stop())}startSessionCheck(){if(!this.windowActivityManager.hasFocus()||(this.sessionChannel.post({action:"requestLeadership"}),this.scheduler.isRunning()))return;let{lastCheck:t,expiration:e}=this.sessionState.load();this.isLoggedIn&&this.scheduler.start(t,e)}async checkSession(){let t=Date.now(),{is_valid:e,claims:o,expiration_time:r}=await this.client.validate(),i=r?Date.parse(r):0;return!e&&this.isLoggedIn&&this.dispatchSessionExpiredEvent(),e?(this.isLoggedIn=!0,this.sessionState.save({lastCheck:t,expiration:i})):(this.isLoggedIn=!1,this.sessionState.save(null),this.sessionChannel.post({action:"sessionExpired"})),{is_valid:e,claims:o,expiration:i}}onSessionExpired(){this.isLoggedIn&&(this.isLoggedIn=!1,this.sessionState.save(null),this.sessionChannel.post({action:"sessionExpired"}),this.dispatchSessionExpiredEvent())}onChannelSessionExpired(){this.isLoggedIn&&(this.isLoggedIn=!1,this.dispatchSessionExpiredEvent())}onChannelSessionCreated(t){let{claims:e}=t,o=Date.now(),r=Date.parse(e.expiration)-o;this.isLoggedIn=!0,this.dispatchSessionCreatedEvent({claims:e,expirationSeconds:r})}onChannelLeadershipRequested(){this.windowActivityManager.hasFocus()||this.scheduler.stop()}getSessionCheckChannelName(t,e){if(t!=="sessionStorage")return e;let o=sessionStorage.getItem("sessionCheckChannelName");return o!=null&&o!==""||(o=`${e}-${Math.floor(100*Math.random())+1}`,sessionStorage.setItem("sessionCheckChannelName",o)),o}},ct=class{static supported(){return!!(navigator.credentials&&navigator.credentials.create&&navigator.credentials.get&&window.PublicKeyCredential)}static async isPlatformAuthenticatorAvailable(){return!(!this.supported()||!window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable)&&window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}static async isSecurityKeySupported(){return window.PublicKeyCredential!==void 0&&window.PublicKeyCredential.isExternalCTAP2SecurityKeySupported?window.PublicKeyCredential.isExternalCTAP2SecurityKeySupported():this.supported()}static async isConditionalMediationAvailable(){return!(!window.PublicKeyCredential||!window.PublicKeyCredential.isConditionalMediationAvailable)&&window.PublicKeyCredential.isConditionalMediationAvailable()}};function ra(n){let t="==".slice(0,(4-n.length%4)%4),e=n.replace(/-/g,"+").replace(/_/g,"/")+t,o=atob(e),r=new ArrayBuffer(o.length),i=new Uint8Array(r);for(let s=0;s<o.length;s++)i[s]=o.charCodeAt(s);return r}function ia(n){let t=new Uint8Array(n),e="";for(let o of t)e+=String.fromCharCode(o);return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}var ae="copy",We="convert";function vt(n,t,e){if(t===ae)return e;if(t===We)return n(e);if(t instanceof Array)return e.map(o=>vt(n,t[0],o));if(t instanceof Object){let o={};for(let[r,i]of Object.entries(t)){if(i.derive){let s=i.derive(e);s!==void 0&&(e[r]=s)}if(r in e)o[r]=e[r]!=null?vt(n,i.schema,e[r]):null;else if(i.required)throw new Error(`Missing key: ${r}`)}return o}}function to(n,t){return{required:!0,schema:n,derive:t}}function he(n){return{required:!0,schema:n}}function ye(n){return{required:!1,schema:n}}var sa={type:he(ae),id:he(We),transports:ye(ae)},la={appid:ye(ae),appidExclude:ye(ae),credProps:ye(ae)},ca={appid:ye(ae),appidExclude:ye(ae),credProps:ye(ae)},sr={publicKey:he({rp:he(ae),user:he({id:he(We),name:he(ae),displayName:he(ae)}),challenge:he(We),pubKeyCredParams:he(ae),timeout:ye(ae),excludeCredentials:ye([sa]),authenticatorSelection:ye(ae),attestation:ye(ae),extensions:ye(la)}),signal:ye(ae)},lr={type:he(ae),id:he(ae),rawId:he(We),authenticatorAttachment:ye(ae),response:he({clientDataJSON:he(We),attestationObject:he(We),transports:to(ae,n=>{var t;return((t=n.getTransports)==null?void 0:t.call(n))||[]})}),clientExtensionResults:to(ca,n=>n.getClientExtensionResults())},cr={mediation:ye(ae),publicKey:he({challenge:he(We),timeout:ye(ae),rpId:ye(ae),allowCredentials:ye([sa]),userVerification:ye(ae),extensions:ye(la)}),signal:ye(ae)},dr={type:he(ae),id:he(ae),rawId:he(We),authenticatorAttachment:ye(ae),response:he({clientDataJSON:he(We),authenticatorData:he(We),signature:he(We),userHandle:he(We)}),clientExtensionResults:to(ca,n=>n.getClientExtensionResults())};async function jo(n){let t=await navigator.credentials.get(function(e){return vt(ra,cr,e)}(n));return function(e){return vt(ia,dr,e)}(t)}var dt=class n{constructor(){this.abortController=new AbortController}static getInstance(){return n.instance||(n.instance=new n),n.instance}createAbortSignal(){return this.abortController.abort(),this.abortController=new AbortController,this.abortController.signal}async getWebauthnCredential(t){return await jo(Be({},t,{signal:this.createAbortSignal()}))}async getConditionalWebauthnCredential(t){return await jo({publicKey:t,mediation:"conditional",signal:this.createAbortSignal()})}async createWebauthnCredential(t){return await async function(e){return o=await navigator.credentials.create(function(r){return vt(ra,sr,r)}(e)),vt(ia,lr,o);var o}(Be({},t,{signal:this.createAbortSignal()}))}};async function Do(n,t,e,o="webauthn_credential_already_exists",r="Webauthn credential already exists"){try{let i=await t.createWebauthnCredential(e);return await n.actions.webauthn_verify_attestation_response.run({public_key:i})}catch(i){let s=await n.actions.back.run();return s.error={code:o,message:r},s}}dt.instance=null;var Lo={preflight:async n=>await n.actions.register_client_capabilities.run({webauthn_available:ct.supported(),webauthn_conditional_mediation_available:await ct.isConditionalMediationAvailable(),webauthn_platform_authenticator_available:await ct.isPlatformAuthenticatorAvailable()}),login_passkey:async n=>{let t=dt.getInstance();try{let e=await t.getWebauthnCredential(n.payload.request_options);return await n.actions.webauthn_verify_assertion_response.run({assertion_response:e})}catch(e){let o=await n.actions.back.run();return n.error&&(o.error=n.error),o}},onboarding_verify_passkey_attestation:async n=>Do(n,dt.getInstance(),n.payload.creation_options),webauthn_credential_verification:async n=>Do(n,dt.getInstance(),n.payload.creation_options),async thirdparty(n){let t=new URLSearchParams(window.location.search),e=t.get("hanko_token"),o=t.get("error"),r=i=>{i.forEach(c=>t.delete(c));let s=t.toString()?`?${t.toString()}`:"";history.replaceState(null,null,`${window.location.pathname}${s}`)};if((e==null?void 0:e.length)>0)return r(["hanko_token"]),await n.actions.exchange_token.run({token:e});if((o==null?void 0:o.length)>0){let i=o==="access_denied"?"third_party_access_denied":"technical_error",s=t.get("error_description");r(["error","error_description"]);let c=await n.actions.back.run(null,{dispatchAfterStateChangeEvent:!1});return c.error={code:i,message:s},c.dispatchAfterStateChangeEvent(),c}return n.isCached?await n.actions.back.run():(n.saveToLocalStorage(),window.location.assign(n.payload.redirect_url),n)},success:async n=>{let{claims:t}=n.payload,e=Date.parse(t.expiration)-Date.now();return n.removeFromLocalStorage(),n.hanko.relay.dispatchSessionCreatedEvent({claims:t,expirationSeconds:e}),n},account_deleted:async n=>(n.removeFromLocalStorage(),n.hanko.relay.dispatchUserDeletedEvent(),n)},Mo={login_init:async n=>{(async function(){let t=dt.getInstance();if(n.payload.request_options)try{let{publicKey:e}=n.payload.request_options,o=await t.getConditionalWebauthnCredential(e);await n.actions.webauthn_verify_assertion_response.run({assertion_response:o})}catch(e){return}})()}},gt=class n{constructor(t,e,o,r={}){if(this.name=void 0,this.flowName=void 0,this.error=void 0,this.payload=void 0,this.actions=void 0,this.csrfToken=void 0,this.status=void 0,this.previousAction=void 0,this.isCached=void 0,this.cacheKey=void 0,this.hanko=void 0,this.invokedAction=void 0,this.excludeAutoSteps=void 0,this.autoStep=void 0,this.passkeyAutofillActivation=void 0,this.flowName=e,this.name=o.name,this.error=o.error,this.payload=o.payload,this.csrfToken=o.csrf_token,this.status=o.status,this.hanko=t,this.actions=this.buildActionMap(o.actions),this.name in Lo){let d=Lo[this.name];this.autoStep=()=>d(this)}if(this.name in Mo){let d=Mo[this.name];this.passkeyAutofillActivation=()=>d(this)}let{dispatchAfterStateChangeEvent:i=!0,excludeAutoSteps:s=null,previousAction:c=null,isCached:h=!1,cacheKey:l="hanko-flow-state"}=r;this.excludeAutoSteps=s,this.previousAction=c,this.isCached=h,this.cacheKey=l,i&&this.dispatchAfterStateChangeEvent()}buildActionMap(t){let e={};return Object.keys(t).forEach(o=>{e[o]=new Nt(t[o],this)}),new Proxy(e,{get:(o,r)=>{if(r in o)return o[r];let i=typeof r=="string"?r:r.toString();return Nt.createDisabled(i,this)}})}dispatchAfterStateChangeEvent(){this.hanko.relay.dispatchAfterStateChangeEvent({state:this})}serialize(){return{flow_name:this.flowName,name:this.name,error:this.error,payload:this.payload,csrf_token:this.csrfToken,status:this.status,previous_action:this.previousAction,actions:Object.fromEntries(Object.entries(this.actions).map(([t,e])=>[t,{action:e.name,href:e.href,inputs:e.inputs,description:null}]))}}saveToLocalStorage(){localStorage.setItem(this.cacheKey,JSON.stringify(Be({},this.serialize(),{is_cached:!0})))}removeFromLocalStorage(){localStorage.removeItem(this.cacheKey)}static async initializeFlowState(t,e,o,r={}){let i=new n(t,e,o,r);if(i.excludeAutoSteps!="all")for(;i&&i.autoStep&&((s=i.excludeAutoSteps)==null||!s.includes(i.name));){var s;let c=await i.autoStep();if(c.name==i.name)return c;i=c}return i}static readFromLocalStorage(t){let e=localStorage.getItem(t);if(e)try{return JSON.parse(e)}catch(o){return}}static async create(t,e,o={}){let{cacheKey:r="hanko-flow-state",loadFromCache:i=!0}=o;if(i){let c=n.readFromLocalStorage(r);if(c)return n.deserialize(t,c,Be({},o,{cacheKey:r}))}let s=await n.fetchState(t,`/${e}`);return n.initializeFlowState(t,e,s,Be({},o,{cacheKey:r}))}static async deserialize(t,e,o={}){return n.initializeFlowState(t,e.flow_name,e,Be({},o,{previousAction:e.previous_action,isCached:e.is_cached}))}static async fetchState(t,e,o){try{return(await t.client.post(e,o)).json()}catch(r){return n.createErrorResponse(r)}}static createErrorResponse(t){return{actions:null,csrf_token:"",name:"error",payload:null,status:0,error:t}}},Nt=class n{constructor(t,e,o=!0){this.enabled=void 0,this.href=void 0,this.name=void 0,this.inputs=void 0,this.parentState=void 0,this.enabled=o,this.href=t.href,this.name=t.action,this.inputs=t.inputs,this.parentState=e}static createDisabled(t,e){return new n({action:t,href:"",inputs:{},description:"Disabled action"},e,!1)}async run(t=null,e={}){let{name:o,hanko:r,flowName:i,csrfToken:s,invokedAction:c,excludeAutoSteps:h,cacheKey:l}=this.parentState,{dispatchAfterStateChangeEvent:d=!0}=e;if(!this.enabled)throw new Error(`Action '${this.name}' is not enabled in state '${o}'`);if(c)throw new Error(`An action '${c.name}' has already been invoked on state '${c.relatedStateName}'. No further actions can be run.`);this.parentState.invokedAction={name:this.name,relatedStateName:o},r.relay.dispatchBeforeStateChangeEvent({state:this.parentState});let m={input_data:Be({},Object.keys(this.inputs).reduce((v,x)=>{let _=this.inputs[x];return _.value!==void 0&&(v[x]=_.value),v},{}),t),csrf_token:s},g=await gt.fetchState(r,this.href,m);return this.parentState.removeFromLocalStorage(),gt.initializeFlowState(r,i,g,{dispatchAfterStateChangeEvent:d,excludeAutoSteps:h,previousAction:c,cacheKey:l})}},kn=class extends Lt{async getCurrent(){let t=await this.client.get("/me");if(t.status===401)throw this.client.dispatcher.dispatchSessionExpiredEvent(),new jt;if(!t.ok)throw new ot;let e=t.json(),o=await this.client.get(`/users/${e.id}`);if(o.status===401)throw this.client.dispatcher.dispatchSessionExpiredEvent(),new jt;if(!o.ok)throw new ot;return o.json()}async logout(){let t=await this.client.post("/logout");if(this.client.sessionTokenStorage.removeSessionToken(),this.client.cookie.removeAuthCookie(),this.client.dispatcher.dispatchUserLoggedOutEvent(),t.status!==401&&!t.ok)throw new ot}},xn=class extends gn{constructor(t,e){super(),this.session=void 0,this.user=void 0,this.cookie=void 0,this.client=void 0,this.relay=void 0;let o=Be({timeout:13e3,cookieName:"hanko",localStorageKey:"hanko",sessionCheckInterval:3e4,sessionCheckChannelName:"hanko-session-check"},e);this.client=new Dt(t,o),this.session=new Mt(t,o),this.user=new kn(t,o),this.relay=new _n(t,o),this.cookie=new wn(o)}setLang(t){this.client.lang=t}createState(t,e={}){return gt.create(this,t,e)}async getUser(){return this.user.getCurrent()}async validateSession(){return this.session.validate()}getSessionToken(){return this.cookie.getAuthCookie()}async logout(){return this.user.logout()}},hr=G(292),at=G.n(hr),ur=G(360),rt=G.n(ur),pr=G(884),it=G.n(pr),fr=G(88),st=G.n(fr),an=G(914),wt={};wt.setAttributes=it(),wt.insert=n=>{window._hankoStyle=n},wt.domAPI=rt(),wt.insertStyleElement=st(),at()(an.A,wt);var Ut=an.A&&an.A.locals?an.A.locals:void 0,mr=function(n){function t(e){var o=Xo({},e);return delete o.ref,n(o,e.ref||null)}return t.$$typeof=Ya,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}((n,t)=>{let{lang:e,hanko:o,setHanko:r}=(0,f.useContext)(Ie),{setLang:i}=(0,f.useContext)(q.TranslateContext);return(0,f.useEffect)(()=>{i(e.replace(/[-]/,"")),r(s=>(s.setLang(e),s))},[o,e,r,i]),a("section",Object.assign({part:"container",className:Ut.container,ref:t},{children:n.children}))}),rn=G(697),_t={};_t.setAttributes=it(),_t.insert=n=>{window._hankoStyle=n},_t.domAPI=rt(),_t.insertStyleElement=st(),at()(rn.A,_t);var I=rn.A&&rn.A.locals?rn.A.locals:void 0,vr=G(633),K=G.n(vr),gr=({size:n,secondary:t,disabled:e})=>a("svg",Object.assign({id:"icon-apple",xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"20.5 16 15 19",className:K()(I.icon,t&&I.secondary,e&&I.disabled)},{children:a("path",{d:"M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z"})})),br=({secondary:n,size:t,fadeOut:e,disabled:o})=>a("svg",Object.assign({id:"icon-checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"4 4 40 40",width:t,height:t,className:K()(I.checkmark,n&&I.secondary,e&&I.fadeOut,o&&I.disabled)},{children:a("path",{d:"M21.05 33.1 35.2 18.95l-2.3-2.25-11.85 11.85-6-6-2.25 2.25ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"})})),yr=({size:n,secondary:t,disabled:e})=>a("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",width:n,height:n,className:K()(I.icon,t&&I.secondary,e&&I.disabled)},{children:a("path",{d:"M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"})})),wr=({size:n,secondary:t,disabled:e})=>a("svg",Object.assign({id:"icon-custom-provider",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:n,height:n,className:K()(I.icon,t&&I.secondary,e&&I.disabled)},{children:[a("path",{d:"M0 0h24v24H0z",fill:"none"}),a("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})]})),_r=({size:n,secondary:t,disabled:e})=>a("svg",Object.assign({id:"icon-discord",fill:"#fff",xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 127.14 96.36",className:K()(I.icon,t&&I.secondary,e&&I.disabled)},{children:a("path",{d:"M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"})})),kr=({size:n,secondary:t,disabled:e})=>a("svg",Object.assign({id:"icon-exclamation",xmlns:"http://www.w3.org/2000/svg",viewBox:"5 2 13 20",width:n,height:n,className:K()(I.exclamationMark,t&&I.secondary,e&&I.disabled)},{children:a("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})})),xr=({size:n,secondary:t,disabled:e})=>a("svg",Object.assign({width:n,height:n,viewBox:"0 0 666.66668 666.66717",xmlns:"http://www.w3.org/2000/svg"},{children:[a("defs",Object.assign({id:"defs13"},{children:a("clipPath",Object.assign({clipPathUnits:"userSpaceOnUse",id:"clipPath25"},{children:a("path",{d:"M 0,700 H 700 V 0 H 0 Z",id:"path23"})}))})),a("g",Object.assign({id:"g17",transform:"matrix(1.3333333,0,0,-1.3333333,-133.33333,799.99999)"},{children:a("g",Object.assign({id:"g19"},{children:a("g",Object.assign({id:"g21",clipPath:"url(#clipPath25)"},{children:[a("g",Object.assign({id:"g27",transform:"translate(600,350)"},{children:a("path",{className:K()(I.facebookIcon,e?I.disabledOutline:I.outline),d:"m 0,0 c 0,138.071 -111.929,250 -250,250 -138.071,0 -250,-111.929 -250,-250 0,-117.245 80.715,-215.622 189.606,-242.638 v 166.242 h -51.552 V 0 h 51.552 v 32.919 c 0,85.092 38.508,124.532 122.048,124.532 15.838,0 43.167,-3.105 54.347,-6.211 V 81.986 c -5.901,0.621 -16.149,0.932 -28.882,0.932 -40.993,0 -56.832,-15.528 -56.832,-55.9 V 0 h 81.659 l -14.028,-76.396 h -67.631 V -248.169 C -95.927,-233.218 0,-127.818 0,0",id:"path29"})})),a("g",Object.assign({id:"g31",transform:"translate(447.9175,273.6036)"},{children:a("path",{className:K()(I.facebookIcon,e?I.disabledLetter:I.letter),d:"M 0,0 14.029,76.396 H -67.63 v 27.019 c 0,40.372 15.838,55.899 56.831,55.899 12.733,0 22.981,-0.31 28.882,-0.931 v 69.253 c -11.18,3.106 -38.509,6.212 -54.347,6.212 -83.539,0 -122.048,-39.441 -122.048,-124.533 V 76.396 h -51.552 V 0 h 51.552 v -166.242 c 19.343,-4.798 39.568,-7.362 60.394,-7.362 10.254,0 20.358,0.632 30.288,1.831 L -67.63,0 Z",id:"path33"})}))]}))}))}))]})),Sr=({size:n,secondary:t,disabled:e})=>a("svg",Object.assign({id:"icon-github",xmlns:"http://www.w3.org/2000/svg",fill:"#fff",viewBox:"0 0 97.63 96",width:n,height:n,className:K()(I.icon,t&&I.secondary,e&&I.disabled)},{children:[a("path",{d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"})," "]})),Cr=({size:n,disabled:t})=>a("svg",Object.assign({id:"icon-google",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:n,height:n,className:I.googleIcon},{children:[a("path",{className:K()(I.googleIcon,t?I.disabled:I.blue),d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),a("path",{className:K()(I.googleIcon,t?I.disabled:I.green),d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),a("path",{className:K()(I.googleIcon,t?I.disabled:I.yellow),d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),a("path",{className:K()(I.googleIcon,t?I.disabled:I.red),d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"}),a("path",{d:"M1 1h22v22H1z",fill:"none"})]})),Or=({size:n,secondary:t,disabled:e})=>a("svg",Object.assign({id:"icon-linkedin",fill:"#fff",xmlns:"http://www.w3.org/2000/svg",width:n,viewBox:"0 0 24 24",height:n,className:K()(I.icon,t&&I.secondary,e&&I.disabled)},{children:a("path",{d:"M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"})})),Ar=({size:n,secondary:t,disabled:e})=>a("svg",Object.assign({id:"icon-mail",xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 -960 960 960",className:K()(I.icon,t&&I.secondary,e&&I.disabled)},{children:a("path",{d:"M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"})})),Er=({size:n,disabled:t})=>a("svg",Object.assign({id:"icon-microsoft",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:n,height:n,className:I.microsoftIcon},{children:[a("rect",{className:K()(I.microsoftIcon,t?I.disabled:I.blue),x:"1",y:"1",width:"9",height:"9"}),a("rect",{className:K()(I.microsoftIcon,t?I.disabled:I.green),x:"1",y:"11",width:"9",height:"9"}),a("rect",{className:K()(I.microsoftIcon,t?I.disabled:I.yellow),x:"11",y:"1",width:"9",height:"9"}),a("rect",{className:K()(I.microsoftIcon,t?I.disabled:I.red),x:"11",y:"11",width:"9",height:"9"})]})),Ir=({size:n,secondary:t,disabled:e})=>a("svg",Object.assign({id:"icon-passkey",xmlns:"http://www.w3.org/2000/svg",viewBox:"3 1.5 19.5 19",width:n,height:n,className:K()(I.icon,t&&I.secondary,e&&I.disabled)},{children:a("g",Object.assign({id:"icon-passkey-all"},{children:[a("circle",{id:"icon-passkey-head",cx:"10.5",cy:"6",r:"4.5"}),a("path",{id:"icon-passkey-key",d:"M22.5,10.5a3.5,3.5,0,1,0-5,3.15V19L19,20.5,21.5,18,20,16.5,21.5,15l-1.24-1.24A3.5,3.5,0,0,0,22.5,10.5Zm-3.5,0a1,1,0,1,1,1-1A1,1,0,0,1,19,10.5Z"}),a("path",{id:"icon-passkey-body",d:"M14.44,12.52A6,6,0,0,0,12,12H9a6,6,0,0,0-6,6v2H16V14.49A5.16,5.16,0,0,1,14.44,12.52Z"})]}))})),Tr=({size:n,secondary:t,disabled:e})=>a("svg",Object.assign({id:"icon-password",xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 -960 960 960",className:K()(I.icon,t&&I.secondary,e&&I.disabled)},{children:a("path",{d:"M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z"})})),Pr=({size:n,secondary:t,disabled:e})=>a("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",width:n,height:n,className:K()(I.icon,t&&I.secondary,e&&I.disabled)},{children:a("path",{d:"M80-680v-200h200v80H160v120H80Zm0 600v-200h80v120h120v80H80Zm600 0v-80h120v-120h80v200H680Zm120-600v-120H680v-80h200v200h-80ZM700-260h60v60h-60v-60Zm0-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm120-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm240-320v240H520v-240h240ZM440-440v240H200v-240h240Zm0-320v240H200v-240h240Zm-60 500v-120H260v120h120Zm0-320v-120H260v120h120Zm320 0v-120H580v120h120Z"})})),jr=({size:n,secondary:t,disabled:e})=>a("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",width:n,height:n,className:K()(I.icon,t&&I.secondary,e&&I.disabled)},{children:a("path",{d:"M280-240q-100 0-170-70T40-480q0-100 70-170t170-70q66 0 121 33t87 87h432v240h-80v120H600v-120H488q-32 54-87 87t-121 33Zm0-80q66 0 106-40.5t48-79.5h246v120h80v-120h80v-80H434q-8-39-48-79.5T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q33 0 56.5-23.5T360-480q0-33-23.5-56.5T280-560q-33 0-56.5 23.5T200-480q0 33 23.5 56.5T280-400Zm0-80Z"})})),Dr=({size:n,disabled:t})=>a("svg",Object.assign({id:"icon-spinner",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:n,height:n,className:K()(I.loadingSpinner,t&&I.disabled)},{children:[a("path",{d:"M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",opacity:".25"}),a("path",{d:"M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"})]})),zt=({name:n,secondary:t,size:e=18,fadeOut:o,disabled:r})=>a(jn[n],{size:e,secondary:t,fadeOut:o,disabled:r}),so=({children:n,isLoading:t,isSuccess:e,fadeOut:o,secondary:r,hasIcon:i,maxWidth:s})=>a(k.Fragment,{children:a("div",t?Object.assign({className:K()(I.loadingSpinnerWrapper,I.centerContent,s&&I.maxWidth)},{children:a(zt,{name:"spinner",secondary:r})}):e?Object.assign({className:K()(I.loadingSpinnerWrapper,I.centerContent,s&&I.maxWidth)},{children:a(zt,{name:"checkmark",secondary:r,fadeOut:o})}):Object.assign({className:i?I.loadingSpinnerWrapperIcon:I.loadingSpinnerWrapper},{children:n}))}),Lr=()=>a(so,{isLoading:!0}),Oe=n=>{let[t,e]=(0,f.useState)(n);return(0,f.useEffect)(()=>{n&&e(n)},[n]),{flowState:t}},sn=G(577),kt={};kt.setAttributes=it(),kt.insert=n=>{window._hankoStyle=n},kt.domAPI=rt(),kt.insertStyleElement=st(),at()(sn.A,kt);var _e=sn.A&&sn.A.locals?sn.A.locals:void 0,Mr=()=>{let{t:n}=(0,f.useContext)(q.TranslateContext);return a("span",Object.assign({className:K()(_e.lastUsed)},{children:n("labels.lastUsed")}))},da=(n,t,e)=>{let{hanko:o,setUIState:r,isOwnFlow:i}=(0,f.useContext)(Ie);(0,f.useEffect)(()=>o.onBeforeStateChange(({state:s})=>{n&&i(s)&&(r(c=>Object.assign(Object.assign({},c),{isDisabled:!0,error:void 0})),t(s.invokedAction.name==n.name))}),[n,o,i,t,r]),(0,f.useEffect)(()=>o.onAfterStateChange(({state:s})=>{var c;n&&i(s)&&(e(((c=s.previousAction)===null||c===void 0?void 0:c.name)==n.name),t(!1))}),[o,e,t,n,i])},ha=(0,k.createContext)({}),X=({onSubmit:n,children:t,hidden:e=!1,maxWidth:o,flowAction:r})=>a(ha.Provider,Object.assign({value:{flowAction:r}},{children:r&&r.enabled&&!e?a("form",Object.assign({onSubmit:n||(i=>{return s=void 0,c=void 0,l=function*(){return i.preventDefault(),yield r.run()},new((h=void 0)||(h=Promise))(function(d,m){function g(_){try{x(l.next(_))}catch(w){m(w)}}function v(_){try{x(l.throw(_))}catch(w){m(w)}}function x(_){var w;_.done?d(_.value):(w=_.value,w instanceof h?w:new h(function(P){P(w)})).then(g,v)}x((l=l.apply(s,c||[])).next())});var s,c,h,l}),className:_e.form},{children:a("ul",Object.assign({className:_e.ul},{children:(0,k.toChildArray)(t).map((i,s)=>a("li",Object.assign({part:"form-item",className:K()(_e.li,o?_e.maxWidth:null)},{children:i}),s))}))})):null})),ee=n=>{var{title:t,children:e,secondary:o,dangerous:r,autofocus:i,showLastUsed:s,onClick:c,icon:h,showSuccessIcon:l}=n,d=function(D,W){var U={};for(var M in D)Object.prototype.hasOwnProperty.call(D,M)&&W.indexOf(M)<0&&(U[M]=D[M]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function"){var re=0;for(M=Object.getOwnPropertySymbols(D);re<M.length;re++)W.indexOf(M[re])<0&&Object.prototype.propertyIsEnumerable.call(D,M[re])&&(U[M[re]]=D[M[re]])}return U}(n,["title","children","secondary","dangerous","autofocus","showLastUsed","onClick","icon","showSuccessIcon"]);let m=(0,f.useRef)(null),{uiState:g}=(0,f.useContext)(Ie),[v,x]=(0,f.useState)(!1),[_,w]=(0,f.useState)(!1),{flowAction:P}=(0,f.useContext)(ha);da(P,x,w),(0,f.useEffect)(()=>{let{current:D}=m;D&&i&&D.focus()},[i]);let N=(0,f.useMemo)(()=>l&&(_||d.isSuccess),[_,d,l]),j=(0,f.useMemo)(()=>g.isDisabled||d.disabled,[d,g]);return a("button",Object.assign({part:r?"button dangerous-button":o?"button secondary-button":"button primary-button",title:t,ref:m,type:"submit",disabled:j,onClick:c,className:K()(_e.button,r?_e.dangerous:o?_e.secondary:_e.primary)},{children:a(so,Object.assign({isLoading:v,isSuccess:N,secondary:!0,hasIcon:!!h,maxWidth:!0},{children:[h?a(zt,{name:h,secondary:o,disabled:j}):null,a("div",Object.assign({className:_e.caption},{children:[a("span",{children:e}),s?a(Mr,{}):null]}))]}))}))},Le=n=>{var t,e,o,r,i,{label:s}=n,c=function(v,x){var _={};for(var w in v)Object.prototype.hasOwnProperty.call(v,w)&&x.indexOf(w)<0&&(_[w]=v[w]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function"){var P=0;for(w=Object.getOwnPropertySymbols(v);P<w.length;P++)x.indexOf(w[P])<0&&Object.prototype.propertyIsEnumerable.call(v,w[P])&&(_[w[P]]=v[w[P]])}return _}(n,["label"]);let h=(0,f.useRef)(null),{uiState:l}=(0,f.useContext)(Ie),{t:d}=(0,f.useContext)(q.TranslateContext),m=(0,f.useMemo)(()=>l.isDisabled||c.disabled,[c,l]);(0,f.useEffect)(()=>{let{current:v}=h;v&&c.autofocus&&(v.focus(),v.select())},[c.autofocus]);let g=(0,f.useMemo)(()=>{var v;return c.markOptional&&!(!((v=c.flowInput)===null||v===void 0)&&v.required)?`${c.placeholder} (${d("labels.optional")})`:c.placeholder},[c.markOptional,c.placeholder,c.flowInput,d]);return a("div",Object.assign({className:_e.inputWrapper},{children:a("input",Object.assign({part:"input text-input",required:(t=c.flowInput)===null||t===void 0?void 0:t.required,maxLength:(e=c.flowInput)===null||e===void 0?void 0:e.max_length,minLength:(o=c.flowInput)===null||o===void 0?void 0:o.min_length,hidden:(r=c.flowInput)===null||r===void 0?void 0:r.hidden},c,{ref:h,"aria-label":g,placeholder:g,className:K()(_e.input,!!(!((i=c.flowInput)===null||i===void 0)&&i.error)&&c.markError&&_e.error),disabled:m}))}))},xe=({children:n})=>a("section",Object.assign({className:Ut.content},{children:n})),ln=G(111),xt={};xt.setAttributes=it(),xt.insert=n=>{window._hankoStyle=n},xt.domAPI=rt(),xt.insertStyleElement=st(),at()(ln.A,xt);var Pt=ln.A&&ln.A.locals?ln.A.locals:void 0,lo=({children:n,hidden:t})=>t?null:a("section",Object.assign({part:"divider",className:Pt.divider},{children:[a("div",{part:"divider-line",className:Pt.line}),n?a("div",Object.assign({part:"divider-text",class:Pt.text},{children:n})):null,a("div",{part:"divider-line",className:Pt.line})]})),cn=G(905),St={};St.setAttributes=it(),St.insert=n=>{window._hankoStyle=n},St.domAPI=rt(),St.insertStyleElement=st(),at()(cn.A,St);var ua=cn.A&&cn.A.locals?cn.A.locals:void 0,Se=({state:n,error:t,flowError:e})=>{var o,r;let{t:i}=(0,f.useContext)(q.TranslateContext),{uiState:s,setUIState:c}=(0,f.useContext)(Ie);return(0,f.useEffect)(()=>{var h,l;if(((h=n==null?void 0:n.error)===null||h===void 0?void 0:h.code)=="form_data_invalid_error")for(let d of Object.values(n==null?void 0:n.actions)){let m=!1;for(let g of Object.values(d==null?void 0:d.inputs))if(!((l=g.error)===null||l===void 0)&&l.code)return c(Object.assign(Object.assign({},s),{error:g.error})),void(m=!0);m||c(Object.assign(Object.assign({},s),{error:n.error}))}else n!=null&&n.error&&c(Object.assign(Object.assign({},s),{error:n==null?void 0:n.error}))},[n]),a("section",Object.assign({part:"error",className:ua.errorBox,hidden:!(!((o=s.error)===null||o===void 0)&&o.code)&&!(e!=null&&e.code)&&!t},{children:[a("span",{children:a(zt,{name:"exclamation",size:15})}),a("span",Object.assign({id:"errorMessage",part:"error-text"},{children:i(t?`errors.${t.code}`:`flowErrors.${((r=s.error)===null||r===void 0?void 0:r.code)||(e==null?void 0:e.code)}`)}))]}))},dn=G(619),Ct={};Ct.setAttributes=it(),Ct.insert=n=>{window._hankoStyle=n},Ct.domAPI=rt(),Ct.insertStyleElement=st(),at()(dn.A,Ct);var Sn=dn.A&&dn.A.locals?dn.A.locals:void 0,ce=({children:n})=>a("h1",Object.assign({part:"headline1",className:K()(Sn.headline,Sn.grade1)},{children:n})),hn=G(995),Ot={};Ot.setAttributes=it(),Ot.insert=n=>{window._hankoStyle=n},Ot.domAPI=rt(),Ot.insertStyleElement=st(),at()(hn.A,Ot);var Xt=hn.A&&hn.A.locals?hn.A.locals:void 0,no=n=>{var{loadingSpinnerPosition:t,dangerous:e=!1,onClick:o,flowAction:r}=n,i=function(U,M){var re={};for(var oe in U)Object.prototype.hasOwnProperty.call(U,oe)&&M.indexOf(oe)<0&&(re[oe]=U[oe]);if(U!=null&&typeof Object.getOwnPropertySymbols=="function"){var te=0;for(oe=Object.getOwnPropertySymbols(U);te<oe.length;te++)M.indexOf(oe[te])<0&&Object.prototype.propertyIsEnumerable.call(U,oe[te])&&(re[oe[te]]=U[oe[te]])}return re}(n,["loadingSpinnerPosition","dangerous","onClick","flowAction"]);let{t:s}=(0,f.useContext)(q.TranslateContext),{uiState:c}=(0,f.useContext)(Ie),[h,l]=(0,f.useState)(),[d,m]=(0,f.useState)(!1),[g,v]=(0,f.useState)(!1),x;o||(o=U=>{return M=void 0,re=void 0,te=function*(){return U.preventDefault(),yield r==null?void 0:r.run()},new((oe=void 0)||(oe=Promise))(function(R,ue){function Ce(ie){try{Ee(te.next(ie))}catch(pe){ue(pe)}}function fe(ie){try{Ee(te.throw(ie))}catch(pe){ue(pe)}}function Ee(ie){var pe;ie.done?R(ie.value):(pe=ie.value,pe instanceof oe?pe:new oe(function(T){T(pe)})).then(Ce,fe)}Ee((te=te.apply(M,re||[])).next())});var M,re,oe,te}),da(r,m,v);let _=U=>{U.preventDefault(),l(!0)},w=U=>{U.preventDefault(),l(!1)},P=(0,f.useMemo)(()=>d||i.isLoading,[d,i]),N=(0,f.useMemo)(()=>g||i.isSuccess,[g,i]),j=(0,f.useMemo)(()=>r&&!r.enabled||i.hidden,[r,i]),D=(0,f.useCallback)(U=>{U.preventDefault(),l(!1),o(U)},[o]),W=(0,f.useCallback)(()=>j?null:a(k.Fragment,{children:[h?a(k.Fragment,{children:[a(no,Object.assign({onClick:D},{children:s("labels.yes")})),"\xA0/\xA0",a(no,Object.assign({onClick:w},{children:s("labels.no")})),"\xA0"]}):null,a("button",Object.assign({},i,{onClick:e?_:o,disabled:h||i.disabled||c.isDisabled,part:"link",className:K()(Xt.link,e?Xt.danger:null)},{children:i.children}))]}),[j,c,h,e,o,D,i,s]);return a(k.Fragment,{children:a("span",Object.assign({className:K()(Xt.linkWrapper,t==="right"?Xt.reverse:null),onMouseEnter:()=>{x&&window.clearTimeout(x)},onMouseLeave:()=>{x=window.setTimeout(()=>{l(!1)},1e3)}},{children:a(k.Fragment,h||!P&&!N?{children:W()}:{children:[a(so,{isLoading:P,isSuccess:N,secondary:i.secondary,fadeOut:!0}),W()]})}))})},V=no,Ae=({children:n,hidden:t=!1})=>t?null:a("section",Object.assign({className:Ut.footer},{children:n})),co=n=>{var{label:t}=n,e=function(i,s){var c={};for(var h in i)Object.prototype.hasOwnProperty.call(i,h)&&s.indexOf(h)<0&&(c[h]=i[h]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function"){var l=0;for(h=Object.getOwnPropertySymbols(i);l<h.length;l++)s.indexOf(h[l])<0&&Object.prototype.propertyIsEnumerable.call(i,h[l])&&(c[h[l]]=i[h[l]])}return c}(n,["label"]);let{uiState:o}=(0,f.useContext)(Ie),r=(0,f.useMemo)(()=>o.isDisabled||e.disabled,[e,o]);return a("div",Object.assign({className:_e.inputWrapper},{children:a("label",Object.assign({className:_e.checkboxWrapper},{children:[a("input",Object.assign({part:"input checkbox-input",type:"checkbox","aria-label":t,className:_e.checkbox},e)),a("span",Object.assign({className:K()(_e.label,r?_e.disabled:null)},{children:t}))]}))}))},Cn=()=>a("section",{className:Pt.spacer}),en=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},Nr=n=>{var t;let{t:e}=(0,f.useContext)(q.TranslateContext),{init:o,initialComponentName:r,uiState:i,setUIState:s,hidePasskeyButtonOnLogin:c,lastLogin:h}=(0,f.useContext)(Ie),[l,d]=(0,f.useState)(!1),[m,g]=(0,f.useState)(null),[v,x]=(0,f.useState)(i.username||i.email),{flowState:_}=Oe(n.state),w=ct.supported(),[P,N]=(0,f.useState)(void 0),[j,D]=(0,f.useState)(null),[W,U]=(0,f.useState)(!1),M=R=>{if(R.preventDefault(),R.target instanceof HTMLInputElement){let{value:ue}=R.target;x(ue),re(ue)}},re=R=>{let ue=()=>s(fe=>Object.assign(Object.assign({},fe),{email:R,username:null})),Ce=()=>s(fe=>Object.assign(Object.assign({},fe),{email:null,username:R}));switch(m){case"email":ue();break;case"username":Ce();break;case"identifier":R.match(/^[^@]+@[^@]+\.[^@]+$/)?ue():Ce()}},oe=(0,f.useMemo)(()=>!!_.actions.webauthn_generate_request_options.enabled||!!_.actions.thirdparty_oauth.enabled,[_.actions]),te=_.actions.continue_with_login_identifier.inputs;return(0,f.useEffect)(()=>{let R=_.actions.continue_with_login_identifier.inputs;g(R!=null&&R.email?"email":R!=null&&R.username?"username":"identifier")},[_]),a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:e("headlines.signIn")}),a(Se,{state:_,error:P}),te?a(k.Fragment,{children:[a(X,Object.assign({flowAction:_.actions.continue_with_login_identifier,onSubmit:R=>en(void 0,void 0,void 0,function*(){return R.preventDefault(),re(v),_.actions.continue_with_login_identifier.run({[m]:v})}),maxWidth:!0},{children:[te.email?a(Le,{type:"email",autoComplete:"username webauthn",autoCorrect:"off",flowInput:te.email,onInput:M,value:v,placeholder:e("labels.email"),pattern:"^[^@]+@[^@]+\\.[^@]+$"}):te.username?a(Le,{type:"text",autoComplete:"username webauthn",autoCorrect:"off",flowInput:te.username,onInput:M,value:v,placeholder:e("labels.username")}):a(Le,{type:"text",autoComplete:"username webauthn",autoCorrect:"off",flowInput:te.identifier,onInput:M,value:v,placeholder:e("labels.emailOrUsername")}),a(ee,{children:e("labels.continue")})]})),a(lo,Object.assign({hidden:!oe},{children:e("labels.or")}))]}):null,_.actions.webauthn_generate_request_options.enabled&&!c?a(X,Object.assign({flowAction:_.actions.webauthn_generate_request_options},{children:a(ee,Object.assign({secondary:!0,title:w?null:e("labels.webauthnUnsupported"),disabled:!w,icon:"passkey"},{children:e("labels.signInPasskey")}))})):null,_.actions.thirdparty_oauth.enabled?(t=_.actions.thirdparty_oauth.inputs.provider.allowed_values)===null||t===void 0?void 0:t.map(R=>a(X,Object.assign({flowAction:_.actions.thirdparty_oauth,onSubmit:ue=>((Ce,fe)=>en(void 0,void 0,void 0,function*(){Ce.preventDefault(),D(fe);let Ee=yield _.actions.thirdparty_oauth.run({provider:fe,redirect_to:window.location.toString()});return Ee.error&&D(null),Ee}))(ue,R.value)},{children:a(ee,Object.assign({isLoading:R.value==j,secondary:!0,icon:R.value.startsWith("custom_")?"customProvider":R.value,showLastUsed:(h==null?void 0:h.login_method)=="third_party"&&(h==null?void 0:h.third_party_provider)==R.value},{children:e("labels.signInWith",{provider:R.name})}))}),R.value)):null,_.actions.remember_me.enabled&&a(k.Fragment,{children:[a(Cn,{}),a(co,{required:!1,type:"checkbox",label:e("labels.staySignedIn"),checked:W,onChange:R=>en(void 0,void 0,void 0,function*(){return U(ue=>!ue),_.actions.remember_me.run({remember_me:!W})})})]})]}),a(Ae,Object.assign({hidden:r!=="auth"},{children:[a("span",{hidden:!0}),a(V,Object.assign({onClick:R=>en(void 0,void 0,void 0,function*(){R.preventDefault(),d(!0),o("registration")}),loadingSpinnerPosition:"left",isLoading:l},{children:e("labels.dontHaveAnAccount")}))]}))]})},Ur=n=>{var{index:t,focus:e,digit:o=""}=n,r=function(l,d){var m={};for(var g in l)Object.prototype.hasOwnProperty.call(l,g)&&d.indexOf(g)<0&&(m[g]=l[g]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function"){var v=0;for(g=Object.getOwnPropertySymbols(l);v<g.length;v++)d.indexOf(g[v])<0&&Object.prototype.propertyIsEnumerable.call(l,g[v])&&(m[g[v]]=l[g[v]])}return m}(n,["index","focus","digit"]);let i=(0,f.useRef)(null),{uiState:s}=(0,f.useContext)(Ie),c=()=>{let{current:l}=i;l&&(l.focus(),l.select())},h=(0,f.useMemo)(()=>s.isDisabled||r.disabled,[r,s]);return(0,f.useEffect)(()=>{t===0&&c()},[t,r.disabled]),(0,f.useMemo)(()=>{e&&c()},[e]),a("div",Object.assign({className:_e.passcodeDigitWrapper},{children:a("input",Object.assign({},r,{part:"input passcode-input","aria-label":`${r.name}-digit-${t+1}`,name:r.name+t.toString(10),type:"text",inputMode:"numeric",maxLength:1,ref:i,value:o.charAt(0),required:!0,className:_e.input,disabled:h}))}))},ho=({passcodeDigits:n=[],numberOfInputs:t=6,onInput:e,disabled:o=!1})=>{let[r,i]=(0,f.useState)(0),s=()=>n.slice(),c=()=>{r<t-1&&i(r+1)},h=()=>{r>0&&i(r-1)},l=v=>{let x=s();x[r]=v.charAt(0),e(x)},d=v=>{if(v.preventDefault(),o)return;let x=v.clipboardData.getData("text/plain").slice(0,t-r).split(""),_=s(),w=r;for(let P=0;P<t;++P)P>=r&&x.length>0&&(_[P]=x.shift(),w++);i(w),e(_)},m=v=>{v.key==="Backspace"?(v.preventDefault(),l(""),h()):v.key==="Delete"?(v.preventDefault(),l("")):v.key==="ArrowLeft"?(v.preventDefault(),h()):v.key==="ArrowRight"?(v.preventDefault(),c()):v.key!==" "&&v.key!=="Spacebar"&&v.key!=="Space"||v.preventDefault()},g=v=>{v.target instanceof HTMLInputElement&&l(v.target.value),c()};return(0,f.useEffect)(()=>{n.length===0&&i(0)},[n]),a("div",Object.assign({className:_e.passcodeInputWrapper},{children:Array.from(Array(t)).map((v,x)=>a(Ur,{name:"passcode",index:x,focus:r===x,digit:n[x],onKeyDown:m,onInput:g,onPaste:d,onFocus:()=>(_=>{i(_)})(x),disabled:o},x))}))},un=G(489),At={};At.setAttributes=it(),At.insert=n=>{window._hankoStyle=n},At.domAPI=rt(),At.insertStyleElement=st(),at()(un.A,At);var zr=un.A&&un.A.locals?un.A.locals:void 0,B=({children:n,hidden:t})=>t?null:a("p",Object.assign({part:"paragraph",className:zr.paragraph},{children:n})),No=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},Wr=n=>{let{t}=(0,f.useContext)(q.TranslateContext),{flowState:e}=Oe(n.state),{uiState:o,setUIState:r}=(0,f.useContext)(Ie),[i,s]=(0,f.useState)(),[c,h]=(0,f.useState)(e.payload.resend_after),[l,d]=(0,f.useState)([]),m=(0,f.useMemo)(()=>{var v;return((v=e.error)===null||v===void 0?void 0:v.code)==="passcode_max_attempts_reached"},[e]),g=(0,f.useCallback)(v=>No(void 0,void 0,void 0,function*(){return yield e.actions.verify_passcode.run({code:v})}),[e]);return(0,f.useEffect)(()=>{let v=i>0&&setInterval(()=>s(i-1),1e3);return()=>clearInterval(v)},[i]),(0,f.useEffect)(()=>{let v=c>0&&setInterval(()=>{h(c-1)},1e3);return()=>clearInterval(v)},[c]),(0,f.useEffect)(()=>{var v;c==0&&((v=e.error)===null||v===void 0?void 0:v.code)=="rate_limit_exceeded"&&r(x=>Object.assign(Object.assign({},x),{error:null}))},[c]),(0,f.useEffect)(()=>{d([]),e.payload.resend_after>=0&&h(e.payload.resend_after)},[e]),a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:t("headlines.loginPasscode")}),a(Se,{state:e}),a(B,{children:o.email?t("texts.enterPasscode",{emailAddress:o.email}):t("texts.enterPasscodeNoEmail")}),a(X,Object.assign({flowAction:e.actions.verify_passcode,onSubmit:v=>No(void 0,void 0,void 0,function*(){return v.preventDefault(),g(l.join(""))})},{children:[a(ho,{onInput:v=>{if(d(v),v.filter(x=>x!=="").length===6)return g(v.join(""))},passcodeDigits:l,numberOfInputs:6,disabled:i<=0||m}),a(ee,Object.assign({disabled:i<=0||m},{children:t("labels.continue")}))]}))]}),a(Ae,{children:[a(V,Object.assign({flowAction:e.actions.back,loadingSpinnerPosition:"right"},{children:t("labels.back")})),a(V,Object.assign({disabled:c>0,flowAction:e.actions.resend_passcode,loadingSpinnerPosition:"left"},{children:c>0?t("labels.passcodeResendAfter",{passcodeResendAfter:c}):t("labels.sendNewPasscode")}))]})]})},Fr=n=>{let{t}=(0,f.useContext)(q.TranslateContext),{flowState:e}=Oe(n.state);return a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:t("headlines.registerAuthenticator")}),a(Se,{state:e}),a(B,{children:t("texts.setupPasskey")}),a(X,Object.assign({flowAction:e.actions.webauthn_generate_creation_options},{children:a(ee,Object.assign({autofocus:!0,icon:"passkey"},{children:t("labels.registerAuthenticator")}))}))]}),a(Ae,Object.assign({hidden:!e.actions.skip.enabled&&!e.actions.back.enabled},{children:[a(V,Object.assign({loadingSpinnerPosition:"right",flowAction:e.actions.back},{children:t("labels.back")})),a(V,Object.assign({loadingSpinnerPosition:"left",flowAction:e.actions.skip},{children:t("labels.skip")}))]}))]})},Uo=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},Hr=n=>{let{t}=(0,f.useContext)(q.TranslateContext),{flowState:e}=Oe(n.state),[o,r]=(0,f.useState)(),[i,s]=(0,f.useState)(),c=(0,f.useMemo)(()=>a(V,Object.assign({flowAction:e.actions.continue_to_passcode_confirmation_recovery,loadingSpinnerPosition:"left"},{children:t("labels.forgotYourPassword")})),[e,t]),h=(0,f.useMemo)(()=>a(V,Object.assign({flowAction:e.actions.continue_to_login_method_chooser,loadingSpinnerPosition:"left"},{children:"Choose another method"})),[e]);return(0,f.useEffect)(()=>{let l=i>0&&setInterval(()=>s(i-1),1e3);return()=>clearInterval(l)},[i]),a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:t("headlines.loginPassword")}),a(Se,{state:e}),a(X,Object.assign({flowAction:e.actions.password_login,onSubmit:l=>Uo(void 0,void 0,void 0,function*(){return l.preventDefault(),e.actions.password_login.run({password:o})})},{children:[a(Le,{type:"password",flowInput:e.actions.password_login.inputs.password,autocomplete:"current-password",placeholder:t("labels.password"),onInput:l=>Uo(void 0,void 0,void 0,function*(){l.target instanceof HTMLInputElement&&r(l.target.value)}),autofocus:!0}),a(ee,Object.assign({disabled:i>0},{children:i>0?t("labels.passwordRetryAfter",{passwordRetryAfter:i}):t("labels.signIn")}))]})),e.actions.continue_to_login_method_chooser.enabled?c:null]}),a(Ae,{children:[a(V,Object.assign({flowAction:e.actions.back,loadingSpinnerPosition:"right"},{children:t("labels.back")})),e.actions.continue_to_login_method_chooser.enabled?h:c]})]})},zo=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},Br=n=>{let{t}=(0,f.useContext)(q.TranslateContext),{flowState:e}=Oe(n.state),[o,r]=(0,f.useState)();return a(xe,{children:[a(ce,{children:t("headlines.registerPassword")}),a(Se,{state:e}),a(B,{children:t("texts.passwordFormatHint",{minLength:e.actions.password_recovery.inputs.new_password.min_length,maxLength:72})}),a(X,Object.assign({flowAction:e.actions.password_recovery,onSubmit:i=>zo(void 0,void 0,void 0,function*(){return i.preventDefault(),e.actions.password_recovery.run({new_password:o})})},{children:[a(Le,{type:"password",autocomplete:"new-password",flowInput:e.actions.password_recovery.inputs.new_password,placeholder:t("labels.newPassword"),onInput:i=>zo(void 0,void 0,void 0,function*(){i.target instanceof HTMLInputElement&&r(i.target.value)}),autofocus:!0}),a(ee,{children:t("labels.continue")})]}))]})},qr=n=>{let{t}=(0,f.useContext)(q.TranslateContext),{flowState:e}=Oe(n.state);return a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:t("headlines.selectLoginMethod")}),a(Se,{flowError:e==null?void 0:e.error}),a(B,{children:t("texts.howDoYouWantToLogin")}),a(X,Object.assign({flowAction:e.actions.continue_to_passcode_confirmation},{children:a(ee,Object.assign({secondary:!0,icon:"mail"},{children:t("labels.passcode")}))})),a(X,Object.assign({flowAction:e.actions.continue_to_password_login},{children:a(ee,Object.assign({secondary:!0,icon:"password"},{children:t("labels.password")}))})),a(X,Object.assign({flowAction:e.actions.webauthn_generate_request_options},{children:a(ee,Object.assign({secondary:!0,icon:"passkey"},{children:t("labels.passkey")}))}))]}),a(Ae,{children:a(V,Object.assign({flowAction:e.actions.back,loadingSpinnerPosition:"right"},{children:t("labels.back")}))})]})},tn=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},Rr=n=>{var t;let{t:e}=(0,f.useContext)(q.TranslateContext),{init:o,uiState:r,setUIState:i,initialComponentName:s}=(0,f.useContext)(Ie),{flowState:c}=Oe(n.state),h=c.actions.register_login_identifier.inputs,l=!(!(h!=null&&h.email)||!(h!=null&&h.username)),[d,m]=(0,f.useState)(void 0),[g,v]=(0,f.useState)(null),[x,_]=(0,f.useState)(!1),[w,P]=(0,f.useState)(!1),N=(0,f.useMemo)(()=>!!c.actions.thirdparty_oauth.enabled,[c.actions]);return a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:e("headlines.signUp")}),a(Se,{state:c,error:d}),h?a(k.Fragment,{children:[a(X,Object.assign({flowAction:c.actions.register_login_identifier,onSubmit:j=>tn(void 0,void 0,void 0,function*(){return j.preventDefault(),yield c.actions.register_login_identifier.run({email:r.email,username:r.username})}),maxWidth:!0},{children:[h.username?a(Le,{markOptional:l,markError:l,type:"text",autoComplete:"username",autoCorrect:"off",flowInput:h.username,onInput:j=>{if(j.preventDefault(),j.target instanceof HTMLInputElement){let{value:D}=j.target;i(W=>Object.assign(Object.assign({},W),{username:D}))}},value:r.username,placeholder:e("labels.username")}):null,h.email?a(Le,{markOptional:l,markError:l,type:"email",autoComplete:"email",autoCorrect:"off",flowInput:h.email,onInput:j=>{if(j.preventDefault(),j.target instanceof HTMLInputElement){let{value:D}=j.target;i(W=>Object.assign(Object.assign({},W),{email:D}))}},value:r.email,placeholder:e("labels.email"),pattern:"^.*[^0-9]+$"}):null,a(ee,Object.assign({autofocus:!0},{children:e("labels.continue")}))]})),a(lo,Object.assign({hidden:!N},{children:e("labels.or")}))]}):null,c.actions.thirdparty_oauth.enabled?(t=c.actions.thirdparty_oauth.inputs.provider.allowed_values)===null||t===void 0?void 0:t.map(j=>a(X,Object.assign({flowAction:c.actions.thirdparty_oauth,onSubmit:D=>((W,U)=>tn(void 0,void 0,void 0,function*(){W.preventDefault(),v(U);let M=yield c.actions.thirdparty_oauth.run({provider:U,redirect_to:window.location.toString()},{dispatchAfterStateChangeEvent:!1});v(null),M.dispatchAfterStateChangeEvent()}))(D,j.value)},{children:a(ee,Object.assign({isLoading:j.value==g,secondary:!0,icon:j.value.startsWith("custom_")?"customProvider":j.value},{children:e("labels.signInWith",{provider:j.name})}))}),j.value)):null,c.actions.remember_me.enabled&&a(k.Fragment,{children:[a(Cn,{}),a(co,{required:!1,type:"checkbox",label:e("labels.staySignedIn"),checked:x,onChange:j=>tn(void 0,void 0,void 0,function*(){j.preventDefault();let D=yield c.actions.remember_me.run({remember_me:!x},{dispatchAfterStateChangeEvent:!1});_(W=>!W),D.dispatchAfterStateChangeEvent()})})]})]}),a(Ae,Object.assign({hidden:s!=="auth"},{children:[a("span",{hidden:!0}),a(V,Object.assign({onClick:j=>tn(void 0,void 0,void 0,function*(){j.preventDefault(),P(!0),o("login")}),loadingSpinnerPosition:"left",isLoading:w},{children:e("labels.alreadyHaveAnAccount")}))]}))]})},Wo=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},$r=n=>{let{t}=(0,f.useContext)(q.TranslateContext),{flowState:e}=Oe(n.state),[o,r]=(0,f.useState)();return a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:t("headlines.registerPassword")}),a(Se,{state:e}),a(B,{children:t("texts.passwordFormatHint",{minLength:e.actions.register_password.inputs.new_password.min_length,maxLength:72})}),a(X,Object.assign({flowAction:e.actions.register_password,onSubmit:i=>Wo(void 0,void 0,void 0,function*(){return i.preventDefault(),e.actions.register_password.run({new_password:o})})},{children:[a(Le,{type:"password",autocomplete:"new-password",flowInput:e.actions.register_password.inputs.new_password,placeholder:t("labels.newPassword"),onInput:i=>Wo(void 0,void 0,void 0,function*(){i.target instanceof HTMLInputElement&&r(i.target.value)}),autofocus:!0}),a(ee,{children:t("labels.continue")})]}))]}),a(Ae,Object.assign({hidden:!e.actions.back.enabled&&!e.actions.skip.enabled},{children:[a(V,Object.assign({loadingSpinnerPosition:"right",flowAction:e.actions.back},{children:t("labels.back")})),a(V,Object.assign({loadingSpinnerPosition:"left",flowAction:e.actions.skip},{children:t("labels.skip")}))]}))]})},pn=G(21),Et={};Et.setAttributes=it(),Et.insert=n=>{window._hankoStyle=n},Et.domAPI=rt(),Et.insertStyleElement=st(),at()(pn.A,Et);var $e=pn.A&&pn.A.locals?pn.A.locals:void 0,On=function({name:n,columnSelector:t,contentSelector:e,data:o=[],checkedItemID:r,setCheckedItemID:i,dropdown:s=!1}){let c=(0,f.useCallback)(d=>`${n}-${d}`,[n]),h=(0,f.useCallback)(d=>c(d)===r,[r,c]),l=d=>{if(!(d.target instanceof HTMLInputElement))return;let m=parseInt(d.target.value,10),g=c(m);i(g===r?null:g)};return a("div",Object.assign({className:$e.accordion},{children:o.map((d,m)=>a("div",Object.assign({className:$e.accordionItem},{children:[a("input",{type:"radio",className:$e.accordionInput,id:`${n}-${m}`,name:n,onClick:l,value:m,checked:h(m)}),a("label",Object.assign({className:K()($e.label,s&&$e.dropdown),for:`${n}-${m}`},{children:a("span",Object.assign({className:$e.labelText},{children:t(d,m)}))})),a("div",Object.assign({className:K()($e.accordionContent,s&&$e.dropdownContent)},{children:e(d,m)}))]}),m))}))},Pe=({children:n})=>a("h2",Object.assign({part:"headline2",className:K()(Sn.headline,Sn.grade2)},{children:n})),Pn=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},Kr=({checkedItemID:n,setCheckedItemID:t,flowState:e,onState:o})=>{let{t:r}=(0,f.useContext)(q.TranslateContext),i=(0,f.useMemo)(()=>!1,[]);return a(On,{name:"email-edit-dropdown",columnSelector:s=>{let c=a("span",Object.assign({className:$e.description},{children:s.is_verified?s.is_primary?a(k.Fragment,{children:[" -"," ",r("labels.primaryEmail")]}):null:a(k.Fragment,{children:[" -"," ",r("labels.unverifiedEmail")]})}));return s.is_primary?a(k.Fragment,{children:[a("b",{children:s.address}),c]}):a(k.Fragment,{children:[s.address,c]})},data:e.payload.user.emails,contentSelector:s=>{var c,h;return a(k.Fragment,{children:[s.is_primary?a(k.Fragment,{children:a(B,{children:[a(Pe,{children:r("headlines.isPrimaryEmail")}),r("texts.isPrimaryEmail")]})}):a(k.Fragment,{children:a(B,{children:[a(Pe,{children:r("headlines.setPrimaryEmail")}),r("texts.setPrimaryEmail"),a("br",{}),a(V,Object.assign({flowAction:e.actions.email_set_primary,onClick:l=>((d,m)=>Pn(void 0,void 0,void 0,function*(){d.preventDefault();let g=yield e.actions.email_set_primary.run({email_id:m},{dispatchAfterStateChangeEvent:!1});return o(g)}))(l,s.id),loadingSpinnerPosition:"right"},{children:r("labels.setAsPrimaryEmail")}))]})}),s.is_verified?a(k.Fragment,{children:a(B,{children:[a(Pe,{children:r("headlines.emailVerified")}),r("texts.emailVerified")]})}):a(k.Fragment,{children:a(B,{children:[a(Pe,{children:r("headlines.emailUnverified")}),r("texts.emailUnverified"),a("br",{}),a(V,Object.assign({flowAction:e.actions.email_verify,onClick:l=>((d,m)=>Pn(void 0,void 0,void 0,function*(){d.preventDefault();let g=yield e.actions.email_verify.run({email_id:m},{dispatchAfterStateChangeEvent:!1});return o(g)}))(l,s.id),loadingSpinnerPosition:"right"},{children:r("labels.verify")}))]})}),!((c=e.actions.email_delete.inputs.email_id.allowed_values)===null||c===void 0)&&c.map(l=>l.value).includes(s.id)?a(k.Fragment,{children:a(B,{children:[a(Pe,{children:r("headlines.emailDelete")}),r("texts.emailDelete"),a("br",{}),a(V,Object.assign({dangerous:!0,flowAction:e.actions.email_delete,onClick:l=>((d,m)=>Pn(void 0,void 0,void 0,function*(){d.preventDefault();let g=yield e.actions.email_delete.run({email_id:m},{dispatchAfterStateChangeEvent:!1});return o(g)}))(l,s.id),disabled:i,loadingSpinnerPosition:"right"},{children:r("labels.delete")}))]})}):null,((h=s.identities)===null||h===void 0?void 0:h.length)>0?a(k.Fragment,{children:a(B,{children:[a(Pe,{children:r("headlines.connectedAccounts")}),s.identities.map(l=>l.provider).join(", ")]})}):null]})},checkedItemID:n,setCheckedItemID:t})},Gr=({onCredentialNameSubmit:n,oldName:t,onBack:e,credential:o,credentialType:r,flowState:i})=>{let{t:s}=(0,f.useContext)(q.TranslateContext),[c,h]=(0,f.useState)(t);return a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:s(r==="security-key"?"headlines.renameSecurityKey":"headlines.renamePasskey")}),a(Se,{flowError:null}),a(B,{children:s(r==="security-key"?"texts.renameSecurityKey":"texts.renamePasskey")}),a(X,Object.assign({flowAction:i.actions.webauthn_credential_rename,onSubmit:l=>n(l,o.id,c)},{children:[a(Le,{type:"text",name:r,value:c,minLength:3,maxLength:32,required:!0,placeholder:s(r==="security-key"?"labels.newSecurityKeyName":"labels.newPasskeyName"),onInput:l=>{return d=void 0,m=void 0,v=function*(){l.target instanceof HTMLInputElement&&h(l.target.value)},new((g=void 0)||(g=Promise))(function(x,_){function w(j){try{N(v.next(j))}catch(D){_(D)}}function P(j){try{N(v.throw(j))}catch(D){_(D)}}function N(j){var D;j.done?x(j.value):(D=j.value,D instanceof g?D:new g(function(W){W(D)})).then(w,P)}N((v=v.apply(d,m||[])).next())});var d,m,g,v},autofocus:!0}),a(ee,{children:s("labels.save")})]}))]}),a(Ae,{children:a(V,Object.assign({onClick:e,loadingSpinnerPosition:"right"},{children:s("labels.back")}))})]})},Fo=({credentials:n=[],checkedItemID:t,setCheckedItemID:e,onBack:o,onCredentialNameSubmit:r,allowCredentialDeletion:i,credentialType:s,onCredentialDelete:c,flowState:h})=>{let{t:l}=(0,f.useContext)(q.TranslateContext),{setPage:d}=(0,f.useContext)(Ie),m=v=>{if(v.name)return v.name;let x=v.public_key.replace(/[\W_]/g,"");return`${s==="security-key"?"SecurityKey":"Passkey"}-${x.substring(x.length-7,x.length)}`},g=v=>new Date(v).toLocaleString();return a(On,{name:s==="security-key"?"security-key-edit-dropdown":"passkey-edit-dropdown",columnSelector:v=>m(v),data:n,contentSelector:v=>a(k.Fragment,{children:[a(B,{children:[a(Pe,{children:l(s==="security-key"?"headlines.renameSecurityKey":"headlines.renamePasskey")}),l(s==="security-key"?"texts.renameSecurityKey":"texts.renamePasskey"),a("br",{}),a(V,Object.assign({onClick:x=>((_,w,P)=>{_.preventDefault(),d(a(Gr,{oldName:m(w),credential:w,credentialType:P,onBack:o,onCredentialNameSubmit:r,flowState:h}))})(x,v,s),loadingSpinnerPosition:"right"},{children:l("labels.rename")}))]}),a(B,Object.assign({hidden:!i},{children:[a(Pe,{children:l(s==="security-key"?"headlines.deleteSecurityKey":"headlines.deletePasskey")}),l(s==="security-key"?"texts.deleteSecurityKey":"texts.deletePasskey"),a("br",{}),a(V,Object.assign({dangerous:!0,flowAction:h.actions.webauthn_credential_delete,onClick:x=>c(x,v.id),loadingSpinnerPosition:"right"},{children:l("labels.delete")}))]})),a(B,{children:[a(Pe,{children:l("headlines.lastUsedAt")}),v.last_used_at?g(v.last_used_at):"-"]}),a(B,{children:[a(Pe,{children:l("headlines.createdAt")}),g(v.created_at)]})]}),checkedItemID:t,setCheckedItemID:e})},Wt=({name:n,title:t,children:e,checkedItemID:o,setCheckedItemID:r})=>a(On,{dropdown:!0,name:n,columnSelector:()=>t,contentSelector:()=>a(k.Fragment,{children:e}),setCheckedItemID:r,checkedItemID:o,data:[{}]}),uo=({flowError:n})=>{let{t}=(0,f.useContext)(q.TranslateContext);return a(k.Fragment,{children:n?a("div",Object.assign({className:ua.errorMessage},{children:t(`flowErrors.${n==null?void 0:n.code}`)})):null})},Vr=({checkedItemID:n,setCheckedItemID:t,flowState:e,onState:o})=>{var r;let{t:i}=(0,f.useContext)(q.TranslateContext),{setUIState:s}=(0,f.useContext)(Ie),[c,h]=(0,f.useState)();return a(Wt,Object.assign({name:"email-create-dropdown",title:i("labels.addEmail"),checkedItemID:n,setCheckedItemID:t},{children:[a(uo,{flowError:(r=e.actions.email_create.inputs.email)===null||r===void 0?void 0:r.error}),a(X,Object.assign({flowAction:e.actions.email_create,onSubmit:l=>((d,m)=>{return g=void 0,v=void 0,_=function*(){d.preventDefault(),s(P=>Object.assign(Object.assign({},P),{email:m}));let w=yield e.actions.email_create.run({email:m},{dispatchAfterStateChangeEvent:!1});return o(w)},new((x=void 0)||(x=Promise))(function(w,P){function N(W){try{D(_.next(W))}catch(U){P(U)}}function j(W){try{D(_.throw(W))}catch(U){P(U)}}function D(W){var U;W.done?w(W.value):(U=W.value,U instanceof x?U:new x(function(M){M(U)})).then(N,j)}D((_=_.apply(g,v||[])).next())});var g,v,x,_})(l,c).then(()=>h(""))},{children:[a(Le,{markError:!0,type:"email",placeholder:i("labels.newEmailAddress"),onInput:l=>{l.preventDefault(),l.target instanceof HTMLInputElement&&h(l.target.value)},value:c,flowInput:e.actions.email_create.inputs.email}),a(ee,{children:i("labels.save")})]}))]}))},Ho=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},Zr=({checkedItemID:n,setCheckedItemID:t,onState:e,flowState:o})=>{var r,i,s;let{t:c}=(0,f.useContext)(q.TranslateContext),[h,l]=(0,f.useState)(""),d=o.actions.password_create.enabled?o.actions.password_create:o.actions.password_update;return a(Wt,Object.assign({name:"password-edit-dropdown",title:c(o.actions.password_create.enabled?"labels.setPassword":"labels.changePassword"),checkedItemID:n,setCheckedItemID:t},{children:[a(B,{children:c("texts.passwordFormatHint",{minLength:(r=d.inputs.password.min_length)===null||r===void 0?void 0:r.toString(10),maxLength:(i=d.inputs.password.max_length)===null||i===void 0?void 0:i.toString(10)})}),a(uo,{flowError:(s=o.actions.password_create.inputs.password)===null||s===void 0?void 0:s.error}),a(X,Object.assign({flowAction:d,onSubmit:m=>((g,v)=>Ho(void 0,void 0,void 0,function*(){g.preventDefault();let x=yield d.run({password:v},{dispatchAfterStateChangeEvent:!1});return e(x)}))(m,h).then(()=>l(""))},{children:[a(Le,{markError:!0,autoComplete:"new-password",placeholder:c("labels.newPassword"),type:"password",onInput:m=>{m.preventDefault(),m.target instanceof HTMLInputElement&&l(m.target.value)},value:h,flowInput:d.inputs.password}),a(ee,{children:c("labels.save")})]})),a(V,Object.assign({dangerous:!0,flowAction:o.actions.password_delete,onClick:m=>(g=>Ho(void 0,void 0,void 0,function*(){g.preventDefault();let v=yield o.actions.password_delete.run(null,{dispatchAfterStateChangeEvent:!1});return e(v)}))(m).then(()=>l("")),loadingSpinnerPosition:"right"},{children:c("labels.delete")}))]}))},Bo=({checkedItemID:n,setCheckedItemID:t,credentialType:e,flowState:o,onState:r})=>{let{t:i}=(0,f.useContext)(q.TranslateContext),s=ct.supported(),c=e=="passkey"?o.actions.webauthn_credential_create:o.actions.security_key_create;return a(Wt,Object.assign({name:e==="security-key"?"security-key-create-dropdown":"passkey-create-dropdown",title:i(e==="security-key"?"labels.createSecurityKey":"labels.createPasskey"),checkedItemID:n,setCheckedItemID:t},{children:[a(B,{children:i(e==="security-key"?"texts.securityKeySetUp":"texts.setupPasskey")}),a(X,Object.assign({onSubmit:h=>{return l=void 0,d=void 0,g=function*(){h.preventDefault();let v=yield c.run(null,{dispatchAfterStateChangeEvent:!1});return r(v)},new((m=void 0)||(m=Promise))(function(v,x){function _(N){try{P(g.next(N))}catch(j){x(j)}}function w(N){try{P(g.throw(N))}catch(j){x(j)}}function P(N){var j;N.done?v(N.value):(j=N.value,j instanceof m?j:new m(function(D){D(j)})).then(_,w)}P((g=g.apply(l,d||[])).next())});var l,d,m,g},flowAction:c},{children:a(ee,Object.assign({title:s?null:i("labels.webauthnUnsupported")},{children:i(e==="security-key"?"labels.createSecurityKey":"labels.createPasskey")}))}))]}))},qo=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},Yr=({checkedItemID:n,setCheckedItemID:t,flowState:e,onState:o})=>{var r,i;let{t:s}=(0,f.useContext)(q.TranslateContext),[c,h]=(0,f.useState)();return a(Wt,Object.assign({name:"username-edit-dropdown",title:s(e.payload.user.username?"labels.changeUsername":"labels.setUsername"),checkedItemID:n,setCheckedItemID:t},{children:[a(uo,{flowError:e.payload.user.username?(r=e.actions.username_update.inputs.username)===null||r===void 0?void 0:r.error:(i=e.actions.username_create.inputs.username)===null||i===void 0?void 0:i.error}),a(X,Object.assign({flowAction:e.payload.user.username?e.actions.username_update:e.actions.username_create,onSubmit:l=>qo(void 0,void 0,void 0,function*(){l.preventDefault();let d=e.payload.user.username?e.actions.username_update:e.actions.username_create,m=yield d.run({username:c},{dispatchAfterStateChangeEvent:!1});return o(m).then(()=>h(""))})},{children:[a(Le,{markError:!0,placeholder:s("labels.username"),type:"text",onInput:l=>{l.preventDefault(),l.target instanceof HTMLInputElement&&h(l.target.value)},value:c,flowInput:e.payload.user.username?e.actions.username_update.inputs.username:e.actions.username_create.inputs.username}),a(ee,{children:s("labels.save")})]})),a(V,Object.assign({flowAction:e.actions.username_delete,onClick:l=>qo(void 0,void 0,void 0,function*(){l.preventDefault();let d=yield e.actions.username_delete.run(null,{dispatchAfterStateChangeEvent:!1});return o(d).then(()=>h(""))}),dangerous:!0,loadingSpinnerPosition:"right"},{children:s("labels.delete")}))]}))},Jr=({state:n,onBack:t})=>{let{t:e}=(0,f.useContext)(q.TranslateContext);return a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:e("headlines.deleteAccount")}),a(Se,{flowError:null}),a(B,{children:e("texts.deleteAccount")}),a(X,Object.assign({flowAction:n.actions.account_delete},{children:[a(co,{required:!0,type:"checkbox",label:e("labels.deleteAccount")}),a(ee,{children:e("labels.delete")})]}))]}),a(Ae,{children:a(V,Object.assign({onClick:t},{children:e("labels.back")}))})]})},Qr=({checkedItemID:n,setCheckedItemID:t,flowState:e,onState:o})=>{let{t:r}=(0,f.useContext)(q.TranslateContext),i=s=>new Date(s).toLocaleString();return a(On,{name:"session-edit-dropdown",columnSelector:s=>{let c=a("b",{children:s.user_agent?s.user_agent:s.id}),h=s.current?a("span",Object.assign({className:$e.description},{children:a(k.Fragment,{children:[" -"," ",r("labels.currentSession")]})})):null;return a(k.Fragment,{children:[c,h]})},data:e.payload.sessions,contentSelector:s=>{var c,h,l;return a(k.Fragment,{children:[a(B,Object.assign({hidden:!s.ip_address},{children:[a(Pe,{children:r("headlines.ipAddress")}),s.ip_address]})),a(B,{children:[a(Pe,{children:r("headlines.lastUsed")}),i(s.last_used)]}),a(B,{children:[a(Pe,{children:r("headlines.createdAt")}),i(s.created_at)]}),!((l=(h=(c=e.actions.session_delete.inputs.session_id)===null||c===void 0?void 0:c.allowed_values)===null||h===void 0?void 0:h.map(d=>d.value))===null||l===void 0)&&l.includes(s.id)?a(B,{children:[a(Pe,{children:r("headlines.revokeSession")}),a(V,Object.assign({dangerous:!0,onClick:d=>((m,g)=>{return v=void 0,x=void 0,w=function*(){m.preventDefault();let P=yield e.actions.session_delete.run({session_id:g},{dispatchAfterStateChangeEvent:!1});return o(P)},new((_=void 0)||(_=Promise))(function(P,N){function j(U){try{W(w.next(U))}catch(M){N(M)}}function D(U){try{W(w.throw(U))}catch(M){N(M)}}function W(U){var M;U.done?P(U.value):(M=U.value,M instanceof _?M:new _(function(re){re(M)})).then(j,D)}W((w=w.apply(v,x||[])).next())});var v,x,_,w})(d,s.id),loadingSpinnerPosition:"right"},{children:r("labels.revoke")}))]}):null]})},checkedItemID:n,setCheckedItemID:t})},Ro=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},Xr=({checkedItemID:n,setCheckedItemID:t,flowState:e,onState:o})=>{var r,i,s,c;let{t:h}=(0,f.useContext)(q.TranslateContext),l=a("span",Object.assign({className:$e.description},{children:!((r=e.payload.user.mfa_config)===null||r===void 0)&&r.auth_app_set_up?a(k.Fragment,{children:[" -"," ",h("labels.configured")]}):null})),d=a(k.Fragment,{children:[h("labels.authenticatorAppManage")," ",l]});return a(Wt,Object.assign({name:"authenticator-app-manage-dropdown",title:d,checkedItemID:n,setCheckedItemID:t},{children:[a(Pe,{children:h(!((i=e.payload.user.mfa_config)===null||i===void 0)&&i.auth_app_set_up?"headlines.authenticatorAppAlreadySetUp":"headlines.authenticatorAppNotSetUp")}),a(B,{children:[h(!((s=e.payload.user.mfa_config)===null||s===void 0)&&s.auth_app_set_up?"texts.authenticatorAppAlreadySetUp":"texts.authenticatorAppNotSetUp"),a("br",{}),!((c=e.payload.user.mfa_config)===null||c===void 0)&&c.auth_app_set_up?a(V,Object.assign({flowAction:e.actions.otp_secret_delete,onClick:m=>Ro(void 0,void 0,void 0,function*(){m.preventDefault();let g=yield e.actions.otp_secret_delete.run(null,{dispatchAfterStateChangeEvent:!1});return o(g)}),loadingSpinnerPosition:"right",dangerous:!0},{children:h("labels.delete")})):a(V,Object.assign({flowAction:e.actions.continue_to_otp_secret_creation,onClick:m=>Ro(void 0,void 0,void 0,function*(){m.preventDefault();let g=yield e.actions.continue_to_otp_secret_creation.run(null,{dispatchAfterStateChangeEvent:!1});return o(g)}),loadingSpinnerPosition:"right"},{children:h("labels.authenticatorAppAdd")}))]})]}))},nn=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},pa=n=>{var t,e,o,r,i,s,c;let{t:h}=(0,f.useContext)(q.TranslateContext),{setPage:l}=(0,f.useContext)(Ie),{flowState:d}=Oe(n.state),[m,g]=(0,f.useState)(""),v=w=>nn(void 0,void 0,void 0,function*(){w!=null&&w.error||(g(null),yield new Promise(P=>setTimeout(P,360))),w.dispatchAfterStateChangeEvent()}),x=(w,P,N)=>nn(void 0,void 0,void 0,function*(){w.preventDefault();let j=yield d.actions.webauthn_credential_rename.run({passkey_id:P,passkey_name:N},{dispatchAfterStateChangeEvent:!1});return v(j)}),_=w=>(w.preventDefault(),l(a(pa,{state:d,enablePasskeys:n.enablePasskeys})),Promise.resolve());return a(xe,{children:[a(Se,{state:((t=d==null?void 0:d.error)===null||t===void 0?void 0:t.code)!=="form_data_invalid_error"?d:null}),d.actions.username_create.enabled||d.actions.username_update.enabled||d.actions.username_delete.enabled?a(k.Fragment,{children:[a(ce,{children:h("labels.username")}),d.payload.user.username?a(B,{children:a("b",{children:d.payload.user.username.username})}):null,a(B,{children:d.actions.username_create.enabled||d.actions.username_update.enabled?a(Yr,{onState:v,flowState:d,checkedItemID:m,setCheckedItemID:g}):null})]}):null,!((o=(e=d.payload)===null||e===void 0?void 0:e.user)===null||o===void 0)&&o.emails||d.actions.email_create.enabled?a(k.Fragment,{children:[a(ce,{children:h("headlines.profileEmails")}),a(B,{children:[a(Kr,{flowState:d,onState:v,checkedItemID:m,setCheckedItemID:g}),d.actions.email_create.enabled?a(Vr,{flowState:d,onState:v,checkedItemID:m,setCheckedItemID:g}):null]})]}):null,d.actions.password_create.enabled||d.actions.password_update.enabled?a(k.Fragment,{children:[a(ce,{children:h("headlines.profilePassword")}),a(B,{children:a(Zr,{flowState:d,onState:v,checkedItemID:m,setCheckedItemID:g})})]}):null,n.enablePasskeys&&(!((i=(r=d.payload)===null||r===void 0?void 0:r.user)===null||i===void 0)&&i.passkeys||d.actions.webauthn_credential_create.enabled)?a(k.Fragment,{children:[a(ce,{children:h("headlines.profilePasskeys")}),a(B,{children:[a(Fo,{flowState:d,onBack:_,onCredentialNameSubmit:x,onCredentialDelete:(w,P)=>nn(void 0,void 0,void 0,function*(){w.preventDefault();let N=yield d.actions.webauthn_credential_delete.run({passkey_id:P},{dispatchAfterStateChangeEvent:!1});return v(N)}),credentials:d.payload.user.passkeys,checkedItemID:m,setCheckedItemID:g,allowCredentialDeletion:!!d.actions.webauthn_credential_delete.enabled,credentialType:"passkey"}),d.actions.webauthn_credential_create.enabled?a(Bo,{flowState:d,onState:v,credentialType:"passkey",checkedItemID:m,setCheckedItemID:g}):null]})]}):null,!((s=d.payload.user.mfa_config)===null||s===void 0)&&s.security_keys_enabled?a(k.Fragment,{children:[a(ce,{children:h("headlines.securityKeys")}),a(B,{children:[a(Fo,{onBack:_,flowState:d,onCredentialNameSubmit:x,onCredentialDelete:(w,P)=>nn(void 0,void 0,void 0,function*(){w.preventDefault();let N=yield d.actions.security_key_delete.run({security_key_id:P},{dispatchAfterStateChangeEvent:!1});return v(N)}),credentials:d.payload.user.security_keys,checkedItemID:m,setCheckedItemID:g,allowCredentialDeletion:!!d.actions.security_key_delete.enabled,credentialType:"security-key"}),d.actions.security_key_create.enabled?a(Bo,{flowState:d,onState:v,credentialType:"security-key",checkedItemID:m,setCheckedItemID:g}):null]})]}):null,!((c=d.payload.user.mfa_config)===null||c===void 0)&&c.totp_enabled?a(k.Fragment,{children:[a(ce,{children:h("headlines.authenticatorApp")}),a(B,{children:a(Xr,{onState:v,flowState:d,checkedItemID:m,setCheckedItemID:g})})]}):null,d.payload.sessions?a(k.Fragment,{children:[a(ce,{children:h("headlines.profileSessions")}),a(B,{children:a(Qr,{flowState:d,onState:v,checkedItemID:m,setCheckedItemID:g})})]}):null,d.actions.account_delete.enabled?a(k.Fragment,{children:[a(Cn,{}),a(B,{children:a(lo,{})}),a(B,{children:a(X,Object.assign({onSubmit:w=>(w.preventDefault(),l(a(Jr,{onBack:_,state:d})),Promise.resolve()),flowAction:d.actions.account_delete},{children:a(ee,Object.assign({dangerous:!0},{children:h("headlines.deleteAccount")}))}))})]}):null]})},ei=pa,$o=({state:n,error:t})=>{let{t:e}=(0,f.useContext)(q.TranslateContext),{init:o,componentName:r}=(0,f.useContext)(Ie),[i,s]=(0,f.useState)(!1),c=(0,f.useCallback)(()=>o(r),[r,o]),{flowState:h}=Oe(n);return(0,f.useEffect)(()=>(addEventListener("hankoAuthSuccess",c),()=>{removeEventListener("hankoAuthSuccess",c)}),[c]),a(xe,{children:[a(ce,{children:e("headlines.error")}),a(Se,{state:h,error:t}),a(X,Object.assign({onSubmit:l=>{l.preventDefault(),s(!0),c()}},{children:a(ee,Object.assign({isLoading:i},{children:e("labels.continue")}))}))]})},Ko=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},ti=n=>{let{t}=(0,f.useContext)(q.TranslateContext),{flowState:e}=Oe(n.state),[o,r]=(0,f.useState)();return a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:t("headlines.createEmail")}),a(Se,{state:e}),a(X,Object.assign({onSubmit:i=>Ko(void 0,void 0,void 0,function*(){return i.preventDefault(),e.actions.email_address_set.run({email:o})}),flowAction:e.actions.email_address_set},{children:[a(Le,{type:"email",autoComplete:"email",autoCorrect:"off",flowInput:e.actions.email_address_set.inputs.email,onInput:i=>Ko(void 0,void 0,void 0,function*(){i.target instanceof HTMLInputElement&&r(i.target.value)}),placeholder:t("labels.email"),pattern:"^.*[^0-9]+$",value:o}),a(ee,{children:t("labels.continue")})]}))]}),a(Ae,Object.assign({hidden:!e.actions.skip.enabled},{children:[a("span",{hidden:!0}),a(V,Object.assign({flowAction:e.actions.skip,loadingSpinnerPosition:"left"},{children:t("labels.skip")}))]}))]})},Go=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},ni=n=>{let{t}=(0,f.useContext)(q.TranslateContext),{flowState:e}=Oe(n.state),[o,r]=(0,f.useState)();return a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:t("headlines.createUsername")}),a(Se,{state:e}),a(X,Object.assign({flowAction:e.actions.username_create,onSubmit:i=>Go(void 0,void 0,void 0,function*(){return i.preventDefault(),e.actions.username_create.run({username:o})})},{children:[a(Le,{type:"text",autoComplete:"username",autoCorrect:"off",flowInput:e.actions.username_create.inputs.username,onInput:i=>Go(void 0,void 0,void 0,function*(){i.target instanceof HTMLInputElement&&r(i.target.value)}),value:o,placeholder:t("labels.username")}),a(ee,{children:t("labels.continue")})]}))]}),a(Ae,Object.assign({hidden:!e.actions.skip.enabled},{children:[a("span",{hidden:!0}),a(V,Object.assign({flowAction:e.actions.skip,loadingSpinnerPosition:"left"},{children:t("labels.skip")}))]}))]})},oi=n=>{let{t}=(0,f.useContext)(q.TranslateContext),{flowState:e}=Oe(n.state);return a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:t("headlines.setupLoginMethod")}),a(Se,{flowError:e==null?void 0:e.error}),a(B,{children:t("texts.selectLoginMethodForFutureLogins")}),a(X,Object.assign({flowAction:e.actions.continue_to_passkey_registration},{children:a(ee,Object.assign({secondary:!0,icon:"passkey"},{children:t("labels.passkey")}))})),a(X,Object.assign({flowAction:e.actions.continue_to_password_registration},{children:a(ee,Object.assign({secondary:!0,icon:"password"},{children:t("labels.password")}))}))]}),a(Ae,Object.assign({hidden:!e.actions.back.enabled&&!e.actions.skip.enabled},{children:[a(V,Object.assign({loadingSpinnerPosition:"right",flowAction:e.actions.back},{children:t("labels.back")})),a(V,Object.assign({loadingSpinnerPosition:"left",flowAction:e.actions.skip},{children:t("labels.skip")}))]}))]})},Vo=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},ai=n=>{let{t}=(0,f.useContext)(q.TranslateContext),{flowState:e}=Oe(n.state),[o,r]=(0,f.useState)([]),i=(0,f.useCallback)(s=>Vo(void 0,void 0,void 0,function*(){return e.actions.otp_code_validate.run({otp_code:s})}),[e]);return(0,f.useEffect)(()=>{r([])},[e]),a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:t("headlines.otpLogin")}),a(Se,{state:e}),a(B,{children:t("texts.otpLogin")}),a(X,Object.assign({flowAction:e.actions.otp_code_validate,onSubmit:s=>Vo(void 0,void 0,void 0,function*(){return s.preventDefault(),i(o.join(""))})},{children:[a(ho,{onInput:s=>{if(r(s),s.filter(c=>c!=="").length===6)return i(s.join(""))},passcodeDigits:o,numberOfInputs:6}),a(ee,{children:t("labels.continue")})]}))]}),a(Ae,Object.assign({hidden:!e.actions.continue_to_login_security_key.enabled},{children:a(V,Object.assign({loadingSpinnerPosition:"right",flowAction:e.actions.continue_to_login_security_key},{children:t("labels.useAnotherMethod")}))}))]})},ri=n=>{let{t}=(0,f.useContext)(q.TranslateContext),{flowState:e}=Oe(n.state);return a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:t("headlines.securityKeyLogin")}),a(Se,{state:e}),a(B,{children:t("texts.securityKeyLogin")}),a(X,Object.assign({flowAction:e.actions.webauthn_generate_request_options},{children:a(ee,Object.assign({autofocus:!0,icon:"securityKey"},{children:t("labels.securityKeyUse")}))}))]}),a(Ae,Object.assign({hidden:!e.actions.continue_to_login_otp.enabled},{children:a(V,Object.assign({loadingSpinnerPosition:"right",flowAction:e.actions.continue_to_login_otp},{children:t("labels.useAnotherMethod")}))}))]})},ii=n=>{let{t}=(0,f.useContext)(q.TranslateContext),{flowState:e}=Oe(n.state),o=(0,f.useMemo)(()=>{let{actions:r}=e;return r.continue_to_security_key_creation.enabled&&!r.continue_to_otp_secret_creation.enabled?r.continue_to_security_key_creation:!r.continue_to_security_key_creation.enabled&&r.continue_to_otp_secret_creation.enabled?r.continue_to_otp_secret_creation:void 0},[e]);return a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:t("headlines.mfaSetUp")}),a(Se,{flowError:e==null?void 0:e.error}),a(B,{children:t("texts.mfaSetUp")}),o?a(X,Object.assign({flowAction:o},{children:a(ee,{children:t("labels.continue")})})):a(k.Fragment,{children:[a(X,Object.assign({flowAction:e.actions.continue_to_security_key_creation},{children:a(ee,Object.assign({secondary:!0,icon:"securityKey"},{children:t("labels.securityKey")}))})),a(X,Object.assign({flowAction:e.actions.continue_to_otp_secret_creation},{children:a(ee,Object.assign({secondary:!0,icon:"qrCodeScanner"},{children:t("labels.authenticatorApp")}))}))]})]}),a(Ae,{children:[a(V,Object.assign({loadingSpinnerPosition:"right",flowAction:e.actions.back},{children:t("labels.back")})),a(V,Object.assign({loadingSpinnerPosition:"left",flowAction:e.actions.skip},{children:t("labels.skip")}))]})]})},fn=G(560),It={};It.setAttributes=it(),It.insert=n=>{window._hankoStyle=n},It.domAPI=rt(),It.insertStyleElement=st(),at()(fn.A,It);var si=fn.A&&fn.A.locals?fn.A.locals:void 0,li=({children:n,text:t})=>{let{t:e}=(0,f.useContext)(q.TranslateContext),[o,r]=(0,f.useState)(!1);return a("section",Object.assign({className:Ut.clipboardContainer},{children:[a("div",{children:[n,"\xA0"]}),a("div",Object.assign({className:Ut.clipboardIcon,onClick:i=>{return s=void 0,c=void 0,l=function*(){i.preventDefault();try{yield navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),1500)}catch(d){console.error("Failed to copy: ",d)}},new((h=void 0)||(h=Promise))(function(d,m){function g(_){try{x(l.next(_))}catch(w){m(w)}}function v(_){try{x(l.throw(_))}catch(w){m(w)}}function x(_){var w;_.done?d(_.value):(w=_.value,w instanceof h?w:new h(function(P){P(w)})).then(g,v)}x((l=l.apply(s,c||[])).next())});var s,c,h,l}},{children:o?a("span",{children:["- ",e("labels.copied")]}):a(zt,{name:"copy",secondary:!0,size:13})}))]}))},ci=({src:n,secret:t})=>{let{t:e}=(0,f.useContext)(q.TranslateContext);return a("div",Object.assign({className:si.otpCreationDetails},{children:[a("img",{alt:"QR-Code",src:n}),a(Cn,{}),a(li,Object.assign({text:t},{children:e("texts.otpSecretKey")})),a("div",{children:t})]}))},Zo=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},di=n=>{let{t}=(0,f.useContext)(q.TranslateContext),{flowState:e}=Oe(n.state),[o,r]=(0,f.useState)([]),i=(0,f.useCallback)(s=>Zo(void 0,void 0,void 0,function*(){return e.actions.otp_code_verify.run({otp_code:s})}),[e]);return(0,f.useEffect)(()=>{var s;((s=e.error)===null||s===void 0?void 0:s.code)==="passcode_invalid"&&r([])},[e]),a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:t("headlines.otpSetUp")}),a(Se,{state:e}),a(B,{children:t("texts.otpScanQRCode")}),a(ci,{src:e.payload.otp_image_source,secret:e.payload.otp_secret}),a(B,{children:t("texts.otpEnterVerificationCode")}),a(X,Object.assign({flowAction:e.actions.otp_code_verify,onSubmit:s=>Zo(void 0,void 0,void 0,function*(){return s.preventDefault(),i(o.join(""))})},{children:[a(ho,{onInput:s=>{if(r(s),s.filter(c=>c!=="").length===6)return i(s.join(""))},passcodeDigits:o,numberOfInputs:6}),a(ee,{children:t("labels.continue")})]}))]}),a(Ae,{children:a(V,Object.assign({flowAction:e.actions.back,loadingSpinnerPosition:"right"},{children:t("labels.back")}))})]})},hi=n=>{let{t}=(0,f.useContext)(q.TranslateContext),{flowState:e}=Oe(n.state);return a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:t("headlines.securityKeySetUp")}),a(Se,{state:e}),a(B,{children:t("texts.securityKeySetUp")}),a(X,Object.assign({flowAction:e.actions.webauthn_generate_creation_options},{children:a(ee,Object.assign({autofocus:!0,icon:"securityKey"},{children:t("labels.createSecurityKey")}))}))]}),a(Ae,Object.assign({hidden:!e.actions.back.enabled},{children:a(V,Object.assign({loadingSpinnerPosition:"right",flowAction:e.actions.back},{children:t("labels.back")}))}))]})},ui=n=>{let{t}=(0,f.useContext)(q.TranslateContext),{flowState:e}=Oe(n.state);return a(k.Fragment,{children:[a(xe,{children:[a(ce,{children:t("headlines.trustDevice")}),a(Se,{flowError:e==null?void 0:e.error}),a(B,{children:t("texts.trustDevice")}),a(X,Object.assign({flowAction:e.actions.trust_device},{children:a(ee,{children:t("labels.trustDevice")})}))]}),a(Ae,{children:[a(V,Object.assign({flowAction:e.actions.back,loadingSpinnerPosition:"right"},{children:t("labels.back")})),a(V,Object.assign({flowAction:e.actions.skip,loadingSpinnerPosition:"left"},{children:t("labels.skip")}))]})]})},Yo=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},Ie=(0,k.createContext)(null),pi=n=>{var t,{lang:e,prefilledEmail:o,prefilledUsername:r,globalOptions:i,createWebauthnAbortSignal:s}=n,c=function(T,me){var C={};for(var S in T)Object.prototype.hasOwnProperty.call(T,S)&&me.indexOf(S)<0&&(C[S]=T[S]);if(T!=null&&typeof Object.getOwnPropertySymbols=="function"){var E=0;for(S=Object.getOwnPropertySymbols(T);E<S.length;E++)me.indexOf(S[E])<0&&Object.prototype.propertyIsEnumerable.call(T,S[E])&&(C[S[E]]=T[S[E]])}return C}(n,["lang","prefilledEmail","prefilledUsername","globalOptions","createWebauthnAbortSignal"]);let{hanko:h,injectStyles:l,hidePasskeyButtonOnLogin:d,translations:m,translationsLocation:g,fallbackLanguage:v}=i;h.setLang((e==null?void 0:e.toString())||v);let x=(0,f.useRef)(null),_=(0,f.useMemo)(()=>`${i.storageKey}_last_login`,[i.storageKey]),[w,P]=(0,f.useState)(c.componentName),[N,j]=(0,f.useState)((t=c.mode)!==null&&t!==void 0?t:"login"),D=(0,f.useMemo)(()=>({auth:N,login:"login",registration:"registration",profile:"profile",events:null}),[N]),W=(0,f.useMemo)(()=>a(Lr,{}),[]),[U,M]=(0,f.useState)(W),[,re]=(0,f.useState)(h),[oe,te]=(0,f.useState)(),[R,ue]=(0,f.useState)({email:o,username:r}),Ce=function(T,me){var C;(C=x.current)===null||C===void 0||C.dispatchEvent(new CustomEvent(T,{detail:me,bubbles:!1,composed:!0}))},fe=(0,f.useCallback)(T=>D[w]==T.flowName,[D,w,N]),Ee=T=>{M(a($o,{error:T instanceof ke?T:new ot(T)}))};(0,f.useMemo)(()=>h.onBeforeStateChange(({state:T})=>{fe(T)&&ue(me=>Object.assign(Object.assign({},me),{isDisabled:!0,error:void 0}))}),[h,fe]),(0,f.useEffect)(()=>h.onAfterStateChange(({state:T})=>Yo(void 0,void 0,void 0,function*(){var me;if(fe(T))switch(["onboarding_verify_passkey_attestation","webauthn_credential_verification","login_passkey","thirdparty"].includes(T.name)||ue(C=>Object.assign(Object.assign({},C),{isDisabled:!1})),T.name){case"login_init":M(a(Nr,{state:T})),T.passkeyAutofillActivation();break;case"passcode_confirmation":M(a(Wr,{state:T}));break;case"login_otp":M(a(ai,{state:T}));break;case"onboarding_create_passkey":M(a(Fr,{state:T}));break;case"login_password":M(a(Hr,{state:T}));break;case"login_password_recovery":M(a(Br,{state:T}));break;case"login_security_key":M(a(ri,{state:T}));break;case"mfa_method_chooser":M(a(ii,{state:T}));break;case"mfa_otp_secret_creation":M(a(di,{state:T}));break;case"mfa_security_key_creation":M(a(hi,{state:T}));break;case"login_method_chooser":M(a(qr,{state:T}));break;case"registration_init":M(a(Rr,{state:T}));break;case"password_creation":M(a($r,{state:T}));break;case"success":!((me=T.payload)===null||me===void 0)&&me.last_login&&localStorage.setItem(_,JSON.stringify(T.payload.last_login)),T.autoStep();break;case"profile_init":M(a(ei,{state:T,enablePasskeys:i.enablePasskeys}));break;case"error":M(a($o,{state:T}));break;case"onboarding_email":M(a(ti,{state:T}));break;case"onboarding_username":M(a(ni,{state:T}));break;case"credential_onboarding_chooser":M(a(oi,{state:T}));break;case"device_trust":M(a(ui,{state:T}))}})),[w,D]);let ie=(0,f.useCallback)(T=>Yo(void 0,void 0,void 0,function*(){ue(S=>Object.assign(Object.assign({},S),{isDisabled:!0}));let me=localStorage.getItem(_);me&&te(JSON.parse(me));let C={excludeAutoSteps:["success"],cacheKey:"hanko-auth-flow-state",dispatchAfterStateChangeEvent:!1};if(new URLSearchParams(window.location.search).get("saml_hint")==="idp_initiated")j("token_exchange"),yield h.createState("token_exchange",Object.assign(Object.assign({},C),{dispatchAfterStateChangeEvent:!0}));else{let S=yield h.createState(T,C);j(S.flowName),setTimeout(()=>S.dispatchAfterStateChangeEvent(),500)}}),[]),pe=(0,f.useCallback)(T=>{P(T);let me=D[T];me&&ie(me).catch(Ee)},[]);return(0,f.useEffect)(()=>pe(w),[]),(0,f.useEffect)(()=>{h.onUserDeleted(()=>{Ce("onUserDeleted")}),h.onSessionCreated(T=>{Ce("onSessionCreated",T)}),h.onSessionExpired(()=>{Ce("onSessionExpired")}),h.onUserLoggedOut(()=>{Ce("onUserLoggedOut")}),h.onBeforeStateChange(T=>{Ce("onBeforeStateChange",T)}),h.onAfterStateChange(T=>{Ce("onAfterStateChange",T)})},[h]),(0,f.useMemo)(()=>{let T=()=>{pe(w)};["auth","login","registration"].includes(w)?(h.onUserLoggedOut(T),h.onSessionExpired(T),h.onUserDeleted(T)):w==="profile"&&h.onSessionCreated(T)},[w,h,pe]),a(Ie.Provider,Object.assign({value:{init:pe,initialComponentName:c.componentName,setUIState:ue,uiState:R,hanko:h,setHanko:re,lang:(e==null?void 0:e.toString())||v,prefilledEmail:o,prefilledUsername:r,componentName:w,setComponentName:P,hidePasskeyButtonOnLogin:d,page:U,setPage:M,lastLogin:oe,isOwnFlow:fe}},{children:a(q.TranslateProvider,Object.assign({translations:m,fallbackLang:v,root:g},{children:a(mr,Object.assign({ref:x},{children:w!=="events"?a(k.Fragment,{children:[l?a("style",{dangerouslySetInnerHTML:{__html:window._hankoStyle.innerHTML}}):null,U]}):null}))}))}))},fi={en:G(6).en},fa=function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function s(l){try{h(o.next(l))}catch(d){i(d)}}function c(l){try{h(o.throw(l))}catch(d){i(d)}}function h(l){var d;l.done?r(l.value):(d=l.value,d instanceof e?d:new e(function(m){m(d)})).then(s,c)}h((o=o.apply(n,t||[])).next())})},nt={},Ft=(n,t)=>a(pi,Object.assign({componentName:n,globalOptions:nt,createWebauthnAbortSignal:wi},t)),mi=n=>Ft("auth",n),vi=n=>Ft("login",n),gi=n=>Ft("registration",n),bi=n=>Ft("profile",n),yi=n=>Ft("events",n),on=new AbortController,wi=()=>(on&&on.abort(),on=new AbortController,on.signal),Tt=({tagName:n,entryComponent:t,shadow:e=!0,observedAttributes:o})=>fa(void 0,void 0,void 0,function*(){customElements.get(n)||function(r,i,s,c){function h(){var l=Reflect.construct(HTMLElement,[],h);return l._vdomComponent=r,l._root=c&&c.shadow?l.attachShadow({mode:"open"}):l,l}(h.prototype=Object.create(HTMLElement.prototype)).constructor=h,h.prototype.connectedCallback=Ga,h.prototype.attributeChangedCallback=Va,h.prototype.disconnectedCallback=Za,s=s||r.observedAttributes||Object.keys(r.propTypes||{}),h.observedAttributes=s,s.forEach(function(l){Object.defineProperty(h.prototype,l,{get:function(){var d,m,g,v;return(d=(m=this._vdom)==null||(g=m.props)==null?void 0:g[l])!=null?d:(v=this._props)==null?void 0:v[l]},set:function(d){this._vdom?this.attributeChangedCallback(l,null,d):(this._props||(this._props={}),this._props[l]=d,this.connectedCallback());var m=typeof d;d!=null&&m!=="string"&&m!=="boolean"&&m!=="number"||this.setAttribute(l,d)}})}),customElements.define(i||r.tagName||r.displayName||r.name,h)}(t,n,o,{shadow:e})}),_i=(n,t={})=>fa(void 0,void 0,void 0,function*(){let e=["api","lang","prefilled-email","entry","mode"];return t=Object.assign({shadow:!0,injectStyles:!0,enablePasskeys:!0,hidePasskeyButtonOnLogin:!1,translations:null,translationsLocation:"/i18n",fallbackLanguage:"en",storageKey:"hanko",sessionCheckInterval:3e4},t),nt.hanko=new xn(n,{cookieName:t.storageKey,cookieDomain:t.cookieDomain,cookieSameSite:t.cookieSameSite,localStorageKey:t.storageKey,sessionCheckInterval:t.sessionCheckInterval,sessionTokenLocation:t.sessionTokenLocation}),nt.injectStyles=t.injectStyles,nt.enablePasskeys=t.enablePasskeys,nt.hidePasskeyButtonOnLogin=t.hidePasskeyButtonOnLogin,nt.translations=t.translations||fi,nt.translationsLocation=t.translationsLocation,nt.fallbackLanguage=t.fallbackLanguage,nt.storageKey=t.storageKey,yield Promise.all([Tt(Object.assign(Object.assign({},t),{tagName:"hanko-auth",entryComponent:mi,observedAttributes:e})),Tt(Object.assign(Object.assign({},t),{tagName:"hanko-login",entryComponent:vi,observedAttributes:e})),Tt(Object.assign(Object.assign({},t),{tagName:"hanko-registration",entryComponent:gi,observedAttributes:e})),Tt(Object.assign(Object.assign({},t),{tagName:"hanko-profile",entryComponent:bi,observedAttributes:e.filter(o=>["api","lang"].includes(o))})),Tt(Object.assign(Object.assign({},t),{tagName:"hanko-events",entryComponent:yi,observedAttributes:[]}))]),{hanko:nt.hanko}}),Yl=J.rc,Jl=J.Kj,Ql=J.fK,Xl=J.tJ,ec=J.Z7,tc=J.qQ,nc=J.I4,oc=J.O8,ac=J.Qq,rc=J.ku,ic=J.ls,sc=J.bO,lc=J.yv,cc=J.AT,dc=J.m_,hc=J.KG,uc=J.Wj,pc=J.DH,fc=J.kf,mc=J.Uw,vc=J.oY,gc=J.Wg,bc=J.AC,yc=J.D_,wc=J.jx,_c=J.nX,kc=J.Nx,xc=J.Sd,ma=J.kz,Sc=J.fX,Cc=J.qA,Oc=J.tz,Ac=J.gN;var va='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="256" width="256" xmlns:xlink="http://www.w3.org/1999/xlink">%0D%0A    <defs>%0D%0A        <linearGradient id="c">%0D%0A            <stop stop-color="%232d3335" offset="0"/>%0D%0A            <stop stop-color="%234c464a" offset=".5"/>%0D%0A            <stop stop-color="%23384042" offset="1"/>%0D%0A        </linearGradient>%0D%0A        <linearGradient id="a">%0D%0A            <stop offset="0"/>%0D%0A            <stop stop-opacity="0" offset="1"/>%0D%0A        </linearGradient>%0D%0A        <linearGradient id="u" y2="-179.97" xlink:href="%23a" gradientUnits="userSpaceOnUse" x2="9" y1="-94.672" x1="94.25"/>%0D%0A        <linearGradient id="v" y2="-30.438" xlink:href="%23a" gradientUnits="userSpaceOnUse" x2="35.75" y1="-114.44" x1="50.75"/>%0D%0A        <linearGradient id="w" y2="-74.625" xlink:href="%23a" gradientUnits="userSpaceOnUse" x2="115.25" y1="-163.12" x1="77.625"/>%0D%0A        <linearGradient id="x" y2="7.063" xlink:href="%23a" gradientUnits="userSpaceOnUse" x2="125.72" y1="-50.438" x1="56.5"/>%0D%0A        <linearGradient id="y" y2="-146.8" xlink:href="%23a" gradientUnits="userSpaceOnUse" x2="180.75" y1="-163.3" x1="35"/>%0D%0A        <linearGradient id="z" y2="-41.609" xlink:href="%23a" gradientUnits="userSpaceOnUse" x2="179" y1="-141.11" x1="57"/>%0D%0A        <linearGradient id="A" y2="39.75" xlink:href="%23a" gradientUnits="userSpaceOnUse" x2="208.25" y1="-26.5" x1="156"/>%0D%0A        <linearGradient id="B" y2="-77.297" xlink:href="%23a" gradientUnits="userSpaceOnUse" x2="235" y1="-169.3" x1="142.75"/>%0D%0A        <linearGradient id="m" y2="-113.72" xlink:href="%23b" gradientUnits="userSpaceOnUse" x2="166.5" y1="-161.36" x1="214.25"/>%0D%0A        <linearGradient id="b">%0D%0A            <stop stop-color="%23fff" offset="0"/>%0D%0A            <stop stop-color="%23fff" stop-opacity="0" offset="1"/>%0D%0A        </linearGradient>%0D%0A        <linearGradient id="n" y2="-62.469" xlink:href="%23b" gradientUnits="userSpaceOnUse" x2="57.656" y1="-126.5" x1="53.25"/>%0D%0A        <linearGradient id="o" y2="-17.125" xlink:href="%23b" gradientUnits="userSpaceOnUse" x2="75.719" y1="6.625" x1="39.5"/>%0D%0A        <linearGradient id="p" y2="-121.44" xlink:href="%23b" gradientUnits="userSpaceOnUse" x2="85.312" y1="-162.34" x1="102"/>%0D%0A        <linearGradient id="q" y2="-14.75" xlink:href="%23b" gradientUnits="userSpaceOnUse" x2="63.5" y1="-78.094" x1="117.75"/>%0D%0A        <linearGradient id="r" y2="-60.75" xlink:href="%23b" gradientUnits="userSpaceOnUse" x2="133.94" y1="-125.12" x1="180.69"/>%0D%0A        <linearGradient id="s" y2="33.375" xlink:href="%23b" gradientUnits="userSpaceOnUse" x2="130.22" y1="-23.5" x1="170.75"/>%0D%0A        <linearGradient id="t" y2="-5.656" xlink:href="%23b" gradientUnits="userSpaceOnUse" y1="-76" x2="181.75" x1="213.5"/>%0D%0A        <linearGradient id="l" y2="-213.25" xlink:href="%23a" gradientUnits="userSpaceOnUse" x2="9" gradientTransform="translate(0 -10)" y1="72.064" x1="210.17"/>%0D%0A        <linearGradient id="M" y2="150.38" xlink:href="%23c" gradientUnits="userSpaceOnUse" x2="133" gradientTransform="matrix(-1 0 0 1 46 0)" y1="150.38" x1="123"/>%0D%0A        <linearGradient id="L" y2="143.36" xlink:href="%23c" gradientUnits="userSpaceOnUse" x2="130.88" gradientTransform="translate(-210)" y1="134.36" x1="128"/>%0D%0A        <linearGradient id="O" y2="150.38" gradientUnits="userSpaceOnUse" y1="150.38" gradientTransform="matrix(-2 0 0 1.7699 174 -86.65)" x2="133" x1="123">%0D%0A            <stop stop-color="%232d3335" offset="0"/>%0D%0A            <stop stop-color="%234c464a" offset=".5"/>%0D%0A            <stop stop-color="%23384042" offset="1"/>%0D%0A        </linearGradient>%0D%0A        <linearGradient id="N" y2="186.5" gradientUnits="userSpaceOnUse" x2="136" gradientTransform="translate(-210)" y1="186.5" x1="120">%0D%0A            <stop stop-color="%23f9e295" offset="0"/>%0D%0A            <stop stop-color="%23f7dd84" offset=".125"/>%0D%0A            <stop stop-color="%23fff" offset=".206"/>%0D%0A            <stop stop-color="%23f4ce51" offset=".301"/>%0D%0A            <stop stop-color="%23f9e7aa" offset=".341"/>%0D%0A            <stop stop-color="%23efbb0e" offset="1"/>%0D%0A        </linearGradient>%0D%0A        <linearGradient id="P" y2="186.5" gradientUnits="userSpaceOnUse" y1="186.5" gradientTransform="translate(-210 67)" x2="136" x1="120">%0D%0A            <stop stop-color="%23f9e295" offset="0"/>%0D%0A            <stop stop-color="%23f7dd84" offset=".125"/>%0D%0A            <stop stop-color="%23fff" offset=".206"/>%0D%0A            <stop stop-color="%23f4ce51" offset=".301"/>%0D%0A            <stop stop-color="%23f9e7aa" offset=".341"/>%0D%0A            <stop stop-color="%23efbb0e" offset="1"/>%0D%0A        </linearGradient>%0D%0A        <linearGradient id="J" y2="186.5" gradientUnits="userSpaceOnUse" x2="136" gradientTransform="rotate(45 104.976 51.258) scale(1.39197)" y1="186.5" x1="120">%0D%0A            <stop stop-color="%23f9e295" offset="0"/>%0D%0A            <stop stop-color="%23f7dd84" offset=".125"/>%0D%0A            <stop stop-color="%23fff" offset=".206"/>%0D%0A            <stop stop-color="%23f4ce51" offset=".301"/>%0D%0A            <stop stop-color="%23f9e7aa" offset=".341"/>%0D%0A            <stop stop-color="%23efbb0e" offset="1"/>%0D%0A        </linearGradient>%0D%0A        <linearGradient id="U" y2="150.38" gradientUnits="userSpaceOnUse" x2="133" gradientTransform="rotate(-135 332.789 -39.72) scale(2.7839 -2.4637)" y1="150.38" x1="123">%0D%0A            <stop stop-color="%232d3335" offset="0"/>%0D%0A            <stop stop-color="%234c464a" offset=".5"/>%0D%0A            <stop stop-color="%23384042" offset="1"/>%0D%0A        </linearGradient>%0D%0A        <linearGradient id="T" y2="186.5" gradientUnits="userSpaceOnUse" x2="136" gradientTransform="rotate(45 217.552 97.892) scale(1.39197)" y1="186.5" x1="120">%0D%0A            <stop stop-color="%23f9e295" offset="0"/>%0D%0A            <stop stop-color="%23f7dd84" offset=".125"/>%0D%0A            <stop stop-color="%23fff" offset=".206"/>%0D%0A            <stop stop-color="%23f4ce51" offset=".301"/>%0D%0A            <stop stop-color="%23f9e7aa" offset=".341"/>%0D%0A            <stop stop-color="%23efbb0e" offset="1"/>%0D%0A        </linearGradient>%0D%0A        <linearGradient id="S" y2="150.38" xlink:href="%23c" gradientUnits="userSpaceOnUse" x2="133" gradientTransform="scale(-1.39197 1.39197) rotate(-45 -28.292 379.342)" y1="150.38" x1="123"/>%0D%0A        <linearGradient id="R" y2="143.36" xlink:href="%23c" gradientUnits="userSpaceOnUse" x2="130.88" gradientTransform="rotate(45 217.552 97.892) scale(1.39197)" y1="134.36" x1="128"/>%0D%0A        <linearGradient id="V" y2="150.38" xlink:href="%23a" gradientUnits="userSpaceOnUse" y1="167.73" gradientTransform="rotate(-135 332.789 -39.72) scale(2.7839 -2.4637)" x2="133" x1="108"/>%0D%0A        <linearGradient id="W" y2="137.2" gradientUnits="userSpaceOnUse" x2="179.96" gradientTransform="translate(0 -10)" y1="29.815" x1="126.64">%0D%0A            <stop stop-color="%23fff" offset="0"/>%0D%0A            <stop stop-color="%23fff" stop-opacity="0" offset="1"/>%0D%0A        </linearGradient>%0D%0A        <linearGradient id="Z" y2="137.2" gradientUnits="userSpaceOnUse" y1="29.815" gradientTransform="matrix(-.50295 .1984 .1972 -.43254 276.16 123.42)" x2="179.96" x1="126.64">%0D%0A            <stop stop-color="%23fff" offset="0"/>%0D%0A            <stop stop-color="%23fff" stop-opacity="0" offset="1"/>%0D%0A        </linearGradient>%0D%0A        <linearGradient id="G" y2="-213.25" gradientUnits="userSpaceOnUse" x2="9" gradientTransform="translate(0 192)" y1="72.064" x1="210.17">%0D%0A            <stop offset="0"/>%0D%0A            <stop stop-opacity="0" offset="1"/>%0D%0A        </linearGradient>%0D%0A        <linearGradient id="h" y2="4.302" gradientUnits="userSpaceOnUse" x2="122" y1="245.45" x1="122">%0D%0A            <stop offset="0"/>%0D%0A            <stop stop-opacity="0" offset="1"/>%0D%0A        </linearGradient>%0D%0A        <linearGradient id="e" y2="-213.25" gradientUnits="userSpaceOnUse" x2="9" gradientTransform="matrix(1 -.08088 0 1 0 203.06)" y1="72.064" x1="210.17">%0D%0A            <stop offset="0"/>%0D%0A            <stop stop-opacity="0" offset="1"/>%0D%0A        </linearGradient>%0D%0A        <clipPath id="j" clipPathUnits="userSpaceOnUse">%0D%0A            <path fill="%23ceeeab" d="M9 12.25s7.5 13 11.75 27.75S27 65.5 27 65.5s-5.5 12.75-8.25 24.75-5.75 23-5.75 23 5.75 16 9.25 30S26 167.5 26 167.5s-4 10.25-7.5 24.25-5 30.75-5 30.75 9.25-2 28.5 1.25 32.25 6 32.25 6 12.75-2.75 24-6.25 16.25-6.5 16.25-6.5 5.5.5 22.5 6.25 29.25 8.5 29.25 8.5 13-2.75 26-5.75 26.5-8 26.5-8-.75-5 4.25-24.5 8.75-28 8.75-28-.5-4.5-3.75-19.75S218 116 218 116s1.75-10.5 6.75-23.75S235 65.5 235 65.5s-4.75-15.25-7.5-29.75S219.25 10 219.25 10 195 19 187.5 20.5s-21 5.25-21 5.25-9.75-4.25-22-8.5-29.75-5.5-29.75-5.5-3.25 3.5-22 8-27.5 5.75-27.5 5.75-18.5-9-31.5-11.5-24-2-24.75-1.75z"/>%0D%0A        </clipPath>%0D%0A        <clipPath id="k" clipPathUnits="userSpaceOnUse">%0D%0A            <path fill="%23ceeeab" d="M9 12.25s7.5 13 11.75 27.75S27 65.5 27 65.5s-5.5 12.75-8.25 24.75-5.75 23-5.75 23 5.75 16 9.25 30S26 167.5 26 167.5s-4 10.25-7.5 24.25-5 30.75-5 30.75 9.25-2 28.5 1.25 32.25 6 32.25 6 12.75-2.75 24-6.25 16.25-6.5 16.25-6.5 5.5.5 22.5 6.25 29.25 8.5 29.25 8.5 13-2.75 26-5.75 26.5-8 26.5-8-.75-5 4.25-24.5 8.75-28 8.75-28-.5-4.5-3.75-19.75S218 116 218 116s1.75-10.5 6.75-23.75S235 65.5 235 65.5s-4.75-15.25-7.5-29.75S219.25 10 219.25 10 195 19 187.5 20.5s-21 5.25-21 5.25-9.75-4.25-22-8.5-29.75-5.5-29.75-5.5-3.25 3.5-22 8-27.5 5.75-27.5 5.75-18.5-9-31.5-11.5-24-2-24.75-1.75z"/>%0D%0A        </clipPath>%0D%0A        <clipPath id="i" clipPathUnits="userSpaceOnUse">%0D%0A            <path fill="%23ceeeab" d="M9 12.25s7.5 13 11.75 27.75S27 65.5 27 65.5s-5.5 12.75-8.25 24.75-5.75 23-5.75 23 5.75 16 9.25 30S26 167.5 26 167.5s-4 10.25-7.5 24.25-5 30.75-5 30.75 9.25-2 28.5 1.25 32.25 6 32.25 6 12.75-2.75 24-6.25 16.25-6.5 16.25-6.5 5.5.5 22.5 6.25 29.25 8.5 29.25 8.5 13-2.75 26-5.75 26.5-8 26.5-8-.75-5 4.25-24.5 8.75-28 8.75-28-.5-4.5-3.75-19.75S218 116 218 116s1.75-10.5 6.75-23.75S235 65.5 235 65.5s-4.75-15.25-7.5-29.75S219.25 10 219.25 10 195 19 187.5 20.5s-21 5.25-21 5.25-9.75-4.25-22-8.5-29.75-5.5-29.75-5.5-3.25 3.5-22 8-27.5 5.75-27.5 5.75-18.5-9-31.5-11.5-24-2-24.75-1.75z"/>%0D%0A        </clipPath>%0D%0A        <clipPath id="D" clipPathUnits="userSpaceOnUse">%0D%0A            <path fill="%23ceeeab" d="M9 12.25s7.5 13 11.75 27.75S27 65.5 27 65.5s-5.5 12.75-8.25 24.75-5.75 23-5.75 23 5.75 16 9.25 30S26 167.5 26 167.5s-4 10.25-7.5 24.25-5 30.75-5 30.75 9.25-2 28.5 1.25 32.25 6 32.25 6 12.75-2.75 24-6.25 16.25-6.5 16.25-6.5 5.5.5 22.5 6.25 29.25 8.5 29.25 8.5 13-2.75 26-5.75 26.5-8 26.5-8-.75-5 4.25-24.5 8.75-28 8.75-28-.5-4.5-3.75-19.75S218 116 218 116s1.75-10.5 6.75-23.75S235 65.5 235 65.5s-4.75-15.25-7.5-29.75S219.25 10 219.25 10 195 19 187.5 20.5s-21 5.25-21 5.25-9.75-4.25-22-8.5-29.75-5.5-29.75-5.5-3.25 3.5-22 8-27.5 5.75-27.5 5.75-18.5-9-31.5-11.5-24-2-24.75-1.75z"/>%0D%0A        </clipPath>%0D%0A        <clipPath id="E" clipPathUnits="userSpaceOnUse">%0D%0A            <path fill="%23ceeeab" d="M9 12.25s7.5 13 11.75 27.75S27 65.5 27 65.5s-5.5 12.75-8.25 24.75-5.75 23-5.75 23 5.75 16 9.25 30S26 167.5 26 167.5s-4 10.25-7.5 24.25-5 30.75-5 30.75 9.25-2 28.5 1.25 32.25 6 32.25 6 12.75-2.75 24-6.25 16.25-6.5 16.25-6.5 5.5.5 22.5 6.25 29.25 8.5 29.25 8.5 13-2.75 26-5.75 26.5-8 26.5-8-.75-5 4.25-24.5 8.75-28 8.75-28-.5-4.5-3.75-19.75S218 116 218 116s1.75-10.5 6.75-23.75S235 65.5 235 65.5s-4.75-15.25-7.5-29.75S219.25 10 219.25 10 195 19 187.5 20.5s-21 5.25-21 5.25-9.75-4.25-22-8.5-29.75-5.5-29.75-5.5-3.25 3.5-22 8-27.5 5.75-27.5 5.75-18.5-9-31.5-11.5-24-2-24.75-1.75z"/>%0D%0A        </clipPath>%0D%0A        <clipPath id="F" clipPathUnits="userSpaceOnUse">%0D%0A            <path fill="%23ceeeab" d="M9 12.25s7.5 13 11.75 27.75S27 65.5 27 65.5s-5.5 12.75-8.25 24.75-5.75 23-5.75 23 5.75 16 9.25 30S26 167.5 26 167.5s-4 10.25-7.5 24.25-5 30.75-5 30.75 9.25-2 28.5 1.25 32.25 6 32.25 6 12.75-2.75 24-6.25 16.25-6.5 16.25-6.5 5.5.5 22.5 6.25 29.25 8.5 29.25 8.5 13-2.75 26-5.75 26.5-8 26.5-8-.75-5 4.25-24.5 8.75-28 8.75-28-.5-4.5-3.75-19.75S218 116 218 116s1.75-10.5 6.75-23.75S235 65.5 235 65.5s-4.75-15.25-7.5-29.75S219.25 10 219.25 10 195 19 187.5 20.5s-21 5.25-21 5.25-9.75-4.25-22-8.5-29.75-5.5-29.75-5.5-3.25 3.5-22 8-27.5 5.75-27.5 5.75-18.5-9-31.5-11.5-24-2-24.75-1.75z"/>%0D%0A        </clipPath>%0D%0A        <clipPath id="C" clipPathUnits="userSpaceOnUse">%0D%0A            <path d="M123.62 141.06c20.832 20.243 54.607 19.289 75.439-2.132s20.832-55.196 0-75.439-54.607-19.289-75.439 2.132-20.832 55.196 0 75.439z" fill="url(%23d)"/>%0D%0A        </clipPath>%0D%0A        <clipPath id="H" clipPathUnits="userSpaceOnUse">%0D%0A            <path opacity=".039" d="M9 22.578s7.5 12.393 11.75 26.8C25 63.784 27 74.373 27 74.373s-5.5 13.195-8.25 25.417C16 112.01 13 123.25 13 123.25s5.75 15.535 9.25 29.252S26 176.449 26 176.449s-4 10.574-7.5 24.857-5 31.154-5 31.154 9.25-2.748 28.5-1.055 32.25 3.392 32.25 3.392 12.75-3.782 24-8.191 16.25-7.815 16.25-7.815 5.5.055 22.5 4.43c17 4.376 29.25 6.135 29.25 6.135s13-3.802 26-7.853 26.5-10.143 26.5-10.143-.75-4.94 4.25-24.844 8.75-28.708 8.75-28.708-.514-4.455-3.75-19.447c-1.75-8.108-2.25-4.068-2.25-4.068s16.264-26.155 16.5-40.334c.25-15.02-7.25-36.413-7.25-36.413s-4.75-14.866-7.5-29.143c-2.75-14.278-8.25-25.083-8.25-25.083S195 14.281 187.5 16.388c-7.5 2.107-21 6.948-21 6.948s-9.75-3.461-22-6.72c-12.25-3.26-29.75-3.094-29.75-3.094s-3.25 3.763-22 9.78c-18.75 6.016-27.5 7.973-27.5 7.973s-18.5-7.504-31.5-8.952-24-.06-24.75.252z" fill="url(%23e)"/>%0D%0A        </clipPath>%0D%0A        <radialGradient id="K" gradientUnits="userSpaceOnUse" cy="86" cx="128" gradientTransform="matrix(1.0213 0 0 -1.0213 -212.72 173.83)" r="47">%0D%0A            <stop stop-color="%23d0e9f2" stop-opacity="0" offset="0"/>%0D%0A            <stop stop-color="%23d0e9f2" stop-opacity="0" offset=".839"/>%0D%0A            <stop stop-color="%23d0e9f2" stop-opacity=".282" offset=".943"/>%0D%0A            <stop stop-color="%23d0e9f2" offset="1"/>%0D%0A        </radialGradient>%0D%0A        <radialGradient id="Q" gradientUnits="userSpaceOnUse" cy="86" cx="128" gradientTransform="scale(1.4216 -1.4216) rotate(-45 -51.091 19.464)" r="47">%0D%0A            <stop stop-color="%23d0e9f2" stop-opacity="0" offset="0"/>%0D%0A            <stop stop-color="%23d0e9f2" stop-opacity="0" offset=".839"/>%0D%0A            <stop stop-color="%23d0e9f2" stop-opacity=".282" offset=".943"/>%0D%0A            <stop stop-color="%23d0e9f2" offset="1"/>%0D%0A        </radialGradient>%0D%0A        <radialGradient id="Y" gradientUnits="userSpaceOnUse" cy="72.588" cx="159.61" gradientTransform="matrix(1.2125 0 0 .83915 -46.348 24.528)" r="38.417">%0D%0A            <stop stop-color="%23fff" offset="0"/>%0D%0A            <stop stop-color="%23fff" stop-opacity=".93" offset=".5"/>%0D%0A            <stop stop-color="%23fff" stop-opacity="0" offset="1"/>%0D%0A        </radialGradient>%0D%0A        <radialGradient id="X" gradientUnits="userSpaceOnUse" cx="159.61" cy="72.588" r="38.417" gradientTransform="matrix(1.2125 0 0 .83915 -45.92 25.814)">%0D%0A            <stop stop-color="%23fff" offset="0"/>%0D%0A            <stop stop-color="%23fff" stop-opacity="0" offset="1"/>%0D%0A        </radialGradient>%0D%0A        <radialGradient id="d" gradientUnits="userSpaceOnUse" cy="86" cx="128" gradientTransform="matrix(.80254 .77986 .80254 -.82522 -10.402 73.423)" r="47">%0D%0A            <stop stop-color="%23d0e9f2" stop-opacity="0" offset="0"/>%0D%0A            <stop stop-color="%23d0e9f2" stop-opacity="0" offset=".839"/>%0D%0A            <stop stop-color="%23d0e9f2" stop-opacity=".282" offset=".943"/>%0D%0A            <stop stop-color="%23d0e9f2" offset="1"/>%0D%0A        </radialGradient>%0D%0A        <filter id="I">%0D%0A            <feGaussianBlur stdDeviation="4.287"/>%0D%0A        </filter>%0D%0A        <filter id="f">%0D%0A            <feGaussianBlur stdDeviation="6.311"/>%0D%0A        </filter>%0D%0A        <filter id="g">%0D%0A            <feGaussianBlur stdDeviation="4.457"/>%0D%0A        </filter>%0D%0A    </defs>%0D%0A    <path opacity=".7" d="M174.28 35.875c-17.6 0-35.19 6.639-48.72 19.906-.16.164-.33.303-.5.469-22.05 22.056-26.206 55.25-12.47 81.5l-2.28 1.63c2.25 4.23 4.94 8.3 8.1 12.12l-13.32 13.34c-1.34-.58-2.78-1.03-4.56-1.37l-2.842 2.84c-1.11-.48-2.139-.81-3.063-.87L30.5 229.56c-.037 1.1.226 2.19.656 3.28l-.531.54-1.094 1.09c.716 3.74 2.011 6.82 5.469 10.28s6.42 4.63 10.281 5.47l1.094-1.1.719-.71c1.088.46 2.13.78 3.094.84l64.122-64.13c-.24-.97-.62-1.93-1.03-2.9l3-3c-.25-1.73-.68-3.2-1.31-4.6l13.28-13.28c3.82 3.16 7.89 5.85 12.13 8.1l1.62-2.28c26.25 13.74 59.44 9.58 81.5-12.47.17-.17.31-.34.47-.5 26.69-27.22 26.55-70.923-.47-97.94-13.59-13.59-31.41-20.375-49.22-20.375zm-.5 3.281c.11.002.21-.002.31 0a67.89 67.89 0 0 1 5.72.375c.1.01.19.021.28.031l.29.032c.14.017.29.044.43.062.9.11 1.8.228 2.69.375.62.102 1.23.224 1.84.344.35.066.69.116 1.04.187.72.153 1.43.324 2.15.5.31.077.63.138.94.219.07.019.14.043.22.063.95.253 1.89.516 2.84.812.07.023.15.04.22.063.95.3 1.91.625 2.84.969.06.019.11.042.16.062.95.352 1.9.728 2.84 1.125.06.022.11.041.16.063.94.4 1.88.836 2.81 1.281l.13.062c.93.451 1.86.91 2.78 1.407.03.017.06.044.09.062.93.503 1.84 1.013 2.75 1.562.03.02.06.044.1.063.9.551 1.8 1.122 2.68 1.719.55.369 1.09.769 1.63 1.156.36.261.73.512 1.09.781.02.014.05.018.06.031.88.656 1.75 1.36 2.6 2.063a70.875 70.875 0 0 1 5.06 4.594c1.62 1.62 3.14 3.3 4.56 5.031.01.011.03.02.03.031.71.855 1.41 1.715 2.07 2.594.28.379.54.773.81 1.156.37.517.74 1.038 1.09 1.563.02.024.05.038.07.062.59.89 1.16 1.778 1.71 2.688.02.032.05.061.07.094a75.45 75.45 0 0 1 1.56 2.75c.02.032.04.06.06.093.5.921.96 1.844 1.41 2.781l.06.126c.45.929.88 1.868 1.28 2.812l.06.156c.4.936.78 1.895 1.13 2.844l.06.156c.35.949.67 1.885.97 2.844l.06.219c.3.941.56 1.894.82 2.843l.06.219c.08.31.14.627.22.938.17.72.35 1.432.5 2.156.07.342.12.688.18 1.031.12.617.25 1.225.35 1.844.15.893.26 1.791.37 2.688.02.145.05.291.07.437l.03.281.03.282c.1.952.19 1.912.25 2.872.06.94.11 1.9.12 2.85.01.1 0 .2 0 .31.02 1.05.01 2.1-.03 3.15-.03.94-.08 1.86-.15 2.79-.01.12-.02.25-.04.37-.07.92-.16 1.84-.28 2.75-.12.96-.27 1.93-.43 2.88-.02.08-.02.16-.04.25-.02.12-.03.25-.06.37-.16.91-.36 1.82-.56 2.72-.03.13-.06.27-.09.41a86.1 86.1 0 0 1-.69 2.65c-.17.59-.35 1.17-.53 1.75-.18.57-.34 1.13-.53 1.69-.3.86-.61 1.71-.94 2.56-.06.16-.13.32-.19.47-.04.11-.08.23-.12.34-.36.88-.73 1.73-1.13 2.6-.38.82-.77 1.63-1.19 2.44-.08.15-.16.31-.25.46-.41.8-.83 1.6-1.28 2.38-.09.17-.18.34-.28.5-.2.34-.42.66-.62 1-.37.59-.75 1.17-1.13 1.75 0 .01.01.02 0 .03-.49.75-1 1.49-1.53 2.22-.46.64-.95 1.25-1.44 1.87-.19.26-.36.53-.56.79l-.41.5c-.16.2-.33.39-.5.59-.55.67-1.13 1.32-1.72 1.97-.6.67-1.23 1.35-1.87 2-.16.16-.31.34-.47.5-21.13 21.13-52.26 24.49-77.19 11.15l.13-.18c-3.71-1.9-7.26-4.14-10.63-6.78-.54-.43-1.06-.87-1.59-1.32-.51-.43-1.03-.86-1.53-1.31-.09-.08-.19-.16-.28-.25a86.97 86.97 0 0 1-2.41-2.31c-.79-.8-1.56-1.59-2.31-2.41-.09-.09-.17-.19-.25-.28-.45-.5-.88-1.02-1.31-1.53-.45-.53-.89-1.05-1.32-1.59a65.831 65.831 0 0 1-6.78-10.63l-.19.13c-13.33-24.93-9.97-56.061 11.16-77.191.16-.163.34-.308.5-.469.65-.64 1.33-1.269 2-1.875.65-.588 1.3-1.162 1.97-1.719.27-.227.54-.465.81-.687.35-.278.72-.512 1.06-.782.63-.483 1.24-.98 1.88-1.437.74-.53 1.5-1.036 2.25-1.531.58-.383 1.16-.764 1.75-1.125.45-.274.89-.551 1.34-.813.69-.395 1.37-.757 2.07-1.125a61.343 61.343 0 0 1 3.37-1.687c.87-.397 1.72-.769 2.59-1.125.16-.062.32-.096.47-.157.97-.384 1.93-.758 2.91-1.093.56-.192 1.12-.356 1.69-.532.58-.181 1.16-.367 1.75-.531.88-.246 1.77-.48 2.65-.687.07-.017.15-.015.22-.032.42-.095.84-.193 1.25-.281.67-.141 1.36-.287 2.03-.406.09-.015.17-.017.25-.031.95-.164 1.92-.317 2.88-.438a65.183 65.183 0 0 1 9.06-.5z" transform="matrix(1 .06864 0 .8487 0 26.913)" filter="url(%23f)" fill="%232d3335"/>%0D%0A    <path opacity=".5" d="M9 17.25s7.5 11 11.75 25.75S27 68.5 27 68.5s-5.5 12.75-8.25 24.75-5.75 25-5.75 25 5.75 16 9.25 30S26 170.5 26 170.5s-4 10.25-7.5 24.25-5 30.75-5 30.75 9.25-2 28.5 1.25 32.25 6 32.25 6 12.75-2.75 24-6.25 16.25-6.5 16.25-6.5 5.5.5 22.5 6.25 29.25 8.5 29.25 8.5 13-2.75 26-5.75 26.5-8 26.5-8-.75-5 4.25-24.5 8.75-28 8.75-28-.5-2.5-3.75-17.75S218 121 218 121s1.75-12.5 6.75-25.75S235 68.5 235 68.5s-4.75-15.25-7.5-29.75S219.25 15 219.25 15 195 24 187.5 25.5s-21 5.25-21 5.25-9.75-4.25-22-8.5-29.75-5.5-29.75-5.5-3.25 3.5-22 8-27.5 5.75-27.5 5.75-18.5-9-31.5-11.5-24-2-24.75-1.75z" transform="matrix(1 0 0 .84657 0 27.66)" filter="url(%23g)" fill="url(%23h)"/>%0D%0A    <path fill="%23ceeeab" d="M9 2.25s7.5 13 11.75 27.75S27 55.5 27 55.5s-5.5 12.75-8.25 24.75-5.75 23-5.75 23 5.75 16 9.25 30S26 157.5 26 157.5s-4 10.25-7.5 24.25-5 30.75-5 30.75 9.25-2 28.5 1.25 32.25 6 32.25 6 12.75-2.75 24-6.25 16.25-6.5 16.25-6.5 5.5.5 22.5 6.25 29.25 8.5 29.25 8.5 13-2.75 26-5.75 26.5-8 26.5-8-.75-5 4.25-24.5 8.75-28 8.75-28-.5-4.5-3.75-19.75S218 106 218 106s1.75-10.5 6.75-23.75S235 55.5 235 55.5s-4.75-15.25-7.5-29.75S219.25 0 219.25 0 195 9 187.5 10.5s-21 5.25-21 5.25-9.75-4.25-22-8.5-29.75-5.5-29.75-5.5-3.25 3.5-22 8-27.5 5.75-27.5 5.75-18.5-9-31.5-11.5S9.75 2 9 2.25z"/>%0D%0A    <g transform="translate(0 -10)" clip-path="url(%23i)">%0D%0A        <path fill="%23a6dd8b" d="m110.75 5.5-4.25 7c-.75 9-2.25 13.75-8.5 16.5s-12.25 3.5-11 7.5 13 9.25 14.25 13 8.25 1.75 11 7 2 15.25-3.75 17.25-17.5.5-20.25 9.5-4.75 10.5-9 12.75-7.25 10.5-3.5 16.5 12.25-1.25 15-6.5S98 97.25 98 97.25h23.75l59-1.75 3.25-3.75s3.25 4 2.75 8.75-3.75 14.75.25 17.25 19.5-2 24-7-4.75-28.25-10.5-29.5-18.5-1.75-17-7 11.75 4.5 17.25 3.25 16.75-21 12-25.25-24.25-5.25-25.75-8 21-8 22.25-11-2.5-7.25-6.25-8.5S189 41 182 40.5s-20 5.75-17.25 11.5-6 11-14.5 6.5-24.75-13-21.75-24S150 15.75 150 15.75L110.75 5.5zM97.188 112.72c-1.595.15-4.469 4.69-4.938 7.03-.5 2.5-3.25 6.75-3.5 12.25s4.75 6.75 8.75 6.5 2.75-6.75 2-15c-.25 0-.5-10.25-2-10.75-.094-.03-.206-.04-.312-.03zm92.722 51.66c-6.34.29-6.63 7.46-7.41 8.87-1.25 2.25 2.25 13.75 2 18s-4.75 5.25-9.5 9.75.5 16 11.25 31l44.75 1.25-1-35s4.75-4.25-20.75-24.25c-9.56-7.5-15.54-9.8-19.34-9.62zM39.94 180.91c-4.03-.11-8.282 5.71-9.688 7.59-1.5 2-6.25 5-17 9.5l-14.5 34.25 53 4.25s1.75-11-4.25-15.75-17.25-5.75-18.25-13.25 9.25-10 13.75-14.25 2-11.25-2.25-12.25a3.728 3.728 0 0 0-.812-.09z"/>%0D%0A    </g>%0D%0A    <path fill="%23aac3e7" d="M158.53 75.344c-4.76-.015-9.03.968-11.53 3.156-8 7-35 .75-48.5 7s-13.25 38-14.75 44.5-17.5 20.75-20 23.5-13.25 7.25-19.5 8.5-12.75 7.25-15.5 11c-2.021 2.76-7.406 6.45-10.125 8.22-.046.18-.079.35-.125.53-.134.53-.247 1.08-.375 1.63 4.98-1.61 11.18-8.18 16.625-13.63 6.25-6.25 20-7.75 27.75-11.5S76.75 138.5 89 134.5s21.25 11.75 24.25 18.5 1.75 12.75 3.75 17 11 11.75 11.5 13.5-5 6.5-6.25 8.5-10.5 7-11.75 8.75c-.97 1.35-1.92 6.77-2.31 9.22.41-.17.75-.31 1.12-.47.49-2.53 1.52-7.08 2.94-8.5 2-2 11.25-4.5 12.5-8.5s7-6.5 7-6.5 2.75 4 16 14c8.83 6.67 12.76 15.53 14.41 20.72.67.17 1.53.41 2.03.53-1.22-4.32-4.84-16.24-8.94-20.75-5-5.5-18.5-10.75-22.75-22S108 144.25 115 138.25s16.5-4 28.5 7.5 46.25 5.75 57.75 3.75c9.95-1.73 20.83 14.88 23.91 26.03.59-2.09 1.12-4 1.65-5.75-1.74-1.92-3.69-4.62-5.31-8.28-3.75-8.5-12-13.25-12-13.25s8.75-5 14.75-7.75c1.62-.74 3.01-1.68 4.19-2.66-.16-.77-.26-1.25-.44-2.09l-.09-.44c-4.77 5.56-19.24 9.62-21.66 10.94-2.75 1.5-18.25 3-35.75 4.5s-26.75-7.5-34.25-14.75-13-36-3-38 20 13.75 30 17 21.5-15.75 19.75-27c-1.2-7.734-14-12.625-24.47-12.656zm-53.34 13.281c1.27.001 5.86 1.594 6.56 2.375 2.25 2.5 2 7.25 0 8s-12.75 8-10.5 14.25 1.75 18-3.5 18-8 0-10-2.5-2-12 0-19.75 3.5-15 8-18.25c3.094-2.234 6.63-2.128 9.44-2.125zm13.59 73.095c.2.01 1.91 3.51 4.72 7.03 3 3.75 3.25 8.25 3.25 8.25s-4.25-4.75-6-8-2-7.25-2-7.25c0-.03.02-.03.03-.03z"/>%0D%0A    <path opacity=".387" stroke-linejoin="round" d="M122.75 62.25c6.25.5 12.25-2.25 10.75-6.5s-12.5-7.25-13.25-3 2 10.5 2.5 9.5zM108.75 46.75c-8.5-5.5-8.5-7.25-7-8s10.25 5 12.75 8-2.25 2-5.75 0z" stroke="%236d7f42" stroke-linecap="round" fill="none"/>%0D%0A    <g clip-path="url(%23j)" transform="translate(0 -10)" stroke="%236d7f42" fill="none">%0D%0A        <path opacity=".387" stroke-linejoin="round" d="M15.75 151.25c33-2.5 38.25-3.5 36.25-10.25s-8.75-23.5-23-22.5-22.75-6.75-22.75-6.75" stroke-linecap="round"/>%0D%0A        <path opacity=".387" d="M17.5 177.25c18.25-10 28.75-8.5 35-11.5s13.25-5.75 15.75-9.5 5.75-11.5 5.75-18-3.5-36 3.25-43.5 17.25-26 26-23.25 12.25 9.75 22 9.5S147 77 149.5 68.75s-15.75-16-16-23 5.5-14.25 20.25-17 23.5-11.5 23.5-11.5"/>%0D%0A        <path opacity=".387" stroke-linejoin="round" d="M14.5 161c15.25-1.5 22.25 3.5 31.5 1.75s13.25-3 17.75-5.75 6-3.75 6.25-6.5 1-12.5-3-22S54.5 97 58.75 89.75 64 68.25 74.5 65.25 95.5 59 102.25 64s12.75 14.25 20 14.5S134 77 136.75 74s4.5-10.25 1.75-13.75-15.5-5.5-17.25-9.5-10.75-17-.25-26.75 36.25-8.25 36.25-8.25" stroke-linecap="round"/>%0D%0A        <path opacity=".387" stroke-linejoin="round" d="M21.25 159c13.75 1 21.5 4.25 33.5-.5s13.5-5.25 13.75-8.75-.25-15.75-3-20-13-13.75-15.75-24.25.25-41 8.5-48.25 32-7.25 37.5-10.5 5.25-16.75 13-24.5 27-12.25 27-12.25M190 18.5c11.75 5 39 9.75 47.25 40.25M9.75 214c19-12.5 36-1.25 49-4s38.25-37.25 46-37 5.5-11.75 8.5-13.25 5.5 6 11.75 8 24.5-2.75 23.5-5.75-7-7.75-5.5-8.5 8.5 5 12.75 3.5 43.75-1 48.5-13.5 21.5-13.5 21.5-13.5M77.5 233.5c13.5-11.5 23.25-25 28.5-27s12.75-3.75 15.75-8 2.5-10.75 5.25-12 3.75 5.75 8.75 6 36.75-5 42.75-11.75 32.25-12.5 32.5-14.5-1-4.75.25-5.5 24.75-6 24.75-6M168.75 236c9-13.75 20.5-41 29.5-42s10.25-2.5 12.5-4.25 17 2.25 17 2.25" stroke-linecap="round"/>%0D%0A    </g>%0D%0A    <g clip-path="url(%23k)" transform="translate(0 -10)" stroke="%23d38484" stroke-linecap="round" stroke-width="2" fill="none">%0D%0A        <path d="m57.75 20-8.5 28.25 18 6.25L75 90.75 54 113l9 10.5L51 135l.5 4.5L71.75 164l14-6.75 20.5 18.5L95.75 204l10.25 8.5-2.75 13"/>%0D%0A        <path d="m105.75 212.25 12.5-27.75 11-7 27.5 15.75 20.5-3.75-.25-15.75-10.25-6 12.75-26.25 5.75-3.75 38.75-10"/>%0D%0A    </g>%0D%0A    <g opacity=".504">%0D%0A        <path d="M219.25 330s-24.25 9-31.75 10.5-21 5.25-21 5.25-9.75-4.25-22-8.5-29.75-5.5-29.75-5.5-3.25 3.5-22 8-27.5 5.75-27.5 5.75-18.5-9-31.5-11.5-24-2-24.75-1.75c0 0 7.5 13 11.75 27.75S27 385.5 27 385.5l51.469 5.125 48.971-4 52.25 12.031c10.38-4.418 52.11-4.9 55.31-13.156 0 0-4.75-15.25-7.5-29.75S219.25 330 219.25 330z" fill="%23b1e479"/>%0D%0A        <path d="M27 385.5s-5.5 12.75-8.25 24.75-5.75 23-5.75 23l50.969 16.37 53.721-15.74 52.25 17.53c16.36-4.26 32.39-9.12 48.06-15.41 0 0 1.75-10.5 6.75-23.75S235 385.5 235 385.5c-3.2 8.256-44.93 8.738-55.31 13.156l-52.25-12.031-47.971 4L27 385.5z" fill="%2387d531"/>%0D%0A        <path d="M231.75 485.5c-17.9 7.67-35.94 14.9-54.31 21.41l-52.25-18.53-50.221 9L26 487.5s-4 10.25-7.5 24.25-5 30.75-5 30.75 9.25-2 28.5 1.25 32.25 6 32.25 6 12.75-2.75 24-6.25 16.25-6.5 16.25-6.5 5.5.5 22.5 6.25 29.25 8.5 29.25 8.5 13-2.75 26-5.75 26.5-8 26.5-8-.75-5 4.25-24.5 8.75-28 8.75-28z" fill="%23ceeeab"/>%0D%0A        <path d="M13 433.25s5.75 16 9.25 30S26 487.5 26 487.5l48.969 9.88 50.221-9 52.25 18.53c18.37-6.51 36.41-13.74 54.31-21.41 0 0-.5-4.5-3.75-19.75S218 436 218 436c-15.67 6.29-31.7 11.15-48.06 15.41l-52.25-17.53-53.721 15.74L13 433.25z" fill="%23b9e787"/>%0D%0A    </g>%0D%0A    <g opacity=".522">%0D%0A        <path d="M13.719 332.031c-2.729-.007-4.438.125-4.719.219 0 0 7.5 13 11.75 27.75S27 385.5 27 385.5s-5.5 12.75-8.25 24.75-5.75 23-5.75 23 5.75 16 9.25 30S26 487.5 26 487.5s-4 10.25-7.5 24.25-5 30.75-5 30.75 9.25-2 28.5 1.25 32.25 6 32.25 6l1.5-53.25L63.5 450l16-59.75c-2.22-15.48-9.068-30.046-14.25-44.75 0 0-18.5-9-31.5-11.5-8.125-1.563-15.483-1.956-20.031-1.969z" fill="%2383d32b"/>%0D%0A        <path d="M114.75 331.75s-3.25 3.5-22 8-27.5 5.75-27.5 5.75c5.182 14.704 12.03 29.27 14.25 44.75L63.5 450l12.25 46.5-1.5 53.25s12.75-2.75 24-6.25 16.25-6.5 16.25-6.5l11.25-48.5-8.25-54.25 11.75-45c-3.44-9.727-8.06-56.93-14.5-57.5z" fill="%23b1e479"/>%0D%0A        <path d="M219.25 330s-24.25 9-31.75 10.5-21 5.25-21 5.25c4.92-1.358 11.44 45.392 14.25 52.25l-11.25 53.25 9.5 55-12.75 45.5s13-2.75 26-5.75 26.5-8 26.5-8-.75-5 4.25-24.5 8.75-28 8.75-28-.5-4.5-3.75-19.75S218 436 218 436s1.75-10.5 6.75-23.75S235 385.5 235 385.5s-4.75-15.25-7.5-29.75-8.25-25.75-8.25-25.75z" fill="%23a4df62"/>%0D%0A        <path d="M114.75 331.75c6.44.57 11.06 47.773 14.5 57.5l-11.75 45 8.25 53.25L114.5 537s5.5.5 22.5 6.25 29.25 8.5 29.25 8.5l12.75-45.5-9.5-55L180.75 398c-2.81-6.858-9.33-53.608-14.25-52.25 0 0-9.75-4.25-22-8.5s-29.75-5.5-29.75-5.5z" fill="%23ceeeab"/>%0D%0A    </g>%0D%0A    <path opacity=".039" d="M9-189.75s7.5 13 11.75 27.75S27-136.5 27-136.5s-5.5 12.75-8.25 24.75-5.75 23-5.75 23 5.75 16 9.25 30S26-34.5 26-34.5s-4 10.25-7.5 24.25-5 30.75-5 30.75 9.25-2 28.5 1.25 32.25 6 32.25 6S87 25 98.25 21.5 114.5 15 114.5 15s5.5.5 22.5 6.25 29.25 8.5 29.25 8.5 13-2.75 26-5.75 26.5-8 26.5-8S218 11 223-8.5s8.75-28 8.75-28-.5-4.5-3.75-19.75S218-86 218-86s1.75-10.5 6.75-23.75S235-136.5 235-136.5s-4.75-15.25-7.5-29.75-8.25-25.75-8.25-25.75-24.25 9-31.75 10.5-21 5.25-21 5.25-9.75-4.25-22-8.5-29.75-5.5-29.75-5.5-3.25 3.5-22 8-27.5 5.75-27.5 5.75-18.5-9-31.5-11.5-24-2-24.75-1.75z" fill="url(%23l)" transform="translate(0 192)"/>%0D%0A    <g opacity=".27">%0D%0A        <path fill="url(%23m)" d="M219.25-182s-24.25 9-31.75 10.5-21 5.25-21 5.25c4.92-1.36 11.44 45.39 14.25 52.25l-.06.28c11.81-4.07 51.21-4.77 54.31-12.78 0 0-4.75-15.25-7.5-29.75S219.25-182 219.25-182z" transform="translate(0 182)"/>%0D%0A        <path fill="url(%23n)" d="M27-126.5s-5.5 12.75-8.25 24.75-5.75 23-5.75 23l50.625 16.281 15.781-58.911L27-126.5z" transform="translate(0 182)"/>%0D%0A        <path fill="url(%23o)" d="M26-24.5S22-14.25 18.5-.25s-5 30.75-5 30.75.147-.045.438-.094c2.033-.338 11.218-1.5 28.062 1.344 19.25 3.25 32.25 6 32.25 6l1.469-52.5-.75.125L26-24.5z" transform="translate(0 182)"/>%0D%0A        <path fill="url(%23p)" d="M114.75-180.25s-3.25 3.5-22 8-27.5 5.75-27.5 5.75c5.182 14.7 12.03 29.27 14.25 44.75l-.094.31 48.034-3.94 1.12.26c-3.36-13.33-7.79-54.6-13.81-55.13z" transform="translate(0 182)"/>%0D%0A        <path fill="url(%23q)" d="M117.59-78.094 63.969-62.375l-.344-.094L63.5-62l12.25 46.5-.031.75 49.471-8.875.53.187.03-.062-8.25-54.25.09-.344z" transform="translate(0 182)"/>%0D%0A        <path fill="url(%23r)" d="M128.56-125.12c.24.92.47 1.74.69 2.37l-11.66 44.656.1-.031L169.5-60.75l11.19-52.97c-.36.12-.7.25-1 .38l-51.13-11.78z" transform="translate(0 182)"/>%0D%0A        <path fill="url(%23s)" d="M125.53-23.5 114.5 25s5.5.5 22.5 6.25c2.12.719 4.16 1.406 6.12 2.031 1.97.626 3.86 1.186 5.63 1.719 10.62 3.199 17.5 4.75 17.5 4.75l12.72-45.406c-.51.182-1.02.38-1.53.562L125.53-23.5z" transform="translate(0 182)"/>%0D%0A        <path fill="url(%23t)" d="M218-76c-15.67 6.288-31.7 11.15-48.06 15.406l-.44-.156 9.5 55-.03.094c17.84-6.36 35.38-13.387 52.78-20.844 0 0-.5-4.5-3.75-19.75S218-76 218-76z" transform="translate(0 182)"/>%0D%0A    </g>%0D%0A    <g opacity=".043">%0D%0A        <path fill="url(%23u)" d="M13.719-179.97c-1.106 0-1.972.03-2.719.06-.445.02-.855.04-1.156.07-.03 0-.066-.01-.094 0-.398.03-.656.06-.75.09 0 0 7.5 13 11.75 27.75S27-126.5 27-126.5l51.469 5.12.937-.06.094-.31c-2.22-15.48-9.068-30.05-14.25-44.75 0 0-18.5-9-31.5-11.5-1.018-.2-2.01-.37-3-.53-.596-.1-1.167-.2-1.75-.28-.237-.04-.453-.06-.688-.1a98.772 98.772 0 0 0-3.812-.46c-.735-.08-1.395-.13-2.094-.19-.685-.06-1.353-.11-2-.16-.992-.07-1.89-.12-2.781-.15-1.456-.07-2.769-.1-3.906-.1z" transform="translate(0 182)"/>%0D%0A        <path fill="url(%23v)" d="M13-78.75s5.75 16 9.25 30S26-24.5 26-24.5l48.969 9.875.75-.125.031-.75L63.5-62l.125-.469L13-78.75z" transform="translate(0 182)"/>%0D%0A        <path fill="url(%23w)" d="m127.44-125.38-47.971 4h-.063L63.625-62.469l.344.094 53.621-15.719 11.66-44.656c-.22-.63-.45-1.45-.69-2.37l-1.12-.26z" transform="translate(0 182)"/>%0D%0A        <path fill="url(%23x)" d="M125.19-23.625 75.719-14.75l-1.469 52.5S87 35 98.25 31.5 114.5 25 114.5 25l11.22-48.438-.53-.187z" transform="translate(0 182)"/>%0D%0A        <path fill="url(%23y)" d="M114.75-180.25c6.02.53 10.45 41.8 13.81 55.13l51.13 11.78c.3-.13.64-.26 1-.38l.06-.28c-2.81-6.86-9.33-53.61-14.25-52.25 0 0-.61-.25-1.72-.72-3.32-1.39-11.09-4.59-20.28-7.78-12.25-4.25-29.75-5.5-29.75-5.5z" transform="translate(0 182)"/>%0D%0A        <path fill="url(%23z)" d="m117.69-78.125-.1.031-.09.344 8.25 53.25-.22 1 51.91 18.406c.51-.181 1.02-.38 1.53-.562l.03-.094-9.5-55-51.81-17.375z" transform="translate(0 182)"/>%0D%0A        <path fill="url(%23A)" d="M231.75-26.5c-17.4 7.457-34.94 14.484-52.78 20.844L166.25 39.75s13-2.75 26-5.75 26.5-8 26.5-8S218 21 223 1.5s8.75-28 8.75-28z" transform="translate(0 182)"/>%0D%0A        <path fill="url(%23B)" d="M235-126.5c-3.1 8.01-42.5 8.71-54.31 12.78L169.5-60.75l.44.156C186.3-64.85 202.33-69.712 218-76c0 0 1.75-10.5 6.75-23.75S235-126.5 235-126.5z" transform="translate(0 182)"/>%0D%0A    </g>%0D%0A    <g clip-path="url(%23C)" transform="matrix(1.2525 .0354 0 1.2525 -27.809 -48.344)">%0D%0A        <path fill="%23ceeeab" d="M9 12.25s7.5 13 11.75 27.75S27 65.5 27 65.5s-5.5 12.75-8.25 24.75-5.75 23-5.75 23 5.75 16 9.25 30S26 167.5 26 167.5s-4 10.25-7.5 24.25-5 30.75-5 30.75 9.25-2 28.5 1.25 32.25 6 32.25 6 12.75-2.75 24-6.25 16.25-6.5 16.25-6.5 5.5.5 22.5 6.25 29.25 8.5 29.25 8.5 13-2.75 26-5.75 26.5-8 26.5-8-.75-5 4.25-24.5 8.75-28 8.75-28-.5-4.5-3.75-19.75S218 116 218 116s1.75-10.5 6.75-23.75S235 65.5 235 65.5s-4.75-15.25-7.5-29.75S219.25 10 219.25 10 195 19 187.5 20.5s-21 5.25-21 5.25-9.75-4.25-22-8.5-29.75-5.5-29.75-5.5-3.25 3.5-22 8-27.5 5.75-27.5 5.75-18.5-9-31.5-11.5-24-2-24.75-1.75z"/>%0D%0A        <g clip-path="url(%23D)">%0D%0A            <path fill="%23a6dd8b" d="m110.75 5.5-4.25 7c-.75 9-2.25 13.75-8.5 16.5s-12.25 3.5-11 7.5 13 9.25 14.25 13 8.25 1.75 11 7 2 15.25-3.75 17.25-17.5.5-20.25 9.5-4.75 10.5-9 12.75-7.25 10.5-3.5 16.5 12.25-1.25 15-6.5S98 97.25 98 97.25h23.75l59-1.75 3.25-3.75s3.25 4 2.75 8.75-3.75 14.75.25 17.25 19.5-2 24-7-4.75-28.25-10.5-29.5-18.5-1.75-17-7 11.75 4.5 17.25 3.25 16.75-21 12-25.25-24.25-5.25-25.75-8 21-8 22.25-11-2.5-7.25-6.25-8.5S189 41 182 40.5s-20 5.75-17.25 11.5-6 11-14.5 6.5-24.75-13-21.75-24S150 15.75 150 15.75L110.75 5.5zM97.188 112.72c-1.595.15-4.469 4.69-4.938 7.03-.5 2.5-3.25 6.75-3.5 12.25s4.75 6.75 8.75 6.5 2.75-6.75 2-15c-.25 0-.5-10.25-2-10.75-.094-.03-.206-.04-.312-.03zm92.722 51.66c-6.34.29-6.63 7.46-7.41 8.87-1.25 2.25 2.25 13.75 2 18s-4.75 5.25-9.5 9.75.5 16 11.25 31l44.75 1.25-1-35s4.75-4.25-20.75-24.25c-9.56-7.5-15.54-9.8-19.34-9.62zM39.94 180.91c-4.03-.11-8.282 5.71-9.688 7.59-1.5 2-6.25 5-17 9.5l-14.5 34.25 53 4.25s1.75-11-4.25-15.75-17.25-5.75-18.25-13.25 9.25-10 13.75-14.25 2-11.25-2.25-12.25a3.728 3.728 0 0 0-.812-.09z"/>%0D%0A        </g>%0D%0A        <path fill="%23aac3e7" d="M158.53 85.344c-4.76-.015-9.03.968-11.53 3.156-8 7-35 .75-48.5 7s-13.25 38-14.75 44.5-17.5 20.75-20 23.5-13.25 7.25-19.5 8.5-12.75 7.25-15.5 11c-2.021 2.76-7.406 6.45-10.125 8.22-.046.18-.079.35-.125.53-.134.53-.247 1.08-.375 1.63 4.98-1.61 11.18-8.18 16.625-13.63 6.25-6.25 20-7.75 27.75-11.5S76.75 148.5 89 144.5s21.25 11.75 24.25 18.5 1.75 12.75 3.75 17 11 11.75 11.5 13.5-5 6.5-6.25 8.5-10.5 7-11.75 8.75c-.97 1.35-1.92 6.77-2.31 9.22.41-.17.75-.31 1.12-.47.49-2.53 1.52-7.08 2.94-8.5 2-2 11.25-4.5 12.5-8.5s7-6.5 7-6.5 2.75 4 16 14c8.83 6.67 12.76 15.53 14.41 20.72.67.17 1.53.41 2.03.53-1.22-4.32-4.84-16.24-8.94-20.75-5-5.5-18.5-10.75-22.75-22S108 154.25 115 148.25s16.5-4 28.5 7.5 46.25 5.75 57.75 3.75c9.95-1.73 20.83 14.88 23.91 26.03.59-2.09 1.12-4 1.65-5.75-1.74-1.92-3.69-4.62-5.31-8.28-3.75-8.5-12-13.25-12-13.25s8.75-5 14.75-7.75c1.62-.74 3.01-1.68 4.19-2.66-.16-.77-.26-1.25-.44-2.09l-.09-.44c-4.77 5.56-19.24 9.62-21.66 10.94-2.75 1.5-18.25 3-35.75 4.5s-26.75-7.5-34.25-14.75-13-36-3-38 20 13.75 30 17 21.5-15.75 19.75-27c-1.2-7.734-14-12.625-24.47-12.656zm-53.34 13.281c1.27.001 5.86 1.595 6.56 2.375 2.25 2.5 2 7.25 0 8s-12.75 8-10.5 14.25 1.75 18-3.5 18-8 0-10-2.5-2-12 0-19.75 3.5-15 8-18.25c3.094-2.234 6.63-2.128 9.44-2.125zm13.59 73.095c.2.01 1.91 3.51 4.72 7.03 3 3.75 3.25 8.25 3.25 8.25s-4.25-4.75-6-8-2-7.25-2-7.25c0-.03.02-.03.03-.03z"/>%0D%0A        <path opacity=".387" stroke-linejoin="round" d="M122.75 72.25c6.25.5 12.25-2.25 10.75-6.5s-12.5-7.25-13.25-3 2 10.5 2.5 9.5zM108.75 56.75c-8.5-5.5-8.5-7.25-7-8s10.25 5 12.75 8-2.25 2-5.75 0z" stroke="%236d7f42" stroke-linecap="round" fill="none"/>%0D%0A        <g stroke="%236d7f42" fill="none" clip-path="url(%23E)">%0D%0A            <path opacity=".387" stroke-linejoin="round" d="M15.75 151.25c33-2.5 38.25-3.5 36.25-10.25s-8.75-23.5-23-22.5-22.75-6.75-22.75-6.75" stroke-linecap="round"/>%0D%0A            <path opacity=".387" d="M17.5 177.25c18.25-10 28.75-8.5 35-11.5s13.25-5.75 15.75-9.5 5.75-11.5 5.75-18-3.5-36 3.25-43.5 17.25-26 26-23.25 12.25 9.75 22 9.5S147 77 149.5 68.75s-15.75-16-16-23 5.5-14.25 20.25-17 23.5-11.5 23.5-11.5"/>%0D%0A            <path opacity=".387" stroke-linejoin="round" d="M14.5 161c15.25-1.5 22.25 3.5 31.5 1.75s13.25-3 17.75-5.75 6-3.75 6.25-6.5 1-12.5-3-22S54.5 97 58.75 89.75 64 68.25 74.5 65.25 95.5 59 102.25 64s12.75 14.25 20 14.5S134 77 136.75 74s4.5-10.25 1.75-13.75-15.5-5.5-17.25-9.5-10.75-17-.25-26.75 36.25-8.25 36.25-8.25" stroke-linecap="round"/>%0D%0A            <path opacity=".387" stroke-linejoin="round" d="M21.25 159c13.75 1 21.5 4.25 33.5-.5s13.5-5.25 13.75-8.75-.25-15.75-3-20-13-13.75-15.75-24.25.25-41 8.5-48.25 32-7.25 37.5-10.5 5.25-16.75 13-24.5 27-12.25 27-12.25M190 18.5c11.75 5 39 9.75 47.25 40.25M9.75 214c19-12.5 36-1.25 49-4s38.25-37.25 46-37 5.5-11.75 8.5-13.25 5.5 6 11.75 8 24.5-2.75 23.5-5.75-7-7.75-5.5-8.5 8.5 5 12.75 3.5 43.75-1 48.5-13.5 21.5-13.5 21.5-13.5M77.5 233.5c13.5-11.5 23.25-25 28.5-27s12.75-3.75 15.75-8 2.5-10.75 5.25-12 3.75 5.75 8.75 6 36.75-5 42.75-11.75 32.25-12.5 32.5-14.5-1-4.75.25-5.5 24.75-6 24.75-6M168.75 236c9-13.75 20.5-41 29.5-42s10.25-2.5 12.5-4.25 17 2.25 17 2.25" stroke-linecap="round"/>%0D%0A        </g>%0D%0A        <g clip-path="url(%23F)" stroke="%23d38484" stroke-linecap="round" stroke-width="2" fill="none">%0D%0A            <path d="m57.75 20-8.5 28.25 18 6.25L75 90.75 54 113l9 10.5L51 135l.5 4.5L71.75 164l14-6.75 20.5 18.5L95.75 204l10.25 8.5-2.75 13"/>%0D%0A            <path d="m105.75 212.25 12.5-27.75 11-7 27.5 15.75 20.5-3.75-.25-15.75-10.25-6 12.75-26.25 5.75-3.75 38.75-10"/>%0D%0A        </g>%0D%0A        <path opacity=".039" d="M9 12.25s7.5 13 11.75 27.75S27 65.5 27 65.5s-5.5 12.75-8.25 24.75-5.75 23-5.75 23 5.75 16 9.25 30S26 167.5 26 167.5s-4 10.25-7.5 24.25-5 30.75-5 30.75 9.25-2 28.5 1.25 32.25 6 32.25 6 12.75-2.75 24-6.25 16.25-6.5 16.25-6.5 5.5.5 22.5 6.25 29.25 8.5 29.25 8.5 13-2.75 26-5.75 26.5-8 26.5-8-.75-5 4.25-24.5 8.75-28 8.75-28-.5-4.5-3.75-19.75S218 116 218 116s1.75-10.5 6.75-23.75S235 65.5 235 65.5s-4.75-15.25-7.5-29.75S219.25 10 219.25 10 195 19 187.5 20.5s-21 5.25-21 5.25-9.75-4.25-22-8.5-29.75-5.5-29.75-5.5-3.25 3.5-22 8-27.5 5.75-27.5 5.75-18.5-9-31.5-11.5-24-2-24.75-1.75z" fill="url(%23G)"/>%0D%0A        <g opacity=".27">%0D%0A            <path fill="url(%23m)" d="M219.25-182s-24.25 9-31.75 10.5-21 5.25-21 5.25c4.92-1.36 11.44 45.39 14.25 52.25l-.06.28c11.81-4.07 51.21-4.77 54.31-12.78 0 0-4.75-15.25-7.5-29.75S219.25-182 219.25-182z" transform="translate(0 192)"/>%0D%0A            <path fill="url(%23n)" d="M27-126.5s-5.5 12.75-8.25 24.75-5.75 23-5.75 23l50.625 16.281 15.781-58.911L27-126.5z" transform="translate(0 192)"/>%0D%0A            <path fill="url(%23o)" d="M26-24.5S22-14.25 18.5-.25s-5 30.75-5 30.75.147-.045.438-.094c2.033-.338 11.218-1.5 28.062 1.344 19.25 3.25 32.25 6 32.25 6l1.469-52.5-.75.125L26-24.5z" transform="translate(0 192)"/>%0D%0A            <path fill="url(%23p)" d="M114.75-180.25s-3.25 3.5-22 8-27.5 5.75-27.5 5.75c5.182 14.7 12.03 29.27 14.25 44.75l-.094.31 48.034-3.94 1.12.26c-3.36-13.33-7.79-54.6-13.81-55.13z" transform="translate(0 192)"/>%0D%0A            <path fill="url(%23q)" d="M117.59-78.094 63.969-62.375l-.344-.094L63.5-62l12.25 46.5-.031.75 49.471-8.875.53.187.03-.062-8.25-54.25.09-.344z" transform="translate(0 192)"/>%0D%0A            <path fill="url(%23r)" d="M128.56-125.12c.24.92.47 1.74.69 2.37l-11.66 44.656.1-.031L169.5-60.75l11.19-52.97c-.36.12-.7.25-1 .38l-51.13-11.78z" transform="translate(0 192)"/>%0D%0A            <path fill="url(%23s)" d="M125.53-23.5 114.5 25s5.5.5 22.5 6.25c2.12.719 4.16 1.406 6.12 2.031 1.97.626 3.86 1.186 5.63 1.719 10.62 3.199 17.5 4.75 17.5 4.75l12.72-45.406c-.51.182-1.02.38-1.53.562L125.53-23.5z" transform="translate(0 192)"/>%0D%0A            <path fill="url(%23t)" d="M218-76c-15.67 6.288-31.7 11.15-48.06 15.406l-.44-.156 9.5 55-.03.094c17.84-6.36 35.38-13.387 52.78-20.844 0 0-.5-4.5-3.75-19.75S218-76 218-76z" transform="translate(0 192)"/>%0D%0A        </g>%0D%0A        <g opacity=".043">%0D%0A            <path fill="url(%23u)" d="M13.719-179.97c-1.106 0-1.972.03-2.719.06-.445.02-.855.04-1.156.07-.03 0-.066-.01-.094 0-.398.03-.656.06-.75.09 0 0 7.5 13 11.75 27.75S27-126.5 27-126.5l51.469 5.12.937-.06.094-.31c-2.22-15.48-9.068-30.05-14.25-44.75 0 0-18.5-9-31.5-11.5-1.018-.2-2.01-.37-3-.53-.596-.1-1.167-.2-1.75-.28-.237-.04-.453-.06-.688-.1a98.772 98.772 0 0 0-3.812-.46c-.735-.08-1.395-.13-2.094-.19-.685-.06-1.353-.11-2-.16-.992-.07-1.89-.12-2.781-.15-1.456-.07-2.769-.1-3.906-.1z" transform="translate(0 192)"/>%0D%0A            <path fill="url(%23v)" d="M13-78.75s5.75 16 9.25 30S26-24.5 26-24.5l48.969 9.875.75-.125.031-.75L63.5-62l.125-.469L13-78.75z" transform="translate(0 192)"/>%0D%0A            <path fill="url(%23w)" d="m127.44-125.38-47.971 4h-.063L63.625-62.469l.344.094 53.621-15.719 11.66-44.656c-.22-.63-.45-1.45-.69-2.37l-1.12-.26z" transform="translate(0 192)"/>%0D%0A            <path fill="url(%23x)" d="M125.19-23.625 75.719-14.75l-1.469 52.5S87 35 98.25 31.5 114.5 25 114.5 25l11.22-48.438-.53-.187z" transform="translate(0 192)"/>%0D%0A            <path fill="url(%23y)" d="M114.75-180.25c6.02.53 10.45 41.8 13.81 55.13l51.13 11.78c.3-.13.64-.26 1-.38l.06-.28c-2.81-6.86-9.33-53.61-14.25-52.25 0 0-.61-.25-1.72-.72-3.32-1.39-11.09-4.59-20.28-7.78-12.25-4.25-29.75-5.5-29.75-5.5z" transform="translate(0 192)"/>%0D%0A            <path fill="url(%23z)" d="m117.69-78.125-.1.031-.09.344 8.25 53.25-.22 1 51.91 18.406c.51-.181 1.02-.38 1.53-.562l.03-.094-9.5-55-51.81-17.375z" transform="translate(0 192)"/>%0D%0A            <path fill="url(%23A)" d="M231.75-26.5c-17.4 7.457-34.94 14.484-52.78 20.844L166.25 39.75s13-2.75 26-5.75 26.5-8 26.5-8S218 21 223 1.5s8.75-28 8.75-28z" transform="translate(0 192)"/>%0D%0A            <path fill="url(%23B)" d="M235-126.5c-3.1 8.01-42.5 8.71-54.31 12.78L169.5-60.75l.44.156C186.3-64.85 202.33-69.712 218-76c0 0 1.75-10.5 6.75-23.75S235-126.5 235-126.5z" transform="translate(0 192)"/>%0D%0A        </g>%0D%0A    </g>%0D%0A    <path d="M174.28 35.875c-17.6 0-35.19 6.639-48.72 19.906-.16.164-.33.303-.5.469-22.05 22.056-26.206 55.25-12.47 81.5l-2.28 1.63c2.25 4.23 4.94 8.3 8.1 12.12l-13.32 13.34c-1.34-.58-2.78-1.03-4.56-1.37l-2.842 2.84c-1.11-.48-2.139-.81-3.063-.87L30.5 229.56c-.037 1.1.226 2.19.656 3.28l-.531.54-1.094 1.09c.716 3.74 2.011 6.82 5.469 10.28s6.42 4.63 10.281 5.47l1.094-1.1.719-.71c1.088.46 2.13.78 3.094.84l64.122-64.13c-.24-.97-.62-1.93-1.03-2.9l3-3c-.25-1.73-.68-3.2-1.31-4.6l13.28-13.28c3.82 3.16 7.89 5.85 12.13 8.1l1.62-2.28c26.25 13.74 59.44 9.58 81.5-12.47.17-.17.31-.34.47-.5 26.69-27.22 26.55-70.923-.47-97.94-13.59-13.59-31.41-20.375-49.22-20.375zm-.5 3.281c.11.002.21-.002.31 0a67.89 67.89 0 0 1 5.72.375c.1.01.19.021.28.031l.29.032c.14.017.29.044.43.062.9.11 1.8.228 2.69.375.62.102 1.23.224 1.84.344.35.066.69.116 1.04.187.72.153 1.43.324 2.15.5.31.077.63.138.94.219.07.019.14.043.22.063.95.253 1.89.516 2.84.812.07.023.15.04.22.063.95.3 1.91.625 2.84.969.06.019.11.042.16.062.95.352 1.9.728 2.84 1.125.06.022.11.041.16.063.94.4 1.88.836 2.81 1.281l.13.062c.93.451 1.86.91 2.78 1.407.03.017.06.044.09.062.93.503 1.84 1.013 2.75 1.562.03.02.06.044.1.063.9.551 1.8 1.122 2.68 1.719.55.369 1.09.769 1.63 1.156.36.261.73.512 1.09.781.02.014.05.018.06.031.88.656 1.75 1.36 2.6 2.063a70.875 70.875 0 0 1 5.06 4.594c1.62 1.62 3.14 3.3 4.56 5.031.01.011.03.02.03.031.71.855 1.41 1.715 2.07 2.594.28.379.54.773.81 1.156.37.517.74 1.038 1.09 1.563.02.024.05.038.07.062.59.89 1.16 1.778 1.71 2.688.02.032.05.061.07.094a75.45 75.45 0 0 1 1.56 2.75c.02.032.04.06.06.093.5.921.96 1.844 1.41 2.781l.06.126c.45.929.88 1.868 1.28 2.812l.06.156c.4.936.78 1.895 1.13 2.844l.06.156c.35.949.67 1.885.97 2.844l.06.219c.3.941.56 1.894.82 2.843l.06.219c.08.31.14.627.22.938.17.72.35 1.432.5 2.156.07.342.12.688.18 1.031.12.617.25 1.225.35 1.844.15.893.26 1.791.37 2.688.02.145.05.291.07.437l.03.281.03.282c.1.952.19 1.912.25 2.872.06.94.11 1.9.12 2.85.01.1 0 .2 0 .31.02 1.05.01 2.1-.03 3.15-.03.94-.08 1.86-.15 2.79-.01.12-.02.25-.04.37-.07.92-.16 1.84-.28 2.75-.12.96-.27 1.93-.43 2.88-.02.08-.02.16-.04.25-.02.12-.03.25-.06.37-.16.91-.36 1.82-.56 2.72-.03.13-.06.27-.09.41a86.1 86.1 0 0 1-.69 2.65c-.17.59-.35 1.17-.53 1.75-.18.57-.34 1.13-.53 1.69-.3.86-.61 1.71-.94 2.56-.06.16-.13.32-.19.47-.04.11-.08.23-.12.34-.36.88-.73 1.73-1.13 2.6-.38.82-.77 1.63-1.19 2.44-.08.15-.16.31-.25.46-.41.8-.83 1.6-1.28 2.38-.09.17-.18.34-.28.5-.2.34-.42.66-.62 1-.37.59-.75 1.17-1.13 1.75 0 .01.01.02 0 .03-.49.75-1 1.49-1.53 2.22-.46.64-.95 1.25-1.44 1.87-.19.26-.36.53-.56.79l-.41.5c-.16.2-.33.39-.5.59-.55.67-1.13 1.32-1.72 1.97-.6.67-1.23 1.35-1.87 2-.16.16-.31.34-.47.5-21.13 21.13-52.26 24.49-77.19 11.15l.13-.18c-3.71-1.9-7.26-4.14-10.63-6.78-.54-.43-1.06-.87-1.59-1.32-.51-.43-1.03-.86-1.53-1.31-.09-.08-.19-.16-.28-.25a86.97 86.97 0 0 1-2.41-2.31c-.79-.8-1.56-1.59-2.31-2.41-.09-.09-.17-.19-.25-.28-.45-.5-.88-1.02-1.31-1.53-.45-.53-.89-1.05-1.32-1.59a65.831 65.831 0 0 1-6.78-10.63l-.19.13c-13.33-24.93-9.97-56.061 11.16-77.191.16-.163.34-.308.5-.469.65-.64 1.33-1.269 2-1.875.65-.588 1.3-1.162 1.97-1.719.27-.227.54-.465.81-.687.35-.278.72-.512 1.06-.782.63-.483 1.24-.98 1.88-1.437.74-.53 1.5-1.036 2.25-1.531.58-.383 1.16-.764 1.75-1.125.45-.274.89-.551 1.34-.813.69-.395 1.37-.757 2.07-1.125a61.343 61.343 0 0 1 3.37-1.687c.87-.397 1.72-.769 2.59-1.125.16-.062.32-.096.47-.157.97-.384 1.93-.758 2.91-1.093.56-.192 1.12-.356 1.69-.532.58-.181 1.16-.367 1.75-.531.88-.246 1.77-.48 2.65-.687.07-.017.15-.015.22-.032.42-.095.84-.193 1.25-.281.67-.141 1.36-.287 2.03-.406.09-.015.17-.017.25-.031.95-.164 1.92-.317 2.88-.438a65.183 65.183 0 0 1 9.06-.5z" clip-path="url(%23H)" transform="matrix(1 .08088 0 1 0 -21.056)" filter="url(%23I)" fill="%232d3335"/>%0D%0A    <path d="m48.01 227.46-4.807 4.55c-5.007-5.31-10.24-10.7-15.08-16.13l4.491-4.07c6.829 6.53 8.872 8.53 15.396 15.65z" fill="url(%23J)"/>%0D%0A    <path d="M-95.5 225c28.719 0 52 23.28 52 52s-23.281 52-52 52c-28.72 0-52-23.28-52-52s23.28-52 52-52z" fill-opacity=".476" fill="%23d0e9f2"/>%0D%0A    <path d="M-82 136c-27.61 0-50-22.39-50-50 0-27.614 22.39-50 50-50 27.614 0 50 22.386 50 50 0 27.61-22.386 50-50 50zm0-3c26.51 0 48-20.49 48-47s-21.49-47-48-47-48 20.49-48 47 21.49 47 48 47z" fill="%232d3335"/>%0D%0A    <path fill="%239eaaac" d="M-82 136c-27.61 0-50-22.39-50-50v-.5c.27 27.38 22.55 49.5 50 49.5 27.446 0 49.729-22.12 50-49.5.002.168 0 .332 0 .5 0 27.61-22.386 50-50 50zm-48-50.5V85c0-26.51 21.49-47 48-47s48 20.49 48 47c0 .168.002.333 0 .5C-34.27 59.234-55.658 39-82 39c-26.34 0-47.73 20.234-48 46.5z"/>%0D%0A    <path d="M-82 134c26.51 0 48-21.49 48-48s-21.49-48-48-48-48 21.49-48 48 21.49 48 48 48z" fill-opacity=".476" fill="%23d0e9f2"/>%0D%0A    <path d="M-82 134c26.51 0 48-21.49 48-48s-21.49-48-48-48-48 21.49-48 48 21.49 48 48 48z" fill="url(%23K)"/>%0D%0A    <path fill="url(%23L)" d="m-96.438 130.72-.843 5C-92.451 137.2-87.316 138-82 138s10.451-.8 15.281-2.28l-.843-5C-72.115 132.19-76.959 133-82 133s-9.885-.81-14.438-2.28z"/>%0D%0A    <path fill="url(%23M)" d="M-82 136.25c1.757 0 3.431.3 5 .81v26.63c-1.569.51-3.243.81-5 .81s-3.431-.3-5-.81v-26.63c1.569-.51 3.243-.81 5-.81z"/>%0D%0A    <path d="M-82 150.5c3.514 0 5.613.65 8 2.44v67.12c-3.137.91-4.486 1.44-8 1.44s-4.863-.53-8-1.44v-67.12c2.637-1.79 4.486-2.44 8-2.44z" fill="url(%23N)"/>%0D%0A    <path d="M-82 154.5c3.514 0 7.238.78 10 2.44v65.12c-2.012 1.79-6.486 2.44-10 2.44s-7.863-.15-10-2.44v-65.12c1.887-1.66 6.486-2.44 10-2.44z" fill="url(%23O)"/>%0D%0A    <path d="M-82 217.5c3.514 0 5.863.78 8 2.44v5.12c-2.387 1.54-4.486 2.44-8 2.44s-5.738-.9-8-2.44v-5.12c2.387-1.91 4.486-2.44 8-2.44z" fill="url(%23P)"/>%0D%0A    <path fill="%23e0bb41" d="M-82 221.5c-3.514 0-5.613.28-8 2.44v1.12c2.262 1.54 4.486 2.44 8 2.44s5.613-.9 8-2.44v-1.12c-2.512-2.04-4.486-2.44-8-2.44z"/>%0D%0A    <path d="M125.06 134.69c-27.176-27.18-27.176-71.251 0-98.431 27.18-27.18 71.25-27.18 98.43 0s27.18 71.251 0 98.431-71.25 27.18-98.43 0zm2.96-2.96c26.09 26.1 67.41 27.08 93.5.99 26.1-26.1 25.11-67.416-.98-93.509-26.09-26.092-67.41-27.077-93.51-.984-26.09 26.093-25.11 67.413.99 93.503z" fill="%232d3335"/>%0D%0A    <path fill="%239eaaac" d="M125.06 134.69c-27.176-27.18-27.176-71.251 0-98.431.17-.166.33-.329.5-.493-26.689 27.218-26.526 70.924.49 97.934 27.01 27.02 70.72 27.18 97.93.49-.16.17-.32.33-.49.5-27.18 27.18-71.25 27.18-98.43 0zm2.46-96.955c.17-.167.33-.327.5-.492 26.09-26.093 67.41-25.109 93.5.984 26.1 26.093 27.08 67.413.99 93.503l-.5.5c25.59-26.12 24.46-67.091-1.47-93.019-25.93-25.927-66.9-27.063-93.02-1.476z"/>%0D%0A    <path d="M127.03 132.72c26.1 26.09 68.4 26.09 94.49 0 26.1-26.1 26.1-68.4 0-94.493-26.09-26.093-68.39-26.093-94.49 0-26.09 26.093-26.09 68.393 0 94.493z" fill-opacity=".476" fill="%23d0e9f2"/>%0D%0A    <path d="M127.03 132.72c26.1 26.09 68.4 26.09 94.49 0 26.1-26.1 26.1-68.4 0-94.493-26.09-26.093-68.39-26.093-94.49 0-26.09 26.093-26.09 68.393 0 94.493z" fill="url(%23Q)"/>%0D%0A    <path fill="url(%23R)" d="m116.05 115.28-5.75 4.09c3.3 6.21 7.56 12.05 12.8 17.28 5.23 5.24 11.07 9.5 17.28 12.8l4.09-5.75c-5.92-3.04-11.49-7.01-16.45-11.97s-8.93-10.53-11.97-16.45z"/>%0D%0A    <path fill="url(%23S)" d="M124.82 134.93c1.73 1.73 3.08 3.67 4.12 5.72l-26.21 26.21a22.302 22.302 0 0 1-5.718-4.12 22.268 22.268 0 0 1-4.121-5.72l26.209-26.21c2.05 1.04 3.99 2.39 5.72 4.12z"/>%0D%0A    <path d="M116.27 159.23 50.199 225.3c-3.984-2.19-5.832-3-9.29-6.46s-4.267-5.3-6.459-9.29l66.07-66.07c5.06 3.75 12.12 10.4 15.75 15.75z" fill="url(%23T)"/>%0D%0A    <path d="M105.78 154.12c3.46 3.46 7.43 6.66 8.52 11.02l-64.101 64.1c-6.517-5.16-14.555-12.79-19.686-19.69l64.1-64.1c3.491.23 7.657 5.16 11.117 8.62l.05.05z" fill="url(%23U)"/>%0D%0A    <path opacity=".596" d="M105.53 154.36c3.46 3.46 7.68 6.42 8.77 10.78l-64.101 64.1c-7.877-6.91-11.798-10.63-19.686-19.69l64.1-64.1c3.491.23 7.417 5.45 10.877 8.91h.04z" fill="url(%23V)"/>%0D%0A    <path opacity=".604" d="M131.17 37.05c40.66-32.173 78.13-12.728 77.78 5.303s-56.57 70.357-76.37 66.117-25.45-53.389-1.41-71.42z" fill="url(%23W)"/>%0D%0A    <text opacity=".461" font-weight="bold" xml:space="preserve" transform="rotate(-8.9)" font-size="19.8" y="69.184" x="99.839" font-family="Monospace" fill="url(%23X)"><tspan y="69.184" x="99.839">01011001</tspan><tspan y="93.934" x="99.839">00110101</tspan><tspan y="118.684" x="99.839">10010011</tspan></text>%0D%0A    <text font-weight="bold" xml:space="preserve" transform="rotate(-8.9)" font-size="19.8" y="67.898" x="99.41" font-family="Monospace" fill="url(%23Y)"><tspan y="67.898" x="99.41">01011001</tspan><tspan y="92.648" x="99.41">00110101</tspan><tspan y="117.398" x="99.41">10010011</tspan></text>%0D%0A    <path opacity=".765" d="M219.46 129.09c-26.79 21.98-41.81 21.01-38.07 13.14 3.73-7.87 42.32-41.66 51.45-43.75 9.12-2.093 2.27 18.04-13.38 30.61z" fill="url(%23Z)"/>%0D%0A</svg>%0D%0A';function ga(n){let{css:t,selector:e="wa-button",all:o=!0,styleId:r="hot-theme-injection"}=n;(o?document.querySelectorAll(e):[document.querySelector(e)].filter(Boolean)).forEach(s=>{if(!s)return;let c=()=>{if(!s.shadowRoot){setTimeout(c,10);return}if(s.shadowRoot.getElementById(r))return;let l=document.createElement("style");l.id=r,l.textContent=t,s.shadowRoot.appendChild(l),console.log(`\u2705 Injected HOT theme into ${e}`,s)};c()})}function xi(){ga({css:`
    :host {
      /* Brand colors - Map to HOT primary colors (red) */
      --wa-color-brand-95: var(--hot-color-primary-50);
      --wa-color-brand-90: var(--hot-color-primary-100);
      --wa-color-brand-80: var(--hot-color-primary-200);
      --wa-color-brand-70: var(--hot-color-primary-300);
      --wa-color-brand-60: var(--hot-color-primary-400);
      --wa-color-brand-50: var(--hot-color-primary-500);
      --wa-color-brand-40: var(--hot-color-primary-600);
      --wa-color-brand-30: var(--hot-color-primary-700);
      --wa-color-brand-20: var(--hot-color-primary-800);
      --wa-color-brand-10: var(--hot-color-primary-900);
      --wa-color-brand-05: var(--hot-color-primary-950);
      --wa-color-brand: var(--wa-color-brand-50);
      --wa-color-brand-key: 50;

      /* Neutral colors - Map to HOT neutral colors (gray) */
      --wa-color-neutral-95: var(--hot-color-neutral-50);
      --wa-color-neutral-90: var(--hot-color-neutral-100);
      --wa-color-neutral-80: var(--hot-color-neutral-200);
      --wa-color-neutral-70: var(--hot-color-neutral-300);
      --wa-color-neutral-60: var(--hot-color-neutral-400);
      --wa-color-neutral-50: var(--hot-color-neutral-500);
      --wa-color-neutral-40: var(--hot-color-neutral-600);
      --wa-color-neutral-30: var(--hot-color-neutral-700);
      --wa-color-neutral-20: var(--hot-color-neutral-800);
      --wa-color-neutral-10: var(--hot-color-neutral-900);
      --wa-color-neutral-05: var(--hot-color-neutral-950);
      --wa-color-neutral: var(--wa-color-neutral-40);
      --wa-color-neutral-key: 40;

      /* Success colors - Map to HOT success colors */
      --wa-color-success-95: var(--hot-color-success-50);
      --wa-color-success-90: var(--hot-color-success-100);
      --wa-color-success-80: var(--hot-color-success-200);
      --wa-color-success-70: var(--hot-color-success-300);
      --wa-color-success-60: var(--hot-color-success-400);
      --wa-color-success-50: var(--hot-color-success-500);
      --wa-color-success-40: var(--hot-color-success-600);
      --wa-color-success-30: var(--hot-color-success-700);
      --wa-color-success-20: var(--hot-color-success-800);
      --wa-color-success-10: var(--hot-color-success-900);
      --wa-color-success-05: var(--hot-color-success-950);
      --wa-color-success: var(--wa-color-success-60);
      --wa-color-success-key: 60;

      /* Warning colors - Map to HOT warning colors */
      --wa-color-warning-95: var(--hot-color-warning-50);
      --wa-color-warning-90: var(--hot-color-warning-100);
      --wa-color-warning-80: var(--hot-color-warning-200);
      --wa-color-warning-70: var(--hot-color-warning-300);
      --wa-color-warning-60: var(--hot-color-warning-400);
      --wa-color-warning-50: var(--hot-color-warning-500);
      --wa-color-warning-40: var(--hot-color-warning-600);
      --wa-color-warning-30: var(--hot-color-warning-700);
      --wa-color-warning-20: var(--hot-color-warning-800);
      --wa-color-warning-10: var(--hot-color-warning-900);
      --wa-color-warning-05: var(--hot-color-warning-950);
      --wa-color-warning: var(--wa-color-warning-80);
      --wa-color-warning-key: 80;

      /* Danger colors - Map to HOT danger colors */
      --wa-color-danger-95: var(--hot-color-danger-50);
      --wa-color-danger-90: var(--hot-color-danger-100);
      --wa-color-danger-80: var(--hot-color-danger-200);
      --wa-color-danger-70: var(--hot-color-danger-300);
      --wa-color-danger-60: var(--hot-color-danger-400);
      --wa-color-danger-50: var(--hot-color-danger-500);
      --wa-color-danger-40: var(--hot-color-danger-600);
      --wa-color-danger-30: var(--hot-color-danger-700);
      --wa-color-danger-20: var(--hot-color-danger-800);
      --wa-color-danger-10: var(--hot-color-danger-900);
      --wa-color-danger-05: var(--hot-color-danger-950);
      --wa-color-danger: var(--wa-color-danger-50);
      --wa-color-danger-key: 50;

      /* Direct color mappings for compatibility */
      --wa-color-red-95: var(--hot-color-red-50);
      --wa-color-red-90: var(--hot-color-red-100);
      --wa-color-red-80: var(--hot-color-red-200);
      --wa-color-red-70: var(--hot-color-red-300);
      --wa-color-red-60: var(--hot-color-red-400);
      --wa-color-red-50: var(--hot-color-red-500);
      --wa-color-red-40: var(--hot-color-red-600);
      --wa-color-red-30: var(--hot-color-red-700);
      --wa-color-red-20: var(--hot-color-red-800);
      --wa-color-red-10: var(--hot-color-red-900);
      --wa-color-red-05: var(--hot-color-red-950);
      --wa-color-red: var(--wa-color-red-50);
      --wa-color-red-key: 50;

      --wa-color-purple-50: var(--hot-color-rose-50);
      --wa-color-indigo-50: var(--hot-color-blue-50);

      /* WebAwesome shadow variables */
      --wa-shadow-x-small: 0 1px 2px rgba(0, 0, 0, 0.05);
      --wa-shadow-small: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
      --wa-shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      --wa-shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      --wa-shadow-x-large: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

      --wa-shadow-s: var(--wa-shadow-small);
      --wa-shadow-m: var(--wa-shadow-medium);
      --wa-shadow-l: var(--wa-shadow-large);

      /* HOT Color Primitives */
      --hot-color-red-950: #A52A28;
      --hot-color-red-900: #B9302D;
      --hot-color-red-800: #B83032;
      --hot-color-red-700: #C53639;
      --hot-color-red-600: #D73F3F;
      --hot-color-red-500: #F34D47;
      --hot-color-red-400: #ED5C5E;
      --hot-color-red-300: #E27A7D;
      --hot-color-red-200: #EC9EA1;
      --hot-color-red-100: #FDD0D6;
      --hot-color-red-50: #FEECEF;

      --hot-color-rose-950: #3E030B;
      --hot-color-rose-900: #4B040E;
      --hot-color-rose-800: #5C1517;
      --hot-color-rose-700: #6B231D;
      --hot-color-rose-600: #7C2E26;
      --hot-color-rose-500: #7D463F;
      --hot-color-rose-400: #9E6960;
      --hot-color-rose-300: #B3837B;
      --hot-color-rose-200: #CFA59E;
      --hot-color-rose-100: #EAC7C0;
      --hot-color-rose-50: #FFE6DE;

      --hot-color-yellow-950: #CC6508;
      --hot-color-yellow-900: #E8750C;
      --hot-color-yellow-800: #F77D0F;
      --hot-color-yellow-700: #FAA71E;
      --hot-color-yellow-600: #FCBF26;
      --hot-color-yellow-500: #FED82E;
      --hot-color-yellow-400: #FAE62E;
      --hot-color-yellow-300: #FDEB51;
      --hot-color-yellow-200: #FFF072;
      --hot-color-yellow-100: #FFF59B;
      --hot-color-yellow-50: #FFF9C3;

      --hot-color-blue-950: #111C31;
      --hot-color-blue-900: #182642;
      --hot-color-blue-800: #20365B;
      --hot-color-blue-700: #263F68;
      --hot-color-blue-600: #2E4873;
      --hot-color-blue-500: #344F7B;
      --hot-color-blue-400: #53688B;
      --hot-color-blue-300: #71829E;
      --hot-color-blue-200: #97A5BA;
      --hot-color-blue-100: #BFC8D6;
      --hot-color-blue-50: #E6E9EE;

      --hot-color-cyan-950: #2B514F;
      --hot-color-cyan-900: #366361;
      --hot-color-cyan-800: #408789;
      --hot-color-cyan-700: #459BA0;
      --hot-color-cyan-600: #4BB1B9;
      --hot-color-cyan-500: #50C1CB;
      --hot-color-cyan-400: #58CBD1;
      --hot-color-cyan-300: #6AD4D9;
      --hot-color-cyan-200: #8FE1E3;
      --hot-color-cyan-100: #B9EDED;
      --hot-color-cyan-50: #E3F8F8;

      --hot-color-gray-950: #2C3038;
      --hot-color-gray-900: #404248;
      --hot-color-gray-800: #515057;
      --hot-color-gray-700: #615F66;
      --hot-color-gray-600: #716F73;
      --hot-color-gray-500: #828085;
      --hot-color-gray-400: #9A969B;
      --hot-color-gray-300: #B3B0B3;
      --hot-color-gray-200: #C4C3C5;
      --hot-color-gray-100: #E1E0E1;
      --hot-color-gray-50: #F3F3F3;

      /* HOT Semantic Colors */
      --hot-color-primary-950: var(--hot-color-red-950);
      --hot-color-primary-900: var(--hot-color-red-900);
      --hot-color-primary-800: var(--hot-color-red-800);
      --hot-color-primary-700: var(--hot-color-red-700);
      --hot-color-primary-600: var(--hot-color-red-600);
      --hot-color-primary-500: var(--hot-color-red-500);
      --hot-color-primary-400: var(--hot-color-red-400);
      --hot-color-primary-300: var(--hot-color-red-300);
      --hot-color-primary-200: var(--hot-color-red-200);
      --hot-color-primary-100: var(--hot-color-red-100);
      --hot-color-primary-50: var(--hot-color-red-50);

      --hot-color-danger-950: var(--hot-color-red-950);
      --hot-color-danger-900: var(--hot-color-red-900);
      --hot-color-danger-800: var(--hot-color-red-800);
      --hot-color-danger-700: var(--hot-color-red-700);
      --hot-color-danger-600: var(--hot-color-red-600);
      --hot-color-danger-500: var(--hot-color-red-500);
      --hot-color-danger-400: var(--hot-color-red-400);
      --hot-color-danger-300: var(--hot-color-red-300);
      --hot-color-danger-200: var(--hot-color-red-200);
      --hot-color-danger-100: var(--hot-color-red-100);
      --hot-color-danger-50: var(--hot-color-red-50);

      --hot-color-warning-950: var(--hot-color-yellow-950);
      --hot-color-warning-900: var(--hot-color-yellow-900);
      --hot-color-warning-800: var(--hot-color-yellow-800);
      --hot-color-warning-700: var(--hot-color-yellow-700);
      --hot-color-warning-600: var(--hot-color-yellow-600);
      --hot-color-warning-500: var(--hot-color-yellow-500);
      --hot-color-warning-400: var(--hot-color-yellow-400);
      --hot-color-warning-300: var(--hot-color-yellow-300);
      --hot-color-warning-200: var(--hot-color-yellow-200);
      --hot-color-warning-100: var(--hot-color-yellow-100);
      --hot-color-warning-50: var(--hot-color-yellow-50);

      --hot-color-success-950: #031608;
      --hot-color-success-900: #052310;
      --hot-color-success-800: #0a3a1d;
      --hot-color-success-700: #0a5027;
      --hot-color-success-600: #036730;
      --hot-color-success-500: #00883c;
      --hot-color-success-400: #00ac49;
      --hot-color-success-300: #5dc36f;
      --hot-color-success-200: #93da98;
      --hot-color-success-100: #c2f2c1;
      --hot-color-success-50: #e3f9e3;

      --hot-color-neutral-1000: #ffffff;
      --hot-color-neutral-950: var(--hot-color-gray-950);
      --hot-color-neutral-900: var(--hot-color-gray-900);
      --hot-color-neutral-800: var(--hot-color-gray-800);
      --hot-color-neutral-700: var(--hot-color-gray-700);
      --hot-color-neutral-600: var(--hot-color-gray-600);
      --hot-color-neutral-500: var(--hot-color-gray-500);
      --hot-color-neutral-400: var(--hot-color-gray-400);
      --hot-color-neutral-300: var(--hot-color-gray-300);
      --hot-color-neutral-200: var(--hot-color-gray-200);
      --hot-color-neutral-100: var(--hot-color-gray-100);
      --hot-color-neutral-50: var(--hot-color-gray-50);
      --hot-color-neutral-0: #000000;

      /* HOT Typography */
      --hot-font-sans: Archivo, -apple-system, Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      --hot-font-sans-variant: 'Barlow';
      --hot-font-sans-variant-condensed: 'Barlow Condensed';
      --hot-font-sefif: Georgia, 'Times New Roman', serif;
      --hot-font-mono: Menlo, Monaco, Consolas, 'Courier New', monospace, Consolas, 'Liberation Mono', Menlo, monospace;

      --hot-font-size-2x-small: 0.625rem;
      --hot-font-size-x-small: 0.75rem;
      --hot-font-size-small: 0.875rem;
      --hot-font-size-medium: 1rem;
      --hot-font-size-large: 1.25rem;
      --hot-font-size-x-large: 1.5rem;
      --hot-font-size-2x-large: 2.25rem;
      --hot-font-size-3x-large: 3rem;
      --hot-font-size-4x-large: 4.5rem;

      --hot-font-weight-light: 300;
      --hot-font-weight-normal: 400;
      --hot-font-weight-semibold: 500;
      --hot-font-weight-bold: 700;

      --hot-letter-spacing-denser: -0.03em;
      --hot-letter-spacing-dense: -0.015em;
      --hot-letter-spacing-normal: normal;
      --hot-letter-spacing-loose: 0.075em;
      --hot-letter-spacing-looser: 0.15em;

      --hot-line-height-denser: 1;
      --hot-line-height-dense: 1.4;
      --hot-line-height-normal: 1.8;
      --hot-line-height-loose: 2.2;
      --hot-line-height-looser: 2.6;

      /* HOT Spacing */
      --hot-spacing-3x-small: 0.125rem;
      --hot-spacing-2x-small: 0.25rem;
      --hot-spacing-x-small: 0.5rem;
      --hot-spacing-small: 0.75rem;
      --hot-spacing-medium: 1rem;
      --hot-spacing-large: 1.25rem;
      --hot-spacing-x-large: 1.75rem;
      --hot-spacing-2x-large: 2.25rem;
      --hot-spacing-3x-large: 3rem;
      --hot-spacing-4x-large: 4.5rem;

      /* HOT Border Radius */
      --hot-border-radius-small: 0.1875rem;
      --hot-border-radius-medium: 0.25rem;
      --hot-border-radius-large: 0.5rem;
      --hot-border-radius-x-large: 1rem;
      --hot-border-radius-circle: 50%;
      --hot-border-radius-pill: 9999px;
    }

    /* Custom button styles for login button */
    :host(.login-button)::part(base) {
      background-color: var(--wa-color-brand-500);
      color: white;
      font-weight: var(--hot-font-weight-semibold);
      padding: 0.6rem 1.2rem;
      border-radius: var(--hot-border-radius-large);
      border: none;
      transition: background-color 0.2s ease;
    }

    :host(.login-button)::part(base):hover {
      background-color: var(--wa-color-brand-600);
    }

    :host(.login-button)::part(base):active {
      background-color: var(--wa-color-brand-700);
    }

    /* Enhanced primary button styling with CSS parts */
    :host([variant="primary"])::part(base) {
      background: linear-gradient(135deg, var(--hot-color-red-500), var(--hot-color-red-600));
      border: 1px solid var(--hot-color-red-600);
      color: white;
      box-shadow: 0 2px 4px rgba(211, 63, 63, 0.3);
      transition: all 0.2s ease;
    }

    :host([variant="primary"])::part(base):hover {
      background: linear-gradient(135deg, var(--hot-color-red-600), var(--hot-color-red-700));
      border-color: var(--hot-color-red-700);
      box-shadow: 0 4px 8px rgba(211, 63, 63, 0.4);
      transform: translateY(-1px);
    }

    :host([variant="primary"])::part(base):active {
      background: linear-gradient(135deg, var(--hot-color-red-700), var(--hot-color-red-800));
      border-color: var(--hot-color-red-800);
      box-shadow: 0 1px 3px rgba(211, 63, 63, 0.3);
      transform: translateY(0);
    }

    :host([variant="primary"])::part(base):focus-visible {
      outline: 2px solid var(--hot-color-red-400);
      outline-offset: 2px;
    }

    /* Brand variant button styling (alternative to primary) */
    :host([variant="brand"])::part(base) {
      background: linear-gradient(135deg, var(--hot-color-red-500), var(--hot-color-red-600));
      border: 1px solid var(--hot-color-red-600);
      color: white;
      box-shadow: 0 2px 4px rgba(211, 63, 63, 0.3);
      transition: all 0.2s ease;
    }

    :host([variant="brand"])::part(base):hover {
      background: linear-gradient(135deg, var(--hot-color-red-600), var(--hot-color-red-700));
      border-color: var(--hot-color-red-700);
      box-shadow: 0 4px 8px rgba(211, 63, 63, 0.4);
      transform: translateY(-1px);
    }

    :host([variant="brand"])::part(base):active {
      background: linear-gradient(135deg, var(--hot-color-red-700), var(--hot-color-red-800));
      border-color: var(--hot-color-red-800);
      box-shadow: 0 1px 3px rgba(211, 63, 63, 0.3);
      transform: translateY(0);
    }

    /* Outline variant with hot-red-color */
    :host([variant="outline"])::part(base) {
      background: transparent;
      border: 2px solid var(--hot-color-red-500);
      color: var(--hot-color-red-500);
      transition: all 0.2s ease;
    }

    :host([variant="outline"])::part(base):hover {
      background: var(--hot-color-red-50);
      border-color: var(--hot-color-red-600);
      color: var(--hot-color-red-600);
      box-shadow: 0 2px 4px rgba(211, 63, 63, 0.2);
    }

    :host([variant="outline"])::part(base):active {
      background: var(--hot-color-red-100);
      border-color: var(--hot-color-red-700);
      color: var(--hot-color-red-700);
    }

    /* Text variant with hot-red-color */
    :host([variant="text"])::part(base) {
      background: transparent;
      border: none;
      color: var(--hot-color-red-500);
      transition: all 0.2s ease;
    }

    :host([variant="text"])::part(base):hover {
      background: var(--hot-color-red-50);
      color: var(--hot-color-red-600);
    }

    :host([variant="text"])::part(base):active {
      background: var(--hot-color-red-100);
      color: var(--hot-color-red-700);
    }

    /* Enhanced button label styling */
    :host::part(label) {
      font-family: var(--hot-font-sans);
      font-weight: 500;
      letter-spacing: 0.025em;
    }

    /* Button states */
    :host:state(disabled)::part(base) {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
      background: var(--hot-color-gray-200);
      border-color: var(--hot-color-gray-300);
      color: var(--hot-color-gray-500);
    }

    :host:state(loading)::part(base) {
      cursor: wait;
      position: relative;
    }

    /* Focus styles for accessibility */
    :host::part(base):focus-visible {
      outline: 2px solid var(--hot-color-red-400);
      outline-offset: 2px;
    }

    /* Gradient button styles */
    :host(.gradient-button)::part(base) {
      background: linear-gradient(217deg, var(--wa-color-indigo-50), var(--wa-color-purple-50), var(--wa-color-red-50));
      border: solid 1px var(--wa-color-purple-50);
      transition: transform 100ms, box-shadow 100ms;
    }

    :host(.gradient-button)::part(base):hover {
      box-shadow: var(--wa-shadow-m, 0 4px 8px rgba(0, 0, 0, 0.1));
      transform: translateY(-3px);
    }

    :host(.gradient-button)::part(base):active {
      box-shadow: inset var(--wa-shadow-s, inset 0 2px 4px rgba(0, 0, 0, 0.1));
      transform: translateY(0);
    }

    :host(.gradient-button)::part(label) {
      color: white;
      text-shadow: rgb(0 0 0 / 0.3) 0 -1px;
    }
  `,selector:"wa-button",all:!0,styleId:"hot-theme-variables"})}function bt(){xi();let n=["wa-tab-group","wa-dialog","wa-drawer","wa-icon","wa-callout","wa-card","wa-input","wa-select","wa-checkbox","wa-radio","wa-switch","wa-slider"],t=`
    :host {
      /* Brand colors - Primary semantic colors */
      --wa-color-brand-95: var(--hot-color-primary-50);
      --wa-color-brand-90: var(--hot-color-primary-100);
      --wa-color-brand-80: var(--hot-color-primary-200);
      --wa-color-brand-70: var(--hot-color-primary-300);
      --wa-color-brand-60: var(--hot-color-primary-400);
      --wa-color-brand-50: var(--hot-color-primary-500);
      --wa-color-brand-40: var(--hot-color-primary-600);
      --wa-color-brand-30: var(--hot-color-primary-700);
      --wa-color-brand-20: var(--hot-color-primary-800);
      --wa-color-brand-10: var(--hot-color-primary-900);
      --wa-color-brand-05: var(--hot-color-primary-950);
      --wa-color-brand: var(--wa-color-brand-50);

      /* Neutral colors - For text, borders, backgrounds */
      --wa-color-neutral-95: var(--hot-color-neutral-50);
      --wa-color-neutral-90: var(--hot-color-neutral-100);
      --wa-color-neutral-80: var(--hot-color-neutral-200);
      --wa-color-neutral-70: var(--hot-color-neutral-300);
      --wa-color-neutral-60: var(--hot-color-neutral-400);
      --wa-color-neutral-50: var(--hot-color-neutral-500);
      --wa-color-neutral-40: var(--hot-color-neutral-600);
      --wa-color-neutral-30: var(--hot-color-neutral-700);
      --wa-color-neutral-20: var(--hot-color-neutral-800);
      --wa-color-neutral-10: var(--hot-color-neutral-900);
      --wa-color-neutral-05: var(--hot-color-neutral-950);
      --wa-color-neutral: var(--wa-color-neutral-40);

      /* Success colors */
      --wa-color-success-95: var(--hot-color-success-50);
      --wa-color-success-90: var(--hot-color-success-100);
      --wa-color-success-50: var(--hot-color-success-500);
      --wa-color-success-40: var(--hot-color-success-600);
      --wa-color-success: var(--wa-color-success-60);

      /* Warning colors */
      --wa-color-warning-95: var(--hot-color-warning-50);
      --wa-color-warning-90: var(--hot-color-warning-100);
      --wa-color-warning-50: var(--hot-color-warning-500);
      --wa-color-warning-40: var(--hot-color-warning-600);
      --wa-color-warning: var(--wa-color-warning-80);

      /* Danger colors */
      --wa-color-danger-95: var(--hot-color-danger-50);
      --wa-color-danger-90: var(--hot-color-danger-100);
      --wa-color-danger-50: var(--hot-color-danger-500);
      --wa-color-danger-40: var(--hot-color-danger-600);
      --wa-color-danger: var(--wa-color-danger-50);

      /* HOT Typography for components */
      --wa-font-family-body: var(--hot-font-sans);
      --wa-font-family-heading: var(--hot-font-sans-variant);
    }
  `;n.forEach(e=>{ga({css:t,selector:e,all:!0,styleId:"hot-theme-essential-variables"})})}function ba(){bt(),new MutationObserver(t=>{t.forEach(e=>{e.addedNodes.forEach(o=>{if(o.nodeType===Node.ELEMENT_NODE){let r=o;r.tagName.toLowerCase().startsWith("wa-")&&setTimeout(()=>bt(),10),r.querySelectorAll('[tag-name^="wa-"], wa-button, wa-tab-group, wa-dialog, wa-drawer, wa-icon').length>0&&setTimeout(()=>bt(),10)}})})}).observe(document.body,{childList:!0,subtree:!0})}var Si=`data:image/svg+xml;utf8,${encodeURIComponent(va)}`;yo();var ya,wa,_a,ka,xa,Sa,Ca,Oa,Aa,Ea,Ia,Ta,Te=class extends mo{constructor(){super(...arguments);this.name="hot-header";Ue(this,ya,"");Ue(this,wa,"");Ue(this,_a,!0);Ue(this,ka,[]);Ue(this,xa,[]);Ue(this,Sa,"small");Ue(this,Ca,!0);Ue(this,Oa,0);Ue(this,Aa,0);Ue(this,Ea,!1);Ue(this,Ia,!1);Ue(this,Ta,"user")}get title(){return Ne(this,ya)}set title(e){ze(this,ya,e)}get logo(){return Ne(this,wa)}set logo(e){ze(this,wa,e)}get drawer(){return Ne(this,_a)}set drawer(e){ze(this,_a,e)}get tabs(){return Ne(this,ka)}set tabs(e){ze(this,ka,e)}get drawerLinks(){return Ne(this,xa)}set drawerLinks(e){ze(this,xa,e)}get size(){return Ne(this,Sa)}set size(e){ze(this,Sa,e)}get borderBottom(){return Ne(this,Ca)}set borderBottom(e){ze(this,Ca,e)}get selectedTab(){return Ne(this,Oa)}set selectedTab(e){ze(this,Oa,e)}get activeTabIndex(){return Ne(this,Aa)}set activeTabIndex(e){ze(this,Aa,e)}get showLogin(){return Ne(this,Ea)}set showLogin(e){ze(this,Ea,e)}get loginModalOpen(){return Ne(this,Ia)}set loginModalOpen(e){ze(this,Ia,e)}get defaultLoginIcon(){return Ne(this,Ta)}set defaultLoginIcon(e){ze(this,Ta,e)}async connectedCallback(){super.connectedCallback(),ba(),await ma("https://dev.login.hotosm.org",{shadow:!1,sessionCheckInterval:3e4}).catch(e=>{})}firstUpdated(){setTimeout(()=>{bt()},100)}updated(){requestAnimationFrame(()=>{bt()})}selectTab(e){if(console.log("Selecting tab:",e),e!==this.selectedTab&&e>=0&&e<this.tabs.length){let o=this.selectedTab;this.selectedTab=e,this.activeTabIndex=e,this.dispatchEvent(new CustomEvent("tab-change",{detail:{selectedIndex:e,previousIndex:o,tab:this.tabs[e]},bubbles:!0})),this.requestUpdate()}}render(){let e=typeof this.logo=="string"||this.logo instanceof URL?typeof this.logo=="string"?this.logo:this.logo.href:"";return le`
      <header class=${go({size:this.size,borderBottom:this.borderBottom})}>
        <a href="/" class="header--link">
          ${e.length>0?le`
                <img
                  id="logo"
                  src="${this.logo}"
                  alt="Logo"
                  class="header--logo-img"
                />
              `:le`
            <hot-logo
              ?iconOnly="${this.title.length>0}"
            >
            </hot-logo>
            `}
          ${this.title.length>0?le`
                <h1 class="header--title">
                  ${this.title}
                </h1>
              `:null}
        </a>

        ${""}
        <nav
          class="header--nav"
        >
        ${this.tabs.length>0?le`
          <wa-tab-group 
            class="header--tab-group"
            @wa-tab-show=${o=>this._handleTabShow(o)}
          >
            ${this.tabs.map((o,r)=>{let i=this.activeTabIndex===r;return le`
                <wa-tab
                  panel="${o.label}-${r}"
                  class="header--tab"
                  slot="nav"
                  ?active=${i}
                  data-index="${r}"
                  @click=${s=>this._tabClick(s,o.clickEvent,r)}
                >
                  ${o.label}
                </wa-tab>
              `})}
          </wa-tab-group>
          `:null}
        </nav>

        

        <div id="right-section" class="header--right-section">
           ${this.showLogin?le`
                <wa-button
                  variant="brand"
                  class="login-button"
                  @click=${()=>this._handleLogin()}
                >
                  Login
                </wa-button>
              `:null}
          ${this.drawer?le`
                <wa-drawer label=" " id="drawer-overview">
                  <ul style="list-style: none; padding: 0; margin: 0;">
                    ${this.drawerLinks.map(o=>le`
                        <li style="margin: 1.5rem 0;">
                          <a href="${o.href}" style="color: inherit; text-decoration: none; font-size: 1.2rem;">${o.label}</a>
                        </li>
                      `)}
                  </ul>
                </wa-drawer>
                <wa-button appearance="outlined" @click=${()=>this._handleDrawerOpen()}>
                    <wa-icon name="bars"></wa-icon>
                </wa-button>
              `:null}
        </div>

        <!-- Login Modal -->
        ${this.showLogin?le`
              <wa-dialog 
                class="login-modal"
                ?open=${this.loginModalOpen}
                @wa-hide=${()=>this._handleModalClose()}
              >
                <wa-button appearance="outlined" @click=${()=>this._handleModalClose()}>
                    <wa-icon  name="xmark"></wa-icon>
                </wa-button>

                <hanko-auth redirect-to="${location.origin}"></hanko-auth>
              </wa-dialog>
            `:null}
      </header>

      <!-- Here we must directly include the hanko style overrides, as it includes a SVG -->
      <!-- Note we can't remove the existing svg, so need to hide and override it -->
      <!-- THIS ISN'T WORKING WELL. We can either try and fix the styling or perhaps manipulate the DOM via Javascript instead?? -->
      <style>
        .hanko_form #icon-custom-provider {
          display: none;
        }
      
        .hanko_form .hanko_loadingSpinnerWrapperIcon:has(#icon-custom-provider) {
          background: url("${Si}") no-repeat center center;
          background-size: contain;
          display: inline-flex;
          align-items: center;
          height: 100%;
          margin: 0 5px;
          justify-content: inherit;
          flex-wrap: inherit;
          width: 100%;
          column-gap: 10px;
          margin-left: 10px;
        }
      </style>
    `}async _tabClick(e,o,r){e.preventDefault(),e.stopPropagation();try{this.selectTab(r),setTimeout(async()=>{try{typeof o=="function"&&await o()}catch(i){console.error("Error during navigation:",i),typeof o=="function"&&o()}},0)}catch(i){console.error("Error handling tab click:",i);try{typeof o=="function"&&o()}catch(s){console.error("Fallback navigation also failed:",s)}}}_handleTabShow(e){try{let o=e.target,r=parseInt(o.getAttribute("data-index")||"0",10);if(!isNaN(r)&&r<this.tabs.length){let i=this.tabs[r].clickEvent;typeof i=="function"&&i()}}catch(o){console.error("Error handling tab show event:",o)}}_handleLogin(){this.loginModalOpen=!0,this.dispatchEvent(new Event("login"))}_handleModalClose(){this.loginModalOpen=!1}_handleDrawerOpen(){var o;let e=(o=this.renderRoot)==null?void 0:o.querySelector("#drawer-overview");e&&(e.open=!0)}};ya=new WeakMap,wa=new WeakMap,_a=new WeakMap,ka=new WeakMap,xa=new WeakMap,Sa=new WeakMap,Ca=new WeakMap,Oa=new WeakMap,Aa=new WeakMap,Ea=new WeakMap,Ia=new WeakMap,Ta=new WeakMap,Te.styles=[bo],Me([$({type:String})],Te.prototype,"title",1),Me([$({type:String})],Te.prototype,"logo",1),Me([$({type:Boolean})],Te.prototype,"drawer",1),Me([$({type:Array})],Te.prototype,"tabs",1),Me([$({type:Array})],Te.prototype,"drawerLinks",1),Me([$({type:String})],Te.prototype,"size",1),Me([$({type:Boolean})],Te.prototype,"borderBottom",1),Me([$({type:Number})],Te.prototype,"selectedTab",1),Me([$({type:Number})],Te.prototype,"activeTabIndex",1),Me([$({type:Boolean})],Te.prototype,"showLogin",1),Me([$({type:Boolean})],Te.prototype,"loginModalOpen",1),Me([$({type:String,attribute:"default-login-icon"})],Te.prototype,"defaultLoginIcon",1);var Bc=Te;export{ga as a,xi as b,bt as c,ba as d,Te as e,Bc as f};
/*! Bundled license information:

@teamhanko/hanko-elements/dist/elements.js:
  (*! For license information please see elements.js.LICENSE.txt *)
*/
