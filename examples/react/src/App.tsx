import { useState } from 'react';
import { Toolbar, Button, Header, Logo} from '@hotosm/ui/components/react';

const App = () => {
  const [count, setCount] = useState({});

  const incrementCounter = (type: string) => {
    setCount({
      ...count,
      [type]: count[type] ? count[type] + 1 : 1
    })
  };

  const twoTab = [
    {
      label: 'GO TO HEADER PAGE',
      clickEvent: async () => {}
    },
    {
      label: 'GO TO TRACKING PAGE',
      clickEvent: async () => {}
    }
  ];

  localStorage.removeItem(`1234-matomo-agree`);

  return (
    <main>

      <h2>Logo</h2>

      <Logo />

      <h2>Header</h2>

      <Header
        drawer
        tabs={twoTab}
      />

      <h2>Button</h2>

      <Button variant="default">Default</Button>&nbsp;
      <Button variant="success">Success</Button>&nbsp;
      <Button variant="danger">Danger</Button>

      <h2>Toolbar</h2>

      <Toolbar
        tooltipPosition="bottom"
        onUndoClick={() => { incrementCounter('undo'); }}
        onRedoClick={() => { incrementCounter('redo'); }}
        onBoldClick={() => { incrementCounter('bold'); }}
        onItalicClick={() => { incrementCounter('italic'); }}
        onUnderlineClick={() => { incrementCounter('underline'); }}
        onLeftalignClick={() => { incrementCounter('justifyLeft'); }}
        onCenteralignClick={() => { incrementCounter('justifyCenter'); }}
        onRightalignClick={() => { incrementCounter('justifyRight'); }}
      />

      <ul>
      {
        Object.keys(count).map(value =>
            <li>{value} : {count[value]}</li>
        )
      }
      </ul>

    </main>
  );
};

export default App;
