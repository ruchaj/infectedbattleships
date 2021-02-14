import './App.css';
import React, { useState } from 'react';
import Board from './Board';
import EndButton from './EndButton';
function App() {
  const [placing, setPlacing] = useState(true);
  const [editing, setEditing] = useState(true);
  const [turn, setTurn] = useState("Place your persons");
  const [board1, setBoard1] = useState(true);
  const [userShips, setUserShips] = useState(0);
  const [compShips, setCompShips] = useState(0);
    let board2;

  const handleClick = () => {   // method for button to stop placing positions
    setPlacing(false);
    setEditing(!editing);
    setTurn("Your turn");
  }

  const flip = () => {
    console.log(editing);    // flips editing turns so only one player can edit at a time
    setEditing(!editing);
    console.log(editing);

    
    //computerMove();
  }

  const setUShip = () => {
    setUserShips(userShips + 1);
  }

  const setCShip = () => {
    setCompShips(compShips + 1);
  }

  const computerMove = () => {
    if (editing === false) {
      console.log("computer move");
      setTurn("Computer's turn");
      let rand = Math.floor(Math.random() * 100);
      console.log(rand);
      board1.attack(rand);
    }else {
      setTurn("Your turn");
    }
  }

  // chooses the machine positions based on random values
  let machinePos = new Set();
  for (let y = 0; y < 25; y++){
    let rand = Math.random() * 100;
    machinePos.add(`${Math.floor(rand)}`);
  }
  
  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th className="Title" colSpan="3">Welcome to COVID Battle</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <th className="rowTitle">Your Board</th>
            <th className="rowTitle">Computer's Board</th>
          </tr>
          <tr className="tableRow">
            <th  colSpan="2" className="rowTitle">{turn}</th>
          </tr>
          <tr>
            <th className="rowTitle">Persons left {userShips}</th>
            <th className="rowTitle">Persons left {compShips}</th>
          </tr>
          <tr>
            <td className="board">
              <Board onRef={ref => (setBoard1(ref))} nrows={10} ncols={10} user={1} canEdit={editing} isPlacing={placing} flip={flip} numShip={setUShip} />  
            </td>
            <td className="board">
              <Board onRef={ref => (board2 = ref)} nrows={10} ncols={10} user={2} canEdit={!editing} isPlacing={false} flip={flip} numShip={setCShip} machinePos={machinePos}/>
            </td>
          </tr>
          <tr>
            {/* Button is being rendered only when user (Left Board) is placing and editing ie, the beginning */}
            {placing && editing && <button onClick={handleClick} className="setPosButton"> SET POSITION </button>}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

