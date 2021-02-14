import './App.css';
import React, { useState } from 'react';
import Board from './Board';
import EndButton from './EndButton';
function App() {
  const [placing, setPlacing] = useState(true);
  const [editing, setEditing] = useState(true);

  const handleClick = () => {   // method for button to stop placing positions
    setPlacing(false);
    setEditing(!editing);
  }

  const flip = () => {    // flips editing turns so only one player can edit at a time
    setEditing(!editing);
  }

  // chooses the machine positions based on random values as an array of arrays, (array of coordinates)
  let machinePos = new Set();
  for (let y = 0; y < 25; y++){
    let rand = Math.random() * 100;
    machinePos.add(`${Math.floor(rand)}`);
  }
  

  return (
    <div className="App">
      <Board nrows={10} ncols={10} user={1} canEdit={editing} isPlacing={placing} flip={flip} />  
      <Board nrows={10} ncols={10} user={2} canEdit={!editing} isPlacing={false} flip={flip} machinePos={machinePos}/> 
      {/* <EndButton b/> */}
      {/* Button is being rendered only when user (Left Board) is placing and editing ie, the beginning */}
      {placing && editing && <button onClick={handleClick}> SET POSITION </button>}
    </div>
  );
}

export default App;

