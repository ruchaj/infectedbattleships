import './App.css';
import React, { useState } from 'react';
import Board from './Board';
import EndButton from './EndButton';
function App() {
  const [editing, setEditing] = useState(true);

  const handleClick = () => {
    setEditing(false);
  }

  return (
    <div className="App">
      <Board nrows={10} ncols={10} user={editing}/>
      <Board nrows={10} ncols={10} user={!editing}/>
      {/* <EndButton b/> */}
      {editing && <button onClick={handleClick}> SET POSITION </button>}
    </div>
  );
}

export default App;

