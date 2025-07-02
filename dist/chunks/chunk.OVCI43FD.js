import{b as o}from"./chunk.6ZDEZIWM.js";import{a as l}from"./chunk.KO4EOD3I.js";import{a as u}from"./chunk.T4GALJJA.js";import{e as c,k as r}from"./chunk.U4P7XQR4.js";import{d as s,e as a,f as n,g as i}from"./chunk.NI7UJOOZ.js";async function v(){customElements.get("wa-callout")||await import("./callout.USQGOL5A.js"),customElements.get("wa-icon")||await import("./icon.ZB6BUFKB.js"),customElements.get("wa-button")||await import("./button.QMPBLQB7.js")}(async()=>await v())();l();var d,g,m,p,b,h,f,e=class extends r{constructor(){super(...arguments);this.name="hot-consent";n(this,d,"");n(this,g,!1);n(this,m,!0);n(this,p,"About the information we collect");n(this,b,"We use cookies and similar technologies to recognize and analyze your visits, and measure traffic usage and activity.");n(this,h,"I Agree");n(this,f,"I Do Not Agree")}get consentId(){return a(this,d)}set consentId(t){i(this,d,t)}get force(){return a(this,g)}set force(t){i(this,g,t)}get isOpen(){return a(this,m)}set isOpen(t){i(this,m,t)}get title(){return a(this,p)}set title(t){i(this,p,t)}get message(){return a(this,b)}set message(t){i(this,b,t)}get agreeLabel(){return a(this,h)}set agreeLabel(t){i(this,h,t)}get notAgreeLabel(){return a(this,f)}set notAgreeLabel(t){i(this,f,t)}render(){return this.isOpen?c`
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
    `:null}_setAgree(t){this.isOpen=!1,localStorage.setItem(`${this.consentId}-consent-agree`,"true"),this.dispatchEvent(new Event("agree",{bubbles:!0,composed:!0}))}_setDisagree(t){this.isOpen=!1,localStorage.setItem(`${this.consentId}-consent-agree`,"false"),this.dispatchEvent(new Event("disagree",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback();let t=localStorage.getItem(`${this.consentId}-consent-agree`);if(t==="false"){this.isOpen=!1;return}t==="true"&&(this.isOpen=!1)}};d=new WeakMap,g=new WeakMap,m=new WeakMap,p=new WeakMap,b=new WeakMap,h=new WeakMap,f=new WeakMap,e.styles=[u],s([o({type:String,attribute:"consent-id"})],e.prototype,"consentId",1),s([o({type:Boolean})],e.prototype,"force",1),s([o({type:Boolean})],e.prototype,"isOpen",1),s([o({type:String})],e.prototype,"title",1),s([o({type:String})],e.prototype,"message",1),s([o({type:String,attribute:"agree-label"})],e.prototype,"agreeLabel",1),s([o({type:String,attribute:"not-agree-label"})],e.prototype,"notAgreeLabel",1);var A=e;customElements.define("hot-consent",e);export{e as a,A as b};
