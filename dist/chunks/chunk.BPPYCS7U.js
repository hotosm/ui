import{a as l}from"./chunk.O6I2TNK3.js";import{b as o}from"./chunk.6Y3X2E2V.js";import{a as n}from"./chunk.M3ZIZPKF.js";import{e as t,k as c}from"./chunk.TNLBUOUK.js";import{d as s,e as i,f as a,g as r}from"./chunk.NI7UJOOZ.js";n();var p,d,h,y,g,m,$,S,f,e=class extends c{constructor(){super(...arguments);this.name="hot-button";a(this,p,"primary");a(this,d,"medium");a(this,h,"default");a(this,y,!1);a(this,g,!1);a(this,m,"");a(this,$,"start");a(this,S,"button");a(this,f,"")}get variant(){return i(this,p)}set variant(w){r(this,p,w)}get size(){return i(this,d)}set size(w){r(this,d,w)}get appearance(){return i(this,h)}set appearance(w){r(this,h,w)}get disabled(){return i(this,y)}set disabled(w){r(this,y,w)}get loading(){return i(this,g)}set loading(w){r(this,g,w)}get icon(){return i(this,m)}set icon(w){r(this,m,w)}get iconPosition(){return i(this,$)}set iconPosition(w){r(this,$,w)}get type(){return i(this,S)}set type(w){r(this,S,w)}get hotColor(){return i(this,f)}set hotColor(w){r(this,f,w)}render(){let w=`hot-button${this.hotColor?` hot-${this.hotColor}`:""}`;return t`
      <wa-button
        variant="${this.variant}"
        size="${this.size}"
        appearance="${this.appearance}"
        ?disabled="${this.disabled}"
        ?loading="${this.loading}"
        type="${this.type}"
        class="${w}"
      >
        ${this.icon&&this.iconPosition==="start"?t`
          <wa-icon name="${this.icon}" slot="icon"></wa-icon>
        `:null}
        <slot></slot>
        ${this.icon&&this.iconPosition==="end"?t`
          <wa-icon name="${this.icon}" slot="icon"></wa-icon>
        `:null}
      </wa-button>
    `}};p=new WeakMap,d=new WeakMap,h=new WeakMap,y=new WeakMap,g=new WeakMap,m=new WeakMap,$=new WeakMap,S=new WeakMap,f=new WeakMap,e.styles=[l],s([o({type:String})],e.prototype,"variant",1),s([o({type:String})],e.prototype,"size",1),s([o({type:String})],e.prototype,"appearance",1),s([o({type:Boolean})],e.prototype,"disabled",1),s([o({type:Boolean})],e.prototype,"loading",1),s([o({type:String})],e.prototype,"icon",1),s([o({type:String})],e.prototype,"iconPosition",1),s([o({type:String})],e.prototype,"type",1),s([o({type:String,attribute:"hot-color"})],e.prototype,"hotColor",1);var R=e;export{e as a,R as b};
