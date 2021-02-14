import './App.css';
import React, { useState } from 'react';
import Board from './Board';
import EndButton from './EndButton';
function App() {
  const [placing, setPlacing] = useState(true);
  const [editing, setEditing] = useState(true);

  const [board1, setBoard1] = useState(true);
  let board2;

  const handleClick = () => {   // method for button to stop placing positions
    setPlacing(false);
    setEditing(!editing);
  }

  const flip = () => {
    console.log(editing);    // flips editing turns so only one player can edit at a time
    setEditing(!editing);
    console.log(editing);

    
    computerMove();
  }

  const computerMove = () => {
    if (editing === false) {
      console.log("computer move");
      let rand = Math.floor(Math.random() * 100);
      console.log(rand);
      board1.attack(rand);
    }
  }

  // chooses the machine positions based on random values as an array of arrays, (array of coordinates)
  let machinePos = new Set();
  for (let y = 0; y < 25; y++){
    let rand = Math.random() * 100;
    machinePos.add(`${Math.floor(rand)}`);
  }
  

  return (
    <div className="App">
      <Board onRef={ref => (setBoard1(ref))} nrows={10} ncols={10} user={1} canEdit={editing} isPlacing={placing} flip={flip} />  
      <Board onRef={ref => (board2 = ref)} nrows={10} ncols={10} user={2} canEdit={!editing} isPlacing={false} flip={flip} machinePos={machinePos}/> 
      {/* Button is being rendered only when user (Left Board) is placing and editing ie, the beginning */}
      {placing && editing && <button onClick={handleClick}> SET POSITION </button>}
    </div>
  );
}

export default App;

