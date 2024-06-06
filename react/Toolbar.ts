
// @ts-ignore
import * as React from 'react';
import { createComponent } from '@lit/react';
import Toolbar from '../components/toolbar/toolbar';

const reactWrapper = createComponent({
  tagName: 'hot-toolbar',
  elementClass: Toolbar,
  react: React,
  events: {
    onUndoClick: 'undo',
    onRedoClick: 'redo',
    onBoldClick: 'bold',
    onItalicClick: 'italic',
    onUnderlineClick: 'underline',
    onLeftalignClick: 'leftalign',
    onCenteralignClick: 'centeralign',
    onRightalignClick: 'rightalign',
  },
  displayName: 'hot-toolbar'
});

export default reactWrapper;
