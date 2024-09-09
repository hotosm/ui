
// @ts-ignore
import * as React from 'react';
import { createComponent } from '@lit/react';
import Logo from '../logo/logo';

const reactWrapper = createComponent({
  tagName: 'hot-logo',
  elementClass: Logo,
  react: React,
  events: {},
  displayName: 'HotLogo'
});

export default reactWrapper;
