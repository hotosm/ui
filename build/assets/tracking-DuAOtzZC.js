import{c as x,_ as l,e as z,n as i,w as k,a as C,L as I,R as S,d as $,r as A}from"./icons-oafdsS42.js";import{S as O}from"./chunk.XJILXOW4-CodlnP1p.js";import{s as _,H as q,a as b,g as y,b as v,w}from"./chunk.NYIIDP5N-8SoPRANK.js";import{i as m,k as g,h as E}from"./lit-element-CPYlYYac.js";var H=m`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,d=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),a=class extends C{constructor(){super(...arguments),this.hasSlotController=new q(this,"icon","suffix"),this.localize=new I(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await b(this.base),this.base.hidden=!1;const{keyframes:n,options:e}=y(this,"alert.show",{dir:this.localize.dir()});await v(this.base,n,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await b(this.base);const{keyframes:n,options:e}=y(this,"alert.hide",{dir:this.localize.dir()});await v(this.base,n,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,w(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,w(this,"sl-after-hide")}async toast(){return new Promise(n=>{d.parentElement===null&&document.body.append(d),d.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{d.removeChild(this),n(),d.querySelector("sl-alert")===null&&d.remove()},{once:!0})})}render(){return g`
      <div
        part="base"
        class=${S({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?g`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};a.styles=[x,H];a.dependencies={"sl-icon-button":O};l([z('[part~="base"]')],a.prototype,"base",2);l([i({type:Boolean,reflect:!0})],a.prototype,"open",2);l([i({type:Boolean,reflect:!0})],a.prototype,"closable",2);l([i({reflect:!0})],a.prototype,"variant",2);l([i({type:Number})],a.prototype,"duration",2);l([k("open",{waitUntilFirstUpdate:!0})],a.prototype,"handleOpenChange",1);l([k("duration")],a.prototype,"handleDurationChange",1);_("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});_("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});a.define("sl-alert");var T=Object.defineProperty,h=(n,e,t,s)=>{for(var r=void 0,u=n.length-1,c;u>=0;u--)(c=n[u])&&(r=c(e,t,r)||r);return r&&T(e,t,r),r};$();const f=class f extends E{constructor(){super(...arguments),this.name="hot-tracking",this.siteId="",this.domain="",this.force=!1,this.isOpen=!0}render(){return g`<sl-alert variant="danger" ?open=${this.isOpen}>
      <sl-icon
        id="hot-red-text"
        library="bundled"
        slot="icon"
        name="info-circle"
      ></sl-icon>

      <p id="tracking-header">About the information we collect</p>

      <p>
        We use cookies and similar technologies to recognize and analyze your
        visits, and measure traffic usage and activity. You can learn about how
        we use the data about your visit or information you provide reading our
        <a
          style="color: #d63f3f;"
          href="https://www.hotosm.org/privacy"
          target="_blank"
          rel="noopener noreferrer"
          >privacy policy</a
        >. By clicking "I Agree", you consent to the use of cookies.
      </p>

      <sl-button
        @click=${e=>{this._setAgree(e)}}
        >I Agree</sl-button
      >
      <sl-button
        @click=${e=>{this._setDisagree(e)}}
        >I Do Not Agree</sl-button
      >
    </sl-alert>`}_setAgree(e){const t=window._paq=window._paq||[];t.length!==0&&(t.push(["rememberConsentGiven"]),this.isOpen=!1,localStorage.setItem(`${this.siteId}-matomo-agree`,"true"),this.dispatchEvent(new Event("agree",{bubbles:!0,composed:!0})))}_setDisagree(e){const t=window._paq=window._paq||[];t.length!==0&&(t.push(["forgetConsentGiven"]),this.isOpen=!1,localStorage.setItem(`${this.siteId}-matomo-agree`,"false"),this.dispatchEvent(new Event("disagree",{bubbles:!0,composed:!0})))}connectedCallback(){if(super.connectedCallback(),!this.force&&window.location.hostname!==this.domain){console.warn(`Matomo init failed. ${window.location.hostname} does not match ${this.domain}.`),this.isOpen=!1;return}const e=this.siteId;if(!this.force&&(e.length===0||this.domain.length===0)){console.warn("Matomo init failed. No site id or domains provided."),this.isOpen=!1;return}const t=localStorage.getItem(`${this.siteId}-matomo-agree`);if(t==="false"){this.isOpen=!1;return}t==="true"&&(this.isOpen=!1),console.log(`Setting Matomo tracking for site=${e} domain=${this.domain}`);const s=window._paq=window._paq||[];s.push(["requireConsent"]),s.push(["setDomains",[this.domain]]),s.push(["trackPageView"]),s.push(["enableLinkTracking"]),s.push(["trackVisibleContentImpressions"]),function(){const r="//matomo.hotosm.org/";s.push(["setTrackerUrl",r+"matomo.php"]),s.push(["setSiteId",e]);const u=document,c=u.createElement("script"),p=u.getElementsByTagName("script")[0];(p==null?void 0:p.parentNode)!=null?(c.async=!0,c.src=r+"matomo.js",p.parentNode.insertBefore(c,p)):console.warn("Script insertion failed. Parent node is null.")}()}};f.styles=[m`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.absolute{position:absolute;}
.static{position:static;}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));};
    `,m`
      #tracking-header {
        font-weight: var(--sl-font-weight-bold);
        font-size: var(--sl-font-size-large);
        text-align: center;
      }
      sl-alert::part(base) {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        width: 80vw;
        text-align: center;
      }
    `];let o=f;h([i()],o.prototype,"name");h([i({type:String,attribute:"site-id"})],o.prototype,"siteId");h([i({type:String})],o.prototype,"domain");h([i({type:Boolean})],o.prototype,"force");h([A()],o.prototype,"isOpen");customElements.define("hot-tracking",o);export{a as S};
