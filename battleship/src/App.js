import './App.css';
import React, { useState } from 'react';
import Board from './Board';
import EndButton from './EndButton';
function App() {
  const [placing, setPlacing] = useState(true);


  return (
    <div className="App">
<<<<<<< HEAD
      <Board nrows={10} ncols={10} locked={setPlacing} />
      <Board nrows={10} ncols={10} locked={!placing} />

=======
      <Board nrows={10} ncols={10} />
      <Board nrows={10} ncols={10} />
      <EndButton b/>
>>>>>>> ce28d8e26f499cf023c121d5897f881945a0b311
    </div>
  );
}

export default App;

