import{a as c}from"./chunk.SZB24AFL.js";import{a as o}from"./chunk.M3ZIZPKF.js";import{c as s,d as n,e as a,f as i}from"./chunk.ZYCXU3RQ.js";import"@awesome.me/webawesome/dist/components/callout/callout.js";import"@awesome.me/webawesome/dist/components/icon/icon.js";import"@awesome.me/webawesome/dist/components/button/button.js";import{LitElement as h,html as m}from"lit";import{property as r}from"lit/decorators.js";o();var l,d,u,g,p,b,e=class extends h{constructor(){super(...arguments);this.name="hot-consent";a(this,l,"");a(this,d,!0);a(this,u,"About the information we collect");a(this,g,"We use cookies and similar technologies to recognize and analyze your visits, and measure traffic usage and activity.");a(this,p,"I Agree");a(this,b,"I Do Not Agree")}get consentId(){return n(this,l)}set consentId(t){i(this,l,t)}get isOpen(){return n(this,d)}set isOpen(t){i(this,d,t)}get title(){return n(this,u)}set title(t){i(this,u,t)}get message(){return n(this,g)}set message(t){i(this,g,t)}get agreeLabel(){return n(this,p)}set agreeLabel(t){i(this,p,t)}get notAgreeLabel(){return n(this,b)}set notAgreeLabel(t){i(this,b,t)}render(){return this.isOpen?m`
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
    `:null}_setAgree(t){this.isOpen=!1,localStorage.setItem(`${this.consentId}-consent-agree`,"true"),this.dispatchEvent(new Event("agree",{bubbles:!0,composed:!0}))}_setDisagree(t){this.isOpen=!1,localStorage.setItem(`${this.consentId}-consent-agree`,"false"),this.dispatchEvent(new Event("disagree",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback();let t=localStorage.getItem(`${this.consentId}-consent-agree`);if(t==="false"){this.isOpen=!1;return}t==="true"&&(this.isOpen=!1)}};l=new WeakMap,d=new WeakMap,u=new WeakMap,g=new WeakMap,p=new WeakMap,b=new WeakMap,e.styles=[c],s([r({type:String,attribute:"consent-id"})],e.prototype,"consentId",1),s([r({type:Boolean})],e.prototype,"isOpen",1),s([r({type:String})],e.prototype,"title",1),s([r({type:String})],e.prototype,"message",1),s([r({type:String,attribute:"agree-label"})],e.prototype,"agreeLabel",1),s([r({type:String,attribute:"not-agree-label"})],e.prototype,"notAgreeLabel",1);var k=e;export{e as a,k as b};
