import './App.css';
import React from 'react';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <Board nrows={10} ncols={10} user={1}/>
      <Board nrows={10} ncols={10} user={2}/>

    </div>
  );
}

export default App;

