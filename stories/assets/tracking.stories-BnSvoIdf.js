import"./chunk.2Y62WHSU-DHZdug3e.js";import"./chunk.DBG7W4GS-Bl4R2AHc.js";import{r as y,n as d,a as k}from"./icons-D8Ilt-xN.js";import{s as w,i as p,x as f}from"./lit-element-BcQOHSkQ.js";import"./chunk.NYIIDP5N-Csveo3ir.js";import"./directive-helpers-Fm7m8_mF.js";var v=Object.defineProperty,c=(e,t,n,o)=>{for(var a=void 0,s=e.length-1,i;s>=0;s--)(i=e[s])&&(a=i(t,n,a)||a);return a&&v(t,n,a),a};y();const g=class g extends w{constructor(){super(...arguments),this.name="hot-tracking",this.siteId="",this.domain="",this.force=!1,this.isOpen=!0}render(){return f`<sl-alert
      variant="danger"
      ?open=${this.isOpen}
    >
    <sl-icon id="hot-red-text" library="bundled" slot="icon" name="info-circle"></sl-icon>

    <p id="tracking-header">
    About the information we collect
    </p>

    <p>
    We use cookies and similar technologies to recognize and analyze your visits,
    and measure traffic usage and activity. You can learn about how we use the data
    about your visit or information you provide reading our
      <a
        style="color: #d63f3f;"
        href="https://www.hotosm.org/privacy"
        target="_blank"
        rel="noopener noreferrer"
      >privacy policy</a>.
    By clicking "I Agree", you consent to the use of cookies.
    </p>

    <sl-button @click=${t=>{this._setAgree(t)}}>I Agree</sl-button>
    <sl-button @click=${t=>{this._setDisagree(t)}}>I Do Not Agree</sl-button>
    </sl-alert>`}_setAgree(t){const n=window._paq=window._paq||[];n.length!==0&&(n.push(["rememberConsentGiven"]),this.isOpen=!1,localStorage.setItem(`${this.siteId}-matomo-agree`,"true"),this.dispatchEvent(new Event("agree",{bubbles:!0,composed:!0})))}_setDisagree(t){const n=window._paq=window._paq||[];n.length!==0&&(n.push(["forgetConsentGiven"]),this.isOpen=!1,localStorage.setItem(`${this.siteId}-matomo-agree`,"false"),this.dispatchEvent(new Event("disagree",{bubbles:!0,composed:!0})))}connectedCallback(){if(super.connectedCallback(),!this.force&&window.location.hostname!==this.domain){console.warn(`Matomo init failed. ${window.location.hostname} does not match ${this.domain}.`),this.isOpen=!1;return}const t=this.siteId;if(!this.force&&(t.length===0||this.domain.length===0)){console.warn("Matomo init failed. No site id or domains provided."),this.isOpen=!1;return}const n=localStorage.getItem(`${this.siteId}-matomo-agree`);if(n==="false"){this.isOpen=!1;return}n==="true"&&(this.isOpen=!1),console.log(`Setting Matomo tracking for site=${t} domain=${this.domain}`);const o=window._paq=window._paq||[];o.push(["requireConsent"]),o.push(["setDomains",[this.domain]]),o.push(["trackPageView"]),o.push(["enableLinkTracking"]),o.push(["trackVisibleContentImpressions"]),function(){const a="//matomo.hotosm.org/";o.push(["setTrackerUrl",a+"matomo.php"]),o.push(["setSiteId",t]);const s=document,i=s.createElement("script"),l=s.getElementsByTagName("script")[0];(l==null?void 0:l.parentNode)!=null?(i.async=!0,i.src=a+"matomo.js",l.parentNode.insertBefore(i,l)):console.warn("Script insertion failed. Parent node is null.")}()}};g.styles=[p`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.absolute{position:absolute;}
.static{position:static;}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));};
    `,p`
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
    `];let r=g;c([d()],r.prototype,"name");c([d({type:String,attribute:"site-id"})],r.prototype,"siteId");c([d({type:String})],r.prototype,"domain");c([d({type:Boolean})],r.prototype,"force");c([k()],r.prototype,"isOpen");customElements.define("hot-tracking",r);const z={title:"Tracking",component:"hot-tracking"},u={args:{siteId:"1",domain:"localhost"},argTypes:{siteId:{options:["","1","2"],control:{type:"select"}},domain:{options:["localhost","anotherdomain"],control:{type:"select"}}},parameters:{showAgreeToast:()=>{const e=document.getElementById("agree-toast");e&&e.toast()},showDisagreeToast:()=>{const e=document.getElementById("disagree-toast");e&&e.toast()},addKeyLocalStorage:e=>{localStorage.setItem(`${e}-matomo-agree`,"true")},removeKeyLocalStorage:e=>{localStorage.removeItem(`${e}-matomo-agree`)}},render:(e,{parameters:t})=>f`
      <h1>Matomo Tracking Banner</h1>
      The banner is disabled if a local storage key is set.
      <br>
      Click the buttons below to enable/disable and refresh the page.
      <br>
      <br>

      <sl-button @click=${()=>{t.removeKeyLocalStorage(e.siteId)}}>Re-Enable Banner</sl-button>
      <sl-button @click=${()=>{t.addKeyLocalStorage(e.siteId)}}>Disable Banner</sl-button>

      <hot-tracking
        id="matomo-banner"
        site-id="${e.siteId}"
        domain="${e.domain}"
        @agree=${()=>{t.showAgreeToast()}}
        @disagree=${()=>{t.showDisagreeToast()}}
      ></hot-tracking>

      <sl-alert id="agree-toast" variant="success" duration="3000" closable>
        <sl-icon slot="icon" name="check2-circle"></sl-icon>
        You clicked agree.
      </sl-alert>

      <sl-alert id="disagree-toast" variant="danger" duration="3000" closable>
        <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
        You clicked disagree.
      </sl-alert>
    `};var m,h,b;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    siteId: "1",
    domain: "localhost"
  },
  argTypes: {
    siteId: {
      options: ["", "1", "2"],
      control: {
        type: "select"
      }
    },
    domain: {
      options: ["localhost", "anotherdomain"],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    showAgreeToast: () => {
      const agree = document.getElementById("agree-toast");
      if (agree) {
        agree.toast();
      }
    },
    showDisagreeToast: () => {
      const disagree = document.getElementById("disagree-toast");
      if (disagree) {
        disagree.toast();
      }
    },
    addKeyLocalStorage: (siteId: number) => {
      localStorage.setItem(\`\${siteId}-matomo-agree\`, 'true');
    },
    removeKeyLocalStorage: (siteId: number) => {
      localStorage.removeItem(\`\${siteId}-matomo-agree\`);
    }
  },
  render: (args, {
    parameters
  }) => {
    return html\`
      <h1>Matomo Tracking Banner</h1>
      The banner is disabled if a local storage key is set.
      <br>
      Click the buttons below to enable/disable and refresh the page.
      <br>
      <br>

      <sl-button @click=\${() => {
      parameters.removeKeyLocalStorage(args.siteId);
    }}>Re-Enable Banner</sl-button>
      <sl-button @click=\${() => {
      parameters.addKeyLocalStorage(args.siteId);
    }}>Disable Banner</sl-button>

      <hot-tracking
        id="matomo-banner"
        site-id="\${args.siteId}"
        domain="\${args.domain}"
        @agree=\${() => {
      parameters.showAgreeToast();
    }}
        @disagree=\${() => {
      parameters.showDisagreeToast();
    }}
      ></hot-tracking>

      <sl-alert id="agree-toast" variant="success" duration="3000" closable>
        <sl-icon slot="icon" name="check2-circle"></sl-icon>
        You clicked agree.
      </sl-alert>

      <sl-alert id="disagree-toast" variant="danger" duration="3000" closable>
        <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
        You clicked disagree.
      </sl-alert>
    \`;
  }
}`,...(b=(h=u.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const B=["Template"];export{u as Template,B as __namedExportsOrder,z as default};
