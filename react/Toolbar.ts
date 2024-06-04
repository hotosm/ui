
// @ts-ignore
import * as React from 'react';
import { createComponent } from '@lit/react';
import Toolbar from '../components/toolbar/toolbar';

const reactWrapper = createComponent({
  tagName: 'hot-toolbar',
  elementClass: Toolbar,
  react: React,
  events: {
    onUndoClick: 'undo-click',
    onRedoClick: 'redo-click',
    onBoldClick: 'bold-click',
    onItalicClick: 'italic-click',
    onUnderlineClick: 'underline-click',
    onLeftalignClick: 'leftalign-click',
    onCenteralignClick: 'centeralign-click',
    onRightalignClick: 'rightalign-click',
  },
  displayName: 'hot-toolbar'
});

export default reactWrapper;
