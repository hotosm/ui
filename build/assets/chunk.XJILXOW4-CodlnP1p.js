import{i as a}from"./lit-element-CPYlYYac.js";import{c as l,S as c,_ as s,e as u,r as d,n as i,a as b,b as r,k as h,R as p,t as e}from"./icons-oafdsS42.js";var f=a`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,o=class extends b{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,n=t?r`a`:r`button`;return h`
      <${n}
        part="base"
        class=${p({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${e(t?void 0:this.disabled)}
        type=${e(t?void 0:"button")}
        href=${e(t?this.href:void 0)}
        target=${e(t?this.target:void 0)}
        download=${e(t?this.download:void 0)}
        rel=${e(t&&this.target?"noreferrer noopener":void 0)}
        role=${e(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${e(this.name)}
          library=${e(this.library)}
          src=${e(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${n}>
    `}};o.styles=[l,f];o.dependencies={"sl-icon":c};s([u(".icon-button")],o.prototype,"button",2);s([d()],o.prototype,"hasFocus",2);s([i()],o.prototype,"name",2);s([i()],o.prototype,"library",2);s([i()],o.prototype,"src",2);s([i()],o.prototype,"href",2);s([i()],o.prototype,"target",2);s([i()],o.prototype,"download",2);s([i()],o.prototype,"label",2);s([i({type:Boolean,reflect:!0})],o.prototype,"disabled",2);export{o as S};
