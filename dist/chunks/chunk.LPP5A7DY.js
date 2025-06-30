import{a as r}from"./chunk.KO4EOD3I.js";import{a as c}from"./chunk.G3D6QL7M.js";import{c as s,d as n,e as a,f as i}from"./chunk.VQWI2U6Y.js";import"https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/callout/callout.js";import"https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/icon/icon.js";import"https://early.webawesome.com/webawesome@3.0.0-alpha.13/dist/components/button/button.js";import{LitElement as m,html as v}from"lit";import{property as o}from"lit/decorators.js";r();var l,d,u,g,p,b,h,e=class extends m{constructor(){super(...arguments);this.name="hot-consent";a(this,l,"");a(this,d,!1);a(this,u,!0);a(this,g,"About the information we collect");a(this,p,"We use cookies and similar technologies to recognize and analyze your visits, and measure traffic usage and activity.");a(this,b,"I Agree");a(this,h,"I Do Not Agree")}get consentId(){return n(this,l)}set consentId(t){i(this,l,t)}get force(){return n(this,d)}set force(t){i(this,d,t)}get isOpen(){return n(this,u)}set isOpen(t){i(this,u,t)}get title(){return n(this,g)}set title(t){i(this,g,t)}get message(){return n(this,p)}set message(t){i(this,p,t)}get agreeLabel(){return n(this,b)}set agreeLabel(t){i(this,b,t)}get notAgreeLabel(){return n(this,h)}set notAgreeLabel(t){i(this,h,t)}render(){return this.isOpen?v`
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
    `:null}_setAgree(t){this.isOpen=!1,localStorage.setItem(`${this.consentId}-consent-agree`,"true"),this.dispatchEvent(new Event("agree",{bubbles:!0,composed:!0}))}_setDisagree(t){this.isOpen=!1,localStorage.setItem(`${this.consentId}-consent-agree`,"false"),this.dispatchEvent(new Event("disagree",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback();let t=localStorage.getItem(`${this.consentId}-consent-agree`);if(t==="false"){this.isOpen=!1;return}t==="true"&&(this.isOpen=!1)}};l=new WeakMap,d=new WeakMap,u=new WeakMap,g=new WeakMap,p=new WeakMap,b=new WeakMap,h=new WeakMap,e.styles=[c],s([o({type:String,attribute:"consent-id"})],e.prototype,"consentId",1),s([o({type:Boolean})],e.prototype,"force",1),s([o({type:Boolean})],e.prototype,"isOpen",1),s([o({type:String})],e.prototype,"title",1),s([o({type:String})],e.prototype,"message",1),s([o({type:String,attribute:"agree-label"})],e.prototype,"agreeLabel",1),s([o({type:String,attribute:"not-agree-label"})],e.prototype,"notAgreeLabel",1);var O=e;customElements.define("hot-consent",e);export{e as a,O as b};
