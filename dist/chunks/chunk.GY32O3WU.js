import{a as c}from"./chunk.Q5SXKMUN.js";import{a as i}from"./chunk.WPXUR5EI.js";import{a as s,b as o,c as n,d as r}from"./chunk.FWYUHKRF.js";import"@shoelace-style/shoelace/dist/components/alert/alert.js";import{LitElement as m,html as l}from"lit";import{property as a}from"lit/decorators.js";i();var g,u,p,d,b,h,f,e=class extends m{constructor(){super(...arguments);this.name="hot-consent";n(this,g,"");n(this,u,!1);n(this,p,!0);n(this,d,"About the information we collect");n(this,b,l`<p>We use cookies and similar technologies to \
  recognize and analyze your visits, and measure traffic usage and activity.</p>`);n(this,h,"I Agree");n(this,f,"I Do Dot Agree")}get consentId(){return o(this,g)}set consentId(t){r(this,g,t)}get force(){return o(this,u)}set force(t){r(this,u,t)}get isOpen(){return o(this,p)}set isOpen(t){r(this,p,t)}get title(){return o(this,d)}set title(t){r(this,d,t)}get message(){return o(this,b)}set message(t){r(this,b,t)}get agreeLabel(){return o(this,h)}set agreeLabel(t){r(this,h,t)}get notAgreeLabel(){return o(this,f)}set notAgreeLabel(t){r(this,f,t)}render(){return l`<sl-alert class="consent" variant="danger" ?open=${this.isOpen}>
      <sl-icon
        id="hot-red-text"
        library="bundled"
        slot="icon"
        name="info-circle"
      ></sl-icon>

      <h2 id="consent-header" class="consent--header">
        ${this.title}
      </h2>

      <p class="consent--message">
        <slot part="label"></slot>
      </p>

      <sl-button
        @click=${t=>{this._setAgree(t)}}
        >${this.agreeLabel}</sl-button
      >
      <sl-button
        @click=${t=>{this._setDisagree(t)}}
        >${this.notAgreeLabel}</sl-button
      >
    </sl-alert>`}_setAgree(t){this.isOpen=!1,localStorage.setItem(`${this.consentId}-consent-agree`,"true"),this.dispatchEvent(new Event("agree",{bubbles:!0,composed:!0}))}_setDisagree(t){this.isOpen=!1,localStorage.setItem(`${this.consentId}-consent-agree`,"false"),this.dispatchEvent(new Event("disagree",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback();let t=localStorage.getItem(`${this.consentId}-consent-agree`);if(t==="false"){this.isOpen=!1;return}t==="true"&&(this.isOpen=!1)}};g=new WeakMap,u=new WeakMap,p=new WeakMap,d=new WeakMap,b=new WeakMap,h=new WeakMap,f=new WeakMap,e.styles=[c],s([a({type:String,attribute:"consent-id"})],e.prototype,"consentId",1),s([a({type:Boolean})],e.prototype,"force",1),s([a({type:Boolean})],e.prototype,"isOpen",1),s([a({type:String})],e.prototype,"title",1),s([a({type:String})],e.prototype,"message",1),s([a({type:String,attribute:"agree-label"})],e.prototype,"agreeLabel",1),s([a({type:String,attribute:"not-agree-label"})],e.prototype,"notAgreeLabel",1);var O=e;customElements.define("hot-consent",e);export{e as a,O as b};
