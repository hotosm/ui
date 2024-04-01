import hotLogo from './assets/hot_logo.png';
import { useState } from 'react';

import  HotButton from './HotButton';


const App = () => {
  const [counter, setCounter] = useState(0);

  const clickButton = () => {
    console.log('test')
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <main>
      <div>
        <a href="https://hotosm.org" target="_blank" rel="noreferrer">
          <img src={hotLogo} className="logo" alt="HOT Logo" />
        </a>
      </div>

      <h2>HOTOSM UI React Example</h2>

      <HotButton
        intent="secondary"
        onclick={clickButton}
      >Click Me</HotButton>

      <p>Counter: {counter}</p>
    </main>
  );
};

export default App;
