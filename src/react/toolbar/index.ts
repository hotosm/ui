import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '../../components/toolbar/toolbar.component.js';

const tagName = 'hot-toolbar';

const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {},
  displayName: 'Toolbar'
});

export default reactWrapper;
