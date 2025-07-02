import{b as c,c as o}from"./chunk.6ZDEZIWM.js";import{b as u,e as l,k as b}from"./chunk.U4P7XQR4.js";import{d as a,e as n,f as s,g as i}from"./chunk.NI7UJOOZ.js";async function y(){customElements.get("wa-callout")||await import("./callout.USQGOL5A.js"),customElements.get("wa-icon")||await import("./icon.ZB6BUFKB.js"),customElements.get("wa-button")||await import("./button.LEHBRWP3.js")}(async()=>await y())();var w,m,f,x,v,t=class extends b{constructor(){super(...arguments);this.name="hot-tracking";s(this,w,"");s(this,m,"");s(this,f,"https://matomo.hotosm.org");s(this,x,!0);s(this,v,"We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking 'Accept', you consent to our use of cookies and tracking technologies.");this.consentGiven=!1;this.consentShown=!1;this.errorMessage="";this.showError=!1;this.successMessage="";this.showSuccess=!1;this.infoMessage="";this.showInfo=!1}get siteId(){return n(this,w)}set siteId(e){i(this,w,e)}get domain(){return n(this,m)}set domain(e){i(this,m,e)}get matomoURL(){return n(this,f)}set matomoURL(e){i(this,f,e)}get showConsent(){return n(this,x)}set showConsent(e){i(this,x,e)}get consentMessage(){return n(this,v)}set consentMessage(e){i(this,v,e)}agree(){this.consentGiven=!0,this.consentShown=!1;let e=window._paq=window._paq||[];e.length!==0&&(e.push(["rememberConsentGiven"]),e.push(["trackPageView"]),this.showSuccessCallout("Tracking consent granted. Thank you!"))}disagree(){this.consentGiven=!1,this.consentShown=!1;let e=window._paq=window._paq||[];e.length!==0&&(e.push(["forgetConsentGiven"]),this.showInfoCallout("Tracking disabled. You can change this preference later."))}showConsentBanner(){this.showConsent&&!this.consentGiven&&!this.consentShown&&(this.consentShown=!0)}showErrorCallout(e){this.errorMessage=e,this.showError=!0,setTimeout(()=>{this.showError=!1},1e4)}showSuccessCallout(e){this.successMessage=e,this.showSuccess=!0,setTimeout(()=>{this.showSuccess=!1},5e3)}showInfoCallout(e){this.infoMessage=e,this.showInfo=!0,setTimeout(()=>{this.showInfo=!1},5e3)}render(){return l`
      ${this.showError?l`
        <div class="error-banner">
          <wa-callout style="padding: 1rem;" variant="danger" appearance="outlined filled" size="large">
            <wa-icon slot="icon" family="classic" variant="solid" name="circle-exclamation"></wa-icon>
            <div style="padding: 0 1rem;">
              <strong>Tracking Configuration Error</strong><br />
              ${this.errorMessage}
            </div>
          </wa-callout>
        </div>
      `:""}
      
      ${this.showSuccess?l`
        <div class="toast-banner">
          <wa-callout style="padding: 1rem;" variant="success" appearance="outlined accent" size="medium">
            <wa-icon slot="icon" family="classic" variant="solid" name="circle-check"></wa-icon>
            <div style="padding: 0 1rem;">
              <strong>Success!</strong><br />
              ${this.successMessage}
            </div>
          </wa-callout>
        </div>
      `:""}
      
      ${this.showInfo?l`
        <div class="toast-banner">
          <wa-callout style="padding: 1rem;" variant="brand" appearance="outlined filled" size="medium">
            <wa-icon slot="icon" family="classic" variant="solid" name="circle-info"></wa-icon>
            <div style="padding: 0 1rem;">
              <strong>Information</strong><br />
              ${this.infoMessage}
            </div>
          </wa-callout>
        </div>
      `:""}
      
      ${this.consentShown?l`
        <div class="consent-banner">
          <wa-callout  variant="brand" appearance="outlined filled" size="large">
            <wa-icon slot="icon" family="classic" variant="solid" name="shield-check"></wa-icon>
            <div style="padding: 1rem;">
              <strong>Privacy & Tracking</strong><br />
              ${this.consentMessage}
              <div class="consent-actions">
                <wa-button size="small" variant="neutral" @click=${e=>{e.preventDefault(),e.stopPropagation(),this.disagree()}}>
                  Decline
                </wa-button>
                <wa-button size="small" variant="brand" @click=${e=>{e.preventDefault(),e.stopPropagation(),this.agree()}}>
                  Accept
                </wa-button>
              </div>
            </div>
          </wa-callout>
        </div>
      `:""}
    `}connectedCallback(){if(super.connectedCallback(),window.location.hostname!==this.domain){this.showErrorCallout(`Matomo tracking is not configured for this domain. Current domain: ${window.location.hostname}, Expected: ${this.domain}`);return}let e=this.siteId;if(e.length===0||this.domain.length===0){this.showErrorCallout("Matomo tracking is not properly configured. Please provide both site-id and domain attributes.");return}console.log(`Setting Matomo tracking for site=${e} domain=${this.domain}`);let r=window._paq=window._paq||[];r.push(["requireConsent"]),r.push(["setDomains",[this.domain]]),r.push(["enableLinkTracking"]),r.push(["trackVisibleContentImpressions"]),function(g){r.push(["setTrackerUrl",`${g}/matomo.php`]),r.push(["setSiteId",e]);let h=document,p=h.createElement("script"),d=h.getElementsByTagName("script")[0];(d==null?void 0:d.parentNode)!=null?(p.async=!0,p.src=`${g}/matomo.js`,d.parentNode.insertBefore(p,d)):console.warn("Script insertion failed. Parent node is null.")}(this.matomoURL),setTimeout(()=>{this.showConsentBanner()},1e3)}};w=new WeakMap,m=new WeakMap,f=new WeakMap,x=new WeakMap,v=new WeakMap,t.styles=u`
    :host {
      display: block;
      font-family: var(--wa-font-sans);
    }
    
    .consent-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    
    .error-banner {
      position: fixed;
      top: 1rem;
      left: 1rem;
      right: 1rem;
      z-index: 1001;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .toast-banner {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 1002;
      max-width: 450px;
      animation: slideIn 0.3s ease-out;
    }
    
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    .consent-actions {
      display: flex;
      gap: 0.75rem;
      margin-top: 1rem;
      justify-content: flex-end;
    }
    
    wa-callout {
      --wa-callout-spacing: 1.5rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
      border-radius: 12px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      backdrop-filter: blur(8px);
    }
    
    wa-button {
      min-width: 80px;
      font-weight: 500;
      transition: all 0.2s ease;
    }
    
    wa-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .error-banner wa-callout {
      border-radius: 16px;
      box-shadow: 0 16px 48px rgba(243, 77, 71, 0.2);
      border: 1px solid rgba(243, 77, 71, 0.2);
      background: linear-gradient(135deg, rgba(254, 236, 239, 0.95), rgba(253, 208, 214, 0.95));
    }
    
    .error-banner wa-callout::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--hot-color-red-500), var(--hot-color-red-600), var(--hot-color-red-700));
      border-radius: 16px 16px 0 0;
    }
    
    .toast-banner wa-callout {
      border-radius: 14px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(0, 0, 0, 0.06);
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(12px);
    }
    
    .toast-banner wa-callout[variant="success"] {
      box-shadow: 0 12px 40px rgba(34, 197, 94, 0.15);
      border: 1px solid rgba(34, 197, 94, 0.2);
      background: linear-gradient(135deg, rgba(240, 253, 244, 0.95), rgba(220, 252, 231, 0.95));
    }
    
    .toast-banner wa-callout[variant="success"]::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #22c55e, #16a34a);
      border-radius: 14px 14px 0 0;
    }
    
    .toast-banner wa-callout[variant="brand"] {
      box-shadow: 0 12px 40px rgba(243, 77, 71, 0.15);
      border: 1px solid rgba(243, 77, 71, 0.2);
      background: linear-gradient(135deg, rgba(254, 236, 239, 0.95), rgba(253, 208, 214, 0.95));
    }
    
    .toast-banner wa-callout[variant="brand"]::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--hot-color-red-500), var(--hot-color-red-600));
      border-radius: 14px 14px 0 0;
    }
    
    .consent-banner wa-callout {
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(0, 0, 0, 0.08);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(249, 250, 251, 0.98));
      backdrop-filter: blur(16px);
    }
    
    .consent-banner wa-callout::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--hot-color-red-500), var(--hot-color-red-600), var(--hot-color-red-700));
      border-radius: 16px 16px 0 0;
    }
    
    wa-icon {
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }
    
    @media (max-width: 768px) {
      .consent-banner {
        padding: 0.75rem;
      }
      
      .error-banner {
        left: 0.5rem;
        right: 0.5rem;
        max-width: none;
      }
      
      .toast-banner {
        right: 0.5rem;
        max-width: calc(100vw - 1rem);
      }
      
      .consent-actions {
        flex-direction: column;
        gap: 0.5rem;
      }
      
      wa-button {
        width: 100%;
      }
    }
  `,a([c({type:String,attribute:"site-id"})],t.prototype,"siteId",1),a([c({type:String})],t.prototype,"domain",1),a([c({type:String})],t.prototype,"matomoURL",1),a([c({type:Boolean,attribute:"show-consent"})],t.prototype,"showConsent",1),a([c({type:String,attribute:"consent-message"})],t.prototype,"consentMessage",1),a([o()],t.prototype,"consentGiven",2),a([o()],t.prototype,"consentShown",2),a([o()],t.prototype,"errorMessage",2),a([o()],t.prototype,"showError",2),a([o()],t.prototype,"successMessage",2),a([o()],t.prototype,"showSuccess",2),a([o()],t.prototype,"infoMessage",2),a([o()],t.prototype,"showInfo",2);var $=t;customElements.define("hot-tracking",t);export{t as a,$ as b};
