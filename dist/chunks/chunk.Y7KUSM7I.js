import{a as h}from"./chunk.542J3CKT.js";import{a as u}from"./chunk.WPXUR5EI.js";import{a as i,b as a,c as r,d as c}from"./chunk.FWYUHKRF.js";import"@shoelace-style/shoelace/dist/components/alert/alert.js";import{LitElement as y,html as v}from"lit";import{property as l}from"lit/decorators.js";u();var g,f,w,b,t=class extends y{constructor(){super(...arguments);this.name="hot-matomo-tracking";r(this,g,"");r(this,f,"");r(this,w,!1);r(this,b,!0)}get siteId(){return a(this,g)}set siteId(e){c(this,g,e)}get domain(){return a(this,f)}set domain(e){c(this,f,e)}get force(){return a(this,w)}set force(e){c(this,w,e)}get isOpen(){return a(this,b)}set isOpen(e){c(this,b,e)}render(){return v`<sl-alert class="matomoTracking" variant="danger" ?open=${this.isOpen}>
      <sl-icon
        id="hot-red-text"
        library="bundled"
        slot="icon"
        name="info-circle"
      ></sl-icon>

      <p id="matomoTracking-header" class="matomoTracking--header">About the information we collect</p>

      <p>
        We use cookies and similar technologies to recognize and analyze your
        visits, and measure traffic usage and activity. You can learn about how
        we use the data about your visit or information you provide reading our
        <a
          class="matomoTracking--link"
          href="https://www.hotosm.org/privacy"
          target="_blank"
          rel="noopener noreferrer"
          >privacy policy</a
        >. By clicking "I Agree", you consent to the use of cookies.
      </p>

      <sl-button
        @click=${e=>{this._setAgree(e)}}
        >I Agree</sl-button
      >
      <sl-button
        @click=${e=>{this._setDisagree(e)}}
        >I Do Not Agree</sl-button
      >
    </sl-alert>`}_setAgree(e){let o=window._paq=window._paq||[];o.length!==0&&(o.push(["rememberConsentGiven"]),this.isOpen=!1,localStorage.setItem(`${this.siteId}-matomo-agree`,"true"),this.dispatchEvent(new Event("agree",{bubbles:!0,composed:!0})))}_setDisagree(e){let o=window._paq=window._paq||[];o.length!==0&&(o.push(["forgetConsentGiven"]),this.isOpen=!1,localStorage.setItem(`${this.siteId}-matomo-agree`,"false"),this.dispatchEvent(new Event("disagree",{bubbles:!0,composed:!0})))}connectedCallback(){if(super.connectedCallback(),!this.force&&window.location.hostname!==this.domain){console.warn(`Matomo init failed. ${window.location.hostname} does not match ${this.domain}.`),this.isOpen=!1;return}let e=this.siteId;if(!this.force&&(e.length===0||this.domain.length===0)){console.warn("Matomo init failed. No site id or domains provided."),this.isOpen=!1;return}let o=localStorage.getItem(`${this.siteId}-matomo-agree`);if(o==="false"){this.isOpen=!1;return}o==="true"&&(this.isOpen=!1),console.log(`Setting Matomo tracking for site=${e} domain=${this.domain}`);let s=window._paq=window._paq||[];s.push(["requireConsent"]),s.push(["setDomains",[this.domain]]),s.push(["trackPageView"]),s.push(["enableLinkTracking"]),s.push(["trackVisibleContentImpressions"]),function(){let d="//matomo.hotosm.org/";s.push(["setTrackerUrl",d+"matomo.php"]),s.push(["setSiteId",e]);let m=document,p=m.createElement("script"),n=m.getElementsByTagName("script")[0];(n==null?void 0:n.parentNode)!=null?(p.async=!0,p.src=d+"matomo.js",n.parentNode.insertBefore(p,n)):console.warn("Script insertion failed. Parent node is null.")}()}};g=new WeakMap,f=new WeakMap,w=new WeakMap,b=new WeakMap,t.styles=[h],i([l({type:String,attribute:"site-id"})],t.prototype,"siteId",1),i([l({type:String})],t.prototype,"domain",1),i([l({type:Boolean})],t.prototype,"force",1),i([l({type:Boolean})],t.prototype,"isOpen",1);var C=t;customElements.define("hot-matomo-tracking",t);export{t as a,C as b};
