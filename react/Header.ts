
// @ts-ignore
import * as React from 'react';
import { createComponent } from '@lit/react';
import Header from '../components/Header';

const reactWrapper = createComponent({
  tagName: 'hot-header',
  elementClass: Header,
  react: React,
  displayName: 'hot-header'
});

export default reactWrapper;