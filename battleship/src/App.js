import './App.css';
import React, { useState } from 'react';
import Board from './Board';

function App() {
  const [placing, setPlacing] = useState(true);


  return (
    <div className="App">
      <Board nrows={10} ncols={10} locked={setPlacing} />
      <Board nrows={10} ncols={10} locked={!placing} />

    </div>
  );
}

export default App;

