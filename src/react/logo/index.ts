import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '../../components/logo/logo.component.js';

const tagName = 'hot-logo';

const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {},
  displayName: 'Logo'
});

export default reactWrapper;
