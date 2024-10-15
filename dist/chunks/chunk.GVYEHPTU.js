import{a as d}from"./chunk.PUMXQ24J.js";import{a as c}from"./chunk.WPXUR5EI.js";import{a as l,b as a,c as s,d as p}from"./chunk.FWYUHKRF.js";import"@shoelace-style/shoelace/dist/components/button/button.js";import"@shoelace-style/shoelace/dist/components/button-group/button-group.js";import"@shoelace-style/shoelace/dist/components/icon/icon.js";import"@shoelace-style/shoelace/dist/components/tooltip/tooltip.js";import{LitElement as g,html as r}from"lit";import{property as v}from"lit/decorators.js";c();var u,e=class extends g{constructor(){super(...arguments);this.name="hot-toolbar";s(this,u,"top");this.undo=t=>{t.stopPropagation(),this.dispatchEvent(new Event("undo"))};this.redo=t=>{t.stopPropagation(),this.dispatchEvent(new Event("redo"))};this.bold=t=>{t.stopPropagation(),this.dispatchEvent(new Event("bold"))};this.italic=t=>{t.stopPropagation(),this.dispatchEvent(new Event("italic"))};this.underline=t=>{t.stopPropagation(),this.dispatchEvent(new Event("underline"))};this.alignLeft=t=>{t.stopPropagation(),this.dispatchEvent(new Event("leftalign"))};this.alignCenter=t=>{t.stopPropagation(),this.dispatchEvent(new Event("centeralign"))};this.alignRight=t=>{t.stopPropagation(),this.dispatchEvent(new Event("rightalign"))}}get tooltipPosition(){return a(this,u)}set tooltipPosition(t){p(this,u,t)}render(){return r`
      <div class="toolbar">
        ${this.renderButtonGroup("History",[{content:"Undo",icon:"arrow-counterclockwise",label:"Undo",action:this.undo},{content:"Redo",icon:"arrow-clockwise",label:"Redo",action:this.redo}])}
        ${this.renderButtonGroup("Formatting",[{content:"Bold",icon:"type-bold",label:"Bold",action:this.bold},{content:"Italic",icon:"type-italic",label:"Italic",action:this.italic},{content:"Underline",icon:"type-underline",label:"Underline",action:this.underline}])}
        ${this.renderButtonGroup("Alignment",[{content:"Align Left",icon:"justify-left",label:"Align Left",action:this.alignLeft},{content:"Align Center",icon:"justify",label:"Align Center",action:this.alignCenter},{content:"Align Right",icon:"justify-right",label:"Align Right",action:this.alignRight}])}
      </div>
    `}renderButtonGroup(t,n){return r`
      <sl-button-group label=${t}>
        ${n.map(o=>this.renderButton(o))}
      </sl-button-group>
    `}renderButton({content:t,icon:n,label:o,action:i}){return r`
      <sl-tooltip content=${t} placement="${this.tooltipPosition}">
        <sl-button @click=${i!=null?i:()=>{}}
          ><sl-icon library="hot-icons" name=${n} label=${o}></sl-icon
        ></sl-button>
      </sl-tooltip>
    `}};u=new WeakMap,e.styles=[d],l([v({type:String,attribute:"tooltip-position"})],e.prototype,"tooltipPosition",1);var B=e;customElements.define("hot-toolbar",e);export{e as a,B as b};
