
// @ts-ignore
import * as React from 'react';
import { createComponent } from '@lit/react';
import Toolbar from '../components/Toolbar';

const reactWrapper = createComponent({
  tagName: 'hot-toolbar',
  elementClass: Toolbar,
  react: React,
  events: {
    onHotUndoClick: 'hot-undo-click',
    onHotRedoClick: 'hot-redo-click',
    onHotBoldClick: 'hot-bold-click',
    onHotItalicClick: 'hot-italic-click',
    onHotUnderlineClick: 'hot-underline-click',
    onHotLeftalignClick: 'hot-leftalign-click',
    onHotCenteralignClick: 'hot-centeralign-click',
    onHotRightalignClick: 'hot-rightalign-click',
  },
  displayName: 'hot-toolbar'
});

export default reactWrapper;
