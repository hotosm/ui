var o=`@layer wa-utilities {
  :host([size='small']),
  .wa-size-s {
    font-size: var(--wa-font-size-s);
  }

  :host([size='medium']),
  .wa-size-m {
    font-size: var(--wa-font-size-m);
  }

  :host([size='large']),
  .wa-size-l {
    font-size: var(--wa-font-size-l);
  }
}
`;var a=`@layer wa-utilities {
  /** Register color properties so that the space toggle hack can work. */
  @property --wa-color-fill-loud {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-fill-normal {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-fill-quiet {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-border-loud {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-border-normal {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-border-quiet {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-on-loud {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-on-normal {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --wa-color-on-quiet {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  /**
 * Element defaults.
   We want these to resolve to inherit when inside a variant, and only be applied when not inside an explicit variant.
 */

  :host(wa-button),
  button,
  input[type='button'],
  input[type='submit'],
  :host(wa-tag) {
    --wa-color-fill-loud: var(--wa-no-variant, var(--wa-color-neutral-fill-loud));
    --wa-color-fill-normal: var(--wa-no-variant, var(--wa-color-neutral-fill-normal));
    --wa-color-fill-quiet: var(--wa-no-variant, var(--wa-color-neutral-fill-quiet));
    --wa-color-border-loud: var(--wa-no-variant, var(--wa-color-neutral-border-loud));
    --wa-color-border-normal: var(--wa-no-variant, var(--wa-color-neutral-border-normal));
    --wa-color-border-quiet: var(--wa-no-variant, var(--wa-color-neutral-border-quiet));
    --wa-color-on-loud: var(--wa-no-variant, var(--wa-color-neutral-on-loud));
    --wa-color-on-normal: var(--wa-no-variant, var(--wa-color-neutral-on-normal));
    --wa-color-on-quiet: var(--wa-no-variant, var(--wa-color-neutral-on-quiet));
  }

  :host(wa-callout),
  :host(wa-badge) {
    --wa-color-fill-loud: var(--wa-no-variant, var(--wa-color-brand-fill-loud));
    --wa-color-fill-normal: var(--wa-no-variant, var(--wa-color-brand-fill-normal));
    --wa-color-fill-quiet: var(--wa-no-variant, var(--wa-color-brand-fill-quiet));
    --wa-color-border-loud: var(--wa-no-variant, var(--wa-color-brand-border-loud));
    --wa-color-border-normal: var(--wa-no-variant, var(--wa-color-brand-border-normal));
    --wa-color-border-quiet: var(--wa-no-variant, var(--wa-color-brand-border-quiet));
    --wa-color-on-loud: var(--wa-no-variant, var(--wa-color-brand-on-loud));
    --wa-color-on-normal: var(--wa-no-variant, var(--wa-color-brand-on-normal));
    --wa-color-on-quiet: var(--wa-no-variant, var(--wa-color-brand-on-quiet));
  }

  /**
 * Variants
 */

  :root,
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }

  .wa-neutral,
  .wa-brand,
  .wa-success,
  .wa-warning,
  .wa-danger,
  :host([variant]) {
    --wa-no-variant: /* space toggle */;
  }
}
`;export{o as a,a as b};
