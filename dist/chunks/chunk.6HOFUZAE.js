import{c as o,d as e,g as l,h as i}from"./chunk.N7VH3RWY.js";import{a as t,b as a}from"./chunk.OHYOXYF2.js";import{e as n}from"./chunk.C6I42VVF.js";var p=`:host {
  display: flex;
  position: relative;
  align-items: stretch;
  border-radius: var(--wa-panel-border-radius);
  background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
  border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
  border-style: var(--wa-panel-border-style);
  border-width: var(--wa-panel-border-width);
  color: var(--wa-color-text-normal);
  padding: 1em;
}

/* Appearance modifiers */
:host([appearance~='plain']) {
  background-color: transparent;
  border-color: transparent;
}

:host([appearance~='outlined']) {
  background-color: transparent;
  border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
}

:host([appearance~='filled']) {
  background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
  border-color: transparent;

  &:host([appearance~='outlined']) {
    border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
  }
}

:host([appearance~='accent']) {
  color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
  background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
  border-color: transparent;

  [part~='icon'] {
    color: currentColor;
  }
}

[part~='icon'] {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  color: var(--wa-color-on-quiet);
  font-size: 1.25em;
}

::slotted([slot='icon']) {
  margin-inline-end: var(--wa-form-control-padding-inline);
}

[part~='message'] {
  flex: 1 1 auto;
  display: block;
  overflow: hidden;
}
`,r=class extends e{constructor(){super(...arguments),this.variant="brand",this.appearance="outlined filled",this.size="medium"}render(){return n`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};r.css=[p,i,l];o([a({reflect:!0})],r.prototype,"variant",2);o([a({reflect:!0})],r.prototype,"appearance",2);o([a({reflect:!0})],r.prototype,"size",2);r=o([t("wa-callout")],r);
