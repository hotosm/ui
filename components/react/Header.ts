// @ts-ignore
import * as React from 'react';
import { createComponent } from '@lit/react';
import Header from '../header/header';

const reactWrapper = createComponent({
  tagName: 'hot-header',
  elementClass: Header,
  react: React,
  events: {
    onLogin: 'login',
  },
  displayName: 'HotHeader'
});

export default reactWrapper;
