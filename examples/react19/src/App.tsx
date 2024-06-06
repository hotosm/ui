import { useState } from 'react';
import hotLogo from '@hotosm/ui/theme/logo.png';

import '@hotosm/ui/dist/style.css';
import '@hotosm/ui/dist/components.js';

const App = () => {
  const [undoCount, setUndoCount] = useState(0);
  const [redoCount, setRedoCount] = useState(0);
  const [boldCount, setBoldCount] = useState(0);
  const [italicCount, setItalicCount] = useState(0);
  const [underlineCount, setUnderlineCount] = useState(0);
  const [leftAlignCount, setLeftAlignCount] = useState(0);
  const [centerAlignCount, setCenterAlignCount] = useState(0);
  const [rightAlignCount, setRightAlignCount] = useState(0);

  const incrementCounter = (type) => {
    switch (type) {
      case 'undo':
        setUndoCount((prevCount) => prevCount + 1);
        break;
      case 'redo':
        setRedoCount((prevCount) => prevCount + 1);
        break;
      case 'bold':
        setBoldCount((prevCount) => prevCount + 1);
        break;
      case 'italic':
        setItalicCount((prevCount) => prevCount + 1);
        break;
      case 'underline':
        setUnderlineCount((prevCount) => prevCount + 1);
        break;
      case 'leftAlign':
        setLeftAlignCount((prevCount) => prevCount + 1);
        break;
      case 'centerAlign':
        setCenterAlignCount((prevCount) => prevCount + 1);
        break;
      case 'rightAlign':
        setRightAlignCount((prevCount) => prevCount + 1);
        break;
      default:
        break;
    }
  };

  return (
    <main>
      <div>
        <a href="https://hotosm.org" target="_blank" rel="noreferrer">
          <img src={hotLogo} className="logo" alt="HOT Logo" />
        </a>
      </div>

      <h2>HOTOSM UI React Example</h2>

      <hot-toolbar
        tooltipPosition="bottom"
        onundo={() => { incrementCounter('undo'); }}
        onredo={() => { incrementCounter('redo'); }}
        onbold={() => { incrementCounter('bold'); }}
        onitalic={() => { incrementCounter('italic'); }}
        onunderline={() => { incrementCounter('underline'); }}
        onleftalign={() => { incrementCounter('leftAlign'); }}
        oncenteralign={() => { incrementCounter('centerAlign'); }}
        onrightalign={() => { incrementCounter('rightAlign'); }}
      ></hot-toolbar>

      <p>Undo: {undoCount}</p>
      <p>Redo: {redoCount}</p>
      <p>Bold: {boldCount}</p>
      <p>Italic: {italicCount}</p>
      <p>Underline: {underlineCount}</p>
      <p>Justify Left: {leftAlignCount}</p>
      <p>Justify Center: {centerAlignCount}</p>
      <p>Justify Right: {rightAlignCount}</p>
    </main>
  );
};

export default App;
