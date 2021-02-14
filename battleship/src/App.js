import './App.css';
import React, { useState } from 'react';
import Board from './Board';
import EndButton from './EndButton';
function App() {
  const [placing, setPlacing] = useState(true);


  return (
    <div className="App">
      <Board nrows={10} ncols={10} />
      <Board nrows={10} ncols={10} />
      <EndButton b/>
    </div>
  );
}

export default App;

