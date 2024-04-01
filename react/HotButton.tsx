import * as React from 'react';
import { createComponent } from '@lit/react';
import Button from '../components/button/Button';


const reactWrapper = createComponent({
  tagName: 'hot-button',
  elementClass: Button,
  react: React,
  events: {
    onclick: 'click',
  },
  displayName: "hot-button"
})

export default reactWrapper
