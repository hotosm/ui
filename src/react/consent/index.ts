import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '../../components/consent/consent.component.js';

const tagName = 'hot-consent';

const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {},
  displayName: 'Consent'
});

export default reactWrapper;
