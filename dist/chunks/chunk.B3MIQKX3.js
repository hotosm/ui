import{a as d}from"./chunk.WPXUR5EI.js";import{a as h,b as g}from"./chunk.7KXDULC3.js";import{a as t,b as s,c as l,d as o}from"./chunk.FWYUHKRF.js";import"@shoelace-style/shoelace/dist/components/icon-button/icon-button.js";import"@shoelace-style/shoelace/dist/components/tab-group/tab-group.js";import"@shoelace-style/shoelace/dist/components/tab/tab.js";import{LitElement as E,html as n}from"lit";import{property as a}from"lit/decorators.js";d();var b,p,m,v,u,y,$,e=class extends E{constructor(){super(...arguments);this.name="hot-header";l(this,b,"");l(this,p,"");l(this,m,!0);l(this,v,[]);l(this,u,"small");l(this,y,!0);l(this,$,0)}get title(){return s(this,b)}set title(r){o(this,b,r)}get logo(){return s(this,p)}set logo(r){o(this,p,r)}get drawer(){return s(this,m)}set drawer(r){o(this,m,r)}get tabs(){return s(this,v)}set tabs(r){o(this,v,r)}get size(){return s(this,u)}set size(r){o(this,u,r)}get borderBottom(){return s(this,y)}set borderBottom(r){o(this,y,r)}get selectedTab(){return s(this,$)}set selectedTab(r){o(this,$,r)}selectTab(r){console.log(r),this.tabs=[...this.tabs],this.selectedTab=r}render(){let r=typeof this.logo=="string"||this.logo instanceof URL?typeof this.logo=="string"?this.logo:this.logo.href:"";return n`
      <header class=${h({size:this.size,borderBottom:this.borderBottom})}>
        <a href="/" class="header--link">
          ${r.length>0?n`
                <img
                  id="logo"
                  src="${this.logo}"
                  alt="Logo"
                  class="header--logo-img"
                />
              `:n`
            <hot-logo
              ?iconOnly="${this.title.length>0}"
            >
            </hot-logo>
            `}
          ${this.title.length>0?n`
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
            ${this.tabs.map((i,c)=>n`
                <sl-tab
                  class=${["header--tab",this.selectedTab===c?"header--tab-active":""].join(" ")}
                  slot="nav"
                  @click=${f=>{this._tabClick(f,i.clickEvent,c)}}
                >
                  ${i.label}
                </sl-tab>
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
            @click=${i=>{this._handleLogin(i)}}
          ></sl-icon-button>
            ${this.drawer?n`
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
    `}_tabClick(r,i,c){this.selectTab(c),i()}_handleLogin(r){this.dispatchEvent(new Event("login"))}};b=new WeakMap,p=new WeakMap,m=new WeakMap,v=new WeakMap,u=new WeakMap,y=new WeakMap,$=new WeakMap,e.styles=[g],t([a({type:String})],e.prototype,"title",1),t([a({type:String})],e.prototype,"logo",1),t([a({type:Boolean})],e.prototype,"drawer",1),t([a({type:Array})],e.prototype,"tabs",1),t([a({type:String})],e.prototype,"size",1),t([a({type:Boolean})],e.prototype,"borderBottom",1),t([a({type:Number})],e.prototype,"selectedTab",1);var R=e;customElements.define("hot-header",e);export{e as a,R as b};
