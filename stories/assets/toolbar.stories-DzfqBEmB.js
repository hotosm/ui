import{r as f,n as g}from"./icons-D8Ilt-xN.js";import"./chunk.LTR2ZSCI-MPpqNKgM.js";import{s as y,i as m,x as s}from"./lit-element-BcQOHSkQ.js";import"./directive-helpers-Fm7m8_mF.js";import"./chunk.NYIIDP5N-Csveo3ir.js";var w=Object.defineProperty,b=(r,t,o,i)=>{for(var n=void 0,u=r.length-1,c;u>=0;u--)(c=r[u])&&(n=c(t,o,n)||n);return n&&w(t,o,n),n};f();const l=class l extends y{constructor(){super(...arguments),this.name="hot-toolbar",this.tooltipPosition="top",this.undo=t=>{t.stopPropagation(),this.dispatchEvent(new Event("undo"))},this.redo=t=>{t.stopPropagation(),this.dispatchEvent(new Event("redo"))},this.bold=t=>{t.stopPropagation(),this.dispatchEvent(new Event("bold"))},this.italic=t=>{t.stopPropagation(),this.dispatchEvent(new Event("italic"))},this.underline=t=>{t.stopPropagation(),this.dispatchEvent(new Event("underline"))},this.alignLeft=t=>{t.stopPropagation(),this.dispatchEvent(new Event("leftalign"))},this.alignCenter=t=>{t.stopPropagation(),this.dispatchEvent(new Event("centeralign"))},this.alignRight=t=>{t.stopPropagation(),this.dispatchEvent(new Event("rightalign"))}}render(){return s`
      <div class="button-group-toolbar">
        ${this.renderButtonGroup("History",[{content:"Undo",icon:"arrow-counterclockwise",label:"Undo",action:this.undo},{content:"Redo",icon:"arrow-clockwise",label:"Redo",action:this.redo}])}
        ${this.renderButtonGroup("Formatting",[{content:"Bold",icon:"type-bold",label:"Bold",action:this.bold},{content:"Italic",icon:"type-italic",label:"Italic",action:this.italic},{content:"Underline",icon:"type-underline",label:"Underline",action:this.underline}])}
        ${this.renderButtonGroup("Alignment",[{content:"Align Left",icon:"justify-left",label:"Align Left",action:this.alignLeft},{content:"Align Center",icon:"justify",label:"Align Center",action:this.alignCenter},{content:"Align Right",icon:"justify-right",label:"Align Right",action:this.alignRight}])}
      </div>
    `}renderButtonGroup(t,o){return s`
      <sl-button-group label=${t}>
        ${o.map(i=>this.renderButton(i))}
      </sl-button-group>
    `}renderButton({content:t,icon:o,label:i,action:n}){return s`
      <sl-tooltip content=${t} placement="${this.tooltipPosition}">
        <sl-button @click=${n??(()=>{})}><sl-icon library="bundled" name=${o} label=${i}></sl-icon></sl-button>
      </sl-tooltip>
    `}};l.styles=[m`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.relative{position:relative;}
.static{position:static;}
.justify-left{justify-content:left;}
.justify-right{justify-content:right;}
.italic{font-style:italic;}
.underline{text-decoration-line:underline;};
    `];let e=l;b([g()],e.prototype,"name");b([g({type:String,attribute:"tooltip-position"})],e.prototype,"tooltipPosition");customElements.define("hot-toolbar",e);const $={title:"Toolbar",component:"hot-toolbar"},a={args:{tooltipPosition:"top"},argTypes:{tooltipPosition:{options:["top","bottom","left","right"],control:{type:"select"}}},render:r=>s`
      <h1>Toolbar</h1>
      <br>
      <br>
      <hot-toolbar
        tooltip-position="${r.tooltipPosition}"
        @redo=${()=>{alert("Redo Clicked")}}
      ></hot-toolbar>
    `};var p,d,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    tooltipPosition: "top"
  },
  argTypes: {
    tooltipPosition: {
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "select"
      }
    }
  },
  render: args => {
    return html\`
      <h1>Toolbar</h1>
      <br>
      <br>
      <hot-toolbar
        tooltip-position="\${args.tooltipPosition}"
        @redo=\${() => {
      alert("Redo Clicked");
    }}
      ></hot-toolbar>
    \`;
  }
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const z=["Template"];export{a as Template,z as __namedExportsOrder,$ as default};
