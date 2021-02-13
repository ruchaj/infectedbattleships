import './App.css';
import React from 'react';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <Board nrows={10} ncols={10} />
    </div>
  );
}

export default App;

