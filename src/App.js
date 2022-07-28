import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Router from './router/Router';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </div>
  );
}

export default App;
