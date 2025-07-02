import{c as y}from"./chunk.7VBX4GII.js";import{a as T,b as m}from"./chunk.I26W4NHZ.js";import{a as h}from"./chunk.OHRBDQCO.js";import"./chunk.TFICHQZE.js";import{a as n,b as v}from"./chunk.FIQQYKEP.js";import{a as p,b as s,c as x,d as u}from"./chunk.6ZDEZIWM.js";import{e as b}from"./chunk.U4P7XQR4.js";import{a as k}from"./chunk.NI7UJOOZ.js";var A=class extends Event{constructor(t){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},C=class extends Event{constructor(t){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},S=`:host {
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
`,i=class extends v{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new T(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(e=>!["aria-labelledby","aria-controls"].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels());let a=t.filter(e=>e.target.closest("wa-tab-group")===this);if(a.some(e=>e.attributeName==="disabled"))this.syncTabsAndPanels();else if(a.some(e=>e.attributeName==="active")){let r=a.filter(o=>o.attributeName==="active"&&o.target.tagName.toLowerCase()==="wa-tab").map(o=>o.target).find(o=>o.active);r&&r.closest("wa-tab-group")===this&&this.setActiveTab(r)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((a,e)=>{var r;if(a[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){let o=this.tabs.find(w=>w.panel===this.active);o&&this.setActiveTab(o)}else this.setActiveTab((r=this.getActiveTab())!=null?r:this.tabs[0],{emitEvents:!1});e.unobserve(a[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){var t,a;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((a=this.resizeObserver)==null||a.unobserve(this.nav))}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(a=>a.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){let e=t.target.closest("wa-tab");(e==null?void 0:e.closest("wa-tab-group"))===this&&e!==null&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){let e=t.target.closest("wa-tab");if((e==null?void 0:e.closest("wa-tab-group"))===this){if(["Enter"," "].includes(t.key)){e!==null&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let o=this.tabs.find(d=>d.matches(":focus")),w=this.localize.dir()==="rtl",l=null;if((o==null?void 0:o.tagName.toLowerCase())==="wa-tab"){if(t.key==="Home")l=this.focusableTabs[0];else if(t.key==="End")l=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(w?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){let d=this.tabs.findIndex(g=>g===o);l=this.findNextFocusableTab(d,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(w?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){let d=this.tabs.findIndex(g=>g===o);l=this.findNextFocusableTab(d,"forward")}if(!l)return;l.tabIndex=0,l.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(l,{scrollBehavior:"smooth"}):this.tabs.forEach(d=>{d.tabIndex=d===l?0:-1}),["top","bottom"].includes(this.placement)&&y(l,this.nav,"horizontal"),t.preventDefault()}}}}findNextFocusableTab(t,a){let e=null,r=a==="forward"?1:-1,o=t+r;for(;t<this.tabs.length;){if(e=this.tabs[o]||null,e===null){a==="forward"?e=this.focusableTabs[0]:e=this.focusableTabs[this.focusableTabs.length-1];break}if(!e.disabled)break;o+=r}return e}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,a){if(a=k({emitEvents:!0,scrollBehavior:"auto"},a),t.closest("wa-tab-group")===this&&t!==this.activeTab&&!t.disabled){let e=this.activeTab;this.active=t.panel,this.activeTab=t,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>{var o;return r.active=r.name===((o=this.activeTab)==null?void 0:o.panel)}),["top","bottom"].includes(this.placement)&&y(this.activeTab,this.nav,"horizontal",a.scrollBehavior),a.emitEvents&&(e&&this.dispatchEvent(new A({name:e.panel})),this.dispatchEvent(new C({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(t=>{let a=this.panels.find(e=>e.name===t.panel);a&&(t.setAttribute("aria-controls",a.getAttribute("id")),a.setAttribute("aria-labelledby",t.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){let t=this.tabs.find(a=>a.panel===this.active);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){let t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return b`
      <div
        part="base"
        class=${m({"tab-group":!0,"tab-group-top":this.placement==="top","tab-group-bottom":this.placement==="bottom","tab-group-start":this.placement==="start","tab-group-end":this.placement==="end","tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?b`
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
          <div class="nav" @focus=${()=>{var a;return(a=this.activeTab)==null?void 0:a.focus({preventScroll:!0})}}>
            <div part="tabs" class="tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?b`
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
    `}};i.css=S;n([u(".tab-group")],i.prototype,"tabGroup",2);n([u(".body")],i.prototype,"body",2);n([u(".nav")],i.prototype,"nav",2);n([x()],i.prototype,"hasScrollControls",2);n([s({reflect:!0})],i.prototype,"active",2);n([s()],i.prototype,"placement",2);n([s()],i.prototype,"activation",2);n([s({attribute:"without-scroll-controls",type:Boolean})],i.prototype,"withoutScrollControls",2);n([h("active")],i.prototype,"updateActiveTab",1);n([h("withoutScrollControls",{waitUntilFirstUpdate:!0})],i.prototype,"updateScrollControls",1);i=n([p("wa-tab-group")],i);var E=`:host {
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
`,I=0,c=class extends v{constructor(){super(...arguments),this.attrId=++I,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||(this.slot="nav"),super.connectedCallback(),this.setAttribute("role","tab")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){var t;return this.id=((t=this.id)==null?void 0:t.length)>0?this.id:this.componentId,b`
      <div
        part="base"
        class=${m({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};c.css=E;n([u(".tab")],c.prototype,"tab",2);n([s({reflect:!0})],c.prototype,"panel",2);n([s({type:Boolean,reflect:!0})],c.prototype,"active",2);n([s({type:Boolean,reflect:!0})],c.prototype,"disabled",2);n([s({type:Number,reflect:!0})],c.prototype,"tabIndex",2);n([h("active")],c.prototype,"handleActiveChange",1);n([h("disabled")],c.prototype,"handleDisabledChange",1);c=n([p("wa-tab")],c);var $=`:host {
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
`,L=0,f=class extends v{constructor(){super(...arguments),this.attrId=++L,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return b`
      <slot
        part="base"
        class=${m({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};f.css=$;n([s({reflect:!0})],f.prototype,"name",2);n([s({type:Boolean,reflect:!0})],f.prototype,"active",2);n([h("active")],f.prototype,"handleActiveChange",1);f=n([p("wa-tab-panel")],f);export{i as default};
