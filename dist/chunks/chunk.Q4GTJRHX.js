import{a as r}from"./chunk.RXTECNTF.js";import{a as n}from"./chunk.N3EVDV7A.js";import{d as l,f as a}from"./chunk.64GCJQA3.js";import{d as t,e as s,f as o,g as i}from"./chunk.N2W26RCT.js";import"@awesome.me/webawesome/dist/components/icon/icon.js";var h,d,m,v,u,y,e=class extends a{constructor(){super(...arguments);this.name="hot-list-card";o(this,h,"");o(this,d,"");o(this,m,"");o(this,v,"");o(this,u,!0);o(this,y,!0)}get title(){return s(this,h)}set title(c){i(this,h,c)}get subtitle(){return s(this,d)}set subtitle(c){i(this,d,c)}get icon(){return s(this,m)}set icon(c){i(this,m,c)}get itemId(){return s(this,v)}set itemId(c){i(this,v,c)}get showRemove(){return s(this,u)}set showRemove(c){i(this,u,c)}get showIcon(){return s(this,y)}set showIcon(c){i(this,y,c)}_handleRemove(){this.dispatchEvent(new CustomEvent("hot-remove",{detail:{id:this.itemId},bubbles:!0,composed:!0}))}_handleKeyDown(c){(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),this._handleRemove())}render(){let c=this.showIcon&&this.icon;return l`
      <div class="list-item" role="listitem">
        ${c?l`<wa-icon name=${this.icon} class="list-icon" aria-hidden="true"></wa-icon>`:""}
        <div class="list-info">
          <div class="list-title" id="title-${this.itemId}">${this.title}</div>
          ${this.subtitle?l`<div class="list-subtitle">${this.subtitle}</div>`:""}
        </div>
        ${this.showRemove?l`
              <button
                type="button"
                class="remove-button"
                @click=${this._handleRemove}
                @keydown=${this._handleKeyDown}
                aria-label="Remove ${this.title}"
              >
                <wa-icon name="xmark" class="remove-icon" aria-hidden="true"></wa-icon>
              </button>
            `:""}
      </div>
    `}};h=new WeakMap,d=new WeakMap,m=new WeakMap,v=new WeakMap,u=new WeakMap,y=new WeakMap,e.styles=[r],t([n({type:String})],e.prototype,"title",1),t([n({type:String})],e.prototype,"subtitle",1),t([n({type:String})],e.prototype,"icon",1),t([n({type:String})],e.prototype,"itemId",1),t([n({type:Boolean})],e.prototype,"showRemove",1),t([n({type:Boolean})],e.prototype,"showIcon",1);var I=e;export{e as a,I as b};
