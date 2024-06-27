import{G as F}from"./index-CNCWk-P_.js";import{r as O,n as l,a as U}from"./icons-D8Ilt-xN.js";import{c as j}from"./index-BguKLXde.js";import"./chunk.DBG7W4GS-Bl4R2AHc.js";import{s as C,i as f,x as i}from"./lit-element-BcQOHSkQ.js";import"./directive-helpers-Fm7m8_mF.js";const{global:Q}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator:Z,addons:v}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:Y,SELECT_STORY:I}=__STORYBOOK_MODULE_CORE_EVENTS__;var K="links",{document:p,HTMLElement:P}=Q;function M(e){let n={},t=(e[0]==="?"?e.substring(1):e).split("&").filter(Boolean);for(let r=0;r<t.length;r++){let a=t[r].split("=");n[decodeURIComponent(a[0])]=decodeURIComponent(a[1]||"")}return n}var G=e=>v.getChannel().emit(I,e),h=(e,n)=>new Promise(t=>{let{location:r}=p,a=M(r.search),u=[].concat(a.id)[0],d=e||u.split("--",2)[0],E=`/story/${F(d,n)}`,x=r.pathname.replace(/iframe\.html$/,""),B=`${r.origin+x}?${Object.entries({path:E}).map(g=>`${g[0]}=${g[1]}`).join("&")}`;t(B)}),W=e=>{let{target:n}=e;if(!(n instanceof P))return;let t=n,{sbKind:r,sbStory:a}=t.dataset;(r||a)&&(e.preventDefault(),G({kind:r,story:a}))},b=!1,L=()=>{b||(b=!0,p.addEventListener("click",W))},S=()=>{b&&(b=!1,p.removeEventListener("click",W))};Z({name:"withLinks",parameterName:K,wrapper:(e,n)=>(L(),v.getChannel().once(Y,S),e(n))});var z=Object.defineProperty,s=(e,n,t,r)=>{for(var a=void 0,u=e.length-1,d;u>=0;u--)(d=e[u])&&(a=d(n,t,a)||a);return a&&z(n,t,a),a};O();const X=j(`
    flex flex-row bg-[var(--hot-white)] items-center justify-between
    sm:justify-around p-2 border-b-2 border-b-gray-100 border-b-solid 
  `,{variants:{size:{small:"h-8",large:"h-14"}}}),m=class m extends C{constructor(){super(...arguments),this.name="hot-header",this.title="",this.logo=`
    data:image/png;base64,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
  `,this.drawer=!0,this.tabs=[],this.size="large",this.selectedTab=0}render(){const n=typeof this.logo=="string"||this.logo instanceof URL?typeof this.logo=="string"?this.logo:this.logo.href:"";return i`
    <header class=${X({size:this.size})}>
      <a href="/" class="flex flex-row">
        ${n.length>0?i`
          <img
            id="logo"
            src="${this.logo}"
            alt="Logo"
            class="h-10 px-10 hover:opacity-90"
          >
        `:null}

        ${this.title.length>0?i`
          <h1 class="text-2xl color-primary font-sans font-bold pl-3 m-0">${this.title}</h1>
        `:null}
      </a>

      ${""}
      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        <sl-tab-group>
          ${this.tabs.map((t,r)=>i`
              <sl-tab 
                slot="nav" 
                panel="general"
                @click=${a=>{this._selectTab(a,t.clickEvent,r)}}
                ?selected=${this.selectedTab===r}
              >${t.label}</sl-tab>
            `)}
        </sl-tab-group>
      </nav>

      ${""}
      ${""}
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
      </nav>

      <div id="right-section" style="display: flex; align-items: center;">
        <sl-icon-button
          library="bundled"
          name="person-circle"
          style="font-size: 1.8rem;"
          label="login"
          @click=${t=>{this._handleLogin(t)}}
        ></sl-icon-button>
        
        <div id="drawer-block" style="font-size: 2rem;">
          ${this.drawer?i`
            <sl-icon-button library="bundled" name="list" label="drawer-open"></sl-icon-button>
          `:null}
        </div>
      </div>
    </header>
    `}_selectTab(n,t,r){this.selectedTab=r,t()}_handleLogin(n){this.dispatchEvent(new Event("login"))}};m.styles=[f`/* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.m-0{margin:0;}
.hidden{display:none;}
.h-10{height:2.5rem;}
.h-14{height:3.5rem;}
.h-8{height:2rem;}
.flex{display:flex;}
.flex-row{flex-direction:row;}
.flex-col{flex-direction:column;}
.items-end{align-items:flex-end;}
.items-center{align-items:center;}
.justify-between{justify-content:space-between;}
.gap-1{gap:0.25rem;}
.gap-4{gap:1rem;}
.border-b-2{border-bottom-width:2px;}
.border-b-gray-100{--un-border-opacity:1;--un-border-bottom-opacity:var(--un-border-opacity);border-bottom-color:rgb(243 244 246 / var(--un-border-bottom-opacity));}
.border-b-solid{border-bottom-style:solid;}
.bg-\\[var\\(--hot-white\\)\\]{background-color:var(--hot-white);}
.p-2{padding:0.5rem;}
.px-10{padding-left:2.5rem;padding-right:2.5rem;}
.pl-3{padding-left:0.75rem;}
.text-2xl{font-size:1.5rem;line-height:2rem;}
.color-primary{--un-text-opacity:1;color:rgb(var(--hot-primary-rgb) / var(--un-text-opacity));}
.font-bold{font-weight:700;}
.font-semibold{font-weight:600;}
.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";}
.hover\\:opacity-90:hover{opacity:0.9;}
@media (min-width: 640px){
.sm\\:hidden{display:none;}
.sm\\:flex{display:flex;}
.sm\\:justify-around{justify-content:space-around;}
};`,f`
      #right-section {
        display: flex;
        align-items: center;
      }
      
      sl-tab-group {
        display: flex;
      }

      sl-tab::part(base) {
        font-size: 1rem;
        border-bottom: 2px solid transparent;
      }

      sl-tab[selected]::part(base) {
        border-bottom: 2px solid white;
      }

      #drawer-block {
        display: flex;
        align-items: center;
        padding-right: 30px;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }
        #break {
          background-color: black;
        }
      }
    `];let o=m;s([l()],o.prototype,"name");s([l({type:String})],o.prototype,"title");s([l({type:String})],o.prototype,"logo");s([l({type:Boolean})],o.prototype,"drawer");s([l({type:Array})],o.prototype,"tabs");s([l({type:String})],o.prototype,"size");s([U()],o.prototype,"selectedTab");customElements.define("hot-header",o);const A=new URL("data:image/png;base64,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",import.meta.url).href,ne={title:"Header",component:"hot-header"},N=[{label:"ONE TAB ONLY",clickEvent:()=>{}}],y=[{label:"GO TO HEADER PAGE",clickEvent:async()=>{const e=await h("Button","Template");window.location.href=e}},{label:"GO TO TRACKING PAGE",clickEvent:async()=>{const e=await h("Tracking","Template");window.location.href=e}}],H=Array.from({length:3},(e,n)=>({label:`TAB Number ${n+1}`,clickEvent:()=>{}})),R=Array.from({length:4},(e,n)=>({label:`TAB Number ${n+1}`,clickEvent:()=>{}})),J=Array.from({length:5},(e,n)=>({label:`TAB Number ${n+1}`,clickEvent:()=>{}})),c={args:{size:"large",title:"",logo:A,drawer:!0,tabs:y},argTypes:{size:{options:["large","small"],control:{type:"select"}},title:{options:["","Tasking Manager","FMTM","Drone Tasking Manager"],control:{type:"select"}},logo:{options:[A,"data:image/png;base64,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"],control:{type:"select"}},drawer:{options:[!0,!1],control:{type:"radio"}},tabs:{options:{"1 Tab":N,"2 Tabs":y,"3 Tabs":H,"4 Tabs":R,"5 Tabs":J},control:{type:"select"}}},render:e=>i`
      <hot-header
        title=${e.title}
        logo=${e.logo}
        size=${e.size}
        ?drawer=${e.drawer}
        .tabs=${e.tabs}
      ></hot-header>

      <h1>Page Content</h1>
      <br>
      <p>Text on the page</p>
    `};var T,k,w;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: "large",
    title: "",
    logo: defaultLogo,
    drawer: true,
    tabs: twoTab
  },
  argTypes: {
    size: {
      options: ["large", "small"],
      control: {
        type: "select"
      }
    },
    title: {
      options: ["", "Tasking Manager", "FMTM", "Drone Tasking Manager"],
      control: {
        type: "select"
      }
    },
    logo: {
      options: [defaultLogo, "data:image/png;base64,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"],
      control: {
        type: "select"
      }
    },
    drawer: {
      options: [true, false],
      control: {
        type: "radio"
      }
    },
    tabs: {
      options: {
        '1 Tab': oneTab,
        '2 Tabs': twoTab,
        '3 Tabs': threeTab,
        '4 Tabs': fourTab,
        '5 Tabs': fiveTab
      },
      control: {
        type: "select"
      }
    }
  },
  render: args => {
    return html\`
      <hot-header
        title=\${args.title}
        logo=\${args.logo}
        size=\${args.size}
        ?drawer=\${args.drawer}
        .tabs=\${args.tabs}
      ></hot-header>

      <h1>Page Content</h1>
      <br>
      <p>Text on the page</p>
    \`;
  }
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const te=["Template"];export{c as Template,te as __namedExportsOrder,ne as default};
