
// @ts-ignore
import * as React from 'react';
import { createComponent } from '@lit/react';
import Button from '../components/button/button';

const reactWrapper = createComponent({
  tagName: 'hot-button',
  elementClass: Button,
  react: React,
  events: {
    onClick: 'click',
  },
  displayName: 'hot-button'
});

export default reactWrapper;
