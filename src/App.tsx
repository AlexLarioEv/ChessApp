import React, {useEffect, useState} from 'react';
import BordComponent from './components/Board';
import { Board } from './moduls/Board';

import "./App.css"
const App = () => {

  const [board, setBoard] = useState(new Board())
  
    useEffect(()=>{
      restart()
    },[])


  function restart (){
    const newBord = new Board()
    newBord.initCells()
    setBoard(newBord)
  }

  return (
    <div className='app'>
      <BordComponent board={board} setBoard={setBoard}></BordComponent>
    </div>
  );
};

export default App;
