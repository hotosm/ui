import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '../../components/tracking/tracking.component.js';

const tagName = 'hot-matomo-tracking';

const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {},
  displayName: 'MatomoTracking'
});

export default reactWrapper;
