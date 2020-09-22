import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Styles
import './App.css';

// Components
import Routes from './components/Routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
