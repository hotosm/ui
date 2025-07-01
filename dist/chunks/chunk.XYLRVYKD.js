import{a as d}from"./chunk.277I73JI.js";import{a as o}from"./chunk.7P5E5KMI.js";import{a as l}from"./chunk.KO4EOD3I.js";import{d as r,e as c}from"./chunk.2C7KHCNI.js";import{f as s,g as n,h as a,i}from"./chunk.RGDK5VTE.js";import"https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/callout/callout.js";import"https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/icon/icon.js";import"https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/button/button.js";l();var u,g,p,b,h,m,v,e=class extends c{constructor(){super(...arguments);this.name="hot-consent";a(this,u,"");a(this,g,!1);a(this,p,!0);a(this,b,"About the information we collect");a(this,h,"We use cookies and similar technologies to recognize and analyze your visits, and measure traffic usage and activity.");a(this,m,"I Agree");a(this,v,"I Do Not Agree")}get consentId(){return n(this,u)}set consentId(t){i(this,u,t)}get force(){return n(this,g)}set force(t){i(this,g,t)}get isOpen(){return n(this,p)}set isOpen(t){i(this,p,t)}get title(){return n(this,b)}set title(t){i(this,b,t)}get message(){return n(this,h)}set message(t){i(this,h,t)}get agreeLabel(){return n(this,m)}set agreeLabel(t){i(this,m,t)}get notAgreeLabel(){return n(this,v)}set notAgreeLabel(t){i(this,v,t)}render(){return this.isOpen?r`
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
    `:null}_setAgree(t){this.isOpen=!1,localStorage.setItem(`${this.consentId}-consent-agree`,"true"),this.dispatchEvent(new Event("agree",{bubbles:!0,composed:!0}))}_setDisagree(t){this.isOpen=!1,localStorage.setItem(`${this.consentId}-consent-agree`,"false"),this.dispatchEvent(new Event("disagree",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback();let t=localStorage.getItem(`${this.consentId}-consent-agree`);if(t==="false"){this.isOpen=!1;return}t==="true"&&(this.isOpen=!1)}};u=new WeakMap,g=new WeakMap,p=new WeakMap,b=new WeakMap,h=new WeakMap,m=new WeakMap,v=new WeakMap,e.styles=[d],s([o({type:String,attribute:"consent-id"})],e.prototype,"consentId",1),s([o({type:Boolean})],e.prototype,"force",1),s([o({type:Boolean})],e.prototype,"isOpen",1),s([o({type:String})],e.prototype,"title",1),s([o({type:String})],e.prototype,"message",1),s([o({type:String,attribute:"agree-label"})],e.prototype,"agreeLabel",1),s([o({type:String,attribute:"not-agree-label"})],e.prototype,"notAgreeLabel",1);var O=e;customElements.define("hot-consent",e);export{e as a,O as b};
