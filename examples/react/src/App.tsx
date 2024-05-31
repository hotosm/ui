import { useState } from 'react';
import hotLogo from '@hotosm/ui/theme/logo.png';
import Toolbar from '@hotosm/ui/react/Toolbar';

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

      <Toolbar
        tooltipPosition="bottom"
        onUndoClick={() => { incrementCounter('undo'); }}
        onRedoClick={() => { incrementCounter('redo'); }}
        onBoldClick={() => { incrementCounter('bold'); }}
        onItalicClick={() => { incrementCounter('italic'); }}
        onUnderlineClick={() => { incrementCounter('underline'); }}
        onLeftalignClick={() => { incrementCounter('leftAlign'); }}
        onCenteralignClick={() => { incrementCounter('centerAlign'); }}
        onRightalignClick={() => { incrementCounter('rightAlign'); }}
      />

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
