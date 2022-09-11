import React from 'react';
import './App.css';
import Window from './Window';

function App() {

  function reload(event) {
    if (event.key === 'a' || event.key === 'A')
    window.location.reload();
  }

  return (
    <>
    <div onKeyPress={reload}>
      <Window />
    </div>
    </>
  );
}

export default App;
