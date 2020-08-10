import React from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongWords from './components/WrongWords';
import Word from './components/Word';

function App() {
  return (
    <>
    <Header />
    <div className="game-container">
      <Figure />
      <WrongWords />
      <Word />
    </div>
    </>
  );
}

export default App;
