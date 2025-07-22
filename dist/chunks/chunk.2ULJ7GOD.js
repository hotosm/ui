import{b as o}from"./chunk.6Y3X2E2V.js";import{a as l}from"./chunk.XV3ZU53D.js";import{a as d}from"./chunk.GTNRNZDH.js";import{e as r,k as c}from"./chunk.TNLBUOUK.js";import{d as s,e as a,f as n,g as i}from"./chunk.NI7UJOOZ.js";l();var u,g,p,b,h,m,v,e=class extends c{constructor(){super(...arguments);this.name="hot-consent";n(this,u,"");n(this,g,!1);n(this,p,!0);n(this,b,"About the information we collect");n(this,h,"We use cookies and similar technologies to recognize and analyze your visits, and measure traffic usage and activity.");n(this,m,"I Agree");n(this,v,"I Do Not Agree")}get consentId(){return a(this,u)}set consentId(t){i(this,u,t)}get force(){return a(this,g)}set force(t){i(this,g,t)}get isOpen(){return a(this,p)}set isOpen(t){i(this,p,t)}get title(){return a(this,b)}set title(t){i(this,b,t)}get message(){return a(this,h)}set message(t){i(this,h,t)}get agreeLabel(){return a(this,m)}set agreeLabel(t){i(this,m,t)}get notAgreeLabel(){return a(this,v)}set notAgreeLabel(t){i(this,v,t)}render(){return this.isOpen?r`
      <div class="consent-overlay">
        <div class="consent-container">
          <wa-callout variant="brand" appearance="outlined filled" size="large" class="consent-callout">
            <wa-icon slot="icon" family="classic" variant="solid" name="shield-check" class="consent-icon"></wa-icon>
            <div class="consent-content">
              <h2 id="consent-header" class="consent-header">
                ${this.title}
              </h2>
              <div class="consent-message">
                <p>${this.message}</p>
                <slot name="additional-info"></slot>
              </div>
              <div class="consent-actions">
                <wa-button 
                  size="medium" 
                  variant="neutral" 
                  class="consent-button decline-button"
                  @click=${t=>this._setDisagree(t)}
                >
                  ${this.notAgreeLabel}
                </wa-button>
                <wa-button 
                  size="medium" 
                  variant="brand" 
                  class="consent-button accept-button"
                  @click=${t=>this._setAgree(t)}
                >
                  ${this.agreeLabel}
                </wa-button>
              </div>
            </div>
          </wa-callout>
        </div>
      </div>
    `:null}_setAgree(t){this.isOpen=!1,localStorage.setItem(`${this.consentId}-consent-agree`,"true"),this.dispatchEvent(new Event("agree",{bubbles:!0,composed:!0}))}_setDisagree(t){this.isOpen=!1,localStorage.setItem(`${this.consentId}-consent-agree`,"false"),this.dispatchEvent(new Event("disagree",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback();let t=localStorage.getItem(`${this.consentId}-consent-agree`);if(t==="false"){this.isOpen=!1;return}t==="true"&&(this.isOpen=!1)}};u=new WeakMap,g=new WeakMap,p=new WeakMap,b=new WeakMap,h=new WeakMap,m=new WeakMap,v=new WeakMap,e.styles=[d],s([o({type:String,attribute:"consent-id"})],e.prototype,"consentId",1),s([o({type:Boolean})],e.prototype,"force",1),s([o({type:Boolean})],e.prototype,"isOpen",1),s([o({type:String})],e.prototype,"title",1),s([o({type:String})],e.prototype,"message",1),s([o({type:String,attribute:"agree-label"})],e.prototype,"agreeLabel",1),s([o({type:String,attribute:"not-agree-label"})],e.prototype,"notAgreeLabel",1);var O=e;export{e as a,O as b};
