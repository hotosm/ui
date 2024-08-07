import{c as _,_ as i,e as k,n as c,w as x,a as E,L as F,R as W,r as P,g as N,d as R}from"./icons-oafdsS42.js";import{S}from"./chunk.XJILXOW4-CodlnP1p.js";import{i as w,k as u,h as G}from"./lit-element-CPYlYYac.js";function H(t,o){return{top:Math.round(t.getBoundingClientRect().top-o.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-o.getBoundingClientRect().left)}}var A=new Set;function Q(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Y(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function rt(t){if(A.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const o=Q()+Y();let e=getComputedStyle(document.documentElement).scrollbarGutter;(!e||e==="auto")&&(e="stable"),o<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${o}px`)}}function st(t){A.delete(t),A.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function B(t,o,e="vertical",a="smooth"){const r=H(t,o),l=r.top+o.scrollTop,s=r.left+o.scrollLeft,n=o.scrollLeft,p=o.scrollLeft+o.offsetWidth,b=o.scrollTop,g=o.scrollTop+o.offsetHeight;(e==="horizontal"||e==="both")&&(s<n?o.scrollTo({left:s,behavior:a}):s+t.clientWidth>p&&o.scrollTo({left:s-o.offsetWidth+t.clientWidth,behavior:a})),(e==="vertical"||e==="both")&&(l<b?o.scrollTo({top:l,behavior:a}):l+t.clientHeight>g&&o.scrollTo({top:l-o.offsetHeight+t.clientHeight,behavior:a}))}var D=w`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible):not([disabled]) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus-visible) {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,M=0,h=class extends E{constructor(){super(...arguments),this.localize=new F(this),this.attrId=++M,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,u`
      <div
        part="base"
        class=${W({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?u`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};h.styles=[_,D];h.dependencies={"sl-icon-button":S};i([k(".tab")],h.prototype,"tab",2);i([c({reflect:!0})],h.prototype,"panel",2);i([c({type:Boolean,reflect:!0})],h.prototype,"active",2);i([c({type:Boolean,reflect:!0})],h.prototype,"closable",2);i([c({type:Boolean,reflect:!0})],h.prototype,"disabled",2);i([c({type:Number,reflect:!0})],h.prototype,"tabIndex",2);i([x("active")],h.prototype,"handleActiveChange",1);i([x("disabled")],h.prototype,"handleDisabledChange",1);var X=w`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,d=class extends E{constructor(){super(...arguments),this.localize=new F(this),this.tabs=[],this.focusableTabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(o=>{o.some(e=>!["aria-labelledby","aria-controls"].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),o.some(e=>e.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((e,a)=>{var r;e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((r=this.getActiveTab())!=null?r:this.tabs[0],{emitEvents:!1}),a.unobserve(e[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const e=t.target.closest("sl-tab");(e==null?void 0:e.closest("sl-tab-group"))===this&&e!==null&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){const e=t.target.closest("sl-tab");if((e==null?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&e!==null&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const r=this.tabs.find(n=>n.matches(":focus")),l=this.matches(":dir(rtl)");let s=null;if((r==null?void 0:r.tagName.toLowerCase())==="sl-tab"){if(t.key==="Home")s=this.focusableTabs[0];else if(t.key==="End")s=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(l?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const n=this.tabs.findIndex(p=>p===r);s=this.findNextFocusableTab(n,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(l?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const n=this.tabs.findIndex(p=>p===r);s=this.findNextFocusableTab(n,"forward")}if(!s)return;s.tabIndex=0,s.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(s,{scrollBehavior:"smooth"}):this.tabs.forEach(n=>{n.tabIndex=n===s?0:-1}),["top","bottom"].includes(this.placement)&&B(s,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,o){if(o=N({emitEvents:!0,scrollBehavior:"auto"},o),t!==this.activeTab&&!t.disabled){const e=this.activeTab;this.activeTab=t,this.tabs.forEach(a=>{a.active=a===this.activeTab,a.tabIndex=a===this.activeTab?0:-1}),this.panels.forEach(a=>{var r;return a.active=a.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&B(this.activeTab,this.nav,"horizontal",o.scrollBehavior),o.emitEvents&&(e&&this.emit("sl-tab-hide",{detail:{name:e.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const o=this.panels.find(e=>e.name===t.panel);o&&(t.setAttribute("aria-controls",o.getAttribute("id")),o.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const o=t.clientWidth,e=t.clientHeight,a=this.matches(":dir(rtl)"),r=this.getAllTabs(),s=r.slice(0,r.indexOf(t)).reduce((n,p)=>({left:n.left+p.clientWidth,top:n.top+p.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${o}px`,this.indicator.style.height="auto",this.indicator.style.translate=a?`${-1*s.left}px`:`${s.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${e}px`,this.indicator.style.translate=`0 ${s.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,o){let e=null;const a=o==="forward"?1:-1;let r=t+a;for(;t<this.tabs.length;){if(e=this.tabs[r]||null,e===null){o==="forward"?e=this.focusableTabs[0]:e=this.focusableTabs[this.focusableTabs.length-1];break}if(!e.disabled)break;r+=a}return e}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const o=this.tabs.find(e=>e.panel===t);o&&this.setActiveTab(o,{scrollBehavior:"smooth"})}render(){const t=this.matches(":dir(rtl)");return u`
      <div
        part="base"
        class=${W({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?u`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?u`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};d.styles=[_,X];d.dependencies={"sl-icon-button":S};i([k(".tab-group")],d.prototype,"tabGroup",2);i([k(".tab-group__body")],d.prototype,"body",2);i([k(".tab-group__nav")],d.prototype,"nav",2);i([k(".tab-group__indicator")],d.prototype,"indicator",2);i([P()],d.prototype,"hasScrollControls",2);i([c()],d.prototype,"placement",2);i([c()],d.prototype,"activation",2);i([c({attribute:"no-scroll-controls",type:Boolean})],d.prototype,"noScrollControls",2);i([x("noScrollControls",{waitUntilFirstUpdate:!0})],d.prototype,"updateScrollControls",1);i([x("placement",{waitUntilFirstUpdate:!0})],d.prototype,"syncIndicator",1);var K=w`
  :host {
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
`,J=0,T=class extends E{constructor(){super(...arguments),this.attrId=++J,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return u`
      <slot
        part="base"
        class=${W({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};T.styles=[_,K];i([c({reflect:!0})],T.prototype,"name",2);i([c({type:Boolean,reflect:!0})],T.prototype,"active",2);i([x("active")],T.prototype,"handleActiveChange",1);S.define("sl-icon-button");T.define("sl-tab-panel");d.define("sl-tab-group");h.define("sl-tab");function O(t){var o,e,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t))for(o=0;o<t.length;o++)t[o]&&(e=O(t[o]))&&(a&&(a+=" "),a+=e);else for(o in t)t[o]&&(a&&(a+=" "),a+=o);return a}function V(){for(var t,o,e=0,a="";e<arguments.length;)(t=arguments[e++])&&(o=O(t))&&(a&&(a+=" "),a+=o);return a}const I=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,L=V,q=(t,o)=>e=>{var a;if((o==null?void 0:o.variants)==null)return L(t,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:r,defaultVariants:l}=o,s=Object.keys(r).map(b=>{const g=e==null?void 0:e[b],y=l==null?void 0:l[b];if(g===null)return null;const v=I(g)||I(y);return r[b][v]}),n=e&&Object.entries(e).reduce((b,g)=>{let[y,v]=g;return v===void 0||(b[y]=v),b},{}),p=o==null||(a=o.compoundVariants)===null||a===void 0?void 0:a.reduce((b,g)=>{let{class:y,className:v,...Z}=g;return Object.entries(Z).every(U=>{let[j,C]=U;return Array.isArray(C)?C.includes({...l,...n}[j]):{...l,...n}[j]===C})?[...b,y,v]:b},[]);return L(t,s,p,e==null?void 0:e.class,e==null?void 0:e.className)};var $=Object.defineProperty,m=(t,o,e,a)=>{for(var r=void 0,l=t.length-1,s;l>=0;l--)(s=t[l])&&(r=s(o,e,r)||r);return r&&$(o,e,r),r};R();const tt=q(`
    flex flex-row bg-[var(--hot-white)] items-center justify-between
    sm:justify-around p-2 border-b-2 border-b-gray-100 border-b-solid
  `,{variants:{size:{small:"h-8",large:"h-14"}}}),z=class z extends G{constructor(){super(...arguments),this.name="hot-header",this.title="",this.logo=`
    data:image/png;base64,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
  `,this.drawer=!0,this.tabs=[],this.size="large",this.selectedTab=0}render(){const o=typeof this.logo=="string"||this.logo instanceof URL?typeof this.logo=="string"?this.logo:this.logo.href:"";return u`
      <header class=${tt({size:this.size})}>
        <a href="/" class="flex flex-row">
          ${o.length>0?u`
                <img
                  id="logo"
                  src="${this.logo}"
                  alt="Logo"
                  class="h-10 px-10 hover:opacity-90"
                />
              `:null}
          ${this.title.length>0?u`
                <h1 class="text-2xl color-primary font-sans font-bold pl-3 m-0">
                  ${this.title}
                </h1>
              `:null}
        </a>

        ${""}
        <nav
          className="hidden sm:flex justify-between items-center gap-4 font-semibold"
        >
          <sl-tab-group>
            ${this.tabs.map((e,a)=>u`
                <sl-tab
                  slot="nav"
                  panel="general"
                  @click=${r=>{this._selectTab(r,e.clickEvent,a)}}
                  ?selected=${this.selectedTab===a}
                  >${e.label}</sl-tab
                >
              `)}
          </sl-tab-group>
        </nav>

        ${""}
        ${""}
        <nav
          className="sm:hidden flex flex-col items-end gap-1 font-semibold"
        ></nav>

        <div id="right-section" style="display: flex; align-items: center;">
          <sl-icon-button
            library="bundled"
            name="person-circle"
            style="font-size: 1.8rem;"
            label="login"
            @click=${e=>{this._handleLogin(e)}}
          ></sl-icon-button>

          <div id="drawer-block" style="font-size: 2rem;">
            ${this.drawer?u`
                  <sl-icon-button
                    library="bundled"
                    name="list"
                    label="drawer-open"
                  ></sl-icon-button>
                `:null}
          </div>
        </div>
      </header>
    `}_selectTab(o,e,a){this.selectedTab=a,e()}_handleLogin(o){this.dispatchEvent(new Event("login"))}};z.styles=[w`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.m-0{margin:0;}
.hidden{display:none;}
.h-10{height:2.5rem;}
.h-14{height:3.5rem;}
.h-8{height:2rem;}
.flex{display:flex;}
.flex-row{flex-direction:row;}
.flex-col{flex-direction:column;}
.items-end{align-items:flex-end;}
.items-center{align-items:center;}
.justify-between{justify-content:space-between;}
.gap-1{gap:0.25rem;}
.gap-4{gap:1rem;}
.border-b-2{border-bottom-width:2px;}
.border-b-gray-100{--un-border-opacity:1;--un-border-bottom-opacity:var(--un-border-opacity);border-bottom-color:rgb(243 244 246 / var(--un-border-bottom-opacity));}
.border-b-solid{border-bottom-style:solid;}
.bg-\\[var\\(--hot-white\\)\\]{background-color:var(--hot-white);}
.p-2{padding:0.5rem;}
.px-10{padding-left:2.5rem;padding-right:2.5rem;}
.pl-3{padding-left:0.75rem;}
.text-2xl{font-size:1.5rem;line-height:2rem;}
.color-primary{--un-text-opacity:1;color:rgb(var(--hot-primary-rgb) / var(--un-text-opacity));}
.font-bold{font-weight:700;}
.font-semibold{font-weight:600;}
.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";}
.hover\\:opacity-90:hover{opacity:0.9;}
@media (min-width: 640px){
.sm\\:hidden{display:none;}
.sm\\:flex{display:flex;}
.sm\\:justify-around{justify-content:space-around;}
};
    `,w`
      #right-section {
        display: flex;
        align-items: center;
      }

      sl-tab-group {
        display: flex;
      }

      sl-tab::part(base) {
        font-size: 1rem;
        border-bottom: 2px solid transparent;
      }

      sl-tab[selected]::part(base) {
        border-bottom: 2px solid white;
      }

      #drawer-block {
        display: flex;
        align-items: center;
        padding-right: 30px;
      }

      @media (prefers-color-scheme: light) {
        header {
          color: black;
        }
        #break {
          background-color: black;
        }
      }
    `];let f=z;m([c()],f.prototype,"name");m([c({type:String})],f.prototype,"title");m([c({type:String})],f.prototype,"logo");m([c({type:Boolean})],f.prototype,"drawer");m([c({type:Array})],f.prototype,"tabs");m([c({type:String})],f.prototype,"size");m([P()],f.prototype,"selectedTab");customElements.define("hot-header",f);export{h as S,d as a,T as b,rt as l,B as s,st as u};
