// @ts-ignore
import * as React from 'react';
import { createComponent } from '@lit/react';
import Tracking from '../components/Tracking';

const reactWrapper = createComponent({
  tagName: 'hot-tracking',
  elementClass: Tracking,
  react: React,
  events: {
    onAgree: 'agree',
    onDisagree: 'disagree',
  },
  displayName: 'hot-tracking'
});

export default reactWrapper;
