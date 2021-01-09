import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Table from './components/Table';
import Board from './gameMaker/Board';
function App() {
  return (
    <div className='App'>
      <Table />
    </div>
  );
}

export default App;
