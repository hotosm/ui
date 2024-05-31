
// @ts-ignore
import * as React from 'react';
import { createComponent } from '@lit/react';
import Toolbar from '../components/Toolbar';

const reactWrapper = createComponent({
  tagName: 'hot-toolbar',
  elementClass: Toolbar,
  react: React,
  events: {
    onUndoClick: 'hot-undo-click',
    onRedoClick: 'hot-redo-click',
    onBoldClick: 'hot-bold-click',
    onItalicClick: 'hot-italic-click',
    onUnderlineClick: 'hot-underline-click',
    onLeftalignClick: 'hot-leftalign-click',
    onCenteralignClick: 'hot-centeralign-click',
    onRightalignClick: 'hot-rightalign-click',
  },
  displayName: 'hot-toolbar'
});

export default reactWrapper;
