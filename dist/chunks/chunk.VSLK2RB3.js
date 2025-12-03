import{a as l}from"./chunk.M3ZIZPKF.js";import{a as d}from"./chunk.ORDINBKC.js";import{a as r}from"./chunk.N3EVDV7A.js";import{d as o,f as c}from"./chunk.64GCJQA3.js";import{d as s,e as n,f as a,g as i}from"./chunk.N2W26RCT.js";import"@awesome.me/webawesome/dist/components/callout/callout.js";import"@awesome.me/webawesome/dist/components/icon/icon.js";import"@awesome.me/webawesome/dist/components/button/button.js";l();var u,g,p,b,h,m,e=class extends c{constructor(){super(...arguments);this.name="hot-consent";a(this,u,"");a(this,g,!0);a(this,p,"About the information we collect");a(this,b,"We use cookies and similar technologies to recognize and analyze your visits, and measure traffic usage and activity.");a(this,h,"I Agree");a(this,m,"I Do Not Agree")}get consentId(){return n(this,u)}set consentId(t){i(this,u,t)}get isOpen(){return n(this,g)}set isOpen(t){i(this,g,t)}get title(){return n(this,p)}set title(t){i(this,p,t)}get message(){return n(this,b)}set message(t){i(this,b,t)}get agreeLabel(){return n(this,h)}set agreeLabel(t){i(this,h,t)}get notAgreeLabel(){return n(this,m)}set notAgreeLabel(t){i(this,m,t)}render(){return this.isOpen?o`
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
    `:null}_setAgree(t){this.isOpen=!1,localStorage.setItem(`${this.consentId}-consent-agree`,"true"),this.dispatchEvent(new Event("agree",{bubbles:!0,composed:!0}))}_setDisagree(t){this.isOpen=!1,localStorage.setItem(`${this.consentId}-consent-agree`,"false"),this.dispatchEvent(new Event("disagree",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback();let t=localStorage.getItem(`${this.consentId}-consent-agree`);if(t==="false"){this.isOpen=!1;return}t==="true"&&(this.isOpen=!1)}};u=new WeakMap,g=new WeakMap,p=new WeakMap,b=new WeakMap,h=new WeakMap,m=new WeakMap,e.styles=[d],s([r({type:String,attribute:"consent-id"})],e.prototype,"consentId",1),s([r({type:Boolean})],e.prototype,"isOpen",1),s([r({type:String})],e.prototype,"title",1),s([r({type:String})],e.prototype,"message",1),s([r({type:String,attribute:"agree-label"})],e.prototype,"agreeLabel",1),s([r({type:String,attribute:"not-agree-label"})],e.prototype,"notAgreeLabel",1);var k=e;export{e as a,k as b};
