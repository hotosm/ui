import{a as l}from"./chunk.4DV2WAS7.js";import{a as n}from"./chunk.WPXUR5EI.js";import{a as s,b as r,c as a,d as i}from"./chunk.FWYUHKRF.js";import"@shoelace-style/shoelace/dist/components/alert/alert.js";import{LitElement as m,html as c}from"lit";import{property as o}from"lit/decorators.js";n();var g,u,p,d,b,h,f,e=class extends m{constructor(){super(...arguments);this.name="hot-tracking";a(this,g,"");a(this,u,!1);a(this,p,!0);a(this,d,"About the information we collect");a(this,b,c`<p>We use cookies and similar technologies to \
  recognize and analyze your visits, and measure traffic usage and activity.</p>`);a(this,h,"I Agree");a(this,f,"I Do Dot Agree")}get siteId(){return r(this,g)}set siteId(t){i(this,g,t)}get force(){return r(this,u)}set force(t){i(this,u,t)}get isOpen(){return r(this,p)}set isOpen(t){i(this,p,t)}get title(){return r(this,d)}set title(t){i(this,d,t)}get message(){return r(this,b)}set message(t){i(this,b,t)}get agreeLabel(){return r(this,h)}set agreeLabel(t){i(this,h,t)}get notAgreeLabel(){return r(this,f)}set notAgreeLabel(t){i(this,f,t)}render(){return c`<sl-alert class="tracking" variant="danger" ?open=${this.isOpen}>
      <sl-icon
        id="hot-red-text"
        library="bundled"
        slot="icon"
        name="info-circle"
      ></sl-icon>

      <h2 id="tracking-header" class="tracking--header">
        ${this.title}
      </h2>

      <p class="tracking--message">
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
    </sl-alert>`}_setAgree(t){this.isOpen=!1,localStorage.setItem(`${this.siteId}-tracking-agree`,"true"),this.dispatchEvent(new Event("agree",{bubbles:!0,composed:!0}))}_setDisagree(t){this.isOpen=!1,localStorage.setItem(`${this.siteId}-tracking-agree`,"false"),this.dispatchEvent(new Event("disagree",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback();let t=localStorage.getItem(`${this.siteId}-tracking-agree`);if(t==="false"){this.isOpen=!1;return}t==="true"&&(this.isOpen=!1)}};g=new WeakMap,u=new WeakMap,p=new WeakMap,d=new WeakMap,b=new WeakMap,h=new WeakMap,f=new WeakMap,e.styles=[l],s([o({type:String,attribute:"site-id"})],e.prototype,"siteId",1),s([o({type:Boolean})],e.prototype,"force",1),s([o({type:Boolean})],e.prototype,"isOpen",1),s([o({type:String})],e.prototype,"title",1),s([o({type:String})],e.prototype,"message",1),s([o({type:String,attribute:"agree-label"})],e.prototype,"agreeLabel",1),s([o({type:String,attribute:"not-agree-label"})],e.prototype,"notAgreeLabel",1);var O=e;customElements.define("hot-tracking",e);export{e as a,O as b};
