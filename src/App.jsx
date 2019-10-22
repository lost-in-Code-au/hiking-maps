import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing.jsx'
import { tsConstructorType } from '@babel/types';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Landing />
      </header>
    </div>
  );
}

export default App;
