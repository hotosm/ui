import{a as O,b as g,c as i,d as k,e as C,f as W}from"./chunk.2MK55PUE.js";import{a as y,b as s,c as D,d as x}from"./chunk.6ZDEZIWM.js";import{a as M}from"./chunk.KO4EOD3I.js";import{a as q,b as z}from"./chunk.IG27I42A.js";import{e as r,k as B}from"./chunk.U4P7XQR4.js";import{a as A,d as h,e as p,f as u,g as b}from"./chunk.NI7UJOOZ.js";function rt(t,n){return{top:Math.round(t.getBoundingClientRect().top-n.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-n.getBoundingClientRect().left)}}var T=new Set;function lt(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function ct(){let t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function $(t){if(T.add(t),!document.documentElement.classList.contains("wa-scroll-lock")){let n=lt()+ct(),e=getComputedStyle(document.documentElement).scrollbarGutter;(!e||e==="auto")&&(e="stable"),n<2&&(e=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",e),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${n}px`)}}function P(t){T.delete(t),T.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function I(t,n,e="vertical",o="smooth"){let a=rt(t,n),l=a.top+n.scrollTop,c=a.left+n.scrollLeft,f=n.scrollLeft,E=n.scrollLeft+n.offsetWidth,it=n.scrollTop,st=n.scrollTop+n.offsetHeight;(e==="horizontal"||e==="both")&&(c<f?n.scrollTo({left:c,behavior:o}):c+t.clientWidth>E&&n.scrollTo({left:c-n.offsetWidth+t.clientWidth,behavior:o})),(e==="vertical"||e==="both")&&(l<it?n.scrollTo({top:l,behavior:o}):l+t.clientHeight>st&&n.scrollTo({top:l-n.offsetHeight+t.clientHeight,behavior:o}))}var dt=class extends Event{constructor(t){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},ht=class extends Event{constructor(t){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},pt=`:host {
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
`,m=class extends k{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new O(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(e=>!["aria-labelledby","aria-controls"].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels());let n=t.filter(e=>e.target.closest("wa-tab-group")===this);if(n.some(e=>e.attributeName==="disabled"))this.syncTabsAndPanels();else if(n.some(e=>e.attributeName==="active")){let o=n.filter(a=>a.attributeName==="active"&&a.target.tagName.toLowerCase()==="wa-tab").map(a=>a.target).find(a=>a.active);o&&o.closest("wa-tab-group")===this&&this.setActiveTab(o)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((n,e)=>{var o;if(n[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){let a=this.tabs.find(l=>l.panel===this.active);a&&this.setActiveTab(a)}else this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1});e.unobserve(n[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){var t,n;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((n=this.resizeObserver)==null||n.unobserve(this.nav))}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(n=>n.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){let e=t.target.closest("wa-tab");(e==null?void 0:e.closest("wa-tab-group"))===this&&e!==null&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){let e=t.target.closest("wa-tab");if((e==null?void 0:e.closest("wa-tab-group"))===this){if(["Enter"," "].includes(t.key)){e!==null&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let a=this.tabs.find(f=>f.matches(":focus")),l=this.localize.dir()==="rtl",c=null;if((a==null?void 0:a.tagName.toLowerCase())==="wa-tab"){if(t.key==="Home")c=this.focusableTabs[0];else if(t.key==="End")c=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(l?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){let f=this.tabs.findIndex(E=>E===a);c=this.findNextFocusableTab(f,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(l?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){let f=this.tabs.findIndex(E=>E===a);c=this.findNextFocusableTab(f,"forward")}if(!c)return;c.tabIndex=0,c.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(c,{scrollBehavior:"smooth"}):this.tabs.forEach(f=>{f.tabIndex=f===c?0:-1}),["top","bottom"].includes(this.placement)&&I(c,this.nav,"horizontal"),t.preventDefault()}}}}findNextFocusableTab(t,n){let e=null,o=n==="forward"?1:-1,a=t+o;for(;t<this.tabs.length;){if(e=this.tabs[a]||null,e===null){n==="forward"?e=this.focusableTabs[0]:e=this.focusableTabs[this.focusableTabs.length-1];break}if(!e.disabled)break;a+=o}return e}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,n){if(n=A({emitEvents:!0,scrollBehavior:"auto"},n),t.closest("wa-tab-group")===this&&t!==this.activeTab&&!t.disabled){let e=this.activeTab;this.active=t.panel,this.activeTab=t,this.tabs.forEach(o=>{o.active=o===this.activeTab,o.tabIndex=o===this.activeTab?0:-1}),this.panels.forEach(o=>{var a;return o.active=o.name===((a=this.activeTab)==null?void 0:a.panel)}),["top","bottom"].includes(this.placement)&&I(this.activeTab,this.nav,"horizontal",n.scrollBehavior),n.emitEvents&&(e&&this.dispatchEvent(new dt({name:e.panel})),this.dispatchEvent(new ht({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(t=>{let n=this.panels.find(e=>e.name===t.panel);n&&(t.setAttribute("aria-controls",n.getAttribute("id")),n.setAttribute("aria-labelledby",t.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){let t=this.tabs.find(n=>n.panel===this.active);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){let t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return r`
      <div
        part="base"
        class=${C({"tab-group":!0,"tab-group-top":this.placement==="top","tab-group-bottom":this.placement==="bottom","tab-group-start":this.placement==="start","tab-group-end":this.placement==="end","tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?r`
                <wa-button
                  part="scroll-button scroll-button-start"
                  exportparts="base:scroll-button__base"
                  class="scroll-button scroll-button-start"
                  appearance="plain"
                  @click=${this.handleScrollToStart}
                >
                  <wa-icon
                    name=${t?"chevron-right":"chevron-left"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToStart")}
                  ></wa-icon>
                </wa-button>
              `:""}

          <!-- We have a focus listener because in Firefox (and soon to be Chrome) overflow containers are focusable. -->
          <div class="nav" @focus=${()=>{var n;return(n=this.activeTab)==null?void 0:n.focus({preventScroll:!0})}}>
            <div part="tabs" class="tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?r`
                <wa-button
                  part="scroll-button scroll-button-end"
                  class="scroll-button scroll-button-end"
                  exportparts="base:scroll-button__base"
                  appearance="plain"
                  @click=${this.handleScrollToEnd}
                >
                  <wa-icon
                    name=${t?"chevron-left":"chevron-right"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToEnd")}
                  ></wa-icon>
                </wa-button>
              `:""}
        </div>

        <slot part="body" class="body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};m.css=pt;i([x(".tab-group")],m.prototype,"tabGroup",2);i([x(".body")],m.prototype,"body",2);i([x(".nav")],m.prototype,"nav",2);i([D()],m.prototype,"hasScrollControls",2);i([s({reflect:!0})],m.prototype,"active",2);i([s()],m.prototype,"placement",2);i([s()],m.prototype,"activation",2);i([s({attribute:"without-scroll-controls",type:Boolean})],m.prototype,"withoutScrollControls",2);i([g("active")],m.prototype,"updateActiveTab",1);i([g("withoutScrollControls",{waitUntilFirstUpdate:!0})],m.prototype,"updateScrollControls",1);m=i([y("wa-tab-group")],m);var ut=`:host {
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
`,bt=0,v=class extends k{constructor(){super(...arguments),this.attrId=++bt,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||(this.slot="nav"),super.connectedCallback(),this.setAttribute("role","tab")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){var t;return this.id=((t=this.id)==null?void 0:t.length)>0?this.id:this.componentId,r`
      <div
        part="base"
        class=${C({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};v.css=ut;i([x(".tab")],v.prototype,"tab",2);i([s({reflect:!0})],v.prototype,"panel",2);i([s({type:Boolean,reflect:!0})],v.prototype,"active",2);i([s({type:Boolean,reflect:!0})],v.prototype,"disabled",2);i([s({type:Number,reflect:!0})],v.prototype,"tabIndex",2);i([g("active")],v.prototype,"handleActiveChange",1);i([g("disabled")],v.prototype,"handleDisabledChange",1);v=i([y("wa-tab")],v);var mt=`:host {
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
`,ft=0,L=class extends k{constructor(){super(...arguments),this.attrId=++ft,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return r`
      <slot
        part="base"
        class=${C({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};L.css=mt;i([s({reflect:!0})],L.prototype,"name",2);i([s({type:Boolean,reflect:!0})],L.prototype,"active",2);i([g("active")],L.prototype,"handleActiveChange",1);L=i([y("wa-tab-panel")],L);function U(t){return t.split(" ").map(n=>n.trim()).filter(n=>n!=="")}var N=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},R=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}},G=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}},H=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};function S(t,n){return new Promise(e=>{let o=new AbortController,{signal:a}=o;if(t.classList.contains(n))return;t.classList.remove(n),t.classList.add(n);let l=()=>{t.classList.remove(n),e(),o.abort()};t.addEventListener("animationend",l,{once:!0,signal:a}),t.addEventListener("animationcancel",l,{once:!0,signal:a})})}var vt=`:host {
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
`,w=class extends k{constructor(){super(...arguments),this.localize=new O(this),this.hasSlotController=new W(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),$(this))}disconnectedCallback(){super.disconnectedCallback(),P(this),this.removeOpenListeners()}async requestClose(t){let n=new G({source:t});if(this.dispatchEvent(n),n.defaultPrevented){this.open=!0,S(this.dialog,"pulse");return}this.removeOpenListeners(),await S(this.dialog,"hide"),this.open=!1,this.dialog.close(),P(this);let e=this.originalTrigger;typeof(e==null?void 0:e.focus)=="function"&&setTimeout(()=>e.focus()),this.dispatchEvent(new N)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(t){t.preventDefault(),this.dialog.classList.contains("hide")||this.requestClose(this.dialog)}handleDialogClick(t){let e=t.target.closest('[data-dialog="close"]');e&&(t.stopPropagation(),this.requestClose(e))}async handleDialogPointerDown(t){t.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await S(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){let t=new H;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),$(this),requestAnimationFrame(()=>{let n=this.querySelector("[autofocus]");n&&typeof n.focus=="function"&&n.focus()}),await S(this.dialog,"show"),this.dispatchEvent(new R)}render(){let t=!this.withoutHeader&&(this.label.length>0||this.hasSlotController.test("label")||this.hasSlotController.test("header-actions")),n=this.hasSlotController.test("footer");return r`
      <dialog
        part="dialog"
        class=${C({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?r`
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

        ${n?r`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};w.css=vt;i([x(".dialog")],w.prototype,"dialog",2);i([s({type:Boolean,reflect:!0})],w.prototype,"open",2);i([s({reflect:!0})],w.prototype,"label",2);i([s({attribute:"without-header",type:Boolean,reflect:!0})],w.prototype,"withoutHeader",2);i([s({attribute:"light-dismiss",type:Boolean})],w.prototype,"lightDismiss",2);i([g("open",{waitUntilFirstUpdate:!0})],w.prototype,"handleOpenChange",1);w=i([y("wa-dialog")],w);document.addEventListener("click",t=>{let n=t.target.closest("[data-dialog]");if(n instanceof Element){let[e,o]=U(n.getAttribute("data-dialog")||"");if(e==="open"&&(o!=null&&o.length)){let l=n.getRootNode().getElementById(o);(l==null?void 0:l.localName)==="wa-dialog"?l.open=!0:console.warn(`A dialog with an ID of "${o}" could not be found in this document.`)}}});!1||document.addEventListener("pointerdown",()=>{});var F="data:image/png;base64,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";M();var _,j,Z,J,Q,K,X,V,Y,tt,et,nt,ot,at,d=class extends B{constructor(){super(...arguments);this.name="hot-header";u(this,_,"");u(this,j,"");u(this,Z,!0);u(this,J,[]);u(this,Q,"small");u(this,K,!0);u(this,X,0);u(this,V,!1);u(this,Y,!1);u(this,tt,{});u(this,et,"user");u(this,nt,"https://www.openstreetmap.org/oauth2/authorize");u(this,ot,"");u(this,at,"")}get title(){return p(this,_)}set title(e){b(this,_,e)}get logo(){return p(this,j)}set logo(e){b(this,j,e)}get drawer(){return p(this,Z)}set drawer(e){b(this,Z,e)}get tabs(){return p(this,J)}set tabs(e){b(this,J,e)}get size(){return p(this,Q)}set size(e){b(this,Q,e)}get borderBottom(){return p(this,K)}set borderBottom(e){b(this,K,e)}get selectedTab(){return p(this,X)}set selectedTab(e){b(this,X,e)}get showLogin(){return p(this,V)}set showLogin(e){b(this,V,e)}get loginModalOpen(){return p(this,Y)}set loginModalOpen(e){b(this,Y,e)}get loginProviders(){return p(this,tt)}set loginProviders(e){b(this,tt,e)}get defaultLoginIcon(){return p(this,et)}set defaultLoginIcon(e){b(this,et,e)}get osmOauthUrl(){return p(this,nt)}set osmOauthUrl(e){b(this,nt,e)}get OsmOauthClientId(){return p(this,ot)}set OsmOauthClientId(e){b(this,ot,e)}get OsmOauthRedirectUri(){return p(this,at)}set OsmOauthRedirectUri(e){b(this,at,e)}get loginOptions(){return Object.keys(this.loginProviders).length===0&&this.OsmOauthClientId&&this.OsmOauthRedirectUri?[{id:"osm",name:"Personal OSM Account",image:F}]:Object.entries(this.loginProviders).map(([e,o])=>({id:e,name:o.name||this.formatProviderName(e),icon:o.icon?void 0:this.defaultLoginIcon,image:o.icon}))}formatProviderName(e){return e.split("_").map(o=>o.charAt(0).toUpperCase()+o.slice(1).toLowerCase()).join(" ")}selectTab(e){console.log(e),this.tabs=[...this.tabs],this.selectedTab=e}performLogin(e){let o=this.loginProviders[e];if(!o){if(e==="osm"){this.legacyOsmLoginRedirect();return}console.error(`Login provider '${e}' not found`);return}if(!o.clientId){window.location.href=o.loginUrl;return}let a=window.location.pathname+window.location.search;sessionStorage.setItem("requestedPath",a);let l=new URLSearchParams(A({client_id:o.clientId,redirect_uri:o.redirectUrl,response_type:"code"},o.scope&&{scope:o.scope})),c=`${o.loginUrl}?${l.toString()}`;window.location.href=c}legacyOsmLoginRedirect(){if(!this.OsmOauthClientId||!this.OsmOauthRedirectUri){console.error("OSM OAuth client ID and redirect URI must be provided");return}let e=window.location.pathname+window.location.search;sessionStorage.setItem("requestedPath",e);let o=new URLSearchParams({client_id:this.OsmOauthClientId,redirect_uri:this.OsmOauthRedirectUri,response_type:"code",scope:"read_prefs"}),a=`${this.osmOauthUrl}?${o.toString()}`;window.location.href=a}handleSignIn(e){this.performLogin(e),this.loginModalOpen=!1}render(){let e=typeof this.logo=="string"||this.logo instanceof URL?typeof this.logo=="string"?this.logo:this.logo.href:"";return r`
      <header class=${q({size:this.size,borderBottom:this.borderBottom})}>
        <a href="/" class="header--link">
          ${e.length>0?r`
                <img
                  id="logo"
                  src="${this.logo}"
                  alt="Logo"
                  class="header--logo-img"
                />
              `:r`
            <hot-logo
              ?iconOnly="${this.title.length>0}"
            >
            </hot-logo>
            `}
          ${this.title.length>0?r`
                <h1 class="header--title">
                  ${this.title}
                </h1>
              `:null}
        </a>

        ${""}
        <nav
          class="header--nav"
        >
        ${this.tabs.length>0?r`
          <wa-tab-group class="header--tab-group">
            ${this.tabs.map((o,a)=>{let c=this.selectedTab===a?"header--tab header--tab-active":"header--tab";return r`
                <wa-tab
                  panel="${o.label}"
                  class="${c}"
                  slot="nav"
                  @click=${f=>this._tabClick(f,o.clickEvent,a)}
                >
                  ${o.label}
                </wa-tab>
              `})}
          </wa-tab-group>
          `:null}
        </nav>

        ${""}
        ${""}
        <nav
          class="header--nav-mobile"
        ></nav>

        <div id="right-section" class="header--right-section">
          ${this.showLogin?r`
                <wa-button
                  variant="brand"
                  class="header--login-button"
                  @click=${()=>this._handleLogin()}
                >
                  Login
                </wa-button>
              `:null}
          ${this.drawer?r`
                <wa-button>
                  <wa-icon library="hot-icons" name="list" label="drawer-open" class="header--drawer">
                  </wa-icon>
                </wa-button>
              `:null}
        </div>

                <!-- Login Modal -->
        ${this.showLogin?r`
              <wa-dialog 
                class="login-modal"
                ?open=${this.loginModalOpen}
                @wa-hide=${()=>this._handleModalClose()}
                label="Sign In"
              >
                <div class="login-content">
                  <div class="login-options">
                    ${this.loginOptions.map(o=>r`
                      <div
                        class="login-option"
                        @click=${()=>this.handleSignIn(o.id)}
                      >
                        <div class="login-option-icon">
                          ${o.image?r`<img src="${o.image}" alt="${o.name}" />`:o.icon?r`<wa-icon name="${o.icon}"></wa-icon>`:null}
                        </div>
                        <div class="login-option-text">${o.name}</div>
                      </div>
                    `)}
                  </div>
                </div>
              </wa-dialog>
            `:null}
      </header>
    `}_tabClick(e,o,a){this.selectTab(a),o()}_handleLogin(){this.loginModalOpen=!0,this.dispatchEvent(new Event("login"))}_handleModalClose(){this.loginModalOpen=!1}};_=new WeakMap,j=new WeakMap,Z=new WeakMap,J=new WeakMap,Q=new WeakMap,K=new WeakMap,X=new WeakMap,V=new WeakMap,Y=new WeakMap,tt=new WeakMap,et=new WeakMap,nt=new WeakMap,ot=new WeakMap,at=new WeakMap,d.styles=[z],h([s({type:String})],d.prototype,"title",1),h([s({type:String})],d.prototype,"logo",1),h([s({type:Boolean})],d.prototype,"drawer",1),h([s({type:Array})],d.prototype,"tabs",1),h([s({type:String})],d.prototype,"size",1),h([s({type:Boolean})],d.prototype,"borderBottom",1),h([s({type:Number})],d.prototype,"selectedTab",1),h([s({type:Boolean})],d.prototype,"showLogin",1),h([s({type:Boolean})],d.prototype,"loginModalOpen",1),h([s({type:Object,attribute:"login-providers"})],d.prototype,"loginProviders",1),h([s({type:String,attribute:"default-login-icon"})],d.prototype,"defaultLoginIcon",1),h([s({type:String,attribute:"osm-oauth-url"})],d.prototype,"osmOauthUrl",1),h([s({type:String,attribute:"osm-oauth-client-id"})],d.prototype,"OsmOauthClientId",1),h([s({type:String,attribute:"osm-oauth-redirect-uri"})],d.prototype,"OsmOauthRedirectUri",1);var wn=d;export{d as a,wn as b};
