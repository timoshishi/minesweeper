import React from 'react';
import './App.css';
import Table from './components/Table';
import Board from './gameMaker/Board';
function App() {
  const minesweeper = new Board(12);
  minesweeper.createBoard();

  return (
    <div className='App container'>
      <Table minesweeper={minesweeper} />
    </div>
  );
}

export default App;
