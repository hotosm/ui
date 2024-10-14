import{a as d}from"./chunk.WPXUR5EI.js";import{a as h,b as g}from"./chunk.4QDUS5ZV.js";import{a as t,b as s,c as l,d as o}from"./chunk.FWYUHKRF.js";import"@shoelace-style/shoelace/dist/components/icon-button/icon-button.js";import"@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js";import"@shoelace-style/shoelace/dist/components/tab-group/tab-group.js";import"@shoelace-style/shoelace/dist/components/tab/tab.js";import{LitElement as E,html as i}from"lit";import{property as a}from"lit/decorators.js";d();var p,m,b,v,u,y,$,e=class extends E{constructor(){super(...arguments);this.name="hot-header";l(this,p,"");l(this,m,"");l(this,b,!0);l(this,v,[]);l(this,u,"small");l(this,y,!0);l(this,$,0)}get title(){return s(this,p)}set title(c){o(this,p,c)}get logo(){return s(this,m)}set logo(c){o(this,m,c)}get drawer(){return s(this,b)}set drawer(c){o(this,b,c)}get tabs(){return s(this,v)}set tabs(c){o(this,v,c)}get size(){return s(this,u)}set size(c){o(this,u,c)}get borderBottom(){return s(this,y)}set borderBottom(c){o(this,y,c)}get selectedTab(){return s(this,$)}set selectedTab(c){o(this,$,c)}render(){let c=typeof this.logo=="string"||this.logo instanceof URL?typeof this.logo=="string"?this.logo:this.logo.href:"";return i`
      <header class=${h({size:this.size,borderBottom:this.borderBottom})}>
        <a href="/" class="header--link">
          ${c.length>0?i`
                <img
                  id="logo"
                  src="${this.logo}"
                  alt="Logo"
                  class="header--logo-img"
                />
              `:i`
            <hot-logo
              ?iconOnly="${this.title.length>0}"
            >
            </hot-logo>
            `}
          ${this.title.length>0?i`
                <h1 class="header--title">
                  ${this.title}
                </h1>
              `:null}
        </a>

        ${""}
        <nav
          class="header--nav"
        >
          <sl-tab-group class="header--tab-group">
            ${this.tabs.map((r,n)=>i`
                <sl-tab
                  class="header--tab"
                  slot="nav"
                  panel="general"
                  @click=${f=>{this._selectTab(f,r.clickEvent,n)}}
                  ?active=${this.selectedTab===n}
                  >${r.label}</sl-tab
                >
              `)}
          </sl-tab-group>
        </nav>

        ${""}
        ${""}
        <nav
          class="header--nav-mobile"
        ></nav>

        <div id="right-section" class="header--right-section">
          <sl-icon-button
            name="person-fill"
            library="hot-icons"
            class="header--person-circle"
            label="login"
            @click=${r=>{this._handleLogin(r)}}
          ></sl-icon-button>
            ${this.drawer?i`
                  <sl-icon-button
                    library="hot-icons"
                    class="header--drawer"
                    name="list"
                    label="drawer-open"
                  ></sl-icon-button>
                `:null}
          </div>
        </div>
      </header>
    `}_selectTab(c,r,n){this.selectedTab=n,r()}_handleLogin(c){this.dispatchEvent(new Event("login"))}};p=new WeakMap,m=new WeakMap,b=new WeakMap,v=new WeakMap,u=new WeakMap,y=new WeakMap,$=new WeakMap,e.styles=[g],t([a({type:String})],e.prototype,"title",1),t([a({type:String})],e.prototype,"logo",1),t([a({type:Boolean})],e.prototype,"drawer",1),t([a({type:Array})],e.prototype,"tabs",1),t([a({type:String})],e.prototype,"size",1),t([a({type:Boolean})],e.prototype,"borderBottom",1),t([a()],e.prototype,"selectedTab",1);var x=e;customElements.define("hot-header",e);export{e as a,x as b};
