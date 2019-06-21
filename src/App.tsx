import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MasterProfile } from './components/MasterProfile';
import config from './config.json'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Work in progress
        </p>
      </header>
      <MasterProfile userName={config.userName}/>
    </div>
  );
}

export default App;
