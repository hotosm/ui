import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '../../components/header/header.component.js';

const tagName = 'hot-header';

const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {},
  displayName: 'Header'
});

export default reactWrapper;
