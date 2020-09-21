import React from 'react';

// Styles
import './App.css';

// Components
import GenreList from './components/GenreList';

import logo from './logo.svg';

const App: React.FC<any> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <GenreList foo="Hello World" />
      </header>
    </div>
  );
};

export default App;
